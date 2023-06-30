import React from 'react'
import Nav from './Nav'

const login = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <Nav />
        <h1>This is login page</h1>
    </div>
  )
}

export default login