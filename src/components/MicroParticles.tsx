"use client";

import React, { useEffect, useState } from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
};

const MicroParticles: React.FC = () => {
  const [microParticles, setMicroParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.3,
      left: Math.random() * 100,
      animationDelay: Math.random() * 15,
      animationDuration: Math.random() * 8 + 5,
    }));

    setMicroParticles(particles);
  }, []);

  return (
    <>
      <style jsx>{`
        .micro-particle {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          border-radius: 50%;
          pointer-events: none;
          animation: microFloat linear infinite;
        }

        .micro-particle:nth-child(2n) {
          background: radial-gradient(
            circle,
            rgba(176, 224, 255, 0.7) 0%,
            rgba(176, 224, 255, 0) 70%
          );
        }

        .micro-particle:nth-child(3n) {
          background: radial-gradient(
            circle,
            rgba(129, 212, 250, 0.5) 0%,
            rgba(129, 212, 250, 0) 70%
          );
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