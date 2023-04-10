import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Homepage'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      <Home />
    </React.StrictMode>
  </BrowserRouter>

)
