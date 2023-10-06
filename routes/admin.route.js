const express = require('express')
const { insertData, admin } = require('../controllers/admin.controller')

const route = express.Router()

route.get('/', admin)
route.post('/insert-data', insertData)

module.exports = route