'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
		{
			name: 'Catch in the Rye',
			status: 'available',
			Book_id:2,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			name: 'Catch in the Rye',
			status: 'panding',
			Book_id:4,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			name: 'Catch in the Rye',
			status: 'borrowed',
			Book_id:6,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			name: 'Catch in the Rye',
			status: 'available',
			Book_id:8,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			name: 'Catch in the Rye',
			status: 'available',
			Book_id:9,
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
