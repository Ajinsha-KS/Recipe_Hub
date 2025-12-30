import React, { useState } from "react";
import "./Footer.css";
import fb from "../Assets/facebook.svg";
import insta from "../Assets/instagram.svg";
import twit from "../Assets/twitter.svg";
import ytube from "../Assets/youtube.svg";
import logo from "../Assets/logo__2.png"

function Footer() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input) return;

    setMessage(`Thanks for subscribing Recipe Hub ! 
We will reach you through ${input}`);

    setInput("");

    // auto hide popup
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
          <img src={logo} alt="logo" />
          
          <h2 className="footer-logo">Recipe Hub</h2>
          </div>

          <p className="footer-text">
            Your trusted place for tasty recipes, tips & cooking inspiration.
          </p>

          <div className="newsletter">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={input}
                onChange={handleChange}
                placeholder="Enter your email..."
                required
              />
              <button type="submit" className="sub-btn">
                Subscribe
              </button>
            </form>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twit} alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={ytube} alt="YouTube" />
            </a>
          </div>

          <p className="footer-copy">
            © 2025 Recipe Hub. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Center Popup */}
      {message && (
        <div className="center-popup">
          {message}
        </div>
      )}
    </>
  );
}

export default Footer;
