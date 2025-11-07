// import React from "react";

// const Servicetext = () => {
//   return (
//     <div className="bg-white text-black w-full">
//       {/* -------- SECTION 1 -------- */}
//       <section className="relative flex items-center justify-center min-h-screen px-6">
//         {/* Floating Images (edges only) */}
//         <div className="absolute left-10 bottom-32 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
//           <img
//             src="/Servicetext/image1.png"
//             alt="Jumping Man"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute left-20 top-1/4 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
//           <img
//             src="/Servicetext/image2.png"
//             alt="Girl in Sports"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute top-10 left-1/2 -translate-x-1/2 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
//           <img
//             src="/Servicetext/image3.png"
//             alt="Basketball Player"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute right-20 top-1/4 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
//           <img
//             src="/Servicetext/image4.png"
//             alt="Chef Cooking"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute right-10 bottom-32 w-44 h-56 rounded-lg overflow-hidden shadow-lg z-0">
//           <img
//             src="/Servicetext/image5.png"
//             alt="Two Women with Sunglasses"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Bottom Middle Text */}
//         <div className="absolute bottom-16 z-10 w-full flex flex-col items-center text-center px-6">
//           <h1 className="text-4xl md:text-6xl font-bold leading-snug bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             NewlexDesigns 
//           </h1>

//           <p className="mt-4 text-base md:text-xl font-medium text-black max-w-3xl">
//             With more than 100+ direct connections to celebrity talent agencies,
//             premium influencer representation companies, as well as mid-tier and
//             micro creator networks.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Servicetext;

// // src/Pages/Service/Servicetext.jsx
// import React, { useEffect, useState } from "react";
// import { motion, useAnimationFrame } from "framer-motion";

// const TOTAL_IMAGES = 15;
// const IMAGE_PATH = "/Servicetext/image"; // image1.png → image15.png

// const Servicetext = () => {
//   const [rotation, setRotation] = useState(0);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState(1);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [scrollTimeout, setScrollTimeout] = useState(null);

//   // 🌀 Handle scroll direction and rotation change
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const direction = currentY > lastScrollY ? 1 : -1;
//       setScrollDirection(direction);
//       setLastScrollY(currentY);
//       setIsScrolling(true);

//       if (scrollTimeout) clearTimeout(scrollTimeout);
//       setScrollTimeout(setTimeout(() => setIsScrolling(false), 200));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, scrollTimeout]);

//   // ⚙️ Continuous slow rotation + scroll boost
//   useAnimationFrame(() => {
//     setRotation((prev) => prev + (isScrolling ? scrollDirection * 0.6 : 0.1)); // idle: 0.1, scrolling: faster 0.6
//   });

//   const radius = 480;
//   const imageWidth = 200;
//   const imageHeight = 240;

//   const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
//     const angle = (i / TOTAL_IMAGES) * 2 * Math.PI;
//     const x = radius * Math.cos(angle);
//     const y = radius * Math.sin(angle);
//     return { id: i + 1, x, y };
//   });

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-[250vh] bg-gradient-to-br from-white to-gray-100 overflow-hidden text-black">
//       {/* Background Glow */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-[800px] h-[800px] bg-gradient-to-br from-[#E32225]/25 to-black/15 blur-3xl rounded-full" />
//       </div>

