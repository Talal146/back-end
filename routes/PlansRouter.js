const router = require('express').Router()
const controller = require('../controllers/plansCtrl')
const middleware = require('../middleware')

// router.get('/plans', controller.GetPlans)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createPlan
)

module.exports = router
