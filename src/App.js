import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About';
import Bar from "./components/Bar";
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" id="start">
      <Router>
        <Bar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;
