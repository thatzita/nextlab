const movieObj = require("./movielistJSON.json");

function removeMovie(name){
    let oldMovieList = movieObj;

    let filteredMovieList = oldMovieList.filter(function(data) {
        return data.name !== name;
    })
    return filteredMovieList  
}

module.exports = { removeMovie }