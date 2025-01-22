# Trump Meme NFT Marketplace

A Solana blockchain-based meme NFT trading platform built with React + Vite + TypeScript.

## Features

- 🎨 Modern and responsive UI with smooth animations
- 💰 Multi-wallet support (Phantom, Solflare, Coinbase)
- 🔗 Solana devnet integration
- 🎭 Multiple NFT categories (Trump Series, Political, Celebrity, Trending)
- 📱 Mobile-friendly design
- ⚡ Fast development with Vite HMR
- 🔒 Type-safe development with TypeScript

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Blockchain**: Solana Web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Prerequisites

- Node.js 16+
- npm 7+
- A Solana wallet (Phantom, Solflare, or Coinbase)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd trump-meme-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   │   ├── HomePage.tsx
│   │   └── Navbar.tsx
│   ├── ui/             # Reusable UI components
│   │   ├── CryptoElements.tsx
│   │   ├── GridBackground.tsx
│   │   ├── MemeCard.tsx
│   │   └── ...
│   └── wallet/         # Wallet integration
│       └── WalletContextProvider.tsx
├── pages/              # Route pages
│   ├── TrumpSeriesPage.tsx
│   ├── PoliticalPage.tsx
│   ├── CelebrityPage.tsx
│   └── TrendingPage.tsx
├── styles/            # Global styles
└── App.tsx           # Root component
```

## Supported Wallets

- **Phantom**: Popular Solana wallet with browser extension
- **Solflare**: Full-featured Solana wallet
- **Coinbase**: Multi-chain wallet with Solana support

## Development Guide

### Development Workflow

1. **Local Development**
   ```bash
   npm run dev
   ```
   - Uses Vite's HMR for instant updates
   - Connects to Solana devnet by default
   - Automatically reloads on file changes

2. **Code Quality**
   ```bash
   npm run lint
   ```
   - ESLint checks for code quality
   - TypeScript type checking
   - Prettier formatting

3. **Building for Production**
   ```bash
   npm run build
   npm run preview  # Preview production build
   ```

### Adding New Features

#### Adding a New NFT Category

1. Create a new page component in `src/pages/`:
   ```typescript
   // src/pages/NewCategoryPage.tsx
   import React from 'react';
   
   const NewCategoryPage = () => {
     return (
       <div className="container mx-auto">
         {/* Your category content */}
       </div>
     );
   };
   
   export default NewCategoryPage;
   ```

2. Add the route in `App.tsx`:
   ```typescript
   import NewCategoryPage from './pages/NewCategoryPage';
   
   // In the Routes component
   <Route path="/new-category" element={<NewCategoryPage />} />
   ```

3. Add navigation in `Navbar.tsx`:
   ```typescript
   const navItems = [
     // ... existing items
     { name: 'NEW CATEGORY', path: '/new-category' }
   ];
   ```

#### Extending Wallet Support

1. Install the new wallet adapter:
   ```bash
   npm install @solana/wallet-adapter-[wallet-name]
   ```

2. Add the wallet adapter in `WalletContextProvider.tsx`:
   ```typescript
   import { NewWalletAdapter } from '@solana/wallet-adapter-[wallet-name]';
   
   const wallets = useMemo(
     () => [
       // ... existing wallets
       new NewWalletAdapter(),
     ],
     []
   );
   ```

### Configuration Guide

#### Vite Configuration

The project uses `vite.config.ts` for build configuration:
- Node polyfills for web3 compatibility
- React plugin for JSX support
- Environment variables support

```typescript
// vite.config.ts
export default defineConfig({
  // ... existing config
  
  // Add custom configuration
  server: {
    port: 3000,
    open: true
  },
  
  // Add environment variables
  define: {
    'process.env.CUSTOM_VAR': JSON.stringify(process.env.CUSTOM_VAR)
  }
});
```

#### Tailwind Configuration

Customize styling in `tailwind.config.js`:
```javascript
module.exports = {
  // Add custom colors
  theme: {
    extend: {
      colors: {
        'custom-color': '#hexcode'
      }
    }
  },
  // Add custom plugins
  plugins: [
    require('@tailwindcss/forms')
  ]
};
```

### Common Development Tasks

1. **Creating New Components**
   - Place reusable UI components in `src/components/ui/`
   - Place layout components in `src/components/layout/`
   - Use TypeScript interfaces for props
   - Follow existing component patterns

2. **State Management**
   - Use React hooks for local state
   - Use context for global state (e.g., wallet connection)
   - Consider adding Redux/Zustand for complex state

3. **Adding New Pages**
   - Create page component in `src/pages/`
   - Add route in `App.tsx`
   - Update navigation in `Navbar.tsx`
   - Include proper wallet connection checks

4. **Styling Guidelines**
   - Use Tailwind CSS utilities
   - Create custom utilities in `src/styles/`
   - Follow mobile-first approach
   - Use Framer Motion for animations

### Troubleshooting

Common issues and solutions:

1. **Wallet Connection Issues**
   - Ensure correct network (devnet/mainnet)
   - Check wallet adapter version compatibility
   - Verify wallet extension installation

2. **Build Errors**
   - Clear node_modules and reinstall dependencies
   - Check TypeScript version compatibility
   - Verify vite.config.ts polyfills

3. **Development Server Issues**
   - Clear Vite cache: `rm -rf node_modules/.vite`
   - Check port availability
   - Verify environment variables

### Testing

1. **Unit Testing**
   ```bash
   npm run test
   ```
   - Test components in isolation
   - Mock wallet connections
   - Test UI interactions

2. **E2E Testing**
   ```bash
   npm run test:e2e
   ```
   - Test full user workflows
   - Include wallet connection flows
   - Test NFT interactions

### Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

3. **Deployment Checklist**
   - Verify environment variables
   - Check network configuration
   - Test wallet connections
   - Verify NFT interactions

### Future Development

Areas for expansion:

1. **NFT Features**
   - Implement minting functionality
   - Add collection management
   - Include rarity systems
   - Add trading features

2. **Wallet Integration**
   - Add more wallet supports
   - Implement transaction history
   - Add wallet analytics

3. **UI/UX Improvements**
   - Add dark/light themes
   - Implement more animations
   - Add accessibility features
   - Optimize for mobile

4. **Backend Integration**
   - Add API endpoints
   - Implement caching
   - Add database support
   - Include analytics


## Environment Setup

The project connects to Solana's devnet by default. To change the network:

1. Open `src/components/wallet/WalletContextProvider.tsx`
2. Modify the `endpoint` value:
```typescript
// Options: 'mainnet-beta', 'testnet', 'devnet'
const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[MIT License](LICENSE)
