// // // // src/Pages/Portfolio/PortfolioDetails.jsx
// // // import React from "react";
// // // import { useParams, Link } from "react-router-dom";

// // // const projectData = {
// // //   1: {
// // //     title: "UI/UX Design Project",
// // //     description:
// // //       "A modern UI/UX design project with focus on user experience, clean design, and accessibility.",
// // //     img: "https://picsum.photos/800/500?random=21",
// // //   },
// // //   2: {
// // //     title: "Web Development Project",
// // //     description:
// // //       "A responsive web application built with React and Node.js, optimized for performance.",
// // //     img: "https://picsum.photos/800/500?random=22",
// // //   },
// // //   3: {
// // //     title: "Mobile App Project",
// // //     description:
// // //       "A cross-platform mobile app with React Native, featuring smooth animations and offline mode.",
// // //     img: "https://picsum.photos/800/500?random=23",
// // //   },
// // // };

// // // const PortfolioDetails = () => {
// // //   const { id } = useParams();
// // //   const project = projectData[id];

// // //   if (!project) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col items-center justify-center">
// // //         <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
// // //         <Link
// // //           to="/portfolio"
// // //           className="px-4 py-2 bg-red-600 text-white rounded-md"
// // //         >
// // //           Back to Portfolio
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen py-16 px-6 md:px-20 bg-white">
// // //       <img
// // //         src={project.img}
// // //         alt={project.title}
// // //         className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-10"
// // //       />
// // //       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
// // //       <p className="text-lg text-gray-700 mb-10">{project.description}</p>
// // //       <Link
// // //         to="/portfolio"
// // //         className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
// // //       >
// // //         ← Back to Portfolio
// // //       </Link>
// // //     </div>
// // //   );
// // // };

// // // export default PortfolioDetails;
// // // src/Pages/Portfolio/PortfolioDetails.jsx
// // // import React from "react";
// // // import { useParams, Link } from "react-router-dom";

// // // const projectData = {
// // //   1: {
// // //     title: "UI/UX Design Project",
// // //     description:
// // //       "A modern UI/UX design project with focus on user experience, clean design, and accessibility.",
// // //     images: [
// // //       "https://picsum.photos/800/500?random=21",
// // //       "https://picsum.photos/800/500?random=31",
// // //       "https://picsum.photos/800/500?random=41",
// // //     ],
// // //   },
// // //   2: {
// // //     title: "Web Development Project",
// // //     description:
// // //       "A responsive web application built with React and Node.js, optimized for performance.",
// // //     images: [
// // //       "https://picsum.photos/800/500?random=22",
// // //       "https://picsum.photos/800/500?random=32",
// // //     ],
// // //   },
// // //   3: {
// // //     title: "Mobile App Project",
// // //     description:
// // //       "A cross-platform mobile app with React Native, featuring smooth animations and offline mode.",
// // //     images: [
// // //       "https://picsum.photos/800/500?random=23",
// // //       "https://picsum.photos/800/500?random=33",
// // //       "https://picsum.photos/800/500?random=43",
// // //     ],
// // //   },
// // //   // add more projects for ids 4, 5, 6 if you want
// // // };

// // // const PortfolioDetails = () => {
// // //   const { id } = useParams();
// // //   const project = projectData[id];

// // //   if (!project) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col items-center justify-center">
// // //         <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
// // //         <Link
// // //           to="/portfolio"
// // //           className="px-4 py-2 bg-red-600 text-white rounded-md"
// // //         >
// // //           Back to Portfolio
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen py-16 px-6 md:px-20 bg-white">
// // //       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
// // //       <p className="text-lg text-gray-700 mb-10">{project.description}</p>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
// // //         {project.images.map((img, idx) => (
// // //           <img
// // //             key={idx}
// // //             src={img}
// // //             alt={`${project.title} ${idx + 1}`}
// // //             className="rounded-lg shadow-md"
// // //           />
// // //         ))}
// // //       </div>

// // //       <Link
// // //         to="/portfolio"
// // //         className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
// // //       >
// // //         ← Back to Portfolio
// // //       </Link>
// // //     </div>
// // //   );
// // // };

// // // export default PortfolioDetails;

// // // import React from "react";
// // // import { useParams, useNavigate } from "react-router-dom";

// // // const projectData = {
// // //   1: {
// // //     title: "AI Chatbot Project",
// // //     description: "A smart AI chatbot built using NLP and automation.",
// // //     images: [
// // //       "https://via.placeholder.com/800x400?text=AI+Chatbot+1",
// // //       "https://via.placeholder.com/800x400?text=AI+Chatbot+2",
// // //       "https://via.placeholder.com/800x400?text=AI+Chatbot+3",
// // //     ],
// // //   },
// // //   2: {
// // //     title: "E-commerce Website",
// // //     description: "Full-stack e-commerce website with payment gateway.",
// // //     images: [
// // //       "https://via.placeholder.com/800x400?text=Ecommerce+1",
// // //       "https://via.placeholder.com/800x400?text=Ecommerce+2",
// // //       "https://via.placeholder.com/800x400?text=Ecommerce+3",
// // //     ],
// // //   },
// // //   // ✅ Add more projects here later
// // // };

// // // const PortfolioDetail = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   const project = projectData[id];

// // //   if (!project) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center text-white">
// // //         <h2>Project not found</h2>
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
// // //         >
// // //           Back
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#0e0e0e] text-white px-6 py-12">
// // //       {/* Project Title */}
// // //       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

// // //       {/* Project Description */}
// // //       <p className="mb-8 text-lg">{project.description}</p>

