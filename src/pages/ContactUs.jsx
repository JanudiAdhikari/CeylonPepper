import React from 'react';
import '../styles/Pages.css';

const ContactUs = () => {
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

        <form className="contact-form" action="https://formsubmit.co/researchsliit479@gmail.com" method="POST">
          <h3>Send us a Message</h3>
          
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact Message from CeylonPepper Website" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
