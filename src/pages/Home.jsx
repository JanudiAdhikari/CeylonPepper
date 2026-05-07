import React, { useEffect, useRef } from 'react';
import '../styles/Pages.css';
import appVideo from '../assets/appvideo.mp4';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add('hero-animated');
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <section className="hero" ref={heroRef}>
        <div className="hero-dot-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        <div className="container hero-content">
          <div className="hero-grid">

            {/* LEFT COLUMN */}
            <div className="hero-text">

              <div className="anim-item anim-delay-1">
                <div className="hero-badge-row">
                  <div className="hero-badge-pill">
                    <span className="badge-live-dot"></span>
                    Smart Agriculture · Sri Lanka
                  </div>
                </div>
              </div>

              <div className="anim-item anim-delay-2">
                <h1 className="hero-title">
                  <span className="text-gradient">Ceylon</span>Pepper
                </h1>
              </div>

              <div className="anim-item anim-delay-3">
                <p className="hero-tagline">
                  Machine Learning Based Integrated Solution for Smart Pepper Farming in Sri Lanka 
                </p>
              </div>

              <div className="anim-item anim-delay-4">
                <div className="hero-stat-strip">
                  <div className="hero-stat">
                    <span className="stat-num">4</span>
                    <span className="stat-label">ML Modules</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="hero-stat">
                    <span className="stat-num">95%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="hero-stat">
                    <span className="stat-num">Real-time</span>
                    <span className="stat-label">Insights</span>
                  </div>
                </div>
              </div>

              <div className="anim-item anim-delay-5">
                <div className="animated-pills">
                  <div className="pill pill-1"><span className="pill-icon">🧠</span> Machine Learning</div>
                  <div className="pill pill-2"><span className="pill-icon">🛡️</span> Blockchain</div>
                  <div className="pill pill-3"><span className="pill-icon">📈</span> Yield Prediction</div>
                  <div className="pill pill-4"><span className="pill-icon">🔍</span> Disease Detection</div>
                  <div className="pill pill-5"><span className="pill-icon">🧪</span> Quality Grading</div>
                  <div className="pill pill-6"><span className="pill-icon">💰</span> Price Prediction</div>
                </div>
              </div>

              <div className="anim-item anim-delay-6">
                <div className="hero-actions">
                  <a href="#documents" className="hero-btn btn-primary" style={{ textDecoration: 'none' }}>
                    Explore Documents <span className="btn-arrow">→</span>
                  </a>
                  <a href="#milestones" className="hero-btn btn-secondary" style={{ textDecoration: 'none' }}>
                    View Milestones <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hero-media anim-item anim-slide-right anim-delay-3">
              <div className="mockup-glow-ring"></div>
              <div className="mockup-glow-ring mockup-glow-ring-2"></div>

              <div className="mobile-mockup">
                <video className="hero-video" src={appVideo} autoPlay muted loop playsInline />
              </div>

              <div className="floating-tag tag-1">🌿 Yield +12%</div>
              <div className="floating-tag tag-2">✅ Grade A</div>
              <div className="floating-tag tag-3">🔗 On-chain</div>
            </div>

          </div>
        </div>
      </section>

      {/* Features / Benefits sections unchanged below */}
      ...
    </div>
  );
};

export default Home;