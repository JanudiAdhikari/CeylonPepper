import React from 'react';
import '../styles/Pages.css';

const driveLink = "https://drive.google.com/drive/u/0/folders/1exIfd-c7729cKTegBXncKqgUFlIxhDfB?ths=true";
const getLink = (id) => id ? `https://drive.google.com/file/d/${id}/view` : driveLink;

const Presentations = () => {
  const slides = [
    { title: "Proposal Presentation", desc: "Slides from the initial proposal.", file: getLink("11-lm9q6pvxswFlB1hS1rFbinWLOL8ZtP") },
    { title: "Progress Presentation 1", desc: "First progress evaluation slides.", file: getLink("1BGGA1q_INlq4JB9IxElBtptWjHnYOF6U") },
    { title: "Progress Presentation 2", desc: "Second progress evaluation slides.", file: getLink("17FT12JekoOogWiepcAuko9x9ktaHU8RA") },
    { title: "Final Presentation", desc: "Comprehensive final presentation slides.", file: driveLink }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Presentation Slides</h2>
      <div className="card-grid">
        {slides.map((s, i) => (
          <div className="presentation-card" key={i}>
            <div className="pres-icon">📊</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <a href={s.file} target="_blank" rel="noopener noreferrer" className="btn-download" style={{ display: 'inline-block', textDecoration: 'none' }}>
              View Slides
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentations;
