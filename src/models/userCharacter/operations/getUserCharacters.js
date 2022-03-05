import sequelize from "../../../sequelize";
import questStatuses from "../../../utils/questStatuses";

const { PENDING  } = questStatuses;

const getUserCharacters = async (req) => {

    const { usersCharacters, characters, users, usersQuests, quests } = sequelize.models;
    const { token } = req.headers;

    if (!token) {
        throw new BadRequestError('Użytkownik nie może wykonać danej akcji');
    }

        const data = await usersCharacters.findAll({
            attributes: ['userCharacterId', 'experience'],
            include: [{
                model: users,
                where: {
                    token
                },
                attributes: [],
            },
            {
                model: characters,
            },
            {
                model: usersQuests,
                attributes: ['userQuestId', 'status'],
                where: {
                    status: PENDING
                },
                through: {
                    attributes: []
                }
            }]
        },
       );

    return data;
}

export default getUserCharacters;