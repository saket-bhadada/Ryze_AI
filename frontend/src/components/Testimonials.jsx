import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mathilde Biggs",
            role: "CEO MotifDigital Agence",
            stat: "+63%",
            statDesc: "better ROAS",
            text: "Got the whole team up and running in a day. Super easy to pick up."
        },
        {
            name: "Daniel Amezquita",
            role: "Global Ads Strategy - Glava",
            stat: "2x",
            statDesc: "CTR Doubled",
            text: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data."
        },
        {
            name: "Daniel Roser",
            role: "Growth Lead",
            stat: "45%",
            statDesc: "ROAS Increase",
            text: "Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget."
        }
    ];

    return (
        <section style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Wall of <span className="text-gradient">Love</span>
                </h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ 
                                position: 'absolute', 
                                top: '-20px', 
                                right: '-20px', 
                                width: '100px', 
                                height: '100px', 
                                background: 'var(--primary-gradient)', 
                                opacity: '0.1', 
                                borderRadius: '50%', 
                                filter: 'blur(20px)' 
                            }}></div>
                            
                            <h3 className="text-gradient" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem' }}>{item.stat}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {item.statDesc}
                            </p>
                            
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>"{item.text}"</p>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--glass-highlight)', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ fontWeight: '600' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
