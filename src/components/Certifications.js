import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

import aiIcon from '../assets/aws/ai_practioner.png';
import ccIcon from '../assets/aws/CC_practiitoner.png';

const certs = [
  {
    img: aiIcon,
    title: 'AWS Certified AI Practitioner',
    subtitle: 'Successfully passed the AWS Certified AI Practitioner exam. - NOV 2',
    url: 'https://www.credly.com/badges/918da399-f930-4306-bc63-e705cdee4c46',
  },
  {
    img: ccIcon,
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Successfully passed the AWS Certified Cloud Practitioner exam. - AUG 24',
    url: 'https://www.credly.com/badges/6b33ea2d-93a1-4f13-9a8f-3f0f99edd20b',
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications-section cyberpunk-certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="certs-header">
        <h2 className="neon-heading">CERTIFICATIONS</h2>
        <h3 className="subheading">Certifications & Achievements</h3>
      </div>

      <div className="cert-grid">
        {certs.map(({ img, title, subtitle, url }, idx) => (
          <motion.a
            key={title}
            className="cert-card"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — opens Credential in new tab`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="cert-media">
              <img src={img} alt={title} />
            </div>
            <div className="cert-body">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
