const User = require('../models/User')
const bcrypt = require('bcrypt')

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

exports.getUsers = async (req, res) => {
    const users = await User.findAll()

    return res.status(200).send({ users })
}

exports.getOneUser = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({
        where: {
            id: id
        }
    })

    return res.status(200).send({ user })
}