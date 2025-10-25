import React from "react";
import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent";
import HomeTestimonial from "./HomeTestimonial";
import Newsletter from "./Newsletter";
import HomePhoto from "./HomePhoto"; // ✅ scrolling photos
import HomeGlow from "./HomeGlow";   // ✅ new glowing section
// import HomeBlow from "./HomeBlow";


const Home = () => {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <HomeHero />
      <HomeGlow />      {/* ✅ Glowing photo section */}
      {<HomeContent />} {/* 👈 Keep your content here */}
      <HomePhoto />     {/* ✅ Scrolling photo section */}
      <HomeTestimonial />
      {/* <HomeBlow /> */}
      <Newsletter />
    </div>
  );
};

export default Home;
