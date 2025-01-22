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
import { WalletContextProvider } from './components/wallet/WalletContextProvider';

function App() {
  return (
    <WalletContextProvider>
      <Router>
        <div className="relative min-h-screen bg-dark-deeper">
          {/* Background Container */}
          <div className="fixed inset-0">
            {/* Base Background */}
            <div className="absolute inset-0">
              {/* Base Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-dark-darker via-dark to-dark-darker opacity-50" />
              
              {/* Radial Gradient */}
              <div className="absolute inset-0 bg-gradient-radial from-dark-darker/0 via-dark/30 to-dark-deeper opacity-70" />
              
              {/* Noise Texture */}
              <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay" />
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0">
              {/* Grid Layer */}
              <div className="absolute inset-0 mix-blend-lighten">
                <GridBackground />
              </div>

              {/* Crypto Elements Layer */}
              <div className="absolute inset-0 mix-blend-screen">
                <CryptoElements />
              </div>
            </div>

            {/* Overlay Gradients */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-dark-deeper/80 via-transparent to-dark-deeper/80" />
              
              {/* Horizontal Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark-deeper/50 via-transparent to-dark-deeper/50" />
              
              {/* Corner Vignette */}
              <div className="absolute inset-0 bg-gradient-vignette opacity-30" />
            </div>

            {/* Glow Effects */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-glow from-accent-purple-dark/5 to-transparent rotate-180" />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-gradient-glow from-accent-blue-dark/5 to-transparent" />
            </div>
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
        </div>
      </Router>
    </WalletContextProvider>
  );
}

export default App;
