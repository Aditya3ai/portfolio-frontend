import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.clean.css';
import githubIcon from '../assets/aws/github.svg';
import ProjectsCanvas from './ProjectsCanvas';

const projects = [
  {
    title: 'GridGuard.ai ',
    description:
      'An AI-powered diagnostic platform for power transformers using Frequency Response Analysis (FRA). Built with a CNN + Transformer architecture to classify healthy vs faulty transformers. Includes a universal FRA data parser, expert system-based maintenance recommendations, and a real-time digital twin visualization for asset monitoring.',
    tech: ['Python', 'CNN', 'Transformers', 'Machine Learning', 'Digital Twin', 'Data Parsing'],
    link: 'https://github.com/Aditya3ai/GridGuard.ai_',
    features: ['AI Diagnostics', 'Real-time Monitoring', 'Expert System'],
    featured: true,
  },
  {
    title: 'Plan X Final ',
    description:
      'Full-stack smart invitation generator. Frontend with HTML/CSS, Flask backend API, and PostgreSQL for structured storage and user records.',
    tech: ['HTML', 'CSS', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/Aditya3ai/Plan_X_Final',
    features: ['Smart Generation', 'Full-Stack', 'Database'],
  },
  {
    title: 'Transformative AI-Enhanced Healthcare System ',
    description:
      'A healthcare intelligence platform predicting multiple conditions using ML/DL. Generates personalized reports, risk scores, doctor recommendations, and modular AI pipelines.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Streamlit', 'Flask'],
    link: 'https://github.com/Aditya3ai/ai-healthcare-system',
    features: ['Condition Prediction', 'Personalized Reports', 'Risk Scoring'],
  },
];

