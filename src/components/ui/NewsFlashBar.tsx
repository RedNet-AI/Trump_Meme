import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NEWS_ITEMS = [
  "🔥 Trump Pepe Meme hits new ATH at 420 SOL",
  "🚀 Biden Sleep Collection launching in 24h",
  "💎 Rare Political Memes up 150% this week",
  "🌟 New Trump vs Biden Meme Series dropping soon",
  "🎉 Community Vote: Best Meme of 2024",
  "📈 Meme Market Cap reaches 1M SOL"
];

const NewsFlashBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NEWS_ITEMS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-dark-lighter/90 to-primary/20 backdrop-blur-md border-t border-primary/20 py-2 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <span className="text-primary font-bold">TRENDING</span>
              <span className="text-white">{NEWS_ITEMS[currentIndex]}</span>
            </div>
            <div className="flex items-center space-x-2">
              {NEWS_ITEMS.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsFlashBar;
