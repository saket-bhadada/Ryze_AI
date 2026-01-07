import React from 'react';

const Footer = () => {
    return (
        <footer style={{ 
            borderTop: '1px solid var(--glass-border)', 
            padding: '4rem 0',
            background: 'linear-gradient(to top, #000000, transparent)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Ryze<span className="text-gradient">.ai</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                        Empowering performance marketers with autonomous AI agents.
                    </p>
                </div>
                
                <div style={{ display: 'flex', gap: '4rem' }}>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Features</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Pricing</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Case Studies</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Blog</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                © 2024 Ryze AI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
