// // import React from "react";
// // import { Link } from "react-router-dom";
// // import ModelCanvas from "./ModelCanvas";

// // const HomeHero = () => {
// //   return (
// //     <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] relative overflow-hidden">
// //       <style>
// //         {`
// //           @keyframes softPulse {
// //             0%, 100% {
// //               text-shadow: 
// //                 0 0 6px rgba(168, 85, 247, 0.7),
// //                 0 0 12px rgba(139, 92, 246, 0.6),
// //                 0 0 18px rgba(59, 130, 246, 0.4);
// //             }
// //             50% {
// //               text-shadow: 
// //                 0 0 10px rgba(168, 85, 247, 0.9),
// //                 0 0 20px rgba(139, 92, 246, 0.8),
// //                 0 0 30px rgba(59, 130, 246, 0.6);
// //             }
// //           }

// //           .neon-text {
// //             font-family: 'Orbitron', sans-serif;
// //             font-weight: 800;
// //             color: #fff;
// //             letter-spacing: 2px;
// //             text-transform: uppercase;
// //             text-shadow: 
// //               0 0 4px #a855f7,
// //               0 0 8px #9333ea,
// //               0 0 16px #3b82f6;
// //             animation: softPulse 3s infinite ease-in-out;
// //           }
// //         `}
// //       </style>

// //       {/* HERO SECTION */}
// //       <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-32 lg:pt-[80px] pb-24 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
// //         {/* Background Gradients */}
// //         <div className="absolute inset-0 z-0">
// //           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
// //           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>

// //           {/* Bottom Gradient Fade BEHIND content */}
// //           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1b1b29] z-0 pointer-events-none"></div>
// //         </div>

// //         {/* FULLSCREEN 3D MODEL in background */}
// //         <div className="absolute inset-0 z-0">
// //           <ModelCanvas />
// //         </div>

// //         {/* Left Content */}
// //         <div className="relative z-10 w-full md:w-1/2 text-left pl-4 md:pl-12 lg:pl-20">
// //           <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-6 neon-text">
// //             JUST SAY IT
// //           </h1>
// //           <p className="text-base md:text-xl text-gray-300 font-medium mb-8">
// //             Automate anything — from sales to support — with powerful AI bots
// //             that listen, learn, and take action.
// //           </p>
// //           <Link to="/contact">
// //             <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-base md:text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
// //               Let’s Build Yours →
// //             </button>
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default HomeHero;

// // /pages/Services/HeroSection.jsx
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-auto lg:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-36 pb-20">
//       <div className="absolute inset-0">
//         <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//         <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//       </div>
//       <div className="relative z-10 max-w-4xl">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Powering Bold Ideas with Strategic Technology
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 font-medium">
//           We build intelligent automation systems that grow your business, save
//           time, and streamline operations — all with zero manual effort.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const API_URL =
//   "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjfTOkayP_UukrEIJEMGxbvkr6obP8sMlInlz9wKTHCXVeMnjIAN6jlbZDVnjvCJH-ChSwBiI2ZJ4iBqyfO_A58E7BzQE3vPmqfDjsx1WjFZeu4ret53q6jsSjxp_rOcgNREnZb6TOaf3Ki9X8UOABV0RVVs-9U_6ixPLbKq4IB5D_1zEcPGL04GBks35QQE52Bm79WC0lGvU0X2PVvGiRPjVO8CdQRskfR1RA6jt9QknWGH9R_ZWCA3SXQj8kEDUXM5igi945sF5hxUkGIx9lYVH5JIaW_CHUicwFq&lib=MuI5z9z_By3kS-EfJuAuFkGCHQy4BBFlN";

// const HeroSection = () => {
//   const [images, setImages] = useState({ row1: [], row2: [], row3: [] });

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((err) => console.error("Failed to fetch images:", err));
//   }, []);

//   return (
//     <section className="relative flex flex-col lg:flex-row items-center justify-between px-12 pt-2 pb-4 bg-white text-black overflow-hidden hero-custom-height">

//       {/* Left Content */}
//       <div className="relative z-10 max-w-xl text-left space-y-7">
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Your <em className="italic text-red-600">creative team’s</em><br /> creative team™
//         </h1>

