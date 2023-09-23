import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import Detail from './components/Detail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import SignUpForm from './Common/SignUpForm'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/feature' element={<Feature/>}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<SignUpForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
