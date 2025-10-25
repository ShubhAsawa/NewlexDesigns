// // src/Pages/Portfolio/PortfolioDetails.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const projectData = {
//   1: {
//     title: "UI/UX Design Project",
//     description:
//       "A modern UI/UX design project with focus on user experience, clean design, and accessibility.",
//     img: "https://picsum.photos/800/500?random=21",
//   },
//   2: {
//     title: "Web Development Project",
//     description:
//       "A responsive web application built with React and Node.js, optimized for performance.",
//     img: "https://picsum.photos/800/500?random=22",
//   },
//   3: {
//     title: "Mobile App Project",
//     description:
//       "A cross-platform mobile app with React Native, featuring smooth animations and offline mode.",
//     img: "https://picsum.photos/800/500?random=23",
//   },
// };

// const PortfolioDetails = () => {
//   const { id } = useParams();
//   const project = projectData[id];

//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
//         <Link
//           to="/portfolio"
//           className="px-4 py-2 bg-red-600 text-white rounded-md"
//         >
//           Back to Portfolio
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-16 px-6 md:px-20 bg-white">
//       <img
//         src={project.img}
//         alt={project.title}
//         className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-10"
//       />
//       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
//       <p className="text-lg text-gray-700 mb-10">{project.description}</p>
//       <Link
//         to="/portfolio"
//         className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
//       >
//         ← Back to Portfolio
//       </Link>
//     </div>
//   );
// };

// export default PortfolioDetails;
// src/Pages/Portfolio/PortfolioDetails.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const projectData = {
//   1: {
//     title: "UI/UX Design Project",
//     description:
//       "A modern UI/UX design project with focus on user experience, clean design, and accessibility.",
//     images: [
//       "https://picsum.photos/800/500?random=21",
//       "https://picsum.photos/800/500?random=31",
//       "https://picsum.photos/800/500?random=41",
//     ],
//   },
//   2: {
//     title: "Web Development Project",
//     description:
//       "A responsive web application built with React and Node.js, optimized for performance.",
//     images: [
//       "https://picsum.photos/800/500?random=22",
//       "https://picsum.photos/800/500?random=32",
//     ],
//   },
//   3: {
//     title: "Mobile App Project",
//     description:
//       "A cross-platform mobile app with React Native, featuring smooth animations and offline mode.",
//     images: [
//       "https://picsum.photos/800/500?random=23",
//       "https://picsum.photos/800/500?random=33",
//       "https://picsum.photos/800/500?random=43",
//     ],
//   },
//   // add more projects for ids 4, 5, 6 if you want
// };

// const PortfolioDetails = () => {
//   const { id } = useParams();
//   const project = projectData[id];

//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
//         <Link
//           to="/portfolio"
//           className="px-4 py-2 bg-red-600 text-white rounded-md"
//         >
//           Back to Portfolio
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-16 px-6 md:px-20 bg-white">
//       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
//       <p className="text-lg text-gray-700 mb-10">{project.description}</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         {project.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`${project.title} ${idx + 1}`}
//             className="rounded-lg shadow-md"
//           />
//         ))}
//       </div>

//       <Link
//         to="/portfolio"
//         className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
//       >
//         ← Back to Portfolio
//       </Link>
//     </div>
//   );
// };

// export default PortfolioDetails;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const projectData = {
//   1: {
//     title: "AI Chatbot Project",
//     description: "A smart AI chatbot built using NLP and automation.",
//     images: [
//       "https://via.placeholder.com/800x400?text=AI+Chatbot+1",
//       "https://via.placeholder.com/800x400?text=AI+Chatbot+2",
//       "https://via.placeholder.com/800x400?text=AI+Chatbot+3",
//     ],
//   },
//   2: {
//     title: "E-commerce Website",
//     description: "Full-stack e-commerce website with payment gateway.",
//     images: [
//       "https://via.placeholder.com/800x400?text=Ecommerce+1",
//       "https://via.placeholder.com/800x400?text=Ecommerce+2",
//       "https://via.placeholder.com/800x400?text=Ecommerce+3",
//     ],
//   },
//   // ✅ Add more projects here later
// };

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const project = projectData[id];

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         <h2>Project not found</h2>
//         <button
//           onClick={() => navigate(-1)}
//           className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
//         >
//           Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0e0e0e] text-white px-6 py-12">
//       {/* Project Title */}
//       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

