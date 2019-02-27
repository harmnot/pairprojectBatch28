'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let obj = [
     {
       first_name: "Muhammad",
       last_name: "Here",
       gender: "Male",
       email: 'muhammad@mail.com',
       password: '123456789',
       role: 'Athlete',
       clubId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ]
   return queryInterface.bulkInsert("Players", obj)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Players", null, {});
  }
};
