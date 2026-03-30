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
        backgroundColor: scrolled ? '#FDFAF5' : 'transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
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

    const dotStyle = {
        color: '#C9A84C',
        marginLeft: '2px',
    };

    const linkContainerStyle = {
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
    };

    const linkStyle = {
        fontSize: '14px',
        fontWeight: 500,
        color: '#1A1208',
        textTransform: 'uppercase',
        letterSpacing: '1px',
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
                Fossetta<span style={dotStyle}>.</span>
            </div>
            <div style={linkContainerStyle} className="nav-links">
                <a href="#services" style={linkStyle}>Our Services</a>
                <a href="#why-fossetta" style={linkStyle}>Why Fossetta</a>
                <a href="#clients" style={linkStyle}>Clients</a>
                <a href="#contact" style={ctaStyle}>Book Food Trial</a>
            </div>
            <style>
                {`
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
