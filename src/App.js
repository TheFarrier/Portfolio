import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/';
import About from './components/About'
import { Container } from 'react-bootstrap';
import Skills  from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <About />
        <Skills />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
