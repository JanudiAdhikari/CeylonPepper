import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Accordion.css';

const AccordionItem = ({ icon: Icon, title, children, isOpen: defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title-wrapper">
          <Icon className="accordion-icon" />
          <span className="accordion-title">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="accordion-chevron" /> : <ChevronDown className="accordion-chevron" />}
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
