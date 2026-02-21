import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>

            <div className="experience-header">
                <div>
                    <div>
                        <h3 style={{ fontSize: '1.4rem' }}>AI & Machine Learning Intern</h3>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-color)', marginTop: '5px' }}>
                            AWS · Amazon Web Services
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                    {/* Date can be added if known */}
                </div>
            </div>

            <ul className="experience-list">
                <li>Built NLP chatbot using AWS Lex + Lambda.</li>
                <li>Worked on semantic processing and conversational systems.</li>
                <li>Learned practical constraints of deploying AI in real environments.</li>
            </ul>
        </section>
    );
};

export default Experience;
