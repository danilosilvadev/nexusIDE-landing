import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Network, Target, Bot, BookOpen, 
  GitMerge, Clock, Calendar as CalendarIcon,
  Search, Lightbulb, Map as MapIcon, FileText,
  Layout, CheckCircle2, AlertCircle,
  FileJson, FileCode, MousePointer2
} from 'lucide-react';

export function ScrollCodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Code Panel Opacities (Left side) - 9 steps
  const cStep1 = useTransform(scrollYProgress, [0, 0.04], [0, 1]); 
  const cStep2 = useTransform(scrollYProgress, [0.1, 0.14], [0, 1]); 
  const cStep3 = useTransform(scrollYProgress, [0.22, 0.26], [0, 1]); 
  const cStep4 = useTransform(scrollYProgress, [0.33, 0.37], [0, 1]); 
  const cStep5 = useTransform(scrollYProgress, [0.44, 0.48], [0, 1]); 
  const cStep6 = useTransform(scrollYProgress, [0.55, 0.59], [0, 1]); 
  const cStep7 = useTransform(scrollYProgress, [0.66, 0.70], [0, 1]); 
  const cStep8 = useTransform(scrollYProgress, [0.77, 0.81], [0, 1]); 
  const cStep9 = useTransform(scrollYProgress, [0.88, 0.92], [0, 1]); 

  // Slides Opacities & Scales (Right side)
  const phase = (p: number) => {
    const start = p * 0.11;
    const end = (p + 1) * 0.11;
    return {
      opacity: useTransform(scrollYProgress, [start, start + 0.03, end - 0.03, end], [0, 1, 1, 0]),
      scale: useTransform(scrollYProgress, [start, start + 0.03, end - 0.03, end], [0.95, 1, 1, 0.95]),
      y: useTransform(scrollYProgress, [start, start + 0.03, end - 0.03, end], [10, 0, 0, -10])
    };
  };

  const s1 = phase(0);
  const s2 = phase(1);
  const s3 = phase(2);
  const s4 = phase(3);
  const s5 = phase(4);
  const s6 = phase(5);
  const s7 = phase(6);
  const s8 = phase(7);
  const s9 = phase(8);

  return (
    <div ref={containerRef} className="h-[1200vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-6 pt-16 pb-8 overflow-hidden">
        
        <div className="text-center mb-8 shrink-0 z-10">
          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Role para <span className="text-nxl-violet text-glow-hero">Compilar</span>.
          </h2>
          <p className="text-white/50 mt-3 font-sans max-w-xl mx-auto text-[14px] md:text-[15px]">
            O código é a única fonte da verdade. O NexusIDE cuida de todo o resto.
          </p>
        </div>

        <div className="w-full max-w-[1150px] flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch min-h-0 pb-8 z-10">
          
          {/* Left Panel: Code Editor */}
          <div className="rounded-xl border border-white/10 bg-background-sidebar overflow-hidden shadow-2xl flex flex-col relative h-full">
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1a1a1a] shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#10b981]/80"></div>
              <div className="ml-4 font-mono text-[11px] text-white/40 flex items-center gap-2">
                <Code2 className="w-3 h-3" />
                marketing_engine.nxl
              </div>
            </div>
            
            <div className="flex-1 p-4 md:p-6 font-mono text-[11px] md:text-[12px] leading-loose bg-background-terminal flex text-white/70 overflow-hidden relative">
              <div className="text-white/20 select-none pr-4 text-right tabular-nums border-r border-white/5 mr-4 z-10 bg-background-terminal h-full">
                {Array.from({ length: 32 }).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="flex-1 relative overflow-y-auto pr-2 pb-20 scrollbar-hide">
                
                <motion.div style={{ opacity: cStep1 }}>
                  <span className="text-nxl-amber">@campaign</span><br/>
                  <span className="text-nxl-violet">component</span> NexusLaunch() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-nxl-violet">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'<campaign'}</span> <span className="text-nxl-green">name=</span><span className="text-nxl-cyan">"Q2"</span><span className="text-nxl-violet">{'>'}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'<post'}</span> <span className="text-nxl-green">title=</span><span className="text-nxl-cyan">"Teaser"</span> <span className="text-nxl-violet">{('/>')}</span><br/>
                </motion.div>

                <motion.div style={{ opacity: cStep2 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'<stage'}</span> <span className="text-nxl-green">window=</span><span className="text-nxl-cyan">"15d"</span><span className="text-nxl-violet">{'>'}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'<post'}</span> <span className="text-nxl-green">title=</span><span className="text-nxl-cyan">"Main"</span> <span className="text-nxl-violet">{('/>')}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'</stage>'}</span><br/>
                </motion.div>

                <motion.div style={{ opacity: cStep3 }}>
                  &nbsp;&nbsp;<span className="text-nxl-amber">@goals</span> <span className="text-nxl-violet">props</span> target = [{'{'} <span className="text-nxl-green">v</span>: <span className="text-nxl-cyan">10k</span> {'}'}]<br/>
                </motion.div>

                <motion.div style={{ opacity: cStep4 }}>
                  &nbsp;&nbsp;<span className="text-nxl-amber">@events</span> <span className="text-nxl-violet">props</span> dates = [{'{'} <span className="text-nxl-green">l</span>: <span className="text-nxl-cyan">"Launch"</span> {'}'}]<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'</campaign>'}</span><br/>
                  &nbsp;&nbsp;)<br/>
                  {'}'}<br/>
                </motion.div>

                <motion.div style={{ opacity: cStep5 }}>
                  <br/>
                  <span className="text-nxl-amber">@analysis</span> <span className="text-nxl-violet">component</span> Res() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-nxl-violet">return</span> <span className="text-nxl-violet">{'<research'}</span> <span className="text-nxl-green">src=</span><span className="text-nxl-cyan">"Market"</span> <span className="text-nxl-violet">{('/>')}</span><br/>
                  {'}'}<br/>
                </motion.div>

                <motion.div style={{ opacity: cStep6 }}>
                  &nbsp;&nbsp;<span className="text-nxl-amber">@insights</span> <span className="text-nxl-violet">props</span> data = <span className="text-white/40">"Analyzing..."</span><br/>
                </motion.div>

                <motion.div style={{ opacity: cStep7 }}>
                  <br/>
                  <span className="text-nxl-amber">@knowledge</span> <span className="text-nxl-violet">component</span> Lib() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-nxl-violet">import</span> <span className="text-nxl-cyan">'[[Brand_Book]]'</span>;<br/>
                  {'}'}<br/>
                </motion.div>

                <motion.div style={{ opacity: cStep8 }}>
                  <span className="text-nxl-violet">import</span> {'{'} Core {'}'} <span className="text-nxl-violet">from</span> <span className="text-nxl-cyan">'[[Market_Data]]'</span>;<br/>
                </motion.div>

                <motion.div style={{ opacity: cStep9 }}>
                  <br/>
                  <span className="text-nxl-amber">@agent</span> <span className="text-nxl-violet">component</span> AI() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-nxl-violet">return</span> <span className="text-nxl-violet">{'<agent'}</span> <span className="text-nxl-green">cron=</span><span className="text-nxl-cyan">"0 9 * * *"</span> <span className="text-nxl-violet">{'>'}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-nxl-violet">{'<generate'}</span> <span className="text-nxl-green">kind=</span><span className="text-nxl-cyan">"caption"</span> <span className="text-nxl-violet">{('/>')}</span><br/>
                  &nbsp;&nbsp;<span className="text-nxl-violet">{'</agent>'}</span><br/>
                  {'}'}<br/>
                </motion.div>

                <motion.div 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-white/50 inline-block mt-2"
                />
              </div>
            </div>
          </div>

          {/* Right Panel: Realistic Slides */}
          <div className="rounded-xl border border-white/10 bg-[#050505] relative overflow-hidden flex flex-col h-full shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* 1: Canvas (Graph) */}
            <motion.div style={s1} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-nxl-cyan" />
                  <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-cyan text-glow-hero">Canvas View</h3>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 font-mono">2 Nodes</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center relative">
                <div className="w-48 bg-[#111] border border-nxl-cyan/40 p-4 rounded-xl shadow-2xl relative z-10">
                   <div className="text-[9px] text-nxl-cyan font-bold uppercase mb-2 flex items-center gap-1.5">
                     <Layout className="w-3 h-3" /> Campaign Canvas
                   </div>
                   <div className="text-[13px] font-sans font-bold text-white/90">Nexus Launch Q2</div>
                   <div className="mt-4 flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-nxl-green"></div>
                     <div className="w-2 h-2 rounded-full bg-nxl-violet"></div>
                   </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-nxl-cyan to-white/5"></div>
                <div className="w-40 bg-[#111] border border-white/10 p-4 rounded-xl shadow-xl relative z-10">
                   <div className="text-[11px] font-sans font-bold text-white/60 italic">"Teaser Drop"</div>
                   <div className="mt-2 text-[9px] text-nxl-green font-mono uppercase">Published</div>
                </div>
                {/* Visual mouse decoration */}
                <MousePointer2 className="absolute top-1/2 right-1/4 w-4 h-4 text-white/20" />
              </div>
            </motion.div>

            {/* 2: Timeline */}
            <motion.div style={s2} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-12">
                <Clock className="w-5 h-5 text-nxl-violet" />
                <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-violet text-glow-hero">Timeline</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-12">
                <div className="relative">
                  <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-nxl-violet to-nxl-cyan"></div>
                  </div>
                  <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-4 h-4 bg-background-main border-2 border-nxl-violet rounded-full shadow-[0_0_15px_oklch(0.66_0.22_300)]"></div>
                  <div className="absolute top-1/2 left-[65%] -translate-y-1/2 w-4 h-4 bg-background-main border-2 border-nxl-cyan rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                     <div className="text-[9px] text-white/30 uppercase mb-1">Jan</div>
                     <div className="text-[12px] font-bold">Research</div>
                   </div>
                   <div className="p-3 bg-nxl-violet/10 rounded-lg border border-nxl-violet/20">
                     <div className="text-[9px] text-nxl-violet uppercase mb-1">Feb</div>
                     <div className="text-[12px] font-bold">Launch</div>
                   </div>
                   <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                     <div className="text-[9px] text-white/30 uppercase mb-1">Mar</div>
                     <div className="text-[12px] font-bold">Scale</div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* 3: Strategy (Dashboard) */}
            <motion.div style={s3} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <Target className="w-5 h-5 text-nxl-violet" />
                <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-violet text-glow-hero">Strategy</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-6">
                 <div className="bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Target className="w-20 h-20" /></div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-tighter mb-4">Total Campaign Goal</div>
                    <div className="flex items-baseline gap-2 mb-2">
                       <span className="text-5xl font-black font-sans tracking-tighter">74.2%</span>
                       <span className="text-nxl-green text-[12px] font-bold">+12% vs last week</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{width: 0}} animate={{width: '74.2%'}} className="h-full bg-gradient-to-r from-nxl-violet to-nxl-cyan shadow-[0_0_15px_oklch(0.66_0.22_300/0.4)]"></motion.div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#111] border border-white/5 p-4 rounded-xl">
                       <div className="text-[10px] text-white/40 uppercase mb-1">Conversão</div>
                       <div className="text-2xl font-bold text-nxl-cyan">18.4%</div>
                    </div>
                    <div className="bg-[#111] border border-white/5 p-4 rounded-xl">
                       <div className="text-[10px] text-white/40 uppercase mb-1">CPA Médio</div>
                       <div className="text-2xl font-bold text-white">R$ 4.20</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* 4: Calendar */}
            <motion.div style={s4} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-nxl-green" />
                  <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-green text-glow-hero">Calendar</h3>
                </div>
                <div className="text-[12px] font-sans font-bold text-white/60">Abril 2026</div>
              </div>
              <div className="flex-1 flex flex-col gap-1 mt-2">
                 <div className="grid grid-cols-7 gap-1 text-[8px] text-white/20 font-bold uppercase text-center mb-1">
                    <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span>
                 </div>
                 <div className="grid grid-cols-7 gap-1 flex-1">
                    {Array.from({length: 31}).map((_,i)=>(
                      <div key={i} className={`aspect-square rounded border ${i === 19 ? 'bg-nxl-violet/20 border-nxl-violet/40' : 'bg-[#111] border-white/5'} flex items-center justify-center relative`}>
                         <span className={`text-[9px] ${i === 19 ? 'text-white font-bold' : 'text-white/20'}`}>{i+1}</span>
                         {i === 19 && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-nxl-violet shadow-[0_0_5px_oklch(0.66_0.22_300)]"></div>}
                         {[5, 12, 26].includes(i) && <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-nxl-cyan/40"></div>}
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>

            {/* 5: Research (Analysis Canvas) */}
            <motion.div style={s5} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-10">
                <Search className="w-5 h-5 text-nxl-amber" />
                <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-amber text-glow-hero">Research Map</h3>
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full opacity-20"><line x1="20%" y1="50%" x2="50%" y2="50%" stroke="oklch(0.85 0.24 145)" strokeWidth="1" strokeDasharray="4" /><line x1="50%" y1="50%" x2="80%" y2="50%" stroke="oklch(0.85 0.24 145)" strokeWidth="1" strokeDasharray="4" /></svg>
                 </div>
                 <div className="z-10 flex gap-12 items-center">
                    <div className="w-24 h-24 rounded-full border border-nxl-amber/30 bg-[#111] flex flex-col items-center justify-center p-3 text-center shadow-2xl">
                       <Target className="w-4 h-4 text-nxl-amber mb-2" />
                       <span className="text-[10px] font-bold text-white/80 leading-tight">Persona B2B</span>
                    </div>
                    <div className="w-32 h-32 rounded-full border-2 border-nxl-amber bg-[#111] flex flex-col items-center justify-center p-4 text-center shadow-[0_0_40px_oklch(0.85_0.24_145/0.2)]">
                       <Search className="w-6 h-6 text-nxl-amber mb-2" />
                       <span className="text-[11px] font-black text-white leading-tight uppercase">Mercado Atual</span>
                    </div>
                    <div className="w-24 h-24 rounded-full border border-white/10 bg-[#111] flex flex-col items-center justify-center p-3 text-center opacity-40">
                       <AlertCircle className="w-4 h-4 text-white/40 mb-2" />
                       <span className="text-[10px] font-medium text-white/40 leading-tight">Pain Points</span>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* 6: Insights (Analysis) */}
            <motion.div style={s6} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <Lightbulb className="w-5 h-5 text-nxl-amber" />
                <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-amber text-glow-hero">Insights</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4">
                 <div className="bg-[#1a1811] border-l-4 border-nxl-amber p-5 rounded-r-xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-nxl-amber/20 rounded text-[8px] text-nxl-amber font-bold uppercase">AI Highlight</div>
                    <p className="text-[13px] text-white/90 font-sans leading-relaxed">
                       "Usuários demonstraram <strong>frustração com silos de dados</strong>. O foco da copy deve ser Unificação e Agilidade."
                    </p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-nxl-amber">
                       <CheckCircle2 className="w-3.5 h-3.5" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Recomendação</span>
                    </div>
                    <p className="text-[12px] text-white/60 font-sans">Aumentar verba em 15% para o topo de funil no LinkedIn.</p>
                 </div>
              </div>
            </motion.div>

            {/* 7: Knowledge (Library) */}
            <motion.div style={s7} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-nxl-amber" />
                  <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-amber text-glow-hero">Library</h3>
                </div>
                <div className="text-[11px] font-mono text-white/30">Vault: Root</div>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-4">
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shadow-lg group-hover:border-nxl-amber transition-colors">
                       <FileText className="w-8 h-8 text-white/20" />
                    </div>
                    <span className="text-[9px] font-mono text-white/60">BrandBook.pdf</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shadow-lg group-hover:border-nxl-amber transition-colors">
                       <FileJson className="w-8 h-8 text-white/20" />
                    </div>
                    <span className="text-[9px] font-mono text-white/60">Persona.json</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full aspect-[4/5] bg-nxl-amber/5 border border-nxl-amber/20 rounded-lg flex items-center justify-center shadow-lg">
                       <FileCode className="w-8 h-8 text-nxl-amber/40" />
                    </div>
                    <span className="text-[9px] font-mono text-nxl-amber font-bold">Campaign.nxl</span>
                 </div>
              </div>
            </motion.div>

            {/* 8: Knowledge Map */}
            <motion.div style={s8} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-10">
                <MapIcon className="w-5 h-5 text-nxl-green" />
                <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-nxl-green text-glow-hero">Knowledge Map</h3>
              </div>
              <div className="flex-1 flex items-center justify-center">
                 <div className="relative w-full h-full">
                    {/* Visual graph spider web */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <div className="w-16 h-16 rounded-full border-2 border-nxl-green bg-nxl-green/10 flex items-center justify-center z-10 relative">
                          <BookOpen className="w-6 h-6 text-nxl-green" />
                       </div>
                       {/* Connection lines using SVG */}
                       <svg className="absolute -inset-24 w-64 h-64 -z-10 opacity-30">
                          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="oklch(0.72 0.16 145)" strokeWidth="1" />
                          <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="oklch(0.72 0.16 145)" strokeWidth="1" />
                          <line x1="50%" y1="50%" x2="40%" y2="85%" stroke="oklch(0.72 0.16 145)" strokeWidth="1" />
                       </svg>
                       <div className="absolute -top-16 -left-16 w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                       <div className="absolute -top-12 -right-16 w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
                       <div className="absolute top-20 left-4 w-6 h-6 rounded-full bg-white/5 border border-white/10"></div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* 9: Agent (Trace) */}
            <motion.div style={s9} className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#ef4444]" />
                  <h3 className="text-[14px] md:text-xl font-black font-sans uppercase tracking-widest text-[#ef4444] text-glow-hero">Agent Trace</h3>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-nxl-green animate-pulse"></div>
                   <span className="text-[9px] text-nxl-green font-mono uppercase">Online</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                 <div className="bg-black border border-white/10 rounded-lg flex-1 font-mono text-[10px] p-4 overflow-hidden shadow-2xl relative">
                    <div className="space-y-2 opacity-80">
                       <div className="text-white/40">[09:00:01] Initializing autonomous run...</div>
                       <div className="text-white/60">[09:00:05] Loading [[Knowledge_Vault]]... DONE</div>
                       <div className="text-nxl-cyan">[09:00:12] Task: Generate Instagram Caption</div>
                       <div className="text-nxl-violet">[09:00:24] Thinking... (context: persona_B2B)</div>
                       <div className="text-nxl-green">[09:00:45] Success: Content generated.</div>
                    </div>
                    {/* Floating Patch Box */}
                    <div className="absolute bottom-4 left-4 right-4 bg-background-main border border-nxl-violet/40 p-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-nxl-violet/20 rounded">
                             <GitMerge className="w-3.5 h-3.5 text-nxl-violet" />
                          </div>
                          <div>
                             <div className="text-[10px] font-bold text-white">Pending Patch</div>
                             <div className="text-[8px] text-white/40">Suggested edit for line 12.</div>
                          </div>
                       </div>
                       <button className="px-3 py-1 bg-nxl-violet text-white text-[9px] font-bold rounded">Review</button>
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
