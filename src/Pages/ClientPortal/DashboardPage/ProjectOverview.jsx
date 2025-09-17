import React from "react";
import { motion } from "framer-motion";

const ProjectOverview = ({ summary }) => {
  return (
    <div className="bg-black text-white px-6 pb-20 pt-0">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E32225] via-[#FFD700] to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          What We’re Building Together
        </motion.h2>

        {/* Summary Content */}
        {summary ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="prose prose-invert text-gray-300 leading-relaxed text-left"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        ) : (
          <p className="text-gray-400 italic">No project summary available.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
