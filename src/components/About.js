import React from 'react';
import './About.css';
import imageAditya from '../assets/aws/image_Aditya.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container layout-split">
        <div className="content-left">
          <h1 className="big-name reveal delay-0 neon-heading">Aditya R</h1>
          <p className="lead reveal delay-1">
            I am Aditya R from Sri Sairam Engineering College, currently pursuing B.E in AIML (4th year). My primary domain is AIML, but I have strong interests and most of my work is in Cloud and DevOps. I am an AWS Certified Cloud Practitioner and AI Practitioner, and I am currently training for Solutions Architect.
          </p>

          {/* CTA removed per request */}

          
          
          <div className="education-boxes" aria-label="Education">
            <div className="edu-box">
              <div className="edu-content">
                <div className="edu-title">HSC – Chinmaya Vidyalaya Higher Secondary School</div>
                <div className="edu-meta">2020 – 2022</div>
              </div>
              <div className="edu-score">92.83%</div>
            </div>

            <div className="edu-box">
              <div className="edu-content">
                <div className="edu-title">SSLC – Padma Sarangapani Higher Secondary School</div>
                <div className="edu-meta">2019 – 2020</div>
              </div>
              <div className="edu-score">83.20%</div>
            </div>

            <div className="edu-box">
              <div className="edu-content">
                <div className="edu-title">B.E CSE (AI & ML) – Sri Sairam Engineering College</div>
                <div className="edu-meta">2022 – 2026</div>
              </div>
              <div className="edu-score">CGPA: 8.82</div>
            </div>
          </div>
        </div>

        <div className="photo-right">
          <div className="photo-wrap">
            <img src={imageAditya} alt="Aditya" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
