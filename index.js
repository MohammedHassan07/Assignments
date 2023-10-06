const express = require('express')
const dotenv = require('dotenv')
const homeRoute = require('./routes/home.route')
const adminRoute = require('./routes/admin.route.js')

dotenv.config({ path: './config/.env' })
const app = express()

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static('public'))


app.use(homeRoute)
app.use('/admin', adminRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at', PORT)
})