// // //       {/* Project Images */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         {project.images.map((img, index) => (
// // //           <img
// // //             key={index}
// // //             src={img}
// // //             alt={`Project ${index + 1}`}
// // //             className="rounded-xl shadow-lg"
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Back Button */}
// // //       <div className="mt-10">
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
// // //         >
// // //           ⬅ Back
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PortfolioDetail;

// // // src/Pages/Portfolio/PortfolioDetail.jsx
// // // import React from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import portfolioProjects from "../../data/portfolioData";

// // // const PortfolioDetail = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   const project = portfolioProjects.find((p) => p.id === parseInt(id));

// // //   if (!project) {
// // //     return <div className="p-10 text-center">Project not found.</div>;
// // //   }

// // //   return (
// // //     <section className="py-16 px-6 md:px-20">
// // //       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

// // //       {/* Images */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // //         {project.images.map((img, idx) => (
// // //           <img
// // //             key={idx}
// // //             src={img}
// // //             alt={`${project.title} ${idx + 1}`}
// // //             className="rounded-lg shadow-md"
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Description */}
// // //       <p className="text-lg text-gray-700 mb-8">{project.description}</p>

// // //       {/* Back Button */}
// // //       <button
// // //         onClick={() => navigate(-1)}
// // //         className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
// // //       >
// // //         Back
// // //       </button>
// // //     </section>
// // //   );
// // // };

// // // // src/Pages/Portfolio/PortfolioDetail.jsx
// // // import React, { useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import portfolioProjects from "../../data/portfolioData";

// // // const PortfolioDetail = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [activeTab, setActiveTab] = useState("client");

// // //   const project = portfolioProjects.find((p) => p.id === parseInt(id));

// // //   if (!project) {
// // //     return (
// // //       <div className="p-10 text-center text-gray-600">
// // //         Project not found.
// // //         <button
// // //           onClick={() => navigate("/portfolio")}
// // //           className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
// // //         >
// // //           Back to Portfolio
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <section className="bg-white text-black">
// // //       <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] max-w-[1600px] mx-auto">
        
// // //         {/* Left Side - Text */}
// // //         <div className="px-6 md:px-12 lg:px-16 py-20">
// // //           {/* Category */}
// // //           <p className="text-gray-500 text-sm mb-3">{project.category}</p>

// // //           {/* Title */}
// // //           <h1 className="text-3xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent md:text-5xl font-bold mb-6 leading-snug">
// // //             {project.title}
// // //           </h1>

// // //           {/* Tags */}
// // //           <div className="flex flex-wrap gap-3 mb-8">
// // //             {project.tags.map((tag, idx) => (
// // //               <span
// // //                 key={idx}
// // //                 className="px-4 py-1  bg-gray-200 text-gray-700 text-sm rounded-full"
// // //               >
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           {/* Description */}
// // //           <p className="text-gray-700 mb-10">{project.description}</p>

// // //           {/* Accordion */}
// // //           {/* <div className="space-y-4">
// // //             {[
// // //               { key: "client", label: "Client", content: project.client },
// // //               { key: "challenge", label: "Challenge", content: project.challenge },
// // //               { key: "solutions", label: "Solutions", content: project.solutions },
// // //             ].map((section) => (
// // //               <div key={section.key} className="border-b pb-3">
// // //                 <button
// // //                   className="flex justify-between items-center w-full font-semibold text-lg"
// // //                   onClick={() =>
// // //                     setActiveTab(activeTab === section.key ? "" : section.key)
// // //                   }
// // //                 >
// // //                   {section.label}
// // //                   <span>{activeTab === section.key ? "▲" : "▼"}</span>
// // //                 </button>
// // //                 {activeTab === section.key && (
// // //                   <p className="mt-2 text-gray-600">{section.content}</p>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div> */}
// // //           {/* Accordion */}
// // // <div className="space-y-4">
// // //   {[
// // //     { key: "client", label: "Client", content: project.client },
// // //     { key: "challenge", label: "Challenge", content: project.challenge },
// // //     { key: "solutions", label: "Solutions", content: project.solutions },
// // //   ].map((section) => (
// // //     <div key={section.key} className="border-b pb-3">
// // //       <button
// // //         className="flex justify-between items-center w-full font-semibold text-lg"
// // //         onClick={() =>
// // //           setActiveTab(activeTab === section.key ? "" : section.key)
// // //         }
// // //       >
// // //         <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// // //           {section.label}
// // //         </span>
// // //         <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// // //           {activeTab === section.key ? "▲" : "▼"}
// // //         </span>
// // //       </button>
// // //       {activeTab === section.key && (
// // //         <p className="mt-2 text-gray-600">{section.content}</p>
// // //       )}
// // //     </div>
// // //   ))}
// // // </div>


// // //           {/* Back Button */}
// // //           <button
// // //             onClick={() => navigate("/portfolio")}
// // //             className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
// // //             ← Back to Portfolio
// // //           </button>
// // //         </div>

// // //         {/* Right Side - Large Stacked Images */}
// // //         <div className="w-full h-full">
// // //           {project.images.map((img, idx) => (
// // //             <img
// // //               key={idx}
// // //               src={img}
// // //               alt={`${project.title} ${idx}`}
// // //               className="w-full h-[90vh] object-cover"
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default PortfolioDetail;



// // // import React from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import portfolioProjects from "../../data/portfolioData";

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   visible: (delay = 0) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.8, delay },
// // //   }),
// // // };

// // // const PortfolioDetail = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const project = portfolioProjects.find((p) => p.id === parseInt(id));

