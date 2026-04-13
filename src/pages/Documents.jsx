import React from 'react';
import '../styles/Pages.css';

const Documents = () => {
  const docs = [
    { title: "Project Charter", desc: "Official project authorization document outlining scope and objectives." },
    { title: "Proposal Document", desc: "Detailed proposal covering the research gap, problem, and methodology." },
    { title: "Checklists", desc: "Requirement gathering and architectural checklists for progress tracking." },
    { title: "Final Report", desc: "Complete research compilation, evaluation results, and future work." }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Project Documents</h2>
      <p className="text-center" style={{ marginBottom: '40px' }}>Downloadable resources and finalized research papers for the CeylonPepper project.</p>
      
      <div className="card-grid">
        {docs.map((doc, i) => (
          <div className="download-card" key={i}>
            <div className="doc-icon">📄</div>
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
            <button className="btn-download" onClick={(e) => {e.preventDefault(); alert('Document Placeholder')}}>Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
