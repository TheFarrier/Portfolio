import React from 'react';
import './App.css';
import Navbar from './components/Navbar/';
import About from './components/About'
import { Container } from 'react-bootstrap';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Footer  from './components/Footer';
import ProjectPage from './components/Projectpage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <About />
              <Skills />
              <Projects />
            </Route>
            <Route path="/project/">
              <ProjectPage />
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
