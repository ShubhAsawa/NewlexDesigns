// src/Pages/Portfolio/Portfolio.jsx
import React from "react";
import PortfolioHero from "./OurwokHero";
import PortfolioGrid from "./OurworkGrid";
import PortfolioGallery from "./OurworkGallery";
import PortfolioCTA from "./OurworkCTA";

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
