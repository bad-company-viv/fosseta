import React from 'react';

const SocialProof = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
    };

    const logoStrip = {
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '60px 0',
    };

    const logoStyle = {
        fontFamily: '"Inter", sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        color: '#8C7B6E',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        transition: 'all 0.3s ease',
    };

    const testimonialGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '80px auto',
    };

    const testimonialCard = {
        padding: '50px 40px',
        backgroundColor: '#FDFAF5',
        borderRadius: '12px',
        textAlign: 'left',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    };

    const stars = {
        color: '#C9A84C',
        fontSize: '18px',
        marginBottom: '25px',
    };

    const testimonialText = {
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#4A3F35',
        fontStyle: 'italic',
        marginBottom: '30px',
    };

    const clientName = {
        fontWeight: 700,
        color: '#1A1208',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    };

    const awardsRibbon = {
        backgroundColor: '#F4ECD8',
        padding: '30px',
        borderRadius: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '40px',
        marginTop: '60px',
    };

    const awardItem = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#1A1208',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    return (
        <section id="clients" style={sectionStyle}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Trusted By The Best</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>When India's Biggest Brands Celebrate, <br /> They Call Fossetta</h2>

                <div style={logoStrip} className="fade-up">
                    <div style={logoStyle} className="client-logo">Toyota</div>
                    <div style={logoStyle} className="client-logo">BMW</div>
                    <div style={logoStyle} className="client-logo">Mercedes-Benz</div>
                    <div style={logoStyle} className="client-logo">Infosys</div>
                    <div style={logoStyle} className="client-logo">Citibank</div>
                </div>

                <div style={{ margin: '40px 0', fontSize: '14px', color: '#8C7B6E', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Officially catered at: <span style={{ color: '#C9A84C', fontWeight: 700 }}>Le Méridien Gurgaon | Umaid Lake Palace, Jaipur</span>
                </div>

                <div style={testimonialGrid}>
                    <div style={testimonialCard} className="fade-up">
                         <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="Toyota Rep" />
                        </div>
                        <div style={stars}>★★★★★</div>
                        <p style={testimonialText}>"Every dish was thoughtfully curated and the service was top-notch. A perfect experience for our corporate event."</p>
                        <div style={clientName}>— Toyota India</div>
                    </div>
                    <div style={{ ...testimonialCard, animationDelay: '0.1s' }} className="fade-up">
                         <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="MB India Rep" />
                        </div>
                        <div style={stars}>★★★★★</div>
                        <p style={testimonialText}>"Fossetta brought culinary elegance that perfectly complemented our luxury showcase. Guests were truly impressed."</p>
                        <div style={clientName}>— Mercedes-Benz India</div>
                    </div>
                    <div style={{ ...testimonialCard, animationDelay: '0.2s' }} className="fade-up">
                         <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <img src="https://images.unsplash.com/photo-1620067925093-801122da1688?q=80&w=1972&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="Celebrity Rep" />
                        </div>
                        <div style={stars}>★★★★★</div>
                        <p style={testimonialText}>"I've attended countless events, but the food catered by Fossetta was something else. Bursting with flavor. Presentation absolutely top-class."</p>
                        <div style={clientName}>— Jackie Shroff</div>
                    </div>
                </div>

                <div style={awardsRibbon} className="fade-up">
                    <span style={{ fontSize: '32px' }}>🏆</span>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '24px', fontWeight: 700, fontFamily: '"Playfair Display", serif' }}>75 Catering Awards & Counting</div>
                        <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
                             <div style={awardItem}>⭐ Best Wedding Caterer</div>
                             <div style={awardItem}>⭐ Best Corporate Experience</div>
                             <div style={awardItem}>⭐ Excellence in Gourmet Menu Design</div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .client-logo:hover { color: #C9A84C !important; transformScale: 1.1; }
                    @media (max-width: 600px) {
                        .logo-strip { gap: 30px !important; }
                        .awards-ribbon { flex-direction: column; text-align: center; }
                        .awards-ribbon > div { text-align: center !important; }
                        .awards-ribbon > div > div { flex-direction: column; gap: 10px; }
                    }
                `}
            </style>
        </section>
    );
};

export default SocialProof;
