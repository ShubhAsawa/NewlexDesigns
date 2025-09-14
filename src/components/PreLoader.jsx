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


import { useEffect, useState } from "react";

export default function PreLoader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 700);
    }, 4000); // 4s scan effect

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated scanning lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-600/10 to-transparent animate-[scan_2s_linear_infinite]" />
      </div>

      {/* Logo with glow */}
      <img
        src="/Preloader.png"
        alt="NewlexDesigns Logo"
        className="w-64 h-auto animate-pulse drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
      />

      <style>
        {`
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>
    </div>
  );
}
