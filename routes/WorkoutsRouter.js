const router = require('express').Router()
const controller = require('../controllers/WorkoutsController')
const middleware = require('../middleware')

router.get('/Workouts', controller.GetWorkouts)

router.post(
  '/Workouts',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWorkout
)

module.exports = router
