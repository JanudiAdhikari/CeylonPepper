import React from 'react';
import '../styles/Pages.css';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">CeylonPepper</h1>
          <h2 className="hero-subtitle">AI-Powered Intelligent Decision Support System for Smart Farming</h2>
          <p className="hero-abstract">
            An innovative solution integrating Machine Learning, Deep Learning, and Blockchain concepts to revolutionize pepper farming in Sri Lanka through accurate yield predictions, rapid disease detection, quality grading, and market forecasting.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h3 className="section-title">Core Modules</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>Yield Prediction</h4>
              <p>Machine learning models utilizing environmental data to predict seasonal pepper yields accurately.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h4>Disease Detection</h4>
              <p>CNN-based image classification to identify and diagnose pepper leaf diseases early and precisely.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Quality Grading</h4>
              <p>Automated image-based analysis for consistent and reliable pepper quality assessment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Market Forecast</h4>
              <p>ML-driven price forecasting to ensure market transparency and strategic planning for farmers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h3 className="section-title">Key Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">✔</span>
              <span>Improved yield predictability and strategic planning</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✔</span>
              <span>Early and accurate disease diagnosis to minimize losses</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✔</span>
              <span>Automated, bias-free quality grading standards</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✔</span>
              <span>Enhanced market transparency and better pricing strategies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
