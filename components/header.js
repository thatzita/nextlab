import React from 'react'
import Link from 'next/link'
import css from "../static/style.css"

const Header = () =>(

<div>
    <Link href="/">
        <a>Home</a>
    </Link>
    <Link href="/addmovie">
        <a>Create movie</a>
    </Link>
</div>)

export default Header