"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarPlus, Music2, VolumeX, MessageCircleHeart } from "lucide-react";
import { useState } from "react";

import { useRef, useEffect } from "react";

export default function FloatingNav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3");
    audioRef.current.loop = true;
    
    // Play automatically when component mounts (after unlock)
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRSVP = () => {
    window.open("https://wa.me/918248604075?text=Hi%20Melvin%20%26%20Nikitha!%20We%20received%20your%20invitation%20and%20would%20love%20to%20attend%20the%20wedding.%20Guest%20count:%20", '_blank');
  };

  const openMap = () => {
    window.open("https://aadisaktthiresorts.com/", "_blank");
  };

  const addToCalendar = () => {
    window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration+of+Melvin+%26+Nikitha&dates=20301212T040000Z/20301212T173000Z&details=Join+us+to+celebrate+the+union+of+Melvin+and+Nikitha!&location=Bengaluru,+India", "_blank");
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[380px]"
    >
      {/* Primary RSVP Button inside the floating container but stacked above nav */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2">
        <button 
          onClick={handleRSVP}
          className="flex items-center gap-2 bg-kumkum text-sandstone px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(62,23,27,0.4)] border border-gold/30 active:scale-95 transition-transform"
        >
          <MessageCircleHeart size={18} />
          <span className="font-sans text-xs tracking-widest uppercase font-semibold">RSVP via WhatsApp</span>
        </button>
      </div>

      <div className="bg-sandstone/80 backdrop-blur-md border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-3xl p-4 flex justify-around items-center">
        <button onClick={openMap} className="flex flex-col items-center gap-1 text-kumkum/80 hover:text-kumkum transition-colors">
          <div className="bg-cream p-3 rounded-full shadow-sm">
            <MapPin size={20} />
          </div>
          <span className="font-sans text-[9px] tracking-wider uppercase">Map</span>
        </button>

        <button onClick={addToCalendar} className="flex flex-col items-center gap-1 text-kumkum/80 hover:text-kumkum transition-colors">
          <div className="bg-cream p-3 rounded-full shadow-sm">
            <CalendarPlus size={20} />
          </div>
          <span className="font-sans text-[9px] tracking-wider uppercase">Save</span>
        </button>

        <button onClick={toggleMusic} className="flex flex-col items-center gap-1 text-kumkum/80 hover:text-kumkum transition-colors">
          <div className="bg-cream p-3 rounded-full shadow-sm relative overflow-hidden">
            {isPlaying ? (
              <Music2 size={20} className="animate-pulse" />
            ) : (
              <VolumeX size={20} />
            )}
          </div>
          <span className="font-sans text-[9px] tracking-wider uppercase">{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>
    </motion.div>
  );
}
