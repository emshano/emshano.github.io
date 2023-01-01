import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
      document.getElementById('root')
);
