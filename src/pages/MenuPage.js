import React from 'react';
import Specials from '../components/Specials';

const MenuPage = () => {
  return (
    <main id="menu-page">
      <section className="page-hero">
        <div className="page-hero-container">
          <h1>Our Menu</h1>
          <p>Explore our delicious Mediterranean dishes made with the freshest ingredients.</p>
        </div>
      </section>
      <Specials />
    </main>
  );
};

export default MenuPage;
