import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_circle.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="CeylonPepper Logo" className="logo-icon" />
                        <span className="logo-text">CeylonPepper</span>
                    </div>
                    <p>Revolutionizing pepper farming in Sri Lanka through innovative Machine Learning and Blockchain solutions for a smarter agricultural future.</p>
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
                    <h4>Get In Touch</h4>
                    <p>📍 SLIIT, Sri Lanka</p>
                    <p>📧 researchsliit479@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CeylonPepper Project Group. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
