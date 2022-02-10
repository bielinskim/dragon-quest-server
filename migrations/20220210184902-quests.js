module.exports = {
 up: async (queryInterface, Sequelize) => queryInterface.createTable('quests', {
  questId: {
    primaryKey: true,
    type: Sequelize.INTEGER(10).UNSIGNED,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  level: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
  },
  experience: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
  },
  time: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
  },
  slots: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
 }),
 down: async (queryInterface, Sequelize) => queryInterface.dropTable('quests'),
};
