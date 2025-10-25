// src/components/MusicPlayer.jsx
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa"; // 🎵 and ⏸ icons

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // default volume
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/Music.mp3" loop preload="auto" />

      {/* Transparent Floating Music Button */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-black to-[#E32225] border border-[#E32225] text-white hover:text-yellow-400 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(227,34,37,0.7)] transition-all duration-300 z-50`}
        aria-label="Toggle Music"
      >
        {playing ? <FaPause size={20} /> : <FaMusic size={20} />}
      </button>
    </>
  );
}
