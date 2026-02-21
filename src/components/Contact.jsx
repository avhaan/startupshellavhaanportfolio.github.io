import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Connect</h2>
                    <div className="footer-links">
                        <a href="mailto:avhaan26@terpmail.umd.edu" className="footer-link">Email</a>
                        <a href="https://www.linkedin.com/in/avhaan-narang/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                        <a href="https://github.com/avhaan" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                    </div>
                </div>

                <div className="footer-note">
                    “If software doesn’t make life clearer, it’s just noise.”
                </div>
            </div>
        </footer>
    );
};

export default Contact;
