const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb://localhost/eventslist'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, })
const db = mongoose.connection

db.on('open', ()=>{
    console.log("connected...")
})

app.use(express.json())

const eventRouter = require('./routes/events')
app.use('/events', eventRouter)

app.listen(3000, ()=>{
    console.log("server started")
})