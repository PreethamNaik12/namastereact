import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='wrap'>
       <Nav />
        <h1>This is my Home page</h1>
    </div>
  )
}

export default Home