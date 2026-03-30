import React from 'react';

const Team = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#1A1208',
        color: '#FFFFFF',
        textAlign: 'center',
    };

    const teamGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '60px auto 0',
    };

    const teamCard = {
        textAlign: 'center',
    };

    const imageBox = {
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '20px',
        border: '1px solid rgba(201, 168, 76, 0.2)',
    };

    const chefName = {
        fontFamily: '"Playfair Display", serif',
        fontSize: '24px',
        marginBottom: '5px',
    };

    const chefRole = {
        color: '#C9A84C',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 600,
    };

    const chefs = [
        {
            name: "Chef Vikram Sethi",
            role: "Executive Head Chef",
            img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Chef Anjali Rao",
            role: "Pastry & Dessert Specialist",
            img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop"
        },
        {
            name: "The Chaat Masters",
            role: "Signature Live Counter Team",
            img: "https://images.unsplash.com/photo-1606131731446-45685ba44d8b?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <section style={sectionStyle}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Behind the Flavour</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>Meet Our Culinary Masters</h2>
                <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
                    A dedicated team of 400+ professionals led by award-winning chefs who bring 40 years of legacy to your table.
                </p>

                <div style={teamGrid}>
                    {chefs.map((chef, i) => (
                        <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div style={imageBox}>
                                <img src={chef.img} alt={chef.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={chefName}>{chef.name}</h3>
                            <span style={chefRole}>{chef.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
