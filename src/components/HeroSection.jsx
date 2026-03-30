// HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white text-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
        Where Taste Meets Presentation
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8">
        Fossetta Gourmet Catering delivers world-class cuisine and impeccable
        service for weddings, corporate events, luxury gatherings, and more in
        Delhi NCR.
      </p>
      <a
        href="#contact"
        className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-800 transition"
      >
        Book a Food Trial
      </a>
    </section>
  );
}
