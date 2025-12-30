import React from 'react'
import homeimage from '../Assets/Homepage.jpg'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
import Tips from './Tips'
import AboutUs from './AboutUs'
import IngredientsGuide from './IngredientsGuide'


function Homepage() {
    const navigate=useNavigate();
  return (
    <div className="home">

      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${homeimage})`,
        }}
      >
        <div className="hero-content">
          <h1>DISCOVER CULINARY DELIGHTS</h1>
          <p>Explore a World of Flavours at Your Fingertips</p>

          <button className="explore-btn" onClick={()=>navigate("/Recipes")}>EXPLORE RECIPES</button>
        </div>
      </div>
        
        <IngredientsGuide />
        <Tips />
        <AboutUs />
    </div>
    
  )
}

export default Homepage
