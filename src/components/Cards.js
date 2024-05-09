import React, { useState, useEffect } from 'react';
import cardsData from '../data/ecochallenges.json';
import Challenge from './Challenge';

function Cards({ acceptedChallenges, totalChallenges, onAccept, onDecline, isChallengePage }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        if (isChallengePage) {
            setCurrentCardIndex(Math.floor(Math.random() * cardsData.length));  // Ensures a card is shown when page is loaded
        }
    }, [isChallengePage, cardsData.length]);

    const progressPercent = acceptedChallenges ? (acceptedChallenges.length / totalChallenges) * 100 : 0;

    return (
        <div className={isChallengePage ? "challenge-container" : "card-container"}>
            {isChallengePage && (
                <>
                    <div className="progress-bar-container" style={{width: '100%'}}>
                        <div className="progress-bar" style={{width: `${progressPercent}%`}}>
                            {acceptedChallenges.length}/{totalChallenges} challenges completed
                        </div>
                    </div>
                    <Challenge
                        card={cardsData[currentCardIndex]}
                        onAccept={onAccept}
                        onDecline={onDecline}
                        showActions={true}
                    />
                </>
            )}
            {!isChallengePage && 
                cardsData.map(card => (
                    <Challenge
                        key={card.id}
                        card={card}
                        onAccept={() => {}}
                        onDecline={() => {}}
                        showActions={false}
                    />
                ))
            }
        </div>
    );
}


export default Cards;
