import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tap from './wow.jsx'

const anotherElement = React.createElement('a', {href :'https://google.com'}, 'Hello World')

createRoot(document.getElementById('root')).render(
  // <>
  //   <Tap />
  //   <App />
  // </>
  anotherElement
)
