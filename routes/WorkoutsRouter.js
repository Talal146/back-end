const router = require('express').Router();
const middleware = require('../middleware');
const workoutsCtrl = require('../controllers/workoutsCtrl');

router.get('/', workoutsCtrl.getAllWorkouts);

router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.createOneWorkout
);
router.get('/:workoutId', workoutsCtrl.getOneWorkout);
router.put(
	'/:workout_id',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.updateOneWorkout
);
router.delete(
	'/:workout_id',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.deleteOneWorkout
);

router.get('/:workoutId/reviews', workoutsCtrl.getAllReviews);
router.post(
	'/:workout_id/reviews',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.createOneReview
);
router.put(
	'/reviews/:review_id',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.updateOneReview
);
router.delete(
	'/reviews/:review_id',
	middleware.stripToken,
	middleware.verifyToken,
	workoutsCtrl.deleteOneReview
);
module.exports = router;
