import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

import css from "../static/style.css"




import SearchAndList from "../components/searchandlist"

const Home = () => (
  <div>
    <Header/>
    <SearchAndList/>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        background: url("./static/charliec.png");
        background-color: #eff;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 0px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 50%;
        background-color: #067df7;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 25%;
    }
    
    input[type=submit]:hover {
        background-color: #0670 d0;
    }
    .addContent {
        margin-top:5%;
        width:70%;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    .descStyled {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    `}</style>

  </div>
  
)

export default Home