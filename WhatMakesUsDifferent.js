import React from 'react';
import './WhatMakesUsDifferent.js'; // Import the CSS file for this component
import { FaBriefcase, FaDollarSign, FaClock, FaShieldAlt } from 'react-icons/fa';

const WhatMakesUsDifferent = () => {
  return (
    <section className="wmud-wrapper">
      <div className="wmud-container">

        {/* Left section with the image */}
        <div className="wmud-image-section">
          <img
            src="/IMAGES/building.png"
            alt="Building Representation"
            className="wmud-building-image"
          />
        </div>

        {/* Right section with the text and cards */}
        <div className="wmud-text-section">
          <h2>What Makes Us Different?</h2>
          <p>
            Check out our best services you can possibly order in building your
            company. Don't forget to contact us via email or customer service if
            you are interested in using our services.
          </p>

          {/* Overlapping feature cards */}
          <div className="wmud-features">
            <div className="wmud-feature">
              <FaBriefcase className="wmud-feature-icon" />
              <h3>Experienced</h3>
              <p>We have over 25 years of experience in delivering high-quality services.</p>
              <a href="#">Learn more →</a>
            </div>
            <div className="wmud-feature">
              <FaDollarSign className="wmud-feature-icon" />
              <h3>Competitive Prices</h3>
              <p>Our prices are competitive without reducing the quality of our services.</p>
              <a href="#">Learn more →</a>
            </div>
            <div className="wmud-feature">
              <FaClock className="wmud-feature-icon" />
              <h3>On Time</h3>
              <p>We prioritize timely delivery and efficiency in every project.</p>
              <a href="#">Learn more →</a>
            </div>
            <div className="wmud-feature">
              <FaShieldAlt className="wmud-feature-icon" />
              <h3>Best Materials</h3>
              <p>We use the best materials to ensure durability and quality.</p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;