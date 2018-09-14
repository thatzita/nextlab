import React from 'react'
import Link from 'next/link'
import css from "../static/style.css"


let prevGenre = ""

class Search extends React.Component {

 constructor(props) {
 super(props);
    this.state = {
      search: "",
      genreClick:false,
      ratingClick:false,
      currentGenreList:[],
      changeCurrentGenre:false
    }
 }

 genreClick(){
   if(!this.state.genreClick){
     this.setState({
       genreClick:true
     })
   }else{
     this.setState({
       genreClick:false
     })
   }
 }

 ratingClick(){
   if(!this.state.ratingClick){
     this.setState({
       ratingClick:true
     })
   }else{
     this.setState({
       ratingClick:false
     })
   }
 }

addToArrayState(name){

  let newList = this.state.currentGenreList.filter(x => name === x)


  //Om den inte finns så ska den lägga till den i listan
  if(!newList[0]){
    console.log("den finns inte så då ska den läggas till i listan")
      this.setState({
         currentGenreList: [
           ...this.state.currentGenreList,
           name
         ]
       })

  }else{

    let newListOneElementRemoved = this.state.currentGenreList.filter(x => name !==x)
    this.setState({
       currentGenreList: [
         ...newListOneElementRemoved
       ]
     })
      console.log("den finns redan i listan")
  }





}

checkPreviousGenre(name){
  if(prevGenre === name){
    prevGenre = ""
  }else{

    this.addToArrayState(name)
    prevGenre = name;
  }
}


 addGenre(name){




   switch (name) {
     case "action":

        this.checkPreviousGenre(name)

       break;
    case "drama":
        this.checkPreviousGenre(name)

      break;
    case "animation":
        this.checkPreviousGenre(name)
        break;
    case "thriller":
        this.checkPreviousGenre(name)

      break;
    case "comedy":
        this.checkPreviousGenre(name)

      break;
     default:

   }
 }


componentDidUpdate(){
  console.log(this.state.currentGenreList)
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
     <div>
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

       <div className={css.categories}>
         <div className={css.genre}>

         <h4  onClick={e => this.genreClick()}>Genre</h4>
         {this.state.genreClick ?
           <ul>
            <li onClick={e=>this.addGenre("action")}>
              <label htmlFor="action">Action</label>
              <input type="checkbox" id="action"/>
            </li>
            <li onClick={e=>this.addGenre("drama")}>
              <label htmlFor="drama" >Drama</label>
              <input type="checkbox" id="drama"/>
            </li>
            <li onClick={e=>this.addGenre("animation")}>
              <label htmlFor="animation">Animation</label>
              <input type="checkbox" id="animation"/>
            </li>
            <li onClick={e=>this.addGenre("thriller")}>
              <label htmlFor="thriller">Thriller</label>
              <input type="checkbox" id="thriller"/>
            </li>
            <li onClick={e=>this.addGenre("comedy")}>
              <label htmlFor="comedy">Comedy</label>
              <input type="checkbox" id="comedy"/>
            </li>


           </ul>

           :
           <span></span>

         }


         </div>

         <div className={css.rating} >
         <h4 onClick={e => this.ratingClick()}>Rating</h4>

         {this.state.ratingClick ?
           <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
           </ul>
           :
           <span></span>
         }


         </div>
        </div>
     </div>


     )

 }


}

export default Search
