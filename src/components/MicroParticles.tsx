'use client';

import React from 'react';

const MicroParticles: React.FC = () => {
  // Generate micro particles - small and fast
  const microParticles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 1.5 + 0.3, // Very small: 0.3 to 1.8px
    left: Math.random() * 100,
    animationDelay: Math.random() * 15,
    animationDuration: Math.random() * 8 + 5, // Faster: 5-13 seconds
  }));

  return (
    <>
      <style jsx>{`
        .micro-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: microFloat linear infinite;
        }
        
        .micro-particle:nth-child(2n) {
          background: radial-gradient(circle, rgba(176, 224, 255, 0.7) 0%, rgba(176, 224, 255, 0) 70%);
        }
        
        .micro-particle:nth-child(3n) {
          background: radial-gradient(circle, rgba(129, 212, 250, 0.5) 0%, rgba(129, 212, 250, 0) 70%);
        }

        @keyframes microFloat {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-50px) translateX(20px) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {microParticles.map((particle) => (
          <div
            key={particle.id}
            className="micro-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MicroParticles;
