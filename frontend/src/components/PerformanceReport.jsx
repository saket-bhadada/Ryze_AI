import React from 'react';

const PerformanceReport = () => {
    return (
        <section style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Deep Dive <span className="text-gradient">Analysis</span>
                </h2>

                <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ 
                        borderBottom: '1px solid var(--glass-border)', 
                        paddingBottom: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Creative Performance Insights</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Top Spending Static Ad Performance Review</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                            <div style={{ fontSize: '0.875rem', color: '#818cf8', marginBottom: '0.5rem' }}>Stellar Media</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>2.75x</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>ROAS @ $0.58 CPC</div>
                        </div>
                        <div style={{ background: 'rgba(45, 212, 191, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                            <div style={{ fontSize: '0.875rem', color: '#2dd4bf', marginBottom: '0.5rem' }}>Oceanic Bliss</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>4.35x</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Top Performing Campaign</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div>
                            <h4 style={{ marginBottom: '1rem', color: '#9ca3af' }}>VISUAL ELEMENTS</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                                <li style={{ marginBottom: '0.75rem' }}>• Testimonial Format with UGC style</li>
                                <li style={{ marginBottom: '0.75rem' }}>• Clear Product Placement</li>
                                <li style={{ marginBottom: '0.75rem' }}>• Text overlay with emojis</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', color: '#9ca3af' }}>COPY BREAKDOWN</h4>
                            <div style={{ 
                                background: 'rgba(0,0,0,0.3)', 
                                padding: '1rem', 
                                borderRadius: '8px',
                                fontStyle: 'italic',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)'
                            }}>
                                "Do you want to smell like everyone else, or do you want to be awesome?"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceReport;
