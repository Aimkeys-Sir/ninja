const http = require('http')
const https = require("https")
const apiServer = require('./app')
const httpServer = http.createServer(apiServer)



const PORT = 4000

async function startServer() {

    httpServer.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT || PORT}`)
    })
}


startServer()