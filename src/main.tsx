import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from "./app/store.ts"
import { ContextProvider } from "./context/context.tsx"
import { domAnimation, LazyMotion } from "framer-motion"
import { BrowserRouter } from "react-router-dom"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <LazyMotion features={domAnimation}>
            <App />
          </LazyMotion>
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
