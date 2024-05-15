import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Landingpage';
import Resources from './Resources';
import Footer from './Footer.js';
import Funfacts from './Facts.js';
import QuizCards from './Quiz/QuizCard';
import QuizCardsResult from './Quiz/QuizCardsResult';

function App() {

    // State to hold the accepted cards
    const [acceptedCards, setAcceptedCards] = useState([]);

    // Function to handle accepting a card
    const handleAccept = (card) => {
        setAcceptedCards((prevCards) => [...prevCards, card]);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/find" element={<Funfacts />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/quiz" element={<QuizCards onAccept={handleAccept} />} />
                <Route path="/results" element={<QuizCardsResult acceptedCards={acceptedCards} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;