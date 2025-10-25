import React from "react";
import { motion } from "framer-motion";

const DeliverablesList = ({ deliverables }) => {
  return (
    <section className="relative h-[calc(100vh+100px)] w-full flex flex-col justify-center items-center text-center pt-[100px] text-white bg-black">
      <div className="max-w-4xl px-6">
        {/* Heading with red-yellow shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E32225] via-[#FFD700] to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          What You’ll Receive
        </motion.h2>

        {/* Deliverables Content */}
        {deliverables ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="prose prose-invert text-gray-300 leading-relaxed text-left"
            dangerouslySetInnerHTML={{ __html: deliverables }}
          />
        ) : (
          <p className="text-gray-500 italic">No deliverables listed yet.</p>
        )}
      </div>
    </section>
  );
};

export default DeliverablesList;
