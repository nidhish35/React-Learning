import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tap from './wow.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Tap />
    <App />
    
    </>
)