//         <p className="text-lg text-black ">
//           Scale your in-house creative team with top global talent powered by
//           industry-leading AI workflows, delivering anything you can imagine fast
//           and affordably.
//         </p>

//         <Link to="/contact">
//           <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold shadow-lg transition duration-300">
//             Book a demo
//           </button>
//         </Link>
//       </div>

//       {/* Right Side: Three Vertical Columns */}
//       <div className="relative z-10 flex gap-4 mt-10 lg:mt-0">

//         {/* Column 1 */}
//         {images.row1.length > 0 && (
//           <div className="overflow-hidden h-[400px] w-[160px]">
//             <div className="flex flex-col animate-scrollUp">
//               {[...images.row1, ...images.row1].map((img, idx) => (
//                 <img
//                   key={`col1-${idx}`}
//                   src={img}
//                   alt={`Hero Img ${idx + 1}`}
//                   className="w-full h-36 object-cover rounded-md mb-3"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Column 2 */}
//         {images.row2.length > 0 && (
//           <div className="overflow-hidden h-[400px] w-[160px]">
//             <div className="flex flex-col animate-scrollDown">
//               {[...images.row2, ...images.row2].map((img, idx) => (
//                 <img
//                   key={`col2-${idx}`}
//                   src={img}
//                   alt={`Hero Img ${idx + 1}`}
//                   className="w-full h-36 object-cover rounded-md mb-3"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Column 3 */}
//         {images.row3.length > 0 && (
//           <div className="overflow-hidden h-[400px] w-[160px]">
//             <div className="flex flex-col animate-scrollUp">
//               {[...images.row3, ...images.row3].map((img, idx) => (
//                 <img
//                   key={`col3-${idx}`}
//                   src={img}
//                   alt={`Hero Img ${idx + 1}`}
//                   className="w-full h-36 object-cover rounded-md mb-3"
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Animation Keyframes */}
//       <style>
//         {`
//           @keyframes scrollUp {
//             0% { transform: translateY(0); }
//             100% { transform: translateY(-50%); }
//           }

//           @keyframes scrollDown {
//             0% { transform: translateY(-50%); }
//             100% { transform: translateY(0); }
//           }

//           .animate-scrollUp {
//             animation: scrollUp 30s linear infinite;
//           }

//           .animate-scrollDown {
//             animation: scrollDown 30s linear infinite;
//           }

//           /* Custom Hero Section Height */
//           .hero-custom-height {
//             min-height: 90vh;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = {
    row1: [1, 2, 3, 4, 5].map((i) => `/HomeHeroimages/image${i}.png`),
    row2: [6, 7, 8, 9, 10].map((i) => `/HomeHeroimages/image${i}.png`),
    row3: [11, 12, 13, 14, 15].map((i) => `/HomeHeroimages/image${i}.png`),
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 bg-white text-black overflow-hidden hero-custom-height">
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6 lg:pr-8 h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your{" "}
          <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-black to-[#E32225]">
            creative team’s
          </em>
          <br /> creative team™
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black max-w-md">
          Scale your in-house creative team with top global talent powered by
          industry-leading AI workflows, delivering anything you can imagine fast
          and affordably.
        </p>

        <Link to="/contact">
          <button className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
            Book a demo
          </button>
        </Link>
      </div>

      {/* Right Side Images */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center h-full">
        <div className="flex w-full h-[90vh] justify-center gap-4 overflow-hidden">
          {Object.entries(images).map(([row, imgs], colIdx) => (
            <div
              key={row}
              className={`flex-1 overflow-hidden ${
                colIdx === 1 ? "hidden sm:block" : ""
              } ${colIdx === 2 ? "hidden lg:block" : ""}`}
            >
              <div
                className={`flex flex-col h-full ${
                  colIdx === 1 ? "animate-scrollDown" : "animate-scrollUp"
                }`}
              >
                {[...imgs, ...imgs].map((img, idx) => (
                  <img
                    key={`${row}-${idx}`}
                    src={img}
                    alt={`Hero Img ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-scrollUp {
            animation: scrollUp 35s linear infinite;
          }
          .animate-scrollDown {
            animation: scrollDown 35s linear infinite;
          }
          .hero-custom-height {
            min-height: 90vh;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
