import sequelize from "../../sequelize";

const associate = () => {
    const { users, characters, usersCharacters, quests, usersQuests } = sequelize.models;

    users.belongsToMany(characters, {
        through: usersCharacters,
        foreignKey: 'userId',
    });

    users.belongsToMany(quests, {
        through: usersQuests,
        foreignKey: 'userId',
    });

}

export default associate;