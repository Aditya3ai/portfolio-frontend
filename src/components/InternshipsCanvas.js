import React, { useRef, useEffect } from 'react';

// Very subtle ambient dots for the Internships section (low-cost)
export default function InternshipsCanvas({ containerRef, prefersReduced }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    const container = containerRef?.current || document.body;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;

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

    if (particlesRef.current.length === 0) {
      const N = Math.max(6, Math.floor((container.clientWidth * container.clientHeight) / 200000));
      for (let i = 0; i < N; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width / dpr,
          y: Math.random() * canvas.height / dpr,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.6 + 0.6,
          o: Math.random() * 0.12 + 0.02,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width / dpr + 10;
        if (p.x > canvas.width / dpr + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height / dpr + 10;
        if (p.y > canvas.height / dpr + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 212, 184, ${p.o})`; // warm-teal subtle
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
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

  return <canvas ref={canvasRef} className="internships-canvas" />;
}
