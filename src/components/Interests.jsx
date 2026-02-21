import React from 'react';

const Interests = () => {
    return (
        <section id="interests" className="section interests-grid">
            <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>What I’m Interested In</h3>
                <ul className="interests-list">
                    <li>AI systems that explain instead of just predict</li>
                    <li>Tools that reduce cognitive load</li>
                    <li>Human-AI interaction</li>
                    <li>Infrastructure that scales in imperfect environments</li>
                    <li>Startups solving real problems, not hypothetical ones</li>
                </ul>
            </div>

            <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Currently Exploring</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--secondary-text)', marginBottom: '15px' }}>
                    Building products at the intersection of: <br />
                    <strong>AI + Decision Making + Real World Systems</strong>
                </p>
                <p style={{ lineHeight: '1.6', color: 'var(--secondary-text)' }}>
                    Interested in joining ambitious teams or building with people who care about useful technology.
                </p>
            </div>
        </section>
    );
};

export default Interests;
