import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Landingpage';
import Resources from './Resources';
import Footer from './Footer.js';


function App(props) {
    return (
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/home" element={<Home/>} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer/>
      </Router>
    );
};

export default App;