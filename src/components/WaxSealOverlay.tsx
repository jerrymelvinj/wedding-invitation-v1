"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WaxSealOverlayProps {
  onUnlock: () => void;
}

export default function WaxSealOverlay({ onUnlock }: WaxSealOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Play audio here or trigger via callback
    onUnlock();
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isOpen ? "-100%" : 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-kumkum text-sandstone md:absolute"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] opacity-20 mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="font-display text-5xl tracking-widest text-gold">M & N</h1>
          <p className="font-sans text-sm tracking-[0.3em] uppercase">12th December 2030</p>
        </motion.div>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="relative flex items-center justify-center w-32 h-32 rounded-full bg-[#8b1820] shadow-[0_4px_15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.2)] border-2 border-[#5c0e13]"
        >
          <div className="absolute inset-2 rounded-full border border-[#b22222] opacity-50" />
          <span className="font-display text-gold text-center leading-tight tracking-widest text-sm">
            OPEN
          </span>
        </motion.button>
      </div>

      <motion.div 
        className="absolute bottom-10 left-0 w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="font-sans text-xs tracking-widest opacity-60">Tap to open</p>
      </motion.div>
    </motion.div>
  );
}
