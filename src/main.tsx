import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAxios } from './services/axios.services.ts'
import AppHookContainer from './AppHookContainer.tsx'

initAxios(); // toda la app utiliza axios interceptado

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
