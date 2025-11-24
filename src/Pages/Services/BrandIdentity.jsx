// import React from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip as RechartTooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import { Link } from "react-router-dom";

// const timeSavedData = [
//   { week: "Week 1", Manual: 12, AI: 2 },
//   { week: "Week 2", Manual: 11, AI: 2 },
//   { week: "Week 3", Manual: 10, AI: 2 },
//   { week: "Week 4", Manual: 11, AI: 2 },
// ];

// const AIAssistant = () => {
//   return (
//     <div className="relative min-h-screen bg-white text-white px-6 pt-28 pb-16 -mt-[100px]">
//       {/* HERO SECTION */}
//       <div className="relative h-[360px] md:h-[440px] flex flex-col justify-center items-center text-center px-4 mb-20">
//         <div className="absolute inset-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-700 via-red-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-red-600 via-red-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl"
        
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             AI Chat & Call Assistants
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 font-medium">
//             Convert leads, handle support, and qualify prospects — all through
//             intelligent, automated conversations.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto">
//         <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//           You're spending too much time on repetitive tasks. Whether it's
//           answering the same customer questions, calling unqualified leads, or
//           scheduling appointments — these bottlenecks slow growth. Our AI
//           Assistants solve all of this by automating customer conversations
//           across chat and phone.
//         </p>

//         {/* Chat Assistant */}
//         <section className="mb-16"
//         >
//           <h2 className="text-3xl font-semibold text-white mb-4">
//             What is an AI Chat Assistant?
//           </h2>
//           <p className="text-gray-300 mb-6">
//             An AI Chat Assistant is a conversational automation bot trained to
//             mimic a human support or sales rep. Built using Voiceflow, ManyChat,
//             or GHL, it handles customer interaction on websites, WhatsApp,
//             Instagram, and more — instantly.
//           </p>
//           <ul className="list-disc pl-6 text-gray-400 space-y-2">
//             <li>Replies to user queries instantly across platforms</li>
//             <li>Captures contact info, preferences, and stores in CRM</li>
//             <li>Qualifies leads using dynamic questions before routing</li>
//             <li>Lets users book appointments right inside the chat</li>
//             <li>Responds 24/7 without the need for a human agent</li>
//           </ul>
//         </section>

//         {/* Call Assistant */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-white mb-4">
//             What is an AI Call Assistant?
//           </h2>
//           <p className="text-gray-300 mb-6">
//             AI Call Assistants are automated voice bots that call or receive
//             calls — simulating human agents. They qualify leads, schedule
//             meetings, and escalate complex queries to your human team. It speaks
//             fluently, understands logic, and reduces your need for call center
//             staff.
//           </p>
//           <ul className="list-disc pl-6 text-gray-400 space-y-2">
//             <li>Instantly call new leads as soon as they fill a form</li>
//             <li>Use smart logic to filter serious inquiries</li>
//             <li>Book meetings into Google Calendar or GHL</li>
//             <li>Transfer to a human seamlessly if needed</li>
//             <li>Multi-language support and smart pause/interrupt</li>
//           </ul>
//         </section>

//         {/* Benefits */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-semibold text-white mb-6">
//             Why AI Assistants Are Game-Changing
//           </h2>
//           <p className="text-gray-300 mb-6">
//             If you're manually replying to leads or scheduling meetings by hand
//             — you're wasting time and losing revenue. Our clients have reduced
//             response times by 95%, saved dozens of hours per month, and doubled
//             their lead conversion rates after using AI Assistants.
//           </p>
//           <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
//             <li>
//               <strong>Respond 10x Faster:</strong> Instant replies mean more
//               engagement.
//             </li>
//             <li>
//               <strong>Convert More Leads:</strong> 25%–33% conversion vs 14%
//               industry average.
//             </li>
//             <li>
//               <strong>Save 40+ hours/month:</strong> On follow-ups, bookings,
//               and queries.
//             </li>
//             <li>
//               <strong>Run 24/7:</strong> No sick days. No time off. Always
//               online.
//             </li>
//           </ul>
//         </section>

