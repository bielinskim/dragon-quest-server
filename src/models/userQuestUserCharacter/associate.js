import sequelize from "../../sequelize";

const associate = () => {
    const { userQuestsUserCharacters, usersQuests, usersCharacters } = sequelize.models;

    userQuestsUserCharacters.belongsTo(usersQuests, {foreignKey: 'userQuestId'});
    userQuestsUserCharacters.belongsTo(usersCharacters, {foreignKey: 'userCharacterId'});

}

export default associate;