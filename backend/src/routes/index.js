const express = require('express')
const authController = require('../controllers/authController')

const Router = express.Router()

// Public Routes
Router.post('/register', authController.createUser)

Router.post('/auth/user', authController.loginUser)

// Private Routes
Router.get(
    '/auth/user',
    authController.validateToken,
    authController.getOneUser,
)

Router.put('/auth/user', authController.updateUser)

module.exports = Router
