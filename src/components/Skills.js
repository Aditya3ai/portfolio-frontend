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

const skillSections = [
  {
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
    title: 'DevOps Tools',
    items: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    ],
  },
  {
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
    title: 'Version Control & Database',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'pgAdmin', logo: PGAdmin },
      { name: 'DBeaver', logo: DBeaver },
    ],
  },
  {
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
    title: 'Other Tools',
    items: [
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Canva', logo: Canva },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section">
      <h2>Skills</h2>
      {skillSections.map(({ title, items }) => (
        <div className="skill-category" key={title}>
          <h3>{title}</h3>
          <div className="skills-grid">
            {items.map(({ name, logo }) => (
              <div key={name} className="skill-item" title={name}>
                <img src={logo} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
