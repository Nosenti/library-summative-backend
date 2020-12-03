'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books',[
      {
        name:'Catch in the Rye',
        status:'available',
        createdAt : new Date(),
        updatedAt : new Date()
      },
       {
        name:'Catch in the Rye',
        status:'available',
        createdAt : new Date(),
        updatedAt : new Date()
      },
       {
        name:'Catch in the Rye',
        status:'available',
        createdAt : new Date(),
        updatedAt : new Date()
      },
       {
        name:'Catch in the Rye',
        status:'available',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
