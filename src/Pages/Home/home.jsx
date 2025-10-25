import React from "react";
import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent";
import HomeTestimonial from "./HomeTestimonial";
import Newsletter from "./Newsletter";
import HomePhoto from "./HomePhoto"; // ✅ scrolling photos
import HomeGlow from "./HomeGlow";   // ✅ new glowing section
<<<<<<< HEAD
// import HomeBlow from "./HomeBlow";
=======
import HomeBlow from "./HomeBlow";
>>>>>>> 920e4a6121e8107538b40f5444f39153e7374795


const Home = () => {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <HomeHero />
      <HomeGlow />      {/* ✅ Glowing photo section */}
      {<HomeContent />} {/* 👈 Keep your content here */}
      <HomePhoto />     {/* ✅ Scrolling photo section */}
      <HomeTestimonial />
<<<<<<< HEAD
      {/* <HomeBlow /> */}
=======
      <HomeBlow />
>>>>>>> 920e4a6121e8107538b40f5444f39153e7374795
      <Newsletter />
    </div>
  );
};

export default Home;
