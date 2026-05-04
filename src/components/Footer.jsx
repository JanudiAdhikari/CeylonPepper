import React from 'react';
import { Mail, MapPin, Phone, Leaf } from 'lucide-react';
import logo from '../assets/logo_circle.png';
import '../styles/Footer.css';

const Footer = () => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Domain', id: 'domain' },
    { name: 'Milestones', id: 'milestones' },
    { name: 'About Us', id: 'about' },
    { name: 'Documents', id: 'documents' },
    { name: 'Presentations', id: 'presentations' },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg-pattern" />
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src={logo} alt="CeylonPepper" className="footer-logo-img" />
            <span className="footer-logo-text">CeylonPepper</span>
          </div>
          <p className="footer-brand-desc">
            Revolutionizing pepper farming in Sri Lanka through innovative Machine Learning and Blockchain solutions — building a smarter, more transparent agricultural future.
          </p>
          <div className="footer-badge">
            <Leaf size={13} />
            SLIIT Research Project · 2025–2026
          </div>
        </div>

        <div>
          <p className="footer-col-title">Navigation</p>
          <ul className="footer-links-list">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={`#${link.id}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Research</p>
          <ul className="footer-links-list">
            <li><a href="#domain">Methodology</a></li>
            <li><a href="#domain">Literature Survey</a></li>
            <li><a href="#documents">Publications</a></li>
            <li><a href="#documents">Research Paper</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Contact</p>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><Mail size={16} /></div>
              <div className="footer-contact-text">
                <a href="mailto:researchsliit479@gmail.com">researchsliit479@gmail.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><MapPin size={16} /></div>
              <div className="footer-contact-text">
                SLIIT Malabe Campus,<br />New Kandy Road, Sri Lanka
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><Phone size={16} /></div>
              <div className="footer-contact-text">
                <a href="tel:0703839481">070 3839 481</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CeylonPepper Project Group. All rights reserved.</p>
        <div className="footer-bottom-badge">
          <Leaf size={11} />
          Built with passion for Sri Lankan farmers
        </div>
      </div>
    </footer>
  );
};

export default Footer;