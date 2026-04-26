import React from 'react';
import '../styles/Pages.css';
import tafFile from '../assets/TAF_25-26J-479.pdf';
import yieldPropFile from '../assets/yield_proposal.pdf';
import diseasePropFile from '../assets/disease_proposal.pdf';
import qualityPropFile from '../assets/quality_proposal.pdf';
import pricePropFile from '../assets/price_proposal.pdf';
import cl1File from '../assets/checklist1.pdf';
import cl2File from '../assets/checklist2.pdf';
import researchPprFile from '../assets/research_ppr.pdf';

const Documents = () => {
  const documentGroups = [
    {
      groupTitle: "Topic Assessment Form (TAF)",
      docs: [
        { title: "TAF Document", desc: "Initial topic assessment form submitted for approval.", file: tafFile }
      ]
    },
    {
      groupTitle: "Proposal Reports",
      docs: [
        { title: "Yield Prediction Proposal", desc: "Component proposal report.", file: yieldPropFile },
        { title: "Disease Detection Proposal", desc: "Component proposal report.", file: diseasePropFile },
        { title: "Quality Grading Proposal", desc: "Component proposal report.", file: qualityPropFile },
        { title: "Price Forecasting Proposal", desc: "Component proposal report.", file: pricePropFile }
      ]
    },
    {
      groupTitle: "Checklists",
      docs: [
        { title: "Checklist 1", desc: "First progress tracking checklist.", file: cl1File },
        { title: "Checklist 2", desc: "Second progress tracking checklist.", file: cl2File }
      ]
    },
    {
      groupTitle: "Final Reports",
      docs: [
        { title: "Final Report (Group)", desc: "Comprehensive final group report.", file: tafFile },
        { title: "Yield Prediction Final", desc: "Component final report.", file: tafFile },
        { title: "Disease Detection Final", desc: "Component final report.", file: tafFile },
        { title: "Quality Grading Final", desc: "Component final report.", file: tafFile },
        { title: "Price Forecasting Final", desc: "Component final report.", file: tafFile }
      ]
    },
    {
      groupTitle: "Research Paper",
      docs: [
        { title: "Research Paper", desc: "Finalized research paper for publication.", file: researchPprFile }
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
                <a href={doc.file} download className="btn-download" style={{ display: 'inline-block', textDecoration: 'none' }}>
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
