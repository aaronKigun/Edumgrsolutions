import React from 'react'
import {Router } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import Detail from './components/Detail'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Hero/> 
     <About/>
     <Feature/>
     <Pricing/>
     <Detail/>
     <Contact/>
    <Footer/>
    </Router>
    </>
  )
}

export default App
