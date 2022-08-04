import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <div className='page'>
        <App />
      </div>
    </div>
  </React.StrictMode>
)
