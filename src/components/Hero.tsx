"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  partnerOne: string;
  partnerTwo: string;
  blessingText: string;
  invitationNote: string;
  heroImage: string;
  heroImage2?: string;
  heroVariant?: "arch" | "cutout";
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
  heroImage2,
  heroVariant = "arch",
  textClass = "text-kumkum",
  accentClass = "text-gold",
  frameClass = "border-cream shadow-[0_20px_40px_-15px_rgba(62,23,27,0.4)]"
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Standard parallax for single image
  const singleImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Dual image scroll up transition (slides from 0% to -50% to reveal the second image underneath)
  const dualImageY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);

  if (heroVariant === "cutout") {
    // Cutout / Side Image Layout
    return (
      <section ref={containerRef} className="relative min-h-[120vh] flex flex-col pt-32 px-6 overflow-hidden">
        <motion.div 
          style={{ y: singleImageY, opacity }}
          className="absolute top-20 left-0 w-3/5 h-full z-0"
        >
          {/* Apply a horizontal gradient mask so the right edge fades smoothly into the text area */}
          <div className="w-full h-[120%] relative" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)' }}>
            <img 
              src={heroImage} 
              alt="Hero Graphic" 
              className="w-full h-full object-cover object-left-top"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-right z-10 space-y-6 w-1/2 ml-auto mt-10 pr-2"
        >
          <p className={`font-sans text-[8px] sm:text-[10px] tracking-[0.2em] uppercase ${textClass}/60 leading-relaxed`}>
            {blessingText}
          </p>
          <h2 className={`font-display text-4xl sm:text-5xl ${textClass} leading-tight flex flex-col items-end`}>
            <div className="flex items-center gap-2">
              {partnerOne} <span className={`font-script text-5xl sm:text-6xl ${accentClass}`}>&</span>
            </div>
            <span>{partnerTwo}</span>
          </h2>
          <p className={`font-sans text-[9px] sm:text-[11px] leading-relaxed tracking-widest ${textClass}/80 uppercase pl-4`}>
            {invitationNote}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center pt-32 px-6 overflow-hidden">
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
          style={{ y: heroImage2 ? dualImageY : singleImageY, opacity }}
          className={`absolute inset-[-10%] w-[120%] ${heroImage2 ? "h-[220%]" : "h-[120%]"}`}
        >
          {heroImage2 ? (
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-1/2">
                <img 
                  src={heroImage} 
                  alt="Couple Portrait" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-1/2">
                <img 
                  src={heroImage2} 
                  alt="Venue / Cathedral" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ) : (
            <img 
              src={heroImage} 
              alt="Couple Portrait" 
              className="w-full h-full object-cover object-center"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
