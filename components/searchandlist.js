import React from 'react'
import Link from 'next/link'
import Search from "./search"
import MovieList from "./movieList"

class SearchAndList extends React.Component {

 constructor(props) {
 super(props);
 }

 render(){
   return (
     <React.Fragment>
       <Search/>
       <MovieList/>
     </React.Fragment>
   )
 }
}

export default SearchAndList