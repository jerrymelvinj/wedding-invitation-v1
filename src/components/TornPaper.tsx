interface TornPaperProps {
  svgFillClass?: string;
  containerBgClass?: string;
}

export default function TornPaper({ svgFillClass = "fill-cream", containerBgClass = "bg-cream" }: TornPaperProps) {
  return (
    <div className="w-full relative z-20 mt-[-60px] drop-shadow-[0_-10px_10px_rgba(0,0,0,0.05)]">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${svgFillClass}`}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
      </svg>
      <div className={`w-full h-20 -mt-1 ${containerBgClass}`}></div>
    </div>
  );
}
