const userService = require('../services/userService');

const create = async (req, res) => {
	const { name, password } = req.body;

	const insertId = await userService.create(name, password);

	return res.status(200).json({ id: insertId, name, password });
};

module.exports = {
	create
};