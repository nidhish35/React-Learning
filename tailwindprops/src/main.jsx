import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Card username={"Nidhish"}/>
    <Card bio={"I am LEARNING React"}/>
    </>,
)
