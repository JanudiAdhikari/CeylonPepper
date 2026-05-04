import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pages.css';

const Milestones = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div ref={sectionRef} className={`container ${isVisible ? 'page-animated' : ''}`} style={{ padding: '80px 20px', maxWidth: '1000px' }}>
      <div className="badge-container anim-item anim-delay-1">
        <span className="section-badge">Project Timeline</span>
      </div>
      <div className="anim-item anim-delay-1">
        <h2 className="section-title">Project Milestones</h2>
      </div>

      <div className="assessment-schedule" style={{ marginBottom: '80px' }}>
        <div className="anim-item anim-delay-2">
          <h3 className="milestone-subtitle">Assessment Schedule</h3>
        </div>
        <div className="marks-grid">
          {assessments.map((a, i) => (
            <div key={i} className={`mark-card anim-item anim-delay-${(i % 4) + 1}`}>
              <span className="mark-name">{a.name}</span>
              <span className="mark-val">{a.marks}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="anim-item anim-delay-1">
        <h3 className="milestone-subtitle">Tentative Assessment Timeline</h3>
      </div>
      
      <div className="timeline">
        {timelineEvents.map((m, i) => (
          <div className={`timeline-item anim-item anim-delay-${(i % 4) + 2}`} key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{m.name}</h3>
              <div className="timeline-meta">
                <span className="date">📅 {m.date}</span>
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
