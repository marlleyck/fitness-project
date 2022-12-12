require('dotenv').config()

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    const { name, email, password, confirmPassword, exercises } = req.body

    // Validations
    if (!name) {
        return res.status(400).send({ error: 'Name is required!' })
    }

    if (!email) {
        return res.status(400).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(400).send({ error: 'Password is required!' })
    }

    if (!exercises) {
        return res.status(400).send({ error: 'Exercises is required!' })
    }

    if (password !== confirmPassword) {
        return res.status(400).send({ error: 'Passwords do not match!' })
    }

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashPassword,
        exercises
    })

    return res.status(201).send({ msg: 'User created!', user})
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    // Validations
    if (!email) {
        return res.status(400).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(400).send({ error: 'Password is required!' })
    }

    const user = await User.findOne({
        where: {
            email: email
        }
    })

    if (!user) {
        return res.status(404).send({ error: 'Email is not exists!' })
    }

    // Check if passwords match
    const checkPasword = await bcrypt.compare(password, user.password)

    if (!checkPasword) {
        return res.status(422).send({ error: 'Invalid password!' })
    }

    // Create token
    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user.id
        }, secret)

        return res.status(200).send({ user_id: user.id, token })
    } catch(e) {
        return res.status(500).send({ error: 'Server error!' })
    }

}

exports.getUsers = async (req, res) => {
    const users = await User.findAll()

    return res.status(200).send({ users })
}

exports.getOneUser = async (req, res) => {
    const { id } = req.tokenDecoded

    const user = await User.findOne({
        where: {
            id: id
        }
    })

    return res.status(200).send({ user })
}

// Function Validate Token
exports.validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).send({ error: 'Access denied!' })
    }

    try {
        const secret = process.env.SECRET
        const responseToken = jwt.verify(token, secret)
        req.tokenDecoded = responseToken

        next()
    } catch(e) {
        return res.status(400).send({ error: 'Invalid token!' })
    }
}
