import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We're here to help with any questions</p>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-section">
            {submitted ? (
              <div className="submission-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Paradise Beach Road</p>
              <p>Tropical Island, TI 12345</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>Main: +1 (555) 123-4567</p>
              <p>Reservations: +1 (555) 123-4568</p>
            </div>

            <div className="info-card">
              <h3>✉️ Email</h3>
              <p>info@paradiseresort.com</p>
              <p>bookings@paradiseresort.com</p>
            </div>

            <div className="info-card">
              <h3>🕐 Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
              <p className="note">24/7 Emergency Support Available</p>
            </div>

            <div className="info-card">
              <h3>🌐 Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <p>Map would be displayed here</p>
            <p className="map-info">Paradise Resort - 123 Paradise Beach Road</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
