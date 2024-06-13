const router = require('express').Router()
const middleware = require('../middleware')
const workoutCtrl = require('../controllers/workoutCtrl')

router.get('/', workoutCtrl.index)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.create 
)
router.delete(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.delete
)

module.exports = router