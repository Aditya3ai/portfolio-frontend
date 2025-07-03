import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import imageAditya from '../assets/aws/image_Aditya.jpg';
import educationIcon from '../assets/aws/graduation.png';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <div className="about-top-row">
          <div className="about-photo">
            <img src={imageAditya} alt="Aditya" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am Aditya R from Sri Sairam Engineering College currently pursuing B.E in AIML 4th year. My primary domain is AIML but strong interests and most of my work are from cloud and DevOps. I build and deploy robust and scalable modules with best stacks.
            </p>
            <p>
              My specialization is in AWS cloud, DevOps, Postgres, and backend. Currently, I am expanding my expertise in Linux and operating systems.
            </p>
          </div>
        </div>

        <div className="about-bottom-boxes">
          <div className="box edu-card">
            <img src={educationIcon} alt="Education Icon" className="edu-icon" />
            <div className="edu-info">
              <strong>HSC</strong>
              <p>Chinmaya Vidyalaya Higher Secondary School</p>
              <p>2020 – 2022</p>
              <p>Score: 92.83%</p>
            </div>
          </div>
          <div className="box edu-card">
            <img src={educationIcon} alt="Education Icon" className="edu-icon" />
            <div className="edu-info">
              <strong>SSLC</strong>
              <p>Padma Sarangapani Higher Secondary School</p>
              <p>2019 – 2020</p>
              <p>Score: 83.20%</p>
            </div>
          </div>
          <div className="box edu-card">
            <img src={educationIcon} alt="Education Icon" className="edu-icon" />
            <div className="edu-info">
              <strong>B.E – CSE (AI & ML)</strong>
              <p>Sri Sairam Engineering College</p>
              <p>2022 – 2026</p>
              <p>CGPA: 8.89</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
