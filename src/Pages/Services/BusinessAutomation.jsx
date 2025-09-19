// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
// } from "recharts";
// import { Link } from "react-router-dom";

// const automationImpact = [
//   { task: "CRM Updates", Manual: 8, Automated: 1 },
//   { task: "Email Follow-ups", Manual: 10, Automated: 2 },
//   { task: "Appointment Scheduling", Manual: 6, Automated: 0.5 },
//   { task: "Feedback Collection", Manual: 4, Automated: 0.5 },
// ];

// const BusinessAutomation = () => {
//   return (
//     <div className="relative min-h-screen bg-[#0e0e0e] text-white px-6 pt-28 pb-16 -mt-[100px]">
//       {/* HERO SECTION */}
//       <div className="relative h-[360px] md:h-[440px] flex flex-col justify-center items-center text-center px-4 mb-20">
//         <div className="absolute inset-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Business Automation Workflows
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 font-medium">
//             Eliminate repetitive tasks and connect your systems into one
//             seamless engine.
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-5xl mx-auto">
//         <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//           Most businesses operate on fragmented tools: CRMs, email platforms,
//           booking calendars, spreadsheets. This results in human error, wasted
//           hours, and missed opportunities.
//           <br />
//           <br />
//           We build custom automation workflows that unify all your systems —
//           updating data, triggering emails, syncing calendars, and following up
//           automatically — so your team focuses on what matters: growing the
//           business.
//         </p>

//         <section className="mb-14">
//           <h2 className="text-3xl font-semibold text-white mb-4">
//             What Can Be Automated?
//           </h2>
//           <ul className="list-disc pl-6 text-gray-400 space-y-2">
//             <li>CRM data sync between lead forms and sales pipelines</li>
//             <li>Email/SMS follow-ups based on user behavior or form fills</li>
//             <li>Automated scheduling and Google Calendar integration</li>
//             <li>
//               Post-meeting reminders, confirmations, and survey collection
//             </li>
//             <li>Auto-tagging and segmentation of contacts</li>
//           </ul>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-white mb-6">
//             Why It Matters
//           </h2>
//           <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
//             <li>
//               <strong>Save 50–70% of admin time</strong> by cutting out
//               repetitive tasks
//             </li>
//             <li>
//               <strong>Eliminate human error</strong> with logic-driven flows
//             </li>
//             <li>
//               <strong>Scale operations</strong> without increasing headcount
//             </li>
//             <li>
//               <strong>Deliver faster response times</strong> and higher customer
//               satisfaction
//             </li>
//           </ul>
//         </section>

//         {/* CHART */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-semibold text-white mb-10">
//             Automation vs Manual Time (in hours per week)
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={automationImpact}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="task" stroke="#ccc" />
//               <YAxis stroke="#ccc" />
//               <Tooltip />
//               <Legend />
//               <Bar
//                 dataKey="Manual"
//                 fill="#ef4444"
//                 radius={[6, 6, 0, 0]}
//                 name="Manual"
//               />
//               <Bar
//                 dataKey="Automated"
//                 fill="#10b981"
//                 radius={[6, 6, 0, 0]}
//                 name="Automated"
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </section>

//         {/* FINAL CTA */}
//         <div className="text-center">
//           <h3 className="text-3xl font-bold text-white mb-4">
//             Free Up Your Team. Automate What Doesn’t Need Humans.
//           </h3>
//           <p className="text-gray-400 mb-6 text-lg">
//             We'll design automation workflows tailored to your unique
//             operations.
//           </p>
//           <Link to="/contact">
//             <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
//               Book a Free Workflow Consultation
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessAutomation;
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const timeSavedData = [
  { week: "Week 1", Manual: 12, AI: 2 },
  { week: "Week 2", Manual: 11, AI: 2 },
  { week: "Week 3", Manual: 10, AI: 2 },
  { week: "Week 4", Manual: 11, AI: 2 },
];

