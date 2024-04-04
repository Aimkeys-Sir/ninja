const express = require('express')
const { httpGetRandomQuote, httpPostQuotes } = require('./ussd.controller')

const quotesRouter = express.Router()

quotesRouter.get("/", httpGetRandomQuote)
quotesRouter.post("/", httpPostQuotes)

module.exports = quotesRouter