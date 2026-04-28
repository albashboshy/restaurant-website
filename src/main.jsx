import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// bootstrap file css
import 'bootstrap/dist/css/bootstrap.min.css';
//  css file local my style
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
