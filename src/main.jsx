// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { reducers } from './store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <HeroUIProvider>
        <BrowserRouter>
          <App />
       </BrowserRouter>
      </HeroUIProvider>
    </Provider>
  </React.StrictMode>,
)