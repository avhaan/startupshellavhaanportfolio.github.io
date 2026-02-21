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
                    title="Bringing Serverless to the Edge"
                    subtitle="Challenges and Opportunities in School Administration"
                    problem="I have conducted research independently from home alongside the help of a research mentor for approximately two months, furthering my interest in computer science."
                    solution="My paper explores the integration of serverless and edge computing, highlighting the benefits of reduced latency, improved scalability, and cost-efficiency. It proposes the EduEdge framework, enabling real-time communication of student results via IoT devices."
                    impact="The study addresses technical challenges, such as security and cold start optimization, and offers practical insights into leveraging serverless edge computing for educational applications, paving the way for enhanced parental engagement and operational efficiency. It also outlines future directions and best practices for robust implementations."
                    learned="Independent research taught me that serverless at the edge is more than just a tech stack—it's about building robust, decentralized systems for real-world impact."
                />

                <ProjectCard
                    tag="COMMUNITY"
                    title="Winter Education Drive"
                    subtitle="4-week teaching initiative in a remote slum setting"
                    problem="Organised a winter education drive during the winter for 4 weeks. During the period, we went to a remote slum setting and taught kids the basics of subjects such as maths, english, hindi on a daily basis."
                    solution="These classes helped the students to succeed in scholarship exams and ultimately join schools, making a meaningful difference in their lives."
                    impact="We also hosted a christmas day event where the children engaged in fun activities and were also given chocolates as a part of the celebration."
                    learned="Meaningful change starts by going where the need is greatest and committing to consistent effort over time."
                />
            </div>
        </section>
    );
};

export default Projects;
