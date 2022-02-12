import sequelize from "../../../sequelize";
import CryptoJS from 'crypto-js';
import BadRequestError from '../../../errors/BadRequestError';

const loginUser = async ({login, password}) => {
    const { users } = sequelize.models;

    const user = await users.findOne({
        where: {
            login,
            password: CryptoJS.SHA256(password).toString()
        }
    });

    if(user === null) {
        throw new BadRequestError('Niepoprawne dane logowania');
    }

    return user;
}

export default loginUser;