// // //   if (!project) {
// // //     return (
// // //       <div className="p-10 text-center text-gray-600">
// // //         Project not found.
// // //         <button
// // //           onClick={() => navigate("/portfolio")}
// // //           className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
// // //         >
// // //           Back to Portfolio
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   const renderCinematicImages = (startIndex = 0, count = 4) => {
// // //     const imgs = project.images.slice(startIndex, startIndex + count);
// // //     return imgs.map((img, idx) => {
// // //       if (idx === 0 || idx === 3) {
// // //         return (
// // //           <motion.img
// // //             key={idx}
// // //             src={img}
// // //             alt={`${project.title} ${idx}`}
// // //             className="w-full h-[80vh] object-cover"
// // //             initial={{ opacity: 0 }}
// // //             whileInView={{ opacity: 1 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.8, delay: idx * 0.2 }}
// // //           />
// // //         );
// // //       } else {
// // //         return (
// // //           <div key={idx} className="flex w-full">
// // //             {imgs.slice(1, 3).map((img2, i2) => (
// // //               <motion.img
// // //                 key={i2}
// // //                 src={img2}
// // //                 alt={`${project.title} ${i2 + 1}`}
// // //                 className="w-1/2 h-[60vh] object-cover"
// // //                 initial={{ opacity: 0 }}
// // //                 whileInView={{ opacity: 1 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.8, delay: (i2 + 1) * 0.2 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         );
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <section className="bg-white text-black">
// // //       {/* ================= HERO SECTION ================= */}
// // //       <div className="relative h-[90vh] w-full overflow-hidden">
// // //         <motion.img
// // //           src={project.images?.[0]}
// // //           alt={project.title}
// // //           className="w-full h-full object-cover"
// // //           initial={{ scale: 1.1 }}
// // //           animate={{ scale: 1 }}
// // //           transition={{ duration: 1.5 }}
// // //         />
// // //         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
// // //           <motion.p
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="visible"
// // //             custom={0.2}
// // //             className="uppercase tracking-widest text-sm md:text-base"
// // //           >
// // //             {project.category}
// // //           </motion.p>
// // //           <motion.h1
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="visible"
// // //             custom={0.4}
// // //             className="text-4xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-[#E32225] via-white to-[#E32225] bg-clip-text text-transparent"
// // //           >
// // //             {project.title}
// // //           </motion.h1>
// // //         </div>
// // //       </div>

// // //       {/* ================= DESCRIPTION SECTION ================= */}
// // //       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
// // //         {/* ↑↑ ADJUST LEFT/RIGHT SPACING HERE ↑↑
// // //             - Change px-8 / md:px-16 / lg:px-24 to control horizontal padding.
// // //             Example:
// // //               • Smaller space → px-6 md:px-12
// // //               • More space → px-12 md:px-20
// // //         */}

// // //         {/* LEFT COLUMN */}
// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           className="space-y-10 pl-2 lg:pl-10"
// // //         >
// // //           {/* ↑↑ ADJUST LEFT SIDE SPACE HERE ↑↑
// // //               - Change pl-2 lg:pl-10 → for more/less left indentation.
// // //               Example:
// // //                 • More left space → pl-4 lg:pl-16
// // //                 • Less space → pl-0 lg:pl-6
// // //           */}

// // //           {/* Project Title */}
// // //           <h2 className="text-6xl md:text-5xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
// // //             {project.title}
// // //           </h2>

// // //           {/* Subtitle */}
// // //           <p className="text-xl md:text-2xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
// // //             {project.subtitleLines?.[0] || "Full Brand Identity Package"}
// // //           </p>

// // //           {/* Tags */}
// // //           <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
// // //             {project.tags?.map((tag, idx) => (
// // //               <span key={idx} className="capitalize">
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           {/* On the Job Section */}
// // //           <div className="pt-10">
// // //             <h4 className="text-lg uppercase mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
// // //               On the Job
// // //             </h4>
// // //             <div className="flex items-center gap-4">
// // //               <img
// // //                 src="https://picsum.photos/seed/profile/100/100"
// // //                 alt={project.name}
// // //                 className="w-20 h-20 rounded-full object-cover"
// // //               />
// // //               <div>
// // //                 <p className="text-lg bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
// // //                   {project.name}
// // //                 </p>
// // //                 <p className="text-gray-600">Designer</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* RIGHT COLUMN */}
// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           className="text-gray-700 text-lg md:text-xl leading-relaxed"
// // //         >
// // //           {project.description}
// // //         </motion.div>
// // //       </div>

// // //       {/* ================= CINEMATIC IMAGE LAYOUTS ================= */}
// // //       <div className="max-w-[1600px] mx-auto">
// // //         {renderCinematicImages(0, 4)}

// // //         {/* Goals Section */}
// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
// // //         >
// // //           <p>{project.goals}</p>
// // //         </motion.div>

// // //         {renderCinematicImages(4, 4)}

// // //         {/* Row of 4 Images */}
// // //         <div className="flex flex-wrap w-full">
// // //           {project.images.slice(8, 12).map((img, idx) => (
// // //             <motion.img
// // //               key={idx}
// // //               src={img}
// // //               alt={`${project.title} row ${idx}`}
// // //               className="w-1/4 h-[50vh] object-cover"
// // //               initial={{ opacity: 0 }}
// // //               whileInView={{ opacity: 1 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.8, delay: idx * 0.2 }}
// // //             />
// // //           ))}
// // //         </div>

// // //         {/* Text Block */}
// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
// // //         >
// // //           <p>{project.textBlock}</p>
// // //         </motion.div>

// // //         {/* Final 4-image cinematic layout */}
// // //         {renderCinematicImages(12, 1)}
// // //       </div>

// // //       {/* ================= BACK BUTTON ================= */}
// // //       <div className="text-center py-20">
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           transition={{ duration: 0.3 }}
// // //           onClick={() => navigate("/portfolio")}
// // //           className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/40 transition"
// // //         >
// // //           ← Back to Portfolio
// // //         </motion.button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default PortfolioDetail;

// // import React from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import portfolioProjects from "../../data/portfolioData";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: (delay = 0) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, delay },
// //   }),
// // };

// // const PortfolioDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const project = portfolioProjects.find((p) => p.id === parseInt(id));

// //   if (!project) {
// //     return (
// //       <div className="p-10 text-center text-gray-600">
// //         Project not found.
// //         <button
// //           onClick={() => navigate("/portfolio")}
// //           className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
// //         >
// //           Back to Portfolio
// //         </button>
// //       </div>
// //     );
// //   }

// //   const renderImage = (src, key, height = "auto") => (
// //     <motion.img
// //       key={key}
// //       src={src}
// //       alt={`${project.title}-${key}`}
// //       className={`w-full object-contain ${height !== "auto" ? `h-[${height}]` : ""}`}
// //       initial={{ opacity: 0 }}
// //       whileInView={{ opacity: 1 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.8 }}
// //       style={{ margin: "12px 0" }}
// //     />
// //   );

// //   const renderTwoImages = (src1, src2, key) => (
// //     <div key={key} className="flex w-full gap-2 px-4 md:px-10">
// //       {[src1, src2].map((src, i) => (
// //         <motion.img
// //           key={i}
// //           src={src}
// //           alt={`${project.title}-${key}-${i}`}
// //           className="w-1/2 object-contain"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, delay: i * 0.2 }}
// //         />
// //       ))}
// //     </div>
// //   );

// //   const renderFourImages = (startIndex) => (
// //     <div key={startIndex} className="flex flex-wrap w-full px-4 md:px-10 gap-2">
// //       {project.images.slice(startIndex, startIndex + 4).map((img, idx) => (
// //         <motion.img
// //           key={idx}
// //           src={img}
// //           alt={`${project.title}-grid-${idx}`}
// //           className="w-1/4 object-contain"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, delay: idx * 0.2 }}
// //         />
// //       ))}
// //     </div>
// //   );

// //   return (
// //     <section className="bg-white text-black">
// //       {/* ================= HERO SECTION ================= */}
// //       <div className="relative h-[75vh] w-full overflow-hidden">
// //         <motion.img
// //           src={project.images?.[0]}
// //           alt={project.title}
// //           className="w-full h-full object-cover"
// //           initial={{ scale: 1.1 }}
// //           animate={{ scale: 1 }}
// //           transition={{ duration: 1.5 }}
// //         />
// //         <div className="absolute inset-0 bg-white/30 flex flex-col justify-center items-center text-center px-4">
// //           <motion.p
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="visible"
// //             custom={0.2}
// //             className="uppercase tracking-widest text-sm md:text-base text-white drop-shadow"
// //           >
// //             {project.category}
// //           </motion.p>
// //           <motion.h1
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="visible"
// //             custom={0.4}
// //             className="text-4xl md:text-6xl font-bold mt-2 text-white drop-shadow"
// //           >
// //             {project.title}
// //           </motion.h1>
// //         </div>
// //       </div>

// //       {/* ================= INFO SECTION ================= */}
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
// //         {/* LEFT */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="space-y-6"
// //         >
// //           <h2 className="text-5xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// //             {project.title}
// //           </h2>
// //           <p className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// //             {project.subtitle || "Full Brand Identity Package"}
// //           </p>
// //           <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// //             {project.tags?.map((tag, idx) => (
// //               <span key={idx}>{tag}</span>
// //             ))}
// //           </div>

// //           <div className="pt-8">
// //             <h4 className="text-lg uppercase mb-3 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// //               On the Job
// //             </h4>
// //             <div className="flex items-center gap-4">
// //               <img
// //                 src={project.person?.image}
// //                 alt={project.person?.name}
// //                 className="w-20 h-20 rounded-full object-cover"
// //               />
// //               <div>
// //                 <p className="text-lg font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
// //                   {project.person?.name}
// //                 </p>
// //                 <p className="text-gray-600">{project.person?.role}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="text-gray-700 text-lg md:text-xl leading-relaxed"
// //         >
// //           {project.description}
// //         </motion.div>
// //       </div>

// //       {/* ================= IMAGES SEQUENCE ================= */}
// //       <div className="max-w-[1600px] mx-auto space-y-4">
// //         {renderImage(project.images[1], 1)}
// //         {renderImage(project.images[2], 2)}
// //         {renderTwoImages(project.images[3], project.images[4], "row3")}
// //         {renderTwoImages(project.images[5], project.images[6], "row4")}
// //         {renderImage(project.images[7], 7)}

// //         {/* 5a = Goals */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="px-6 md:px-10 py-16 max-w-5xl mx-auto text-gray-800 text-lg md:text-xl leading-relaxed"
// //         >
// //           <p>{project.goals}</p>
// //         </motion.div>

// //         {renderImage(project.images[8], 8)}
// //         {renderTwoImages(project.images[9], project.images[10], "row7")}
// //         {renderTwoImages(project.images[11], project.images[12], "row8")}
        
// //         {/* 8a = Text Block */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="px-6 md:px-10 py-16 max-w-5xl mx-auto text-gray-800 text-lg md:text-xl leading-relaxed"
// //         >
// //           <p>{project.textBlock}</p>
// //         </motion.div>

// //         {renderImage(project.images[13], 13)}
// //         {renderFourImages(14)}
// //         {renderImage(project.images[18 - 1], 18)}
// //       </div>

// //       {/* ================= BACK BUTTON ================= */}
// //       <div className="text-center py-20">
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           transition={{ duration: 0.3 }}
// //           onClick={() => navigate("/portfolio")}
// //           className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/40 transition"
// //         >
// //           ← Back to Portfolio
// //         </motion.button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PortfolioDetail;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import portfolioProjects from "../../data/portfolioData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay },
//   }),
// };

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = portfolioProjects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-gray-600">
//         Project not found.
//         <button
//           onClick={() => navigate("/portfolio")}
//           className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   const imgs = project.images || [];
//   const get = (i) => imgs[i] ?? "";

//   return (
//     <section className="bg-white text-black overflow-x-hidden">

//       {/* HERO - full bleed, overlay, white text, 80vh */}
//       <div className="w-full relative bg-white px-0">
//         <motion.img
//           src={get(0)}
//           alt={`${project.title} hero`}
//           className="w-full h-[85vh] object-contain block"
//           initial={{ scale: 1.02 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//           loading="eager"
//         />

//         {/* overlay + centered text */}
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//           <div className="w-full text-center">
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.12}
//               className="uppercase tracking-wider text-sm md:text-base text-white"
//             >
//               {project.category}
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.3}
//               className="mt-4 text-3xl md:text-5xl font-extrabold text-white"
//             >
//               {project.title}
//             </motion.h1>
//           </div>
//         </div>

