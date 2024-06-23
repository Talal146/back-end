const router = require('express').Router()
const controller = require('../controllers/reviewsCtrl')
const middleware = require('../middleware')

router.get('/workouts/reviews', controller.getReview)

router.put(
  '/workouts/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateReview
)
router.delete(
  '/workouts/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteReview
)

module.exports = router
