import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Leaf className="logo-icon" />
            <span className="logo-text">Ceylon Pepper</span>
          </div>
          <p>AI-Powered Intelligent Decision Support System for Smart Pepper Farming in Sri Lanka</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/domain">Domain</Link></li>
            <li><Link to="/milestones">Milestones</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>SLIIT Research Project</p>
          <p>Email: research@ceylonpepper.lk</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ceylon Pepper Project Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
