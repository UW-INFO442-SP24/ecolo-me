import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Landingpage';
import Resources from './Resources';


function App(props) {
    return (
      <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      </Router>
    );
};

export default App;