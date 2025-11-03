import React from "react";

const Servicetext = () => {
  return (
    <div className="bg-white text-black w-full">
      {/* -------- SECTION 1 -------- */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        {/* Floating Images (edges only) */}
        <div className="absolute left-10 bottom-32 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
          <img
            src="/Servicetext/image1.png"
            alt="Jumping Man"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute left-20 top-1/4 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
          <img
            src="/Servicetext/image2.png"
            alt="Girl in Sports"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
          <img
            src="/Servicetext/image3.png"
            alt="Basketball Player"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-20 top-1/4 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
          <img
            src="/Servicetext/image4.png"
            alt="Chef Cooking"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-10 bottom-32 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
          <img
            src="/Servicetext/image5.png"
            alt="Two Women with Sunglasses"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Middle Text */}
        <div className="absolute bottom-16 z-10 w-full flex flex-col items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            NewlexDesigns 
          </h1>

          <p className="mt-4 text-base md:text-xl font-medium text-black max-w-3xl">
            With more than 100+ direct connections to celebrity talent agencies,
            premium influencer representation companies, as well as mid-tier and
            micro creator networks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servicetext;
