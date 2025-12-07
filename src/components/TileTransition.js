import React, { useEffect } from 'react';
import './TileTransition.css';

const TileTransition = ({ rows = 4, cols = 40 }) => {
  const total = rows * cols;
  const tiles = Array.from({ length: total });

  useEffect(() => {
    // accessibility: allow keyboard activation
    const handler = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const el = document.activeElement;
        if (el && el.classList && el.classList.contains('tile')) {
          el.classList.add('clicked');
          setTimeout(() => el.classList.remove('clicked'), 350);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const onClick = (e) => {
    const t = e.currentTarget;
    t.classList.add('clicked');
    window.setTimeout(() => t.classList.remove('clicked'), 360);
  };

  return (
    <div className="tile-transition" role="presentation" aria-hidden="true">
      <div className="tile-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {tiles.map((_, i) => (
          <button
            key={i}
            className={`tile`}
            onClick={onClick}
            onMouseDown={(ev) => ev.currentTarget.classList.add('clicked')}
            onMouseUp={(ev) => ev.currentTarget.classList.remove('clicked')}
            tabIndex={-1}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default TileTransition;
