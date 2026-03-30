import React from 'react';

const CuisineShowcase = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#1A1208',
        color: '#FFFFFF',
        textAlign: 'center',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1400px',
        margin: '60px auto 0',
    };

    const cuisineCard = {
        position: 'relative',
        height: '450px',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '40px',
        textAlign: 'left',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const overlay = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%)',
        zIndex: 1,
    };

    const titleStyle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: '28px',
        color: '#FFFFFF',
        marginBottom: '10px',
        position: 'relative',
        zIndex: 2,
    };

    const descStyle = {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.7)',
        position: 'relative',
        zIndex: 2,
    };

    const cuisines = [
        {
            name: "Indian Feast",
            items: "Dal Makhani, Dum Biryani, Live Tandoor",
            img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2072&auto=format&fit=crop",
            icon: "🥘"
        },
        {
            name: "Pan-Asian Fusion",
            items: "Dim Sum, Thai Curries, Japanese stations",
            img: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?q=80&w=1984&auto=format&fit=crop",
            icon: "🥢"
        },
        {
            name: "The Chaat Concept",
            items: "Pani Puri, Dahi Bhalla, Aloo Tikki",
            img: "https://images.unsplash.com/photo-1601050690597-df056ec5605d?q=80&w=2070&auto=format&fit=crop",
            icon: "🍲"
        },
        {
            name: "Gourmet Continental",
            items: "Risotto stations, carved meats, artisan desserts",
            img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
            icon: "🥗"
        }
    ];

    return (
        <section style={sectionStyle}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>A World of Flavours</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>Every Dish is a Masterpiece</h2>
                <div style={gridStyle}>
                    {cuisines.map((cuisine, i) => (
                        <div key={cuisine.name} style={{ ...cuisineCard, backgroundImage: `url(${cuisine.img})`, animationDelay: `${i * 0.1}s` }} className="fade-up">
                            <div style={overlay}></div>
                            <span style={{ fontSize: '40px', position: 'relative', zIndex: 2, marginBottom: '20px' }}>{cuisine.icon}</span>
                            <h3 style={titleStyle}>{cuisine.name}</h3>
                            <p style={descStyle}>{cuisine.items}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '60px' }}>
                    <a href="https://fossetta.in/pdf/menu.pdf" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                        Download Full Menu PDF →
                    </a>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 600px) {
                        .cuisine-grid { grid-template-columns: 1fr !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default CuisineShowcase;
