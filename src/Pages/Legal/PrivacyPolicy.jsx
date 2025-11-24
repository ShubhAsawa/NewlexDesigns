// import React from "react";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const PrivacyPolicy = () => {
//   return (
//     <div className="-mt-[100px] text-white bg-gradient-to-br from-black via-[#1a1a1a] to-[#111111]">
//       {/* HERO SECTION */}
//       <section className="relative h-[calc(100vh+100px)] pt-[100px] px-6 flex flex-col justify-center items-center text-center">
//         <div className="absolute inset-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-700 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse" />
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-red-600 via-red-700 to-transparent blur-2xl opacity-30 animate-pulse" />
//         </div>
//         <motion.div
//           className="relative z-10 max-w-4xl"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Your Data, Handled with Care
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             At Seyreon, your privacy isn’t a checkbox — it’s a promise.
//           </p>
//         </motion.div>
//       </section>

//       {/* MAIN CONTENT */}
//       <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
//         {[
//           {
//             title: "What We Collect (And Why)",
//             text: `When you reach out or use our services, we may collect your name,
//             email address, phone number, and business-related details — so we
//             can actually help you. That’s all.`,
//           },
//           {
//             title: "What We Don’t Do",
//             list: [
//               "No selling your data",
//               "No spamming your inbox",
//               "No hidden tracking tools",
//               "Just honest, secure, respectful communication",
//             ],
//           },
//           {
//             title: "How We Use Your Info",
//             text: `Your details help us serve you better — whether it's responding to
//             your query, building your automation system, or keeping you in the
//             loop about meaningful updates.`,
//           },
//           {
//             title: "Where It’s Stored & How It’s Protected",
//             text: `All your data is stored securely with industry-standard encryption.
//             We never store anything we don’t need — and we’ll delete it
//             instantly if you ask.`,
//           },
//           {
//             title: "Your Rights — Always in Your Control",
//             text: `You can contact us any time to:`,
//             list: [
//               "Access the data we have on you",
//               "Update or correct your details",
//               "Request full deletion",
//             ],
//             contact:
//               "Just drop a message at support@seyreon.com or call +91 6398800516.",
//           },
//           {
//             title: "No Cookies. No Surveillance.",
//             text: `We don’t use cookies, tracking pixels, or third-party scripts to
//             monitor you. You came here to explore solutions, not be followed
//             around — and we respect that.`,
//           },
//           {
//             title: "For Businesses, Not Kids",
//             text: `Our services are designed for professionals and businesses. We
//             don’t knowingly collect data from anyone under 13 — and we never
//             target children.`,
//           },
//           {
//             title: "When Things Change",
//             text: `We occasionally improve this policy to reflect best practices. If we
//             do, this page will be updated — no hidden changes, no fine print.`,
//           },
//           {
//             title: "Have Questions?",
//             text: `If anything’s unclear, or you simply want to check how your info is
//             handled — just reach out. We’re transparent because that’s how trust
//             is built.`,
//           },
//         ].map((section, index) => (
//           <motion.section
//             key={index}
//             custom={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="space-y-4"
//           >
//             <h2 className="text-2xl font-semibold text-red-400">{section.title}</h2>
//             {section.text && (
//               <p className="text-red-300 leading-relaxed">{section.text}</p>
//             )}
//             {section.list && (
//               <ul className="list-disc list-inside text-red-300 space-y-1">
//                 {section.list.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             )}
//             {section.contact && (
//               <p className="text-red-300 text-sm">{section.contact}</p>
//             )}
//           </motion.section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const PrivacyPolicy = () => {
  return (
    <div className="-mt-[100px] bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative h-[calc(100vh+100px)] pt-[100px] px-6 flex flex-col justify-center bg-gradient-to-br from-black to-[#E32225] text-white items-center text-center">
        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg- white ">
            Your Data, Handled with Care
          </h1>
          <p className="text-lg md:text-xl text-red-300 font-medium">
           At NewlexDesigns, your privacy isn’t a formality — it’s a commitment we stand by.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        {[
          {
            title: "What We Collect (And Why)",
            text: `When you contact us or work with NewlexDesigns, we may collect your name, email address, phone number, and essential business details. This information helps us understand your needs and deliver the right creative solutions. Nothing more.`,
          },
          {
            title: "What We Don’t Do",
            list: [
              "No selling your data",
              "No unnecessary emails",
              "No hidden tracking tools",
              "Just honest, secure, respectful communication — always.",
            ],
          },
          {
            title: "How We Use Your Info",
            text: `Your information helps us respond to your inquiries, understand your project needs, share important updates, and ensure a smooth creative process from start to finish.`,
          },
          {
            title: "Where It’s Stored & How It’s Protected",
            text: `Your data is stored securely using industry-standard protection.
            We never keep anything we don’t need — and if you ask us to delete it, we’ll remove it immediately.`,
          },
          {
            title: "Your Rights — You’re in Control",
            text: `You can reach out any time to:`,
            list: [
              "Access the information we have",
              "Update or correct your details",
              "Request complete deletion",
            ],
            contact:
              "Just drop a message at support@newlexdesigns.com ",
          },
          {
            title: "No Cookies. No Hidden Tracking.",
            text: `We don’t use cookies, tracking pixels, or third-party scripts to monitor you.
            You’re here to explore design solutions — not to be followed around.
            And we respect that.`,
          },
          {
            title: "For Businesses, Not Kids",
            text: `Our services are intended for professionals and businesses.
            We don’t knowingly collect information from anyone under 13 and never target children.`,
          },
          {
            title: "When Things Change",
            text: `We update this policy occasionally to stay aligned with best practices.
            If anything changes, this page will always reflect it clearly — no hidden edits, no fine print.`,
          },
          {
            title: "Have Questions?",
            text: `If anything feels unclear or you’d like to know more about how your information is handled, just reach out.
            Transparency builds trust — and trust is at the heart of NewlexDesigns.`,
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
              {section.title}
            </h2>
            {section.text && <p className="leading-relaxed">{section.text}</p>}
            {section.list && (
              <ul className="list-disc list-inside space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.contact && <p className="text-sm">{section.contact}</p>}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
