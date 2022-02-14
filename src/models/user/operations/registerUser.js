import sequelize from "../../../sequelize";
import CryptoJS from 'crypto-js';
import UniqueConstraintError from '../../../errors/UniqueConstraintError';
import randomString from '../../../utils/randomString';

const registerUser = async ({ login, password }) => {
    const { users, usersCharacters, characters } = sequelize.models;

    try {

        const result = await sequelize.transaction(async (t) => {
            const user = (await users.create({
                login,
                password: CryptoJS.SHA256(password).toString(),
                token: CryptoJS.SHA256(`${randomString(4)}${login}`).toString()
            },
            {
                transaction: t
            }))
            .get({ plain: true });

            const character = await characters.findOne({
                where: {
                    name: 'Abu',
                }
            });

            await usersCharacters.create({
                userId: user.userId,
                characterId: character.characterId,
                experience: 0
            },
            {
                transaction: t
            });

            return user;
        });

        return result;

    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new UniqueConstraintError('Login zajęty');
        } else {
            throw new Error();
        }
    }

}

export default registerUser;