import React from 'react';

import './App.css';
import Header from './Header';
import Navh from './Components/Cv';
import Nav from './Components/Nav';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Project from './Projects';


function App() {
  return (
    <div className="App">
        <Navh/>
        <Nav />
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Project />
        
        
   
    </div>
  );
}

export default App;
