import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const sectionStyle = {
    padding: '120px 5%',
    backgroundColor: '#FDFAF5',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    marginTop: '80px',
  };

  const serviceData = [
    {
      id: "01",
      title: "Corporate Catering",
      desc: "Boardroom lunches to large-scale conferences — menus tailored to your brand and your guests.",
      badge: "Trusted by Fortune-500 companies",
      img: "/corporate_catering.png"
    },
    {
      id: "02",
      title: "Destination Weddings",
      desc: "Full-service culinary experiences at India's most iconic wedding venues. We've catered at Umaid Lake Palace.",
      badge: "Pan-India reach",
      img: "/destination_wedding.png"
    },
    {
      id: "03",
      title: "Private Luxury Events",
      desc: "Opulent birthday parties, intimate soirées, family milestones — elevated to gourmet experiences.",
      badge: "HNI preferred caterer",
      img: "/private_luxury_events.png"
    },
    {
      id: "04",
      title: "Celebrity Events",
      desc: "When the guest list includes celebrities, the food cannot be ordinary. It never is with Fossetta.",
      badge: "Discretion guaranteed",
      img: "/celebrity.png",
      order: 4
    },
    {
      id: "05",
      title: "The Chaat Concept",
      desc: "Our signature live street-food culture — theatrical, fresh, and immersive. The #1 differentiator for premium events. We bring the authentic soul of Indian streets with a gourmet twist, creating an interactive culinary spectacle that your guests will talk about for years.",
      badge: "SIGNATURE OFFER",
      isFeatured: true,
      img: "/chaat_setup.png",
      order: 2
    },
    {
      id: "06",
      title: "Sports Events & Family Days",
      desc: "From corporate cricket tournaments to vibrant family melas — we provide high-energy gourmet setups for any sports field.",
      badge: "High-capacity events",
      img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
      order: 6
    },
  ];

  return (
    <section id="services" style={sectionStyle}>
      <div style={containerStyle}>
        <span style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Our Signature Services</span>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', marginTop: '15px' }}>Every Occasion. Flawlessly Catered.</h2>
        <p style={{ maxWidth: '700px', margin: '20px auto', fontSize: '18px', color: '#8C7B6E' }}>
          From 20-person boardroom lunches to 2,000-guest destination weddings — we scale without compromising quality.
        </p>

        <div style={gridStyle}>
          {serviceData.sort((a, b) => a.order - b.order).map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="service-card" 
              style={{
                gridColumn: item.isFeatured ? 'span 3' : 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: item.isFeatured ? '40px' : '30px',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                border: '1px solid #EDE8DF',
                position: 'relative',
                display: 'flex',
                flexDirection: item.isFeatured ? 'row' : 'column',
                justifyContent: 'flex-start',
                alignItems: item.isFeatured ? 'center' : 'stretch',
                gap: item.isFeatured ? '40px' : '0',
                overflow: 'hidden',
              }}
            >
              <div>
                 <div style={{ 
                     width: item.isFeatured ? '45%' : '100%',
                     height: item.isFeatured ? '300px' : '180px', 
                     borderRadius: '8px', 
                     overflow: 'hidden', 
                     marginBottom: item.isFeatured ? '0' : '30px', 
                     backgroundColor: '#F8F8F8',
                     position: 'relative',
                     flexShrink: 0
                 }}>
                     <motion.img 
                        src={item.img} 
                        alt={item.title} 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }} 
                     />
                     {item.isFeatured && (
                         <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'rgba(25, 18, 8, 0.8)', color: 'white', padding: '6px 14px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', backdropFilter: 'blur(4px)' }}>
                             Most Popular
                         </div>
                     )}
                 </div>
                 <div style={{ flex: 1 }}>
                     <div style={{ 
                         fontSize: '12px', 
                         color: '#C9A84C', 
                         fontWeight: 700, 
                         marginBottom: '15px', 
                         letterSpacing: '2px',
                         display: 'flex',
                         alignItems: 'center',
                         gap: '10px'
                     }}>
                        <span style={{ width: '20px', height: '1px', backgroundColor: '#C9A84C' }}></span>
                        {item.id} / SERVICE
                     </div>
                     <h3 style={{ 
                         fontFamily: '"Playfair Display", serif',
                         fontSize: item.isFeatured ? '32px' : '24px', 
                         marginBottom: '15px',
                         color: '#1A1208'
                     }}>{item.title}</h3>
                     <p style={{ color: '#8C7B6E', fontSize: '16px', lineHeight: 1.7, marginBottom: '25px' }}>{item.desc}</p>
                     <div style={{ 
                         fontSize: '11px', 
                         textTransform: 'uppercase', 
                         color: '#C9A84C', 
                         fontWeight: 700, 
                         display: 'inline-block', 
                         border: '1px solid rgba(201, 168, 76, 0.3)',
                         padding: '6px 16px', 
                         borderRadius: '100px' 
                     }}>
                       {item.badge}
                     </div>
                 </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <a href="#contact" className="learn-more-link" style={{ 
                    color: '#1A1208', 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    transition: 'all 0.3s ease'
                }}>
                   LEARN MORE 
                   <div style={{ 
                       width: '32px', 
                       height: '32px', 
                       borderRadius: '50%', 
                       border: '1px solid #EDE8DF',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       fontSize: '16px',
                       transition: 'all 0.3s ease'
                   }} className="arrow-circle">→</div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>
        {`
          .service-card {
            border: 1px solid #EDE8DF;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .service-card:hover { 
            transform: translateY(-10px); 
            box-shadow: 0 30px 60px rgba(25, 18, 8, 0.05); 
            border: 1px solid #C9A84C;
          }
          .learn-more-link:hover .arrow-circle {
            background-color: #C9A84C;
            border-color: #C9A84C;
            color: white;
            transform: scale(1.1);
          }
          @media (max-width: 1024px) {
            #services > div > div {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            #services > div > div {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .service-card { 
               grid-column: span 1 !important; 
               grid-row: span 1 !important;
               padding: 25px !important;
               flex-direction: column !important;
               align-items: stretch !important;
               gap: 0 !important;
            }
            .service-card > div:first-of-type {
              width: 100% !important;
              height: 200px !important;
              margin-bottom: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
