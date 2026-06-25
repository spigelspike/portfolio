"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  speed: number;
};

const COLORS = ["#00F5D4", "#FFD700", "#8B5CF6", "#FF007F"];

export default function PixelClick() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleIdCounter = 0;

    const handleGlobalClick = (e: MouseEvent) => {
      const newParticles: Particle[] = [];
      const numParticles = 6 + Math.floor(Math.random() * 4); // 6 to 9 particles

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: particleIdCounter++,
          x: e.clientX - 4, // Center the particle (w-2 is 8px)
          y: e.clientY - 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          angle: Math.random() * Math.PI * 2,
          speed: 40 + Math.random() * 60, // 40px to 100px travel distance
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove particles after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 600);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          // Calculate destination
          const destX = p.x + Math.cos(p.angle) * p.speed;
          const destY = p.y + Math.sin(p.angle) * p.speed;

          return (
            <motion.div
              key={p.id}
              initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
              animate={{ 
                x: destX, 
                y: destY, 
                opacity: 0, 
                scale: 0 
              }}
              transition={{ 
                duration: 0.5 + Math.random() * 0.2, 
                ease: "easeOut" 
              }}
              className="absolute w-2 h-2"
              style={{
                backgroundColor: p.color,
                boxShadow: `0 0 6px ${p.color}`,
                borderRadius: '0px'
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
