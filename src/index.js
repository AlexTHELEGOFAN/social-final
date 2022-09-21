import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.scss';

// constante root qui créé la racine du projet
const root = ReactDOM.createRoot(document.getElementById('root'));

// méthode pour faire le rendu
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
