import React from 'react';

const Hero = () => {
  const heroStyle = {
    height: 'calc(100vh - 80px)', // Adjust for navbar
    minHeight: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5%',
    backgroundColor: '#FDFAF5',
    overflow: 'hidden',
  };

  const contentStyle = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
    gap: '80px',
    alignItems: 'center',
  };

  const leftColumn = {
    maxWidth: '650px',
  };

  const preHeadline = {
    fontSize: '14px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#C9A84C',
    fontWeight: 700,
    marginBottom: '25px',
    display: 'block',
  };

  const titleStyle = {
    fontSize: 'clamp(40px, 5vw, 68px)',
    lineHeight: 1.1,
    marginBottom: '30px',
    letterSpacing: '-1px',
    color: '#1A1208',
  };

  const subHeadline = {
    fontSize: '18px',
    color: '#4A3F35',
    marginBottom: '40px',
    lineHeight: 1.7,
    maxWidth: '550px',
  };

  const ctaContainer = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  const microCopy = {
    fontSize: '13px',
    color: '#8C7B6E',
    marginTop: '12px',
    display: 'block',
  };

  const socialProofWrap = {
    marginTop: '50px',
    padding: '20px 0',
    borderTop: '1px solid #EDE8DF',
  };

  const stars = {
    color: '#C9A84C',
    fontSize: '18px',
    marginRight: '12px',
  };

  const socialProofText = {
    fontSize: '14px',
    color: '#8C7B6E',
    fontStyle: 'italic',
  };

  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <div style={leftColumn} className="fade-up">
          <span style={preHeadline}>Gurgaon's Most Awarded Gourmet Caterers</span>
          <h1 style={titleStyle}>Your Event Deserves Food That People Talk About For Years</h1>
          <p style={subHeadline}>
            From intimate boardroom lunches to grand destination weddings — Fossetta crafts culinary experiences so extraordinary, they become the highlight of every event.
          </p>
          <div style={ctaContainer}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="#contact" className="cta-primary">
                Book a Free Food Trial <span style={{ fontSize: '20px', lineHeight: 1 }}>→</span>
              </a>
              <span style={microCopy}>No commitment. Just extraordinary food.</span>
            </div>
            <a href="#services" className="cta-outline" style={{ marginTop: '-21px' }}>
              Plan My Event
            </a>
          </div>
          <div style={socialProofWrap}>
            <span style={stars}>★★★★★</span>
            <span style={socialProofText}>"Rated #1 Caterer in Gurgaon by 2,500+ happy clients"</span>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.2s', position: 'relative' }}>
          <div className="placeholder-gradient" style={{ minHeight: '600px', transform: 'rotate(2deg)', borderRadius: '24px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }}>
             <img src="/hero_catering_luxury_food.png" alt="Luxury Food Photography" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }} />
          </div>
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'center' }}>
             <div style={{ fontSize: '32px', fontWeight: 700, color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}>40+</div>
             <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8C7B6E' }}>Years Legacy</div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 991px) {
            .landing-page { padding-top: 0; }
            section { height: auto !important; padding: 60px 5% !important; }
            section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
            .cta-container { flex-direction: column !important; align-items: start !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
