import React from 'react'
import Home from '../components/home'
import About from '../components/about'
import Education from '../components/Education'
import Skills from '../components/skills'
import Services from '../components/services'
import Experience from '../components/experience'
import MyProjects from '../components/myProjects'
import Footer from '../components/footer'

function home() {
  return (
    <div>

    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Services/>
    <Experience/>
    <MyProjects/>
    <Footer/>
    </div>
  )
}

export default home
