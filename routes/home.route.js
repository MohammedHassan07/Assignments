const express = require('express')
const { getUsersData } = require('../controllers/home.controller.js')
const connection = require('../middlewares/connectToDB.js')
const route = express.Router()

route.use(connection)

route.get('/', getUsersData)

module.exports = route