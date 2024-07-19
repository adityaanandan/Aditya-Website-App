import Navbar from '../components/Navbar'
import Expo from '../components/Expo'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import React from 'react'

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Expo />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
    
  )
}

export default MainPage