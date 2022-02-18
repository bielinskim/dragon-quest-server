import sequelize from "../../../sequelize";
import BadRequestError from '../../../errors/BadRequestError';
import questStatuses from '../../../utils/questStatuses';

const startQuest = async (req) => {
    const { usersQuests, userQuestsUserCharacters, users } = sequelize.models;
    const { token } = req.headers;
    const { userQuestId, userCharacterIds } = req.body;
    const { PENDING } = questStatuses;
    const data = req.body;


    if (!token) {
        throw new BadRequestError('Użytkownik nie może wykonać danej akcji');
    }

    const hasPermission = await users.findOne({
        where: {
            token,
        },
    });

    if (!hasPermission) {
        throw new BadRequestError('Użytkownik nie może wykonać danej akcji');
    }


    await sequelize.transaction(async (t) => {

        await usersQuests.update({
            startDate: Date.now(),
            status: PENDING
        }, {
            where: {
                userQuestId
            },
            transaction: t,
        });

        const userQuestsUserCharactersToCreate = userCharacterIds.map(userCharacterId =>{
            return {userCharacterId, userQuestId};
        });

        await userQuestsUserCharacters.bulkCreate(userQuestsUserCharactersToCreate, {
            transaction: t
        });

    });

    return data;
}

export default startQuest;