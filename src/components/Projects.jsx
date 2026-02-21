import React from 'react';

const ProjectCard = ({ tag, award, title, subtitle, problem, solution, features, impact, learned, videoEmbed, linkedinPost }) => (
    <div className={`project-card${award ? ' featured' : ''}`}>
        <div className="project-tag">
            {tag || 'PROJECT'}
            {award && <span className="award">{award}</span>}
        </div>

        <h3 className="project-title">{title}</h3>
        <div className="project-subtitle">{subtitle}</div>

        {videoEmbed && (
            <div className="project-video">
                <iframe
                    src={videoEmbed}
                    title={`${title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        )}

        <div className="project-content">
            <div className="project-content-block">
                <h4>Problem</h4>
                <p>{problem}</p>
            </div>
            <div className="project-content-block">
                <h4>Solution</h4>
                <p>{solution}</p>
            </div>
        </div>

        {features && (
            <div className="project-features">
                <h4>Key Features</h4>
                <ul className="project-features-list">
                    {features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
            </div>
        )}

        {impact && (
            <div className="project-features">
                <h4>Impact</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{impact}</p>
            </div>
        )}

        <div className="project-takeaway">
            <strong>Takeaway: </strong>{learned}
        </div>

        {linkedinPost && (
            <div className="linkedin-embed">
                <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:7395969106136518656`}
                    title="LinkedIn Post"
                    allowFullScreen
                />
            </div>
        )}

        <div className="project-links">
            {videoEmbed && (
                <a href={`https://youtu.be/COiP4Kmg5ic`} target="_blank" rel="noopener noreferrer" className="project-link youtube">
                    ▶ Watch on YouTube
                </a>
            )}
            {linkedinPost && (
                <a href={linkedinPost} target="_blank" rel="noopener noreferrer" className="project-link linkedin">
                    🔗 View LinkedIn Post
                </a>
            )}
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="section-header">
                <div className="section-label">Featured Work</div>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Things I've built that solve real problems.
                </p>
            </div>

            <div className="projects-grid">
                <ProjectCard
                    tag="HACKATHON // TECHNICA 2025"
                    award="🏆 Best UI/UX"
                    title="VitalViewAI"
                    subtitle="AI-powered healthcare tool that makes medical reports understandable for everyone."
                    problem="Medical reports are unreadable for normal people, causing health anxiety and misunderstanding."
                    solution="An AI system that converts reports into visual, conversational insights."
                    features={[
                        "AI assistant explaining results conversationally",
                        "Visual health comparisons vs normal ranges",
                        "Nearby hospital & pharmacy recommendations",
                        "Voice interaction support"
                    ]}
                    learned="Human-centered AI matters more than raw model accuracy. Good UX is a force multiplier for intelligence systems."
                    videoEmbed="https://www.youtube.com/embed/COiP4Kmg5ic"
                    linkedinPost="https://www.linkedin.com/posts/avhaan-narang_hackathon-technica2025-uiuxdesign-activity-7395969106136518656-geHj"
                />

                <ProjectCard
                    tag="RESEARCH"
                    title="Serverless Edge Architecture"
                    subtitle="Published research on distributed systems for schools in developing regions."
                    problem="Centralized school systems are slow, bandwidth-heavy, and unreliable."
                    solution="Edge devices process local data + AWS Lambda handles global coordination."
                    impact="Lower latency, scalable infrastructure for developing regions."
                    learned="Scalability isn't just a technical challenge — it's an accessibility problem."
                />

                <ProjectCard
                    tag="COMMUNITY"
                    title="Winter Education Drive"
                    subtitle="Hands-on digital literacy workshops for underserved communities."
                    problem="Lack of digital literacy and foundational computing skills in underserved communities."
                    solution="Organized hands-on workshops and learning sessions."
                    impact="Led to receiving the Mrs. Mira Sumer Singh Memorial Medal for youth leadership."
                    learned="Technology matters most when it reaches people who weren't supposed to have access to it."
                />
            </div>
        </section>
    );
};

export default Projects;
