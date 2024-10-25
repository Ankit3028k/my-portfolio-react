import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Education from './pages/Education'
import Skills from './pages/skills'
import Services from './pages/services';
import Experience from './pages/experience';
import MyProjects from './pages/myProjects'
// import Contact from './pages/contact'
import Footer from './components/footer';


function App() {
  return (
    <>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Services/>
    <Experience/>
    <MyProjects/>
    <Footer/>
    </>
  );
}

export default App;
