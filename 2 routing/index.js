const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("<h1>home page</h1>")
})


app.get('/parth', (req, res) => {
    res.send("<h1>The boss outside the house</h1>")
})


app.get('/chintu', (req, res) => {
    res.send("<h1>The boss inside the house </h1>")
})

app.get('*',(request,response)=>{
    response.send('<h1>you have click on invalid path sorry :) </h1>')

})

app.listen(3002, () => {
    console.log('Server created successfully :)')
})