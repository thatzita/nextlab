import React from 'react'
import Link from 'next/link'
import Search from "./search"
import MovieList from "./movieList"

class SearchAndList extends React.Component {

 constructor(props) {
 super(props);
 this.state ={
   movies:[]
 }
 this.getData = this.getData.bind(this);
 }

 getData(res){
   console.log(res)
   this.setState({
     movies:res,
   })
   this.refs.movies.newMovies(res);
 }

 render(){

   return (
     <React.Fragment>
       <Search getData={this.getData}/>
       <MovieList  movies={this.state.movies} ref="movies"/>
     </React.Fragment>
   )
 }
}

export default SearchAndList
