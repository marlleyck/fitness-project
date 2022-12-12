const express = require('express')
const authController = require('../controllers/authController')

const Router = express.Router()

Router.post('/register', authController.createUser)

Router.get('/users', authController.getUsers)

module.exports = Router