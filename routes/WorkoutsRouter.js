const router = require('express').Router()
const middleware = require('../middleware')
const workoutsCtrl = require('../controllers/workoutsCtrl')

router.get('/', workoutsCtrl.getWorkout)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.create
)
router.put(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.updateWorkout
)
router.delete(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.delete
)

router.post(
  '/:workout_id/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.createReview
)
router.get('/reviews/:review_id', workoutsCtrl.getReview)
router.put(
  '/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.updateReview
)
router.delete(
  '/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  workoutsCtrl.deleteReview
)

module.exports = router