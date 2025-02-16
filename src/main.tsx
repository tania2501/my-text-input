import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/PPAir-SemiBoldMono-BF64a4d480f20b2.ttf'
import './assets/styles/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
