const movieObj = require("./movielistJSON.json");


function queryMoviesInfo(genre, rating,text, fs){
  console.log("queryMoviesInfo " + text)

    if(genre === undefined && rating === undefined && text !== undefined){
      return filterMoviesByText(text,fs)
    }

    if(genre !== undefined && rating !== undefined ){

        return filterMoviesByGenreAndRating(genre, rating,text, fs);
    }else if(genre !== undefined && rating === undefined){
       return filterMoviesByGenre(genre,rating,text, fs);
    }else if(genre === undefined && rating !== undefined){
        console.log("rating")
        return filterMoviesByRating(genre,rating,text,fs);
    }else{

    }
}

function filterMoviesByText(text,fs){
  let filtered = []
  let json = fs.readFileSync("./api/movielistJSON.json", "utf8");
  let obj = JSON.parse(json)

  obj.forEach(data =>{

    let name = data.name.toUpperCase();
    let texten = text.toUpperCase();
      if(name.includes(texten)){
        filtered.push(data);
      }

  })

  return filtered;
}


function filterMoviesByGenreAndRating(genre, rating, text, fs){
  console.log("filterMoviesByGenreAndRating " + text)
    let genreList = filterMoviesByGenre(genre, rating,text, fs);
    let filtered = [];



    genreList.forEach(function(data){
      let name = data.name.toUpperCase();
      let texten = "";
        if(text === undefined){
          if(data.rating >= rating){
            filtered.push(data);
          }
        }else{

          texten = text.toUpperCase();

          if(data.rating >= rating && name.includes(texten)){
            filtered.push(data);

          }
        }
    });

    return filtered;
}

function filterMoviesByGenre(genre, rating,text, fs){

  console.log("filterMoviesByGenre " + text)

    // console.log(genre)
    let filtered = []
    let json = fs.readFileSync("./api/movielistJSON.json", "utf8");
    let obj = JSON.parse(json)

    obj.forEach(function(data){
      let name = data.name.toUpperCase();
      let texten = ""

        if(text === undefined){

          if(data.genre.length > 1){
            for(let i = 0; i < data.genre.length; i++){
              if(data.genre[i] == genre){
                filtered.push(data);
              }
            }
          }else if(data.genre == genre){
            filtered.push(data);
          }
        }else{

          texten = text.toUpperCase();

          console.log("texten är inte undefined " + texten)
          if(data.genre.length > 1){
            for(let i = 0; i < data.genre.length; i++){
              if(data.genre[i] == genre && name.includes(texten)){
                filtered.push(data);
              }
            }
          }else if(data.genre == genre && name.includes(texten)){
            filtered.push(data);
          }
        }
    })
    return filtered;
}

function filterMoviesByRating(genre,rating,text, fs){
    // console.log(rating)
    console.log("filterMoviesByRating " + text)

    let filtered = []
    let json = fs.readFileSync("./api/movielistJSON.json", "utf8");
    let obj = JSON.parse(json)

    obj.forEach(function(data){

        let name = data.name.toUpperCase();
        let texten = ""
        if(text === undefined){

          if(data.rating >= rating){
              filtered.push(data);
          }
        }else{
          texten = text.toUpperCase();
          if(name.includes(texten) && data.rating >= rating){
            filtered.push(data);
          }
        }

    })
    return filtered;
}

module.exports = { queryMoviesInfo }
