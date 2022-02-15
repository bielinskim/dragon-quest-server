import sequelize from "../../sequelize";

const associate = () => {
    const { quests, users, usersQuests } = sequelize.models;


    quests.belongsToMany(users, {
        through: usersQuests,
        foreignKey: 'questId',
    });

}

export default associate;