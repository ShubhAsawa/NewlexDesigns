import React, { useEffect, useState } from "react";
import { Bot, Zap, CalendarClock, WandSparkles } from "lucide-react";
import { PhoneCall, BrainCog, Code, PlugZap } from "lucide-react";

const words = ["Agency", "Tool", "Platform", "Template"];
const changeInterval = 2000;

const HomeContent = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullParagraph = `We're not here to play buzzword bingo — we build real, working systems tailored to your business. From solopreneurs to scaling teams, we create solutions that automate growth, streamline operations, and scale with precision. With Seyreon, you're not just getting another AI tool — you're getting a system that works while you sleep, backed by logic, data, and results.`;

  const [processActiveIndex, setProcessActiveIndex] = useState(-1);

  const processSteps = [
    "Book a Call",
    "Consultation",
    "Development",
    "Integration",
  ];

  const stepDescriptions = [
    "Jump on a call and share what you're trying to automate or solve.",
    "We strategize and suggest the most efficient automation path.",
    "We build out your custom system with care and speed.",
    "We connect it to your tools, test, and deploy it live.",
  ];

  const stepIcons = [
    <PhoneCall className="w-9 h-9 text-yellow-400" />,
    <BrainCog className="w-9 h-9 text-yellow-400" />,
    <Code className="w-9 h-9 text-yellow-400" />,
    <PlugZap className="w-9 h-9 text-yellow-400" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, changeInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-different");
      if (!section || isTyping) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsTyping(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTyping]);

  useEffect(() => {
    if (!isTyping || typedText.length >= fullParagraph.length) return;

    const nextChar = fullParagraph.charAt(typedText.length);
    const timeout = setTimeout(
      () => {
        setTypedText((prev) => prev + nextChar);
      },
      nextChar === " " ? 25 : 45
    );

    return () => clearTimeout(timeout);
  }, [typedText, isTyping]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 100 &&
        rect.bottom > 100 &&
        processActiveIndex === -1
      ) {
        let i = 0;
        const interval = setInterval(() => {
          setProcessActiveIndex(i);
          i++;
          if (i > processSteps.length) clearInterval(interval);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [processActiveIndex]);

  return (
    <div className="bg-white text-black px-6 pb-20 pt-0 -mt-8">
      {/* SECTION 1: What is Seyreon */}
      <section className="max-w-6xl mx-auto pt-20 text-center">
        <h2
          id="what-is-seyreon"
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent animate-shimmer"
        >
          What is Seyreon?
        </h2>

        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
          We are <span className="text-black">not an AI</span>{" "}
          <span
            className={`inline-block transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-semibold`}
          >
            {words[currentWordIndex]}
          </span>{" "}
          company — we’re your automation partner.
        </h3>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Seyreon builds intelligent automation systems that work while you
          sleep — AI chatbots, voice assistants, CRMs, and custom workflows that
          scale your business without the manual grind. Whether it's lead gen,
          support, or engagement — we help you automate and dominate.
        </p>
      </section>

      {/* SECTION 2: Animated Service Overview */}
      <section className="max-w-7xl mx-auto mt-24 px-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent animate-shimmer">
          How We Help You Grow
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <Bot className="w-10 h-10 text-yellow-400 mx-auto mb-4" />,
            title: "AI Assistants",
            desc: "Smart bots that talk, listen, qualify leads, and support customers 24/7."
          }, {
            icon: <CalendarClock className="w-10 h-10 text-yellow-400 mx-auto mb-4" />,
            title: "Smart Scheduling",
            desc: "Let your users book calls instantly through integrated bots."
          }, {
            icon: <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />,
            title: "Automation Workflows",
            desc: "CRMs, Sheets, GHL, email — we connect it all to run on autopilot."
          }, {
            icon: <WandSparkles className="w-10 h-10 text-yellow-400 mx-auto mb-4" />,
            title: "Custom Systems",
            desc: "Need something unique? We design tailored automations from scratch."
          }].map((card, idx) => (
            <div
              key={idx}
              className="bg-black/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-red-500/30 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 text-center"
            >
              {card.icon}
              <h4 className="text-xl font-semibold text-black mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Why We’re Different */}
      <section
        id="why-different"
        className="max-w-4xl mx-auto mt-32 px-4 text-center"
        aria-labelledby="why-different-heading"
      >
        <h3
          id="why-different-heading"
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent animate-shimmer"
        >
          Why We’re Different
        </h3>

        <p className="text-[1.25rem] md:text-[1.4rem] text-gray-600 font-medium text-center leading-relaxed min-h-[140px] transition-all duration-300">
          {typedText}
        </p>
      </section>

      {/* SECTION 4: How We Get Things Moving */}
      <section
        id="process-section"
        className="max-w-6xl mx-auto mt-32 px-6 relative"
        aria-labelledby="process-heading"
      >
        <h3
          id="process-heading"
          className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent animate-shimmer"
        >
          How We Get Things Moving
        </h3>

        <div className="relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-black via-[#E32225] to-black blur-sm z-0" />

          <div className="flex flex-col gap-28 relative z-10">
            {processSteps.map((step, index) => {
              const isActive = processActiveIndex >= index;
              const alignment = index % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center md:grid md:grid-cols-2 gap-6"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E32225] rounded-full z-20 shadow-md shadow-red-500" />

                  {alignment === "left" ? (
                    <>
                      <div className="flex justify-end pr-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center bg-black/5 border border-red-500/30 transition-all duration-500 ${
                            isActive
                              ? "shadow-lg shadow-red-500/40 scale-105"
                              : "opacity-30 grayscale"
                          }`}
                        >
                          {stepIcons[index]}
                        </div>
                      </div>
                      <div className="text-left pl-6">
                        <h4
                          className={`font-semibold text-2xl md:text-3xl mb-1 ${
                            isActive ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {step}
                        </h4>
                        <p
                          className={`text-sm md:text-base text-gray-600 max-w-xs transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {stepDescriptions[index]}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-right pr-6">
                        <h4
                          className={`font-semibold text-2xl md:text-3xl mb-1 ${
                            isActive ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {step}
                        </h4>
                        <p
                          className={`text-sm md:text-base text-gray-600 max-w-xs ml-auto transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {stepDescriptions[index]}
                        </p>
                      </div>
                      <div className="flex justify-start pl-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center bg-black/5 border border-red-500/30 transition-all duration-500 ${
                            isActive
                              ? "shadow-lg shadow-red-500/40 scale-105"
                              : "opacity-30 grayscale"
                          }`}
                        >
                          {stepIcons[index]}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
