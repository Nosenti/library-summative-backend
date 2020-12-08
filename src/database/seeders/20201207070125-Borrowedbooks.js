'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Borrowedbooks', [
		{
			Book_id: '898',
			email: 'theoneste99@gmail.com',
			Date_to_returnBook: '1/1/1991',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			Book_id: '765',
			email: 'theoneste99@gmail.com',
			Date_to_returnBook: '1/1/1991',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	]);
    
 
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
