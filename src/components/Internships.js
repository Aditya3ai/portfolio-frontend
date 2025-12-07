import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Internships.css';

import iconetLogo from '../assets/aws/talkpro.png';
import millionDreamsLogo from '../assets/aws/milliondreams.jpeg';
import neubaiticsLogo from '../assets/aws/nuebaitics.jpeg';
import InternshipsCanvas from './InternshipsCanvas';

const internships = [
  {
    company: 'Software Trainee',
    role: 'Iconet',
    duration: 'June 2025 – Present',
    description: [
      'Developing a scalable Task Scheduler System to automate and optimize tender workflows with real-time tracking.',
      'Integrated cloud technologies and server-side architecture to enable real-time task execution and enterprise-level reliability.',
    ],
    logo: iconetLogo,
  },
  {
    company: 'Business Development Freelancer',
    role: 'Million Dreams',
    duration: 'June 2024 – Present',
    description: [
      'Crafted engagement strategies for small businesses, boosting participation by 30% through outreach and tailored solutions.',
      'Collaborated with a 20-member team on enhancement initiatives; earned a stipend-based role by solving 10+ data analysis challenges with actionable strategies.',
    ],
    logo: millionDreamsLogo,
  },
  {
    company: 'AI Engineer Intern',
    role: 'NuebAItics',
    duration: 'Dec 2024 – Mar 2025',
    description: [
      'Built an Intelligent Attendance Tracking System with real-time visualization and anomaly detection models.',
      'Designed a deep learning-based anomaly detection model for anti-theft systems, inspired by financial fraud algorithms, achieving 94% accuracy.',
    ],
    logo: neubaiticsLogo,
  },
];

const Internships = () => {
  const sectionRef = useRef(null);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.section
      id="internships"
      className="internships-section"
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <InternshipsCanvas containerRef={sectionRef} prefersReduced={prefersReduced} />

      <h2>Internships & Freelance</h2>

      <div className="internship-list">
        {internships.map(({ company, role, duration, description, logo }) => (
          <motion.div
            key={company}
            className="internship-card internship-card--intern"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`tile tile-${i + 1}`}></div>
                ))}
              </div>
            </div>

            {logo && (
              <div className="internship-logo">
                <img src={logo} alt={`${company} logo`} />
              </div>
            )}

            <div className="internship-info">
              <h3>{role}</h3>
              <h4>{company}</h4>
              <p className="duration">{duration}</p>
              <ul className="description-list">
                {description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Internships;
