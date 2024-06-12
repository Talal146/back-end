const router = require('express').Router()
const controller = require('../controllers/PlansController')
const middleware = require('../middleware')

router.get('/plans', controller.GetPlans)

router.post(
  '/plans',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWorkout
)

module.exports = router
