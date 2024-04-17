import React from 'react';

function Landing(props) {
    return (
        <div className="landing-flex">
            <section>
                <h2>Welcome to Eco-Challenge: </h2>
                <p>Transforming Habits, Preserving Our Planet 🌍</p>
            </section>

            <section className="landing-page">
                <div className="lp-content"></div>
            </section>
        </div>
    );
}

function Home(props) {
    return (
        <Landing />
    );
  }

  export default Home;