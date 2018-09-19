import React from 'react'
import css from "../static/addMovieStyle.css"

class AddMovieToList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            year: "",
            genre: [],
            rating: "",
        }
        this.commonChange = this.commonChange.bind(this);
    }

    commonChange(event) {

        let arr = [...this.state.genre];

        if (event.target.name === undefined || event.target.name === "") {
            this.setState({
                rating: event.target.value
            });
        } else if (event.target.name === "genre") {
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
                [event.target.name]: event.target.value
            });
        }
    }

    submitMovie(data) {
        let postData = {
            name: this.state.name,
            genre: [...this.state.genre],
            year: this.state.year,
            rating: this.state.rating
        };

        fetch('http://localhost:3000/addmovie/newmovie', {
            method: 'post',
            body: JSON.stringify(postData),
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            document.getElementById("movieForm").reset();
        });
    }

    render() {
        return (
            <div>
                <div className={css.addContent}>
                    <form id="movieForm">
                        <div className={css.addContainer}>
                            <div>
                                <label className={css.labelClass}>Title</label>
                                <br />
                                <input type="text" id="mTitle" name="name" placeholder="Movie name..." onChange={this.commonChange} />
                            </div>
                            <br />
                            <div>
                                <label className={css.labelClass}>Release Year</label><br />
                                <input type="text" id="mYear" name="year" placeholder="Release year" onChange={this.commonChange} />
                            </div>
                            <br />
                            <div>
                                <label className={css.labelClass}>Genre</label><br />
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
                            <div>
                                <label className={css.labelClass}>Rating</label><br />
                                <select onClick={this.commonChange}>
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
                            <br />
                            <div className={css.searchBtnDiv} onClick={(event) => {
                                this.submitMovie(event)
                            }}>
                                <span>Add movie</span>
                                <img src="https://firebasestorage.googleapis.com/v0/b/jonathanjohansson-69096.appspot.com/o/popcorn.png?alt=media&token=74049f62-676d-481a-a5c5-afc53e4035f7" alt="popcorn" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddMovieToList
