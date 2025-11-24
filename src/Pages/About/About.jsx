// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] text-white bg-black relative overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-4 overflow-visible">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-600 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-black via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Meet the Team Behind Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             The minds building the future of AI automations
//           </p>
//         </div>
//       </section>

//       {/* FOUNDER */}
//       <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-20 max-w-6xl mx-auto">
//         <motion.div
//           className="w-48 h-48 shrink-0 relative overflow-hidden"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//         >
//           <img
//             src={Yash}
//             alt="Yash Maheshwari"
//             className="w-full h-full object-cover rounded-full"
//           />
//         </motion.div>
//         <motion.div
//           className="space-y-3 relative z-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold text-red-400">
//             Yash Maheshwari
//           </h2>
//           <p className="text-red-300 font-medium">Founder & CEO</p>
//           <p className="text-red-400">
//             As the Founder and CEO of Seyreon, I am committed to driving
//             innovation and excellence in AI and automation. With a deep passion
//             for technology and a focus on empowering businesses, I lead our team
//             to develop cutting-edge chatbot solutions that enhance efficiency
//             and user engagement. My mission is to create impactful AI solutions
//             that help our clients streamline operations and unlock new
//             opportunities for growth in an ever-evolving digital landscape.
//           </p>
//           <p className="italic text-red-300">“If you think it, do it.”</p>
//         </motion.div>
//       </section>

//       {/* CO-FOUNDER */}
//       <section className="flex flex-col md:flex-row items-center gap-8 px-8 pb-20 max-w-6xl mx-auto">
//         <motion.div
//           className="w-48 h-48 shrink-0 relative overflow-hidden"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//         >
//           <img
//             src={Ishika}
//             alt="Ishika Maheshwari"
//             className="w-full h-full object-cover rounded-full"
//           />
//         </motion.div>
//         <motion.div
//           className="space-y-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold text-red-400">
//             Ishika Maheshwari
//           </h2>
//           <p className="text-red-300 font-medium">Co-Founder & CCO</p>
//           <p className="text-red-400">
//             As the Co-Founder and Chief Creative Officer of Seyreon, I am
//             dedicated to bringing innovative design solutions to life. With a
//             strong passion for creativity and a keen eye for detail, I lead our
//             design initiatives to ensure that every project captures the essence
//             of our clients’ brands. My mission is to craft visually compelling
//             experiences that engage audiences and elevate brand identities in a
//             competitive landscape.
//           </p>
//         </motion.div>
//       </section>

//       {/* 🚀 MISSION STATEMENT */}
//       <motion.section
//         className="max-w-4xl mx-auto px-6 md:px-10 mt-8 mb-20 text-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
//         <p className="text-red-300 text-lg leading-relaxed">
//           At Seyreon, our mission is to create intelligent systems that don't
//           just automate — they empower. We believe AI should enhance creativity,
//           boost human potential, and unlock seamless experiences across every
//           business touchpoint. We're here to redefine what’s possible.
//         </p>
//       </motion.section>

//       {/* TEAM GRID */}
//       <section className="px-6 pb-24 max-w-6xl mx-auto mt-16">
//         <h3 className="text-3xl font-bold text-white text-center mb-12">
//           Together, We Are Seyreon
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//           {[
//             {
//               src: Vinit,
//               name: "Vinit Rajput",
//               title: "Chief Solutions Engineer",
//               desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//             },
//             {
//               src: Riya,
//               name: "Riya Maheshwari",
//               title: "Dev & QA Engineer",
//               desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//             },
//             {
//               src: Shubh,
//               name: "Shubh",
//               title: "Designer",
//               desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//             },
//             {
//               src: Aryan,
//               name: "Aryan Toshniwal",
//               title: "Client Outreach Coordinator",
//               desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//             },
//           ].map((member, i) => (
//             <motion.div
//               key={i}
//               className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl backdrop-blur-md border border-red-700/30 bg-black/20 transition-all duration-300 hover:shadow-2xl"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={i}
//               variants={fadeInUp}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 20px rgba(255, 0, 0, 0.2)",
//               }}
//             >
//               <div className="particle-bg z-0">
//                 {[...Array(20)].map((_, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       top: `${Math.random() * 100}%`,
//                       left: `${Math.random() * 100}%`,
//                       animationDelay: `${Math.random() * 5}s`,
//                     }}
//                   />
//                 ))}
//               </div>

