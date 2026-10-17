# 🚀 Deployment Guide - Little Lemon Web Application

This document provides step-by-step instructions for deploying the **Little Lemon Restaurant** application to modern hosting platforms including **Vercel**, **Netlify**, and **GitHub Pages**.

---

## 📋 Prerequisites Before Deployment

Ensure the application compiles and passes all unit tests cleanly:

```bash
# 1. Run unit tests
npm test -- --watchAll=false

# 2. Build production bundle
npm run build
```

The production assets will be generated in the `/build` directory.

---

## 1. Deploying to Vercel (Recommended)

Vercel is the fastest and most seamless platform for deploying React Single Page Applications (SPAs).

### Option A: Via Vercel Web Dashboard (1-Click)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import the `Little-Lemon-Restaurant` repository.
4. Vercel automatically detects **Create React App**:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click **"Deploy"**.

### Client-Side Routing on Vercel
To ensure routes like `/booking` or `/about` work on page refresh, add a `vercel.json` file in the root directory (optional, Vercel CRA preset handles this by default):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 2. Deploying to Netlify

Netlify provides continuous deployment from GitHub and easy setup for React apps.

### Step-by-Step Instructions:

1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect to your GitHub account and select `Little-Lemon-Restaurant`.
4. Configure the build settings:
   - **Base directory**: *(leave empty)*
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Click **"Deploy site"**.

### Handling SPA Routing on Netlify
To prevent 404 errors when refreshing on child routes (such as `/booking`), create a file named `public/_redirects`:

```text
/*    /index.html   200
```

---

## 3. Deploying to GitHub Pages

To host directly on GitHub Pages using the `gh-pages` package:

### 1. Install `gh-pages` dependency:
```bash
npm install --save-dev gh-pages
```

### 2. Update `package.json`:
Add the `homepage` property and deployment scripts:

```json
{
  "homepage": "https://Jahanzaib-Arain24.github.io/Little-Lemon-Restaurant",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 3. Deploy:
```bash
npm run deploy
```

In your GitHub repository settings, navigate to **Pages** and ensure the source branch is set to `gh-pages`.

---

## 4. Serving Locally with a Production Server

You can test the production build locally before pushing:

```bash
# Install static server globally
npm install -g serve

# Serve the build folder on port 5000
serve -s build -l 5000
```

Open [http://localhost:5000](http://localhost:5000) to inspect the production bundle.

---

## 🛠️ Environment Configuration

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Local dev server port | `3000` |
| `BROWSER` | Automatic browser launch on start | `none` (optional) |
| `CI` | Enforce zero-warning build in CI pipelines | `false` |
