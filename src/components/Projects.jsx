import React from 'react';

const ProjectCard = ({ title, subtitle, problem, solution, features, impact, learned, link, videoEmbed, linkedinPost }) => (
    <div className="project-card">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-color)', marginBottom: '10px', textTransform: 'uppercase' }}>
            PROJECT //
        </div>
        <h3 className="project-title">{title}</h3>
        <div className="project-subtitle">{subtitle}</div>

        {videoEmbed && (
            <div className="project-video">
                <iframe
                    width="100%"
                    height="360"
                    src={videoEmbed}
                    title={`${title} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginTop: '20px' }}
                />
            </div>
        )}

        <div className="project-grid">
            <div>
                <strong>Problem</strong>
                <p>{problem}</p>
            </div>
            <div>
                <strong>Solution</strong>
                <p>{solution}</p>
            </div>
        </div>

        {features && (
            <div className="project-features">
                <strong>Key Features</strong>
                <ul>
                    {features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
            </div>
        )}

        {impact && (
            <div className="project-features">
                <strong>Impact</strong>
                <p>{impact}</p>
            </div>
        )}

        <div className="project-learned">
            <strong>What I learned:</strong> {learned}
        </div>

        {linkedinPost && (
            <div style={{ marginTop: '20px' }}>
                <a
                    href={linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-post-link"
                >
                    <span style={{ marginRight: '8px' }}>🔗</span> View LinkedIn Post →
                </a>
            </div>
        )}
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>

            <ProjectCard
                title="VitalViewAI — Technica 2025"
                subtitle="🏆 Best UI/UX Award Winner · AI Healthcare Tool"
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
                title="Research — Serverless Edge Architecture"
                subtitle="Published Research on Distributed Systems for Schools"
                problem="Centralized school systems are slow, bandwidth-heavy, and unreliable."
                solution="Edge devices process local data + AWS Lambda handles global coordination."
                impact="Lower latency, scalable infrastructure for developing regions."
                learned="Scalability isn’t just a technical challenge — it’s an accessibility problem."
            />

            <ProjectCard
                title="Winter Education Drive"
                subtitle="Community Impact Initiative"
                problem="Lack of digital literacy and foundational computing skills in underserved communities."
                solution="Organized hands-on workshops and learning sessions."
                impact="Led to receiving the Mrs. Mira Sumer Singh Memorial Medal for youth leadership."
                learned="Technology matters most when it reaches people who weren’t supposed to have access to it."
            />
        </section>
    );
};

export default Projects;
