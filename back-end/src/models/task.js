const Task = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		content: {
			type: DataTypes.STRING,
			AllowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			AllowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			AllowNull: false,
		}
	}, { tableName: 'Tasks' });

	return Task;
};

module.exports = Task;