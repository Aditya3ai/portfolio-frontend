import React, { useRef, useEffect } from 'react';

const ProjectsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;

    let time = 0,
        velocity = 0.1,
        velocityTarget = 0.1,
        width = 0,
        height = 0,
        lastX = 0,
        lastY = 0;

    const MAX_OFFSET = 400;
    const SPACING = 4;
    const POINTS = MAX_OFFSET / SPACING;
    const PEAK = MAX_OFFSET * 0.25;
    const POINTS_PER_LAP = 6;
    const SHADOW_STRENGTH = 6;

    let running = true;
    let rafId = null;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function clear() {
      ctx.clearRect(0, 0, width, height);
    }

    function render() {
      var x, y,
          cx = width/2,
          cy = height/2;

      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = '#aeefff';
      ctx.shadowColor = '#aeefff';
      ctx.lineWidth = 1.4;

      for (var i = POINTS; i > 0; i--) {
        var value = i * SPACING + ( time % SPACING );

        var ax = Math.sin( value/POINTS_PER_LAP ) * Math.PI,
            ay = Math.cos( value/POINTS_PER_LAP ) * Math.PI;

        x = ax * value;
        y = ay * value * 0.35;

        var o = 1 - ( Math.min( value, PEAK ) / PEAK );

        y -= Math.pow( o, 2 ) * 200;
        y += 200 * value / MAX_OFFSET;
        y += x / cx * width * 0.06;

        ctx.globalAlpha = 1 - ( value / MAX_OFFSET );
        ctx.shadowBlur = SHADOW_STRENGTH * o;

        ctx.beginPath();
        ctx.moveTo(cx + x, cy + y);
        ctx.lineTo(cx + x + 0.01, cy + y + 0.01);
        ctx.stroke();
      }
    }

    function step() {
      time += velocity;
      velocity += ( velocityTarget - velocity ) * 0.3;

      clear();
      render();

      if (running) rafId = requestAnimationFrame(step);
    }

    function onPointerDown(e) {
      lastX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
      lastY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
    }

    function onPointerMove(e) {
      const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || lastX;
      const clientY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || lastY;

      var vx = ( clientX - lastX ) / 100;
      var vy = ( clientY - lastY ) / 100;

      if( clientY < height/2 ) vx *= -1;
      if( clientX > width/2 ) vy *= -1;

      velocityTarget = vx + vy;

      lastX = clientX;
      lastY = clientY;
    }

    function onPointerUp() {
      // no-op for now
    }

    // Initialize
    resize();

    if (!prefersReduced) {
      // start animation
      step();

      // events
      window.addEventListener('resize', resize);
      canvas.addEventListener('pointerdown', onPointerDown);
      canvas.addEventListener('pointermove', onPointerMove);
      canvas.addEventListener('pointerup', onPointerUp);
      canvas.addEventListener('pointercancel', onPointerUp);

      // touch fallback
      canvas.addEventListener('touchstart', onPointerDown, { passive: true });
      canvas.addEventListener('touchmove', onPointerMove, { passive: true });
      canvas.addEventListener('touchend', onPointerUp);
    } else {
      // reduced motion: draw a subtle static gradient
      ctx.fillStyle = 'rgba(6,8,12,0.5)';
      ctx.fillRect(0,0,width,height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = 'rgba(0,240,255,0.02)';
      ctx.fillRect(0,0,width,height);
    }

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      canvas.removeEventListener('touchmove', onPointerMove);
      canvas.removeEventListener('touchend', onPointerUp);
    };
  }, []);

  return (
    <canvas className="projects-canvas" ref={canvasRef} aria-hidden="true" />
  );
};

export default ProjectsCanvas;