//         {/* subtle dark overlay to keep white text readable */}
//         <div className="absolute inset-0 bg-black/25 pointer-events-none" />
//       </div>

//       {/* //       {/* ================= INFO SECTION ================= */}
//        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//          {/* LEFT */}
//          <motion.div
//            variants={fadeUp}
//            initial="hidden"
//            whileInView="visible"
//            viewport={{ once: true }}
//            className="space-y-6"
//         >
//           <h2 className="text-4xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.title}
//           </h2>
//           <p className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.subtitle || "Full Brand Identity Package"}
//           </p>
//           <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.tags?.map((tag, idx) => (
//               <span key={idx}>{tag}</span>
//             ))}
//           </div>
//           <div className="pt-8">
//             <h4 className="text-lg uppercase mb-3 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                On the Job
//              </h4>
//              <div className="flex items-center gap-4">
//                <img
//                  src={project.person?.image}
//                  alt={project.person?.name}
//                  className="w-20 h-20 rounded-full object-cover"
//                />
//                <div>
//                 <p className="text-lg font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                    {project.person?.name}
//                  </p>
//                  <p className="text-gray-600">{project.person?.role}</p>
//                </div>
//              </div>
//            </div>
//         </motion.div>

//          {/* RIGHT */}
//          <motion.div
//            variants={fadeUp}
//            initial="hidden"
//            whileInView="visible"
//            viewport={{ once: true }}
//            className="text-gray-700 text-lg md:text-xl leading-relaxed"
//          >
//            {project.description}
//          </motion.div> 
//       </div> 

