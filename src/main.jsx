import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap'
import './assets/css/custom.css'
import './assets/css/all.css'
import './assets/css/swiper-bundle.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
