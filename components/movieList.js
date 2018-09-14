import React from 'react'

class MovieList extends React.Component {
constructor(props) {
super(props);
this.state = {
    movies: [],
    }
}

componentDidMount(){
  fetch("http://localhost:3000/api/")
  .then(response => response.json())
  .then(json=> 
    this.setState({
      movies:json
    })
  )

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
                <p>Genre: {data.genre}</p>
                <p>Release year: {data.year}</p>
                <p><strong>Rating:</strong> {data.rating}</p>
            </li>)}
        </ul>
</div>


</div>
)
}
}

export default MovieList
