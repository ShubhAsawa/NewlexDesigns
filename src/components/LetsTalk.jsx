// // LetsTalk.jsx
// import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const LetsTalk = () => {
//   const [cursorPos, setCursorPos] = useState(null); // null = show original position
//   const sectionRef = useRef(null);

//   // original position (above the K)
//   const originalPos = { x: "100%", y: "-20%" };

//   useEffect(() => {
//     const section = sectionRef.current;

//     const handleMouseMove = (e) => {
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       setCursorPos({ x, y });
//     };

//     const handleMouseLeave = () => {
//       setCursorPos(null); // back to original
//     };

//     section.addEventListener("mousemove", handleMouseMove);
//     section.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       section.removeEventListener("mousemove", handleMouseMove);
//       section.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black text-white flex flex-col items-center justify-center py-20 relative overflow-hidden"
//     >
//       {/* Badge as Link */}
//       <Link
//         to="/contact"
//         className="absolute bg-green-400 text-black font-semibold text-sm md:text-base px-4 py-1 rounded-full shadow-lg z-0 cursor-pointer"
//         style={{
//           left: cursorPos ? `${cursorPos.x}px` : originalPos.x,
//           top: cursorPos ? `${cursorPos.y}px` : originalPos.y,
//           transform: cursorPos
//             ? "translate(-50%, -50%)"
//             : "translate(-50%, -50%) rotate(-10deg)",
//           transition: "all 0.4s ease-out",
//         }}
//       >
//         GET STARTED
//       </Link>

//       {/* Main Text */}
//       <h1 className="text-6xl md:text-8xl font-extrabold flex items-center justify-center gap-2 relative z-10">
//         LET’S
//         <span className="relative inline-block w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mx-2">
//           <img
//             src="https://via.placeholder.com/300x300.png"
//             alt="talk"
//             className="w-full h-full object-cover"
//           />
//         </span>
//         TALK!
//       </h1>

//       {/* Subtext */}
//       <p className="text-lg mt-6 text-center text-gray-200 z-10">
//         The right strategy starts with a hello.
//       </p>
//     </section>
//   );
// };

// export default LetsTalk;

// LetsTalk.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  const [cursorPos, setCursorPos] = useState(null); // null = original position
  const sectionRef = useRef(null);
  const kRef = useRef(null); // reference for the "K"
  const [originalPos, setOriginalPos] = useState({ x: 0, y: 0 });

  // calculate original position above K
  useEffect(() => {
    if (kRef.current) {
      const rect = kRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      setOriginalPos({
        x: rect.left - sectionRect.left + rect.width / 2,
        y: rect.top - sectionRect.top - 30, // adjust vertical offset above K
      });
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPos({ x, y });
    };

    const handleMouseLeave = () => {
      setCursorPos(null); // back to original
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-white flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Badge as Link */}
      <Link
        to="/contact"
        className="absolute bg-yellow-400 text-white font-semibold text-sm md:text-base px-4 py-1 rounded-full shadow-lg z-0 cursor-pointer"
        style={{
          left: (cursorPos ? cursorPos.x : originalPos.x) + "px",
          top: (cursorPos ? cursorPos.y : originalPos.y) + "px",
          transform: cursorPos
            ? "translate(-50%, -50%)"
            : "translate(-50%, -50%) rotate(-10deg)",
          transition: "all 0.4s ease-out",
        }}
      >
        GET STARTED
      </Link>

      {/* Main Text */}
      <h1 className="text-6xl md:text-8xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex items-center justify-center gap-2 relative z-10">
        LET’S
        <span className="relative inline-block w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mx-2">
          <img
            src="/footer.png"
            alt="talk"
            className="w-full h-full object-cover"
          />
        </span>
        Tal
        <span ref={kRef}>K</span>!
      </h1>

      {/* Subtext */}
      <p className="text-lg mt-6 text-red-400 text-center text-gray-200 z-10">
        The right strategy starts with a hello.
      </p>
    </section>
  );
};

export default LetsTalk;
