import React from 'react';
import aboutImg1 from '../assets/about1.jpg';
import aboutImg2 from '../assets/about2.jpg';

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
          <p>
            Based in Chicago, Illinois, Little Lemon was founded by two Italian brothers,
            Mario and Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. The brothers have been inspired by Italian, Greek,
            and Turkish culture and bring these flavors to their menu.
          </p>
        </div>
        <div className="about-images">
          <img src={aboutImg1} alt="Chef Mario preparing food in the Little Lemon kitchen" className="about-img-1" />
          <img src={aboutImg2} alt="Chef Adrian presenting a dish at Little Lemon" className="about-img-2" />
        </div>
      </div>
    </section>
  );
};

export default About;
