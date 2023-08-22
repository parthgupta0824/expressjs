const express = require('express')

const app = express()

console.log(app)

app.use((req,res)=>{
    // console.log(req)
    // console.log(res)
    // console.log('Request make successfully :)')
    // res.send("you make a request successfully")
    res.send('<h1>this is response whichni   send to you</h1>')
})

app.listen(3001, () => {
    console.log('Server created successfully :)')
})


