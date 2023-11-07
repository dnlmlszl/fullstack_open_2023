import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AnecdoteProvider } from './context/AnecdoteContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnecdoteProvider>
      <App />
    </AnecdoteProvider>
  </React.StrictMode>
);
