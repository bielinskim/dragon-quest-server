import sequelize from "../../../sequelize";
import CryptoJS from 'crypto-js';
import UniqueConstraintError from '../../../errors/UniqueConstraintError';

const registerUser = async ({login, password}) => {
    const { users } = sequelize.models;
    let user = {};

    const [data, created] = await users.findOrCreate({
        where: {
            login
        },
        defaults: {
            password: CryptoJS.SHA256(password).toString()
        }
    });

    if(created) {
        user = data;
    } else {
        throw new UniqueConstraintError('Login zajęty');
    }

    return user;
}

export default registerUser;