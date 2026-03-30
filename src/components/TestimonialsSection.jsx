// TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    name: "Jackie Shroff",
    text: "I’ve attended countless events, but the food at this one—catered by Fossetta—was something else. Every dish was bursting with flavor, and the presentation? Absolutely top-class. Hats off to the team.",
  },
  {
    name: "Mercedes Benz",
    text: "Fossetta brought a level of culinary elegance that perfectly complemented our luxury showcase. Their attention to detail and gourmet execution left our guests truly impressed.",
  },
  {
    name: "Toyota",
    text: "Absolutely loved the ambience and the food quality. Every dish was thoughtfully curated and the service was top-notch. A perfect spot for a fine dining experience.",
  },
  {
    name: "BMW",
    text: "A beautifully designed place with amazing food. The staff was courteous and the overall experience was elegant and relaxing.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-purple-50 py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        What People Say About Us
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-lg shadow-md p-6 max-w-xs min-w-[220px]"
          >
            <p className="text-gray-700 italic mb-4">“{t.text}”</p>
            <h3 className="font-semibold text-lg text-purple-700">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
