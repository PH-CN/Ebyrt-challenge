const userService = require('../services/userService');

const create = async (req, res) => {
	try {
		const { name, password } = req.body;

		const id = await userService.create(name, password);

		return res.status(200).json({ id, name, password });
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	create
};