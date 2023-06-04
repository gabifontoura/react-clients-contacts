import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
        <UserProvider>

          <App />
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
