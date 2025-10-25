import React, { useEffect, useState } from "react";
import { fetchClientNotes } from "./clientNotes";
import { motion } from "framer-motion";

const ClientNoteBox = ({ clientId, refreshTrigger }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      setLoading(true);
      const result = await fetchClientNotes(clientId);
      setNotes(result);
      setLoading(false);
    }

    if (clientId) {
      loadNotes();
    }
  }, [clientId, refreshTrigger]);

  return (
    <section className="bg-black text-white px-6 pb-20 pt-0 w-full">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#E32225] via-[#FFD700] to-[#E32225] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          Your Previous Notes
        </motion.h2>

        {/* Notes list */}
        {loading ? (
          <p className="text-gray-400">Loading notes...</p>
        ) : notes.length === 0 ? (
          <p className="text-gray-500 italic">No notes submitted yet.</p>
        ) : (
          <ul className="space-y-4 text-left">
            {notes.map((note, index) => (
              <li
                key={index}
                className=" rounded-xl p-5 border border-[#E32225] shadow-sm"
                style={{ background: "linear-gradient(135deg, #281a1aff, #0f0a0aff)" }}>
              
                <div className="text-sm text-gray-400 mb-1">
                  🕒 {note.timestamp}
                </div>
                <div className="text-base text-white whitespace-pre-wrap">
                  {note.message}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ClientNoteBox;
