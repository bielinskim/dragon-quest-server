import sequelize from "../../../sequelize";

const getUserCharacters = async (req) => {

    const { usersCharacters, characters, users } = sequelize.models;
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
            }]
        });

    return data;
}

export default getUserCharacters;