import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorBoundariesDemo from './ErrorBoundariesDemo'
//import ReactLaztDemo from './ReactLazyDemo'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundariesDemo/>
  </StrictMode>,
)
