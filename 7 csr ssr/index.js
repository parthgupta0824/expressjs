const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('view', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))





app.get('/', (req, res) => {
    res.send('you are at index.js CSR VS SSR page :)')
})


app.listen(3008, () => {
    console.log(`server started`)
})