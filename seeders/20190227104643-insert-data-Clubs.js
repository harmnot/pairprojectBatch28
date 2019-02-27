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
       club_name: "Los Zorros",
       adress: 'Jl.pondok indah',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       club_name: "Zaragoza",
       adress: 'Jl.Gatot',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       club_name: "Fox Hub",
       adress: 'Jl.niaga',
       createdAt: new Date(),
       updatedAt: new Date()
     }

   ]
   return queryInterface.bulkInsert("Clubs", obj)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Clubs', null, {});
  }
};
