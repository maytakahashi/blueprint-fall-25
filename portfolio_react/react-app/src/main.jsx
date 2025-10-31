import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// DELETE IMPORT FOR INDEX.CSS WEEK 4
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