//       {/* Project Description */}
//       <p className="mb-8 text-lg">{project.description}</p>

//       {/* Project Images */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {project.images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Project ${index + 1}`}
//             className="rounded-xl shadow-lg"
//           />
//         ))}
//       </div>

//       {/* Back Button */}
//       <div className="mt-10">
//         <button
//           onClick={() => navigate(-1)}
//           className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
//         >
//           ⬅ Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PortfolioDetail;

// src/Pages/Portfolio/PortfolioDetail.jsx
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import portfolioProjects from "../../data/portfolioData";

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const project = portfolioProjects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return <div className="p-10 text-center">Project not found.</div>;
//   }

//   return (
//     <section className="py-16 px-6 md:px-20">
//       <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

//       {/* Images */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {project.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`${project.title} ${idx + 1}`}
//             className="rounded-lg shadow-md"
//           />
//         ))}
//       </div>

//       {/* Description */}
//       <p className="text-lg text-gray-700 mb-8">{project.description}</p>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
//       >
//         Back
//       </button>
//     </section>
//   );
// };

// // src/Pages/Portfolio/PortfolioDetail.jsx
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import portfolioProjects from "../../data/portfolioData";

// const PortfolioDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("client");

//   const project = portfolioProjects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-gray-600">
//         Project not found.
//         <button
//           onClick={() => navigate("/portfolio")}
//           className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white text-black">
//       <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] max-w-[1600px] mx-auto">
        
//         {/* Left Side - Text */}
//         <div className="px-6 md:px-12 lg:px-16 py-20">
//           {/* Category */}
//           <p className="text-gray-500 text-sm mb-3">{project.category}</p>

//           {/* Title */}
//           <h1 className="text-3xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent md:text-5xl font-bold mb-6 leading-snug">
//             {project.title}
//           </h1>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-3 mb-8">
//             {project.tags.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className="px-4 py-1  bg-gray-200 text-gray-700 text-sm rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 mb-10">{project.description}</p>

//           {/* Accordion */}
//           {/* <div className="space-y-4">
//             {[
//               { key: "client", label: "Client", content: project.client },
//               { key: "challenge", label: "Challenge", content: project.challenge },
//               { key: "solutions", label: "Solutions", content: project.solutions },
//             ].map((section) => (
//               <div key={section.key} className="border-b pb-3">
//                 <button
//                   className="flex justify-between items-center w-full font-semibold text-lg"
//                   onClick={() =>
//                     setActiveTab(activeTab === section.key ? "" : section.key)
//                   }
//                 >
//                   {section.label}
//                   <span>{activeTab === section.key ? "▲" : "▼"}</span>
//                 </button>
//                 {activeTab === section.key && (
//                   <p className="mt-2 text-gray-600">{section.content}</p>
//                 )}
//               </div>
//             ))}
//           </div> */}
//           {/* Accordion */}
// <div className="space-y-4">
//   {[
//     { key: "client", label: "Client", content: project.client },
//     { key: "challenge", label: "Challenge", content: project.challenge },
//     { key: "solutions", label: "Solutions", content: project.solutions },
//   ].map((section) => (
//     <div key={section.key} className="border-b pb-3">
//       <button
//         className="flex justify-between items-center w-full font-semibold text-lg"
//         onClick={() =>
//           setActiveTab(activeTab === section.key ? "" : section.key)
//         }
//       >
//         <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           {section.label}
//         </span>
//         <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           {activeTab === section.key ? "▲" : "▼"}
//         </span>
//       </button>
//       {activeTab === section.key && (
//         <p className="mt-2 text-gray-600">{section.content}</p>
//       )}
//     </div>
//   ))}
// </div>


