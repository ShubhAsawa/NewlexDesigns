// // src/components/PreLoader.jsx
// import { useEffect, useState } from "react";

// export default function PreLoader({ onFinish }) {
//   const [fadeOut, setFadeOut] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Animate fake progress (0 → 100 in 5s)
//     let start = Date.now();
//     const duration = 5000;

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const percent = Math.min((elapsed / duration) * 100, 100);
//       setProgress(percent);

//       if (percent === 100) {
//         clearInterval(interval);
//         setFadeOut(true);
//         setTimeout(() => onFinish(), 700);
//       }
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onFinish]);

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
//         fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <style>
//         {`
//           .tagline {
//             font-family: 'Orbitron', sans-serif;
//             font-weight: 800;
//             letter-spacing: 3px;
//             text-transform: uppercase;
//             color: #fff;
//           }
//         `}
//       </style>

//       {/* Bigger Logo */}
//       <img
//         src="/Preloader.png"
//         alt="NewlexDesigns Logo"
//         className="w-72 h-auto mb-10"
//       />

//       {/* Bigger Tagline */}
//       <p className="tagline text-4xl md:text-5xl mb-12">Just Say It</p>

//       {/* Sleek Progress Bar */}
//       <div className="w-96 h-3 bg-gray-800 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-purple-500 transition-all ease-linear"
//           style={{ width: `${progress}%`, transitionDuration: "50ms" }}
//         />
//       </div>
//     </div>
//   );
// }


// src/components/PreLoaderCircle.jsx
import { useEffect, useState } from "react";

export default function PreLoaderCircle({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // progress counter
    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // speed of progress

    // fade out after full load
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 700);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0f0f0f] z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <img
        src="/Preloader.png"
        alt="Logo"
        className="w-72 h-auto mb-10 drop-shadow-glow animate-pulse-slow"
      />

      {/* Futuristic Circular Loader */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="#333"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="#9b5de5"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 70}`}
            strokeDashoffset={`${
              2 * Math.PI * 70 - (percent / 100) * (2 * Math.PI * 70)
            }`}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        {/* Percent Text */}
        <div className="absolute text-center">
          <p className="text-4xl font-bold text-white">{percent}</p>
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            Percent
          </p>
        </div>
      </div>

      <p className="text-gray-400 uppercase tracking-widest text-sm mt-6 animate-pulse-slow">
        Loading...
      </p>

      <style>{`
        .drop-shadow-glow { filter: drop-shadow(0 0 20px #9b5de5); }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
      `}</style>
    </div>
  );
}
