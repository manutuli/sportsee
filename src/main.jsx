import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* nav router */}
    <div className='outer-container'>
      <HorizontalNav />
      <div className='inner-container'>
        <VerticalNav />
        <App id={18} />
      </div>
    </div>
    
  </React.StrictMode>,
)
