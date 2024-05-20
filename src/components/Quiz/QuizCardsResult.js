// Should we use HTMLcanvas to print out the page instead of words for the challenges?
import React from 'react';
import { jsPDF } from 'jspdf';

function QuizCardsResult({ acceptedCards }) {
    // Function to print the accepted cards to a PDF
    const printCards = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: [8.5, 11]
        });
        let yPosition = 1; 
    
        doc.setFontSize(10); 
        acceptedCards.forEach((card, index) => {
            const text = `${card.action}: ${card.description}`;
            const splitText = doc.splitTextToSize(text, 7.5); 
    
            if (yPosition + (splitText.length * 0.2) > 10.5) { 
                doc.addPage();
                yPosition = 1; 
            }
    
            doc.text(0.5, yPosition, splitText); 
            yPosition += (splitText.length * 0.2) + 0.1; 
        });
    
        doc.save('accepted-challenges.pdf');
    };

    return (
        <div className="accepted-page">
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




