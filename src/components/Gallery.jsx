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
        "/destination_wedding.png",
        "/luxury_catering_bg.png",
        "/private_luxury_events.png",
        "/corporate_catering.png",
        "/indian_buffet_luxury.png",
        "/gourmet_dessert_display.png",
        "/hero_catering_luxury_food.png",
        "/the_chaat_concept.png"
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
