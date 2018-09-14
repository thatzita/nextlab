const movieObj = require("./movielistJSON.json");


function queryMoviesInfo(genre, rating){
    if(genre !== undefined && rating !== undefined){
        return filterMoviesByGenreAndRating(genre, rating);
    }else if(genre !== undefined && rating === undefined){
       return filterMoviesByGenre(genre);
    }else if(genre === undefined && rating !== undefined){
        return filterMoviesByRating(rating);
    }
}

function filterMoviesByGenreAndRating(genre, rating){
    // console.log(genreList)
    let genreList = filterMoviesByGenre(genre);
    let filtered = [];

    genreList.forEach(function(data){
        if(data.rating >= rating){
            filtered.push(data);
        }
    });

    return filtered;
}

function filterMoviesByGenre(genre, rating){
    
    // console.log(genre)
    let filtered = []    
    let obj = movieObj;
    

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

function filterMoviesByRating(rating){
    // console.log(rating)
    let filtered = []    
    let obj = movieObj;  

    obj.forEach(function(data){
        if(data.rating >= rating){
            filtered.push(data);
        }
    })
    return filtered;
}

module.exports = { queryMoviesInfo }