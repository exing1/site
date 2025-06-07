import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About';
import Bar from "./components/Bar";
import Project from './components/Project';
import Connect from './components/Connect.js';

function App() {
  return (
    <div className="App" id="start">
      <Router>
        <Bar/>
        <Home/>
        <About/>
        <Project/>
        <Connect/>
      </Router>
    </div>
  );
}

export default App;
