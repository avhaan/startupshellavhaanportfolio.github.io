import React from 'react';

const Interests = () => {
    return (
        <section id="interests" className="section">
            <div className="section-header">
                <div className="section-label">About Me</div>
                <h2 className="section-title">Interests & Focus</h2>
                <p className="section-subtitle">
                    What drives my curiosity and what I'm building toward.
                </p>
            </div>

            <div className="interests-grid">
                <div className="interest-card">
                    <h3><span className="icon">⚡</span> What I Care About</h3>
                    <ul className="interest-list">
                        <li>AI systems that explain instead of just predict</li>
                        <li>Tools that reduce cognitive load</li>
                        <li>Human-AI interaction design</li>
                        <li>Infrastructure that scales in imperfect environments</li>
                        <li>Startups solving real problems, not hypothetical ones</li>
                    </ul>
                </div>

                <div className="interest-card">
                    <h3><span className="icon">🔭</span> Currently Exploring</h3>
                    <div className="interest-text">
                        <p>
                            Building products at the intersection of:<br />
                            <strong>AI + Decision Making + Real World Systems</strong>
                        </p>
                        <p>
                            Interested in joining ambitious teams or building with people
                            who care about useful technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interests;
