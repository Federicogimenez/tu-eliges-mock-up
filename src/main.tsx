import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import App from './App.tsx'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-6DLNP4ZCB5');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
