import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-primary text-white mt-5">
            <div className="container p-5 d-flex flex-column flex-lg-row justify-content-lg-between bd-highlight mt-5">
                <div>
                    <h3 className="fw-bold text-white">BrilliantBrain</h3>
                    <p>We worked for quality education</p>
                </div>
                <div className="mb-3">
                    <h4 className="fw-bold">Quick links</h4>
                    <nav className="navbar-nav">
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/home'>Home</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/aids'>Services</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/tutor'>Become a tutor</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</NavLink>
                    </nav>
                </div>
                <div>
                    <h4 className="fw-bold">Contact Us</h4>
                    <div>
                        <p>350 Avenue, New York, NY 10001<br />
                            info@example.com<br />
                            888-000-999</p>
                    </div>
                </div>
            </div>
            <hr />
            <footer className="text-center p-1">
                <p><small>Pranto Biswas © 2021. All Rights Reserved.</small></p>
            </footer>
        </div >
    );
};

export default Footer;