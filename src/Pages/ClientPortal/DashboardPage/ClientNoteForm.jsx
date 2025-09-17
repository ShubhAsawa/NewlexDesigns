import React, { useState, useEffect } from "react";
import { appendClientNote } from "./clientNotes";
import { motion } from "framer-motion";

const ClientNoteForm = ({ clientId, onNoteAdded }) => {
  const [noteText, setNoteText] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noteText.trim()) {
      setStatusMessage("Note cannot be empty.");
      setShowStatus(true);
      return;
    }

    setLoading(true);
    setStatusMessage("");
    setShowStatus(false);

    const success = await appendClientNote(clientId, noteText.trim());

    if (success) {
      setStatusMessage("✅ Note added successfully.");
      setNoteText("");
      onNoteAdded?.();
    } else {
      setStatusMessage("❌ Failed to add note. Please try again.");
    }

    setLoading(false);
    setShowStatus(true);

    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
  };

  return (
    <section className="bg-black text-white px-6 pb-24 pt-0 w-full">
      <div className="max-w-3xl mx-auto text-center">
        {/* Shimmer Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#E32225] via-[#FFD700] to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          Add a New Note
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows="4"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Type your note here..."
            className="w-full p-4 rounded-lg  text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#E32225]"
            style={{ background: "linear-gradient(135deg, #281a1aff, #0f0a0aff)" }}></textarea>
          

          <button
            type="submit"
            disabled={loading}
            className="bg-[#E32225] hover:bg-[#b71c1c] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Note"}
          </button>

          {/* Fade-in status message */}
          {showStatus && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-2 text-sm text-gray-300"
            >
              {statusMessage}
            </motion.p>
          )}
        </form>
      </div>
      
    </section>
  );
};

export default ClientNoteForm;
