
const Circles = require('./circle')
const circles =new Circles
console.log(circles.area(5))
console.log(circles.circumferance(5))



// ==================================object destructring======

// const {area,circumferance}= require('./circle')

// console.log(area(5))
// console.log(circumferance(5))

// ==================================object destructring=======



// const http = require("http")

// const server =http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'Hello World!'
//       }));
// });

// server.listen(3000,()=>{console.log('server running')})