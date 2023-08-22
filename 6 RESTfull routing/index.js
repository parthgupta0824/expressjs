const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs') // to use ejs 
app.set('views', path.join(__dirname, 'views')) //  to sert the path of views folder


app.use(express.static(path.join(__dirname, 'public'))) /// for using static files 
app.use(express.urlencoded({ extended: true })); // miiddle ware to get the data through post request 


const { v4: uuid } = require('uuid'); // to get the comment unique id 


const methodOverride = require('method-override') // use to overreide the methord our browes can send only get and post request
app.use(methodOverride('_method')) // middle ware to use methordoverrider

app.get('/', (req, res) => {
    // res.send('hello')
    res.render('index')
})
let comments = [ // array of data 
    {id: uuid(),name: "@user-ADVIC",comment: "this advik ka comment"},
    {id: uuid(),name: "@user-PARTH",comment: "this parth ka comment"},
    {id: uuid(),name: "@user-CHINTU",comment: "this chintu ka comment"}
]
// get the page to show all the commment 
app.get('/comment', (req, res) => {
    res.render('comment', { comments });
})
// get the page to add new comment
app.get('/comment/new', (req, res) => {
    res.render('newcomment');
})
// get updated page when we add new comment the for new comment
app.post('/comment', (req, res) => {
    let f = req.body.newusername 
    f = "@user-" + f;
    comments.push({
        id: uuid(),
        name: f,
        comment: req.body.newcomment
    })
    res.redirect('/comment') // by the get request
})
// to get the specific comment thorough the comment id 
app.get('/comment/:commentid', (req, res) => {
    const { commentid } = req.params
    const foundcomment = comments.find((comment) => comment.id === (commentid))
    res.render('displaycomment', { foundcomment })
})
// this will go to edit the comment page
app.get('/comment/:commentid/edit', (req, res) => {
    const { commentid } = req.params
    const foundcomment = comments.find((comment) => comment.id === (commentid))
    res.render('editcomment', { foundcomment })
})
// to will edit the comment
app.patch('/comment/:commentid', (req, res) => {
    const edited_comment = req.body.text
    const { commentid } = req.params
    const foundcomment = comments.find((comment) => comment.id === (commentid))
    foundcomment.comment = edited_comment;
    res.redirect('/comment')
})
// to delete the comment
app.delete('/comment/:commentid',(req,res)=>{
    const {commentid} = req.params
    let newarray = comments.filter((comment) => comment.id !== commentid) 
    comments = newarray
    res.redirect('/comment')
}) 
app.listen(3007, () => {
    console.log('server started');
})