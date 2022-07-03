const User = require('../models');

const create = async (name, password) => {
	const { insertId } = await User.create({ name, password });

	return insertId;
};

module.exports = {
	create
};