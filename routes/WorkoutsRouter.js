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
router.put(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.updateWorkout
)
router.delete(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.delete
)

router.post(
  '/:workout_id/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.createReview
)
router.get('/reviews/:review_id', workoutCtrl.getReview)
router.put(
  '/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.updateReview
)
router.delete(
  '/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.deleteReview
)

module.exports = router
