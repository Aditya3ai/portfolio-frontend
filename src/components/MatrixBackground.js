import React, { useEffect, useState } from 'react';
import './MatrixBackground.css';

const WORDS = [
  'AI','ML','DL','CNN','RNN','LSTM','AWS','EC2','S3','IAM','VPC',
  'DevOps','Docker','Kubernetes','Linux','Bash','Python','Cloud','Cyber','Neural','Data'
];

const COLOR_VARIANTS = [
  { r: 255, g: 60, b: 120 }, // Neon Red-ish
  { r: 0, g: 120, b: 255 },  // Electric Blue
  { r: 0, g: 255, b: 200 },  // Cyan Glow
];

function pickRandom(){
  return WORDS[Math.floor(Math.random()*WORDS.length)];
}

const MatrixBackground = () => {
  const [cols, setCols] = useState(12);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      // columns scale with width but capped to avoid too many DOM nodes
      const c = Math.max(10, Math.min(36, Math.floor(w / 60))); // denser columns for visibility
      setCols(c);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const columns = new Array(cols).fill(0).map((_, ci) => {
    // vary count and speed per column
    const items = 22 + (ci % 8);
    const duration = 7 + (ci % 6) * 0.9; // seconds (slightly faster variety)
    const delay = -(ci % 7) * 0.9; // negative to stagger
    // choose a color variant for the whole column for consistent tint
    const colColor = COLOR_VARIANTS[ci % COLOR_VARIANTS.length];
    const wordList = new Array(items).fill(0).map((__, i) => {
      // opacity strictly between 0.30 and 0.45 to ensure visible words
      const alpha = 0.30 + Math.random() * 0.15; // 0.30 - 0.45
      const color = `rgba(${colColor.r}, ${colColor.g}, ${colColor.b}, ${alpha.toFixed(3)})`;
      // stronger glow color (slightly higher alpha for shadow)
      const glowAlpha = Math.min(0.6, alpha + 0.25);
      const glow = `rgba(${colColor.r}, ${colColor.g}, ${colColor.b}, ${glowAlpha.toFixed(3)})`;
      const textShadow = `0 0 8px ${glow}, 0 0 18px ${glow}`;
      return (
        <span
          key={i}
          className="matrix-word"
          style={{ color, textShadow, fontWeight: 600 }}
        >{pickRandom()}</span>
      );
    });
    return (
      <div
        key={ci}
        className="matrix-column"
        style={{animationDuration: `${duration}s`, animationDelay: `${delay}s`}}
        aria-hidden="true"
      >
        {wordList}
      </div>
    );
  });

  return (
    <div className="matrix-bg" aria-hidden="true">
      <div className="matrix-inner" role="presentation">
        {columns}
      </div>
    </div>
  );
};

export default MatrixBackground;
