import { motion } from 'framer-motion';
import MemeCard from '../components/ui/MemeCard';

// 生成热门meme数据
const generateTrendingMemes = (count: number) => {
  const trendingMemes = [
    { title: 'Trump Victory Dance', category: 'Trump Series', growth: '+245%' },
    { title: 'Biden Sleeping Moment', category: 'Political', growth: '+180%' },
    { title: 'Elon Mars Tweet', category: 'Celebrity', growth: '+156%' },
    { title: 'Trump Twitter Storm', category: 'Trump Series', growth: '+145%' },
    { title: 'Obama Mic Drop', category: 'Political', growth: '+132%' },
    { title: 'Zuckerberg Robot', category: 'Celebrity', growth: '+128%' },
    { title: 'Trump Golf Meme', category: 'Trump Series', growth: '+120%' },
    { title: 'Bernie Chair', category: 'Political', growth: '+115%' }
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    ...trendingMemes[i % trendingMemes.length],
    image: `https://picsum.photos/${400 + i}`,
    price: Number((Math.random() * 5 + 1).toFixed(2)),
    likes: Math.floor(Math.random() * 5000),
    creator: `Trending${i + 1}`,
    volume: Math.floor(Math.random() * 1000)
  }));
};

const TRENDING_MEMES = generateTrendingMemes(32);

const TrendingPage = () => {
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
          Trending Memes 🔥
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Discover what's hot in the meme marketplace right now
        </p>

        {/* Time Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {['1H', '6H', '24H', '7D', '30D', 'ALL'].map((time) => (
            <motion.button
              key={time}
              className="px-6 py-2 rounded-full bg-dark-lighter/50 text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {time}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Top Trending Section */}
      <div className="max-w-[2000px] mx-auto px-4 mb-12">
        <motion.div 
          className="bg-dark-lighter/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">🚀 Top Trending</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400">
                  <th className="pb-4 font-medium">Rank</th>
                  <th className="pb-4 font-medium">Meme</th>
                  <th className="pb-4 font-medium">Category</th>
                  <th className="pb-4 font-medium">Price</th>
                  <th className="pb-4 font-medium">Volume</th>
                  <th className="pb-4 font-medium">Growth</th>
                </tr>
              </thead>
              <tbody>
                {TRENDING_MEMES.slice(0, 5).map((meme, index) => (
                  <motion.tr
                    key={meme.id}
                    className="border-t border-primary/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 font-medium text-white">#{index + 1}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <img src={meme.image} alt={meme.title} className="w-10 h-10 rounded-lg object-cover" />
                        <span className="font-medium text-white">{meme.title}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-400">{meme.category}</td>
                    <td className="py-4 text-primary">{meme.price} SOL</td>
                    <td className="py-4 text-white">{meme.volume} SOL</td>
                    <td className="py-4 text-green-500">{meme.growth}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Category Performance */}
      <div className="max-w-[2000px] mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Trump Series', growth: '+156%', volume: '12.5K SOL' },
            { name: 'Political', growth: '+123%', volume: '8.3K SOL' },
            { name: 'Celebrity', growth: '+98%', volume: '6.7K SOL' }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-dark-lighter/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <div className="flex justify-between items-center">
                <div className="text-green-500 font-medium">{category.growth}</div>
                <div className="text-gray-400">Vol: {category.volume}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Grid */}
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
          {TRENDING_MEMES.map((meme) => (
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

export default TrendingPage;