//           {/* Back Button */}
//           <button
//             onClick={() => navigate("/portfolio")}
//             className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
//             ← Back to Portfolio
//           </button>
//         </div>

//         {/* Right Side - Large Stacked Images */}
//         <div className="w-full h-full">
//           {project.images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`${project.title} ${idx}`}
//               className="w-full h-[90vh] object-cover"
//             />
//           ))}
//         </div>
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
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay },
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

//   return (
//     <section className="bg-white text-black">
//       {/* ================= HERO SECTION ================= */}
//       <div className="relative h-[90vh] w-full overflow-hidden">
//         <motion.img
//           src={project.images?.[0]}
//           alt={project.title}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//         />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             className="uppercase tracking-widest text-sm md:text-base"
//           >
//             {project.category}
//           </motion.p>
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.4}
//             className="text-4xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-[#E32225] via-white to-[#E32225] bg-clip-text text-transparent"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </div>

//       {/* ================= DESCRIPTION SECTION ================= */}
//       <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-lg md:text-xl text-gray-700 leading-relaxed text-center"
//         >
//           {project.description}
//         </motion.p>
//       </div>

//       {/* ================= DETAILS SECTIONS (CLIENT / CHALLENGE / SOLUTIONS) ================= */}
//       <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-24">
//         {[
//           { label: "Client", content: project.client, img: project.images?.[1] },
//           { label: "Challenge", content: project.challenge, img: project.images?.[2] },
//           { label: "Solutions", content: project.solutions, img: project.images?.[3] },
//         ].map((section, index) => (
//           <div
//             key={index}
//             className={`flex flex-col ${
//               index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//             } items-center gap-10`}
//           >
//             {/* Text Section */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="w-full lg:w-1/2 space-y-4"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-[#E32225] bg-clip-text text-transparent">
//                 {section.label}
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 {section.content}
//               </p>
//             </motion.div>

//             {/* Image Section */}
//             {section.img && (
//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={0.2}
//                 className="w-full lg:w-1/2"
//               >
//                 <img
//                   src={section.img}
//                   alt={section.label}
//                   className="w-full h-[70vh] object-cover rounded-2xl shadow-lg"
//                 />
//               </motion.div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* ================= BACK BUTTON ================= */}
//       <div className="text-center py-20">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           onClick={() => navigate("/portfolio")}
//           className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/40 transition"
//         >
//           ← Back to Portfolio
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;


// // src/Pages/Portfolio/PortfolioDetail.jsx
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import portfolioProjects from "../../data/portfolioData";

// /**
//  * PortfolioDetail.jsx
//  * - Fullscreen hero
//  * - Description
//  * - Client / Challenge / Solutions sections (alternating)
//  * - 13-image mixed layout (full-width, 2-column, text+image)
//  * - Framer Motion scroll/entry animations
//  * - NewLexDesigns colors & dramatic typography
//  */

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.85, delay },
//   }),
// };

// const imageFade = {
//   hidden: { opacity: 0, scale: 1.03 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
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

//   // Build 13 placeholder images using picsum.photos (distinct per project via seed)
//   const galleryImages = Array.from({ length: 13 }).map((_, i) => {
//     // Use large sizes for full-width quality
//     const width = 1600;
//     const height = 1000;
//     // seed for variety per project
//     const seed = project.id * 100 + i + 1;
//     return `https://picsum.photos/seed/${seed}/${width}/${height}`;
//   });

//   // We'll iterate galleryImages and render a mixed layout:
//   // pattern: (index % 4)
//   // 0 => full-width image
//   // 1 => two-column (image + next image) [consumes two images if possible]
//   // 2 => text + image section (text-left on even groups, right on odd)
//   // 3 => full-width image
//   // This ensures a natural mixed flow and consumes all 13 images.
//   const sections = [];
//   let idx = 0;
//   let toggleTextSide = false; // alternate text+image side

