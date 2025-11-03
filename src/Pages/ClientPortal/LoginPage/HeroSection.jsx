// // /pages/Services/HeroSection.jsx
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-auto lg:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-36 pb-20 bg-black">
//       <div className="absolute inset-0">
//         <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-600 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//         <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-black via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//       </div>
//       <div className="relative z-10 max-w-4xl">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Your Client Portal
//         </h1>
//         <p className="text-lg md:text-xl text-red-300 font-medium">
//           Track your project status, deliverables, deadlines, and more – all in
//           one place.
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
    <section className="relative h-screen flex justify-center items-center text-center bg-black overflow-hidden">
      {/* Animated Gradient Backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-600 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-black via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
      </div>

      {/* Centered Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to Your Client Portal
        </h1>
        <p className="text-lg md:text-2xl text-red-300 font-medium">
          Track your project status, deliverables, deadlines, and more — all in
          one place.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
