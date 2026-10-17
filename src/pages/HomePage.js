import React from 'react';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage = () => {
  return (
    <main id="home-page">
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;
