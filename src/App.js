import React from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import About from './About'
import Portfolio from './Portfolio'
import Navbar from './Navbar'
import Services from './Services'
import Home from './Home'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
    </>
  )
}

export default App