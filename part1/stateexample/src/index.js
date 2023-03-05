import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1
let feedback = []
ReactDOM.createRoot(document.getElementById('root')).render(
  <App counter={counter} feedback = {feedback} />
)