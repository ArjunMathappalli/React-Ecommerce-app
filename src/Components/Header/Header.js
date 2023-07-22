import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <Link to='/' style={{textDecoration:'none',color:'#fff'}}>
      <h1>CART HOUSE</h1>
      </Link>
        
        <Link to='/logout'>
        <button className='btn-logout'>Logout</button>
        </Link>
    </header>
  )
}

export default Header