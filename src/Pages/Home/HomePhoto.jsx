// src/components/HomePhoto.jsx
import React from "react";

export default function HomePhoto() {
  // Image paths from public folder (PNG format)
  const images = [
    "/HomeScrollImage/image1.png",
    "/HomeScrollImage/image2.png",
    "/HomeScrollImage/image3.png",
    "/HomeScrollImage/image4.png",
    "/HomeScrollImage/image5.png",
    "/HomeScrollImage/image6.png",
    "/HomeScrollImage/image7.png",
    "/HomeScrollImage/image8.png",
    "/HomeScrollImage/image9.png",
    "/HomeScrollImage/image10.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-10">
      {/* Inline styles for animation */}
      <style>{`
        .photo-row {
          width: 100%;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
        }
        .photo-track {
          display: flex;
          animation: scroll-left 25s linear infinite;
        }
        .scroll-right .photo-track {
          animation: scroll-right 25s linear infinite;
        }
        .photo-box {
          min-width: 200px;
          height: 250px;
          margin-right: 16px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo-box img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* ✅ PNGs stay transparent */
          border-radius: 12px;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Row 1 - scroll Right to Left */}
      <div className="photo-row">
        <div className="photo-track">
          {images.concat(images).map((src, i) => (
            <div key={`row1-${i}`} className="photo-box">
              <img src={src} alt={`scroll-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll Left to Right */}
      <div className="photo-row scroll-right mt-8">
        <div className="photo-track">
          {images.concat(images).map((src, i) => (
            <div key={`row2-${i}`} className="photo-box">
              <img src={src} alt={`scroll-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
