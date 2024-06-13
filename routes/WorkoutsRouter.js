const router = require('express').Router()
const middleware = require('../middleware')
const wrokouts = require('../models/Workout')
const workoutCtrl = require('../controllers/workoutCtrl')

router.get('/', workoutCtrl.index)
router.get(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.new
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  workoutCtrl.create
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  ensureLoggedIn,
  workoutCtrl.delete
)

module.exports = router
