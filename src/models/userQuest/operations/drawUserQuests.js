import sequelize from "../../../sequelize";
import  { Op } from 'sequelize';
import getLevel from '../../../utils/getLevel';

const drawUserQuests = async userId => {
    const { characters, usersCharacters, quests, usersQuests, users } = sequelize.models;

        const userCharactersEntries = await usersCharacters.findAll({
            where: {
                userId
            },
            include: {
                model: characters,
            }
        });

        const levelRanges = [];
        
        for (let i = 0; i < userCharactersEntries.length; i++) {
            const { experience }  = userCharactersEntries[i].get({plain:true});
            const level = getLevel(experience);
            const levelRange = {[Op.between]: [level - 1, level + 1]};
            levelRanges.push(levelRange);
            
        }

        const questsInLevelsRange = await quests.findAll({
            attributes: ['questId'],
            where: {
                level: {
                    [Op.or]: levelRanges, 
                }
            },
        });

        const userQuestsToCreate = [];

        for (let i = 0; i < questsInLevelsRange.length; i++) {
            const { questId } = questsInLevelsRange[i].get({plain:true});

            if(Math.random() > 0.2) {
                userQuestsToCreate.push({ userId, questId});
            }
        }

        console.log(`Drawn quests: ${userQuestsToCreate}`);

        

        await sequelize.transaction(async (t) => {

            await usersQuests.bulkCreate(userQuestsToCreate,  {
                transaction: t
            });

            await users.update({ lastQuestDraw: Date.now() }, {
                where: {
                    userId
                },
                transaction: t,
            });
        });

}

export default drawUserQuests;