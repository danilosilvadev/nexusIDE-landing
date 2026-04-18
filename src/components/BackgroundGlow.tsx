import { motion, useScroll, useTransform } from 'framer-motion';

export function BackgroundGlow() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to moving coordinates
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      {/* Orb 1: Violet */}
      <motion.div 
        style={{ top: y1, left: x1 }}
        className="absolute w-[600px] h-[600px] rounded-full bg-nxl-violet/10 blur-[120px]"
      />
      
      {/* Orb 2: Cyan */}
      <motion.div 
        style={{ top: y2, left: x2 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-nxl-cyan/10 blur-[100px]"
      />

      {/* Static gradient overlay to keep it dark */}
      <div className="absolute inset-0 bg-background-main/40"></div>
    </div>
  );
}
