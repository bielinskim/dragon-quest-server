import sequelize from "../../sequelize";

const getCharacters = async () => {
    const { characters } = sequelize.models;

    const data = await characters.findAll();

    return data;
}

export default getCharacters;