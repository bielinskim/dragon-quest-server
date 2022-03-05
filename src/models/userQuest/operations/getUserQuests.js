import sequelize from "../../../sequelize";
import  { Op } from 'sequelize';
import questStatuses from "../../../utils/questStatuses";
import getLevel from "../../../utils/getLevel";


const { ACTIVE, PENDING, DONE, FAILED } = questStatuses;


const getQuestsToCheck = async  (req) => {
    const { usersQuests, users, quests, usersCharacters } = sequelize.models;
    const { token } = req.headers;

    const questsToCheck = await usersQuests.findAll({
        attributes: ['userQuestId', 'status', 'startDate'],
        where:  {
            status: PENDING,
        },
        include: [{
            model: users,
            where: {
                token
            },
            attributes: [],
        },
        {
            model: quests,
        },
        {
            model: usersCharacters,
        }
    ]
    });

    return questsToCheck;
}

const getChance = (usersCharacters, level, slots) => {
    let successChance = 0;

    for (let i = 0; i < usersCharacters.length; i++) {
        const userCharacter = usersCharacters[i];
        const { experience } = userCharacter;

        const characterLevel = getLevel(experience);

        let characterSuccessChance = 90;

        if(level > characterLevel) {
            const difference = level - characterLevel;
            characterSuccessChance -= difference;
        }

        if(level < level) {
            characterSuccessChance = 100;
        }

        successChance += characterSuccessChance / slots
        
    }

    return successChance;

}

const getMsFromHours = hours => {
    return hours * 3600000;
}


const updateQuests = async (req) => {
    const { usersQuests, usersCharacters: usersCharactersModel } = sequelize.models;
    const questsToCheck = await getQuestsToCheck(req);

    for (let i = 0; i < questsToCheck.length; i++) {
        const questToCheck = questsToCheck[i].get({plain:true});
        const { usersCharacters, quest, startDate, userQuestId } = questToCheck;
        const { time, level, slots, experience } = quest;

        const endTime = startDate.getTime() + getMsFromHours(time);
        const now = new Date().getTime();

        if(endTime < now) {
            const chance = getChance(usersCharacters, level, slots);

            const isWin = (Math.random() * 100) < chance;

            const status = isWin ? DONE : FAILED;

            await usersQuests.update({ status }, {
                where: {
                    userQuestId
                },
            });

            if(status === DONE) {
                for (let i = 0; i < usersCharacters.length; i++) {
                    const userCharacter = usersCharacters[i];
                    const { userCharacterId, experience: characterExperience } = userCharacter;
                    
                    await usersCharactersModel.update({ experience: characterExperience + experience }, {
                        where: {
                            userCharacterId
                        },
                    });
                }
            }
        }
        
    }
}

const getUserQuests = async (req) => {
    const { usersQuests, users, quests } = sequelize.models;
    const { token } = req.headers;

    if (!token) {
        throw new BadRequestError('Użytkownik nie może wykonać danej akcji');
    }

    await updateQuests(req);

    const data = await usersQuests.findAll({
        attributes: ['userQuestId', 'status', 'startDate'],
        where:  {
            [Op.or]: [
                { status: ACTIVE },
                { status: PENDING },
                { status: DONE },
                { status: FAILED }
            ]
        },
        include: [{
            model: users,
            where: {
                token
            },
            attributes: [],
        },
        {
            model: quests,
        }]
    });

    return data;
}

export default getUserQuests;