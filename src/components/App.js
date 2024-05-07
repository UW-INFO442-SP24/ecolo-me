import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Landingpage';
import Resources from './Resources';
import Footer from './Footer.js';
import Cards from './Cards.js';
import Funfacts from './Facts.js';

function App(props) {
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  const totalChallenges = 50;

  const handleAccept = (challengeId) => {
    setAcceptedChallenges((prevAcceptedChallenges) => [...prevAcceptedChallenges, challengeId]);
  };

  const handleDecline = (challengeId) => {
    setAcceptedChallenges((prevAcceptedChallenges) =>
      prevAcceptedChallenges.filter((id) => id !== challengeId)
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/find"
          element={
            <Cards
              acceptedChallenges={acceptedChallenges}
              totalChallenges={totalChallenges}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          }
        />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      {/* Render the progress bar */}
      <div>
        <span>{acceptedChallenges.length}/{totalChallenges} challenges completed</span>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(acceptedChallenges.length / totalChallenges) * 100}%` }}
          />
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;