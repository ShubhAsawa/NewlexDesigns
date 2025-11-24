import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const TermsAndConditions = () => {
  return (
    <div className="-mt-[100px] bg-white text-black">
      {/* Hero Section */}
      <section className="h-[calc(100vh+100px)] pt-[100px] flex flex-col justify-center items-center bg-gradient-to-br from-black to-[#E32225] text-white text-center px-6">
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 "
            {...fadeInUp}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-red-300 font-medium"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            Everything you need to know — clearly explained, human to human.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto leading-relaxed space-y-14">
        {[
          {
            title: "1. What You’re Getting",
            content:
              "We create high-quality, custom design solutions tailored to your brand. From complete identities to packaging, graphics, and digital experiences — you’re getting design work built to elevate your business and grow with you.",
          },
          {
            title: "2. How We Work Together",
            content:
              "NewlexDesigns is a collaboration. Your clarity, feedback, and direction help us craft the visuals that best represent your brand. You share the inputs — we bring the creativity, strategy, and execution.",
          },
          {
            title: "3. What You Own",
            content:
              "Once your final designs are approved, they’re yours. The brand assets, visuals, files, and guidelines belong fully to you. No lock-ins, no complications — just complete ownership and freedom.",
          },
          {
            title: "4. Changes & Revisions",
            content:
              "Need adjustments? Absolutely. Most design packages include 1–2 rounds of feedback. If major changes go beyond the original scope, we’ll quote them fairly and always inform you before anything is charged.",
          },
          {
            title: "5. Refund Policy",
            content:
              "We begin working quickly, which means time and resources get allocated immediately. For that reason, we don’t offer refunds once the project starts — but we do commit to delivering work you’re genuinely proud of.",
          },
          {
            title: "6. Respecting Your Data",
            content:
              "Your information is handled securely, privately, and only used for project purposes. No unnecessary storage, no misuse — full transparency at every step. For details, visit our Privacy Policy.",
          },
          {
            title: "7. Need Support?",
            content:
              "We’re here to help. Whether you need design updates, new assets, or have questions about your project, reach out anytime at support@newlexdesigns.com",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
              {section.title}
            </h2>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default TermsAndConditions;
