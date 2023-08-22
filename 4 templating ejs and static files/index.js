const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/index', (req, res) => {
    res.render('index.ejs')
})

app.get('/test', (req, res) => {
    const randomnumber = Math.floor(Math.random() * 100) + 1

    res.render('test.ejs', { randomnumber })
})

app.get('/parth', (req, res) => {
    res.send(`Parth's server :)`)
})

app.use(express.static(path.join(__dirname, 'public')))



app.get('*', (req, res) => {
    res.send(`*'s server :)`)
})

app.listen(3005, () => {
    console.log('server started successfully')
})