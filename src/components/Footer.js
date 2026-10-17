import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.svg';

const Footer = () => {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <img src={logo} alt="Little Lemon" className="footer-logo" />
          <p className="footer-tagline">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <span role="img" aria-label="address">📍</span> 123 Lemon Street, Chicago, IL
            </li>
            <li>
              <span role="img" aria-label="phone">📞</span> (312) 555-0123
            </li>
            <li>
              <span role="img" aria-label="email">✉️</span> info@littlelemon.com
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
