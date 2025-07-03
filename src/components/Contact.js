import React, { useState } from 'react';
import './Contact.css';

import githubIcon from '../assets/aws/github.svg';
import linkedinIcon from '../assets/aws/linkedin.svg';
import emailIcon from '../assets/aws/email.svg';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://portfolio-backend-bq1w.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-icons">
        <a href="https://github.com/Aditya3ai" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-r-869819254" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <button
          onClick={() => alert('Email: aditya.aitech2@gmail.com')}
          className="icon-button"
          aria-label="Email"
        >
          <img src={emailIcon} alt="Email" />
        </button>
      </div>

      <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close' : 'Message Me'}
      </button>

      {showForm && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
          </label>

          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      )}

      <footer className="footer">All credits © Aditya 2025</footer>
    </section>
  );
};

export default Contact;
