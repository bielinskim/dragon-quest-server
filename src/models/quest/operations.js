import sequelize from "../../sequelize";

const getQuests = async () => {
    const { quests } = sequelize.models;

    const data = await quests.findAll();

    return data;
}

export default getQuests;