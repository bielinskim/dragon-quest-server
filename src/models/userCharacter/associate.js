import sequelize from "../../sequelize";

const associate = () => {
    const { users, characters, usersCharacters } = sequelize.models;

    usersCharacters.belongsTo(users, {foreignKey: 'userId'});
    usersCharacters.belongsTo(characters, {foreignKey: 'characterId'});

}

export default associate;