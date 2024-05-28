import React from 'react';
import Cards from './Cards';

function Landing(props) {
    const autoScrolltoCards = () => {
        document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='landing-flex'>
            <section>
                <h2>Welcome to Eco-Challenge: </h2>
                <h3>Transforming Habits, Preserving Our Planet 🌍</h3>
                <div className='create'>
                 <button className='land-button' onClick={() => {window.location.href='/quiz';}}>BE CHALLENGED</button>
                </div>
                <p>*Each challenge you'll face here is an opportunity to contribute to a healthier planet.</p>
                <div className="down-arrow" onClick={autoScrolltoCards}>
                    <img src={`${process.env.PUBLIC_URL}/img/down-caret.png`} alt="Down arrow" />
                </div>
            </section>

            <section className="landing-page">
                <div className="lp-content"></div>
            </section>
        </div>
    );
}

function Home(props) {
    return (
        <div>
        <Landing />
        <section id="cards-section">
                <Cards />
            </section>
        </div>
    );
  }
  

  export default Home;
