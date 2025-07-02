import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Residential from './Pages/Residential';
import Commercial from './Pages/Commercial';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Careers from './Pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/careers" element={<Careers />} /> 
          
          {/* Products Routes */}
          <Route path="/products/home" element={<Residential />} />
          <Route path="/products/commercial" element={<Commercial />} /> 
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;