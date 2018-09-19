import React from 'react'
import css from "../static/style.css";


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {

    fetch("http://localhost:3000/api/")
      .then(response => response.json())
      .then(json => {
        this.setState({
          movies: json
        })
        console.log(json);
      }
      )
      .catch(err => {
        console.log(err);
      })
  }

  deleteCard(index, data) {
    let url = "http://localhost:3000/api/delete";

    fetch(url + "?name=" + data.name)
      .then(response => response.text())
      .then(text => console.log(text))

    this.setState(prevState => ({
      movies: [...prevState.movies.slice(0, index), ...prevState.movies.slice(index + 1)]
    }))
  }

  newMovies(res) {
    console.log(res)
    this.setState({
      movies: res
    })
  }

  showHighRes(){
    // return "background : red";
  }

  render() {
    let movies = [];
    let movieData = [...this.state.movies];

    movieData.forEach((data) => {
      movies.push(data);
    });

    let style = {
      display: "flex",
      justifyContent: "center",
    }
    return (
      <div className={css.movies}>
        <div>
          <ul>{movies.map((data, index) =>
            <li key={index} >


                <img src={data.img} alt="No image" />

              <h3>{data.name}</h3>
              <p>Genre: {data.genre}</p>
              <p>Release year: {data.year}</p>
              <p><strong>Rating:</strong> {data.rating}</p>
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  this.deleteCard(index, data);
                }}>
                    x
                </span>
            </li>)}
          </ul>
        </div>


      </div>
    )
  }
}

export default MovieList
