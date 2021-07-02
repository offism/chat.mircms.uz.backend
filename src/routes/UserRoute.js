const router = require('express').Router()

const UserController = require('../controllers/UserController.js')

router.post('/login' , UserController.UserPostLoginController)
router.post('/sign_up' , UserController.UserPostLoginController)

module.exports = {
	router,
	path:'/users'
}