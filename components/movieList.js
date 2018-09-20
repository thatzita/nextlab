import React from 'react'
import css from "../static/style.css";


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      showPopup: false,
      chosenMovie: "",
      movies: [],

    }
    this.togglePopup = this.togglePopup.bind(this);


  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }



  componentDidMount() {

    fetch("http://localhost:3000/api/")
      .then(response => response.json())
      .then(json => {
        this.setState({
          movies: json
        })
      })
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
    this.setState({
      movies: res,

    })
  }

  editMovie() {
    this.togglePopup()
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

        {movies.length > 0 ?
          <div>

            <ul>{movies.map((data, index) =>
              <li key={index} >

                <img src={data.img} alt="No image"
                  onClick={(event) => {
                    this.editMovie()

                    this.setState({
                      chosenMovie: {
                        name: data.name,
                        year: data.year,
                        genre: data.genre,
                        rating: data.rating,
                        img: data.img,
                        index: index
                      }
                    })
                  }}
                />

                <h3>{data.name}</h3>
                <span>Genre: </span>
                <span>{data.genre}</span><br />
                <span>Release year: </span>
                <span>{data.year}</span><br />
                <span><strong>Rating: </strong></span>
                <span>{data.rating}</span>


                <img className={css.imgSpan} src="https://static.thenounproject.com/png/3058-200.png" alt="" onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  this.deleteCard(index, data);
                }} />

              </li>)}
            </ul>
          </div>
          :
          <div>
            Nothing matched your search
        </div>
        }
        {this.state.showPopup ?
          <Popup chosenMovie={this.state.chosenMovie}
            closePopup={this.togglePopup}
            movies={[...this.state.movies]}
            getData={this.props.getData}
          />
          : null
        }
      </div>
    )
  }
}

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenMovie: {
        name: this.props.chosenMovie.name,
        year: this.props.chosenMovie.year,
        genre: [...this.props.chosenMovie.genre],
        rating: this.props.chosenMovie.rating,
        img: this.props.chosenMovie.img,
        index: this.props.chosenMovie.index,
      },
      originalList: [],
      movies: [...this.props.movies],
      name: "",
      year: "",
      genre: [],
      rating: "",
      img: "",
      index: this.props.chosenMovie.index
    }
    this.commonChange = this.commonChange.bind(this);
  }

  componentDidMount() {

    fetch("http://localhost:3000/api/")
      .then(response => response.json())
      .then(json => {
        this.setState({
          originalList: json
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  submitMovie() {
    let postData;

    let updateArr = [...this.state.originalList]

    let pos = updateArr.map(function (e) { return e.name; }).indexOf(this.props.chosenMovie.name);

    if (this.state.img === "" || this.state.img === undefined) {
      postData = {
        name: this.state.name,
        genre: [...this.state.genre],
        year: this.state.year,
        rating: this.state.rating,
        // img: "http://u.cubeupload.com/Masswap/475noposter.jpg",
        img: this.state.chosenMovie.img,
        index: pos,
      }
    } else {
      postData = {
        name: this.state.name,
        genre: [...this.state.genre],
        year: this.state.year,
        rating: this.state.rating,
        img: this.state.img,
        index: pos,
      }
    }
    updateArr.splice(pos, 1, postData)
    let self = this;
    fetch('http://localhost:3000/editmovie', {
      method: 'post',
      body: JSON.stringify(updateArr),
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      self.props.closePopup();
      self.props.getData(data)
    }).catch(function(err){
      console.log(err)
    });
  }


  commonChange(event) {
    let arr = [...this.state.genre];
    if (event.target.name === "genre") {
      arr.push(event.target.value);
      this.setState({
        genre: arr
      });

      let newArr = arr;
      let h, i, j;

      for (h = 0; h < arr.length; h++) {
        let currentGenre = arr[h];
        let foundCount = 0;
        for (i = 0; i < arr.length; i++) {
          if (arr[i] == arr[h])
            foundCount++;
        }
        if (foundCount > 1) {
          for (j = 0; j < newArr.length; j++) {
            if (newArr[j] == currentGenre) {
              newArr.splice(j, 1);
              j--;
            }
          }
        }
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        index: this.state.index
      });
    }
  }

  render() {
    return (
      <div className={css.popup}>
        <div className={css.popup_inner}>
          <div className={css.addContent}>
            <form id="movieForm">

              <div className={css.addContainer}>
                <div>
                  <label className={css.labelClass}>Title</label>
                  <input type="text" id="mTitle" name="name" placeholder={this.props.chosenMovie.name} onChange={this.commonChange} />
                </div>
                <br />
                <div>
                  <label className={css.labelClass}>Release Year</label>
                  <input type="text" id="mYear" name="year" placeholder={this.props.chosenMovie.year} onChange={this.commonChange} />
                </div>
                <br />
                <div>
                  <label className={css.labelClass}>Poster</label>
                  <input type="text" id="mImg" name="img" placeholder={this.props.chosenMovie.poster} onChange={this.commonChange} />
                </div>
                <br />
                <div id={css.displayGenre}>
                  <label className={css.labelClass}>Genre</label>
                  <div className={css.checkboxes} onChange={this.commonChange}>
                    <input type="checkbox" name="genre" value="action" /> <span className={css.checkboxFont}>Action</span>
                    <input type="checkbox" name="genre" value="comedy" /> <span className={css.checkboxFont}>Comedy</span>
                    <input type="checkbox" name="genre" value="horror" /> <span className={css.checkboxFont}>Horror</span><br />
                    <input type="checkbox" name="genre" value="drama" /> <span className={css.checkboxFont}>Drama</span>
                    <input type="checkbox" name="genre" value="thriller" /> <span className={css.checkboxFont}>Thriller</span>
                    <input type="checkbox" name="genre" value="animated" /> <span className={css.checkboxFont}>Animated</span>
                  </div>
                </div>
                <br />
                <div id={css.displayRating}>
                  <label className={css.labelClass}>Rating</label><br />
                  <select name="rating" onChange={this.commonChange}>
                    <option value="" defaultChecked>No Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

              </div>
            </form>
          </div>
          <button className={css.submitBtn} onClick={(event) => {
            this.submitMovie()
          }}>Update</button>
          <button className={css.closeBtn} onClick={this.props.closePopup}>Close</button>

        </div>
      </div>
    );
  }
}

export default MovieList
