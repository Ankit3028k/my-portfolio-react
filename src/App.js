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

function App() {
  return (
    <div className="App">
      {/* Add a simple nav */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          {/* Add more as needed */}
        </ul>
      </nav>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="services"><Services /></section>
      <section id="experience"><Experience /></section>
      <section id="myprojects"><MyProjects /></section>
      <Footer />
    </div>
  );
}

export default App;