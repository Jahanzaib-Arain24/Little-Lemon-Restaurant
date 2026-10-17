import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';

/**
 * Initializes available times for today's date
 */
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

/**
 * Reducer function to update available times based on selected date
 */
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main className="booking-page" id="booking-page">
      <section className="booking-hero">
        <div className="booking-hero-container">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon and enjoy an unforgettable dining experience.</p>
        </div>
      </section>
      <section className="booking-section">
        <div className="booking-container">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
