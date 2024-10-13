import React from 'react';
import './Footer.js'; // CSS file for styling
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SaaS Logo and Description */}
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-circle">
              <span className="logo-text">SaaS</span>
            </div>
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Product Section */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Solutions</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">System Status</a></li>
            <li><a href="#">Languages</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
