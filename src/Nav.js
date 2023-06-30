import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
    <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
    </ul>
</nav>
  )
}

export default Nav