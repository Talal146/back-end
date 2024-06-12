const router = require('express').Router()
const controller = require('../controllers/PlansController')
const middleware = require('../middleware')

router.get('/Plans', controller.GetPlans)

router.post(
  '/Plans',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWorkout
)

module.exports = router
