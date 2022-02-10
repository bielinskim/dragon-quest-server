import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';

const Quest = sequelize.define('quests', {
    questId: {
        primaryKey: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      time: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      slots: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
});

export default Quest;