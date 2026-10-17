import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely wonderful experience! The Greek Salad was incredibly fresh and the service was top-notch.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'James L.',
    rating: 5,
    text: 'Best Mediterranean food in Chicago! The Lemon Dessert is a must-try. Will definitely come back.',
    avatar: '👨‍💻',
  },
  {
    id: 3,
    name: 'Maria K.',
    rating: 4,
    text: 'Lovely atmosphere and amazing Bruschetta. Perfect place for a family dinner. Highly recommended!',
    avatar: '👩‍🎨',
  },
  {
    id: 4,
    name: 'David P.',
    rating: 5,
    text: 'The reservation process was so smooth and the food exceeded all expectations. A hidden gem!',
    avatar: '👨‍🍳',
  },
];

const renderStars = (rating) => {
  return '⭐'.repeat(rating);
};

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.id} id={`review-${review.id}`}>
              <div className="testimonial-rating">{renderStars(review.rating)}</div>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{review.avatar}</span>
                <h3 className="testimonial-name">{review.name}</h3>
              </div>
              <p className="testimonial-text">"{review.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
