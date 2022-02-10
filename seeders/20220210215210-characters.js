module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert('characters', [
  { name: "Abu", experience: 0, imageId: 1},
  {name: "Praveen", experience: 1200, imageId: 2},
  {name: "Sathya", experience: 13999, imageId: 3},
  {name: "Ailen", experience: 38000, imageId: 4}
]),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('characters', null, {}),
 };
 