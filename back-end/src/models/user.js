const User = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, { 
		tableName: 'Users',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return User;
};

module.exports = User;