import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/Education';
import Skills from './pages/skills';
import Services from './pages/services';
import Experience from './pages/experience';
import MyProjects from './pages/myProjects';
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#home" className="smooth-scroll">Home</a></li>
          <li><a href="#about" className="smooth-scroll">About</a></li>
          <li><a href="#skills" className="smooth-scroll">Skills</a></li>
          <li><a href="#services" className="smooth-scroll">Services</a></li>
          <li><a href="#experience" className="smooth-scroll">Experience</a></li>
          <li><a href="#myprojects" className="smooth-scroll">My Projects</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="services"><Services /></section>
      <section id="experience"><Experience /></section>
      <section id="myprojects"><MyProjects /></section>

      {/* Footer */}
      <Footer />

      {/* Analytics and Performance Insights */}
      <Analytics />
      {/* <SpeedInsights /> */}
    </div>
  );
}

export default App;
