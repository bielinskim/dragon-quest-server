import sequelize from "../../sequelize";

const associate = () => {
    const { users, quests, usersQuests, userQuestsUserCharacters, usersCharacters } = sequelize.models;

    usersQuests.belongsTo(users, {foreignKey: 'userId'});
    usersQuests.belongsTo(quests, {foreignKey: 'questId'});

    usersQuests.belongsToMany(usersCharacters, {
        through: userQuestsUserCharacters,
        foreignKey: 'userQuestId',
    });

}

export default associate;