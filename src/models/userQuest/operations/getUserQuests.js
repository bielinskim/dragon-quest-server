import sequelize from "../../../sequelize";

const getUserQuests = async (req) => {
    const { usersQuests, quests, users } = sequelize.models;
    const { token } = req.headers;

        const data = await usersQuests.findAll({
            attributes: ['userQuestId'],
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