//       {/* NOW THE FIXED PATTERN LAYOUT WITH ZERO HORIZONTAL PADDING & ZERO GAPS */}
//       <div className="w-full px-0">

//         {/* Row 2: images[1] full width (single - 100vh) */}
//         {get(1) && (
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <motion.img
//               src={get(1)}
//               alt={`${project.title} 2`}
//               className="w-full  object-contain block"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               loading="lazy"
//             />
//           </motion.div>
//         )}

//         {/* Row 3: images[2], images[3] side-by-side (each 50% width, 100vh height) */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(2) && (
//             <motion.img
//               src={get(2)}
//               alt={`${project.title} 3a`}
//               className="w-full  object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(3) && (
//             <motion.img
//               src={get(3)}
//               alt={`${project.title} 3b`}
//               className="w-full  object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 4: images[4], images[5] side-by-side (each 50% width, 100vh) */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(4) && (
//             <motion.img
//               src={get(4)}
//               alt={`${project.title} 4a`}
//               className="w-full  object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(5) && (
//             <motion.img
//               src={get(5)}
//               alt={`${project.title} 4b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 5: images[6] full width (single - 100vh) */}
//         {get(6) && (
//           <motion.img
//             src={get(6)}
//             alt={`${project.title} 5`}
//             className="w-full  object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* 5a: Goals section (from portfolioData.goals) - left aligned block, centered container width */}
//         {project.goals && (
//           <div className="w-full bg-white">
//             <div className="mx-auto max-w-[760px] px-6 py-10">
//               <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
//                 {project.goals}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Row 6: images[7] full width (single - 100vh) */}
//         {get(7) && (
//           <motion.img
//             src={get(7)}
//             alt={`${project.title} 6`}
//             className="w-full  object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* Row 7: images[8], images[9] side-by-side (each 50% width, 100vh) */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(8) && (
//             <motion.img
//               src={get(8)}
//               alt={`${project.title} 7a`}
//               className="w-full  object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(9) && (
//             <motion.img
//               src={get(9)}
//               alt={`${project.title} 7b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 8: images[10], images[11] side-by-side (each 50% width, 100vh) */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(10) && (
//             <motion.img
//               src={get(10)}
//               alt={`${project.title} 8a`}
//               className="w-full  object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(11) && (
//             <motion.img
//               src={get(11)}
//               alt={`${project.title} 8b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* 8a: textBlock section from portfolioData (left aligned inside centered container, black #111111) */}
//         {project.textBlock && (
//           <div className="w-full bg-white">
//             <div className="mx-auto max-w-[760px] px-6 py-10">
//               <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
//                 {project.textBlock}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Row 9: images[12] full width (single - 100vh) */}
//         {get(12) && (
//           <motion.img
//             src={get(12)}
//             alt={`${project.title} 9`}
//             className="w-full  object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* Row 10: images[13]..images[16] — 4 in one row, each 25% width and 100vh height */}
//         <div className="w-full grid grid-cols-4 gap-0">
//           {Array.from({ length: 4 }).map((_, idx) => {
//             const index = 13 + idx;
//             return (
//               get(index) && (
//                 <motion.img
//                   key={index}
//                   src={get(index)}
//                   alt={`${project.title} grid ${index}`}
//                   className="w-full  object-contain"
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: idx * 0.04 }}
//                   loading="lazy"
//                 />
//               )
//             );
//           })}
//         </div>

