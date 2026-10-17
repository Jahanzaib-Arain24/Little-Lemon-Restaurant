import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-booking" id="confirmed-booking">
      <div className="confirmed-container">
        <div className="confirmed-icon">✅</div>
        <h1>Booking Confirmed!</h1>
        <p className="confirmed-message">
          Thank you for reserving a table at Little Lemon! We look forward to welcoming you.
        </p>
        <p className="confirmed-details">
          You will receive a confirmation email with your reservation details shortly.
        </p>
        <Link to="/" className="btn btn-primary" id="back-home-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
