import React from 'react';
import '../styles/Pages.css';
import animationVideo from '../assets/animation.mp4';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">Smart Agriculture</div>
              <h1 className="hero-title">
                <span className="text-gradient">CeylonPepper</span>
              </h1>
              <h2 className="hero-subtitle">Machine Learning Based Integrated Solution for Smart Pepper Farming in Sri Lanka</h2>
              <p className="hero-abstract">
                An innovative solution integrating Machine Learning, Deep Learning and Blockchain concepts to revolutionize pepper farming in Sri Lanka through accurate yield predictions, rapid disease detection, quality grading and market forecasting with blockchain integrity.
              </p>
            </div>

            <div className="hero-media">
              <video className="hero-video" src={animationVideo} autoPlay muted loop playsInline />
            </div>
          </div>
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
              <h4>Market Forecast with Blockchain</h4>
              <p>ML-driven price forecasting with blockchain integrity to ensure transparent and reliable market insights.</p>
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
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Optimized Yields</h4>
                <p>Improved yield predictability and strategic planning through data-driven ML insights.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Risk Mitigation</h4>
                <p>Early and accurate disease diagnosis to minimize crop losses and maximize productivity.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Standardized Quality</h4>
                <p>Automated, bias-free quality grading standards for consistent market positioning.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Market Intelligence</h4>
                <p>Enhanced market transparency and better pricing strategies via blockchain-secured forecasts.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Immutable Transparency</h4>
                <p>Blockchain-backed data integrity ensuring trust and accountability across the entire supply chain.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">✔</div>
              <div className="benefit-text">
                <h4>Seamless Accessibility</h4>
                <p>Integrated mobile application for real-time monitoring and on-field management for farmers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
