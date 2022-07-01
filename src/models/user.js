const User = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			primaryKey: true,
			autoIncrement: true,
		},
		fullName: DataTypes.STRING,
		email: DataTypes.STRING,
	});

	return User;
};

module.exports = User;