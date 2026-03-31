import React from 'react';

const PainPoints = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#1A1208',
        backgroundImage: 'linear-gradient(rgba(26, 18, 8, 0.95), rgba(26, 18, 8, 0.95)), url("/luxury_catering_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const headlineStyle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(32px, 4vw, 48px)',
        marginBottom: '60px',
        color: '#FFFFFF',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        marginBottom: '80px',
    };

    const cardStyle = {
        backgroundColor: 'rgba(30, 22, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '50px 40px',
        textAlign: 'left',
        borderLeft: '4px solid #C9A84C',
        borderRadius: '8px',
        transition: 'all 0.4s ease',
    };

    const cardIcon = {
        fontSize: '24px',
        marginBottom: '20px',
        display: 'block',
    };

    const cardTitle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: '24px',
        marginBottom: '15px',
        color: '#FFFFFF',
    };

    const cardText = {
        fontSize: '16px',
        lineHeight: '1.7',
        color: 'rgba(255, 255, 255, 0.7)',
    };

    const dividerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        margin: '60px 0',
    };

    const lineStyle = {
        height: '1px',
        flex: 1,
        backgroundColor: 'rgba(201, 168, 76, 0.3)',
    };

    const solutionBlockStyle = {
        marginTop: '80px',
    };

    const solutionGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        textAlign: 'left',
        marginTop: '40px',
    };

    const checkmarkItem = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '15px',
    };

    const checkStyle = {
        color: '#C9A84C',
        fontWeight: 'bold',
    };

    return (
        <section id="why-fossetta" style={sectionStyle}>
            <div style={containerStyle} className="container">
                <h2 style={headlineStyle} className="fade-up">
                    Planning an Event? You've Probably <br /> Already Worried About This.
                </h2>

                <div style={gridStyle}>
                    <div style={cardStyle} className="fade-up">
                        <span style={cardIcon}>⚠️</span>
                        <h3 style={cardTitle}>"The Food Was Disappointing"</h3>
                        <p style={cardText}>
                            You've been to events where the catering was an afterthought. Cold food, generic menus, rushed service. Your guests remember it — and not fondly.
                        </p>
                    </div>
                    <div style={{ ...cardStyle, animationDelay: '0.1s' }} className="fade-up">
                        <span style={cardIcon}>⚠️</span>
                        <h3 style={cardTitle}>"The Caterer Vanished After the Booking"</h3>
                        <p style={cardText}>
                            Big promises at the sales meeting. Radio silence after the deposit. On the day, chaos. Sound familiar?
                        </p>
                    </div>
                    <div style={{ ...cardStyle, animationDelay: '0.2s' }} className="fade-up">
                        <span style={cardIcon}>⚠️</span>
                        <h3 style={cardTitle}>"The Presentation Didn't Match the Occasion"</h3>
                        <p style={cardText}>
                            Your event was a ₹50 lakh production. The catering looked like a school function. A mismatch that haunts photos forever.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle}>
                    <div style={lineStyle}></div>
                    <span style={{ color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '13px' }}>There is a better way.</span>
                    <div style={lineStyle}></div>
                </div>

                <div style={solutionBlockStyle}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '32px', marginBottom: '20px' }}>
                        Fossetta Was Built to Solve Exactly This.
                    </h3>
                    <div style={solutionGrid}>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> Custom menus designed around your event theme</div>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> End-to-end execution — you relax, we deliver</div>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> Gourmet presentation that photographs beautifully</div>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> Same team that caters for BMW & Jackie Shroff</div>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> A dedicated event food manager assigned to you</div>
                        <div style={checkmarkItem}><span style={checkStyle}>✓</span> Live counters, themed setups, and culinary theatre</div>
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <a href="#services" className="cta-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                            See How We Do It →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
