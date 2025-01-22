import { motion } from 'framer-motion';
import MemeCard from '../components/ui/MemeCard';

// 生成Trump系列模拟数据
const generateTrumpMemes = (count: number) => {
  const trumpMemes = [
    'Trump Victory Dance',
    'Trump Twitter Storm',
    'Trump Rally Moment',
    'Trump Golf Day',
    'Trump Speech Highlights',
    'Trump Debate Night',
    'Trump White House',
    'Trump Campaign Trail'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: trumpMemes[i % trumpMemes.length],
    image: `https://picsum.photos/${400 + i}`,
    price: Number((Math.random() * 5 + 1).toFixed(2)),
    likes: Math.floor(Math.random() * 5000),
    creator: `TrumpArtist${i + 1}`
  }));
};

const TRUMP_MEMES = generateTrumpMemes(32);

const TrumpSeriesPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.div 
        className="max-w-[2000px] mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
          Trump Series Collection
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Exclusive collection of the most iconic Trump memes on Solana
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['All', 'Trending', 'Recent', 'Most Liked', 'Highest Value'].map((filter) => (
            <motion.button
              key={filter}
              className="px-4 py-2 rounded-full bg-dark-lighter/50 text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Meme Grid */}
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
          {TRUMP_MEMES.map((meme) => (
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

      {/* Load More Button */}
      <div className="text-center py-8">
        <motion.button
          className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More
        </motion.button>
      </div>
    </div>
  );
};

export default TrumpSeriesPage;
