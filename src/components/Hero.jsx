import React from 'react';

const Hero = () => {
    return (
        <section id="about" className="hero">
            <div className="hero-badge">
                <span className="dot" />
                Startup Shell · University of Maryland
            </div>

            <h1 className="hero-name">
                Avhaan Narang<br />
                <span className="gradient-text">builds things that matter.</span>
            </h1>

            <p className="hero-tagline">
                Freshman studying CS@UMD. Interested in building things that matter and learning through iterating. Highly interested in <strong>networking, startups, hackathons, and digital work</strong>.
            </p>

            <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                    View Projects ↓
                </a>
                <a href="https://www.linkedin.com/in/avhaan-narang/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    LinkedIn →
                </a>

            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-number">🏆</span>
                    <span className="stat-label">Technica Best UI/UX</span>
                </div>
                <div className="stat">
                    <span className="stat-number">AWS</span>
                    <span className="stat-label">AI/ML Intern</span>
                </div>
                <div className="stat">
                    <span className="stat-number">1</span>
                    <span className="stat-label">Published Research</span>
                </div>
                <div className="stat">
                    <span className="stat-number">∞</span>
                    <span className="stat-label">Curiosity</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
