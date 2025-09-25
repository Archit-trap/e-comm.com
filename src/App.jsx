import React from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'

function App() {

  return (
    <>

      <BrowserRouter>
      <Navbar />
      </BrowserRouter>

    </>
  )
}

export default App
