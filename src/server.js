const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const postgres = require('./modules/postgres.js')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const {PORT} = require('../config.js')

const server = http.createServer(app)

const io = new Server(server)

async function start(){
	server.listen(PORT)
	let db = await postgres()

    app.use(morgan('dev'))

    app.use(helmet())
    app.use(cors())
    app.use(express.urlencoded({ extended:true}))
    app.use(express.json())
 
    const routesPath = path.join(__dirname , 'routes')
   
    app.use((req, res , next)=>{
      req.db = db
      next()
    })

    const routesFiles = fs.readdir(routesPath , (err , files)=>{
        if(err) throw Error(err)
            files.forEach(file => { 
             const routePath = path.join(__dirname , 'routes' , file)
             const route = require(routePath)
             if(route.router && route.path){
                app.use(route.path , route.router)
             }
            })
    })    
}

start()