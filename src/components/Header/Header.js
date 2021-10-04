import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    }
    const icon = <FontAwesomeIcon icon={faBrain} />

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <h2 className="fw-bold text-white">{icon} BrilliantBrain</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-5 fw-bold navbar-nav">
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/aids">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/tutor">Become a tutor</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;