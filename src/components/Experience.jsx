import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="section-header">
                <div className="section-label">Career</div>
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    Where I've applied my skills in the real world.
                </p>
            </div>

            <div className="experience-card">
                <div className="experience-top">
                    <div>
                        <h3 className="experience-role">AI & Machine Learning Intern</h3>
                        <div className="experience-company">AWS · Amazon Web Services</div>
                    </div>
                </div>

                <ul className="experience-list">
                    <li>Built NLP chatbot using AWS Lex + Lambda for conversational AI experiences.</li>
                    <li>Worked on semantic processing and conversational systems at scale.</li>
                    <li>Learned practical constraints of deploying AI in real production environments.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
