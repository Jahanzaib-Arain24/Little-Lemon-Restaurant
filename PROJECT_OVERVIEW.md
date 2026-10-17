# 🍋 Project Overview - Little Lemon Web Application

## Executive Summary

The **Little Lemon Web Application** is a responsive, modern web platform developed as the capstone project for the **Meta Front-End Developer Professional Certificate**. The primary objective is to deliver an accessible, engaging digital presence for Little Lemon — a family-owned Mediterranean bistro in Chicago — centered around an intuitive online table booking flow.

---

## 🎯 Key Objectives

1. **Seamless Reservation System**: Allow diners to reserve tables with dynamic slot availability based on real-time date selection.
2. **State Management Excellence**: Demonstrate scalable state patterns using React's `useReducer` hook.
3. **Inclusive Design (a11y)**: Conform to WCAG 2.1 AA accessibility guidelines through semantic HTML5 landmarks, explicit ARIA attributes, and keyboard navigability.
4. **Brand-Driven Aesthetics**: Reflect the Mediterranean spirit of Little Lemon through tailored color palettes, typography, and card-based responsive grids.
5. **Quality Assurance**: 100% test coverage across core booking interactions and reducer logic via Jest and React Testing Library.

---

## 🏗️ Architecture & Component Hierarchy

The project follows a modular, feature-oriented React component architecture:

```
App (Router Provider)
├── Header
│   └── Nav (Responsive Links & Brand Logo)
├── Routes
│   ├── Route: / (HomePage)
│   │   ├── HeroSection (Brand CTA)
│   │   ├── Specials (Menu Cards & Delivery Actions)
│   │   ├── Testimonials (Customer Social Proof & Star Ratings)
│   │   └── About (Story of Founders Mario & Adrian)
│   │
│   ├── Route: /about (AboutPage)
│   │   └── About
│   │
│   ├── Route: /menu (MenuPage)
│   │   └── Specials
│   │
│   ├── Route: /booking (BookingPage - Core State Container)
│   │   └── BookingForm (Form Inputs, Client Validation, ARIA)
│   │
│   └── Route: /booking-confirmed (ConfirmedBooking)
│       └── Confirmation Card & Navigation Return
│
└── Footer (Brand Info, Navigation Links, Contact, Socials)
```

---

## ⚡ State Management & API Design

### State Flow: Table Availability

The reservation workflow coordinates state between date selection and available time slots using `useReducer`:

```
User Selects Date 
       │
       ▼
Dispatch Action: { type: 'UPDATE_TIMES', date: Date }
       │
       ▼
updateTimes Reducer ──► fetchAPI(date) (Simulated Backend)
       │
       ▼
State Update: ['17:00', '18:00', '19:30', ...]
       │
       ▼
BookingForm Time Dropdown Re-renders with Available Options
```

### Simulated API (`src/utils/api.js`)

- **`fetchAPI(date)`**: Utilizes a seeded pseudo-random distribution algorithm based on `date.getDate()`. This guarantees deterministic time slots for the same calendar date while creating realistic slot variations across different days.
- **`submitAPI(formData)`**: Simulates an asynchronous reservation endpoint returning a boolean status code. Upon `true`, the application triggers navigation to `/booking-confirmed`.

---

## 🎨 Design System & Color Tokens

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--primary-green` | `#495E57` | Primary brand backdrop, header highlights, deep accents |
| `--primary-yellow` | `#F4CE14` | High-emphasis CTA buttons, badges, key accents |
| `--secondary-orange` | `#EE9972` | Secondary accents, culinary card badges |
| `--secondary-light` | `#FBDABB` | Soft background fills, neutral card borders |
| `--highlight-light` | `#EDEFEE` | Page background canvas, testimonial containers |
| `--highlight-dark` | `#333333` | Primary body typography, high-contrast headings |

### Typography
- **Headings**: *Markazi Text* (Serif, warm Mediterranean character)
- **Body & Controls**: *Karla* (Sans-serif, clean, highly legible)

---

## ♿ Accessibility Standards (WCAG 2.1 AA)

- **Semantic Landmarks**: Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Form Controls**:
  - Explicit `<label>` binding with matching `htmlFor` and input `id`.
  - Dynamic `aria-invalid` state indicators during validation errors.
  - Descriptive `aria-describedby` links pointing to live error container messages.
- **Color Contrast**: Maintained a minimum contrast ratio of 4.5:1 for body copy against all surfaces.
- **Alternative Text**: Descriptive `alt` attributes on all brand assets and food photography.

---

## 🧪 Testing Strategy

The test suite in `src/App.test.js` exercises critical rubric grading points:

1. **DOM Structure & Form Rendering**:
   - Ensures all labels (`Choose Date`, `Choose Time`, `Number of Guests`, `Occasion`) render into the accessibility tree.
   - Verifies the submit CTA button (`Make Your Reservation`) exists with proper accessible name.
   - Validates that dynamic time options render as `<option>` children within the time dropdown.
2. **Reducer Functionality (`initializeTimes` & `updateTimes`)**:
   - Asserts `initializeTimes()` yields a non-empty array of time strings.
   - Confirms `updateTimes()` transitions state dynamically upon dispatching `UPDATE_TIMES`.
   - Validates state immutability when receiving unknown action types.
