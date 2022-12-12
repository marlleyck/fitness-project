const express = require('express')
const authController = require('../controllers/authController')

const Router = express.Router()

// Public Routes
Router.post('/register', authController.createUser)

Router.post('/auth/user', authController.loginUser)

Router.get('/auth/user', authController.validateToken, authController.getOneUser)

Router.get('/users', authController.getUsers)

module.exports = Router