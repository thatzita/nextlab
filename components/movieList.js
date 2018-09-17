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

deleteCard(index, data){
  console.log(index);
  console.log(data.name);
  console.log(data.year);
  let url = "http://localhost:3000/api/delete";
  fetch(url+"?name="+data.name)
  .then(response => response.text())
  .then(text => console.log(text))
  
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

let style = {
  display:"flex",
  justifyContent:"center",
}
return (
<div style={style}>
    <h2>Our top movies</h2>
    <div>
        <ul>{movies.map((data, index) =>
        <li key={index}>
                <span
                onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    this.deleteCard(index, data);
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
