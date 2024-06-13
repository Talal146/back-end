const router = require('express').Router()
const controller = require('../controllers/authController')
const middleware = require('../middleware')

router.post('/register', controller.register)

router.post('/login', controller.Login)

router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
