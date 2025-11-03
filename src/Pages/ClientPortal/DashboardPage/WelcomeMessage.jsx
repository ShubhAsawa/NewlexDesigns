import React from "react";
import PhaseTag from "./ui/PhaseTag";

const WelcomeMessage = ({ name, projectStatus }) => {
  return (
    <div className="-mt-[100px]">
      {/* Load Orbitron font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap"
        rel="stylesheet"
      />

      <section className="relative h-[calc(100vh+100px)] w-full flex flex-col justify-center items-center text-center pt-[100px] text-white bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1b1b29] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-[#E32225]/50 via-[#8B0000]/30 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-[#E32225]/40 via-[#8B0000]/20 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>

        {/* Status Tag - Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20">
          {projectStatus && <PhaseTag phase={projectStatus} />}
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 w-full max-w-5xl px-4">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 animate-textGlow"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow:
                "0 0 3px rgba(255, 255, 255, 0.6), 0 0 8px rgba(227, 34, 37, 0.6)",
              animation: "glowText 2s ease-in-out infinite alternate",
            }}
          >
            Welcome back{" "}
            <span
              className="bg-gradient-to-r from-[#E32225] to-[#FFD700] bg-clip-text text-transparent"
              style={{
                textShadow:
                  "0 0 3px rgba(255,255,255,0.7), 0 0 8px rgba(227,34,37,0.6)",
              }}
            >
              {name}
            </span>
            !
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-medium">
            We're honored to be part of your journey. As your technology
            partner,{" "}
            <span className="text-[#E32225] font-semibold">Seyreon</span>{" "}
            provides clear visibility, reliable support, and access to all key
            resources — so you're always in sync with your project’s success.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[black] z-10 pointer-events-none"></div>
      </section>

      {/* Embedded Keyframes */}
      <style>{`
        @keyframes glowText {
          0% {
            text-shadow: 0 0 2px #fff, 0 0 6px #E32225;
          }
          100% {
            text-shadow: 0 0 4px #fff, 0 0 12px #E32225;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeMessage;
