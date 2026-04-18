import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function LightningStrike() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  // Simplified main path
  const mainPath = "M 0 0 L 120 75 L 85 155 L 290 235 L 205 395 L 435 465 L 345 635 L 625 705 L 515 875 L 1000 1000";
  
  const branches = [
    { d: "M 120 75 L 210 45 L 280 90", w: 1.5, delay: 0.1 },
    { d: "M 290 235 L 420 170 L 480 220", w: 2, delay: 0.15 },
    { d: "M 435 465 L 600 400 L 670 450", w: 2, delay: 0.18 },
    { d: "M 625 705 L 800 640 L 870 710", w: 1.5, delay: 0.2 },
    { d: "M 345 635 L 210 570 L 160 630", w: 1.5, delay: 0.22 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform">
      {/* Full Screen Flash - Simplified transition */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 0.3, 0, 0.1, 0] } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-white z-[9999] pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 will-change-opacity"
      >
        <svg 
          viewBox="0 0 1000 1000" 
          className="w-full h-full opacity-70"
          preserveAspectRatio="none"
        >
          {/* Removed heavy SVG filters, using CSS blur/drop-shadow instead */}
          
          {/* Deep Violet Atmospheric Haze - Optimizing with will-change */}
          <motion.path
            d={mainPath}
            fill="none"
            stroke="oklch(0.66 0.22 300)"
            strokeWidth="50"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 0.3, 0.1] } : { opacity: 0 }}
            transition={{ duration: 2 }}
            className="blur-[40px] will-change-[opacity,filter]"
          />

          {/* Branches */}
          {branches.map((b, i) => (
            <motion.path
              key={i}
              d={b.d}
              fill="none"
              stroke="white"
              strokeWidth={b.w}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { 
                pathLength: 1, 
                opacity: [0, 1, 0.15],
              } : { pathLength: 0, opacity: 0 }}
              transition={{ 
                pathLength: { duration: 0.2, delay: b.delay },
                opacity: { duration: 0.3, delay: b.delay },
              }}
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] will-change-[pathLength,opacity]"
            />
          ))}

          {/* Main Trunk Strike - Simplified jitter */}
          <motion.path
            d={mainPath}
            fill="none"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { 
              pathLength: 1, 
              opacity: [0, 1, 0.3],
              stroke: ["#fff", "#fff", "oklch(0.66 0.22 300)"]
            } : { pathLength: 0, opacity: 0 }}
            transition={{ 
              pathLength: { duration: 0.3, ease: "easeOut" },
              opacity: { times: [0, 0.1, 1], duration: 1.5 },
              stroke: { delay: 0.5, duration: 2 }
            }}
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] will-change-[pathLength,opacity,stroke]"
          />

          {/* Hot White Core */}
          <motion.path
            d={mainPath}
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { 
              pathLength: 1, 
              opacity: [0, 1, 0.1],
            } : { pathLength: 0, opacity: 0 }}
            transition={{ 
              pathLength: { duration: 0.2, delay: 0.05 },
              opacity: { times: [0, 0.1, 1], duration: 1 }
            }}
            className="will-change-[pathLength,opacity]"
          />
        </svg>
      </motion.div>
    </div>
  );
}
