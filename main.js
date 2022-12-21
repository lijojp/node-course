
// using express==================================================

const express = require ('express')
const app = express()
const port =3001;
const routes = require('./routes/index')

app.use(routes)


app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})