import React, { useState } from 'react';
import './Contact.css';

import githubIcon from '../assets/aws/github.svg';
import linkedinIcon from '../assets/aws/linkedin.svg';
import credlyIcon from '../assets/aws/credly.png';

const Contact = () => {
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
      <div className="contact-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h2 className="contact-title">Let's Build Something Together</h2>
            <p className="contact-sub">Available for AI, Cloud & Full-Stack work — reach out and let's collaborate.</p>
          </div>

          <div className="hero-rocket" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#00e0c0" />
                  <stop offset="1" stopColor="#00c2ff" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0" stopColor="#ffd36b" />
                  <stop offset="1" stopColor="#ff8a5b" />
                </linearGradient>
              </defs>

              <g transform="translate(8,4)">
                <path d="M22 2c-4 0-12 6-12 12s8 18 12 20 12-8 12-12S26 2 22 2z" fill="url(#g1)" />
                <rect x="18" y="18" width="8" height="6" rx="2" fill="#081016" opacity="0.12" />
                <circle cx="22" cy="10" r="2.2" fill="#00121a" opacity="0.6" />

                <g className="rocket-flame" transform="translate(18,28)">
                  <path d="M6 0c3 3 4 6 0 8-4-2-3-5 0-8z" fill="url(#g2)" opacity="0.95" />
                  <path d="M8 2c2 2 2.5 4 0 5-2.5-1-2-3 0-5z" fill="#fff" opacity="0.14" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-panel contact-panel--form">
          <h3 className="panel-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="row two">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
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
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your project or question..."
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Send Message</button>
              <span className="status-wrap">{status && <span className="status-message">{status}</span>}</span>
            </div>
          </form>
        </div>

        <aside className="contact-panel contact-panel--info">
          <h3 className="panel-title">Contact Info</h3>

          <div className="info-card">
            <div className="info-title">Email</div>
            <a href="mailto:aditya.aitech2@gmail.com" className="info-value">aditya.aitech2@gmail.com</a>
          </div>

          <div className="info-card">
            <div className="info-title">Location</div>
            <div className="info-value">Chennai, India</div>
          </div>

          <div className="info-card">
            <div className="info-title">Open To</div>
            <div className="info-value">Internships · Freelance · AI/Cloud Projects</div>
          </div>

          <div className="socials">
            <a className="social-btn" href="https://github.com/Aditya3ai" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" /> <span>GitHub</span>
            </a>

            <a className="social-btn" href="https://www.linkedin.com/in/aditya-r-869819254" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" /> <span>LinkedIn</span>
            </a>

            <a className="social-btn" href="https://www.credly.com/users/aditya-r.b6d8a45a/edit#credly" target="_blank" rel="noreferrer" aria-label="Credly">
              <img src={credlyIcon} alt="Credly" /> <span>Credly</span>
            </a>
          </div>

        </aside>
      </div>

      <footer className="footer">All credits © Aditya 2025</footer>
    </section>
  );
};

export default Contact;
