import React from 'react';

const Features = () => {
    return (
        <section style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                    gap: '4rem' 
                }}>
                    <div className="glass-panel" style={{ padding: '3rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Autonomous AI Marketer</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['24/7 performance audits', 'AI creative generation', 'Suggests tweaks to improve ROAS'].map((item, i) => (
                                <li key={i} style={{ 
                                    marginBottom: '1rem', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '1rem',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ color: '#6366f1' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '3rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>ChatGPT for Paid Ads</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "“How can I improve ROAS?”",
                                "“What are my best-performing assets?”",
                                "“Which campaigns are wasting spend?”"
                            ].map((msg, i) => (
                                <div key={i} style={{ 
                                    background: 'rgba(255,255,255,0.05)', 
                                    padding: '1rem 1.5rem', 
                                    borderRadius: '12px',
                                    borderTopLeftRadius: '2px',
                                    marginLeft: i % 2 === 0 ? '0' : '2rem',
                                    marginRight: i % 2 === 0 ? '2rem' : '0'
                                }}>
                                    {msg}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
