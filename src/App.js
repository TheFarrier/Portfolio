import React from 'react';
import './App.css';
import Navbar from './components/Navbar/';
import About from './components/About'
import { Container } from 'react-bootstrap';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Footer  from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
