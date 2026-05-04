import React, { useEffect, useRef } from 'react';
import '../styles/Pages.css';
import appVideo from '../assets/appvideo.mp4';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Small delay so the browser has painted the initial state before starting animation
    const t = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('hero-animated');
      }
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-text">

              <div className="anim-item anim-delay-1">
                <div className="hero-badge">Smart Agriculture</div>
              </div>

              <div className="anim-item anim-delay-2">
                <h1 className="hero-title">
                  <span className="text-gradient">CeylonPepper</span>
                </h1>
              </div>

              <div className="anim-item anim-delay-3">
                <h2 className="hero-subtitle">Machine Learning Based Integrated Solution for Smart Pepper Farming in Sri Lanka</h2>
              </div>

              <div className="anim-item anim-delay-4">
                <p className="hero-abstract">
                  Empowering Sri Lankan farmers with next-generation technology for a smarter, more profitable harvest.
                </p>
              </div>

              <div className="anim-item anim-delay-5">
                <div className="animated-pills">
                  <div className="pill pill-1"><span className="pill-icon">🧠</span> Machine Learning</div>
                  <div className="pill pill-2"><span className="pill-icon">🛡️</span> Blockchain</div>
                  <div className="pill pill-3"><span className="pill-icon">📈</span> Yield Prediction</div>
                  <div className="pill pill-4"><span className="pill-icon">🔍</span> Disease Detection</div>
                </div>
              </div>

              <div className="anim-item anim-delay-6">
                <div className="hero-actions">
                  <a href="#documents" className="hero-btn btn-primary" style={{ textDecoration: 'none' }}>Explore Documents</a>
                  <a href="#milestones" className="hero-btn btn-secondary" style={{ textDecoration: 'none' }}>View Milestones</a>
                </div>
              </div>

            </div>

            <div className="hero-media anim-item anim-slide-right anim-delay-3">
              <div className="mockup-glow"></div>
              <div className="mobile-mockup">
                <video className="hero-video" src={appVideo} autoPlay muted loop playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="badge-container">
            <span className="section-badge">Core Modules</span>
          </div>
          <h3 className="section-title">Core Modules</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>Yield Prediction</h4>
              <p>Hybrid multimodal framework utilizing environmental data and plant features to predict seasonal pepper yields with high precision.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h4>Disease Detection</h4>
              <p>Advanced CNN-based image classification to identify and diagnose pepper leaf diseases early, helping farmers mitigate risks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Quality Grading</h4>
              <p>Automated image-based analysis and YOLOv8 pipeline for consistent, bias-free pepper quality assessment based on international standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💹</div>
              <h4>Market Forecast</h4>
              <p>ML-driven price forecasting integrated with blockchain for immutable traceability and transparent market insights for all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="badge-container">
            <span className="section-badge">Key Benefits</span>
          </div>
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
