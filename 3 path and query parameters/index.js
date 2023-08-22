// ------------------------------------------path parameters--------------------------------------------
// const express = require('express')
// const app = express()



// app.get('/',(req,resp)=>{
//     resp.send("<h1>Server connected successfully on 3003</h1>") 
// })

// app.get('/id/:ID',(req,res)=>{
//     const {ID} = req.params
//     // console.log(ID)
//     // console.log(`<h1>The page id is ${ID}</h1>`) 
//     res.send(`<h1>The page id is ${ID}</h1>`) 
// })



// app.listen(3003,()=>{
//     console.log("Server start successfully on 3003")
// })

// ------------------------------------------query parameters--------------------------------------------


const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>This is a welcome page</h1>`)
})

app.get('/search', (req, res) => {
    res.send(`This page is searching for Mr.${req.query.firstname}-${req.query.lastname}`)
})


app.listen(3004, () => {
    console.log("Server start successfully on 3004")
})
