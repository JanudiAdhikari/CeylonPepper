import React from 'react';
import '../styles/Pages.css';

const Presentations = () => {
  const slides = [
    { title: "Proposal Presentation", desc: "Slides from the initial proposal." },
    { title: "Progress Presentation 1", desc: "First progress evaluation slides." },
    { title: "Progress Presentation 2", desc: "Second progress evaluation slides." },
    { title: "Final Presentation", desc: "Comprehensive final presentation slides." }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Presentations (Slides)</h2>
      <div className="card-grid">
        {slides.map((s, i) => (
          <div className="presentation-card" key={i}>
            <div className="pres-icon">📊</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <button className="btn-download" onClick={(e) => {e.preventDefault(); alert('Slides Placeholder')}}>View Slides</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentations;
