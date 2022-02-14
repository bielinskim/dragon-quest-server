import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';
import associate from "./associate";
import getUserCharacters from "./operations/getUserCharacters";

const UserCharacter = sequelize.define('usersCharacters', {
    userCharacterId: {
        primaryKey: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      characterId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
},
{
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_polish_ci'
});


UserCharacter.associate = associate;
UserCharacter.getUserCharacters = getUserCharacters;

export default UserCharacter;