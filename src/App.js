import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy observer to set active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Dark mode body class toggle
  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const LoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-spinner"><div className="spinner"></div></div>
      <p>Loading Portfolio...</p>
    </div>
  );

  const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const onScroll = () => setShowButton(window.scrollY > 300);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <button
        className={`back-to-top ${showButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    );
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="app-container">
      <MatrixBackground />
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <main className="container" role="main">
        <section id="about" aria-labelledby="about-heading" className="section fade-in full-bleed-section"><About /></section>
        <section id="skills" aria-labelledby="skills-heading" className="section fade-in"><Skills /></section>
        <section id="projects" aria-labelledby="projects-heading" className="section fade-in"><Projects /></section>
        <section id="internships" aria-labelledby="internships-heading" className="section fade-in"><Internships /></section>
        <section id="certifications" aria-labelledby="certifications-heading" className="section fade-in"><Certifications /></section>
        <section id="contact" aria-labelledby="contact-heading" className="section fade-in"><Contact /></section>
      </main>

      <BackToTop />
    </div>
  );
}

export default App;
