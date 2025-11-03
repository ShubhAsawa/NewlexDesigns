// src/Pages/Portfolio/Portfolio.jsx
import React from "react";
import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioGallery from "./PortfolioGallery";
import PortfolioCTA from "./PortfolioCTA";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Project Grid Showcase */}
      <PortfolioGrid />

      {/* Sub Gallery Section */}
      <PortfolioGallery />

      
    </div>
  );
};

export default Portfolio;
