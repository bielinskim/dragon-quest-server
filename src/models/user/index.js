import sequelize from "../../sequelize";
import { DataTypes } from 'sequelize';
import associate from "./associate";
import registerUser from "./operations/registerUser";
import loginUser from "./operations/loginUser";

const User = sequelize.define('users', {
    userId: {
        primaryKey: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastQuestDraw: {
        type: DataTypes.DATE,
        allowNull: true,
       },
},
{
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_polish_ci'
});

User.associate = associate;
User.registerUser = registerUser;
User.loginUser = loginUser;

export default User;