import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.enhanced.css';
import githubIcon from '../assets/aws/github.svg';
import ProjectsCanvas from './ProjectsCanvas';

/* ---------------- PROJECT DATA ---------------- */
const projects = [
  {
    title: 'GridGuard.ai',
    domains: ['Power Systems', 'AI / ML', 'Diagnostics'],
    description:
      'AI-powered transformer diagnostics using Frequency Response Analysis (FRA) with a CNN + Transformer model. Features a universal FRA data parser, expert fault insights, and real-time digital twin monitoring.',
    tech: ['Python', 'CNN', 'Transformers', 'Machine Learning', 'Digital Twin', 'Data Parsing'],
    link: 'https://github.com/Aditya3ai/GridGuard.ai',
  },
  {
    title: 'Plan X Final',
    domains: ['Full-Stack', 'Web', 'UX'],
    description:
      'Full-stack smart invitation platform with automated workflows, built with HTML/CSS frontend, a Flask backend, and PostgreSQL for secure user and data management.',
    tech: ['HTML', 'CSS', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/Aditya3ai/Plan_X_Final',
  },
  {
    title: 'Transformative AI-Enhanced Healthcare System',
    domains: ['Healthcare', 'ML / DL', 'Reporting'],
    description:
      'ML/DL-based healthcare prediction platform generating personalized reports, risk scores, and AI-driven medical recommendations.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Streamlit', 'Flask'],
    link: '#', // placeholder
  },
];

/* ---------------- PARTICLE SYSTEM ---------------- */
const ParticleSystem = ({ containerRef, prefersReduced }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = containerRef?.current?.clientWidth || window.innerWidth;
    let height = containerRef?.current?.clientHeight || window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = containerRef?.current?.clientWidth || window.innerWidth;
      height = containerRef?.current?.clientHeight || window.innerHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 14; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.8 + 0.6,
          o: Math.random() * 0.6 + 0.2,
        });
      }
    }

    const animate = () => {
      if (prefersReduced) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(0,240,255,${p.o * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(0,240,255,${p.o * 0.15})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [containerRef, prefersReduced]);

  return <canvas ref={canvasRef} className="particle-system" />;
};

/* ---------------- NEON CIRCUIT ---------------- */
const NeonCircuit = () => (
  <svg className="neon-circuit-overlay" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#ff3da6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00ff85" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    <g stroke="url(#circuit-glow)" strokeWidth="1.4" fill="none" opacity="0.3">
      <polyline points="100,100 300,150 500,100 700,200" />
      <polyline points="150,400 350,350 550,450 750,400" />
      <polyline points="200,600 400,550 600,650 800,600" />
      <polyline points="1000,150 1100,250 1200,200 1300,300" />
    </g>
  </svg>
);

/* ---------------- FLOATING DOTS ---------------- */
const FloatingDots = ({ containerRef, prefersReduced }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const N = Math.max(16, Math.floor((container.clientWidth * container.clientHeight) / 80000));
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < N; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width / dpr,
          y: Math.random() * canvas.height / dpr,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 2 + 0.6,
          color: ['#00f0ff', '#6fc3ff', '#ff3da6'][Math.floor(Math.random() * 3)],
        });
      }
    }

    const handlePointer = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleLeave = () => { mouseRef.current.active = false; };
    container.addEventListener('pointermove', handlePointer);
    container.addEventListener('pointerleave', handleLeave);
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width / dpr) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height / dpr) p.vy *= -1;

        const m = mouseRef.current;
        if (m.active) {
          const dx = m.x - p.x;
          const dy = m.y - p.y;
          const dist = Math.max(8, Math.sqrt(dx * dx + dy * dy));
          const force = Math.min(120, 120 / dist) * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.995;
        p.vy *= 0.995;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.9;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      container.removeEventListener('pointermove', handlePointer);
      container.removeEventListener('pointerleave', handleLeave);
      window.removeEventListener('resize', resize);
    };
  }, [containerRef, prefersReduced]);

  return <canvas ref={canvasRef} className="floating-dots-canvas" />;
};

/* ---------------- MAIN PROJECTS COMPONENT ---------------- */
const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [flipped, setFlipped] = useState({});
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleCardMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const dx = (mouseX - (rect.left + rect.width / 2)) * 0.05;
      const dy = (mouseY - (rect.top + rect.height / 2)) * 0.05;

      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * 14;
      const rotateX = (0.5 - py) * 12;

      card.style.transform = `translate(${dx}px, ${dy}px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.classList.add('tilted');

      if (!prefersReduced) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dxC = mouseX - cx;
        const dyC = mouseY - cy;
        const dist = Math.sqrt(dxC * dxC + dyC * dyC);
        const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.6;
        const t = Math.max(0, 1 - Math.min(dist / maxDist, 1));
        card.style.boxShadow = `0 ${20 + t * 60}px ${60 + t * 120}px rgba(0,160,255,${0.06 + t * 0.24})`;
      }
    };

    const handleLeave = (e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.classList.remove('tilted');
    };

    window.addEventListener('mousemove', handleMouseMove);

    const cards = section.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('pointermove', handleCardMove);
      card.addEventListener('pointerleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener('pointermove', handleCardMove);
        card.removeEventListener('pointerleave', handleLeave);
      });
    };
  }, [prefersReduced]);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <ParticleSystem containerRef={sectionRef} prefersReduced={prefersReduced} />
      <FloatingDots containerRef={gridRef} prefersReduced={prefersReduced} />
      <NeonCircuit />

      <div className="projects-header">
        <motion.h2 className="projects-title">FEATURED PROJECTS</motion.h2>
        <motion.p className="projects-subtitle">What I've Built</motion.p>
      </div>

      <ProjectsCanvas />

      <div className="projects-grid" ref={gridRef}>
        {projects.map((project, idx) => {
          const accent = ['#00f0ff', '#6fc3ff', '#ff3da6', '#00ff85'][idx % 4];
          return (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ '--accent-color': accent }}
              onClick={() => setFlipped(prev => ({ ...prev, [idx]: !prev[idx] }))}
            >
              <div className={`card-inner ${flipped[idx] ? 'flipped' : ''}`}>
                {project.featured && <div className="ribbon">FEATURED</div>}

                <div className="card-front">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="domains-line">Domains: {(project.domains || []).join(' | ')}</div>
                  <p className="card-desc">{project.description}</p>
                  <div className="tech-inline">
                    {(project.tech || []).map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link primary" onClick={(e) => e.stopPropagation()}>
                    View on GitHub
                  </a>
                </div>

                <div className="card-back">
                  <h4>Key Features</h4>
                  {(project.features || []).map((f) => (
                    <span key={f}>⚡ {f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="github-connect">
        <div className="github-connect-card">
          <div className="connect-left">
            <div className="cta-github"><img src={githubIcon} alt="GitHub" /></div>
            <div className="connect-copy">
              <h3>Connect with Me on GitHub</h3>
              <p>Explore all my AI, ML, and Full-Stack projects in one place.</p>
            </div>
          </div>
          <div className="connect-action">
            <a className="connect-button" href="https://github.com/Aditya3ai" target="_blank" rel="noreferrer">Visit My GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
