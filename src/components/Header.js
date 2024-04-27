// RESPONSIVE NAVBAR USING BOOTSTRAP
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
        <Container>
        <Navbar.Brand as={Link} to="/home" className="project-name">
            <img src="https://img.icons8.com/color/48/000000/hand-planting.png" width="50" height="50" alt="hand-planting" />
            <span>ECO-<span className="challenge-text">CHALLENGE</span></span>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar-links">
                <Nav.Link as={Link} to="/home" className="nav-item">HOME</Nav.Link>
                <Nav.Link as={Link} to="/find" className="nav-item">FIND CHALLENGES</Nav.Link>
                <Nav.Link as={Link} to="/resources" className="nav-item">MORE RESOURCES</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default Header;