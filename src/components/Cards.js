import React, { useState } from 'react';
import cardsData from '../data/ecochallenges.json';
import Challenge from './Challenge';

function Cards({ acceptedChallenges, totalChallenges, onAccept, onDecline, isChallengePage }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleAccept = (id) => {
        onAccept(id);
        showNextCard();
    };

    const handleDecline = (id) => {
        onDecline(id);
        showNextCard();
    };

    const showNextCard = () => {
        if (isChallengePage) { // Only increment card index on challenge page
            setCurrentCardIndex(prevIndex => (prevIndex + 1) % cardsData.length);
        }
    };

    return (
        <div className={isChallengePage ? "challenge-container" : "card-container"}>
            {isChallengePage ? (
                cardsData.length > 0 && 
                <Challenge
                    card={cardsData[currentCardIndex]}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                    showActions={true}
                />
            ) : (
                cardsData.map(card => (
                    <Challenge
                        key={card.id}
                        card={card}
                        onAccept={() => {}}
                        onDecline={() => {}}
                        showActions={false}
                    />
                ))
            )}
        </div>
    );
}

export default Cards;
