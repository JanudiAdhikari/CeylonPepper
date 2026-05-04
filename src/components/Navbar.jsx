import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_circle.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Domain', id: 'domain' },
    { name: 'Milestones', id: 'milestones' },
    { name: 'Documents', id: 'documents' },
    { name: 'Presentations', id: 'presentations' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact', cta: true },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a className="navbar-logo" href="#home">
          <img src={logo} alt="CeylonPepper" className="logo-icon" />
          <span className="logo-text">CeylonPepper</span>
        </a>

        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className={`nav-link${link.cta ? ' cta' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;