import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Testimonials from './components/Testimonials';

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Body />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
