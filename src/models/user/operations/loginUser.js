import sequelize from "../../../sequelize";
import CryptoJS from 'crypto-js';
import BadRequestError from '../../../errors/BadRequestError';
import drawUserQuests from "../../userQuest/operations/drawUserQuests";

const loginUser = async ({ login, password }) => {
    const { users } = sequelize.models;

    const user = await users.findOne({
        where: {
            login,
            password: CryptoJS.SHA256(password).toString()
        }
    });

    if (user === null) {
        throw new BadRequestError('Niepoprawne dane logowania');
    }

    const { userId, lastQuestDraw } = user;
    const now = new Date();

    // porownanie dnia ostaniego logowania z dzisiejszym, jesli inny niz dzisiejszy - dobierz zadania
    if (lastQuestDraw?.getDate() !== now.getDate()) {
        await drawUserQuests(userId);
    }

    return user;
}

export default loginUser;