const express = require('express')
const { httpUssdCallback } = require('./ussd.controller')

const ussdRouter = express.Router()

ussdRouter.post("/", httpUssdCallback)

module.exports = ussdRouter