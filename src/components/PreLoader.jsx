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
// import { useEffect, useState } from "react";

// export default function PreLoader({ onFinish }) {
//   const messages = [
//     "Welcome to NewLexDesigns",

// "Creativity starts right here",

// "Glad you’re visiting us today",

// "Design your future with us",

// "Let’s craft something amazing",

// "Your design journey begins now",

// "Innovation meets creativity",

// "Welcome aboard the design revolution",

// "Good to have you with us",

// "Where ideas turn into reality",

// "NewLexDesigns empowers your vision",

// "Together, we shape bold concepts",

// "Design made simple and impactful",

// "A warm welcome from our team",

// "Your brand, our passion",

// "Let’s bring your ideas to life",

// "Inspired designs for a modern world",

// "Thanks for stopping by NewLexDesigns",

// "Creativity unleashed, just for you",

// "Together, we design the extraordinary",
//   ];

//   const [typedText, setTypedText] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const [arcPath, setArcPath] = useState("");
//   const [fontSize, setFontSize] = useState(64);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//     let i = 0;

//     // --- Dynamic arc calculation ---
//     const textLength = randomMessage.length;
//     const arcWidth = 400 + textLength * 18;
//     const centerX = 600;
//     const leftX = centerX - arcWidth / 2;
//     const rightX = centerX + arcWidth / 2;
//     const d = `M ${leftX} 220 Q ${centerX} 0 ${rightX} 220`;  // ✅ fixed here
//     setArcPath(d);

//     // --- Dynamic font size ---
//     if (textLength < 20) {
//       setFontSize(72);
//     } else if (textLength < 35) {
//       setFontSize(64);
//     } else {
//       setFontSize(56);
//     }

//     // --- Typing effect ---
//     const typingInterval = setInterval(() => {
//       if (i < randomMessage.length) {
//         setTypedText(randomMessage.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 100);

//     const timer = setTimeout(() => {
//       setFadeOut(true);
//       setTimeout(() => onFinish(), 800);
//     }, 5000);

//     return () => {
//       clearInterval(typingInterval);
//       clearTimeout(timer);
//     };
//   }, [onFinish]);

//   // --- Mouse Parallax Effect ---
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth - 0.5) * 20; // rotate range (-10 to +10)
//       const y = (e.clientY / innerHeight - 0.5) * 20;
//       setRotation({ x: y, y: -x });
//     };

//     const handleMouseLeave = () => {
//       setRotation({ x: 0, y: 0 });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
//         fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       {/* Curved Floating & Pulsing Text */}
//       <svg viewBox="0 0 1200 300" className="w-full max-w-7xl h-64 mb-6">
//         <path id="curve" d={arcPath} fill="transparent" />
//         <text
//           fill="white"
//           fontSize={fontSize}
//           fontWeight="bold"
//           textAnchor="middle"
//           className="animate-floatGlow"
//         >
//           <textPath href="#curve" startOffset="50%">
//             {typedText}
//           </textPath>
//         </text>
//       </svg>

//       {/* CEO Cartoon Image with Parallax Tilt */}
//       <div
//         className="relative w-64 sm:w-80 md:w-[26rem] transition-transform duration-200 ease-out"
//         style={{
//           transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, // ✅ fixed here
//         }}
//       >
//         <img
//           src="/Full Logo.png"
//           alt="CEO Character"
//           className="w-full h-auto"
//         />
//         {/* Black gradient overlay at bottom */}
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red to-transparent"></div>
//       </div>

//       {/* Floating + Glow Animations */}
//       <style>
//         {`
//           @keyframes floatGlow {
//             0% {
//               transform: translateY(0px);
//               filter: drop-shadow(0 0 8px rgba(198, 193, 193, 0.8))
//                       drop-shadow(0 0 16px rgba(59,130,246,0.6));
//             }
//             50% {
//               transform: translateY(-10px);
//               filter: drop-shadow(0 0 16px rgba(251, 28, 28, 1))
//                       drop-shadow(0 0 32px rgba(220, 221, 222, 0.9));
//             }
//             100% {
//               transform: translateY(0px);
//               filter: drop-shadow(0 0 8px rgba(245, 50, 50, 0.8))
//                       drop-shadow(0 0 16px rgba(195, 197, 200, 0.6));
//             }
//           }
//           .animate-floatGlow {
//             animation: floatGlow 3.5s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// src/components/PreLoaderCircle.jsx
import { useEffect, useState } from "react";

export default function PreLoader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // --- Particle Setup ---
  useEffect(() => {
    const newParticles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.4,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let nx = p.x + p.dx;
          let ny = p.y + p.dy;
          if (nx < 0) nx = window.innerWidth;
          if (nx > window.innerWidth) nx = 0;
          if (ny < 0) ny = window.innerHeight;
          if (ny > window.innerHeight) ny = 0;
          return { ...p, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }, []);

  // --- Auto finish timer ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 900);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // --- Mouse Parallax ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setRotation({ x: y, y: -x });
    };
    const handleMouseLeave = () => setRotation({ x: 0, y: 0 });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(-45deg, #0a0a0a, #3b0000, #1b0000, #0a0a0a)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      {/* Particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((p, idx) => (
          <circle key={idx} cx={p.x} cy={p.y} r={p.size} fill="red" fillOpacity={p.opacity} />
        ))}
      </svg>

      {/* Centered Logo */}
      <div
        className="relative w-64 sm:w-80 md:w-[26rem] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <img
          src="/Full Logo.png"
          alt="Logo"
          className="w-full h-auto animate-logoFloat"
          style={{
            filter: "drop-shadow(0 0 30px red) drop-shadow(0 0 50px white)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red/60 to-transparent"></div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% {background-position:0% 50%}
            50% {background-position:100% 50%}
            100% {background-position:0% 50%}
          }

          @keyframes logoFloat {
            0%,100% {transform: translateY(0);}
            50% {transform: translateY(-18px);}
          }
          .animate-logoFloat {
            animation: logoFloat 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
