const express = require('express')
const next = require('next')
const fs = require("fs")

const movies = require("./api/movieFunction.js")
const deleteMovie = require("./api/deleteMovie.js")

let obj = require("./api/movielistJSON.json")
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
    let datan = fs.readFileSync('./api/movielistJSON.json', "utf8")

    res.setHeader('Content-Type', 'application/json');
    res.send(datan);
})

//fetching with querystring for certain movies
server.get('/api/movies', (req, res) => {

    let genre = req.query.genre;
    let rating = req.query.rating;
    let text = req.query.text;

    console.log("GET API MOVIES " + fs)
    console.log("texten är " + text)

    let filteredMovies = movies.queryMoviesInfo(genre, rating,text, fs);
    // console.log(filteredMovies);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filteredMovies));
})

//Add movie to list page - behövs denna??
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
           let newMovieList = JSON.parse(fs.readFileSync("./api/movielistJSON.json", "utf8"));

            newMovieList.push(JSON.parse(jsonString));

            fs.writeFile("./api/movielistJSON.json", JSON.stringify(newMovieList), () => {
                console.log("Done, movie added");
            })
            res.send(JSON.parse(jsonString))
        });
    }
})

//remove movie from db
server.get("/api/delete", (req, res) => {
    // console.log(req.url)
    let name = req.query.name;
    // console.log(name);

    let removeMovieFromFile = deleteMovie.removeMovie(name, fs);
    // console.log(removeMovieFromFile)


    fs.writeFile("./api/movielistJSON.json", JSON.stringify(removeMovieFromFile), () => {
        console.log("Removed from DB");
    })

    res.send("Removed from database");
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
