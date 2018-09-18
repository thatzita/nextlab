import React from 'react'
import Link from 'next/link'
import css from "../static/style.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faPlus)


const Header = () =>(

<div className={css.header}>

    <Link href="/addmovie">
      <FontAwesomeIcon icon="plus"  className={css.plus}/>
    </Link>
    <h5 id={css.movietext}>Movies</h5>
    <Link href="/">
      <FontAwesomeIcon icon="home"  className={css.home}/>
    </Link>
    <style jsx>{`




    `}
    </style>
</div>


)

export default Header
