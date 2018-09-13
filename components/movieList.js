import React from 'react'

class MovieList extends React.Component {
constructor(props) {
super(props);
this.state = {
    movies: [
        {
          name:"Sagan om ringen",
          genre:["Action"],
          age:11,
          rating:8
        },
        {
          name:"Shawshank redemption",
          genre:["Drama"],
          age:11,
          rating:9
        },
        {
          name:"Toy story",
          genre:["Animation"],
          age:3,
          rating:6,
        },
        {
          name:"Superhjältarna 2",
          genre:["Animation"],
          age:3,
          rating:5
        },
        {
          name:"Shutter Island",
          genre:["Thriller","Action"],
          age:15,
          rating:7
        },
        {
          name:"Deadpool",
          genre:["Comedy","Action"],
          age:11,
          rating:4,
        }
      ]
    }
}

deleteCard(index){
this.setState(prevState => ({
    movies: [...prevState.movies.slice(0, index), ...prevState.movies.slice(index + 1)]
}))
}

render() {
let movies = [];
let movieData = [...this.state.movies];

movieData.forEach((data)=>{
    movies.push(data);
});

return (
<div>
    <h2>Our top movies</h2>
    <div>
        <ul>{movies.map((data, index) => 
        <li key={index}>
                <span 
                onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    this.deleteCard(index);
                }}>X</span>
                <h3>{data.name}</h3>
                {/* <p>{data.genre}</p> */}
                <p><strong>Rating:</strong> {data.rating}</p>
            </li>)}
        </ul>
</div>


</div>
)
}
}

export default MovieList