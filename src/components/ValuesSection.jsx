// ValuesSection.jsx
import React from "react";

const values = [
  {
    title: "Quality",
    desc: "Only the freshest, locally-sourced ingredients and premium products.",
  },
  {
    title: "Creativity",
    desc: "Innovative menus and presentations tailored to each event.",
  },
  {
    title: "Hospitality",
    desc: "Warm, attentive service that makes every guest feel special.",
  },
  {
    title: "Excellence",
    desc: "Commitment to hygiene, preparation, and flawless execution.",
  },
  {
    title: "Experience",
    desc: "Over four decades of expertise in the catering industry.",
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-purple-50 py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Our Core Values
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white rounded-lg shadow-md p-6 max-w-xs min-w-[220px]"
          >
            <h3 className="font-semibold text-xl text-purple-700 mb-2">
              {v.title}
            </h3>
            <p className="text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
