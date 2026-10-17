import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className="navbar" id="main-navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Little Lemon Home">
          <img src={logo} alt="Little Lemon Restaurant Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-menu" role="menubar">
          <li role="none"><Link to="/" role="menuitem" className="nav-link">Home</Link></li>
          <li role="none"><Link to="/about" role="menuitem" className="nav-link">About</Link></li>
          <li role="none"><Link to="/menu" role="menuitem" className="nav-link">Menu</Link></li>
          <li role="none">
            <Link to="/booking" role="menuitem" className="nav-link nav-link-cta">
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
