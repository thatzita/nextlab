// const movieObj = require("./movielistJSON.json");

function removeMovie(name, fs){
    // let oldMovieList = movieObj;
    let datan = fs.readFileSync("./api/movielistJSON.json", "utf8");
    console.log(datan)
    let datanObj = JSON.parse(datan)
    let filteredMovieList = datanObj.filter(function(data) {
        return data.name !== name;
    })
    return filteredMovieList
}

module.exports = { removeMovie }