//               <div className="z-10 flex-shrink-0">
//                 <img
//                   src={member.src}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>
//               <div className="z-10">
//                 <h4 className="text-xl font-semibold text-red-300">
//                   {member.name}
//                 </h4>
//                 <p className="text-red-400">{member.title}</p>
//                 <p className="text-red-400 text-sm">{member.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section className="relative w-full min-h-screen pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-4 overflow-visible bg-black text-white">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-[#E32225] via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-black via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Meet the Team Behind Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             The minds building the future of AI automations
//           </p>
//         </div>
//       </section>

//       {/* FOUNDER */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3 relative z-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Founder & CEO</p>
//             <p className="text-black">
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-[#E32225]">“If you think it, do it.”</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CO-FOUNDER */}
//       <section className="w-full  flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Co-Founder & CCO</p>
//             <p className="text-black">
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🚀 MISSION STATEMENT */}
//       <motion.section
//         className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">Our Mission</h3>
//           <p className="text-black text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </motion.section>

//       {/* TEAM GRID */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={fadeInUp}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 20px #E32225",
//                 }}
//               >
//                 <div className="z-10 flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="z-10">
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent"
// >
//                     {member.name}
//                   </h4>
//                   <p className="text-[#E32225]">{member.title}</p>
//                   <p className="text-black text-sm">{member.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section className="relative w-full min-h-screen pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black to-[#E32225] text-white">
//         {/* Removed gradient overlays */}
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Meet the Team Behind Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             The minds building the future of AI automations
//           </p>
//         </div>
//       </section>

//       {/* FOUNDER */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3 relative z-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] text-red-400 font-medium">Founder & CEO</p>
//             <p className="text-black">
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-red-400">“If you think it, do it.”</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CO-FOUNDER */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] text-red-400 font-medium">Co-Founder & CCO</p>
//             <p className="text-black">
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🚀 MISSION STATEMENT */}
//       <motion.section
//         className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Our Mission
//           </h3>
//           <p className="text-black text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </motion.section>

//       {/* TEAM GRID */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2  gap-10 relative z-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={fadeInUp}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 20px #E32225",
//                 }}
//               >
//                 <div className="z-10 flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="z-10">
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {member.name}
//                   </h4>
//                   <p className="text-red-400">{member.title}</p>
//                   <p className="text-black text-sm">{member.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// // /src/about/About.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";
// import AboutText from "./AboutText"; // ✅ Import AboutText

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section className="relative w-full min-h-screen pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black to-[#E32225] text-white">
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Meet the Team Behind Seyreon
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             The minds building the future of AI automations
//           </p>
//         </div>
//       </section>

//       {/* ABOUT TEXT SECTION */}
//       <AboutText /> {/* ✅ Added here */}

//       {/* FOUNDER */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3 relative z-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] text-red-400 font-medium">
//               Founder & CEO
//             </p>
//             <p className="text-black">
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-red-400">“If you think it, do it.”</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CO-FOUNDER */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] text-red-400 font-medium">
//               Co-Founder & CCO
//             </p>
//             <p className="text-black">
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🚀 MISSION STATEMENT */}
//       <motion.section
//         className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Our Mission
//           </h3>
//           <p className="text-black text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </motion.section>

//       {/* TEAM GRID */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={fadeInUp}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 20px #E32225",
//                 }}
//               >
//                 <div className="z-10 flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="z-10">
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {member.name}
//                   </h4>
//                   <p className="text-red-400">{member.title}</p>
//                   <p className="text-black text-sm">{member.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// // /src/about/About.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";
// import AboutText from "./AboutText"; // ✅ Import AboutText

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* ✨ UPDATED HERO SECTION */}
//       <section className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white overflow-hidden">
//         {/* Background Motion */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-black to-[#E32225] opacity-90"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         />

//         {/* Animated Text */}
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Meet the Team Behind Seyreon
//           </motion.h1>

//           <motion.p
//             className="mt-6 text-lg md:text-xl opacity-80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             The minds building the future of AI automations
//           </motion.p>
//         </div>

