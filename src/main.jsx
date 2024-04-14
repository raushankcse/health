import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navigation from './Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <App />
  </React.StrictMode>,
)
