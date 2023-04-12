import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterM from'./Router/OuterPages'
import './Index.css'
import "@fontsource/inter";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterM/>
    </React.StrictMode>
  </BrowserRouter>
)