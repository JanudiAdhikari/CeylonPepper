import React from 'react';
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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#domain">Domain</a></li>
                        <li><a href="#milestones">Milestones</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Get In Touch</h4>
                    <p>📍 SLIIT, Sri Lanka</p>
                    <p>📧 researchsliit479@gmail.com</p>
                    <p>📞 <a href="tel:0703839481" style={{ color: '#94a3b8', textDecoration: 'none' }}>070 3839 481</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CeylonPepper Project Group. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
