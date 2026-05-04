import React from 'react';
import '../styles/Pages.css';

const driveLink = "https://drive.google.com/drive/u/0/folders/1exIfd-c7729cKTegBXncKqgUFlIxhDfB?ths=true";
const getLink = (id) => id ? `https://drive.google.com/file/d/${id}/view` : driveLink;

const Presentations = () => {
  const slides = [
    {
      title: "Proposal Presentation",
      desc: "Initial research proposal slides presented to the evaluation panel.",
      file: getLink("11-lm9q6pvxswFlB1hS1rFbinWLOL8ZtP"),
      badge: "Sep 2025",
    },
    {
      title: "Progress Presentation 1",
      desc: "First progress evaluation showcasing 50% system implementation.",
      file: getLink("1BGGA1q_INlq4JB9IxElBtptWjHnYOF6U"),
      badge: "Dec 2025",
    },
    {
      title: "Progress Presentation 2",
      desc: "Second progress evaluation with 90% complete system functionality.",
      file: getLink("17FT12JekoOogWiepcAuko9x9ktaHU8RA"),
      badge: "Mar 2026",
    },
    {
      title: "Final Presentation",
      desc: "Comprehensive final system presentation and project defense.",
      file: driveLink,
      badge: "May 2026",
    },
  ];

  return (
    <div className="fade-in">
      <div className="milestones-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="scope-tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span className="scope-tag-dot" />
            Slide Decks
          </div>
          <h1>Project <em style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>Presentations</em></h1>
          <p>All evaluation slide decks from proposal through to the final presentation.</p>
        </div>
      </div>

      <div className="presentations-page">
        <div className="pres-grid">
          {slides.map((s, i) => (
            <div className="presentation-card" key={i}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                <div className="pres-icon">📊</div>
                <span style={{ background: 'rgba(26,107,46,0.08)', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(26,107,46,0.15)' }}>
                  {s.badge}
                </span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <a href={s.file} target="_blank" rel="noopener noreferrer" className="btn-download">
                View Slides
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations;