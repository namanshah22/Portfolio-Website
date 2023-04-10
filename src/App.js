import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const Main = styled.main`
  padding: 2rem;
`;

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Main>
        </Router>
    </>
  );
}

export default App;