//       {/* Sticky Viewport */}
//       <div className="sticky top-0 flex items-center justify-center h-screen w-full perspective-[2000px]">
//         {/* Rotating Orbit */}
//         <motion.div
//           className="relative w-[1100px] h-[1100px]"
//           style={{
//             transformStyle: "preserve-3d",
//             rotateX: "15deg",
//           }}
//           animate={{ rotate: rotation }}
//           transition={{
//             duration: 0.4,
//             ease: "easeOut",
//           }}
//         >
//           {images.map((img) => (
//             <motion.div
//               key={img.id}
//               className="absolute rounded-2xl overflow-hidden shadow-2xl bg-white group"
//               style={{
//                 width: `${imageWidth}px`,
//                 height: `${imageHeight}px`,
//                 left: `calc(50% + ${img.x}px - ${imageWidth / 2}px)`,
//                 top: `calc(50% + ${img.y}px - ${imageHeight / 2}px)`,
//                 transform: `translateZ(${Math.sin(img.id) * 80}px)`,
//               }}
//               whileHover={{ scale: 1.12, rotate: 3 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="relative w-full h-full">
//                 <img
//                   src={`${IMAGE_PATH}${img.id}.png`}
//                   alt={`image${img.id}`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 {/* Glow Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 {/* Reflection Highlight */}
//                 <div className="absolute -top-10 left-0 w-full h-[50%] bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500" />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Center Text */}
//         <div className="absolute text-center px-6 max-w-2xl">
//           <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent leading-tight drop-shadow-sm">
//             NewlexDesigns
//           </h1>
//           <p className="mt-6 text-gray-700 text-lg sm:text-xl font-medium">
//             Where creativity orbits innovation — connecting brands, creators, and design excellence.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Servicetext;

/// src/Pages/Service/Servicetext.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const TOTAL_IMAGES = 15;
const IMAGE_PATH = "/Servicetext/image"; // image1.png → image15.png

const Servicetext = () => {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  // Responsive sizes (update based on screen width)
  const [radius, setRadius] = useState(480);
  const [imageSize, setImageSize] = useState({ width: 200, height: 240 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w < 480) {
        setRadius(180);
        setImageSize({ width: 90, height: 110 });
      } else if (w < 768) {
        setRadius(250);
        setImageSize({ width: 120, height: 150 });
      } else if (w < 1024) {
        setRadius(360);
        setImageSize({ width: 160, height: 190 });
      } else {
        setRadius(480);
        setImageSize({ width: 200, height: 240 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll detection for direction and idle control
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY ? 1 : -1;
      setScrollDirection(direction);
      setLastScrollY(currentY);
      setIsScrolling(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => setIsScrolling(false), 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollTimeout]);

  // Continuous idle rotation + scroll influence
  useAnimationFrame(() => {
    setRotation((prev) => prev + (isScrolling ? scrollDirection * 0.6 : 0.1));
  });

  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
    const angle = (i / TOTAL_IMAGES) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { id: i + 1, x, y };
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[250vh] bg-gradient-to-br from-white to-gray-100 overflow-hidden text-black">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90vw] max-w-[800px] aspect-square bg-gradient-to-br from-[#E32225]/25 to-black/15 blur-3xl rounded-full" />
      </div>

      {/* Sticky Orbit Section */}
      <div className="sticky top-0 flex items-center justify-center h-screen w-full perspective-[2000px]">
        {/* Orbiting Images */}
        <motion.div
          className="relative"
          style={{
            width: `${radius * 2.5}px`,
            height: `${radius * 2.5}px`,
            transformStyle: "preserve-3d",
            rotateX: "15deg",
          }}
          animate={{ rotate: rotation }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="absolute rounded-2xl overflow-hidden shadow-2xl bg-white group"
              style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
                left: `calc(50% + ${img.x}px - ${imageSize.width / 2}px)`,
                top: `calc(50% + ${img.y}px - ${imageSize.height / 2}px)`,
                transform: `translateZ(${Math.sin(img.id) * 80}px)`,
              }}
              whileHover={{ scale: 1.12, rotate: 3 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={`${IMAGE_PATH}${img.id}.png`}
                  alt={`image${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 left-0 w-full h-[50%] bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center Text */}
        <motion.div
          className="absolute text-center px-6 max-w-2xl"
          animate={{
            opacity: [1, 0.8, 1],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent leading-tight drop-shadow-sm">
            NewlexDesigns
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg md:text-xl font-medium">
            Where creativity orbits innovation — connecting brands, creators, and design excellence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicetext;
