const db = require('../models');

const findOne = async (name) => {
	const user = await db.User.findOne({ where: { name }});

	return user;
};

const findAll = async () => {
	const users = await db.User.findAll();

	return users;
};

const create = async (name, password) => {
	const { id } = await db.User.create({ name, password });

	return id;
};

module.exports = {
	create,
	findOne,
	findAll
};