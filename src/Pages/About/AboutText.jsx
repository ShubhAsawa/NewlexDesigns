// // /src/about/AboutText.jsx
// import React from "react";

// const AboutText = () => {
//   return (
//     <section className="bg-white text-black py-20 px-6 md:px-16 lg:px-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Images */}
//         <div className="relative flex flex-col gap-6">
//           {/* Top Image */}
//           <div className="transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-in-out">
//             <img
//               src="/Aboutimage/image01.png"
//               alt="Design Process"
//               className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
//             />
//           </div>

//           {/* Bottom Image */}
//           <div className="transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 ease-in-out">
//             <img
//               src="/Aboutimage/image02.png"
//               alt="Creative Team Work"
//               className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug">
//             Together, we craft designs{" "}
//             <span className="italic font-medium text-gray-600">
//               that are as diverse as our team.
//             </span>
//           </h2>

//           <p className="text-lg leading-relaxed">
//             Studio Six F is proud to be a design agency where the talents from
//             around the world, come together to do what they do best—create.
//           </p>

//           <p className="text-lg leading-relaxed">
//             Whether it’s the tactile feel of a package or the visual impact of a
//             logo, we aim to create experiences that engage all the senses.
//           </p>

//           <p className="text-lg leading-relaxed">
//             Specializing in brand packaging and identity design for FMCG brands,
//             we understand the importance of making an instant connection with
//             your audience.
//           </p>

//           <p className="text-lg leading-relaxed">
//             As we expand our horizons. We are also excited to explore new
//             industries, always with the same commitment to excellence.
//           </p>

//           {/* Call to Action */}
//           <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 hover:shadow-xl transition-all duration-300">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutText;

// // /src/about/AboutText.jsx
// import React from "react";

// const AboutText = () => {
//   return (
//     <section className="bg-white text-black py-20 px-6 md:px-16 lg:px-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 items-center">
//         {/* Left Overlapping Images */}
//         <div className="relative w-full flex justify-center md:justify-end">
//           {/* Top Image */}
//           <div className="absolute top-0 left-8 md:left-12 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ease-in-out z-20">
//             <img
//               src="/Aboutimage/image02.png"
//               alt="Design Process"
//               className="w-72 md:w-80 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
//             />
//           </div>

//           {/* Bottom Image */}
//           <div className="absolute top-24 right-8 md:right-6 transform rotate-[4deg] hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
//             <img
//               src="/Aboutimage/image01.png"
//               alt="Creative Team Work"
//               className="w-72 md:w-80 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
//             />
//           </div>

//           {/* Wrapper height so container doesn’t collapse */}
//           <div className="h-[400px] md:h-[450px]"></div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-6 text-left md:pl-6">
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug">
//             Together, we craft designs{" "}
//             <span className="italic font-medium text-gray-600">
//               that are as diverse as our team.
//             </span>
//           </h2>

//           <p className="text-lg leading-relaxed">
//             Studio Six F is proud to be a design agency where the talents from
//             around the world, come together to do what they do best—create.
//           </p>

//           <p className="text-lg leading-relaxed">
//             Whether it’s the tactile feel of a package or the visual impact of a
//             logo, we aim to create experiences that engage all the senses.
//           </p>


         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutText;

// // /src/about/AboutText.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const AboutText = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10">
//         {/* ---------- LEFT IMAGES ---------- */}
//         <div className="relative flex justify-center md:justify-end">
//           {/* Background Accent Circle */}
//           <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-r from-[#E32225]/20 to-[#111]/10 rounded-full blur-3xl"></div>

//           {/* Image 1 (Front / Top) */}
//           <motion.div
//             whileHover={{ scale: 1.05, rotate: 0 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="absolute top-5 left-1/2 -translate-x-1/2 md:top-0 md:left-auto md:-right-10 md:translate-x-0 rotate-[-5deg] z-20"
//           >
//             <img
//               src="/Aboutimage/image02.png"
//               alt="Design Process"
//               className="w-80 sm:w-96 md:w-[26rem] lg:w-[28rem] rounded-2xl shadow-2xl"
//             />
//           </motion.div>

