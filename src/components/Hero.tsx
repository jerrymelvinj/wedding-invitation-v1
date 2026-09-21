"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  partnerOne: string;
  partnerTwo: string;
  blessingText: string;
  invitationNote: string;
  heroImage: string;
  textClass?: string;
  accentClass?: string;
  frameClass?: string;
}

export default function Hero({
  partnerOne,
  partnerTwo,
  blessingText,
  invitationNote,
  heroImage,
  textClass = "text-kumkum",
  accentClass = "text-gold",
  frameClass = "border-cream shadow-[0_20px_40px_-15px_rgba(62,23,27,0.4)]"
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center pt-24 px-6 overflow-hidden">
      {/* Editorial typography reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center z-10 mb-12 space-y-6 max-w-lg mx-auto"
      >
        <p className={`font-sans text-[10px] tracking-[0.2em] uppercase ${textClass}/60 leading-relaxed px-4`}>
          {blessingText}
        </p>
        <h2 className={`font-display text-4xl sm:text-5xl ${textClass} leading-tight`}>
          {partnerOne} <span className={`font-script text-5xl sm:text-6xl ${accentClass} mx-2`}>&</span> {partnerTwo}
        </h2>
        <p className={`font-sans text-[11px] leading-relaxed tracking-widest ${textClass}/80 uppercase px-6`}>
          {invitationNote}
        </p>
      </motion.div>

      {/* Parallax Arched Portrait */}
      <div className={`relative w-full max-w-sm aspect-[3/4] mx-auto rounded-t-full overflow-hidden border-4 z-10 ${frameClass}`}>
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <img 
            src={heroImage} 
            alt="Couple Portrait" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
