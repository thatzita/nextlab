import React from 'react'
import Link from 'next/link'
import css from "../static/style.css"




class Search extends React.Component {

 constructor(props) {
 super(props);
    this.state = {
      search: ""
    }
 }

 render(){

let handleChange = event => {
  this.setState({
    search: event.target.value
  })
}

let handleClick = event => {
  console.log(this.state.search);
}

   return (
     <div className={css.searchDiv}>
       <div className={css.searchDivChild1}>
       </div>
       <div className={css.searchDivChild2}>
       </div>
       <div className={css.inpDiv}>
         <input className={css.inputStyle} onChange={handleChange} type="text"/>
       </div>
       <button className={css.searchBtn} onClick={handleClick}>Search</button>


     </div>


     )

 }


}

export default Search