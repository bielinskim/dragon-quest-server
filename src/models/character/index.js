import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';
import getCharacters from './operations';
import associate from "./associate";

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
      imageId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
},
{
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_polish_ci'
});

Character.getCharacters = getCharacters;
Character.associate = associate;

export default Character;