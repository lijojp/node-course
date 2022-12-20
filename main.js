
// using express==================================================

const express = require ('express')
const app = express()
const EventEmitter = require ('events')
const event = new EventEmitter
const port =3001;

let count = 1;
event.on("server called",()=>{
    console.log("called no.",count)
    count ++
})

app.get('/',(req,res)=>{
    res.send('hellow world')
    event.emit("server called")
})


app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})