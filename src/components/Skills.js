import React from 'react';
import './Skills.css';

// AWS image imports (local PNGs)
import EC2 from '../assets/aws/EC2.png';
import S3 from '../assets/aws/s3.png';
import Lambda from '../assets/aws/Lambda.png';
import RDS from '../assets/aws/RDS.png';
import IAM from '../assets/aws/iam.png';
import SQS from '../assets/aws/sqs.png';
import Beanstalk from '../assets/aws/beanstalk.png';
import CloudFront from '../assets/aws/CloudFront.png';

// Custom tool logos
import PGAdmin from '../assets/aws/pgadmin.png';
import DBeaver from '../assets/aws/DBeaver.png';
import Canva from '../assets/aws/Canva.png';

const CATEGORIES = [
  {
    key: 'aws',
    title: 'AWS Cloud Services',
    items: [
      { name: 'EC2', logo: EC2 },
      { name: 'S3', logo: S3 },
      { name: 'Lambda', logo: Lambda },
      { name: 'RDS', logo: RDS },
      { name: 'IAM', logo: IAM },
      { name: 'SQS', logo: SQS },
      { name: 'Beanstalk', logo: Beanstalk },
      { name: 'CloudFront', logo: CloudFront },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps Tools',
    items: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    ],
  },
  {
    key: 'langs',
    title: 'Programming Languages',
    items: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    key: 'vcdb',
    title: 'Version Control & Database',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'pgAdmin', logo: PGAdmin },
      { name: 'DBeaver', logo: DBeaver },
    ],
  },
  {
    key: 'tools',
    title: 'Backend & Frontend Tools',
    items: [
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    key: 'other',
    title: 'Other Tools',
    items: [
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Canva', logo: Canva },
    ],
  },
];

const generateDescription = () => {
  return 'I specialize in premium cloud-first architectures and DevOps-driven backend and AI systems. Focused on AWS Cloud, modern DevOps workflows, and backend/AI-oriented development to deliver reliable, scalable systems.';
};

const Skills = () => {
  const [active, setActive] = React.useState(0);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);
  const containerRef = React.useRef(null);

  const onPrev = () => setActive(prev => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
  const onNext = () => setActive(prev => (prev + 1) % CATEGORIES.length);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
    const handleTouchEnd = () => {
      const dx = touchEndX.current - touchStartX.current;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) onNext(); else onPrev();
      touchStartX.current = 0; touchEndX.current = 0;
    };

    el.addEventListener('touchstart', handleTouchStart, {passive:true});
    el.addEventListener('touchmove', handleTouchMove, {passive:true});
    el.addEventListener('touchend', handleTouchEnd, {passive:true});

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="skills" className="skills-section cyberpunk-skills">
      <div className="skills-header">
        <h2 className="neon-heading">SKILLS</h2>
        <h3 className="subheading">WHAT I SPECIALIZE IN</h3>
        <p className="skills-desc">{generateDescription()}</p>
      </div>

      <div className="skills-stage">
        <aside className="category-nav" aria-hidden>
          {CATEGORIES.map((c, idx) => (
            <button
              key={c.key}
              className={`nav-item ${idx === active ? 'active' : ''}`}
              onClick={() => setActive(idx)}
              title={c.title}
            >
              <span className="nav-dot" />
              <span className="nav-label">{c.title}</span>
            </button>
          ))}
        </aside>

        <div className={`category-view active-idx-${active}`} ref={containerRef}>
          <div className="categories-wrapper" style={{transform: `translateX(-${active * 100}%)`}}>
            {CATEGORIES.map((c) => (
              <div className="category-panel" key={c.key} aria-live="polite">
                <h4 className="panel-title">{c.title}</h4>
                <div className="panel-grid">
                  {c.items.map(item => (
                    <div className="skill-box" key={item.name || item} tabIndex={0} role="button" aria-pressed={false}>
                      <div className="skill-icon" aria-hidden>
                        {/* if logo is a string (url) show img else show imported image */}
                        {typeof item.logo === 'string' ? <img src={item.logo} alt="" /> : <img src={item.logo} alt="" />}
                      </div>
                      <span className="skill-label">{item.name || item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* controls removed per request (swipe / nav & keyboard remain) */}
      </div>
    </section>
  );
};

export default Skills;