//         {/* Charts */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-semibold text-white mb-10">
//             Real-World Impact: Proven Stats
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             {/* Chart 1 */}
//             <div>
//               <h3 className="text-lg font-medium text-gray-200 mb-2">
//                 Lead Response Time (mins)
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <BarChart
//                   data={[
//                     { label: "Manual", time: 45 },
//                     { label: "AI", time: 0.5 },
//                   ]}
//                 >
//                   <XAxis dataKey="label" stroke="#ccc" />
//                   <YAxis stroke="#ccc" />
//                   <Bar dataKey="time" fill="#ef4444" radius={[6, 6, 0, 0]} />
//                   <RechartTooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Chart 2 */}
//             <div>
//               <h3 className="text-lg font-medium text-gray-200 mb-2">
//                 Lead-to-Customer Conversion Rate
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <BarChart
//                   data={[
//                     { label: "No AI", percent: 14 },
//                     { label: "With AI", percent: 30 },
//                   ]}
//                 >
//                   <XAxis dataKey="label" stroke="#ccc" />
//                   <YAxis stroke="#ccc" />
//                   <Bar dataKey="percent" fill="#ef4444" radius={[6, 6, 0, 0]} />
//                   <RechartTooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Chart 3 */}
//             <div>
//               <h3 className="text-lg font-medium text-gray-200 mb-2">
//                 Weekly Support Hours Saved
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <LineChart data={timeSavedData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//                   <XAxis dataKey="week" stroke="#ccc" />
//                   <YAxis stroke="#ccc" />
//                   <Line
//                     type="monotone"
//                     dataKey="Manual"
//                     stroke="#ef4444"
//                     strokeWidth={2}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="AI"
//                     stroke="#ef4444"
//                     strokeWidth={2}
//                   />
//                   <RechartTooltip />
//                   <Legend />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="text-center">
//           <h3 className="text-3xl font-bold text-white mb-4">
//             This Is Your Sign to Stop Working Manually
//           </h3>
//           <p className="text-gray-400 mb-6 text-lg">
//             Let our AI assistants do the talking — while you focus on growing
//             your business.
//           </p>
//           <Link to="/contact">
//             <button  className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
//               Book a Free Strategy Call
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAssistant;

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip as RechartTooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import { Link } from "react-router-dom";

// const timeSavedData = [
//   { week: "Week 1", Manual: 12, AI: 2 },
//   { week: "Week 2", Manual: 11, AI: 2 },
//   { week: "Week 3", Manual: 10, AI: 2 },
//   { week: "Week 4", Manual: 11, AI: 2 },
// ];

// const AIAssistant = () => {
//   return (
//     <div className="relative min-h-screen bg-white text-black">
//       {/* HERO SECTION (no gradient, solid bg-black) */}
//       <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black to-[#E32225] text-white">
//         {/* Text Content */}
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             AI Chat & Call Assistants
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 font-medium">
//             Convert leads, handle support, and qualify prospects — all through
//             intelligent, automated conversations.
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT (white bg, black text) */}
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         <p className="text-xl text-gray-700 mb-12 leading-relaxed">
//           You're spending too much time on repetitive tasks. Whether it's
//           answering the same customer questions, calling unqualified leads, or
//           scheduling appointments — these bottlenecks slow growth. Our AI
//           Assistants solve all of this by automating customer conversations
//           across chat and phone.
//         </p>

//         {/* Chat Assistant */}
//         <section className="mb-16">
//           <h2 className="text-4xl font-bold mb-4 text-black">
//             What is an AI Chat Assistant?
//           </h2>
//           <p className="text-gray-700 mb-6">
//             An AI Chat Assistant is a conversational automation bot trained to
//             mimic a human support or sales rep. Built using Voiceflow, ManyChat,
//             or GHL, it handles customer interaction on websites, WhatsApp,
//             Instagram, and more — instantly.
//           </p>
//           <ul className="list-disc pl-6 text-gray-700 space-y-2">
//             <li>Replies to user queries instantly across platforms</li>
//             <li>Captures contact info, preferences, and stores in CRM</li>
//             <li>Qualifies leads using dynamic questions before routing</li>
//             <li>Lets users book appointments right inside the chat</li>
//             <li>Responds 24/7 without the need for a human agent</li>
//           </ul>
//         </section>

//         {/* Call Assistant */}
//         <section className="mb-16">
//           <h2 className="text-4xl font-bold mb-4 text-black">
//             What is an AI Call Assistant?
//           </h2>
//           <p className="text-gray-700 mb-6">
//             AI Call Assistants are automated voice bots that call or receive
//             calls — simulating human agents. They qualify leads, schedule
//             meetings, and escalate complex queries to your human team. It speaks
//             fluently, understands logic, and reduces your need for call center
//             staff.
//           </p>
//           <ul className="list-disc pl-6 text-gray-700 space-y-2">
//             <li>Instantly call new leads as soon as they fill a form</li>
//             <li>Use smart logic to filter serious inquiries</li>
//             <li>Book meetings into Google Calendar or GHL</li>
//             <li>Transfer to a human seamlessly if needed</li>
//             <li>Multi-language support and smart pause/interrupt</li>
//           </ul>
//         </section>

