const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})
// const cors = require('cors')
const path = require('path')
const socketMain = require('./socketMain')


const app = express()

// middelwares
//cors enable
// app.use(cors())



// serve static file
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT

const server = app.listen(PORT,()=>console.log(`Server started on ${process.env.MODE} mode in port ${PORT}`))


const io = require('socket.io')(server)
// Use main socket.io
socketMain(io)
