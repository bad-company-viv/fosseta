import React from 'react';

const Gallery = () => {
    const sectionStyle = {
        padding: '120px 5%',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 300px)',
        gap: '15px',
        maxWidth: '1400px',
        margin: '60px auto 0',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
    };

    const images = [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Wedding table
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", // Event decor
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop", // Luxury catering
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", // Food display
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop", // Gourmet plate
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", // High-end buffet
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // Chef plating
        "https://images.unsplash.com/photo-1530101978243-209a8a5f6da9?q=80&w=2070&auto=format&fit=crop"  // Party vibes
    ];

    return (
        <section style={sectionStyle}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Visual Excellence</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>Moments Captured, <br /> Flavours Remembered</h2>
                
                <div style={gridStyle}>
                    {images.map((img, i) => (
                        <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.05}s`, overflow: 'hidden', borderRadius: '8px' }}>
                             <img src={img} alt={`Gallery ${i}`} style={imageStyle} className="gallery-img" />
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    .gallery-img:hover { transform: scale(1.1); filter: brightness(0.8); }
                    @media (max-width: 900px) {
                        section > div > div { grid-template-columns: repeat(2, 1fr) !important; grid-template-rows: auto !important; }
                        section > div > div > div { height: 200px !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default Gallery;
