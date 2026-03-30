// AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
        Our Story
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        With over 40 years of industry experience, Fossetta Gourmet Catering
        blends culinary artistry with warm hospitality. We are known for
        creative cuisines, exceptional food presentation, and curating memorable
        experiences for every event.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="bg-purple-50 rounded-lg p-6 shadow-md max-w-xs">
          <h3 className="font-semibold text-xl text-purple-700 mb-2">
            Mission
          </h3>
          <p className="text-gray-600">
            To deliver world-class cuisine and impeccable service, ensuring
            every event is unforgettable.
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 shadow-md max-w-xs">
          <h3 className="font-semibold text-xl text-purple-700 mb-2">Vision</h3>
          <p className="text-gray-600">
            To set the standard for gourmet catering by combining tradition with
            innovation, focusing on detail, flavor, and guest delight.
          </p>
        </div>
      </div>
    </section>
  );
}