// Lightweight Particle System Component
const ParticleSystem = ({ mode }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || mode === 'recruiter') return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize particles
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 12; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(7,17,26,1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        ctx.fillStyle = `rgba(0,240,255,${p.opacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(0,240,255,${p.opacity * 0.2})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-system"
      style={{ display: mode === 'hacker' ? 'block' : 'none' }}
    />
  );
};

// SVG Neon Circuit Component
const NeonCircuit = ({ mode }) => {
  if (mode === 'recruiter') return null;

  return (
    <svg className="neon-circuit-overlay" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ff3da6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00ff85" stopOpacity="0.6" />
        </linearGradient>
        <filter id="circuit-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>

      {/* Animated circuit lines */}
      <g className="circuit-lines" stroke="url(#circuit-glow)" strokeWidth="1.5" fill="none" filter="url(#circuit-blur)" opacity="0.3">
        <polyline points="100,100 300,150 500,100 700,200" className="line-flow-1" />
        <polyline points="150,400 350,350 550,450 750,400" className="line-flow-2" />
        <polyline points="200,600 400,550 600,650 800,600" className="line-flow-3" />
        <polyline points="1000,150 1100,250 1200,200 1300,300" className="line-flow-4" />
      </g>

      {/* Glowing nodes */}
      <g className="circuit-nodes">
        {[100, 300, 500, 700, 150, 350, 550, 750, 200, 400, 600, 800, 1000, 1100, 1200, 1300].map((x, i) => (
          <circle key={i} cx={x} cy={(i % 2 === 0 ? 100 : 400) + (i % 3) * 150} r="3" fill="#00f0ff" opacity="0.4" className="node-blink" />
        ))}
      </g>
    </svg>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [mode, setMode] = useState('hacker'); // 'recruiter' or 'hacker'
  const [flipped, setFlipped] = useState({});

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Enhanced 3D tilt + magnetic pull + shimmer
    if (prefersReduced || mode === 'recruiter') return;

    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const section = sectionRef.current;
    if (!section) return;

    let raf = null;
    let mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleCardMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      
      // Magnetic pull toward cursor
      const dx = (mouseX - (rect.left + rect.width / 2)) * 0.05;
      const dy = (mouseY - (rect.top + rect.height / 2)) * 0.05;

      // 3D tilt
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 16;
      const rotateX = (0.5 - py) * 14;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `translate(${dx}px, ${dy}px) perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        card.classList.add('tilted');
        card.style.filter = 'drop-shadow(0 0 40px rgba(0,240,255,0.2))';
      });
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = '';
        card.style.filter = '';
        card.classList.remove('tilted');
      });
    };

    const handleClick = (e) => {
      const card = e.currentTarget;
      card.style.animation = 'micro-vibration 0.3s ease-out';
      setTimeout(() => {
        card.style.animation = '';
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const cards = section.querySelectorAll('.project-card');
    cards.forEach((c) => {
      c.addEventListener('pointermove', handleCardMove);
      c.addEventListener('pointerleave', handleLeave);
      c.addEventListener('click', handleClick);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
      cards.forEach((c) => {
        c.removeEventListener('pointermove', handleCardMove);
        c.removeEventListener('pointerleave', handleLeave);
        c.removeEventListener('click', handleClick);
      });
    };
  }, [mode, prefersReduced]);

  const toggleMode = () => {
    setMode(mode === 'hacker' ? 'recruiter' : 'hacker');
  };

  return (
    <section id="projects" className={`projects-section projects-mode-${mode}`} ref={sectionRef}>
      {/* Mode Toggle */}
      <div className="mode-toggle-container">
        <button className="mode-toggle" onClick={toggleMode} title={`Switch to ${mode === 'hacker' ? 'Recruiter' : 'Hacker'} mode`}>
          {mode === 'hacker' ? '👾 HACKER MODE' : '💼 RECRUITER MODE'}
        </button>
      </div>

      {/* Particle System & Circuit Background */}
      <ParticleSystem mode={mode} />
      <NeonCircuit mode={mode} />

      {/* Header with Enhanced Title */}
      <div className="projects-header">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          FEATURED PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="projects-subtitle"
        >
          What I've Built
        </motion.p>
      </div>

      {/* Canvas background (decorative) */}
      <ProjectsCanvas />

      {/* Ambient SVG */}
      <svg className="ambient-svg" aria-hidden="true" focusable="false" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#002233" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#001122" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
      </svg>

      <div className="projects-grid">
        {projects.map(({ title, description, tech, link, features }, idx) => (
          <motion.div
            key={title}
            className="project-card"
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.12 }}
            viewport={{ once: true }}
            onClick={() => setFlipped({ ...flipped, [idx]: !flipped[idx] })}
          >
            {/* Card content - Front */}
            <div className={`card-inner ${flipped[idx] ? 'flipped' : ''}`}>
              <div className="card-front">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>

                <div className="tech-list">
                  {tech.map((t) => (
                    <span key={t} className="tech-item">
                      {t}
                    </span>
                  ))}
                </div>

                <a href={link} target="_blank" rel="noreferrer" className="project-link primary" onClick={(e) => e.stopPropagation()}>
                  View on GitHub
                </a>
              </div>

              {/* Card content - Back (flip side) */}
              <div className="card-back">
                <h4>Tech Stack</h4>
                <div className="back-tech">
                  {tech.map((t) => (
                    <span key={t} className="back-tech-item">
                      ✦ {t}
                    </span>
                  ))}
                </div>

                <h4 style={{ marginTop: '12px' }}>Key Features</h4>
                <div className="back-features">
                  {features.map((f) => (
                    <span key={f} className="back-feature">
                      ⚡ {f}
                    </span>
                  ))}
                </div>

                <a href={link} target="_blank" rel="noreferrer" className="back-link" onClick={(e) => e.stopPropagation()}>
                  → GitHub
                </a>
              </div>
            </div>

            {/* Shimmer wave effect */}
            <div className="shimmer-wave"></div>
            <div className="shine"></div>

            {/* Decorative background layers */}
            <div className="background">
              <div className="tiles">{[...Array(8)].map((_, i) => (<div key={i} className={`tile tile-${i + 1}`}></div>))}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        className="github-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="cta-card">
          <div className="cta-left">
            <div className="cta-github">
              <img src={githubIcon} alt="GitHub" />
            </div>
            <div className="cta-text">
              <h3>Connect on GitHub</h3>
              <p>Explore all projects in one place</p>
            </div>
          </div>
          <a className="cta-button" href="https://github.com/Aditya3ai" target="_blank" rel="noreferrer">
            Visit GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
