const express = require('express')

const db = require('./database')
const Routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Routes)

db.sync().then(() => {
    console.log('Successfully database connection!')
    app.listen(3000, () => console.log('Server is running...'))
})
