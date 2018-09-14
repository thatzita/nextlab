const express = require('express')
const next = require('next')
const fs = require("fs")

const movies = require("./api/movieFunction.js")

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
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));

})

server.get('/api/movies', (req, res) => {
    let genre = req.query.genre;
    let filteredMovies = movies.filterMovies(genre);
    // console.log("query " + genre);
    // console.log(filteredMovies);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filteredMovies));

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
