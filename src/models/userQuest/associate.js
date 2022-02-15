import sequelize from "../../sequelize";

const associate = () => {
    const { users, quests, usersQuests } = sequelize.models;

    usersQuests.belongsTo(users, {foreignKey: 'userId'});
    usersQuests.belongsTo(quests, {foreignKey: 'questId'});

}

export default associate;