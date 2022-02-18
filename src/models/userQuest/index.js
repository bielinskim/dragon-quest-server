import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';
import associate from "./associate";
import getUserQuests from "./operations/getUserQuests";
import startQuest from "./operations/startQuest";

const UserQuest = sequelize.define('usersQuests', {
    userQuestId: {
        primaryKey: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      questId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
     },
     startDate: {
      type: DataTypes.DATE,
      allowNull: true,
     },
},
{
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_polish_ci'
});

UserQuest.associate = associate;
UserQuest.getUserQuests = getUserQuests;
UserQuest.startQuest = startQuest;

export default UserQuest;