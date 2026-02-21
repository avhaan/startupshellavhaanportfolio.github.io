import React from 'react';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="nav-logo">
                    avhaan<span className="accent">.</span>
                </div>
                <div className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#interests">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
