import React from 'react';
import '../styles/Pages.css';

const Milestones = () => {
  const timelineEvents = [
    { name: "Brainstorming & Group Registration", date: "March - May 2025", desc: "Initial brainstorming workshop, supervisor selection, and finalizing the research group registration." },
    { name: "Topic Assessment & Charter", date: "June - July 2025", desc: "Submitting the Topic Assessment Form (TAF) and finalizing the Project Charter after topic acceptance." },
    { name: "Proposal Reports & Presentation", date: "August - September 2025", desc: "Drafting the proposal, presenting it to the panel (8-12 Sep), and submitting the final proposal report for marking (19 Sep)." },
    { name: "Progress Presentation I", date: "December 15-19, 2025", desc: "First major evaluation of system implementation along with the submission of Check List I." },
    { name: "Progress Presentation II", date: "March 2026", desc: "Second major evaluation showcasing near-complete system functionality along with Check List II." },
    { name: "Final Reports & Research Paper", date: "March - April 2026", desc: "Submission of the final research paper and comprehensive final project reports." },
    { name: "Final Presentation & VIVA", date: "May 2026", desc: "Final defense of the project, including the system presentation and individual viva evaluations." },
    { name: "Website & Logbook Submission", date: "June 2026", desc: "Final submission of the project website, research logbook, and thesis with proofreader sign-off." }
  ];

  const assessments = [
    { name: "Proposal Presentation", marks: "6%" },
    { name: "Proposal Report", marks: "6%" },
    { name: "Progress Presentation-1 (50%)", marks: "15%" },
    { name: "Progress Presentation-2 (90%)", marks: "18%" },
    { name: "Final Report", marks: "15%" },
    { name: "Final Report (Group)", marks: "4%" },
    { name: "Final presentation", marks: "10%" },
    { name: "Viva", marks: "10%" },
    { name: "Website", marks: "2%" },
    { name: "Research paper", marks: "10%" },
    { name: "Check Lists", marks: "2%" },
    { name: "Logbook", marks: "2%" }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
      <h2 className="section-title">Project Milestones</h2>

      <div className="assessment-schedule" style={{ marginBottom: '60px' }}>
        <h3 style={{ textAlign: 'left', marginBottom: '20px', color: 'var(--primary)', fontSize: '1.5rem', borderBottom: '2px solid #f0fdf4', paddingBottom: '10px' }}>
          Assessment Schedule
        </h3>
        <div className="marks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
          {assessments.map((a, i) => (
            <div key={i} className="mark-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--primary)' }}>
              <span style={{ fontWeight: '500', color: '#374151' }}>{a.name}</span>
              <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{a.marks}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 style={{ textAlign: 'left', marginBottom: '30px', color: 'var(--primary)', fontSize: '1.5rem', borderBottom: '2px solid #f0fdf4', paddingBottom: '10px' }}>
        Tentative Assessment Timeline
      </h3>
      <div className="timeline" style={{ margin: '0' }}>
        {timelineEvents.map((m, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{m.name}</h3>
              <div className="timeline-meta" style={{ display: 'flex', gap: '20px', marginBottom: '15px', fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>
                <span className="date">📅 {m.date}</span>
              </div>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
