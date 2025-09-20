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

// src/Pages/Portfolio/PortfolioDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioProjects from "../../data/portfolioData";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("client");

  const project = portfolioProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-600">
        Project not found.
        <button
          onClick={() => navigate("/portfolio")}
          className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <section className="bg-white text-black">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] max-w-[1600px] mx-auto">
        
        {/* Left Side - Text */}
        <div className="px-6 md:px-12 lg:px-16 py-20">
          {/* Category */}
          <p className="text-gray-500 text-sm mb-3">{project.category}</p>

          {/* Title */}
          <h1 className="text-3xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent md:text-5xl font-bold mb-6 leading-snug">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1  bg-gray-200 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-10">{project.description}</p>

          {/* Accordion */}
          {/* <div className="space-y-4">
            {[
              { key: "client", label: "Client", content: project.client },
              { key: "challenge", label: "Challenge", content: project.challenge },
              { key: "solutions", label: "Solutions", content: project.solutions },
            ].map((section) => (
              <div key={section.key} className="border-b pb-3">
                <button
                  className="flex justify-between items-center w-full font-semibold text-lg"
                  onClick={() =>
                    setActiveTab(activeTab === section.key ? "" : section.key)
                  }
                >
                  {section.label}
                  <span>{activeTab === section.key ? "▲" : "▼"}</span>
                </button>
                {activeTab === section.key && (
                  <p className="mt-2 text-gray-600">{section.content}</p>
                )}
              </div>
            ))}
          </div> */}
          {/* Accordion */}
<div className="space-y-4">
  {[
    { key: "client", label: "Client", content: project.client },
    { key: "challenge", label: "Challenge", content: project.challenge },
    { key: "solutions", label: "Solutions", content: project.solutions },
  ].map((section) => (
    <div key={section.key} className="border-b pb-3">
      <button
        className="flex justify-between items-center w-full font-semibold text-lg"
        onClick={() =>
          setActiveTab(activeTab === section.key ? "" : section.key)
        }
      >
        <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
          {section.label}
        </span>
        <span className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
          {activeTab === section.key ? "▲" : "▼"}
        </span>
      </button>
      {activeTab === section.key && (
        <p className="mt-2 text-gray-600">{section.content}</p>
      )}
    </div>
  ))}
</div>


          {/* Back Button */}
          <button
            onClick={() => navigate("/portfolio")}
            className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
            ← Back to Portfolio
          </button>
        </div>

        {/* Right Side - Large Stacked Images */}
        <div className="w-full h-full">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx}`}
              className="w-full h-[90vh] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;



