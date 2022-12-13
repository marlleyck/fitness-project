require('dotenv').config()

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Register User Function
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

    if (password !== confirmPassword) {
        return res.status(400).send({ error: 'Passwords do not match!' })
    }

    // Get user email
    const userEmail = await User.findOne({
        where: {
            email: email,
        },
    })

    // Check if email exists
    if (userEmail) {
        return res.status(400).send({ error: 'Email already exists!' })
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    // Create user
    try {
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            exercises: [],
        })

        return res.status(201).send({ msg: 'User created!', user })
    } catch (e) {
        return res.status(500).send({ error: 'Server error!' })
    }
}

// Login User Function
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
            email: email,
        },
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

        const token = jwt.sign(
            {
                id: user.id,
            },
            secret,
        )

        return res.status(200).send({ user_id: user.id, token })
    } catch (e) {
        return res.status(500).send({ error: 'Server error!' })
    }
}

// Get User Function
exports.getOneUser = async (req, res) => {
    const { id } = req.tokenDecoded

    // Get user
    const user = await User.findOne({
        where: {
            id: id,
        },
    })

    // Validations
    if (!user) {
        return res.status(404).send({ error: 'User not found!' })
    }

    return res.status(200).send({ user })
}

// Validate Token Function
exports.validateToken = (req, res, next) => {
    // Take header
    const authHeader = req.headers['authorization']
    // Take token
    const token = authHeader && authHeader.split(' ')[1]

    // Validations
    if (!token) {
        return res.status(401).send({ error: 'Access denied!' })
    }

    // Verify token
    try {
        const secret = process.env.SECRET
        const responseToken = jwt.verify(token, secret)
        // Add token decoded on req
        req.tokenDecoded = responseToken

        next()
    } catch (e) {
        return res.status(400).send({ error: 'Invalid token!' })
    }
}
