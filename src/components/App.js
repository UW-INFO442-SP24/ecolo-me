import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Landingpage';


function App(props) {
    return (
      <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
      </Router>
    );
};

export default App;