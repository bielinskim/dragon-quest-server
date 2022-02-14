module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('usersCharacters', {
   userCharacterId: {
     primaryKey: true,
     type: Sequelize.INTEGER(10).UNSIGNED,
     autoIncrement: true,
   },
   userId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    references: {
      model: 'users',
      key: 'userId'
    },
    allowNull: false
  },
  characterId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    references: {
      model: 'characters',
      key: 'characterId'
    },
    allowNull: false
  },
   experience: {
     type: Sequelize.INTEGER(10).UNSIGNED,
     allowNull: false,
   },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('usersCharacters'),
 };
 