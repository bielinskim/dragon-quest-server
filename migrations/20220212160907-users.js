module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
   userId: {
     primaryKey: true,
     type: Sequelize.INTEGER(10).UNSIGNED,
     autoIncrement: true,
   },
   login: {
     type: Sequelize.STRING,
     allowNull: false,
     unique: true,
   },
   password: {
    type: Sequelize.STRING,
     allowNull: false,
   },
   token: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   lastQuestDraw: {
    type: Sequelize.DATE,
    allowNull: true,
   },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('users'),
 };
 