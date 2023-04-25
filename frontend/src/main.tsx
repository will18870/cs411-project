import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterM from './Router/OuterPages'
import './Index.css'
import "@fontsource/inter";
import { Provider } from 'react-redux'
import { store } from './State/store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <RouterM />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>

)