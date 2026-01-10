import React from 'react';

const Hero = () => {
    return (
        <section style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative',
            paddingTop: '80px',
            textAlign: 'center'
        }}>
            <div className="glow-bg"></div>
            <div className="container">
                <span style={{ 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    color: '#f4f4f6ff', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem', 
                    marginBottom: '2rem', 
                    display: 'inline-block',
                    border: '1px solid rgba(21, 24, 213, 0.2)'
                }}>
                    ✨ The future of ad management
                </span>
                
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
                    lineHeight: '1.1', 
                    marginBottom: '1.5rem', 
                    fontWeight: '800',
                    letterSpacing: '-2px' 
                }}>
                    Let AI manage<br />
                    <span className="text-gradient">your ads</span>
                </h1>
                
                <p style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--text-secondary)', 
                    maxWidth: '600px', 
                    margin: '0 auto 3rem' 
                }}>
                    AI copilot for performance marketers. Ryze AI manages and optimizes your ads across ChatGPT, Google, and Meta autonomously.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start Free Trial</button>
                    <button style={{ 
                        background: 'transparent', 
                        border: '1px solid var(--glass-border)', 
                        color: 'white', 
                        padding: '1rem 2rem', 
                        borderRadius: '9999px', 
                        cursor: 'pointer',
                        fontSize: '1.1rem'
                    }}>View Demo</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
