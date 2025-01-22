import { motion } from 'framer-motion';

const DEGEN_SYMBOLS = [
  { symbol: '₿', color: 'text-meme-yellow', scale: 1.2 },    // Bitcoin
  { symbol: 'Ξ', color: 'text-meme-blue', scale: 1.1 },      // Ethereum
  { symbol: '◎', color: 'text-meme-purple', scale: 1 },      // Solana
  { symbol: '∞', color: 'text-meme-pink', scale: 1.3 },      // Infinity
  { symbol: '$', color: 'text-meme-green', scale: 1.1 },     // Dollar
  { symbol: '★', color: 'text-meme-orange', scale: 0.9 },    // Star
  { symbol: '◆', color: 'text-meme-red', scale: 1.1 },       // Diamond
  { symbol: '⚡', color: 'text-meme-yellow', scale: 1.2 },    // Lightning
  { symbol: '🚀', color: 'text-meme-orange', scale: 1.3 },   // Rocket
  { symbol: '💎', color: 'text-meme-cyan', scale: 1.2 },     // Diamond Hands
  { symbol: '🌙', color: 'text-meme-purple', scale: 1.1 },   // Moon
  { symbol: '🦍', color: 'text-meme-green', scale: 1.4 },    // Ape
  { symbol: 'GG', color: 'text-meme-green', scale: 0.8 },    // Good Game
  { symbol: 'GM', color: 'text-meme-cyan', scale: 0.8 },     // GM
  { symbol: 'NGMI', color: 'text-meme-red', scale: 0.7 },    // Not Gonna Make It
  { symbol: 'WAGMI', color: 'text-meme-green', scale: 0.7 }, // We're All Gonna Make It
];

const CryptoElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Symbols */}
      {[...Array(50)].map((_, index) => {
        const randomSymbol = DEGEN_SYMBOLS[Math.floor(Math.random() * DEGEN_SYMBOLS.length)];
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;
        const startX = Math.random() * 100;
        const startScale = 0.5 + Math.random() * 1.5;
        const glitchChance = Math.random() > 0.7;

        return (
          <motion.div
            key={index}
            className={`absolute ${randomSymbol.color} font-bold text-xl md:text-3xl blur-[1px]`}
            style={{
              transform: `scale(${randomSymbol.scale})`,
              filter: 'drop-shadow(0 0 8px currentColor)',
            }}
            initial={{
              x: `${startX}vw`,
              y: '110vh',
              scale: startScale,
              rotate: 0
            }}
            animate={{
              y: '-10vh',
              rotate: 360,
              scale: glitchChance ? [startScale, startScale * 1.2, startScale * 0.8, startScale] : startScale,
              x: glitchChance ? [`${startX}vw`, `${startX + 5}vw`, `${startX - 5}vw`, `${startX}vw`] : `${startX}vw`,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: glitchChance ? 'backOut' : 'linear',
            }}
          >
            {randomSymbol.symbol}
          </motion.div>
        );
      })}

      {/* Glowing Orbs */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-32 h-32 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              ['rgba(139,92,246,0.4)', 'rgba(255,68,68,0.4)', 'rgba(68,255,68,0.4)', 'rgba(68,68,255,0.4)'][
                Math.floor(Math.random() * 4)
              ]} 0%, rgba(0,0,0,0) 70%)`,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Moving Light Beams */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`beam-${index}`}
          className="absolute h-full w-32 opacity-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${
              ['rgba(139,92,246,0.3)', 'rgba(255,68,68,0.3)', 'rgba(68,255,68,0.3)', 'rgba(68,68,255,0.3)'][index]
            }, transparent)`,
          }}
          animate={{
            x: ['-100%', '100vw'],
          }}
          transition={{
            duration: 7 + index * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 2,
          }}
        />
      ))}

      {/* Random Glitch Effects */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`glitch-${index}`}
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: [0, 0.1, 0],
            x: [-10, 10, -10],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
          }}
          style={{
            background: `linear-gradient(${Math.random() * 360}deg, transparent, rgba(139,92,246,0.1), transparent)`,
          }}
        />
      ))}
    </div>
  );
};

export default CryptoElements;
