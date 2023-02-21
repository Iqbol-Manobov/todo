import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='logo'>
            Company
        </div>
        <div className="display-menu">
        <Link className='menu' to='/home'>Home</Link>
        <Link className='menu' to='/about'>About</Link>
        <Link className='menu' to='/portfolio'>Portfolio</Link>
        <Link className='menu' to='/services'>Services</Link>
        </div>
    </header>
  )
}

export default Navbar