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
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				field: 'user_id',
				references: {
					model: 'Users',
					key: 'id'
				},
				createdAt: {
					allowNull: false,
					field: 'created_at',
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: false,
					field: 'updated_at',
					type: Sequelize.DATE
				}
			}
		});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Tasks');
	}
};