//         {/* Row 11: images[17] final full width (single - 100vh) */}
//         {get(17) && (
//           <motion.img
//             src={get(17)}
//             alt={`${project.title} final`}
//             className="w-full object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//       </div>

//       {/* BACK BUTTON */}
//       <div className="w-full text-center py-10">
//         <motion.button
//           whileHover={{ scale: 1.04 }}
//           transition={{ duration: 0.25 }}
//           onClick={() => navigate("/portfolio")}
//           className="inline-block px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md transition"
//         >
//           ← Back to Portfolio
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import portfolioProjects from "../../data/portfolioData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay },
//   }),
// };

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = portfolioProjects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-gray-600">
//         Project not found.
//         <button
//           onClick={() => navigate("/portfolio")}
//           className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   const imgs = project.images || [];
//   const get = (i) => imgs[i] ?? "";

//   return (
//     <section className="bg-white text-black overflow-x-hidden">

//       {/* HERO SECTION */}
//       <div className="w-full relative bg-white px-0">
//         <motion.img
//           src={get(0)}
//           alt={`${project.title} hero`}
//           className="w-full h-[100vh] object-cover block"
//           initial={{ scale: 1.02 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//           loading="eager"
//         />

//         {/* Overlay + Centered Text */}
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//           <div className="w-full text-center">
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.12}
//               className="uppercase tracking-wider text-sm md:text-base text-white"
//             >
//               {project.category}
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.3}
//               className="mt-4 text-3xl md:text-5xl font-extrabold text-white"
//             >
//               {project.title}
//             </motion.h1>
//           </div>
//         </div>

//         {/* Subtle dark overlay */}
//         <div className="absolute inset-0 bg-black/25 pointer-events-none" />
//       </div>

//       {/* INFO SECTION */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT SIDE */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-4xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.title}
//           </h2>
//           <p className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.subtitle || "Full Brand Identity Package"}
//           </p>
//           <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             {project.tags?.map((tag, idx) => (
//               <span key={idx}>{tag}</span>
//             ))}
//           </div>

//           <div className="pt-8">
//             <h4 className="text-lg uppercase mb-3 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               On the Job
//             </h4>
//             <div className="flex items-center gap-4">
//               <img
//                 src={project.person?.image}
//                 alt={project.person?.name}
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                   {project.person?.name}
//                 </p>
//                 <p className="text-gray-600">{project.person?.role}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-gray-700 text-lg md:text-xl leading-relaxed pr-6 md:pr-12"
//         >
//           {project.description}
//         </motion.div>
//       </div>

//       {/* IMAGE GRID SECTION */}
//       <div className="w-full px-0">

//         {/* Row 2 */}
//         {get(1) && (
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <motion.img
//               src={get(1)}
//               alt={`${project.title} 2`}
//               className="w-full object-contain block"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               loading="lazy"
//             />
//           </motion.div>
//         )}

//         {/* Row 3 */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(2) && (
//             <motion.img
//               src={get(2)}
//               alt={`${project.title} 3a`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(3) && (
//             <motion.img
//               src={get(3)}
//               alt={`${project.title} 3b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 4 */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(4) && (
//             <motion.img
//               src={get(4)}
//               alt={`${project.title} 4a`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(5) && (
//             <motion.img
//               src={get(5)}
//               alt={`${project.title} 4b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 5 */}
//         {get(6) && (
//           <motion.img
//             src={get(6)}
//             alt={`${project.title} 5`}
//             className="w-full object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* Goals Section */}
//         {project.goals && (
//           <div className="w-full bg-white">
//             <div className="mx-auto max-w-[760px] px-6 py-10">
//               <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
//                 {project.goals}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Row 6 */}
//         {get(7) && (
//           <motion.img
//             src={get(7)}
//             alt={`${project.title} 6`}
//             className="w-full object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* Row 7 */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(8) && (
//             <motion.img
//               src={get(8)}
//               alt={`${project.title} 7a`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(9) && (
//             <motion.img
//               src={get(9)}
//               alt={`${project.title} 7b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Row 8 */}
//         <div className="w-full grid grid-cols-2 gap-0">
//           {get(10) && (
//             <motion.img
//               src={get(10)}
//               alt={`${project.title} 8a`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               loading="lazy"
//             />
//           )}
//           {get(11) && (
//             <motion.img
//               src={get(11)}
//               alt={`${project.title} 8b`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.08 }}
//               loading="lazy"
//             />
//           )}
//         </div>

//         {/* Text Block */}
//         {project.textBlock && (
//           <div className="w-full bg-white">
//             <div className="mx-auto max-w-[760px] px-6 py-10">
//               <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
//                 {project.textBlock}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Row 9 */}
//         {get(12) && (
//           <motion.img
//             src={get(12)}
//             alt={`${project.title} 9`}
//             className="w-full object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}

