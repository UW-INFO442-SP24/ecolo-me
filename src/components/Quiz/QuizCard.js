// Maybe we should allow the user to choose which category(s) they want to flip through
// But this might make the logic harder to understand. 
// Once you add styling to this page the footer will stick to the bottom. Use 100%vh.
import React, { useState, useEffect } from 'react';
import cardsData from '../../data/ecochallenges.json';
import { useNavigate } from 'react-router-dom';

function QuizCards({ onAccept }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0); // State to track the current card index
    const [shuffledCards, setShuffledCards] = useState([]); // State to store the shuffled cards
    const navigate = useNavigate(); // Navigate to conditionally rendered cards

    useEffect(() => {
        // Shuffle and pick 10 random cards
        const shuffled = [...cardsData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledCards(shuffled.slice(0, 10)); // Set the state with the first 10 shuffled cards
    }, []);

    const handleAccept = () => {
        // Handle the accept action for the current card
        const acceptedCard = shuffledCards[currentCardIndex];
        onAccept(acceptedCard); // Call the onAccept callback with the accepted card
        showNextCard();
    };

     // Handle the decline action for the current card
    const handleDecline = () => {
        showNextCard();
    };

    const showNextCard = () => {
        // Show the next card or navigate to the results page if there are no more cards
        if (currentCardIndex < shuffledCards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            navigate('/results');
        }
    };

    const currentCard = shuffledCards[currentCardIndex]; // Get the current card

    return (
        <div className="quiz-container">
            <h2>Eco-Decisions: Will You Accept or Decline?</h2>
            <div className="box">
            <div class="text-overlay">This interactive feature allows you to engage with 10 unique environmental challenges, each designed to encourage actions that benefit our planet. As you navigate through the cards, you have the opportunity to either accept or decline each challenge. This not only helps raise awareness about eco-friendly practices but also empowers you to make a direct impact by choosing to incorporate these sustainable actions into your daily life.</div>
            </div>
            {currentCard && (
                // React Fragment: used to group multiple elements without adding an extra node to the DOM.
                // Not sure if this is good code quality????
                <React.Fragment>
                    <div className="quiz-container-card">
                        <div key={currentCard.id} className="one-card">
                            <img src={currentCard.image} alt={currentCard.action} className="one-card-image" />
                            <div className="one-card-body">
                                <h5 className="one-card-title">{currentCard.action}</h5>
                                <p className="one-card-text">{currentCard.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="question-indicator">
                        Challenge {currentCardIndex + 1} of {shuffledCards.length}
                    </div>
                    {/* Need to add styling to the buttons here */}
                    <div className="quiz-buttons">
                        <button onClick={handleAccept} className="accept-button">Accept</button>
                        <button onClick={handleDecline} className="decline-button">Decline</button>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default QuizCards;

