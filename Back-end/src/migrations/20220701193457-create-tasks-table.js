'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('Tasks', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING
			},
			status: {
				allowNull: false,
				type: Sequelize.STRING
			}
		});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Tasks');
	}
};
