import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        padding: scrolled ? '15px 5%' : '25px 5%',
        backgroundColor: scrolled ? 'rgba(26, 18, 8, 0.98)' : 'rgba(26, 18, 8, 0.9)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.3)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    };

    const logoStyle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: '28px',
        fontWeight: 700,
        color: '#1A1208',
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center',
    };

    const linkContainerStyle = {
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
    };

    const linkStyle = {
        fontSize: '14px',
        fontWeight: 600,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        opacity: 0.85,
        transition: 'opacity 0.3s ease',
    };

    const ctaStyle = {
        backgroundColor: '#C9A84C',
        color: '#FFFFFF',
        padding: '10px 24px',
        borderRadius: '4px',
        fontSize: '13px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
    };

    return (
        <nav style={navbarStyle}>
            <div style={logoStyle}>
                <img src="/logo.png" alt="Fossetta Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <div style={linkContainerStyle} className="nav-links">
                <a href="#services" style={linkStyle} className="nav-link">Our Services</a>
                <a href="#why-fossetta" style={linkStyle} className="nav-link">Why Fossetta</a>
                <a href="#clients" style={linkStyle} className="nav-link">Clients</a>
                <a href="#contact" style={ctaStyle}>Book Food Trial</a>
            </div>
            <style>
                {`
                    .nav-link:hover {
                        opacity: 1 !important;
                        color: #C9A84C !important;
                    }
                    @media (max-width: 768px) {
                        .nav-links {
                            display: none !important;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
