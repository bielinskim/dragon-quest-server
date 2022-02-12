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
   },
   password: {
    type: Sequelize.STRING,
     allowNull: false,
   },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('users'),
 };
 