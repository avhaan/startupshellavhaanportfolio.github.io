import React from 'react';

const Hero = () => {
    return (
        <section id="about" className="hero">
            <h1 className="hero-title">
                I build technology that makes complex systems understandable for humans.
            </h1>
            <p className="hero-subtitle">
                From AI healthcare tools to distributed systems research — I care about clarity, scale, and real-world usefulness.
            </p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                    View Projects
                </a>
                <a href="#interests" className="btn btn-secondary">
                    What I’m Working On
                </a>
            </div>

            <div className="hero-bio">
                <p>
                    I’m a CS student at UMD interested in AI, systems, and human-centered technology.
                    I like building things where technical depth meets real impact.
                </p>
                <div style={{ marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-color)' }}>
                    <span style={{ marginRight: '15px' }}>// BUILDER @ STARTUP SHELL</span>
                    <span>// CS @ UMD</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
