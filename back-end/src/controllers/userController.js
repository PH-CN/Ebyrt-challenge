const userService = require('../services/userService');

const findAll = async (_req, res) => {
	try {
		const users = await userService.findAll();

		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
	}
};

const create = async (req, res) => {
	try {
		const { name, password } = req.body;

		const user = await userService.findOne(name);

		if (user) {
			return res.status(400).json({message: 'User already exists'});
		}

		const id = await userService.create(name, password);

		return res.status(200).json({ id, name, password });
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	create,
	findAll
};