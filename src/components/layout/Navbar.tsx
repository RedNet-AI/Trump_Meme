import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connected } = useWallet();

  const navItems = [
    { name: 'TRUMP SERIES', path: '/trump-series' },
    { name: 'POLITICAL', path: '/political' },
    { name: 'CELEBRITY', path: '/celebrity' },
    { name: 'TRENDING', path: '/trending' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-deeper/80 backdrop-blur-sm border-b border-meme-green/20">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    degen-text text-xs px-3 py-2 rounded-lg relative group transition-all duration-300
                    ${isActive ? 'text-meme-green animate-pulse-green' : 'text-gray-400 hover:text-meme-green'}
                  `}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-meme-green/10 rounded-lg -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Wallet Connection Button */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="wallet-adapter-button-trigger"
            >
              <WalletMultiButton 
                className={`degen-button text-xs ${
                  connected ? 'bg-meme-green/20 border-meme-green/40' : 'bg-meme-green border-meme-green'
                } relative group`}
              />
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 -z-10 blur-sm"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: `radial-gradient(circle, ${connected ? 'rgba(68, 255, 68, 0.2)' : 'rgba(139, 92, 246, 0.2)'}, transparent 70%)`,
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="degen-text text-meme-green hover:text-meme-green/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-deeper/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                block px-3 py-2 rounded-md text-xs font-pixel
                ${isActive ? 'text-meme-green bg-meme-green/10 animate-pulse-green' : 'text-gray-400 hover:text-meme-green hover:bg-meme-green/5'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </motion.div>

      {/* Scan Lines */}
      <div 
        className="absolute inset-0 pointer-events-none scanline opacity-5"
        style={{ zIndex: -1 }}
      />
    </nav>
  );
};

export default Navbar;