//         {/* Row 10 */}
//         <div className="w-full grid grid-cols-4 gap-0">
//           {Array.from({ length: 4 }).map((_, idx) => {
//             const index = 13 + idx;
//             return (
//               get(index) && (
//                 <motion.img
//                   key={index}
//                   src={get(index)}
//                   alt={`${project.title} grid ${index}`}
//                   className="w-full object-contain"
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: idx * 0.04 }}
//                   loading="lazy"
//                 />
//               )
//             );
//           })}
//         </div>

//         {/* Row 11 */}
//         {get(17) && (
//           <motion.img
//             src={get(17)}
//             alt={`${project.title} final`}
//             className="w-full object-contain"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             loading="lazy"
//           />
//         )}
//       </div>

//       {/* BACK BUTTON */}
//       <div className="w-full text-center py-10">
//         <motion.button
//           whileHover={{ scale: 1.04 }}
//           transition={{ duration: 0.25 }}
//           onClick={() => navigate("/portfolio")}
//           className="inline-block px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md transition"
//         >
//           ← Back to Portfolio
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import portfolioProjects from "../../data/portfolioData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay },
//   }),
// };

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = portfolioProjects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-gray-600">
//         Project not found.
//         <button
//           onClick={() => navigate("/portfolio")}
//           className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   const imgs = project.images || [];
//   const get = (i) => imgs[i] ?? "";

//   return (
//     <section className="bg-white text-black overflow-x-hidden">

//       {/* HERO SECTION */}
//       <div className="w-full relative bg-white px-0">
//         <motion.img
//           src={get(0)}
//           alt={`${project.title} hero`}
//           className="w-full h-[100vh] object-cover block"
//           initial={{ scale: 1.02 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//           loading="eager"
//         />

//         {/* Overlay + Centered Text */}
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//           <div className="w-full text-center">
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.12}
//               className="uppercase tracking-wider text-sm md:text-base text-white"
//             >
//               {project.category}
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0.3}
//               className="mt-4 text-3xl md:text-5xl font-extrabold text-white"
//             >
//               {project.title}
//             </motion.h1>
//           </div>
//         </div>

//         {/* Subtle dark overlay */}
//         <div className="absolute inset-0 bg-black/25 pointer-events-none" />
//       </div>

//       {/* INFO SECTION */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT SIDE */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-4xl font-extrabold text-black">
//             {project.title}
//           </h2>
//           <p className="text-xl font-semibold text-gray-800">
//             {project.subtitle || "Full Brand Identity Package"}
//           </p>
//           <div className="flex flex-wrap gap-4 text-lg font-medium text-gray-700">
//             {project.tags?.map((tag, idx) => (
//               <span key={idx}>{tag}</span>
//             ))}
//           </div>

//           <div className="pt-8">
//             <h4 className="text-lg uppercase mb-3 text-gray-800">
//               On the Job
//             </h4>
//             <div className="flex items-center gap-4">
//               <img
//                 src={project.person?.image}
//                 alt={project.person?.name}
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-semibold text-black">
//                   {project.person?.name}
//                 </p>
//                 <p className="text-gray-600">{project.person?.role}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-gray-700 text-lg md:text-xl leading-relaxed pr-6 md:pr-12"
//         >
//           {project.description}
//         </motion.div>
//       </div>

//       {/* IMAGE GRID SECTION */}
//       <div className="w-full px-0">
//         {/* Row 2 */}
//         {get(1) && (
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <motion.img
//               src={get(1)}
//               alt={`${project.title} 2`}
//               className="w-full object-contain block"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               loading="lazy"
//             />
//           </motion.div>
//         )}

//         {/* Repeated rows */}
//         {[ [2,3], [4,5], [8,9], [10,11] ].map((pair, i) => (
//           <div key={i} className="w-full grid grid-cols-2 gap-0">
//             {pair.map((index, j) =>
//               get(index) ? (
//                 <motion.img
//                   key={index}
//                   src={get(index)}
//                   alt={`${project.title} grid ${index}`}
//                   className="w-full object-contain"
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: j * 0.05 }}
//                   loading="lazy"
//                 />
//               ) : null
//             )}
//           </div>
//         ))}

//         {/* Single rows */}
//         {[6, 7, 12, 17].map((i) =>
//           get(i) ? (
//             <motion.img
//               key={i}
//               src={get(i)}
//               alt={`${project.title} ${i}`}
//               className="w-full object-contain"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               loading="lazy"
//             />
//           ) : null
//         )}

//         {/* Goals Section */}
//         {project.goals && (
//           <div className="w-full bg-white">
//             <div className="mx-auto max-w-[760px] px-6 py-10">
//               <p className="text-lg leading-relaxed text-gray-800">
//                 {project.goals}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* 4-column grid */}
//         <div className="w-full grid grid-cols-4 gap-0">
//           {Array.from({ length: 4 }).map((_, idx) => {
//             const index = 13 + idx;
//             return (
//               get(index) && (
//                 <motion.img
//                   key={index}
//                   src={get(index)}
//                   alt={`${project.title} grid ${index}`}
//                   className="w-full object-contain"
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: idx * 0.04 }}
//                   loading="lazy"
//                 />
//               )
//             );
//           })}
//         </div>
//       </div>

