import React, { useState, useEffect } from 'react';
import cardsData from '../data/ecochallenges.json';
import Challenge from './Challenge';

function Cards({ acceptedChallenges, totalChallenges, onAccept, onDecline, isChallengePage }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        if (isChallengePage) {
            showRandomCard();
        }
    }, [isChallengePage]); // React to changes in isChallengePage to reset when switching views

    const handleAccept = (id) => {
        onAccept(id);
        showRandomCard();
    };

    const handleDecline = (id) => {
        onDecline(id);
        showRandomCard();
    };

    const showRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cardsData.length);
        setCurrentCardIndex(randomIndex);
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
