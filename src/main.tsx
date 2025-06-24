import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ModalProvider } from './components/Modal/context/ModalContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { initAxios } from './services/axios.services.ts'

initAxios(); // toda la app utiliza axios interceptado

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ErrorBoundary>
  </StrictMode>,
)
