// ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-white py-16 px-4 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
        Contact & Booking
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Ready to elevate your next event? Book a food trial or get in touch with
        us today!
      </p>
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-semibold">Call:</span>{" "}
          <a
            href="tel:+919811747715"
            className="text-purple-700 hover:underline"
          >
            +91 9811747715
          </a>
          ,{" "}
          <a
            href="tel:+919999850265"
            className="text-purple-700 hover:underline"
          >
            +91 9999850265
          </a>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:info@fossetta.in"
            className="text-purple-700 hover:underline"
          >
            info@fossetta.in
          </a>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> 42, Udyog Vihar 6,
          Sector 37, Gurgaon 122001
        </p>
      </div>
      <a
        href="mailto:info@fossetta.in"
        className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-800 transition"
      >
        Book a Food Trial
      </a>
    </section>
  );
}