//   while (idx < galleryImages.length) {
//     const mod = idx % 4;
//     if (mod === 1 && idx + 1 < galleryImages.length) {
//       // two-column pair
//       sections.push({
//         type: "twoColumn",
//         images: [galleryImages[idx], galleryImages[idx + 1]],
//       });
//       idx += 2;
//     } else if (mod === 2) {
//       // text + image
//       sections.push({
//         type: "textImage",
//         image: galleryImages[idx],
//         side: toggleTextSide ? "left" : "right",
//         text: project.description, // reuse description (you can customize)
//       });
//       toggleTextSide = !toggleTextSide;
//       idx += 1;
//     } else {
//       // full-width image
//       sections.push({
//         type: "full",
//         image: galleryImages[idx],
//       });
//       idx += 1;
//     }
//   }

//   return (
//     <section className="bg-white text-black">
//       {/* HERO */}
//       <div className="relative h-[85vh] w-full overflow-hidden">
//         <motion.img
//           src={project.images?.[0] ?? galleryImages[0]}
//           alt={project.title}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.12 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         />

//         <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center text-center px-6">
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.15}
//             className="uppercase tracking-widest text-sm md:text-base text-gray-100"
//           >
//             {project.category}
//           </motion.p>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.35}
//             className="mt-4 font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E32225]"
//           >
//             {project.title}
//           </motion.h1>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.55}
//             className="mt-6 max-w-3xl text-center"
//           >
//             <p className="text-gray-200 text-base md:text-lg">
//               {project.tags?.join(" • ")}
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* DESCRIPTION */}
//       <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
//             {project.description}
//           </p>
//         </motion.div>
//       </div>

//       {/* CLIENT / CHALLENGE / SOLUTIONS */}
//       <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
//         {[
//           { label: "Client", content: project.client },
//           { label: "Challenge", content: project.challenge },
//           { label: "Solutions", content: project.solutions },
//         ].map((section, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className={`flex flex-col lg:flex-row items-start gap-8 ${
//               i % 2 === 1 ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             <div className="w-full lg:w-1/2">
//               <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E32225]">
//                 {section.label}
//               </h3>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 {section.content}
//               </p>
//             </div>

//             {/* show a supporting image if available from project.images, else placeholder */}
//             <div className="w-full lg:w-1/2">
//               <motion.img
//                 src={project.images?.[i + 1] ?? galleryImages[(i + 3) % galleryImages.length]}
//                 alt={`${project.title} - ${section.label}`}
//                 className="w-full h-[60vh] object-cover rounded-2xl shadow-lg"
//                 variants={imageFade}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* MIXED VISUAL STORY (13 images in mixed layout) */}
//       <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 space-y-20">
//         {sections.map((sec, sidx) => {
//           if (sec.type === "full") {
//             return (
//               <motion.div
//                 key={`full-${sidx}`}
//                 className="w-full"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <motion.img
//                   src={sec.image}
//                   alt={`visual-${sidx}`}
//                   className="w-full h-[80vh] object-cover rounded-sm"
//                   variants={imageFade}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 />
//               </motion.div>
//             );
//           }

//           if (sec.type === "twoColumn") {
//             return (
//               <motion.div
//                 key={`two-${sidx}`}
//                 className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <motion.img
//                   src={sec.images[0]}
//                   alt={`pair-${sidx}-a`}
//                   className="w-full h-[60vh] object-cover rounded-sm"
//                   variants={imageFade}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 />
//                 <motion.img
//                   src={sec.images[1]}
//                   alt={`pair-${sidx}-b`}
//                   className="w-full h-[60vh] object-cover rounded-sm"
//                   variants={imageFade}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 />
//               </motion.div>
//             );
//           }

