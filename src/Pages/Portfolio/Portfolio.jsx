// src/Pages/Portfolio/Portfolio.jsx
import React from "react";
import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioGallery from "./PortfolioGallery";
<<<<<<< HEAD
// import PortfolioCTA from "./PortfolioCTA";
=======
import PortfolioCTA from "./PortfolioCTA";
>>>>>>> 920e4a6121e8107538b40f5444f39153e7374795

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
