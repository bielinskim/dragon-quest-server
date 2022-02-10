module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('characters', {
   characterId: {
     primaryKey: true,
     type: Sequelize.INTEGER(10).UNSIGNED,
     autoIncrement: true,
   },
   name: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   experience: {
     type: Sequelize.INTEGER(10).UNSIGNED,
     allowNull: false,
   },
   imageId: {
     type: Sequelize.INTEGER(10).UNSIGNED,
     allowNull: false,
   },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('characters'),
 };
 