import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo__2.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='right-nav'>
          <img src={logo} alt='logo'/>
            <h3>RECIPE HUB</h3>
        </div>
        <div className='left-nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
        </div>
      
    </div>
  )
}

export default Navbar