//         {/* Subtle Floating Glow */}
//         <motion.div
//           className="absolute bottom-0 w-[500px] h-[500px] bg-[#E32225] opacity-20 rounded-full blur-3xl"
//           animate={{ y: [0, -30, 0] }}
//           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//         />
//       </section>

//       {/* ABOUT TEXT SECTION */}
//       <AboutText /> {/* ✅ Added here */}

//       {/* FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>

//           <motion.div
//             className="space-y-3 relative z-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Founder & CEO</p>
//             <p>
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-red-400">“If you think it, do it.”</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CO-FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <motion.div
//             className="w-48 h-48 shrink-0 relative overflow-hidden"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//           >
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>

//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Co-Founder & CCO</p>
//             <p>
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🚀 MISSION SECTION */}
//       <motion.section
//         className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Our Mission
//           </h3>
//           <p className="text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </motion.section>

//       {/* TEAM GRID SECTION */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={fadeInUp}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 20px #E32225",
//                 }}
//               >
//                 <div className="z-10 flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="z-10">
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {member.name}
//                   </h4>
//                   <p className="text-red-400">{member.title}</p>
//                   <p className="text-sm">{member.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// // /src/about/About.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";
// import AboutText from "./AboutText";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* ✨ HERO SECTION */}
//       <section className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white">
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Meet the Team Behind Seyreon
//           </motion.h1>

//           <motion.p
//             className="mt-6 text-lg md:text-xl opacity-80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             The minds building the future of AI automations
//           </motion.p>
//         </div>
//       </section>

//       {/* ABOUT TEXT SECTION */}
//       <AboutText />

//       {/* FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           {/* Static Image */}
//           <div className="w-48 h-48 shrink-0 relative overflow-hidden">
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           <motion.div
//             className="space-y-3 relative z-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Founder & CEO</p>
//             <p>
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-red-400">“If you think it, do it.”</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CO-FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           {/* Static Image */}
//           <div className="w-48 h-48 shrink-0 relative overflow-hidden">
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Co-Founder & CCO</p>
//             <p>
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🚀 MISSION SECTION */}
//       <motion.section
//         className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Our Mission
//           </h3>
//           <p className="text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </motion.section>

//       {/* TEAM GRID SECTION */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={fadeInUp}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 20px #E32225",
//                 }}
//               >
//                 <div className="z-10 flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="z-10">
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {member.name}
//                   </h4>
//                   <p className="text-red-400">{member.title}</p>
//                   <p className="text-sm">{member.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// // /src/about/About.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Yash from "../../assets/images/Yash.png";
// import Ishika from "../../assets/images/Ishika.png";
// import Vinit from "../../assets/images/Vinit.png";
// import Riya from "../../assets/images/Riya.png";
// import Shubh from "../../assets/images/Shubh.png";
// import Aryan from "../../assets/images/Aryan.png";
// import AboutText from "./AboutText";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const About = () => {
//   return (
//     <div className="-mt-[100px] relative overflow-x-hidden">
//       {/* ✨ HERO SECTION (STATIC, NO CIRCLES) */}
//       <section className="w-full h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white">
//         <div className="text-center px-4">
//           <h1 className="text-5xl md:text-7xl font-bold">
//             Meet the Team Behind Seyreon
//           </h1>
//           <p className="mt-6 text-lg md:text-xl opacity-80">
//             The minds building the future of AI automations
//           </p>
//         </div>
//       </section>

//       {/* ABOUT TEXT SECTION */}
//       <AboutText />

//       {/* FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <div className="w-48 h-48 shrink-0 relative overflow-hidden">
//             <img
//               src={Yash}
//               alt="Yash Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Yash Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Founder & CEO</p>
//             <p>
//               As the Founder and CEO of Seyreon, I am committed to driving
//               innovation and excellence in AI and automation. With a deep
//               passion for technology and a focus on empowering businesses, I
//               lead our team to develop cutting-edge chatbot solutions that
//               enhance efficiency and user engagement. My mission is to create
//               impactful AI solutions that help our clients streamline operations
//               and unlock new opportunities for growth in an ever-evolving
//               digital landscape.
//             </p>
//             <p className="italic text-red-400">“If you think it, do it.”</p>
//           </div>
//         </div>
//       </section>