//         {/* Benefits */}
//         <section className="mb-20">
//           <h2 className="text-4xl font-bold mb-4 text-black">
//             Why AI Assistants Are Game-Changing
//           </h2>
//           <p className="text-gray-700 mb-6">
//             If you're manually replying to leads or scheduling meetings by hand
//             — you're wasting time and losing revenue. Our clients have reduced
//             response times by 95%, saved dozens of hours per month, and doubled
//             their lead conversion rates after using AI Assistants.
//           </p>
//           <ul className="list-disc pl-6 text-gray-800 space-y-3 text-lg">
//             <li>
//               <strong>Respond 10x Faster:</strong> Instant replies mean more
//               engagement.
//             </li>
//             <li>
//               <strong>Convert More Leads:</strong> 25%–33% conversion vs 14%
//               industry average.
//             </li>
//             <li>
//               <strong>Save 40+ hours/month:</strong> On follow-ups, bookings,
//               and queries.
//             </li>
//             <li>
//               <strong>Run 24/7:</strong> No sick days. No time off. Always
//               online.
//             </li>
//           </ul>
//         </section>

//         {/* Charts */}
//         <section className="mb-20">
//           <h2 className="text-4xl font-bold mb-4 text-black">
//             Real-World Impact: Proven Stats
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             {/* Chart 1 */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-black">
//                 Lead Response Time (mins)
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <BarChart
//                   data={[
//                     { label: "Manual", time: 45 },
//                     { label: "AI", time: 0.5 },
//                   ]}
//                 >
//                   <XAxis dataKey="label" stroke="#333" />
//                   <YAxis stroke="#333" />
//                   <Bar dataKey="time" fill="#E32225" radius={[6, 6, 0, 0]} />
//                   <RechartTooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Chart 2 */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-black">
//                 Lead-to-Customer Conversion Rate
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <BarChart
//                   data={[
//                     { label: "No AI", percent: 14 },
//                     { label: "With AI", percent: 30 },
//                   ]}
//                 >
//                   <XAxis dataKey="label" stroke="#333" />
//                   <YAxis stroke="#333" />
//                   <Bar dataKey="percent" fill="#E32225" radius={[6, 6, 0, 0]} />
//                   <RechartTooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Chart 3 */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-black">
//                 Weekly Support Hours Saved
//               </h3>
//               <ResponsiveContainer width="100%" height={260}>
//                 <LineChart data={timeSavedData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#999" />
//                   <XAxis dataKey="week" stroke="#333" />
//                   <YAxis stroke="#333" />
//                   <Line
//                     type="monotone"
//                     dataKey="Manual"
//                     stroke="#E32225"
//                     strokeWidth={2}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="AI"
//                     stroke="#111"
//                     strokeWidth={2}
//                   />
//                   <RechartTooltip />
//                   <Legend />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="text-center">
//           <h3 className="text-4xl font-bold mb-4 text-black">
//             This Is Your Sign to Stop Working Manually
//           </h3>
//           <p className="text-gray-700 mb-6 text-lg">
//             Let our AI assistants do the talking — while you focus on growing
//             your business.
//           </p>
//           <Link to="/contact">
//             <button className="relative px-6 py-3 bg-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
//               Book a Free Strategy Call
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAssistant;

// /pages/AIAssistant.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BrandIdentity = () => {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#E32225] text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Brand Identity Design
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl opacity-80 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We build visual identities that are memorable, consistent & powerful.
        </motion.p>
      </section>

      {/* PARAGRAPH SECTION */}
      <section className="py-20 px-6 flex items-center justify-center">
        <p className="max-w-3xl text-center text-lg leading-8 text-black/80">
          Your brand identity is more than just a logo — it’s the emotional perception your audience forms at first sight. 
          We create visually unified brand systems that reflect your voice, tone, personality and story. 
          From concept direction to crafted design language, we ensure your brand feels premium, confident and unforgettable everywhere.
        </p>
      </section>

      {/* IMAGE GRID */}
      <section className="w-full pb-20 px-6">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-2">
          {[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((id, index) => (
            <motion.div
              key={index}
              className="w-full h-48 md:h-60 overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://picsum.photos/id/${id}/500/500`}
                alt="brand identity sample"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* RELATED PROJECTS SECTION */}
      <section className="w-full bg-white py-24 px-6">
        <h2 className="text-5xl md:text-6xl bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent font-extrabold flex items-center justify-center gap-2 relative z-10 mb-12">
          More Work You’ll Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { id: 1, name: "Project One" },
            { id: 2, name: "Project Two" },
            { id: 3, name: "Project Three" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full cursor-pointer"
            >
              <Link to={`/portfolio/${item.id}`}>
                <div className="w-full h-[350px] overflow-hidden rounded-md shadow-lg">
                  <img
                    src={`https://picsum.photos/seed/${item.id}/800/800`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-3 text-black font-semibold">
                  {item.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BrandIdentity;
