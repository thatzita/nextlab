import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import AddMovie from '../components/addMovieToList'


export default () => (
    <div className="background">
        {/* <Head /> */}
        <Nav />
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