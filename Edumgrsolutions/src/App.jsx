import React from 'react'
import { Router,Route } from 'react-router-dom'
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
     <Route path='/about' element={<About/>}>
     <About/>
     </Route>
     <Route path='/feature' element={<Feature/>}>
     <Feature/>
     </Route>
     <Route path='/pricing' element={<Pricing/>}>
     <Pricing/>
     </Route>
     <Route path='/detail' element={<Detail/>}>
     <Detail/>
     </Route>
     <Route path='/contact' element={<Contact/>}>
     <Contact/>
     </Route>
    <Footer/>
    </Router>
    </>
  )
}

export default App
