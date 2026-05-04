import React from 'react';
import '../styles/Pages.css';
import animationVideo from '../assets/animation.mp4';

const Home = () => {
  return (
    <div className="fade-in">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-organic-bg" />
        <div className="hero-grid-bg" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-line" />
                <span className="hero-eyebrow-text">Smart Agriculture · Sri Lanka</span>
              </div>

              <div className="hero-badge-wrap">SLIIT Research 2025–26</div>

              <h1 className="hero-title">
                Ceylon<em>Pepper</em>
              </h1>

              <p className="hero-subtitle">
                Machine Learning Based Integrated Solution for Smart Pepper Farming in Sri Lanka
              </p>

              <p className="hero-abstract">
                An innovative platform integrating Machine Learning, Deep Learning, and Blockchain to revolutionize pepper farming — from accurate yield predictions and rapid disease detection to automated quality grading and transparent market forecasting.
              </p>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">4</div>
                  <div className="hero-stat-label">Core Modules</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">ML+</div>
                  <div className="hero-stat-label">AI Models</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">⛓</div>
                  <div className="hero-stat-label">Blockchain</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-video-glow" />
              <div className="hero-video-container">
                <video
                  className="hero-video"
                  src={animationVideo}
                  autoPlay muted loop playsInline
                />
              </div>

              <div className="hero-float-badge badge-1">
                <span className="badge-icon">🌿</span>
                <div className="badge-text-wrap">
                  <span className="badge-text-main">Yield Prediction</span>
                  <span className="badge-text-sub">EfficientNet + XGBoost</span>
                </div>
              </div>

              <div className="hero-float-badge badge-2">
                <span className="badge-icon">⛓️</span>
                <div className="badge-text-wrap">
                  <span className="badge-text-main">Blockchain Verified</span>
                  <span className="badge-text-sub">Supply Chain Integrity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="features-header">
          <div className="section-tag">Platform Overview</div>
          <h2 className="section-title text-center">Four Pillars of <span>Smart Farming</span></h2>
          <p className="section-desc text-center">
            Each module addresses a critical challenge in Sri Lankan pepper farming through state-of-the-art AI.
          </p>
        </div>

        <div className="features-grid">
          {[
            {
              icon: '📈',
              num: '01',
              title: 'Yield Prediction',
              desc: 'Hybrid multimodal framework combining EfficientNetB0 deep features with environmental data via XGBoost for precise seasonal yield estimation.',
            },
            {
              icon: '🔬',
              num: '02',
              title: 'Disease Detection',
              desc: 'CNN-based image classification identifies five major pepper diseases early and precisely, enabling farmers to act before crop losses occur.',
            },
            {
              icon: '⭐',
              num: '03',
              title: 'Quality Grading',
              desc: 'YOLOv8 + MobileNetV3 pipeline automates post-harvest quality assessment with international standard compliance and detailed reports.',
            },
            {
              icon: '💹',
              num: '04',
              title: 'Market Forecast',
              desc: 'LightGBM price forecasting with blockchain-verified batch traceability ensures transparent and reliable market insights for farmers.',
            },
          ].map((f) => (
            <div className="feature-card" key={f.num}>
              <div className="feature-num">{f.num}</div>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
              <span className="feature-arrow">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="benefits">
        <div className="benefits-inner">
          <div className="benefits-left">
            <div className="section-tag">Why CeylonPepper</div>
            <h2 className="section-title">Transforming Farming, <span>One Insight at a Time</span></h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Our integrated platform addresses the most pressing challenges faced by Sri Lankan pepper farmers with data-driven precision.
            </p>
            <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(26,107,46,0.05), rgba(92,184,92,0.05))', borderRadius: '16px', border: '1px solid rgba(26,107,46,0.12)' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: '8px' }}>🌱</div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Built by SLIIT Software Engineering undergraduates dedicated to empowering Sri Lanka's agricultural sector through technology.
              </p>
            </div>
          </div>

          <div className="benefits-grid">
            {[
              { icon: '✦', title: 'Optimized Yields', desc: 'Data-driven ML insights improve yield predictability and enable strategic harvest planning.' },
              { icon: '🛡', title: 'Risk Mitigation', desc: 'Early, accurate disease diagnosis minimizes crop losses and maximizes productivity.' },
              { icon: '📊', title: 'Standardized Quality', desc: 'Automated, bias-free grading delivers consistent market positioning for farmers.' },
              { icon: '🔮', title: 'Market Intelligence', desc: 'Enhanced price transparency and better pricing strategies via blockchain forecasts.' },
              { icon: '🔗', title: 'Immutable Traceability', desc: 'Blockchain-backed data integrity ensures trust across the entire supply chain.' },
              { icon: '📱', title: 'Seamless Access', desc: 'Integrated Flutter mobile app for real-time monitoring and on-field management.' },
            ].map((b) => (
              <div className="benefit-item" key={b.title}>
                <div className="benefit-icon-wrap">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;