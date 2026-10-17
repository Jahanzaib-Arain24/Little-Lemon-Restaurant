import React from 'react';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

const specials = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruschetta,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
  },
];

const Specials = () => {
  return (
    <section className="specials" id="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2>This Week's Specials!</h2>
          <button className="btn btn-primary" id="online-menu-btn">Online Menu</button>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <article className="special-card" key={item.id} id={`special-${item.id}`}>
              <div className="special-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3>{item.title}</h3>
                  <span className="special-price">{item.price}</span>
                </div>
                <p className="special-card-description">{item.description}</p>
                <button className="btn-delivery" id={`order-${item.id}`}>
                  Order a delivery 🛵
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
