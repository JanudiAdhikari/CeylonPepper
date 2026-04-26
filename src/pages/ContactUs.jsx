import React, { useState } from 'react';
import '../styles/Pages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/81f3b303ca9745fd8b9cc60f4f735e6d", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Contact Message from CeylonPepper Website",
          _template: "table",
          ...formData
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setStatus(''), 5000); // Hide success message after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>If you have any questions about our research project or wish to learn more, feel free to contact us.</p>
          <div className="info-block">
            <strong>Email:</strong> <a href="mailto:researchsliit479@gmail.com">researchsliit479@gmail.com</a>
          </div>
          <div className="info-block">
            <strong>Address:</strong><br />
            SLIIT Malabe Campus,<br />
            New Kandy Road, Malabe,<br />
            Sri Lanka.
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>

          {status === 'success' && (
            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontWeight: '500' }}>
              Message sent successfully! We will get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontWeight: '500' }}>
              Failed to send message. Please try again later.
            </div>
          )}

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required disabled={status === 'submitting'} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required disabled={status === 'submitting'} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" required disabled={status === 'submitting'}></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ opacity: status === 'submitting' ? 0.7 : 1 }}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
