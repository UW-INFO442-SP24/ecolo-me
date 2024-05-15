// Should we use HTMLcanvas to print out the page instead of words for the challenges?



import React from 'react';
import { jsPDF } from 'jspdf';

function QuizCardsResult({ acceptedCards }) {
    // Function to print the accepted cards to a PDF
    const printCards = () => {
        const doc = new jsPDF();
        acceptedCards.forEach((card, index) => {
            doc.text(20, 20 + index * 10, `${card.action}: ${card.description}`);
        });
        // Save the generated PDF
        doc.save('accepted-challenges.pdf');
    };

    return (
        <div className="card-container">
            {/* This could use styling or prompting on what the user should do when they click on find challenges */}
            <h2>Accepted Challenges</h2>
            <div className="accepted-cards-list">
                {/* There might be a better way to format when the user chooses 0 challenges */}
                {acceptedCards.length === 0 ? (
                    <p>No challenges accepted yet.</p>
                ) : (
                    acceptedCards.map((card) => (
                        <div key={card.id} className="one-card-print">
                            <img src={card.image} alt={card.action} className="one-card-image" />
                            <div className="one-card-body">
                                <h5 className="one-card-title">{card.action}</h5>
                                <p className="one-card-text">{card.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {acceptedCards.length > 0 && (
                <button onClick={printCards} className="print-button">Print Accepted Challenges</button>
            )}
        </div>
    );
}

export default QuizCardsResult;



