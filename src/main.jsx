import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Data/Router.jsx'
import './index.css'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
