const express = require('express')
const router = express.Router()
const EventEmitter = require ('events')
const event = new EventEmitter
const path = require('path')

const bookRouter = require('./book')
const authRouter = require("./auth")

// let count = 1;
// event.on("server called",()=>{
//     console.log("called no.",count)
//     count ++
// })

// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../page/home.html'));
//     // event.emit("server called")
// }) 
router.get('/',(req,res)=>{
    // res.render(path.join(__dirname,"../page/home"))
    res.render('index',{name:"lijo"})
})

router.use(('/book'),bookRouter);

router.use(("/auth"),authRouter)

router.all('/*',(req,res)=>{
    res.send("page not found...")
})

module.exports = router;