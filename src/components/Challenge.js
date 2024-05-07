import React from 'react';

const Challenge = ({ card, onAccept, onDecline, acceptedChallenges, totalChallenges }) => {
  const isAccepted = acceptedChallenges.includes(card.id);

  const handleAccept = () => {
    onAccept(card.id);
  };

  const handleDecline = () => {
    onDecline(card.id);
  };

  return (
    <div className="one-card">
      <img src={card.image} alt={card.action} className="one-card-image" />
      <div className="one-card-body">
        <h5 className="one-card-title">{card.action}</h5>
        <p className="one-card-text">{card.description}</p>
        {!isAccepted && (
          <div>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge;