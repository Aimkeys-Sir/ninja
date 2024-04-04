const express = require('express')
const { httpCreateEntry } = require('./entry.controller')

const entryRouter = express.Router()

entryRouter.post("/", httpCreateEntry)

module.exports = entryRouter