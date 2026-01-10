import React from 'react';
import LightPillar from './LightPillar';

export default function LightPillars() {
  // Render several pillars with different positions/props
  const config = [
    { left: '8%', topColor: '#5227FF', bottomColor: '#FF9FFC', pillarWidth: 3.2, pillarHeight: 0.6, rotationSpeed: 6 },
    { left: '22%', topColor: '#8B5CF6', bottomColor: '#06B6D4', pillarWidth: 2.4, pillarHeight: 0.5, rotationSpeed: 8 },
    { left: '36%', topColor: '#E11D48', bottomColor: '#7C3AED', pillarWidth: 2.8, pillarHeight: 0.55, rotationSpeed: 5 },
    { left: '56%', topColor: '#10B981', bottomColor: '#3B82F6', pillarWidth: 3.6, pillarHeight: 0.65, rotationSpeed: 7 },
    { left: '74%', topColor: '#F97316', bottomColor: '#EF4444', pillarWidth: 2.2, pillarHeight: 0.45, rotationSpeed: 9 },
    { left: '88%', topColor: '#7C3AED', bottomColor: '#F472B6', pillarWidth: 2.6, pillarHeight: 0.5, rotationSpeed: 6 }
  ];

  return (
    <div className="light-pillars" aria-hidden="true">
      {config.map((c, i) => (
        <div key={i} style={{ position: 'absolute', left: c.left, bottom: 0 }}>
          <LightPillar
            topColor={c.topColor}
            bottomColor={c.bottomColor}
            intensity={1.0}
            rotationSpeed={c.rotationSpeed}
            glowAmount={0.008}
            pillarWidth={c.pillarWidth}
            pillarHeight={c.pillarHeight}
            noiseIntensity={0.6}
            pillarRotation={(i % 2 === 0) ? -2 : 2}
            interactive={false}
            mixBlendMode="screen"
          />
        </div>
      ))}
    </div>
  );
}
