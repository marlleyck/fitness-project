const { DataTypes } = require('sequelize')
const db = require('../database')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exercises: {
        type: DataTypes.JSON,
        allowNull: true,
    },
})

module.exports = User
