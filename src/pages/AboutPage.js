import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <main id="about-page">
      <section className="page-hero">
        <div className="page-hero-container">
          <h1>About Us</h1>
          <p>Learn more about Little Lemon and our passion for Mediterranean cuisine.</p>
        </div>
      </section>
      <About />
    </main>
  );
};

export default AboutPage;
