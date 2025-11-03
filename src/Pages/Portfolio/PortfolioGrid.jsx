// // src/Pages/Portfolio/PortfolioGrid.jsx
// import React from "react";
// import { motion } from "framer-motion";

// // Example project data (replace with your own)
// const projects = [
//   { id: 1, title: "UI/UX Design", img: "https://picsum.photos/600/400?random=1" },
//   { id: 2, title: "Web Development", img: "https://picsum.photos/600/400?random=2" },
//   { id: 3, title: "Mobile App", img: "https://picsum.photos/600/400?random=3" },
//   { id: 4, title: "Branding", img: "https://picsum.photos/600/400?random=4" },
//   { id: 5, title: "E-Commerce", img: "https://picsum.photos/600/400?random=5" },
//   { id: 6, title: "AI/ML Project", img: "https://picsum.photos/600/400?random=6" },
// ];

// const PortfolioGrid = () => {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-gray-100">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Featured Projects
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
//             whileHover={{ y: -10 }}
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortfolioGrid;

// // src/Pages/Portfolio/PortfolioGrid.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // Example project data (replace with your own)
// const projects = [
//   { id: 1, title: "UI/UX Design", img: "https://picsum.photos/600/400?random=1" },
//   { id: 2, title: "Web Development", img: "https://picsum.photos/600/400?random=2" },
//   { id: 3, title: "Mobile App", img: "https://picsum.photos/600/400?random=3" },
//   { id: 4, title: "Branding", img: "https://picsum.photos/600/400?random=4" },
//   { id: 5, title: "E-Commerce", img: "https://picsum.photos/600/400?random=5" },
//   { id: 6, title: "AI/ML Project", img: "https://picsum.photos/600/400?random=6" },
// ];

// const PortfolioGrid = () => {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-gray-100">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Featured Projects
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             whileHover={{ y: -10 }}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform"
//           >
//             <Link to={`/portfolio/${project.id}`}>
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortfolioGrid;

// // src/Pages/Portfolio/PortfolioGrid.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import portfolioProjects from "../../data/portfolioData";

// const PortfolioGrid = () => {
//   return (
//     <>
//       {/* Portfolio Grid */}
//       <section className="py-16 px-6 md:px-16 bg-gray-100">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Featured Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {portfolioProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ y: -10 }}
//               className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform"
//             >
//               <Link to={`/portfolio/${project.id}`}>
//                 <img
//                   src={project.thumbnail}
//                   alt={project.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-xl font-semibold">{project.title}</h3>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default PortfolioGrid;

// // src/Pages/Portfolio/PortfolioGrid.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import portfolioProjects from "../../data/portfolioData"; // your data file

// const PortfolioGrid = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       {/* <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto">
//           Explore our latest projects across design, development, and innovation.
//         </p>
//       </section> */}

//       {/* Portfolio Grid */}
//       <section className="py-16 px-6 md:px-16 bg-gray-100">
//         <h2 className=" text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
//           Featured Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {portfolioProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ y: -10 }}
//               className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform"
//             >
//               <Link to={`/portfolio/${project.id}`}>
//                 <img
//                   src={project.thumbnail}
//                   alt={project.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4 text-center bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
//                   <h3 className="text-xl font-semibold">{project.title}</h3>
//                   {project.subtitle && (
//                     <p className="text-gray-500 text-sm mt-2">{project.subtitle}</p>
//                   )}
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default PortfolioGrid;

// src/Pages/Portfolio/PortfolioGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolioProjects from "../../data/portfolioData"; // your data file

const PortfolioGrid = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
        Featured Projects
      </h2>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden  shadow-lg cursor-pointer"
          >
            <Link to={`/portfolio/${project.id}`}>
              {/* Project Image */}
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/30">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  initial={{ y: 10, opacity: 0.8 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                {project.subtitle && (
                  <motion.p
                    className="text-lg md:text-xl text-gray-200 mt-2"
                    initial={{ y: 10, opacity: 0.8 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {project.subtitle}
                  </motion.p>
                )}
                
                {/* See Projects Button */}
                <motion.button
                  className="mt-4 px-6 py-2 bg-[#E32225] text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  See Projects
                </motion.button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
