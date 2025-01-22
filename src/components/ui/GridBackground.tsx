import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GridBackground = () => {
  const [glitchPosition, setGlitchPosition] = useState({ x: 0, y: 0 });

  // 随机更新故障效果位置
  useEffect(() => {
    const updateGlitch = () => {
      setGlitchPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    };

    const interval = setInterval(updateGlitch, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        initial={{ opacity: 0.03 }}
        animate={{ 
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(68, 255, 68, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(68, 255, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glitch Areas */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`glitch-${index}`}
          className="absolute w-32 h-32"
          style={{
            left: `${(glitchPosition.x + index * 20) % 100}%`,
            top: `${(glitchPosition.y + index * 20) % 100}%`,
            background: 'rgba(255, 0, 0, 0.05)',
            mixBlendMode: 'screen',
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scaleX: [1, 1.2, 0.8, 1],
            scaleY: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Degen Pattern Overlay */}
      <div className="absolute inset-0 bg-degen-pattern opacity-[0.02] mix-blend-overlay" />

      {/* Scan Lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(68, 255, 68, 0.03) 1px, rgba(68, 255, 68, 0.03) 2px)',
          backgroundSize: '100% 2px',
          opacity: 0.1
        }}
      />

      {/* Random Noise */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay opacity-[0.03]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE1xQAAAABJJREFUKM9jYBgFo2AUjIJRAAAFFAABp8TtoQAAAABJRU5ErkJggg==")`
        }}
      />
    </div>
  );
};

export default GridBackground;
