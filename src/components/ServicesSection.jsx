// ServicesSection.jsx
import React from "react";

const services = [
  {
    title: "Corporate Catering",
    desc: "Tailored menus and seamless execution for boardroom lunches, product launches, conferences, and team celebrations.",
  },
  {
    title: "Destination Weddings",
    desc: "Unforgettable culinary experiences at dream wedding destinations, from intimate ceremonies to grand celebrations.",
  },
  {
    title: "Private Luxury Events",
    desc: "High-end catering for opulent birthday parties, private soirées, and family gatherings with full-service elegance.",
  },
  {
    title: "The Chaat Concept",
    desc: "Vibrant, fresh, tangy, spicy, and sweet combinations that delight every guest.",
  },
  {
    title: "Celebrity Events",
    desc: "Premium, tailor-made menus and presentations for high-profile occasions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Signature Services
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-purple-50 rounded-lg shadow-md p-6 max-w-xs min-w-[220px]"
          >
            <h3 className="font-semibold text-xl text-purple-700 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
