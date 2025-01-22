import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MemeCard from '../ui/MemeCard';
import MarqueeDisplay from '../ui/MarqueeDisplay';

const DEGEN_SLOGANS = [
  "Exclusive collection of the most iconic Trump memes on Solana",
  "WAGMI 🚀 Trump Memes To The Moon",
  "Wen Trump Meme Ser? NOW SER! 🦍",
  "Probably Nothing... Just Trump Being Trump",
  "gm frens, ready to ape in? 💎",
  "IYKYK... Trump Memes Are SAFU",
  "Degen Apes Love Trump Memes",
  "Not Financial Advice, Just Memes Ser",
  "Floor Price Only Goes Up Ser 📈",
  "Pepe Approves These Memes 🐸"
];

const TRENDING_PRICES = [
  { name: 'Trump Pointing', price: 2.5, change: '+420%' },
  { name: 'Biden Sleeping', price: 1.8, change: '+69%' },
  { name: 'Elon Tweet', price: 3.2, change: '+169%' },
  { name: 'Doge Moon', price: 1.5, change: '+1337%' },
];

// 生成更多模拟数据
const generateMockMemes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Trump Meme ${i + 1}`,
    image: `https://picsum.photos/${400 + i}`,
    price: Number((Math.random() * 5 + 1).toFixed(2)),
    likes: Math.floor(Math.random() * 5000),
    creator: `Creator${i + 1}`
  }));
};

const MOCK_MEMES = generateMockMemes(24);

const HomePage = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % DEGEN_SLOGANS.length);
        setIsGlitching(false);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Price Ticker */}
      <div className="relative backdrop-blur-sm bg-dark-lighter/20 border-b border-primary/10">
        <div className="max-w-[2000px] mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-2">
            {TRENDING_PRICES.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm whitespace-nowrap font-pixel">
                <span className="text-meme-cyan">{item.name}</span>
                <span className="text-meme-green animate-pulse">{item.price} SOL</span>
                <span className="text-meme-green text-[10px] animate-blink">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="max-w-[2000px] mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 degen-text-glitch" data-text="Your Best Celebrity Meme Catcher">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-meme-red via-meme-yellow to-meme-green animate-pulse">
            Your Best Celebrity Meme Catcher
          </span>
        </h1>

        {/* Animated Slogan */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlogan}
            className={`text-xl degen-text mb-6 ${isGlitching ? 'animate-glitch' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {DEGEN_SLOGANS[currentSlogan]}
          </motion.p>
        </AnimatePresence>

        {/* Marquee Display */}
        <div className="max-w-4xl mx-auto">
          <MarqueeDisplay />
        </div>
        
        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-meme-purple via-meme-cyan to-meme-purple rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="gm ser, what meme you looking for?"
                className="w-full px-6 py-3 bg-dark-lighter/50 backdrop-blur-sm rounded-full border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-pixel text-sm"
              />
              <motion.button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-meme-green text-dark-deeper px-6 py-2 rounded-full hover:bg-meme-green/80 transition-all duration-300 font-pixel text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>SEARCH SER</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Meme Grid */}
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
          {MOCK_MEMES.map((meme) => (
            <motion.div
              key={meme.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MemeCard {...meme} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Degen Footer */}
      <div className="text-center py-8">
        <motion.div
          className="degen-text text-sm"
          animate={{
            color: ['#44FF44', '#FF4444', '#4444FF', '#44FF44'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          PROBABLY NOTHING SER... WAGMI 🚀
        </motion.div>
      </div>

      {/* Scan Lines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(68, 255, 68, 0.03) 1px, rgba(68, 255, 68, 0.03) 2px)',
          backgroundSize: '100% 2px',
          opacity: 0.1,
          zIndex: 50
        }}
      />
    </div>
  );
};

export default HomePage;
