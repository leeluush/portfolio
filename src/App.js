import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Pages/Home/ThemeContext';
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutMe from './Pages/Home/AboutMe';
import ContactMe from './Pages/Home/ContactMe';
import MyPortfolio from './Pages/Home/MyProtfolio';
import MySkills from './Pages/Home/MySkills';



function App() {
  return (
    <ThemeProvider>  // Use your custom ThemeProvider here
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<MyPortfolio />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/blog" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;