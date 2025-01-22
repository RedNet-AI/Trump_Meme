import { motion } from 'framer-motion';
import MemeCard from '../components/ui/MemeCard';

// 生成政治相关模拟数据
const generatePoliticalMemes = (count: number) => {
  const politicalMemes = [
    'Biden Sleeping Moment',
    'Trump vs Biden Debate',
    'Obama Mic Drop',
    'Bernie Meme',
    'Hillary Email Saga',
    'Kamala Moment',
    'AOC Reaction',
    'McConnell Face',
    'Pelosi Clap',
    'Putin Meeting'
  ];

  const politicalCreators = [
    'PoliticalMemer',
    'DCInsider',
    'CapitolArtist',
    'MemeParty',
    'DemocratArt',
    'RepublicanMemes'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: politicalMemes[i % politicalMemes.length],
    image: `https://picsum.photos/${400 + i}`,
    price: Number((Math.random() * 5 + 1).toFixed(2)),
    likes: Math.floor(Math.random() * 5000),
    creator: politicalCreators[Math.floor(Math.random() * politicalCreators.length)]
  }));
};

const POLITICAL_MEMES = generatePoliticalMemes(32);

const PoliticalPage = () => {
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
          Political Meme Collection
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          The most viral political moments captured in memes
        </p>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            'All', 
            'Democrats', 
            'Republicans', 
            'World Leaders', 
            'Congress',
            'White House',
            'Debates',
            'Campaigns'
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

        {/* Sort Options */}
        <div className="flex justify-center mb-8">
          <select className="bg-dark-lighter/50 text-gray-300 px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:border-primary">
            <option value="trending">Trending</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>
      </motion.div>

      {/* Featured Section */}
      <div className="max-w-[2000px] mx-auto px-4 mb-8">
        <motion.div 
          className="bg-dark-lighter/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Featured Political Memes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {POLITICAL_MEMES.slice(0, 3).map((meme) => (
              <motion.div
                key={meme.id}
                className="relative aspect-video rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img src={meme.image} alt={meme.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
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
          {POLITICAL_MEMES.map((meme) => (
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

export default PoliticalPage;