//       {/* BACK BUTTON */}
//       <div className="w-full text-center py-10">
//         <motion.button
//           whileHover={{ scale: 1.04 }}
//           transition={{ duration: 0.25 }}
//           onClick={() => navigate("/portfolio")}
//           className="inline-block px-8 py-3 bg-[#E32225] text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition"
//         >
//           ← Back to Portfolio
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioProjects from "../../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-600">
        Project not found.
        <button
          onClick={() => navigate("/portfolio")}
          className="ml-4 px-4 py-2 bg-[#E32225] text-white rounded-lg hover:bg-red-700 transition"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  const imgs = project.images || [];
  const get = (i) => imgs[i] ?? "";

  return (
    <section className="bg-white text-black overflow-x-hidden">

      {/* HERO SECTION */}
<div className="w-full relative bg-white px-0">
  <motion.img
    src={get(0)}
    alt={`${project.title} hero`}
    className="w-full h-[100vh] object-cover block"
    initial={{ scale: 1.02 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2 }}
    loading="eager"
  />

  {/* Overlay + Bottom Left Text */}
  <div className="absolute inset-0 flex items-end justify-start">
    <div className="p-10 md:p-20 text-left">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.12}
        className="uppercase tracking-wider text-sm md:text-base text-white"
      >
        {project.category}
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mt-3 text-5xl md:text-7xl font-extrabold text-white"
      >
        {project.title}
      </motion.h1>
    </div>
  </div>

  {/* Subtle dark overlay */}
  {/* <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}
</div>


      {/* INFO SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            {project.title}
          </h2>
          <p className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            {project.subtitle || "Full Brand Identity Package"}
          </p>
          <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            {project.tags?.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>

          <div className="pt-8">
            <h4 className="text-lg uppercase mb-3 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
              On the Job
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={project.person?.image}
                alt={project.person?.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
                  {project.person?.name}
                </p>
                <p className="text-gray-600">{project.person?.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed pr-6 md:pr-12"
        >
          {project.description}
        </motion.div>
      </div>

      {/* IMAGE GRID SECTION */}
      <div className="w-full px-0">

        {/* Row 2 */}
        {get(1) && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.img
              src={get(1)}
              alt={`${project.title} 2`}
              className="w-full object-contain block"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              loading="lazy"
            />
          </motion.div>
        )}

        {/* Row 3 */}
        <div className="w-full grid grid-cols-2 gap-0">
          {get(2) && (
            <motion.img
              src={get(2)}
              alt={`${project.title} 3a`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              loading="lazy"
            />
          )}
          {get(3) && (
            <motion.img
              src={get(3)}
              alt={`${project.title} 3b`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              loading="lazy"
            />
          )}
        </div>

        {/* Row 4 */}
        <div className="w-full grid grid-cols-2 gap-0">
          {get(4) && (
            <motion.img
              src={get(4)}
              alt={`${project.title} 4a`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              loading="lazy"
            />
          )}
          {get(5) && (
            <motion.img
              src={get(5)}
              alt={`${project.title} 4b`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              loading="lazy"
            />
          )}
        </div>

        {/* Row 5 */}
        {get(6) && (
          <motion.img
            src={get(6)}
            alt={`${project.title} 5`}
            className="w-full object-contain"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />
        )}

        {/* Goals Section */}
        {project.goals && (
          <div className="w-full bg-white">
            <div className="mx-auto max-w-[760px] px-6 py-10">
              <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
                {project.goals}
              </p>
            </div>
          </div>
        )}

        {/* Row 6 */}
        {get(7) && (
          <motion.img
            src={get(7)}
            alt={`${project.title} 6`}
            className="w-full object-contain"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />
        )}

        {/* Row 7 */}
        <div className="w-full grid grid-cols-2 gap-0">
          {get(8) && (
            <motion.img
              src={get(8)}
              alt={`${project.title} 7a`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              loading="lazy"
            />
          )}
          {get(9) && (
            <motion.img
              src={get(9)}
              alt={`${project.title} 7b`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              loading="lazy"
            />
          )}
        </div>

        {/* Row 8 */}
        <div className="w-full grid grid-cols-2 gap-0">
          {get(10) && (
            <motion.img
              src={get(10)}
              alt={`${project.title} 8a`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              loading="lazy"
            />
          )}
          {get(11) && (
            <motion.img
              src={get(11)}
              alt={`${project.title} 8b`}
              className="w-full object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              loading="lazy"
            />
          )}
        </div>

        {/* Text Block */}
        {project.textBlock && (
          <div className="w-full bg-white">
            <div className="mx-auto max-w-[760px] px-6 py-10">
              <p style={{ color: "#111111" }} className="text-lg leading-relaxed">
                {project.textBlock}
              </p>
            </div>
          </div>
        )}

        {/* Row 9 */}
        {get(12) && (
          <motion.img
            src={get(12)}
            alt={`${project.title} 9`}
            className="w-full object-contain"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />
        )}

        {/* Row 10 */}
        <div className="w-full grid grid-cols-4 gap-0">
          {Array.from({ length: 4 }).map((_, idx) => {
            const index = 13 + idx;
            return (
              get(index) && (
                <motion.img
                  key={index}
                  src={get(index)}
                  alt={`${project.title} grid ${index}`}
                  className="w-full object-contain"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.04 }}
                  loading="lazy"
                />
              )
            );
          })}
        </div>

        {/* Row 11 */}
        {get(17) && (
          <motion.img
            src={get(17)}
            alt={`${project.title} final`}
            className="w-full object-contain"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />
        )}
      </div>

      {/* BACK BUTTON */}
      <div className="w-full text-center py-10">
        <motion.button
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          onClick={() => navigate("/portfolio")}
          className="inline-block px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md transition"
        >
          ← Back to Portfolio
        </motion.button>
      </div>
    </section>
  );
};

export default PortfolioDetail;
