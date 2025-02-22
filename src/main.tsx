import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/PPAir-SemiBoldMono.ttf'
import './assets/styles/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
