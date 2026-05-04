import React from 'react';
import '../styles/Pages.css';

const Milestones = () => {
  const timelineEvents = [
    { name: "Brainstorming & Group Registration", date: "March – May 2025", desc: "Initial brainstorming workshop, supervisor selection, and finalizing the research group registration." },
    { name: "Topic Assessment & Charter", date: "June – July 2025", desc: "Submitting the Topic Assessment Form (TAF) and finalizing the Project Charter after topic acceptance." },
    { name: "Proposal Reports & Presentation", date: "August – September 2025", desc: "Drafting the proposal, presenting it to the panel (8–12 Sep), and submitting the final proposal report for marking (19 Sep)." },
    { name: "Progress Presentation I", date: "December 15–19, 2025", desc: "First major evaluation of system implementation along with the submission of Check List I." },
    { name: "Progress Presentation II", date: "March 2026", desc: "Second major evaluation showcasing near-complete system functionality along with Check List II." },
    { name: "Final Reports & Research Paper", date: "March – April 2026", desc: "Submission of the final research paper and comprehensive final project reports." },
    { name: "Final Presentation & VIVA", date: "May 2026", desc: "Final defense of the project, including the system presentation and individual viva evaluations." },
    { name: "Website & Logbook Submission", date: "June 2026", desc: "Final submission of the project website, research logbook, and thesis with proofreader sign-off." },
  ];

  const assessments = [
    { name: "Proposal Presentation", marks: "6%" },
    { name: "Proposal Report", marks: "6%" },
    { name: "Progress Presentation-1 (50%)", marks: "15%" },
    { name: "Progress Presentation-2 (90%)", marks: "18%" },
    { name: "Final Report", marks: "15%" },
    { name: "Final Report (Group)", marks: "4%" },
    { name: "Final Presentation", marks: "10%" },
    { name: "Viva", marks: "10%" },
    { name: "Website", marks: "2%" },
    { name: "Research Paper", marks: "10%" },
    { name: "Check Lists", marks: "2%" },
    { name: "Logbook", marks: "2%" },
  ];

  return (
    <div className="fade-in">
      <div className="milestones-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="scope-tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span className="scope-tag-dot" />
            Project Timeline
          </div>
          <h1>Milestones &amp; Assessments</h1>
          <p>Key delivery phases and evaluation schedule for the CeylonPepper research project.</p>
        </div>
      </div>

      <div className="milestones-page">
        {/* Assessment Schedule */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ marginBottom: '28px' }}>
            <div className="section-tag">Assessment Schedule</div>
            <h2 className="section-title">Marking <span>Breakdown</span></h2>
          </div>
          <div className="assessment-grid">
            {assessments.map((a, i) => (
              <div className="mark-card" key={i}>
                <span className="mark-card-name">{a.name}</span>
                <span className="mark-card-val">{a.marks}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <div className="section-tag">Timeline</div>
            <h2 className="section-title">Project <span>Journey</span></h2>
          </div>
          <div className="timeline">
            {timelineEvents.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{m.name}</h3>
                  <div className="timeline-date">📅 {m.date}</div>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;