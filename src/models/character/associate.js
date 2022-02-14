import sequelize from "../../sequelize";

const associate = () => {
    const { users, characters, usersCharacters } = sequelize.models;

    characters.belongsToMany(users, {
        through: usersCharacters,
        foreignKey: 'characterId'
    });

}

export default associate;