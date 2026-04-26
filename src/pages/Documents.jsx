import React from 'react';
import '../styles/Pages.css';

const driveLink = "https://drive.google.com/drive/u/0/folders/1exIfd-c7729cKTegBXncKqgUFlIxhDfB?ths=true";
const getLink = (id) => id ? `https://drive.google.com/file/d/${id}/view` : driveLink;

const Documents = () => {
  const documentGroups = [
    {
      groupTitle: "Topic Assessment Form (TAF)",
      docs: [
        { title: "TAF Document", desc: "Initial topic assessment form submitted for approval.", file: getLink("1kNlOSyvuqFj-YhmRNDm5depbuR6RWhnk") }
      ]
    },
    {
      groupTitle: "Proposal Reports",
      docs: [
        { title: "Yield Prediction Proposal", desc: "Component proposal report.", file: getLink("1gkcuHEHewXYLBB1W18goVWr727-1LHB_") },
        { title: "Disease Detection Proposal", desc: "Component proposal report.", file: getLink("1mUWZKkAVuH1LG_WHX7yxCZqBOYrisqbD") },
        { title: "Quality Grading Proposal", desc: "Component proposal report.", file: getLink("1WJN9L0VHIJVejdgwK2e3KAlKmBOMKPpg") },
        { title: "Price Forecasting Proposal", desc: "Component proposal report.", file: getLink("1EdGWYH8OxlttBy_CbUhWF1oYWjAR9nyI") }
      ]
    },
    {
      groupTitle: "Checklists",
      docs: [
        { title: "Checklist 1", desc: "First progress tracking checklist.", file: getLink("1AfT0jToGXFJe8u1EbFaRok8vx8OzvD_o") },
        { title: "Checklist 2", desc: "Second progress tracking checklist.", file: getLink("1yVeRuMwLPaiiOPJebl2tIc7T0JCTTIXN") }
      ]
    },
    {
      groupTitle: "Final Reports",
      docs: [
        { title: "Final Report (Group)", desc: "Comprehensive final group report.", file: driveLink },
        { title: "Yield Prediction Final", desc: "Component final report.", file: driveLink },
        { title: "Disease Detection Final", desc: "Component final report.", file: driveLink },
        { title: "Quality Grading Final", desc: "Component final report.", file: driveLink },
        { title: "Price Forecasting Final", desc: "Component final report.", file: driveLink }
      ]
    },
    {
      groupTitle: "Research Paper",
      docs: [
        { title: "Research Paper", desc: "Finalized research paper for publication.", file: getLink("1Q11SOmvkkcwRoS0qyffecc4LC-p56xf3") }
      ]
    }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
      <h2 className="section-title">Project Documents</h2>
      <p className="text-center" style={{ marginBottom: '40px', color: 'var(--text-light)' }}>
        Downloadable resources and finalized research papers for the CeylonPepper project.
      </p>
      
      {documentGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid #f0fdf4', paddingBottom: '10px' }}>
            {group.groupTitle}
          </h3>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {group.docs.map((doc, i) => (
              <div className="download-card" key={i} style={{ padding: '20px' }}>
                <div className="doc-icon" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📄</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{doc.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>{doc.desc}</p>
                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="btn-download" style={{ display: 'inline-block', textDecoration: 'none' }}>
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documents;
