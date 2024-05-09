import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Landingpage';
import Resources from './Resources';
import Footer from './Footer';
import Cards from './Cards';

function App() {
    const [acceptedChallenges, setAcceptedChallenges] = useState([]);
    const totalChallenges = 50;

    const handleAccept = (challengeId) => {
        if (!acceptedChallenges.includes(challengeId)) {
            setAcceptedChallenges(prev => [...prev, challengeId]);
        }
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
                        isChallengePage={true}
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
