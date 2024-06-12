const router = require('express').Router()
// const controller = require('../controllers/WorkoutsController')
const middleware = require('../middleware')

// router.get('/workouts', controller.GetWorkouts)

router.post(
  '/workouts',
  middleware.stripToken,
  middleware.verifyToken
  // controller.CreateWorkout
)

module.exports = router
