import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const targetValue = parseInt(value, 10);
    const isPlus = value.toString().includes('+');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, targetValue, duration]);

    return (
        <span ref={ref}>
            {count}{isPlus ? '+' : ''}
        </span>
    );
};

const Stats = () => {
    const sectionStyle = {
        padding: '100px 5%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/stats_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
    };

    const statItem = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
    };

    const numberStyle = {
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(48px, 6vw, 72px)',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: 1,
    };

    const labelStyle = {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        color: '#C9A84C',
        fontWeight: 700,
        border: '1px solid rgba(201, 168, 76, 0.3)',
        padding: '8px 20px',
        borderRadius: '40px',
        backgroundColor: 'rgba(26, 18, 8, 0.5)',
        backdropFilter: 'blur(5px)',
    };

    const stats = [
        { value: "2500+", label: "Happy Customers" },
        { value: "1000+", label: "Signature Dishes" },
        { value: "75+", label: "Catering Awards" },
        { value: "400+", label: "Team Members" }
    ];

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                {stats.map((stat, i) => (
                    <div key={i} className="fade-up" style={{ ...statItem, animationDelay: `${i * 0.1}s` }}>
                        <span style={numberStyle}>
                            <CountUp value={stat.value} />
                        </span>
                        <motion.span 
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(201, 168, 76, 0.8)', color: '#FFFFFF' }}
                            transition={{ duration: 0.3 }}
                            style={{ ...labelStyle, cursor: 'pointer' }}
                        >
                            {stat.label}
                        </motion.span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
