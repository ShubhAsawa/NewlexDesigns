// /pages/Services/Services.jsx
import React from "react";
import HeroSection from "./HeroSection";
import ServiceList from "./ServiceList";
import WhyChooseSeyreon from "./WhyChooseSeyreon";
import Servicetext from "./Servicetext";


const Services = () => {
  return (
    <div className="relative text-white pt-0 overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] -mt-[100px]">
      <HeroSection />
      <ServiceList />
      <Servicetext />
      <WhyChooseSeyreon />
    </div>
  );
};

export default Services;
