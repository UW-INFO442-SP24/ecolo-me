import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Landingpage';
import Resources from './Resources';
import Footer from './Footer.js';
import Cards from './Cards.js';

function App(props) {
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  const totalChallenges = 50; // Assume total challenges are statically set to 50 for now

  const handleAccept = (challengeId) => {
    setAcceptedChallenges(prev => {
      if (!prev.includes(challengeId)) {
        return [...prev, challengeId];
      }
      return prev;
    });
  };

  const handleDecline = (challengeId) => {
    setAcceptedChallenges(prev => prev.filter(id => id !== challengeId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={
          <Cards
            acceptedChallenges={acceptedChallenges}
            totalChallenges={totalChallenges}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        } />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
