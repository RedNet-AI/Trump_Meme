import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative flex items-center pl-6">
      {/* MAGA Hat Shape */}
      <motion.div
        className="absolute -left-1 -top-2"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="relative w-10 h-5">
          {/* Hat Top */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-meme-red via-meme-red to-meme-red rounded-t-lg shadow-lg animate-pulse-green" />
          {/* Hat Text */}
          <div className="absolute top-1 left-0 right-0 flex justify-center">
            <span className="text-[6px] font-pixel text-white tracking-tight animate-pulse">
              MAGA
            </span>
          </div>
          {/* Hat Brim */}
          <div className="absolute bottom-0 left-[-4px] right-[-4px] h-1.5 bg-gradient-to-b from-meme-red to-meme-red/80 rounded-sm shadow-md" />
        </div>
      </motion.div>

      {/* Logo Text */}
      <motion.div
        className="flex items-baseline space-x-1"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* TRUMP Text */}
        <div className="relative">
          <span className="text-2xl font-pixel tracking-wider degen-text-glitch" data-text="TRUMP">
            <span className="text-meme-red">T</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-meme-red via-meme-yellow to-meme-red animate-pulse">
              RUMP
            </span>
          </span>
          {/* American Flag Mini Icon */}
          <motion.div
            className="absolute -top-1 -right-2 text-[8px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            🇺🇸
          </motion.div>
        </div>

        {/* MEME Text */}
        <span className="text-2xl font-pixel bg-clip-text text-transparent bg-gradient-to-r from-meme-green via-meme-cyan to-meme-green animate-pulse">
          MEME
        </span>
      </motion.div>

      {/* Stars */}
      <div className="absolute -top-1 right-0 flex space-x-[2px]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="text-meme-yellow text-xs font-pixel"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: 1 
            }}
            transition={{ 
              delay: 0.3 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
              duration: 1.5
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      {/* Glitch Effect */}
      <motion.div
        className="absolute inset-0 bg-meme-cyan/10 mix-blend-screen"
        animate={{
          opacity: [0, 0.2, 0],
          x: [-2, 2, -2],
          scaleY: [1, 1.02, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 3,
        }}
      />

      {/* Scan Lines */}
      <div 
        className="absolute inset-0 pointer-events-none scanline"
        style={{ opacity: 0.1 }}
      />

      {/* Random Glitch Blocks */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`glitch-block-${i}`}
          className="absolute inset-0 bg-meme-green/10"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [-5, 5, -5],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
          }}
        />
      ))}

      {/* CRT Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-meme-green/5 to-transparent opacity-20" />
      </div>
    </div>
  );
};

export default Logo;
