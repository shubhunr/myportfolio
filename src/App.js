import React from 'react';

import './App.css';
import Header from './Header';
import Nav from './Components/Nav';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interest from './Interest';

function App() {
  return (
    <div className="App">

        <Nav />
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Interest />
        
        
   
    </div>
  );
}

export default App;
