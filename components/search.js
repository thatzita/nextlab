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
      currentGenre:"nogenre",
      changeCurrentGenre:false,
      currentRate:"any",
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

// addToArrayState(name){
//
//   let newList = this.state.currentGenreList.filter(x => name === x)
//
//
//   //Om den inte finns så ska den lägga till den i listan
//   if(!newList[0]){
//     console.log("den finns inte så då ska den läggas till i listan")
//       this.setState({
//          currentGenreList: [
//            ...this.state.currentGenreList,
//            name
//          ]
//        })
//
//   }else{
//
//     let newListOneElementRemoved = this.state.currentGenreList.filter(x => name !==x)
//     this.setState({
//        currentGenreList: [
//          ...newListOneElementRemoved
//        ]
//      })
//       console.log("den finns redan i listan")
//   }
//
//
//
//
//
// }

currentGenre(name){
  // if(prevGenre === name){
  //   prevGenre = ""
  // }else{
  //
  //   this.addToArrayState(name)
  //
  //   prevGenre = name;
  // }
  this.setState({
    currentGenre:name
  })
}


currentRate(name){
  this.setState({
    currentRate:name
  })
}

 addGenre(name){




   switch (name) {
     case "action":

        this.currentGenre(name)

       break;
    case "drama":

        this.currentGenre(name)

      break;
      case "animated":
        this.currentGenre(name)
        break;
    case "thriller":
        this.currentGenre(name)

      break;
      case "horror":
     this.currentGenre(name)

   break;
    case "comedy":
        this.currentGenre(name)

      break;
    case "nogenre":
      this.currentGenre(name)
      break;
     default:

   }
 }


addRate(name){

        switch (name) {
        case "any":

          this.currentRate(name)

          break;
        case 1:

        this.currentRate(name)

          break;
        case 2:
          this.currentRate(name)
          break;
        case 3:
          this.currentRate(name)

          break;
        case 4:
          this.currentRate(name)

          break;
        case 5:
          this.currentRate(name)

          break;
        case 6:
          this.currentRate(name)
          break;
        case 7:
          this.currentRate(name)
          break;
        case 8:
          this.currentRate(name)
          break;
        case 9:
          this.currentRate(name)
          break;
        case 10:
          this.currentRate(name)
          break;
        default:

     }
}

componentDidUpdate(){
  console.log(this.state.currentGenre)
  console.log(this.state.currentRate)

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
                  <form>
                  <li onClick={e=>this.addGenre("nogenre")}>
                    <label htmlFor="nogenre">No genre</label>
                    <input type="radio" id="nogenre"  defaultChecked name="selection"/>
                  </li>
                 <li onClick={e=>this.addGenre("action")}>
                   <label htmlFor="action">Action</label>
                   <input type="radio" id="action" name="selection"/>
                 </li>
                 <li onClick={e=>this.addGenre("drama")}>
                   <label htmlFor="drama" >Drama</label>
                   <input type="radio" id="drama" name="selection"/>
                 </li>
                 <li onClick={e=>this.addGenre("animated")}>
                   <label htmlFor="animation">Animation</label>
                   <input type="radio" id="animation" name="selection"/>
                 </li>
                 <li onClick={e=>this.addGenre("thriller")}>
                   <label htmlFor="thriller">Thriller</label>
                   <input type="radio" id="thriller" name="selection"/>
                 </li>
                 <li onClick={e=>this.addGenre("comedy")}>
                   <label htmlFor="comedy">Comedy</label>
                   <input type="radio" id="comedy" name="selection"/>
                 </li>
                 </form>
                </ul>
           :
           <span></span>

         }


         </div>

         <div className={css.rating} >
         <h4 onClick={e => this.ratingClick()}>Rating</h4>

         {this.state.ratingClick ?
           <ul>
            <form>
              <li  onClick={e=>this.addRate("any")}>
                <label htmlFor="noRate">Any</label>
                <input type="radio" id="noRate"  defaultChecked name="selection"/>
                </li>
              <li onClick={e=>this.addRate(1)}>
                <label htmlFor="one">1</label>
                <input type="radio" id="one"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(2)}>
                <label htmlFor="two">2</label>
                <input type="radio" id="two"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(3)}>
                <label htmlFor="three">3</label>
                <input type="radio" id="three"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(4)}>
                <label htmlFor="four">4</label>
                <input type="radio" id="four"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(5)}>
                <label htmlFor="five">5</label>
                <input type="radio" id="five"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(6)}>
                <label htmlFor="six">6</label>
                <input type="radio" id="six"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(7)}>
                <label htmlFor="seven">7</label>
                <input type="radio" id="seven"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(8)}>
                <label htmlFor="eight">8</label>
                <input type="radio" id="eight"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(9)}>
                <label htmlFor="nine">9</label>
                <input type="radio" id="nine"   name="selection"/>
              </li>
              <li onClick={e=>this.addRate(10)}>
                <label htmlFor="ten">10</label>
                <input type="radio" id="ten"   name="selection"/>
              </li>
            </form>
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
