import React from "react";
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-intro">
        Welcome to <strong>RECIPE HUB</strong> your simple and friendly place to
        discover delicious recipes from around the world.  
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We created this website to make cooking easy for everyone. Whether
          you're a beginner or an experienced cook, we want to help you explore,
          learn, and enjoy new recipes every day.
        </p>
      </div>

      <div className="about-section">
        <h2>What You’ll Find Here</h2>
        <ul>
          <li>Easy-to-follow recipes</li>
          <li>Different cuisines to explore</li>
          <li>Quick tips & tricks for better cooking</li>
          <li>Clean and simple interface</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Built With Love</h2>
        <p>
          This project is made with React and passion for cooking.  
          We hope it inspires you to try something new in your kitchen today.
        </p>
      </div>

    </div>
  );
}

export default AboutUs;