const AIAssistant = () => {
  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* HERO SECTION (no gradient, solid bg-black) */}
      <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black to-[#E32225] text-white">
        {/* Text Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Chat & Call Assistants
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Convert leads, handle support, and qualify prospects — all through
            intelligent, automated conversations.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT (white bg, black text) */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          You're spending too much time on repetitive tasks. Whether it's
          answering the same customer questions, calling unqualified leads, or
          scheduling appointments — these bottlenecks slow growth. Our AI
          Assistants solve all of this by automating customer conversations
          across chat and phone.
        </p>

        {/* Chat Assistant */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            What is an AI Chat Assistant?
          </h2>
          <p className="text-gray-700 mb-6">
            An AI Chat Assistant is a conversational automation bot trained to
            mimic a human support or sales rep. Built using Voiceflow, ManyChat,
            or GHL, it handles customer interaction on websites, WhatsApp,
            Instagram, and more — instantly.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Replies to user queries instantly across platforms</li>
            <li>Captures contact info, preferences, and stores in CRM</li>
            <li>Qualifies leads using dynamic questions before routing</li>
            <li>Lets users book appointments right inside the chat</li>
            <li>Responds 24/7 without the need for a human agent</li>
          </ul>
        </section>

        {/* Call Assistant */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            What is an AI Call Assistant?
          </h2>
          <p className="text-gray-700 mb-6">
            AI Call Assistants are automated voice bots that call or receive
            calls — simulating human agents. They qualify leads, schedule
            meetings, and escalate complex queries to your human team. It speaks
            fluently, understands logic, and reduces your need for call center
            staff.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Instantly call new leads as soon as they fill a form</li>
            <li>Use smart logic to filter serious inquiries</li>
            <li>Book meetings into Google Calendar or GHL</li>
            <li>Transfer to a human seamlessly if needed</li>
            <li>Multi-language support and smart pause/interrupt</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Why AI Assistants Are Game-Changing
          </h2>
          <p className="text-gray-700 mb-6">
            If you're manually replying to leads or scheduling meetings by hand
            — you're wasting time and losing revenue. Our clients have reduced
            response times by 95%, saved dozens of hours per month, and doubled
            their lead conversion rates after using AI Assistants.
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-3 text-lg">
            <li>
              <strong>Respond 10x Faster:</strong> Instant replies mean more
              engagement.
            </li>
            <li>
              <strong>Convert More Leads:</strong> 25%–33% conversion vs 14%
              industry average.
            </li>
            <li>
              <strong>Save 40+ hours/month:</strong> On follow-ups, bookings,
              and queries.
            </li>
            <li>
              <strong>Run 24/7:</strong> No sick days. No time off. Always
              online.
            </li>
          </ul>
        </section>

        {/* Charts */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Real-World Impact: Proven Stats
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Chart 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Lead Response Time (mins)
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={[
                    { label: "Manual", time: 45 },
                    { label: "AI", time: 0.5 },
                  ]}
                >
                  <XAxis dataKey="label" stroke="#333" />
                  <YAxis stroke="#333" />
                  <Bar dataKey="time" fill="#E32225" radius={[6, 6, 0, 0]} />
                  <RechartTooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Lead-to-Customer Conversion Rate
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={[
                    { label: "No AI", percent: 14 },
                    { label: "With AI", percent: 30 },
                  ]}
                >
                  <XAxis dataKey="label" stroke="#333" />
                  <YAxis stroke="#333" />
                  <Bar dataKey="percent" fill="#E32225" radius={[6, 6, 0, 0]} />
                  <RechartTooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Weekly Support Hours Saved
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={timeSavedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#999" />
                  <XAxis dataKey="week" stroke="#333" />
                  <YAxis stroke="#333" />
                  <Line
                    type="monotone"
                    dataKey="Manual"
                    stroke="#E32225"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="AI"
                    stroke="#111"
                    strokeWidth={2}
                  />
                  <RechartTooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4 text-black">
            This Is Your Sign to Stop Working Manually
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Let our AI assistants do the talking — while you focus on growing
            your business.
          </p>
          <Link to="/contact">
            <button className="relative px-6 py-3 bg-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
              Book a Free Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;

