# CeylonPepper – Machine Learning Based Integrated Solution for Smart Pepper Farming in Sri Lanka

**Live Application:** [https://ceylon-pepper.vercel.app/](https://ceylon-pepper.vercel.app/)

A modern, responsive academic project website for a university research project focusing on Smart Pepper Farming in Sri Lanka.

## Domain Overview
The website details the project's approach to revolutionizing the Sri Lankan pepper agriculture sector by addressing:
- **Yield Prediction:** Machine learning models relying on environmental data.
- **Disease Detection:** CNN-based image classification for leaf inspections.
- **Quality Grading:** Automated image-based analysis for standardized evaluation.
- **Market Price Forecasting:** ML-based projections for price transparency.

Through an integration of Machine Learning, Deep Learning, and conceptual Blockchain applications.

## Tech Stack
- **Frontend Framework:** React (initialized via Vite)
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Custom Vanilla CSS (no CSS frameworks)
- **Icons:** Lucide React (`lucide-react`)

## Project Structure
```
ceylon-pepper/
├── index.html          # Core document
├── src/
│   ├── components/     # Reusable UI (Navbar, Footer, Accordion)
│   ├── pages/          # Primary views (Home, Domain, Milestones)
│   ├── styles/         # CSS style sheets
│   ├── assets/         # Static imagery and logos
│   ├── App.jsx         # React Router configuration
│   └── main.jsx        # React application entry point
├── package.json        # Dependencies listing
└── vite.config.js      # Vite build configuration
```

## Getting Started

1. **Install Dependencies**
   Make sure you have Node.js installed, then navigate to your project directory and run:
   ```bash
   npm install
   ```

2. **Run Local Development Server**
   Start the Vite server to preview the site locally:
   ```bash
   npm run dev
   ```
   *Open the browser URL provided in the terminal (e.g., `http://localhost:5173`).*

3. **Build for Production**
   If you need to deploy the site or generate static files (under the 20MB limit):
   ```bash
   npm run build
   ```
   *The static outputs will be generated in the `/dist` directory.*
