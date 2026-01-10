import React, { useState, useRef } from 'react';


export default function PricingCard({ plan, index }) {
  const [glare, setGlare] = useState({ x: 50, y: 20, opacity: 0 });
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x, y, opacity: 1 });
  };

  const handleLeave = () => setGlare({ ...glare, opacity: 0 });

  return (
    <div
      className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="card-bg" />
      <div className="card-glare" style={{ left: `${glare.x}%`, top: `${glare.y}%`, opacity: glare.opacity }} />
      <div className="card-content glass-panel">
        <h3>{plan.name}</h3>
        <div className="price">
          <span className="amount">{plan.price}</span>
          <span className="period">{plan.period}</span>
        </div>
        <ul className="features">
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button className="btn-primary">Get Started</button>
      </div>
    </div>
  );
}

