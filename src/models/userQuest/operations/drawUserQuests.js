import sequelize from "../../../sequelize";
import  { Op } from 'sequelize';
import getLevel from '../../../utils/getLevel';
import questStatuses from '../../../utils/questStatuses';
import getRandomInt from "../../../utils/getRandomInt";

const drawUserQuests = async userId => {
    const { characters, usersCharacters, quests, usersQuests, users } = sequelize.models;
    const { ACTIVE, DONE, FAILED, INACTIVE } = questStatuses;

    await usersQuests.update({ status: INACTIVE }, {
        where: {
            [Op.or]: [
                { status: ACTIVE },
                { status: DONE },
                { status: FAILED }
              ],
            userId
        },
    });

        // pobranie postaci gracza
        const userCharactersEntries = await usersCharacters.findAll({
            where: {
                userId
            },
            include: {
                model: characters,
            }
        });

        const levelRanges = [];
        
        // przygotowanie przedzialow levelowych dla zadan na podstawie leveli postaci gracza
        for (let i = 0; i < userCharactersEntries.length; i++) {
            const { experience }  = userCharactersEntries[i].get({plain:true});
            const level = getLevel(experience);
            const levelRange = {[Op.between]: [level - 1, level + 1]};
            levelRanges.push(levelRange);
            
        }

        // pobranie zadan w danych przedzialach levelowych
        const questsInLevelsRange = await quests.findAll({
            attributes: ['questId'],
            where: {
                level: {
                    [Op.or]: levelRanges, 
                }
            },
        });


        const userQuestsToCreate = [];
        const questsPerCharacter = 2;
        const min = 0;
        const max = questsInLevelsRange.length - 1;
        const status = 'ACTIVE';

        // wylosowanie i przygotowanie do zapisu zadan
        for (let i = 0; i < userCharactersEntries.length; i++) {
           for (let j = 0; j < questsPerCharacter; j++) {
                const drawnQuestIndex = getRandomInt(min, max);
                const { questId } = questsInLevelsRange[drawnQuestIndex].get({plain:true});

                userQuestsToCreate.push({ userId, questId, status});
               
           }
        }

        console.log(`Drawn quests: ${userQuestsToCreate}`);

        await sequelize.transaction(async (t) => {

            // zapis zadan w bazie
            await usersQuests.bulkCreate(userQuestsToCreate,  {
                transaction: t
            });

            // ustawienie daty ostatniego logowania zadan
            await users.update({ lastQuestDraw: Date.now() }, {
                where: {
                    userId
                },
                transaction: t,
            });
        });

}

export default drawUserQuests;