import React from 'react';

const IrresistibleCTA = () => {
    const sectionStyle = {
        padding: '160px 5%',
        background: 'linear-gradient(135deg, #C9A84C 10%, #A8853A 90%)', // Deep luxury gold
        textAlign: 'center',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
    };

    const textureOverlay = {
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
        pointerEvents: 'none',
    };

    const preHeadline = {
        fontSize: '14px',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        fontWeight: 800,
        marginBottom: '25px',
        display: 'block',
        color: '#1A1208',
        opacity: 0.6,
    };

    const headline = {
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(44px, 8vw, 84px)',
        marginBottom: '35px',
        lineHeight: 1,
        color: '#1A1208',
        letterSpacing: '-2px',
    };

    const subtext = {
        fontSize: 'clamp(18px, 2vw, 24px)',
        maxWidth: '850px',
        margin: '0 auto 60px',
        lineHeight: 1.6,
        color: '#1A1208',
        fontWeight: 500,
        opacity: 0.8,
    };

    const giantButton = {
        backgroundColor: '#1A1208',
        color: '#C9A84C',
        padding: '28px 70px',
        borderRadius: '100px', // More modern pill shape
        fontSize: '22px',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '3px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '20px',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        border: '1px solid rgba(201, 168, 76, 0.3)',
    };

    const badgesContainer = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '70px',
        flexWrap: 'wrap',
    };

    const badgeItem = {
        backgroundColor: 'rgba(26, 18, 8, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(26, 18, 8, 0.1)',
        padding: '12px 28px',
        borderRadius: '50px',
        fontSize: '15px',
        fontWeight: 600,
        color: '#1A1208',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    return (
        <section style={sectionStyle}>
            <div style={textureOverlay}></div>
            
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <span style={{ ...preHeadline, animationDelay: '0.1s' }} className="fade-up">ZERO RISK OFFER</span>
                <h2 style={{ ...headline, animationDelay: '0.2s' }} className="fade-up">Let the Food <br />Speak for Itself.</h2>
                <p style={{ ...subtext, animationDelay: '0.3s' }} className="fade-up">
                    Not convinced yet? Don't be. Book a complimentary Fossetta Food Trial — taste our cuisine firsthand before you commit to a single rupee.
                </p>

                <div className="fade-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#contact" className="giant-btn" style={giantButton}>
                        Book My Free Food Trial <span style={{ fontSize: '32px', lineHeight: 1 }}>→</span>
                    </a>
                </div>

                <div style={badgesContainer} className="fade-up" style={{ animationDelay: '0.5s' }}>
                    <div style={badgeItem}><span>🍽️</span> Custom tasting menu</div>
                    <div style={badgeItem}><span>👨‍🍳</span> Chef consultation</div>
                    <div style={badgeItem}><span>📋</span> Free event proposal</div>
                </div>

                <p style={{ marginTop: '50px', fontSize: '14px', color: '#1A1208', opacity: 0.6, fontWeight: 600, animationDelay: '0.6s' }} className="fade-up">
                    Limited slots available each week  •  No payment required  •  We come to you
                </p>
            </div>
            
            <style>
                {`
                    .giant-btn:hover { 
                        transform: translateY(-8px) scale(1.02); 
                        box-shadow: 0 40px 80px rgba(0,0,0,0.5) !important; 
                        background-color: #000 !important;
                    }
                    .giant-btn {
                        animation: pulse 2s infinite ease-in-out;
                    }
                    @keyframes pulse {
                        0% { box-shadow: 0 25px 60px rgba(0,0,0,0.3); }
                        50% { box-shadow: 0 35px 80px rgba(0,0,0,0.5); }
                        100% { box-shadow: 0 25px 60px rgba(0,0,0,0.3); }
                    }
                    @media (max-width: 768px) {
                        section { padding: 100px 5% !important; }
                        .giant-btn { padding: 20px 40px !important; fontSize: 16px !important; }
                        .badges-container { flex-direction: column !important; align-items: center !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default IrresistibleCTA;
