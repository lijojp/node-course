const http = require("http")
const fs = require('fs');
const { rejects } = require("assert");
const { resolveSoa } = require("dns");

const PORT = 4000;

const fun1 = ()=>(console.log('fun1'))
const fun2 = ()=>(console.log('fun2'))
const fun3 = ()=>(
    console.log('fun3'),
    setTimeout(fun1,0),
    new Promise((resolve,reject)=>{
        resolve('i am a promise')
    }).then((res)=>{
        console.log(res)
    }),
    fun2()
    )
    fun3()

const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile("page/home.html", 'utf8',(err,data)=>{
            console.log(data)
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':"text/html"})
        fs.readFile('page/about.html',(err,data)=>{
            if(err) throw err;
            res.write(data)
            res.end();
        })

    }
    else if(req.url === '/create-file'){
        res.writeHead(200,{'Content-Type':'text/html'})
        const data = "<h1>This is a test file</h1>"
        // fs.writeFile('temp/test.html',data,(err)=>{
        fs.appendFile('temp/test.html',data,(err)=>{
            if (err) throw err;
            res.write('file is created')
            res.end()
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        fs.readFile('page/404.html',(err,data)=>{
            if (err) throw err;
            res.write(data);        
            res.end();
        })
    }
   
});
server.listen(PORT,()=>{console.log('server running at http://localhost:',PORT)})
