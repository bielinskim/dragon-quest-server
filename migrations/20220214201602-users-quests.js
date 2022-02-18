module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('usersQuests', {
   userQuestId: {
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
   questId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    references: {
      model: 'quests',
      key: 'questId'
    },
    allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: true,
     },
     startDate: {
      type: Sequelize.DATE,
      allowNull: true,
     },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('usersQuests'),
 };
 