import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import AddMovie from '../components/addMovieToList'


export default () => (
    <div className="background">
        <Header/>
        <AddMovie />
      

        <style jsx>{`
    //  .background {
    //     width: 100%;
    //     height: 97vh;
    //     background: url("./static/charliec.png") no-repeat center;
    //     background-color: #000000a1;
    //   }
    `}</style>

    </div>
)