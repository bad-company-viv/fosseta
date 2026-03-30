import React from 'react';

const ChaatSpotlight = () => {
    const sectionStyle = {
        padding: '120px 5%',
        background: 'linear-gradient(135deg, #F4ECD8 0%, #FDF6E3 100%)',
        overflow: 'hidden',
        position: 'relative',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '100px',
        alignItems: 'center',
    };

    const leftCol = {
        maxWidth: '550px',
    };

    const badgeStyle = {
        display: 'inline-block',
        backgroundColor: '#C9A84C',
        color: '#FFFFFF',
        padding: '6px 16px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '30px',
    };

    const headlineStyle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(40px, 5vw, 56px)',
        lineHeight: 1.1,
        marginBottom: '35px',
        color: '#1A1208',
    };

    const bodyStyle = {
        fontSize: '18px',
        color: '#4A3F35',
        lineHeight: 1.8,
        marginBottom: '40px',
    };

    const featureList = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '40px',
    };

    const featureItem = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px',
        color: '#1A1208',
        fontWeight: 600,
    };

    const iconBox = {
        fontSize: '24px',
    };

    const rightCol = {
        position: 'relative',
    };

    return (
        <section id="the-chaat-concept" style={sectionStyle}>
            <div style={containerStyle}>
                <div style={leftCol} className="fade-up">
                    <span style={badgeStyle}>FOSSETTA EXCLUSIVE</span>
                    <h2 style={headlineStyle}>The Chaat Concept — India's Most Memorable Event Experience</h2>
                    <p style={bodyStyle}>
                        Imagine your wedding guests gathering around a beautifully designed live chaat counter — the aroma of freshly fried puris, the sizzle of aloo tikki, the burst of tamarind chutney. Not from a buffet tray. Live. Fresh. Theatrical.
                        <br /><br />
                        This is The Chaat Concept by Fossetta — our signature live counter experience that has become the most talked-about element at every event we serve.
                    </p>
                    
                    <div style={featureList}>
                        <div style={featureItem}><span style={iconBox}>🌿</span> 100% fresh, made live</div>
                        <div style={featureItem}><span style={iconBox}>🎭</span> Fully themed design</div>
                        <div style={featureItem}><span style={iconBox}>📸</span> Instagrammable setup</div>
                        <div style={featureItem}><span style={iconBox}>🏆</span> Only at Fossetta</div>
                    </div>

                    <a href="#contact" className="cta-primary" style={{ backgroundColor: '#1A1208', color: '#FFFFFF' }}>
                        Book The Chaat Concept →
                    </a>
                </div>

                <div style={rightCol} className="fade-up">
                    <div className="placeholder-gradient" style={{ minHeight: '550px', transform: 'rotate(-2deg)', borderRadius: '24px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                         <img src="https://images.unsplash.com/photo-1601050690597-df056ec5605d?q=80&w=2070&auto=format&fit=crop" alt="Signature Chaat Concept" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                         <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'column' }}>
                            <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', color: '#FFFFFF' }}>[The Chaat Concept]</span>
                         </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 900px) {
                        section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default ChaatSpotlight;
