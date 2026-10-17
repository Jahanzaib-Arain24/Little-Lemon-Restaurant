import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    // Update available times when date changes
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Please enter between 1 and 10 guests';
    }
    if (!formData.occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm(formData);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      id="booking-form"
      aria-label="Table reservation form"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="res-date">Choose Date *</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
          required
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? 'date-error' : undefined}
          className={errors.date ? 'input-error' : ''}
        />
        {errors.date && <span className="error-message" id="date-error" role="alert">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose Time *</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? 'time-error' : undefined}
          className={errors.time ? 'input-error' : ''}
        >
          <option value="">Select a time</option>
          {availableTimes && availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {errors.time && <span className="error-message" id="time-error" role="alert">{errors.time}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests *</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          className={errors.guests ? 'input-error' : ''}
        />
        {errors.guests && <span className="error-message" id="guests-error" role="alert">{errors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion *</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? 'occasion-error' : undefined}
          className={errors.occasion ? 'input-error' : ''}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business Meal</option>
          <option value="Casual">Casual Dining</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && <span className="error-message" id="occasion-error" role="alert">{errors.occasion}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-submit"
        id="submit-booking-btn"
        aria-label="Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
