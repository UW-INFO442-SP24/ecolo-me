import React from 'react';
import Cards from './Cards';

function Landing(props) {
    return (
        <div className='landing-flex'>
            <section>
                <h2>Welcome to Eco-Challenge: </h2>
                <h3>Transforming Habits, Preserving Our Planet 🌍</h3>
                <div className='create'>
                 <button className='land-button' onClick={() => {window.location.href='/resources';}}>GET STARTED</button>
                </div>
                <p>*Each challenge you'll face here is an opportunity to contribute to a healthier planet.</p>
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
        <Cards />
        </div>
    );
  }
  

  export default Home;