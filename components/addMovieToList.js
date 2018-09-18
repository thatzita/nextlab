import React from 'react'
import css from "../static/addMovieStyle.css"

class AddMovieToList extends React.Component {
    constructor(props){
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

        if(event.target.name === undefined || event.target.name === ""){
            this.setState({
                rating: event.target.value
            });
        }else if(event.target.name === "genre"){

            arr.push(event.target.value);

            this.setState({
                genre: arr
            });

            let newArr = arr;
            let h,i,j;

            for(h = 0; h < arr.length; h++) {
                let curGenre = arr[h];
                let foundCount = 0;
                for(i = 0; i < arr.length; i++) {
                    if (arr[i] == arr[h])
                        foundCount++;
                }
                if(foundCount > 1) {
                    for(j = 0; j < newArr.length; j++) {
                        if(newArr[j] == curGenre) {
                            newArr.splice(j, 1);
                            j--;
                        }
                    }
                }
            }

        }else{
            this.setState({
                [event.target.name]: event.target.value
            });
        }

    }

    submitMovie(data){
        console.log(this.state)
     let postData = {
        name: this.state.name,
        genre: [...this.state.genre],
        year: this.state.year,
        rating: this.state.rating };

        fetch('http://localhost:3000/addmovie/newmovie', {
            method: 'post',
            body: JSON.stringify(postData),
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log(data)
          });
    }

    render() {

        return (
<div>

    <div className={css.addContent}>
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
                    <input type="checkbox" name="genre" value="action" /> Action
                    <input type="checkbox" name="genre" value="comedy" /> Comedy
                    <input type="checkbox" name="genre" value="horror" /> Horror
                    <input type="checkbox" name="genre" value="drama" /> Drama
                    <input type="checkbox" name="genre" value="thriller" /> Thriller
                    <input type="checkbox" name="genre" value="animated" /> Animated
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
            <button value="Add movie" onClick={(event)=> {
                this.submitMovie(event)
                }}>Add movie</button>
        </div>
    </div>
</div>
        )
    }
}

export default AddMovieToList
