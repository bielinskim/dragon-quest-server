module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('userQuestsUserCharacters', {
   userQuestsUserCharactersId: {
     primaryKey: true,
     type: Sequelize.INTEGER(10).UNSIGNED,
     autoIncrement: true,
   },
   userQuestId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    references: {
      model: 'usersQuests',
      key: 'userQuestId'
    },
    allowNull: false
  },
  userCharacterId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    references: {
      model: 'usersCharacters',
      key: 'userCharacterId'
    },
    allowNull: false
  },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('userQuestsUserCharacters'),
 };
 