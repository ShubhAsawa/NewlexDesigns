// src/Pages/Portfolio/PortfolioCTA.jsx
import React from "react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let’s Work Together!
      </h2>
      <p className="mb-8 text-lg opacity-80 max-w-2xl mx-auto">
        Have an exciting project in mind? Let’s bring it to life with creative
        design and powerful development.
      </p>
      <Link
        to="/contact"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default PortfolioCTA;
