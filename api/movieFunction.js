const movieObj = require("./movielist.js");


function filterMovies(genre){
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

module.exports = { filterMovies }