import logo from './logo.svg';
//import './App.css';
//import './Styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './assests/NavBar';
import Hero from './assests/Hero';
import Skills from './assests/Skills';
import Education from './assests/Education';
import Projects from './assests/Projects';
import Certifications from './assests/Cerifications';
import Contact from './assests/Contact';
import Profiles from './assests/Profiles';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Hero/>
        <Skills/>
        <Education/>
        <Projects/>
        <Certifications/>
        <Profiles/>
        <Contact/>
      </header>
    </div>
    </Router>
  );
}

export default App;