//           // textImage
//           if (sec.type === "textImage") {
//             const isLeftText = sec.side === "left";
//             return (
//               <motion.div
//                 key={`ti-${sidx}`}
//                 className={`w-full flex flex-col lg:items-center gap-8 ${
//                   isLeftText ? "lg:flex-row" : "lg:flex-row-reverse"
//                 }`}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div className="w-full lg:w-1/2">
//                   <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E32225]">
//                     Story
//                   </h4>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {sec.text}
//                   </p>
//                 </div>

//                 <div className="w-full lg:w-1/2">
//                   <motion.img
//                     src={sec.image}
//                     alt={`textimage-${sidx}`}
//                     className="w-full h-[65vh] object-cover rounded-2xl shadow"
//                     variants={imageFade}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                   />
//                 </div>
//               </motion.div>
//             );
//           }

//           return null;
//         })}
//       </div>

//       {/* BACK BUTTON */}
//       <div className="text-center py-16">
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           transition={{ duration: 0.25 }}
//           onClick={() => navigate("/portfolio")}
//           className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/30 transition"
//         >
//           ← Back to Portfolio
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;


// // src/Pages/Portfolio/PortfolioDetail.jsx
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import portfolioProjects from "../../data/portfolioData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay },
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

//   const renderCinematicImages = (startIndex = 0, count = 4) => {
//     const imgs = project.images.slice(startIndex, startIndex + count);
//     return imgs.map((img, idx) => {
//       // cinematic layout pattern: full, half+half, full
//       if (idx === 0 || idx === 3) {
//         return (
//           <motion.img
//             key={idx}
//             src={img}
//             alt={`${project.title} ${idx}`}
//             className="w-full h-[80vh] object-cover"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: idx * 0.2 }}
//           />
//         );
//       } else {
//         // two half-width images side by side
//         return (
//           <div key={idx} className="flex w-full">
//             {imgs.slice(1, 3).map((img2, i2) => (
//               <motion.img
//                 key={i2}
//                 src={img2}
//                 alt={`${project.title} ${i2 + 1}`}
//                 className="w-1/2 h-[60vh] object-cover"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: (i2 + 1) * 0.2 }}
//               />
//             ))}
//           </div>
//         );
//       }
//     });
//   };

//   return (
//     <section className="bg-white text-black">
//       {/* ================= HERO SECTION ================= */}
//       <div className="relative h-[90vh] w-full overflow-hidden">
//         <motion.img
//           src={project.images?.[0]}
//           alt={project.title}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//         />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             className="uppercase tracking-widest text-sm md:text-base"
//           >
//             {project.category}
//           </motion.p>
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.4}
//             className="text-4xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-[#E32225] via-white to-[#E32225] bg-clip-text text-transparent"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </div>

//       {/* ================= DESCRIPTION SECTION ================= */}
//       <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-4"
//         >
//           {project.subtitleLines.map((line, idx) => (
//             <h2
//               key={idx}
//               className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black to-[#E32225] bg-clip-text text-transparent"
//             >
//               {line}
//             </h2>
//           ))}
//           <p className="text-gray-500 text-lg">{project.name}</p>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-gray-700 text-lg md:text-xl leading-relaxed"
//         >
//           {project.description}
//         </motion.div>
//       </div>

//       {/* ================= CINEMATIC IMAGE LAYOUTS ================= */}
//       <div className="max-w-[1600px] mx-auto">
//         {renderCinematicImages(0, 4)}

//         {/* Goals Section */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
//         >
//           {/* <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-[#E32225] bg-clip-text text-transparent">
//             Goals
//           </h2> */}
//           <p>{project.goals}</p>
//         </motion.div>

//         {renderCinematicImages(4, 4)}

//         {/* Row of 4 Images */}
//         <div className="flex flex-wrap w-full">
//           {project.images.slice(8, 12).map((img, idx) => (
//             <motion.img
//               key={idx}
//               src={img}
//               alt={`${project.title} row ${idx}`}
//               className="w-1/4 h-[50vh] object-cover"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: idx * 0.2 }}
//             />
//           ))}
//         </div>

