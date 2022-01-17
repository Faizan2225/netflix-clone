import React from 'react'

// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//css
import './app.css'

// navbar
import Navbar from './components/navbar'

// pages
import Home from './pages/home'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default ReactRouterSetup
