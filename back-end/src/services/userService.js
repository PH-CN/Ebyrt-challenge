const db = require('../models');

const create = async (name, password) => {
	const { id } = await db.User.create({ name, password });

	return id;
};

module.exports = {
	create
};