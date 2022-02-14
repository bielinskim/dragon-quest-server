module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert('characters', [
  { name: "Abu", imageId: 1},
  {name: "Praveen", imageId: 2},
  {name: "Sathya", imageId: 3},
  {name: "Ailen", imageId: 4}
]),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('characters', null, {}),
 };
 