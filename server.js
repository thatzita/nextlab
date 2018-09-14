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

//Initial fetch, get all movies
server.get('/api', (req, res) => {
    // console.log(req.url)
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
})

//fetching with querystring for certain movies
server.get('/api/movies', (req, res) => {

    let genre = req.query.genre;
    let rating = req.query.rating;
    let filteredMovies = movies.queryMoviesInfo(genre, rating);
    // console.log(filteredMovies);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filteredMovies));
})

//Add movie to list page
server.get('/addmovie', (req, res) => {
    // console.log(req.url);
    const page = "/addmovie";
    app.render(req,res,page)
})

server.post("/addmovie/newmovie", (req, res) => {
    if (req.method == 'POST') {
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            console.log(jsonString);
            obj.push(jsonString)
            res.send(JSON.parse(jsonString))
        });
    }
    
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
