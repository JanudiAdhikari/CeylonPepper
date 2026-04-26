import React from 'react';
import '../styles/Pages.css';
import proposalPres from '../assets/proposal_presentation.pdf';
import pp1Pres from '../assets/pp1_presentation.pdf';
import pp2Pres from '../assets/pp2_presentation.pdf';
import placeholderPdf from '../assets/TAF_25-26J-479.pdf';

const Presentations = () => {
  const slides = [
    { title: "Proposal Presentation", desc: "Slides from the initial proposal.", file: proposalPres },
    { title: "Progress Presentation 1", desc: "First progress evaluation slides.", file: pp1Pres },
    { title: "Progress Presentation 2", desc: "Second progress evaluation slides.", file: pp2Pres },
    { title: "Final Presentation", desc: "Comprehensive final presentation slides.", file: placeholderPdf }
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
            <a href={s.file} download className="btn-download" style={{ display: 'inline-block', textDecoration: 'none' }}>Download PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentations;
