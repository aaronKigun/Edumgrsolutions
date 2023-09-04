import React from 'react'
import {BrowserRouter} from 'react-router-dom'
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
    <BrowserRouter>
    <Nav/>
    <Hero/> 
     <About/>
     <Feature/>
     <Pricing/>
     <Detail/>
     <Contact/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
