import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-grid">
                <div>
                    <h2>Let's Connect</h2>
                    <p className="footer-desc">
                        I'm always open to interesting conversations, collaborations, or just talking about cool tech.
                    </p>
                    <div className="footer-links">
                        <a href="mailto:avhaan26@terpmail.umd.edu" className="footer-link">
                            ✉ Email
                        </a>
                        <a href="https://www.linkedin.com/in/avhaan-narang/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            💼 LinkedIn
                        </a>
                        <a href="https://github.com/avhaan" target="_blank" rel="noopener noreferrer" className="footer-link">
                            ⌨ GitHub
                        </a>
                    </div>
                </div>

                <div className="footer-quote">
                    "If software doesn't make life clearer, it's just noise."
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2025 Avhaan Narang</span>
                <span>Built with React · Startup Shell @ UMD</span>
            </div>
        </footer>
    );
};

export default Contact;
