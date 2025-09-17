// // src/components/HomeBlow.jsx
// import React, { useEffect, useState } from "react";

// export default function HomeBlow() {
//   // 3 rows x 5 images each
//   const images = [
//     "/HomeBlowImage/image1.png",
//     "/HomeBlowImage/image2.png",
//     "/HomeBlowImage/image3.png",
//     "/HomeBlowImage/image4.png",
//     "/HomeBlowImage/image5.png",
//     "/HomeBlowImage/image6.png",
//     "/HomeBlowImage/image7.png",
//     "/HomeBlowImage/image8.png",
//     "/HomeBlowImage/image9.png",
//     "/HomeBlowImage/image10.png",
//     "/HomeBlowImage/image11.png",
//     "/HomeBlowImage/image12.png",
//     "/HomeBlowImage/image13.png",
//     "/HomeBlowImage/image14.png",
//     "/HomeBlowImage/image15.png",
//   ];

//   const rows = [images.slice(0, 5), images.slice(5, 10), images.slice(10, 15)];

//   // track which photo is in popup
//   const [activeImage, setActiveImage] = useState(null);

//   useEffect(() => {
//     let timeout;
//     let interval;

//     const startPopupCycle = () => {
//       interval = setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * images.length);
//         setActiveImage(images[randomIndex]);

//         // remove popup after 2s
//         timeout = setTimeout(() => {
//           setActiveImage(null);
//         }, 2000);
//       }, 3000); // 2s popup + 1s pause
//     };

//     startPopupCycle();

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <div className="w-full bg-white py-10 relative flex flex-col items-center">
//       <style>{`
//         .blow-row {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-bottom: 30px;
//         }
//         .blow-box {
//           width: 260px;
//           height: 200px;
//           border-radius: 12px;
//           overflow: hidden;
//           transition: all 0.5s ease;
//         }
//         .blow-box img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: blur(2px) brightness(0.7);
//           transition: all 0.5s ease;
//         }
//         .popup-img {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%) scale(1.2);
//           width: 400px;
//           height: 220px;
//           z-index: 50;
//           border-radius: 16px;
//           box-shadow: 0 0 30px rgba(227, 34, 37, 0.8); /* red glow */
//           animation: popupFade 2s ease forwards;
//         }
//         @keyframes popupFade {
//           0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
//           10% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
//           90% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
//           100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
//         }
//       `}</style>

//       {/* Rows of blurred images */}
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="blow-row">
//           {row.map((src, i) => (
//             <div key={i} className="blow-box">
//               <img src={src} alt={`row${rowIndex}-img${i}`} />
//             </div>
//           ))}
//         </div>
//       ))}

//       {/* Popup image */}
//       {activeImage && (
//         <img src={activeImage} alt="popup" className="popup-img" />
//       )}
//     </div>
//   );
// }

// src/components/HomeBlow.jsx
import { useEffect, useState } from "react";
import clsx from "clsx";

const imagePaths = Array.from({ length: 15 }, (_, i) => `/HomeBlowImage/image${i + 1}.png`);

export default function HomeBlow() {
  const [photos, setPhotos] = useState(imagePaths);
  const [activeIndex, setActiveIndex] = useState(null); // photo that pops up
  const [swapping, setSwapping] = useState([]); // track which photos are fading

  // 🔹 Random popup effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * photos.length);
      setActiveIndex(randomIndex);

      setTimeout(() => {
        setActiveIndex(null);
      }, 2000); // show for 2s
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, [photos]);

  // 🔹 Random swap effect
  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * photos.length);
      let j = Math.floor(Math.random() * photos.length);
      while (j === i) j = Math.floor(Math.random() * photos.length);

      setSwapping([i, j]);

      setTimeout(() => {
        const newPhotos = [...photos];
        [newPhotos[i], newPhotos[j]] = [newPhotos[j], newPhotos[i]];
        setPhotos(newPhotos);
        setSwapping([]);
      }, 200); // match fade duration
    }, 3000); // every 5s

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="bg-white text-black py-12">
      <div className="grid grid-rows-3 gap-6 p-8">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid grid-cols-5 gap-6">
            {photos.slice(row * 5, row * 5 + 5).map((src, idx) => {
              const globalIndex = row * 5 + idx;
              const isActive = activeIndex === globalIndex;
              const isSwapping = swapping.includes(globalIndex);

              return (
                <div
                  key={globalIndex}
                  className={clsx(
                    "transition-all duration-50 ease-in-out flex items-center justify-center",
                    isSwapping ? "opacity-0" : "opacity-100"
                  )}
                >
                  <img
                    src={src}
                    alt={`blow-${globalIndex}`}
                    className={clsx(
                      "w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-500 ease-in-out",
                      isActive
                        ? "scale-125 blur-0 z-10"
                        : "scale-100 blur-sm"
                    )}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
