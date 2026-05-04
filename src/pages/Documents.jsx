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
    <div className="container fade-in docs-page-container">
      <div className="badge-container">
        <span className="section-badge">Resources</span>
      </div>
      <h2 className="section-title">Project Documents</h2>
      <p className="docs-intro-text">
        Downloadable resources and finalized research papers for the CeylonPepper project
      </p>
      
      {documentGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <h3 className="doc-group-title">
            {group.groupTitle}
          </h3>
          <div className="card-grid docs-card-grid">
            {group.docs.map((doc, i) => (
              <div className="download-card doc-card-padding" key={i}>
                <div className="doc-icon doc-icon-styled">📄</div>
                <h4 className="doc-title-text">{doc.title}</h4>
                <p className="doc-desc-text">{doc.desc}</p>
                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="btn-download doc-view-link">
                   View PDF
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
