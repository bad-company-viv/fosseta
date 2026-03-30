import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1A1208', color: '#8C7B6E', padding: '100px 5% 60px', fontSize: '14px', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
                <div className="fade-up">
                    <h3 style={{ color: '#FFFFFF', marginBottom: '25px', fontFamily: '"Playfair Display", serif', fontSize: '24px' }}>Fossetta<span style={{ color: '#C9A84C' }}>.</span></h3>
                    <p style={{ lineHeight: 1.8 }}>Gurgaon's most awarded gourmet caterers. <br /> Where taste meets presentation.</p>
                </div>
                
                <div className="fade-up" style={{ animationDelay: '0.1s' }}>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}>Quick Navigation</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                        <li><a href="#services" className="footer-link">Our Services</a></li>
                        <li><a href="#why-fossetta" className="footer-link">Why Fossetta</a></li>
                        <li><a href="#clients" className="footer-link">Our Clients</a></li>
                        <li><a href="#contact" className="footer-link">Book Food Trial</a></li>
                    </ul>
                </div>

                <div className="fade-up" style={{ animationDelay: '0.2s' }}>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}>Contact Details</h4>
                    <p style={{ lineHeight: 2 }}>
                        42 Udyog Vihar 6, Sector 37,<br />
                        Gurgaon 122001<br />
                        <span style={{ color: '#FFFFFF' }}>+91 9811747715 | +91 9999850265</span><br />
                        info@fossetta.in
                    </p>
                </div>

                <div className="fade-up" style={{ animationDelay: '0.3s' }}>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}>Operating Hours</h4>
                    <p style={{ lineHeight: 2 }}>
                        Mon-Sat: 10:00 AM — 08:00 PM<br />
                        Sun: Closed (Event-specific appointments)
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', marginBottom: '30px' }}>&copy; {new Date().getFullYear()} Fossetta Gourmet Catering. All rights reserved.</p>
                
                {/* BOTTOM SITE CREDITS PILL (AS REQUESTED) */}
                <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#000000', padding: '10px 25px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', gap: '20px' }} className="fade-up">
                    <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/sitecredits/fabulous.png" alt="Fabulous Media" style={{ height: '24px', objectFit: 'contain' }} />
                    </a>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                    <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/sitecredits/gocomercially.svg" alt="Go Commercially" style={{ height: '20px', objectFit: 'contain' }} />
                    </a>
                </div>
            </div>

            <style>
                {`
                    .footer-link { color: #8C7B6E; text-decoration: none; transition: 0.3s; }
                    .footer-link:hover { color: #C9A84C; }
                    @media (max-width: 600px) {
                        footer { padding: 60px 5% !important; }
                        .container { gap: 40px !important; }
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
