import React from 'react';

function Challenge({ card, onAccept, onDecline, showActions }) {
    return (
        <div className="challenge-card">
            <img src={card.image} alt={card.action} className="challenge-image" />
            <div className="challenge-content">
                <h5 className="challenge-title">{card.action}</h5>
                <p className="challenge-description">{card.description}</p>
            </div>
            {showActions && (
                <div className="challenge-actions">
                    <button className="btn accept" onClick={() => onAccept(card.id)}>Accept</button>
                    <button className="btn decline" onClick={() => onDecline(card.id)}>Decline</button>
                </div>
            )}
        </div>
    );
}

export default Challenge;
