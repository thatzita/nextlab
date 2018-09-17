const movieObj = require("./movielistJSON.json");


function queryMoviesInfo(genre, rating, fs){
    if(genre !== undefined && rating !== undefined){
        return filterMoviesByGenreAndRating(genre, rating, fs);
    }else if(genre !== undefined && rating === undefined){
       return filterMoviesByGenre(genre, fs);
    }else if(genre === undefined && rating !== undefined){
        return filterMoviesByRating(rating,fs);
    }
}

function filterMoviesByGenreAndRating(genre, rating, fs){
    // console.log(genreList)
    let genreList = filterMoviesByGenre(genre, rating, fs);
    let filtered = [];

    genreList.forEach(function(data){
        if(data.rating >= rating){
            filtered.push(data);
        }
    });

    return filtered;
}

function filterMoviesByGenre(genre, rating, fs){

    // console.log(genre)
    let filtered = []
    let json = fs.readFileSync("./api/movielistJSON.json", "utf8");
    let obj = JSON.parse(json)

    obj.forEach(function(data){
        if(data.genre.length > 1){
            for(let i = 0; i < data.genre.length; i++){
                if(data.genre[i] == genre){
                    filtered.push(data);
                }
            }
        }else if(data.genre == genre){
            filtered.push(data);
        }
    })
    return filtered;
}

function filterMoviesByRating(rating, fs){
    // console.log(rating)
    let filtered = []
    let json = fs.readFileSync("./api/movielistJSON.json", "utf8");
    let obj = JSON.parse(json)

    obj.forEach(function(data){
        if(data.rating >= rating){
            filtered.push(data);
        }
    })
    return filtered;
}

module.exports = { queryMoviesInfo }
