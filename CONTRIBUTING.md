# Contributing to Little Lemon Web Application

Thank you for your interest in contributing to the **Little Lemon Restaurant Web Application**! We welcome contributions to improve features, documentation, accessibility, and test coverage.

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and inclusive environment for everyone. Please treat all contributors with kindness and professional courtesy.

---

## How to Contribute

### 1. Reporting Bugs

If you find a bug or unexpected behavior:
1. Check the [Existing Issues](https://github.com/Jahanzaib-Arain24/Little-Lemon-Restaurant/issues) to avoid duplicate reports.
2. Open a new issue with a clear title and description.
3. Include reproducible steps, expected vs. actual behavior, and environment details (Node version, OS, browser).

### 2. Suggesting Enhancements

Feature requests are welcome! When opening an issue for a feature proposal:
- Explain the motivation behind the feature.
- Describe how it improves the user experience or codebase quality.
- Provide mockup screenshots or pseudocode where applicable.

### 3. Submitting Pull Requests

Follow these steps to submit a pull request:

1. **Fork the Repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/<your-username>/Little-Lemon-Restaurant.git
   cd Little-Lemon-Restaurant
   ```
3. **Create a new branch** with a descriptive name:
   ```bash
   # For new features
   git checkout -b feature/your-feature-name

   # For bug fixes
   git checkout -b bugfix/issue-description
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Implement your changes**:
   - Write clean, semantic, and well-commented code.
   - Follow the existing project structure and design tokens.
   - Ensure accessibility standards (WCAG 2.1 AA) are maintained.
6. **Run tests** and verify everything passes:
   ```bash
   npm test -- --watchAll=false
   npm run build
   ```
7. **Commit your changes** using conventional commit messages:
   ```bash
   git commit -m "feat(booking): add custom date range validation"
   ```
8. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Open a Pull Request** against the `main` branch with a summary of changes and reference any related issues.

---

## Commit Guidelines

We recommend using the Conventional Commits specification:

| Type | Purpose | Example |
| :--- | :--- | :--- |
| `feat` | New feature | `feat(booking): enhance time slot selector` |
| `fix` | Bug fix | `fix(nav): resolve mobile toggle glitch` |
| `docs` | Documentation update | `docs: add deployment instructions` |
| `style` | Formatting or styling change | `style: update button hover transition` |
| `test` | Adding or updating tests | `test: add unit test for date validation` |
| `refactor` | Code restructuring without feature change | `refactor: extract form field inputs` |

---

## Development Standards

- **Semantic HTML**: Always use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements appropriately.
- **Accessibility**: Include descriptive `alt` tags on all images, `aria-label` where context is needed, and form `label` associations (`htmlFor` matching input `id`).
- **Styling**: Maintain vanilla CSS styling utilizing CSS custom variables defined in `App.css`.

Thank you for helping make Little Lemon better! 🍋