//       {/* CO-FOUNDER SECTION */}
//       <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 bg-white text-black">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <div className="w-48 h-48 shrink-0 relative overflow-hidden">
//             <img
//               src={Ishika}
//               alt="Ishika Maheshwari"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//               Ishika Maheshwari
//             </h2>
//             <p className="text-[#E32225] font-medium">Co-Founder & CCO</p>
//             <p>
//               As the Co-Founder and Chief Creative Officer of Seyreon, I am
//               dedicated to bringing innovative design solutions to life. With a
//               strong passion for creativity and a keen eye for detail, I lead
//               our design initiatives to ensure that every project captures the
//               essence of our clients’ brands. My mission is to craft visually
//               compelling experiences that engage audiences and elevate brand
//               identities in a competitive landscape.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* MISSION SECTION */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10">
//         <div className="max-w-4xl">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Our Mission
//           </h3>
//           <p className="text-lg leading-relaxed">
//             At Seyreon, our mission is to create intelligent systems that don't
//             just automate — they empower. We believe AI should enhance
//             creativity, boost human potential, and unlock seamless experiences
//             across every business touchpoint. We're here to redefine what’s
//             possible.
//           </p>
//         </div>
//       </section>

//       {/* TEAM GRID SECTION */}
//       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
//         <div className="max-w-6xl w-full">
//           <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Together, We Are Seyreon
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {[
//               {
//                 src: Vinit,
//                 name: "Vinit Rajput",
//                 title: "Chief Solutions Engineer",
//                 desc: "Vinit ensures every automation flows perfectly with logic and precision. From backend architecture to API orchestration, he turns ideas into functional systems that perform flawlessly and scale effortlessly.",
//               },
//               {
//                 src: Riya,
//                 name: "Riya Maheshwari",
//                 title: "Dev & QA Engineer",
//                 desc: "Riya develops and stress-tests our systems to meet the highest quality standards. With precision and persistence, she ensures your bots run smoothly in real-world use — bug-free and high-performing.",
//               },
//               {
//                 src: Shubh,
//                 name: "Shubh",
//                 title: "Designer",
//                 desc: "Shubh adds visual flair to every project. Whether it's UI design, branding, or animations — his creativity ensures every Seyreon experience looks stunning and feels intuitive.",
//               },
//               {
//                 src: Aryan,
//                 name: "Aryan Toshniwal",
//                 title: "Client Outreach Coordinator",
//                 desc: "Aryan is the voice of Seyreon to the outside world. He handles outreach, client onboarding, and ensures every new relationship begins with clarity, energy, and excitement.",
//               },
//             ].map((member, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl border-2 border-[#E32225] bg-white text-black hover:shadow-[0_0_20px_#E32225] transition-all duration-300"
//               >
//                 <div className="flex-shrink-0">
//                   <img
//                     src={member.src}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {member.name}
//                   </h4>
//                   <p className="text-red-400">{member.title}</p>
//                   <p className="text-sm">{member.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

// /src/about/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Sanika from "../../assets/images/Sanika.jpg";
import Aryann from "../../assets/images/Aryann.jpg";
import Ishika from "../../assets/images/Ishika.jpg";
import shubhh from "../../assets/images/shubhh.jpg";
import Riya from "../../assets/images/Riya.jpg";
import Tanusha from "../../assets/images/Tanusha.jpg";
import Nikita from "../../assets/images/Nikita.jpg";
import Yash from "../../assets/images/Yash.jpg";
// import Aryan from "../../assets/images/Aryan.png";

import AboutText from "./AboutText";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    // 🔹 Removed -mt-[100px] to center hero vertically
    <div className="relative overflow-x-hidden">
      {/* ✨ HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet the Team Behind Newlexdesigns
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
           The creative minds shaping meaningful brands and exceptional design experiences.
          </motion.p>
        </div>
      </section>

      {/* ABOUT TEXT SECTION */}
      <AboutText />

      {/* FOUNDER SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Static Image */}
          <div className="w-60 h-60 shrink-0 relative overflow-hidden">
            <img
              src={Ishika}
              alt="Ishika Maheshwari"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <motion.div
            className="space-y-3 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
              Ishika Maheshwari
            </h2>
            <p className="text-[#E32225] font-medium">Founder & CEO</p>
            <p>
              As the Founder and CEO of NewlexDesigns, I am dedicated to shaping meaningful design that elevates brands and inspires creativity. With a passion for visual storytelling and a commitment to excellence, I lead our team in crafting identities, packaging, graphics, and digital experiences that leave a lasting impact.
              My mission is to help businesses express who they are with clarity, confidence, and unforgettable design transforming ideas into visuals that truly resonate in a constantly evolving creative world.

            </p>
            <p className="italic text-red-400">“If you think it, do it.”</p>
          </motion.div>
        </div>
      </section>

      {/* CO-FOUNDER SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Static Image */}
          <div className="w-60 h-60 shrink-0 relative overflow-hidden">
            <img
              src={shubhh}
              alt="Shubh Asawa"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
              Shubh Asawa
            </h2>
            <p className="text-[#E32225] font-medium">Co-Founder & CCO</p>
            <p>
              As the Co-Founder and Chief Creative Officer of NewlexDesigns, I am committed to turning ideas into meaningful visual experiences. Guided by a deep passion for creativity and an eye for refined detail, I lead our creative direction to ensure every project reflects the true essence of the brands we work with.
              My mission is to shape designs that not only look beautiful but also communicate with purpose — crafting memorable identities, engaging visuals, and impactful experiences that help brands stand out in a competitive world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🚀 MISSION SECTION */}
      <motion.section
        className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed">
            At NewlexDesigns, our mission is to create meaningful design that inspires, empowers, and elevates. We believe creativity should strengthen identity, enhance human connection, and bring clarity to every brand touchpoint. We’re here to transform ideas into unforgettable experiences and redefine what thoughtful design can achieve.
          </p>
        </div>
      </motion.section>

      {/* TEAM GRID SECTION */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 pb-24">
        <div className="max-w-6xl w-full">
          <h3 className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
            Together, We Are Newlexdesigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {[
              {
                src: Tanusha,
                name: "Tanusha Rathi",
                title: "Chief Solutions Engineer",
                desc: "Tanusha ensures every creative project comes together with structure, clarity, and precision. She bridges strategy and design by shaping the visual framework, refining workflows, and overseeing seamless execution.",
              },
              {
                src: Nikita,
                name: "Nikita Bhuradiya",
                title: "Creative Director",
                desc: "Nikita leads the creative direction at NewlexDesigns with a strong eye for detail and visual storytelling. She guides the design team, refines concepts, and ensures every project is crafted with quality, clarity, and purpose, transforming ideas into impactful and memorable brand experiences.",
              },
              {
                src: Riya,
                name: "Riya Sharma",
                title: "Branding & Identity Designer",
                desc: "Riya brings thoughtful creativity to every brand she builds. From crafting logos to shaping complete identity systems, she ensures each design feels intentional, memorable, and visually striking. Her work transforms ideas into cohesive brand experiences that leave a lasting impression.",
              },
              {
                src: Sanika,
                name: "Sanika Kaminbar",
                title: "Content & Communication Strategist",
                desc: "Sanika shapes the voice and storytelling of NewlexDesigns. She crafts clear, engaging content and ensures every message aligns with the brand’s vision. From client communication to visual narrative, she helps create meaningful connections and sets the tone for strong, lasting relationships.",
              },
              {
                src: Yash,
                name: "Yash Maheshwari",
                title: "Client Relations & Coordinator",
                desc: "Yash ensures every client interaction begins with clarity, trust, and a smooth experience. He manages communication, coordinates project details, and keeps workflows organized from start to finish.",
              },
              {
                src: Aryann,
                name: "Aryan Toshniwal",
                title: "Client Outreach Coordinator",
                desc: "Aryan represents NewlexDesigns to the outside world with clarity and confidence. He manages outreach, connects with potential clients, and ensures every new relationship starts smoothly and professionally.",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-5 p-8 rounded-xl border-2 border-[#E32225] bg-white text-black transition-all duration-300 hover:shadow-[0_0_20px_#E32225]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px #660305ff",
                }}
              >
                <div className="z-10 flex-shrink-0">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <div className="z-10">
                  <h4 className="text-xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
                    {member.name}
                  </h4>
                  <p className="text-red-400">{member.title}</p>
                  <p className="text-sm">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
