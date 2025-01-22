import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/layout/HomePage';
import TrumpSeriesPage from './pages/TrumpSeriesPage';
import PoliticalPage from './pages/PoliticalPage';
import CelebrityPage from './pages/CelebrityPage';
import TrendingPage from './pages/TrendingPage';
import NewsFlashBar from './components/ui/NewsFlashBar';
import CryptoElements from './components/ui/CryptoElements';
import GridBackground from './components/ui/GridBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-abyss text-white">
        {/* Background Container */}
        <div className="fixed inset-0">
          {/* Base Layer */}
          <div className="absolute inset-0 bg-degen-pattern opacity-5" />
          
          {/* Noise Layer */}
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.15] mix-blend-overlay" />
          
          {/* Grid Layer */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-abyss via-dark-deeper to-dark-abyss opacity-80" />
            <GridBackground />
          </div>

          {/* Crypto Elements */}
          <div className="absolute inset-0 mix-blend-screen">
            <CryptoElements />
          </div>

          {/* Glitch Effect Layer */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-meme-red/5 via-transparent to-meme-blue/5 animate-glitch" />
            <div className="absolute inset-0 bg-gradient-to-b from-meme-green/5 via-transparent to-meme-purple/5 animate-shake" />
          </div>

          {/* Vignette Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-vignette opacity-50" />
          </div>

          {/* Scan Lines */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)',
              backgroundSize: '100% 2px',
              opacity: 0.1
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trump-series" element={<TrumpSeriesPage />} />
            <Route path="/political" element={<PoliticalPage />} />
            <Route path="/celebrity" element={<CelebrityPage />} />
            <Route path="/trending" element={<TrendingPage />} />
          </Routes>
          <NewsFlashBar />
        </div>

        {/* Random Pepe */}
        <div className="fixed bottom-4 right-4 w-12 h-12 opacity-30 hover:opacity-100 transition-opacity duration-300">
          <img 
            src="https://i.imgur.com/ZwDRNHg.png" 
            alt="pepe"
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
