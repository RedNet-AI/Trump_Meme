import { motion } from 'framer-motion';

interface MemeCardProps {
  title: string;
  image: string;
  price: number;
  likes: number;
  creator: string;
}

const MemeCard = ({ title, image, price, likes, creator }: MemeCardProps) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Card Container */}
      <div className="relative bg-dark-deeper rounded-lg overflow-hidden border border-meme-purple/20">
        {/* Image */}
        <div className="relative aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Glitch Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/90 via-dark-deeper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-meme-red/10 to-meme-blue/10 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-glitch" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-dark-deeper/80 backdrop-blur-sm">
          {/* Title */}
          <div className="text-xs font-pixel truncate text-meme-cyan mb-1 group-hover:animate-glitch">
            {title}
          </div>
          
          {/* Price and Stats */}
          <div className="flex items-center justify-between text-[10px] font-pixel">
            <div className="flex items-center space-x-1">
              <span className="text-meme-green animate-pulse">{price} SOL</span>
              <span className="text-meme-green animate-blink">↗</span>
            </div>
            <div className="flex items-center space-x-1 text-meme-purple">
              <span>♥</span>
              <span>{likes}</span>
            </div>
          </div>
        </div>

        {/* Creator Tag */}
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-dark-abyss/80 backdrop-blur-sm rounded text-[8px] text-meme-cyan font-pixel">
          {creator}
        </div>

        {/* Buy Button */}
        <motion.button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-meme-green text-dark-abyss font-pixel text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-meme-green/80"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          APE IN
        </motion.button>

        {/* Corner Glows */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-radial from-meme-purple/30 to-transparent" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-radial from-meme-cyan/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-radial from-meme-red/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-radial from-meme-green/30 to-transparent" />
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 border border-meme-purple/50 rounded-lg animate-pulse" />
        </div>

        {/* Scan Lines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(68, 255, 68, 0.03) 2px, rgba(68, 255, 68, 0.03) 4px)',
            backgroundSize: '100% 4px'
          }}
        />

        {/* Random Glitch Effect */}
        <motion.div
          className="absolute inset-0 bg-meme-cyan/10 opacity-0"
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
      </div>
    </motion.div>
  );
};

export default MemeCard;
