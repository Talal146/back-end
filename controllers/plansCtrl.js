const { Workout } = require('../models');
const { Plan } = require('../models');

const getPlans = async (req, res) => {
	try {
		const plans = await Plan.find({})
			.populate('Day1')
			.populate('Day2')
			.populate('Day3')
			.populate('Day4')
			.populate('Day5')
			.populate('Day6')
			.populate('Day7');
		res.send(plans);
	} catch (error) {
		console.error('Error fetching plans:', error);
	}
};

async function createPlan(req, res) {
	try {
		await Plan.create(req.body);
		res.send(req.body);
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	getPlans,
	createPlan,
};
