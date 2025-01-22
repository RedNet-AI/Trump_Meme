import { motion } from 'framer-motion';
import MemeCard from '../components/ui/MemeCard';

// 生成名人相关模拟数据
const generateCelebrityMemes = (count: number) => {
  const celebrityMemes = [
    'Elon Musk Tweet',
    'Mark Zuckerberg Robot',
    'Jeff Bezos Laugh',
    'Bill Gates Windows',
    'Steve Jobs One More Thing',
    'Warren Buffett Money',
    'Jack Ma Expression',
    'Tim Cook Apple',
    'Kanye West Moment',
    'Leonardo DiCaprio Oscar',
    'Will Smith Slap',
    'Tom Cruise Jump'
  ];

  const celebrityCreators = [
    'CelebMemer',
    'HollywoodArt',
    'TechMemes',
    'StarCreator',
    'FamousArtist',
    'VIPMemes'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: celebrityMemes[i % celebrityMemes.length],
    image: `https://picsum.photos/${400 + i}`,
    price: Number((Math.random() * 5 + 1).toFixed(2)),
    likes: Math.floor(Math.random() * 5000),
    creator: celebrityCreators[Math.floor(Math.random() * celebrityCreators.length)]
  }));
};

const CELEBRITY_MEMES = generateCelebrityMemes(32);

const CelebrityPage = () => {
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
          Celebrity Meme Collection
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Iconic moments of the world's most famous personalities
        </p>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            'All', 
            'Tech CEOs', 
            'Hollywood', 
            'Musicians', 
            'Athletes',
            'Business Leaders',
            'Social Media Stars',
            'TV Personalities'
          ].map((category) => (
            <motion.button
              key={category}
              className="px-4 py-2 rounded-full bg-dark-lighter/50 text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Memes', value: '1,234' },
            { label: 'Unique Creators', value: '156' },
            { label: 'Total Volume', value: '45.3K SOL' },
            { label: 'Floor Price', value: '2.5 SOL' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-dark-lighter/30 rounded-xl p-4 backdrop-blur-sm border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hot Collections */}
      <div className="max-w-[2000px] mx-auto px-4 mb-8">
        <motion.div 
          className="bg-dark-lighter/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">🔥 Hot Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {CELEBRITY_MEMES.slice(0, 4).map((meme) => (
              <motion.div
                key={meme.id}
                className="relative aspect-square rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <img src={meme.image} alt={meme.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="text-lg font-bold text-white mb-1">{meme.title}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary">{meme.price} SOL</span>
                    <span className="text-gray-400">{meme.likes} likes</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Meme Grid */}
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
          {CELEBRITY_MEMES.map((meme) => (
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

export default CelebrityPage;
