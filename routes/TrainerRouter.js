const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)

module.exports = router