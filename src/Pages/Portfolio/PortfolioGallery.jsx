// // src/Pages/Portfolio/PortfolioGallery.jsx
// import React from "react";

// const images = [
//   "https://picsum.photos/400/400?random=7",
//   "https://picsum.photos/400/400?random=8",
//   "https://picsum.photos/400/400?random=9",
//   "https://picsum.photos/400/400?random=10",
//   "https://picsum.photos/400/400?random=11",
//   "https://picsum.photos/400/400?random=12",
//   "https://picsum.photos/400/400?random=13",
//   "https://picsum.photos/400/400?random=14",
// ];

// const PortfolioGallery = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 bg-white">
//       <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
//         Gallery Showcase
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
//           >
//             <img
//               src={src}
//               alt={`Portfolio work ${index + 1}`}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortfolioGallery;

// src/Pages/Portfolio/PortfolioGallery.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/600/400?random=7",
  "https://picsum.photos/500/600?random=8",
  "https://picsum.photos/400/500?random=9",
  "https://picsum.photos/700/400?random=10",
  "https://picsum.photos/600/600?random=11",
  "https://picsum.photos/400/400?random=12",
  "https://picsum.photos/500/500?random=13",
  "https://picsum.photos/600/500?random=14",
];

const PortfolioGallery = () => {
  const [visibleIndexes, setVisibleIndexes] = useState(images.map(() => true));
  const [popupImage, setPopupImage] = useState(null); // state for popup

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes((prev) =>
        prev.map(() => Math.random() > 0.5) // randomly toggle visibility
      );
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-16 bg-white overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
        Gallery Showcase
      </h2>

      <div className="columns-2 md:columns-4 gap-6 space-y-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer"
            style={{ breakInside: "avoid" }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: visibleIndexes[index] ? 1 : 0.3 }}
            transition={{ duration: 1 }}
          >
            <img
              src={src}
              alt={`Portfolio work ${index + 1}`}
              className="w-full object-cover  transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <button
                onClick={() => setPopupImage(src)}
                className="px-4 py-2 bg-gradient-to-br from-[#E32225] to-black text-white rounded-lg font-semibold"
              >
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setPopupImage(null)}
        >
          <motion.img
            src={popupImage}
            alt="Popup"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
