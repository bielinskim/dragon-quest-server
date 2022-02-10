import sequelize from "../../sequelize";

const Character = sequelize.define('characters', {
    characterId: {
        primaryKey: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      imageId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
});

export default Character;