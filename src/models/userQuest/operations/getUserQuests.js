import sequelize from "../../../sequelize";
import  { Op } from 'sequelize';
import questStatuses from "../../../utils/questStatuses";

const getUserQuests = async (req) => {
    const { usersQuests, quests, users } = sequelize.models;
    const { token } = req.headers;
    const { ACTIVE, PENDING, DONE, FAILED } = questStatuses;

    if (!token) {
        throw new BadRequestError('Użytkownik nie może wykonać danej akcji');
    }

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