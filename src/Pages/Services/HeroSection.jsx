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

// /pages/Services/HeroSection.jsx
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 bg-black">
//       {/* Gradient overlays */}
//       <div className="absolute inset-0">
//         {/* Top-left red glow */}
//         <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-[#E32225] blur-3xl opacity-40 animate-pulse"></div>
//         {/* Bottom-right red glow */}
//         <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-[#E32225] blur-2xl opacity-30 animate-pulse"></div>
//       </div>

//       {/* Text content */}
//       <div className="relative z-10 max-w-4xl px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Powering Bold Ideas with Strategic Technology
//         </h1>
//         <p className="text-lg md:text-xl text-red-300 font-medium">
//           We build intelligent automation systems that grow your business, save
//           time, and streamline operations — all with zero manual effort.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// /pages/Services/HeroSection.jsx
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black to-[#E32225]">
//       {/* Text content */}
//       <div className="relative z-10 max-w-4xl px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Powering Bold Ideas with Strategic Technology
//         </h1>
//         <p className="text-lg md:text-xl text-red-300 font-medium">
//           We build intelligent automation systems that grow your business, save
//           time, and streamline operations — all with zero manual effort.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// /pages/Services/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gradient-to-br from-black to-[#E32225] text-white overflow-hidden">
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where Creativity Meets Purpose
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-red-300 font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We design clear, intelligent brand experiences that strengthen your identity and connect you with the people who matter most.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;

