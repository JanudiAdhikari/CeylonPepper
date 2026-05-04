import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Accordion.css';

const AccordionItem = ({ icon: Icon, title, children, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onToggle}>
        <div className="accordion-title-wrapper">
          <div className="accordion-icon-wrap">
            <Icon className="accordion-icon" size={20} />
          </div>
          <span className="accordion-title">{title}</span>
        </div>
        <div className="accordion-chevron-wrap">
          {isOpen
            ? <ChevronUp className="accordion-chevron" />
            : <ChevronDown className="accordion-chevron" />}
        </div>
      </button>
      {isOpen && (
        <div className="accordion-body">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;