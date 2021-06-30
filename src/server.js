const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')

const {PORT} = require('../config.js')

const server = http.createServer(app)

const io = new Server(server)

async function start(){
server.listen(PORT)
}

start()