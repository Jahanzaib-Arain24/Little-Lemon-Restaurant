# 🍋 Little Lemon - Mediterranean Restaurant

A responsive React web application for the Little Lemon restaurant, featuring an online table booking system.

## About

Little Lemon is a charming neighborhood bistro in Chicago that serves simple Mediterranean food and classic cocktails in a lively but casual environment. This project was built as part of the **Meta Front-End Developer Capstone** on Coursera.

## Features

- **Homepage** with hero section, weekly specials, customer testimonials, and about section
- **Online Table Reservation** system with:
  - Dynamic date and time selection
  - Guest count and occasion selection
  - Form validation with error messages
  - Booking confirmation page
- **Responsive Design** - works on mobile, tablet, and desktop
- **Accessible** - proper ARIA labels, semantic HTML, and keyboard navigation
- **React Router** for client-side navigation

## Tech Stack

- React 19
- React Router DOM
- CSS3 (Custom Properties, Grid, Flexbox)
- Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation

1. Clone the repository
2. Navigate to the project directory: `cd little-lemon`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open http://localhost:3000 in your browser

### Running Tests

Run `npm test` to execute the unit test suite.

## Project Structure

- `src/components/` - Reusable React components (Header, Nav, Footer, BookingForm, etc.)
- `src/pages/` - Page components (HomePage, BookingPage, AboutPage, MenuPage)
- `src/utils/` - Utility functions (API for booking)
- `src/assets/` - Images and logos

## License

This project was built for educational purposes as part of the Meta Front-End Developer Professional Certificate on Coursera.
