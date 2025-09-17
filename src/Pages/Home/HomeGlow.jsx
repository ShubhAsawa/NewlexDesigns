// src/components/HomeGlow.jsx
import React, { useEffect, useState } from "react";

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

  // state to track which index is glowing
  const [glowIndexRow1, setGlowIndexRow1] = useState(0);
  const [glowIndexRow2, setGlowIndexRow2] = useState(0);

  // random glow switch every 1.5s
  useEffect(() => {
    const interval1 = setInterval(() => {
      setGlowIndexRow1(Math.floor(Math.random() * imagesRow1.length));
    }, 1500);

    const interval2 = setInterval(() => {
      setGlowIndexRow2(Math.floor(Math.random() * imagesRow2.length));
    }, 1500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="w-full bg-white py-10">
      <style>{`
        .glow-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .glow-box {
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .glow-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        .blurred {
          filter: blur(3px) brightness(0.6);
          transform: scale(0.9);
        }
        .glowing {
          filter: none;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(227, 34, 37, 0.7); /* ✅ red brand glow */
        }
        /* Different sizes */
        .rect {
          width: 250px;
          height: 150px;
        }
        .square {
          width: 180px;
          height: 180px;
        }
        .tall {
          width: 160px;
          height: 220px;
        }
      `}</style>

      {/* Row 1 */}
      <div className="glow-row">
        {imagesRow1.map((src, i) => (
          <div
            key={i}
            className={`glow-box ${i % 2 === 0 ? "rect" : "square"} ${
              glowIndexRow1 === i ? "glowing" : "blurred"
            }`}
          >
            <img src={src} alt={`row1-${i}`} />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="glow-row">
        {imagesRow2.map((src, i) => (
          <div
            key={i}
            className={`glow-box ${i % 2 === 0 ? "tall" : "rect"} ${
              glowIndexRow2 === i ? "glowing" : "blurred"
            }`}
          >
            <img src={src} alt={`row2-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
