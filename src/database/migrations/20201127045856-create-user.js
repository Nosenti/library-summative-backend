'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			type: Sequelize.INTEGER,
		},
		first_name: {
			type: Sequelize.STRING,
		},
		last_name: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		password: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.ENUM('super_admin', 'student', 'librarian', 'facilitator'),
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};