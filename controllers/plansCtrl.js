const { Workout } = require('../models')
const { Plan } = require('../models')

const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({})
    res.send(plans)
  } catch (error) {
    throw error
  }
}

async function createPlan(req, res) {
  try {
    await Plan.create(req.body)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getPlan,
  createPlan
}
