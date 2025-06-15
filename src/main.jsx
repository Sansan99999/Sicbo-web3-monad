import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Pastikan file App.jsx nanti dibuat juga
import './index.css'; // Hapus ini jika kamu belum punya index.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
