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

// /src/about/AboutText.jsx
import React from "react";

const AboutText = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 items-center">
        {/* Left Overlapping Images */}
        <div className="relative w-full flex justify-center md:justify-end">
          {/* Top Image */}
          <div className="absolute top-0 left-8 md:left-12 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ease-in-out z-20">
            <img
              src="/Aboutimage/image02.png"
              alt="Design Process"
              className="w-72 md:w-80 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Bottom Image */}
          <div className="absolute top-24 right-8 md:right-6 transform rotate-[4deg] hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
            <img
              src="/Aboutimage/image01.png"
              alt="Creative Team Work"
              className="w-72 md:w-80 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Wrapper height so container doesn’t collapse */}
          <div className="h-[400px] md:h-[450px]"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-left md:pl-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Together, we craft designs{" "}
            <span className="italic font-medium text-gray-600">
              that are as diverse as our team.
            </span>
          </h2>

          <p className="text-lg leading-relaxed">
            Studio Six F is proud to be a design agency where the talents from
            around the world, come together to do what they do best—create.
          </p>

          <p className="text-lg leading-relaxed">
            Whether it’s the tactile feel of a package or the visual impact of a
            logo, we aim to create experiences that engage all the senses.
          </p>


         
        </div>
      </div>
    </section>
  );
};

export default AboutText;
