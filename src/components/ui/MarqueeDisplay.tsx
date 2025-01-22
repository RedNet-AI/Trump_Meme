import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DEGEN_PHRASES = [
  "🚀 TRUMP MEMES GO BRRRRR",
  "💎 DIAMOND HANDS ONLY",
  "🦍 APE TOGETHER STRONG",
  "🌙 TO THE MOON",
  "🐸 PEPE APPROVED",
  "🔥 MEMES ARE FIRE",
  "⚡ LIGHTNING FAST",
  "🎯 BULLISH AF",
  "🎮 GAME ON",
  "🌈 BEARS R FUK",
  "📈 NUMBER GO UP",
  "🎪 WELCOME TO THE CIRCUS",
  "🎲 PROBABLY NOTHING",
  "🎭 JUST VIBING",
  "🎪 GREATEST SHOW ON SOLANA"
];

const MarqueeDisplay = () => {
  const [glitchIndex, setGlitchIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * DEGEN_PHRASES.length);
      setGlitchIndex(randomIndex);
      setTimeout(() => setGlitchIndex(-1), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4 bg-dark-deeper/50 backdrop-blur-sm rounded-xl border border-primary/10">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-meme-cyan to-transparent" />
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-meme-purple to-transparent" />

      {/* Marquee Content */}
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex space-x-8">
          {DEGEN_PHRASES.map((phrase, index) => (
            <motion.span
              key={index}
              className={`text-2xl font-pixel ${
                index === glitchIndex ? 'animate-glitch' : ''
              }`}
              animate={{
                color: index === glitchIndex 
                  ? ['#44FF44', '#FF4444', '#4444FF', '#44FF44']
                  : '#44FF44'
              }}
              transition={{
                duration: 0.2,
                repeat: index === glitchIndex ? 2 : 0,
                ease: 'linear'
              }}
            >
              {phrase}
            </motion.span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-8">
          {DEGEN_PHRASES.map((phrase, index) => (
            <motion.span
              key={`repeat-${index}`}
              className={`text-2xl font-pixel ${
                index === glitchIndex ? 'animate-glitch' : ''
              }`}
              animate={{
                color: index === glitchIndex 
                  ? ['#44FF44', '#FF4444', '#4444FF', '#44FF44']
                  : '#44FF44'
              }}
              transition={{
                duration: 0.2,
                repeat: index === glitchIndex ? 2 : 0,
                ease: 'linear'
              }}
            >
              {phrase}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Side Glows */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-dark-deeper via-transparent to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-dark-deeper via-transparent to-transparent" />

      {/* Random Glitch Effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glitch-${i}`}
          className="absolute inset-0 bg-meme-cyan/10"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [-10, 10, -10],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
          }}
        />
      ))}

      {/* Scan Lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(68, 255, 68, 0.03) 1px, rgba(68, 255, 68, 0.03) 2px)',
          backgroundSize: '100% 2px',
          opacity: 0.1
        }}
      />
    </div>
  );
};

export default MarqueeDisplay;
