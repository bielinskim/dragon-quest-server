import sequelize from "../../sequelize";

const associate = () => {
    const { users, characters, usersCharacters } = sequelize.models;

    users.belongsToMany(characters, {
        through: usersCharacters,
        foreignKey: 'userId',
    });

}

export default associate;