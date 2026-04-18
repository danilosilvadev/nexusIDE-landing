import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Bot, Target, Sparkles } from 'lucide-react';

export function BackgroundGlow() {
  const { scrollYProgress } = useScroll();
  
  // More aggressive parallax
  const driftY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const driftX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const rotateRay = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#020202]">
      {/* Dynamic Grid */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Radiant Power Source (Symbolic Rays) */}
      <motion.div 
        style={{ rotate: rotateRay }}
        className="absolute top-[-30%] left-[-20%] w-[160%] h-[160%] bg-[radial-gradient(circle_at_center,oklch(0.66_0.22_300/0.15)_0%,transparent_60%)] opacity-80"
      />

      {/* Subconscious Strategy Elements */}
      <motion.div style={{ y: driftY, x: driftX }} className="absolute inset-0">
        
        {/* Floating Icons with Glow */}
        <div className="absolute top-[15%] left-[10%] opacity-20 blur-[1px] group">
          <div className="w-40 h-40 rounded-full border border-nxl-violet/40 bg-nxl-violet/5 flex items-center justify-center shadow-[0_0_40px_rgba(139,63,220,0.1)]">
            <Target className="w-16 h-16 text-nxl-violet" />
          </div>
          <div className="mt-4 text-[11px] font-mono text-nxl-violet/60 uppercase tracking-[0.4em] text-center font-black">Strategy_Core</div>
        </div>

        <div className="absolute top-[45%] right-[5%] opacity-20 blur-[2px]">
          <div className="w-48 h-48 rounded-full border border-nxl-green/40 bg-nxl-green/5 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <Bot className="w-20 h-20 text-nxl-green" />
          </div>
          <div className="mt-4 text-[11px] font-mono text-nxl-green/60 uppercase tracking-[0.4em] text-center font-black">Agent_Engine</div>
        </div>

        <div className="absolute top-[80%] left-[8%] opacity-20 blur-[1px]">
          <div className="w-32 h-32 rounded-full border border-nxl-cyan/40 bg-nxl-cyan/5 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <Network className="w-12 h-12 text-nxl-cyan" />
          </div>
          <div className="mt-4 text-[11px] font-mono text-nxl-cyan/60 uppercase tracking-[0.4em] text-center font-black">NXL_Graph</div>
        </div>

        {/* Strategic Particles */}
        <div className="absolute top-[30%] right-[25%] opacity-10">
          <Sparkles className="w-12 h-12 text-nxl-amber animate-pulse" />
        </div>

        {/* Drifting Syntax (More visible) */}
        <div className="absolute top-[20%] left-[75%] opacity-10 font-mono text-[18px] text-white/60 leading-relaxed -rotate-12 select-none">
          @campaign {'{'} <br/>
          &nbsp;&nbsp;@goals target="10k" <br/>
          {'}'}
        </div>

        <div className="absolute top-[65%] left-[25%] opacity-10 font-mono text-[16px] text-white/60 leading-relaxed rotate-6 select-none">
          @agent cron="0 9 * * *" <br/>
          &nbsp;&nbsp;{'<post />'}
        </div>

      </motion.div>

      {/* Depth Orbs (Blurred) */}
      <div className="absolute top-[10%] left-[-5%] w-[1000px] h-[1000px] bg-nxl-violet/15 rounded-full blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[800px] h-[800px] bg-nxl-cyan/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      {/* Vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)]"></div>
    </div>
  );
}
