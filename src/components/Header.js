import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
        <nav className="navbar">
            <div className="project-name">
            <Link to="/home" >
            <img width="50" height="50" src="https://img.icons8.com/color/48/000000/hand-planting.png" alt="hand-planting" />
            <span>ECO-<span className="challenge-text">CHALLENGE</span></span>
            </Link>
            </div>


            <ul className="navbar-links">
                <li><a href="/home">HOME</a></li>
                <li><a href="/find">FIND CHALLENGES</a></li>
                <li><a href="/resources">MORE RESOURCES</a></li>
            </ul>

        </nav>
        </header>
    );
}

export default Header;