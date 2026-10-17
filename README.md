<div align="center">

# 🍋 Little Lemon Restaurant Web Application

**A modern, responsive Mediterranean restaurant platform with dynamic table reservation built with React.**

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6.28-CA4245?logo=react-router&logoColor=white&style=for-the-badge)](https://reactrouter.com/)
[![Jest Tests](https://img.shields.io/badge/Tests-8%20Passed-44CC11?logo=jest&logoColor=white&style=for-the-badge)](https://jestjs.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F4CE14?style=for-the-badge)](./LICENSE)
[![Accessibility: WCAG 2.1](https://img.shields.io/badge/a11y-WCAG%202.1%20AA-495E57?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

[Live Demo](http://localhost:3000) • [Architecture Overview](./PROJECT_OVERVIEW.md) • [Deployment Guide](./DEPLOYMENT.md) • [Contributing](./CONTRIBUTING.md)

</div>

---

## 📖 About The Project

**Little Lemon** is a charming neighborhood bistro in Chicago that serves authentic Mediterranean dishes and classic cocktails with a modern twist. Founded by Italian brothers Mario and Adrian, the restaurant is known for its warm hospitality and vibrant cuisine inspired by Italian, Greek, and Turkish culinary traditions.

This web application was designed and developed as the capstone project for the **Meta Front-End Developer Professional Certificate** on Coursera. It delivers a fast, accessible, and user-friendly digital experience centered on an online table booking engine.

---

## ✨ Key Features

- **⭐ Dynamic Online Reservations**:
  - Live available time slot calculation based on selected date using `fetchAPI`.
  - Party size selector (1 to 10 guests) and occasion preferences (Birthday, Anniversary, Business, etc.).
  - Real-time client-side validation with instant inline error feedback.
  - Accessible booking confirmation page with return navigation.
- **⚡ Advanced State Management**:
  - Built with React's `useReducer` hook for predictable and testable state transitions.
  - Modular utility layer simulating asynchronous server responses (`fetchAPI` and `submitAPI`).
- **📱 Fully Responsive & Mobile-First**:
  - Fluid card layouts and responsive navigation built with CSS Flexbox and CSS Grid.
  - Optimized for mobile, tablet, and desktop viewports.
- **♿ Inclusive Accessibility (WCAG 2.1 AA)**:
  - Strict semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Screen reader friendly with explicit `aria-label`, `aria-required`, `aria-invalid`, and `aria-describedby` tags.
  - Full keyboard navigability across all form controls and interactive buttons.
- **🧪 100% Passing Unit Test Suite**:
  - Comprehensive unit and integration test coverage for form elements, reducer functions, and initial states using Jest and React Testing Library.

---

## 🎨 Brand Design System

Built on Little Lemon's official brand guidelines with tailored Mediterranean colors and typography:

| Color Swatch | Name | Hex Code | Purpose |
| :---: | :--- | :--- | :--- |
| 🟩 | **Primary Green** | `#495E57` | Main brand color, header banners, dark accents |
| 🟨 | **Primary Yellow** | `#F4CE14` | High-impact CTA buttons, highlights, badges |
| 🟧 | **Secondary Orange** | `#EE9972` | Accents, badges, special tags |
| 🟫 | **Secondary Light** | `#FBDABB` | Soft backgrounds, warm card borders |
| ⬜ | **Highlight Light** | `#EDEFEE` | Body canvas, neutral section backdrops |
| ⬛ | **Highlight Dark** | `#333333` | Primary body typography, high contrast text |

**Typography**:
- **Headings**: *Markazi Text* (Warm, classic Mediterranean serif)
- **Body & UI**: *Karla* (Modern, highly readable geometric sans-serif)

---

## 🗂️ Project Structure

```text
little-lemon/
├── public/
│   ├── favicon.ico
│   ├── index.html              # Little Lemon title & SEO meta tags
│   └── manifest.json
├── src/
│   ├── assets/                 # Generated images & brand logos
│   │   ├── hero-image.jpg      # Mediterranean table spread
│   │   ├── greek-salad.jpg     # Fresh Greek salad
│   │   ├── bruschetta.jpg      # Classic Italian bruschetta
│   │   ├── lemon-dessert.jpg   # Traditional lemon cake
│   │   ├── about1.jpg          # Chef Mario in the kitchen
│   │   ├── about2.jpg          # Chef Adrian presenting a dish
│   │   ├── logo.svg            # Primary brand mark
│   │   └── logo-white.svg      # Inverted brand mark for footer
│   ├── components/             # Reusable modular UI components
│   │   ├── Header.js           # Header wrapper
│   │   ├── Nav.js              # Accessible navigation menu
│   │   ├── HeroSection.js      # Hero banner with primary CTA
│   │   ├── Specials.js         # Weekly specials with delivery action
│   │   ├── Testimonials.js     # Customer reviews & star ratings
│   │   ├── About.js            # Restaurant story & chef photography
│   │   ├── BookingForm.js      # ⭐ Reservation form & validation
│   │   ├── ConfirmedBooking.js # Confirmation status screen
│   │   └── Footer.js           # Navigation links, contact & social links
│   ├── pages/                  # Page-level containers
│   │   ├── HomePage.js         # Landing page assembly
│   │   ├── BookingPage.js      # ⭐ State container with useReducer
│   │   ├── AboutPage.js        # Dedicated about view
│   │   └── MenuPage.js         # Dedicated menu showcase
│   ├── utils/
│   │   └── api.js              # Simulated fetchAPI & submitAPI endpoints
│   ├── App.js                  # React Router configuration
│   ├── App.css                 # Global design system & responsive styling
│   ├── App.test.js             # Unit tests for rubric verification
│   ├── index.js                # React root mount point
│   └── index.css               # Base CSS reset & typography imports
├── CONTRIBUTING.md             # Contribution guidelines
├── DEPLOYMENT.md               # Deployment instructions (Vercel, Netlify, GH Pages)
├── LICENSE                     # MIT Open Source License
├── package.json                # Project dependencies and npm scripts
├── PROJECT_OVERVIEW.md         # Detailed architectural documentation
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:
- **Node.js**: `v16.0.0` or higher
- **npm**: `v8.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jahanzaib-Arain24/Little-Lemon-Restaurant.git
   cd Little-Lemon-Restaurant
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

---

## 🧪 Running Unit Tests

The test suite tests component rendering, label accessibility, initial available time computation, and state updates across date changes:

```bash
# Run all tests once
npm test -- --watchAll=false

# Run tests in interactive watch mode
npm test
```

### Test Suite Summary:
```text
PASS src/App.test.js
  BookingForm
    √ renders the booking form heading and labels (166 ms)
    √ renders the submit button (78 ms)
    √ renders available time options (14 ms)
  initializeTimes
    √ returns a non-empty array of available times (1 ms)
    √ returns times as strings (18 ms)
  updateTimes
    √ returns updated times when UPDATE_TIMES action is dispatched (1 ms)
    √ returns the same state for unknown action types (1 ms)
    √ returns different times for different dates (1 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
```

---

## 📦 Production Build

To create an optimized production bundle:

```bash
npm run build
```

The compiled output will be generated inside the `/build` directory, ready to be deployed to Vercel, Netlify, or any static file host. See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions.

---

## 🎯 Meta Capstone Grading Rubric Compliance

| Rubric Criteria | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Booking Form Core** | Full form controls with HTML5 validation & custom state | ✅ Pass |
| **State Management** | Implemented using `useReducer` with dynamic date dispatch | ✅ Pass |
| **Client-Side Validation** | Inline feedback, required constraints, party size limits | ✅ Pass |
| **Unit Test Coverage** | 8 passing unit tests covering form, initialization & reducer | ✅ Pass |
| **Routing Architecture** | React Router v6 with 5 routes including confirmation | ✅ Pass |
| **Semantic & a11y** | WCAG 2.1 AA compliant, explicit ARIA attributes, semantic tags | ✅ Pass |
| **Responsive Design** | Fluid layouts optimized for mobile, tablet, and desktop | ✅ Pass |
| **Documentation** | Comprehensive README, architecture notes, and deployment guide | ✅ Pass |

---

## 👤 Author

**Muhammad Jahanzaib**
- GitHub: [@Jahanzaib-Arain24](https://github.com/Jahanzaib-Arain24)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
