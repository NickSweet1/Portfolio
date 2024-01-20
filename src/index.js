import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'; 
import App from './App';
import { Analytics } from '@vercel/analytics/react'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
  document.getElementById('root')
);