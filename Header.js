import React from 'react';
import './Header.js'; // Import the CSS styles

const Header = () => {
  return (
    <header className="header">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <img src="/IMAGES/logo2.svg" alt="SaaS Logo" />
        </div>
        <div className="nav-links">
          <a href="/">Solutions</a>
          <a href="/">Products</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Header Content Section */}
      <div className="header-content">
        {/* Text Content */}
        <div className="text-content">
          <h1>SaaS Delivery Management Software</h1>
          <p>Track and optimize routes in real-time</p>
          <div className="header-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span> Watch how it works
            </button>
          </div>
        </div>

        {/* Mockups Section */}
        <div className="mockups">
          {/* Dot Background */}
          <div className="dot-background">
            <img src="/IMAGES/dots1.png" alt="dot" />
          </div>

          {/* Laptop Mockup */}
          <div className="laptop-mockup">
            <img src="/IMAGES/banner-desktop.png" alt="Laptop Mockup" />
          </div>

          {/* Phone Mockup */}
          <div className="phone-mockup">
            <img src="/IMAGES/Mobile.png" alt="Phone Mockup" />
          </div>
         
   
        </div>
      </div>
    </header>
  );
};

export default Header;
