import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';
import associate from "./associate";

const UserQuestUserCharacter = sequelize.define('userQuestsUserCharacters', {
    userQuestsUserCharactersId: {
      primaryKey: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      autoIncrement: true,
    },
    userQuestId: {
     type: DataTypes.INTEGER(10).UNSIGNED,
     allowNull: false
   },
   userCharacterId: {
     type: DataTypes.INTEGER(10).UNSIGNED,
     allowNull: false
   },
},
{
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_polish_ci'
});

UserQuestUserCharacter.associate = associate;

export default UserQuestUserCharacter;