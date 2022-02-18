import sequelize from "../../sequelize";

const associate = () => {
    const { users, characters, usersCharacters, usersQuests, userQuestsUserCharacters } = sequelize.models;

    usersCharacters.belongsTo(users, {foreignKey: 'userId'});
    usersCharacters.belongsTo(characters, {foreignKey: 'characterId'});

    usersCharacters.belongsToMany(usersQuests, {
        through: userQuestsUserCharacters,
        foreignKey: 'userCharacterId',
    });

}

export default associate;