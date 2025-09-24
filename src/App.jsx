import React from 'react'
import './App.css'
import { HomePage } from './pages/home'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <React.StrictMode>
      <BrowserRouter>
          <HomePage />
      </BrowserRouter>
    </React.StrictMode>
    </>
  )
}

export default App
