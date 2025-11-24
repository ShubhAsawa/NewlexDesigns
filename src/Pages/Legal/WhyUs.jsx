// import React from "react";
// import { motion } from "framer-motion";

// const WhyUs = () => {
//   return (
//     <div className="-mt-[100px] bg-gradient-to-br from-black via-[#1a1a1a] to-[#111111] text-white overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="relative h-[calc(100vh+100px)] flex flex-col justify-center items-center text-center px-4 pt-[100px]">
//         <div className="absolute inset-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-700 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-red-600 via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Why Work With Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             We don’t just build bots — we build systems that give you back your
//             time, your focus, and your freedom.
//           </p>
//         </div>
//       </section>

//       {/* DIFFERENTIATORS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//           We’re Not Just Another Automation Agency
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {[
//             {
//               title: "Systems That Work While You Sleep",
//               text: "We build automation that runs 24/7 — qualifying leads, booking calls, sending follow-ups — without lifting a finger.",
//             },
//             {
//               title: "A Tech Stack That Talks to Each Other",
//               text: "We blend tools like Make, Voiceflow, GHL, WhatsApp, OpenAI, and Google — into one seamless brain that runs your ops.",
//             },
//             {
//               title: "No More Manual Bottlenecks",
//               text: "Your team shouldn't be copy-pasting leads, sending reminders, or chasing reviews. We eliminate busywork for good.",
//             },
//             {
//               title: "Launch in Days, Not Months",
//               text: "Our systems are lean and fast — no bloated builds or endless back-and-forth. We move fast and ship sharp.",
//             },
//             {
//               title: "Human Support, Always",
//               text: "You’ll have real humans behind your automation — guiding you, tweaking, evolving. We’re here even after go-live.",
//             },
//             {
//               title: "Designed for Founders",
//               text: "Every system we build is meant to reduce your stress, give you dashboards, alerts, and data that makes sense to *you*.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-red-500/20 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-2 text-red-400">
//                 {item.title}
//               </h3>
//               <p className="text-red-300">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TRUST-BUILDING SECTION */}
//       <section className="py-20 px-6 max-w-5xl mx-auto text-center">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           What Happens When Automation Just… Works?
//         </motion.h2>
//         <motion.p
//           className="text-lg text-red-300 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           ✦ Your team focuses on growth instead of tasks.
//           <br />
//           ✦ Your users get faster replies, smoother experiences.
//           <br />
//           ✦ Your business scales without scaling headaches.
//           <br />
//           <br />
//           That’s what we bring — clarity, speed, and momentum.
//         </motion.p>
//       </section>

//       {/* MINI TESTIMONIAL STYLE BLOCKS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//           Client Wins
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {[
//             {
//               name: "Healthcare Startup",
//               result:
//                 "Built an AI call assistant that qualified 300+ leads/month — no agents required.",
//             },
//             {
//               name: "Real Estate Brand",
//               result:
//                 "Automated WhatsApp bot booked 80+ viewings/month and synced with Google Calendar.",
//             },
//             {
//               name: "Ecom Founder",
//               result:
//                 "Referral system + loyalty engine brought 40% more repeat purchases within 6 weeks.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1c1c25]/70 backdrop-blur p-6 rounded-xl shadow-md border border-red-800/20"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <p className="text-red-400 font-semibold text-sm mb-2">
//                 {item.name}
//               </p>
//               <p className="text-red-300">{item.result}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//           Our Values (What We Stand For)
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {
//               title: "Transparency",
//               text: "No hidden costs. No confusion. We’re open about what’s possible and what’s not — always.",
//             },
//             {
//               title: "Speed with Quality",
//               text: "We don’t drag timelines. But we never rush what matters. We balance launch speed with performance.",
//             },
//             {
//               title: "Adaptability",
//               text: "Tech moves fast — and so do we. Every system we build is ready to evolve with your needs.",
//             },
//             {
//               title: "Client-First Thinking",
//               text: "We’re not here to upsell. We’re here to build something useful. We care more about value than vanity.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-red-500/20 transition duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-2 text-red-400">
//                 {item.title}
//               </h3>
//               <p className="text-red-300">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhyUs;

// import React from "react";
// import { motion } from "framer-motion";

// const WhyUs = () => {
//   return (
//     <div className="-mt-[100px] bg-white text-black overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="h-[calc(100vh+100px)] flex flex-col justify-center items-center text-center bg-gradient-to-br from-black to-[#E32225] px-4 pt-[100px]">
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
//             Why Work With Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             We don’t just build bots — we build systems that give you back your
//             time, your focus, and your freedom.
//           </p>
//         </div>
//       </section>

//       {/* DIFFERENTIATORS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           We’re Not Just Another Automation Agency
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {[
//             {
//               title: "Systems That Work While You Sleep",
//               text: "We build automation that runs 24/7 — qualifying leads, booking calls, sending follow-ups — without lifting a finger.",
//             },
//             {
//               title: "A Tech Stack That Talks to Each Other",
//               text: "We blend tools like Make, Voiceflow, GHL, WhatsApp, OpenAI, and Google — into one seamless brain that runs your ops.",
//             },
//             {
//               title: "No More Manual Bottlenecks",
//               text: "Your team shouldn't be copy-pasting leads, sending reminders, or chasing reviews. We eliminate busywork for good.",
//             },
//             {
//               title: "Launch in Days, Not Months",
//               text: "Our systems are lean and fast — no bloated builds or endless back-and-forth. We move fast and ship sharp.",
//             },
//             {
//               title: "Human Support, Always",
//               text: "You’ll have real humans behind your automation — guiding you, tweaking, evolving. We’re here even after go-live.",
//             },
//             {
//               title: "Designed for Founders",
//               text: "Every system we build is meant to reduce your stress, give you dashboards, alerts, and data that makes sense to *you*.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-gray-300 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                 {item.title}
//               </h3>
//               <p>{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TRUST-BUILDING SECTION */}
//       <section className="py-20 px-6 max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           What Happens When Automation Just… Works?
//         </h2>
//         <p className="text-lg leading-relaxed">
//           ✦ Your team focuses on growth instead of tasks.
//           <br />
//           ✦ Your users get faster replies, smoother experiences.
//           <br />
//           ✦ Your business scales without scaling headaches.
//           <br />
//           <br />
//           That’s what we bring — clarity, speed, and momentum.
//         </p>
//       </section>

//       {/* MINI TESTIMONIAL STYLE BLOCKS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           Client Wins
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {[
//             {
//               name: "Healthcare Startup",
//               result:
//                 "Built an AI call assistant that qualified 300+ leads/month — no agents required.",
//             },
//             {
//               name: "Real Estate Brand",
//               result:
//                 "Automated WhatsApp bot booked 80+ viewings/month and synced with Google Calendar.",
//             },
//             {
//               name: "Ecom Founder",
//               result:
//                 "Referral system + loyalty engine brought 40% more repeat purchases within 6 weeks.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <p className="font-semibold text-sm mb-2">{item.name}</p>
//               <p>{item.result}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           Our Values (What We Stand For)
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {
//               title: "Transparency",
//               text: "No hidden costs. No confusion. We’re open about what’s possible and what’s not — always.",
//             },
//             {
//               title: "Speed with Quality",
//               text: "We don’t drag timelines. But we never rush what matters. We balance launch speed with performance.",
//             },
//             {
//               title: "Adaptability",
//               text: "Tech moves fast — and so do we. Every system we build is ready to evolve with your needs.",
//             },
//             {
//               title: "Client-First Thinking",
//               text: "We’re not here to upsell. We’re here to build something useful. We care more about value than vanity.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                 {item.title}
//               </h3>
//               <p>{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhyUs;

import React from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="bg-white text-black overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex justify-center items-center text-center bg-gradient-to-br from-black to-[#E32225] px-4">
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Why Work With NewlexDesigns
          </h1>
          <p className="text-lg md:text-2xl text-red-300 font-medium">
            We don't just design visuals — we create meaningful brand experiences that give you clarity, confidence, and the space to grow your business.
          </p>
        </motion.div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
         We’re Not Another Design Team. We’re Your Creative Partner.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Design That Works Even When You Don’t",
              text: "We create brand and visual systems that stay consistent across every platform — keeping your presence strong, professional, and unforgettable around the clock.",
            },
            {
              title: "A Creative Ecosystem That Flows Together",
              text: "Your branding, packaging, graphics, and digital experiences work as one seamless identity — clear, cohesive, and instantly recognizable.",
            },
            {
              title: "No More Creative Bottlenecks",
              text: "Your team shouldn’t struggle with mismatched visuals, outdated designs, or unclear brand assets. We bring structure, clarity, and consistency to everything.",
            },
            {
              title: "Launch in Days, Not Months",
              text: "Our process is lean, fast, and focused — no unnecessary delays, no endless revisions. We move with precision and deliver with impact.",
            },
            {
              title: "Human Support, Always",
              text: "Behind every design is a real team that listens, guides, and collaborates. We stay with you beyond delivery to refine, improve, and evolve.",
            },
            {
              title: "Built for Founders",
              text: "Every design system we create is made to reduce stress, provide clarity, and give you visuals, guidelines, and brand assets that make sense for your business.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-gray-300 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST-BUILDING SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
         What Happens When Great Design Just… Works?
        </h2>
        <p className="text-lg leading-relaxed">
          ✦ Your team focuses on growth instead of fixing visuals or redoing assets.
          <br />
          ✦ Your audience gets clearer messaging, stronger branding, and smoother experiences.
          <br />
          ✦ Your business grows with confidence — without design confusion or inconsistency.
          <br />
          <br />
          That’s what we bring: clarity, impact, and creative momentum.
        </p>
      </section>

      {/* MINI TESTIMONIAL STYLE BLOCKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
          Client Wins
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              name: "Healthcare Startup",
              result:
                "A complete brand identity refresh and packaging redesign increased trust and boosted patient engagement across all digital touchpoints.",
            },
            {
              name: "Real Estate Brand",
              result:
                "A modern website redesign with clear visuals and strong UI/UX increased property inquiries and improved user navigation significantly.",
            },
            {
              name: "E-commerce Founder",
              result:
                "A new visual identity, product packaging set, and social media design system increased repeat purchases by 40% within six weeks.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-semibold text-sm mb-2">{item.name}</p>
              <p>{item.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
          Our Values (What We Stand For)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Transparency",
              text: "Clear communication, honest expectations, and no hidden details. You always know what we’re creating, why it matters, and how it supports your brand.",
            },
            {
              title: "Speed with Quality",
              text: "We move fast without compromising craftsmanship. Every design is thoughtful, refined, and delivered with the intention to make your brand unforgettable.",
            },
            {
              title: "Adaptability",
              text: "Design trends evolve — and so do we. Every system, identity, and visual we create is built to stay relevant, flexible, and ready to grow with your brand.",
            },
            {
              title: "Client-First Thinking",
              text: "We don’t push unnecessary services or fancy extras. We focus on what brings real value, real clarity, and real results for your business.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
