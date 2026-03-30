import React from 'react';

const LeadForm = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#FDFAF5',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '80px',
        alignItems: 'start',
    };

    const formWarp = {
        backgroundColor: '#FFFFFF',
        padding: '60px',
        borderRadius: '16px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
        textAlign: 'left',
    };

    const inputGroup = {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    };

    const inputStyle = {
        padding: '15px 18px',
        border: '1px solid #EDE8DF',
        borderRadius: '4px',
        fontSize: '15px',
        fontFamily: '"Inter", sans-serif',
        outline: 'none',
        transition: 'all 0.3s ease',
    };

    const labelStyle = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#1A1208',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    };

    const gridInputs = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
    };

    const selectStyle = {
        padding: '15px 18px',
        border: '1px solid #EDE8DF',
        borderRadius: '4px',
        fontSize: '15px',
        appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 15px center',
        backgroundSize: '15px',
    };

    const trustPanel = {
        textAlign: 'left',
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div style={containerStyle}>
                <div style={formWarp} className="fade-up">
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', marginBottom: '10px' }}>Plan Your Event With Fossetta</h2>
                    <p style={{ color: '#8C7B6E', marginBottom: '40px' }}>Fill in the details and we'll get back within 2 hours.</p>

                    <form>
                        <div style={inputGroup}>
                            <label style={labelStyle}>Your Full Name</label>
                            <input type="text" placeholder="e.g. Rahul Sharma" style={inputStyle} required />
                        </div>
                        
                        <div style={gridInputs}>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Phone Number</label>
                                <input type="tel" placeholder="+91 00000 00000" style={inputStyle} required />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Email Address</label>
                                <input type="email" placeholder="rahul@company.com" style={inputStyle} required />
                            </div>
                        </div>

                        <div style={gridInputs}>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Event Type</label>
                                <select style={selectStyle}>
                                    <option>Wedding</option>
                                    <option>Corporate Event</option>
                                    <option>Private Party</option>
                                    <option>Celebrity Event</option>
                                    <option>Sports/Family Day</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Expected Guest Count</label>
                                <select style={selectStyle}>
                                    <option>Under 50</option>
                                    <option>50–150</option>
                                    <option>150–500</option>
                                    <option>500–1000</option>
                                    <option>1000+</option>
                                </select>
                            </div>
                        </div>

                        <div style={inputGroup}>
                            <label style={labelStyle}>Venue / City</label>
                            <input type="text" placeholder="e.g. Le Meridien, Gurgaon" style={inputStyle} />
                        </div>

                        <div style={inputGroup}>
                            <label style={labelStyle}>Tell us about your event (optional)</label>
                            <textarea placeholder="Any special requests or details..." style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}></textarea>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0 30px' }}>
                            <input type="checkbox" id="chaat" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                            <label htmlFor="chaat" style={{ fontSize: '14px', color: '#4A3F35', cursor: 'pointer' }}>Add The Chaat Concept? (Recommended)</label>
                        </div>

                        <button className="cta-primary" style={{ width: '100%', border: 'none', color: '#FFFFFF', cursor: 'pointer', justifyCenter: 'center', padding: '20px' }}>
                            Get My Free Quote & Food Trial Slot
                        </button>
                    </form>
                </div>

                <div style={{ ...trustPanel, animationDelay: '0.2s' }} className="fade-up">
                    <div style={{ backgroundColor: '#1A1208', color: '#FFFFFF', padding: '50px', borderRadius: '16px' }}>
                        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', marginBottom: '20px' }}>Why Book Today?</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <li style={{ display: 'flex', gap: '15px' }}>
                                <span style={{ fontSize: '24px' }}>⚡</span>
                                <div>
                                    <h4 style={{ fontSize: '16px', color: '#C9A84C' }}>Priority Response</h4>
                                    <p style={{ opacity: 0.8, fontSize: '14px' }}>Our event coordinators respond within 90 minutes during business hours.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '15px' }}>
                                <span style={{ fontSize: '24px' }}>📅</span>
                                <div>
                                    <h4 style={{ fontSize: '16px', color: '#C9A84C' }}>Limited Trial Slots</h4>
                                    <p style={{ opacity: 0.8, fontSize: '14px' }}>We only host 5 food trials per week. Secure your date now.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '15px' }}>
                                <span style={{ fontSize: '24px' }}>💎</span>
                                <div>
                                    <h4 style={{ fontSize: '16px', color: '#C9A84C' }}>No Hidden Costs</h4>
                                    <p style={{ opacity: 0.8, fontSize: '14px' }}>Transparent pricing, gourmet ingredients, professional service.</p>
                                </div>
                            </li>
                        </ul>
                        <div style={{ marginTop: '40px', borderRadius: '12px', overflow: 'hidden', height: '240px' }}>
                            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Catering Excellence" />
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    input:focus, select:focus, textarea:focus { border-color: #C9A84C !important; box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.1); }
                    @media (max-width: 900px) {
                        section > div { grid-template-columns: 1fr !important; }
                        form-warp { padding: 30px !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default LeadForm;
