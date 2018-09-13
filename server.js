const express = require('express')
const next = require('next')
const fs = require("fs")

let obj = require("./api/movielist.js")
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = 3000

app.prepare()
.then(() => {
const server = express()

server.get('/api', (req, res) => {
    console.log(req.url)
    res.send("alot of information that we want to share with the world")    
})

server.get('/api/movies', (req, res) => {
    console.log(req.url)
    

    res.send(obj)
    
    // let list = "movielist.json"
    // res.send(JSON.stringify(obj))
    // fs.readFile(__dirname + "/api/"+ list, "utf8", function(err,data) {
    //     res.send(JSON.stringify(data));
    //     res.end(data);
    // })
})

server.get('/addmovie', (req, res) => {
    console.log(req.url);
    const page = "/addmovie";
    app.render(req,res,page)
})

server.get('*', (req, res) => {
    return handle(req, res)
})

server.listen(port, (err) => {
if (err) throw err
    console.log('> Ready on http://localhost:' + port)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})