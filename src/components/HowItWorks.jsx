import React from 'react';

const HowItWorks = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#FDFAF5',
        textAlign: 'center',
    };

    const timelineWrap = {
        maxWidth: '1200px',
        margin: '80px auto 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        position: 'relative',
    };

    const stepCard = {
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
    };

    const numberBox = {
        width: '50px',
        height: '50px',
        backgroundColor: '#C9A84C',
        color: '#FFFFFF',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 700,
        margin: '0 auto 25px',
        boxShadow: '0 10px 20px rgba(201, 168, 76, 0.2)',
    };

    const stepTitle = {
        fontSize: '20px',
        fontWeight: 700,
        marginBottom: '15px',
        color: '#1A1208',
    };

    const stepDesc = {
        fontSize: '15px',
        color: '#8C7B6E',
        lineHeight: 1.6,
        padding: '0 15px',
    };

    return (
        <section id="how-it-works" style={sectionStyle}>
            <div className="container">
                <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Seamless Preparation</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>Getting Started Takes Less Than 2 Minutes</h2>
                <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '18px', color: '#8C7B6E' }}>
                  We handle everything after that.
                </p>

                <div style={timelineWrap}>
                    <div style={stepCard} className="fade-up">
                        <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '25px' }}>
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Consultation" />
                        </div>
                        <div style={numberBox}>1</div>
                        <h3 style={stepTitle}>Tell Us About Your Event</h3>
                        <p style={stepDesc}>Fill our quick form or call us — it takes less than 90 seconds to start.</p>
                    </div>
                    <div style={{ ...stepCard, animationDelay: '0.1s' }} className="fade-up">
                        <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '25px' }}>
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Chef Team" />
                        </div>
                        <div style={numberBox}>2</div>
                        <h3 style={stepTitle}>We Design Your Custom Menu</h3>
                        <p style={stepDesc}>Our award-winning chefs create a bespoke menu tailored to your theme and unique preferences.</p>
                    </div>
                    <div style={{ ...stepCard, animationDelay: '0.2s' }} className="fade-up">
                        <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '25px' }}>
                            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Tasting" />
                        </div>
                        <div style={numberBox}>3</div>
                        <h3 style={stepTitle}>Taste Before You Commit</h3>
                        <p style={stepDesc}>Experience the magic. Book a complimentary food trial with zero obligation — just great food.</p>
                    </div>
                    <div style={{ ...stepCard, animationDelay: '0.3s' }} className="fade-up">
                        <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '25px' }}>
                            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Event Execution" />
                        </div>
                        <div style={numberBox}>4</div>
                        <h3 style={stepTitle}>A Flawless Celebration</h3>
                        <p style={stepDesc}>We handle everything — from setups to cleanup — while you celebrate with your guests.</p>
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <a href="#contact" className="cta-primary">
                        Start Planning My Event <span style={{ fontSize: '20px', lineHeight: 1 }}>→</span>
                    </a>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 900px) {
                        .timeline-line { display: none; }
                        timeline-wrap { grid-template-columns: 1fr !important; gap: 60px !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default HowItWorks;
