import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Resume Generator',
    description:
      'A minimal and efficient resume generator built using Streamlit for rapid UI, styled with HTML/CSS, and containerized with Docker for seamless deployment.',
    tech: ['Streamlit', 'HTML/CSS', 'Docker'],
    link: 'https://github.com/yourusername/resume-generator',
  },
  {
    title: 'Plan X Final',
    description:
      'A smart invitation generation platform. Frontend is crafted with HTML/CSS, Flask powers the backend, and PostgreSQL manages structured data storage.',
    tech: ['HTML/CSS', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/yourusername/plan-x-final',
  },
  {
    title: 'Attendance System',
    description:
      'Built for real-time attendance tracking during an internship. Designed with robust backend logic and structured under professional supervision.',
    tech: ['Flask', 'SQL', 'Python'],
    link: 'https://github.com/yourusername/attendance-system',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map(({ title, description, tech, link }) => (
          <motion.div
            key={title}
            className="project-card fancy-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="tech-list">
              {tech.map((t) => (
                <span key={t} className="tech-item">
                  {t}
                </span>
              ))}
            </div>

            <a href={link} target="_blank" rel="noreferrer" className="project-link">
              {'View on GitHub'.split('').map((char, idx) => (
                <span
                  key={idx}
                  style={{
                    animationDelay: `${idx * 0.03}s`,
                    marginRight: char === ' ' ? '0.25em' : '0',
                    display: 'inline-block',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </a>

            {/* Shine + Tiles + Lines */}
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`tile tile-${i + 1}`}></div>
                ))}
              </div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
