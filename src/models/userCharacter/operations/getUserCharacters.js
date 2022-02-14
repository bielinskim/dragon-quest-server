import sequelize from "../../../sequelize";

const getUserCharacters = async (req) => {

    const { usersCharacters, characters, users } = sequelize.models;
    const { token } = req.headers;

        const data = await usersCharacters.findAll({
            include: [{
                model: users,
                where: {
                    token
                },
                attributes: [],
            },
            {
                model: characters,
            }]
        });

    return data;
}

export default getUserCharacters;