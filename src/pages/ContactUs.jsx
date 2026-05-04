import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Pages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch("https://formsubmit.co/ajax/81f3b303ca9745fd8b9cc60f4f735e6d", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: "New Contact Message from CeylonPepper Website", _template: "table", ...formData }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fade-in">
      <div className="contact-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="scope-tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span className="scope-tag-dot" />
            Get In Touch
          </div>
          <h1>Contact <em style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>Us</em></h1>
          <p>Have questions about our research? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="contact-page">
        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <h3 className="contact-info-title">Let's connect</h3>
            <p className="contact-info-sub">Reach out about our research, collaboration opportunities, or just to say hello.</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon"><Mail size={20} /></div>
                <div className="contact-item-content">
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">
                    <a href="mailto:researchsliit479@gmail.com">researchsliit479@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><MapPin size={20} /></div>
                <div className="contact-item-content">
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">SLIIT Malabe Campus,<br />New Kandy Road, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><Phone size={20} /></div>
                <div className="contact-item-content">
                  <p className="contact-item-label">Phone</p>
                  <p className="contact-item-value">
                    <a href="tel:0703839481">070 3839 481</a>
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '48px', padding: '20px', background: 'rgba(255,255,255,0.07)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                🌿 CeylonPepper is a final year research project at SLIIT, Sri Lanka. We welcome collaboration from agricultural experts and technology partners.
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-sub">We'll get back to you within 48 hours.</p>

            {status === 'success' && (
              <div className="alert-success">✅ Message sent! We'll get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className="alert-error">❌ Failed to send. Please try again later.</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required disabled={status === 'submitting'} />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your message..." required disabled={status === 'submitting'} />
              </div>
              <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ opacity: status === 'submitting' ? 0.65 : 1 }}>
                {status === 'submitting' ? '⏳ Sending...' : '✉️ Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;