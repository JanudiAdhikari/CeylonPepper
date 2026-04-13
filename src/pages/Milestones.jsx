import React from 'react';
import '../styles/Pages.css';

const Milestones = () => {
  const milestones = [
    { name: "Project Proposal", date: "February 2026", marks: "10%", desc: "Initial presentation of the research problem, methodology, and the proposed AI-based solution for pepper farming." },
    { name: "Progress Presentation 1", date: "April 2026", marks: "15%", desc: "Demonstration of the basic architecture, initial dataset collection, and preliminary models for yield and disease." },
    { name: "Progress Presentation 2", date: "July 2026", marks: "15%", desc: "Display of the fully trained models, integration of the backend, and early frontend UI." },
    { name: "Final Evaluation", date: "September 2026", marks: "40%", desc: "Comprehensive evaluation of the entire system including the market forecasting and grading components." },
    { name: "Viva", date: "October 2026", marks: "20%", desc: "Final verbal examination and defense of the research findings and engineering practices." }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Project Milestones</h2>
      <div className="timeline">
        {milestones.map((m, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{m.name}</h3>
              <div className="timeline-meta">
                <span className="date">📅 {m.date}</span>
                <span className="marks">⭐ {m.marks} Allocated</span>
              </div>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
