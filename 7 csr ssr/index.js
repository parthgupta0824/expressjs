// it is out server


const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')))// auto index.html load 

app.use(express.urlencoded({ extended: true }));
const Todos = [
    'goto park', 'eat breakfast', 'goto office', 'enjoy the rest of your day'
]

app.get('/todos', (req, res) => { // it is our api as it is sending the data 
    if (req.xhr) { // for ajax request ---> csr
        res.json(Todos)
    }
    else { // for ssr
        res.render('todos', { Todos })
    }
})


app.post('/todos', (req, res) => {
    // good way 
    try {
        let data = req.body.todo
        if(data !== "")
        Todos.push(data)

        if (req.xhr) {
            res.status(200).json({ msg: "success" })
        }
        else {
            res.redirect('/todos')
        }
    }
    catch (error) {
        res.status(400).json({ msg: "unsuccess" })
        // console.log(error)
    }  
})
app.listen(3008, () => {
    console.log(`server started`)
})
