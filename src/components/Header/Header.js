import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="fw-bold">BrilliantHead</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-5 fw-bold navbar-nav">
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/aids">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/tutor">Become a tutor</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;