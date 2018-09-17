import React from 'react'

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
       console.log(event.target.name)
        // console.log("name: "+ event.target.name);
        // console.log("value: " + event.target.value)
        // console.log(event.target.name)
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
                // search array for item
                for(i = 0; i < arr.length; i++) {
                    if (arr[i] == arr[h])
                        foundCount++;
                }
                if(foundCount > 1) {
                    // remove repeated item from new array
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
<h1 className="title">ADD MOVIE</h1>
<p className="description">
Add your favorite movie to the collection.
</p>

<div className="addContent">
<label>Title</label>
<br/>
<input type="text" id="mTitle" name="name" placeholder="Movie name..." onChange={this.commonChange}/>

<br/>
<br/>
<label>Release Year</label><br/>
<input type="text" id="mYear" name="year" placeholder="Release year" onChange={this.commonChange}/>
<br/>
<br/>
<label>Genre</label><br/>
<div onChange={this.commonChange}>
<input type="checkbox" name="genre" value="action" /> Action
<input type="checkbox" name="genre" value="comedy" /> Comedy
<input type="checkbox" name="genre" value="horror" /> Horror
<input type="checkbox" name="genre" value="drama" /> Drama
<input type="checkbox" name="genre" value="thriller" /> Thriller
<input type="checkbox" name="genre" value="animated" /> Animated
</div>
<br/>
    <label>Rating</label>
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

<button  value="Add movie" onClick={(event) => {

    this.submitMovie(event)
}}>Add movie</button>
</div>

</div>
        )
    }
}

export default AddMovieToList