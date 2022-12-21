const express = require('express')
const router = express.Router()
const EventEmitter = require ('events')
const event = new EventEmitter

const bookRouter = require('./book')

let count = 1;
event.on("server called",()=>{
    console.log("called no.",count)
    count ++
})

router.get('/',(req,res)=>{
    res.send('hellow world')
    event.emit("server called")
})

router.use(('/book'),bookRouter);

router.all('/*',(req,res)=>{
    res.send("page not found...")
})

module.exports = router;