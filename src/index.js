import React from 'react';
import ReactDOM from 'react-dom/client';
import { WatchListContext } from './context/WListContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WatchListContext>
  <Router>
    <ScrollToTop />
  <App />
  </Router>
  </WatchListContext>
  </React.StrictMode>
);

