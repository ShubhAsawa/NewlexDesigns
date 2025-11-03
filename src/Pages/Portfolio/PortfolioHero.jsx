// src/Pages/Portfolio/PortfolioHero.jsx
import React from "react";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Creative Portfolio
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl opacity-80 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A collection of my best work & projects
      </motion.p>
    </section>
  );
};

export default PortfolioHero;
