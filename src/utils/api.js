/**
 * Little Lemon API utility functions
 * These simulate the backend API for booking reservations
 */

/**
 * Seeded random number generator for consistent available times
 */
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Fetches available booking times for a given date
 * @param {Date} date - The date to check availability for
 * @returns {string[]} Array of available time strings
 */
export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.3) {
      result.push(i + ":30");
    }
  }
  return result;
};

/**
 * Submits booking form data
 * @param {Object} formData - The booking form data
 * @returns {boolean} true if submission was successful
 */
export const submitAPI = function (formData) {
  return true;
};