//           {/* Image 2 (Back / Bottom) */}
//           <motion.div
//             whileHover={{ scale: 1.05, rotate: 0 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="hidden md:block absolute top-48 right-24 rotate-[6deg] z-10"
//           >
//             <img
//               src="/Aboutimage/image01.png"
//               alt="Creative Team Work"
//               className="w-80 sm:w-96 md:w-[26rem] lg:w-[28rem] rounded-2xl shadow-xl"
//             />
//           </motion.div>

//           {/* Mobile stacked layout */}
//           <div className="flex flex-col items-center gap-6 md:hidden mt-96">
//             <img
//               src="/Aboutimage/image02.png"
//               alt="Design Process"
//               className="w-80 sm:w-96 rounded-2xl shadow-xl"
//             />
//             <img
//               src="/Aboutimage/image01.png"
//               alt="Creative Team Work"
//               className="w-80 sm:w-96 rounded-2xl shadow-xl"
//             />
//           </div>

//           {/* Maintain layout height */}
//           <div className="h-[520px] sm:h-[560px] md:h-[600px]"></div>
//         </div>

//         {/* ---------- RIGHT TEXT ---------- */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-xl mx-auto md:mx-0 space-y-6 text-left"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
//             <span className="bg-gradient-to-r from-black via-[#E32225] to-black bg-clip-text text-transparent">
//               Together, we craft designs
//             </span>{" "}
//             <span className="italic text-gray-700">
//               that speak to every sense.
//             </span>
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             At <span className="font-semibold text-[#E32225]">Studio Six F</span>,
//             creativity has no borders. Designers, artists, and thinkers from
//             around the world collaborate to transform ideas into meaningful
//             visuals.
//           </p>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             From the subtle texture of packaging to the bold identity of a
//             brand, we design experiences that connect emotionally and visually.
//           </p>

//           <button className="mt-6 px-6 py-3 bg-[#E32225] hover:bg-[#c91d21] text-white font-semibold rounded-full shadow-lg transition-all duration-300">
//             Learn More
//           </button>
//         </motion.div>
//       </div>

//       {/* Subtle gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-[#E32225]/5 via-transparent to-gray-100/40 pointer-events-none"></div>
//     </section>
//   );
// };

// export default AboutText;

// /src/about/AboutText.jsx
import React from "react";

const AboutText = () => {
  return (
    <section className="bg-white text-black py-20 px-5 sm:px-10 md:px-20 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* ---------- LEFT IMAGES ---------- */}
        <div className="relative flex justify-center md:justify-end w-full">
          {/* Top Image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-0 md:right-16 transform md:-rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out z-20">
            <img
              src="/Aboutimage/image02.png"
              alt="Design Process"
              className="w-80 sm:w-96 lg:w-[420px] rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="absolute top-48 left-6 md:left-auto md:right-0 transform md:rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
            <img
              src="/Aboutimage/image01.png"
              alt="Creative Team Work"
              className="w-80 sm:w-96 lg:w-[420px] rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 object-cover"
            />
          </div>

          {/* Maintain height for layout stability */}
          <div className="h-[400px] sm:h-[420px] md:h-[460px]"></div>
        </div>

        {/* ---------- RIGHT TEXT ---------- */}
        <div className="space-y-6 text-left max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Together, <span className="text-[#E32225]">we craft</span> designs{" "}
            <span className="italic font-semibold text-gray-700">
              that connect on every level.
            </span>
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
            At <span className="font-semibold text-[#E32225]">NewlexDesigns</span>, creativity knows no boundaries. Designers, artists, and storytellers collaborate to turn ideas into visually powerful and emotionally resonant experiences.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
            From the refined details of packaging to the bold presence of a full brand identity, we shape design moments that are felt, remembered, and truly unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
