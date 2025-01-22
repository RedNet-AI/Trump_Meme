import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 导入样式
import './index.css';
// 导入钱包适配器样式
import '@solana/wallet-adapter-react-ui/styles.css';
import './styles/wallet-adapter.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
