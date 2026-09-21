"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarPlus, Music2, VolumeX, MessageCircleHeart } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface QuickActionDockProps {
  whatsappNumber: string;
  rsvpCustomMessage: string;
  googleMapsUrl: string;
  calendar: {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  };
  audioUrl: string;
  isUnlocked: boolean;
}

export default function QuickActionDock({
  whatsappNumber,
  rsvpCustomMessage,
  googleMapsUrl,
  calendar,
  audioUrl,
  isUnlocked,
}: QuickActionDockProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
    }

    if (isUnlocked) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioUrl, isUnlocked]);

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
    const encodedMessage = encodeURIComponent(rsvpCustomMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const openMap = () => {
    window.open(googleMapsUrl, "_blank");
  };

  const addToCalendar = () => {
    const { title, startDate, endDate, description } = calendar;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate.replace(/[-:]/g, '')}/${endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(description)}`;
    window.open(url, "_blank");
  };

  if (!isUnlocked) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
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
