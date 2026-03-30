import React from 'react';

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginTop: '60px',
  };

  const serviceData = [
    {
      id: "01",
      title: "Corporate Catering",
      desc: "Boardroom lunches to large-scale conferences — menus tailored to your brand and your guests.",
      badge: "Trusted by Fortune-500 companies",
      img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Destination Weddings",
      desc: "Full-service culinary experiences at India's most iconic wedding venues. We've catered at Umaid Lake Palace.",
      badge: "Pan-India reach",
      img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Private Luxury Events",
      desc: "Opulent birthday parties, intimate soirées, family milestones — elevated to gourmet experiences.",
      badge: "HNI preferred caterer",
      img: "https://images.unsplash.com/photo-1530101978243-209a8a5f6da9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Celebrity Events",
      desc: "When the guest list includes celebrities, the food cannot be ordinary. It never is with Fossetta.",
      badge: "Discretion guaranteed",
      img: "https://images.unsplash.com/photo-1522152302542-71a8e5132d16?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "The Chaat Concept",
      desc: "Our signature live street-food culture — theatrical, fresh, and theatrical. The #1 differentiator.",
      badge: "SIGNATURE OFFER",
      isFeatured: true,
      img: "https://images.unsplash.com/photo-1626132646529-5006375bc972?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Sports Events & Family Days",
      desc: "High-energy outdoor catering for corporate fun days, sports tournaments, and large family celebrations.",
      badge: "High-capacity events",
      img: "https://images.unsplash.com/photo-1549416805-4f323e20092c?q=80&w=2070&auto=format&fit=crop"
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
          {serviceData.map((item, index) => (
            <div 
              key={item.id} 
              className="fade-up service-card" 
              style={{
                gridColumn: item.isFeatured ? 'span 2' : 'span 1',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '40px',
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                position: 'relative',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                 <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px' }}>
                     <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px' }}>{item.id} / SERVICE</div>
                 <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{item.title}</h3>
                 <p style={{ color: '#8C7B6E', fontSize: '15px', lineHeight: 1.6, marginBottom: '25px' }}>{item.desc}</p>
                 <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#1A1208', fontWeight: 700, display: 'inline-block', backgroundColor: '#F4ECD8', padding: '4px 12px', borderRadius: '4px' }}>
                   {item.badge}
                 </div>
              </div>
              <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#contact" style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                   Learn More <span style={{ fontSize: '18px' }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .service-card:hover { 
            transform: translateY(-8px); 
            box-shadow: 0 20px 50px rgba(201, 168, 76, 0.1); 
            border: 1px solid rgba(201, 168, 76, 0.3);
          }
          @media (max-width: 900px) {
            .service-card { grid-column: span 1 !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
