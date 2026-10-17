import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn btn-primary" id="reserve-table-btn">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Delicious Mediterranean dishes served at Little Lemon restaurant" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
