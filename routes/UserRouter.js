const router = require('express').Router()
const controller = require('../controllers/userCtrl')
const middleware = require('../middleware')

router.post('/register', controller.register)

module.exports = router
