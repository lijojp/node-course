const express = require('express')
const bookRouter = express.Router()


bookRouter
.route('/book')
.get((req,res)=>{
    res.send("book")
})
.post((req,res)=>{
    res.json({data:'book is stored'})
})



bookRouter.get("/book/:id",(req,res)=>{
    // console.log(req.params.id)
    res.send(`book with id: ${req.params.id}`)
})

module.exports = bookRouter;