//         {/* Text Block */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
//         >
//           <p>{project.textBlock}</p>
//         </motion.div>

//         {/* Final 4-image cinematic layout */}
//         {renderCinematicImages(12, 1)}
//       </div>

//       {/* ================= BACK BUTTON ================= */}
//       <div className="text-center py-20">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           onClick={() => navigate("/portfolio")}
//           className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/40 transition"
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
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
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

  const renderCinematicImages = (startIndex = 0, count = 4) => {
    const imgs = project.images.slice(startIndex, startIndex + count);
    return imgs.map((img, idx) => {
      if (idx === 0 || idx === 3) {
        return (
          <motion.img
            key={idx}
            src={img}
            alt={`${project.title} ${idx}`}
            className="w-full h-[80vh] object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          />
        );
      } else {
        return (
          <div key={idx} className="flex w-full">
            {imgs.slice(1, 3).map((img2, i2) => (
              <motion.img
                key={i2}
                src={img2}
                alt={`${project.title} ${i2 + 1}`}
                className="w-1/2 h-[60vh] object-cover"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i2 + 1) * 0.2 }}
              />
            ))}
          </div>
        );
      }
    });
  };

  return (
    <section className="bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <motion.img
          src={project.images?.[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="uppercase tracking-widest text-sm md:text-base"
          >
            {project.category}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-4xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-[#E32225] via-white to-[#E32225] bg-clip-text text-transparent"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* ================= DESCRIPTION SECTION ================= */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* ↑↑ ADJUST LEFT/RIGHT SPACING HERE ↑↑
            - Change px-8 / md:px-16 / lg:px-24 to control horizontal padding.
            Example:
              • Smaller space → px-6 md:px-12
              • More space → px-12 md:px-20
        */}

        {/* LEFT COLUMN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 pl-2 lg:pl-10"
        >
          {/* ↑↑ ADJUST LEFT SIDE SPACE HERE ↑↑
              - Change pl-2 lg:pl-10 → for more/less left indentation.
              Example:
                • More left space → pl-4 lg:pl-16
                • Less space → pl-0 lg:pl-6
          */}

          {/* Project Title */}
          <h2 className="text-6xl md:text-5xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
            {project.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
            {project.subtitleLines?.[0] || "Full Brand Identity Package"}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 text-lg font-medium bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
            {project.tags?.map((tag, idx) => (
              <span key={idx} className="capitalize">
                {tag}
              </span>
            ))}
          </div>

          {/* On the Job Section */}
          <div className="pt-10">
            <h4 className="text-lg uppercase mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
              On the Job
            </h4>
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/profile/100/100"
                alt={project.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex">
                  {project.name}
                </p>
                <p className="text-gray-600">Designer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          {project.description}
        </motion.div>
      </div>

      {/* ================= CINEMATIC IMAGE LAYOUTS ================= */}
      <div className="max-w-[1600px] mx-auto">
        {renderCinematicImages(0, 4)}

        {/* Goals Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          <p>{project.goals}</p>
        </motion.div>

        {renderCinematicImages(4, 4)}

        {/* Row of 4 Images */}
        <div className="flex flex-wrap w-full">
          {project.images.slice(8, 12).map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`${project.title} row ${idx}`}
              className="w-1/4 h-[50vh] object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            />
          ))}
        </div>

        {/* Text Block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          <p>{project.textBlock}</p>
        </motion.div>

        {/* Final 4-image cinematic layout */}
        {renderCinematicImages(12, 1)}
      </div>

      {/* ================= BACK BUTTON ================= */}
      <div className="text-center py-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/portfolio")}
          className="px-8 py-3 bg-gradient-to-r from-black to-[#E32225] text-white font-semibold rounded-full shadow-md hover:shadow-red-500/40 transition"
        >
          ← Back to Portfolio
        </motion.button>
      </div>
    </section>
  );
};

export default PortfolioDetail;
