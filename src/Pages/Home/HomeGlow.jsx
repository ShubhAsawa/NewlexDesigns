// // src/components/HomeGlow.jsx
// import React, { useEffect, useState } from "react";

// export default function HomeGlow() {
//   const imagesRow1 = [
//     "/HomeGlowImage/image1.png",
//     "/HomeGlowImage/image2.png",
//     "/HomeGlowImage/image3.png",
//     "/HomeGlowImage/image4.png",
//   ];

//   const imagesRow2 = [
//     "/HomeGlowImage/image5.png",
//     "/HomeGlowImage/image6.png",
//     "/HomeGlowImage/image7.png",
//     "/HomeGlowImage/image8.png",
//   ];

//   // state to track which index is glowing
//   const [glowIndexRow1, setGlowIndexRow1] = useState(0);
//   const [glowIndexRow2, setGlowIndexRow2] = useState(0);

//   // random glow switch every 1.5s
//   useEffect(() => {
//     const interval1 = setInterval(() => {
//       setGlowIndexRow1(Math.floor(Math.random() * imagesRow1.length));
//     }, 1500);

//     const interval2 = setInterval(() => {
//       setGlowIndexRow2(Math.floor(Math.random() * imagesRow2.length));
//     }, 1500);

//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//     };
//   }, []);

//   return (
//     <div className="w-full bg-white py-10">
//       <style>{`
//         .glow-row {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-bottom: 40px;
//         }
//         .glow-box {
//           overflow: hidden;
//           border-radius: 16px;
//           transition: all 0.5s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .glow-box img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: all 0.5s ease;
//         }
//         .blurred {
//           filter: blur(3px) brightness(0.6);
//           transform: scale(0.9);
//         }
//         .glowing {
//           filter: none;
//           transform: scale(1.1);
//           box-shadow: 0 0 20px rgba(227, 34, 37, 0.7); /* ✅ red brand glow */
//         }
//         /* Different sizes */
//         .rect {
//           width: 250px;
//           height: 150px;
//         }
//         .square {
//           width: 180px;
//           height: 180px;
//         }
//         .tall {
//           width: 160px;
//           height: 220px;
//         }
//       `}</style>

//       {/* Row 1 */}
//       <div className="glow-row">
//         {imagesRow1.map((src, i) => (
//           <div
//             key={i}
//             className={`glow-box ${i % 2 === 0 ? "rect" : "square"} ${
//               glowIndexRow1 === i ? "glowing" : "blurred"
//             }`}
//           >
//             <img src={src} alt={`row1-${i}`} />
//           </div>
//         ))}
//       </div>

//       {/* Row 2 */}
//       <div className="glow-row">
//         {imagesRow2.map((src, i) => (
//           <div
//             key={i}
//             className={`glow-box ${i % 2 === 0 ? "tall" : "rect"} ${
//               glowIndexRow2 === i ? "glowing" : "blurred"
//             }`}
//           >
//             <img src={src} alt={`row2-${i}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/components/HomeGlow.jsx
import React, { useState } from "react";

export default function HomeGlow() {
  const imagesRow1 = [
    "/HomeGlowImage/image1.png",
    "/HomeGlowImage/image2.png",
    "/HomeGlowImage/image3.png",
    "/HomeGlowImage/image4.png",
  ];

  const imagesRow2 = [
    "/HomeGlowImage/image5.png",
    "/HomeGlowImage/image6.png",
    "/HomeGlowImage/image7.png",
    "/HomeGlowImage/image8.png",
  ];

  // track which index is hovered; use object { row: 1|2, idx: number } or null
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-white py-10">
      <style>{`
        .glow-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .glow-box {
          overflow: hidden;
          border-radius: 16px;
          transition: transform 260ms ease, filter 260ms ease, box-shadow 260ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          position: relative;
        }

        .glow-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* state when another item is hovered */
        .blurred-other {
          filter: blur(3px) brightness(0.6);
          transform: scale(0.95);
        }

        /* hovered/growing item */
        .glowing {
          filter: none;
          transform: scale(1.12);
          box-shadow: 0 10px 30px rgba(227, 34, 37, 0.35); /* red brand glow */
          z-index: 10;
        }

        /* Normal (no hover anywhere) - keep images clean and slightly elevated */
        .normal {
          transform: scale(1);
          filter: none;
        }

        /* Sizes (as requested) */
        .rect {
          width: 300px;
          height: 180px;
        }
        .square {
          width: 215px;
          height: 215px;
        }
        .tall {
          width: 190px;
          height: 260px;
        }

        /* Responsive fallback */
        @media (max-width: 720px) {
          .rect { width: 220px; height: 132px; }
          .square { width: 160px; height: 160px; }
          .tall { width: 140px; height: 192px; }
        }
      `}</style>

      {/* Row 1 */}
      <div className="glow-row" role="list" aria-label="row-1">
        {imagesRow1.map((src, i) => {
          const isHovered = hovered && hovered.row === 1 && hovered.idx === i;
          const isSomeHovered = hovered !== null;
          const className = `glow-box ${i % 2 === 0 ? "rect" : "square"} ${
            isHovered ? "glowing" : isSomeHovered ? "blurred-other" : "normal"
          }`;

          return (
            <div
              key={i}
              className={className}
              onMouseEnter={() => setHovered({ row: 1, idx: i })}
              onMouseLeave={() => setHovered(null)}
              role="listitem"
              aria-label={`row1-image-${i}`}
            >
              <img src={src} alt={`row1-${i}`} />
            </div>
          );
        })}
      </div>

      {/* Row 2 */}
      <div className="glow-row" role="list" aria-label="row-2">
        {imagesRow2.map((src, i) => {
          const isHovered = hovered && hovered.row === 2 && hovered.idx === i;
          const isSomeHovered = hovered !== null;
          const className = `glow-box ${i % 2 === 0 ? "tall" : "rect"} ${
            isHovered ? "glowing" : isSomeHovered ? "blurred-other" : "normal"
          }`;

          return (
            <div
              key={i}
              className={className}
              onMouseEnter={() => setHovered({ row: 2, idx: i })}
              onMouseLeave={() => setHovered(null)}
              role="listitem"
              aria-label={`row2-image-${i}`}
            >
              <img src={src} alt={`row2-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
