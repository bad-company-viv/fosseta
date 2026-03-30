import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import ChaatSpotlight from './components/ChaatSpotlight';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Team from './components/Team';
import HowItWorks from './components/HowItWorks';
import CuisineShowcase from './components/CuisineShowcase';
import IrresistibleCTA from './components/IrresistibleCTA';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElems = document.querySelectorAll('.fade-up');
    fadeElems.forEach((el) => observer.observe(el));

    return () => {
      fadeElems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <ChaatSpotlight />
      <SocialProof />
      <Gallery />
      <Team />
      <HowItWorks />
      <CuisineShowcase />
      <IrresistibleCTA />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
