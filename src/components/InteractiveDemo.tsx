import { useState, useEffect } from 'react';
import { Network, LayoutTemplate, BookOpen, Code2, Play, FileText, FileSpreadsheet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_CODE = `@campaign
component Campanha() {
  @goals target: "2500"

  return (
    <post title="Lançamento do Nexus" />
  )
}`;

export function InteractiveDemo() {
  const [code, setCode] = useState(INITIAL_CODE);
  const [activeTab, setActiveTab] = useState<'canvas' | 'strategy' | 'library'>('strategy');

  // Parsed State
  const [parsedTarget, setParsedTarget] = useState("2500");
  const [parsedImpressions, setParsedImpressions] = useState("184K");
  const [parsedPosts, setParsedPosts] = useState<{title: string, published: boolean}[]>([]);
  const [parsedImport, setParsedImport] = useState("Cofre Local");

  // Pseudo-Parser Effect
  useEffect(() => {
    // 1. Extract Target
    const targetMatch = code.match(/target:\s*["']([^"']+)["']/);
    if (targetMatch) setParsedTarget(targetMatch[1]);

    // 2. Extract Impressions
    const metricsMatch = code.match(/label:\s*["']Impressões["'],\s*value:\s*["']([^"']+)["']/);
    if (metricsMatch) setParsedImpressions(metricsMatch[1]);

    // 3. Extract Posts
    const posts = [];
    const tempCode = code; // copy
    
    // We'll do a simpler match: look for all 'title="something"' inside <post> tags
    const postTagRegex = /<post([^>]+)>/g;
    let postMatch;
    while ((postMatch = postTagRegex.exec(tempCode)) !== null) {
      const attrs = postMatch[1];
      const titleMatch = attrs.match(/title=["']([^"']+)["']/);
      const publishedMatch = attrs.match(/published=\{([^}]+)\}/);
      if (titleMatch) {
        posts.push({
          title: titleMatch[1],
          published: publishedMatch ? publishedMatch[1] === 'true' : false
        });
      }
    }
    setParsedPosts(posts);

    // 4. Extract Import
    const importMatch = code.match(/import\s*\{\s*([^}]+)\s*\}\s*from/);
    if (importMatch) {
      setParsedImport(importMatch[1].trim());
    } else {
      setParsedImport("Cofre Local");
    }

  }, [code]);

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[700px]">
      
      {/* Left Panel: Editor */}
      <div className="w-full md:w-[45%] border-r border-white/5 flex flex-col bg-[#0f0f0f]">
        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 shrink-0 bg-[#0a0a0a]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-nxl-violet/20 flex items-center justify-center">
              <span className="text-[12px] font-black font-sans text-nxl-violet">N</span>
            </div>
            <span className="font-sans font-bold text-[12px] text-white/80">NXL IDE</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-white/40">
            <Play className="w-3 h-3 hover:text-nxl-green cursor-pointer transition-colors" />
            <span>Dry-run</span>
          </div>
        </div>
        
        <div className="flex-1 relative overflow-hidden flex flex-col">
          <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 shrink-0 bg-[#121212]">
            <Code2 className="w-3 h-3 text-white/40" />
            <span className="text-[11px] font-mono text-white/60">campaign.nxl</span>
            <span className="ml-auto text-[10px] text-white/30 uppercase tracking-wider font-bold">Try Editing Me</span>
          </div>
          
          <div className="flex-1 relative p-4 bg-[#0d0d0d]">
            <textarea
              spellCheck="false"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="absolute inset-0 w-full h-full resize-none bg-transparent text-transparent caret-white p-4 font-mono text-[13px] leading-relaxed focus:outline-none z-10"
            />
            {/* Syntax Highlighting Overlay (Fake) */}
            <div className="absolute inset-0 w-full h-full p-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap pointer-events-none break-words">
              {code.split('\n').map((line, i) => {
                let html = line
                  .replace(/@campaign|@goals|@metrics/g, '<span class="text-nxl-amber">$&</span>')
                  .replace(/component|props|import|from|return/g, '<span class="text-nxl-violet">$&</span>')
                  .replace(/name|current|target|label|value|delta|published|title/g, '<span class="text-nxl-green">$&</span>')
                  .replace(/"[^"]*"/g, '<span class="text-nxl-cyan">$&</span>')
                  .replace(/true|false/g, '<span class="text-nxl-amber">$&</span>')
                  .replace(/<campaign>|<\/campaign>|<post|\/>/g, '<span class="text-nxl-violet">$&</span>');
                
                return (
                  <div key={i} className="flex">
                    <span className="w-6 shrink-0 text-right pr-4 text-white/20 select-none">{i + 1}</span>
                    <span className="text-white/80" dangerouslySetInnerHTML={{ __html: html || ' ' }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Rendered Views */}
      <div className="w-full md:w-[55%] flex flex-col bg-[#050505]">
        {/* Tabs */}
        <div className="h-12 border-b border-white/5 flex items-center px-2 shrink-0 bg-[#0a0a0a] gap-1 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('strategy')}
            className={`px-4 h-8 rounded-md text-[12px] font-sans font-medium flex items-center gap-2 transition-all ${activeTab === 'strategy' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80'}`}
          >
            <LayoutTemplate className="w-3.5 h-3.5" /> Strategy
          </button>
          <button 
            onClick={() => setActiveTab('canvas')}
            className={`px-4 h-8 rounded-md text-[12px] font-sans font-medium flex items-center gap-2 transition-all ${activeTab === 'canvas' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80'}`}
          >
            <Network className="w-3.5 h-3.5" /> Canvas
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={`px-4 h-8 rounded-md text-[12px] font-sans font-medium flex items-center gap-2 transition-all ${activeTab === 'library' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80'}`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Library
          </button>
        </div>

        {/* View Content */}
        <div className="flex-1 relative overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* STRATEGY VIEW */}
            {activeTab === 'strategy' && (
              <motion.div 
                key="strategy"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 p-8"
              >
                <h2 className="text-3xl font-black font-sans tracking-tight mb-2">Resumo Estratégico</h2>
                <p className="text-white/40 text-[13px] font-sans mb-8">Compilado de {parsedPosts.length} post(s) • Metas dinâmicas</p>

                {/* Progress Card */}
                <div className="bg-[#111] border border-white/5 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Overall Completion</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Goals Tracked: 1</span>
                  </div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-5xl font-black font-sans leading-none">{Math.round((1240 / parseInt(parsedTarget || "1")) * 100) || 0}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-nxl-violet to-nxl-cyan"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.round((1240 / parseInt(parsedTarget || "1")) * 100) || 0}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="mt-2 text-[12px] text-white/40 font-mono flex justify-between">
                    <span>Current: 1240</span>
                    <span className="text-nxl-violet font-bold">Target: {parsedTarget}</span>
                  </div>
                </div>

                {/* Live Metrics */}
                <h3 className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-4">Live Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#111] border border-white/5 rounded-xl p-5">
                    <div className="text-[11px] text-white/40 font-sans font-bold uppercase tracking-wider mb-2">Impressões</div>
                    <div className="text-3xl font-black text-nxl-green text-glow-hero" style={{ textShadow: '0 0 20px oklch(0.85 0.24 145 / 0.3)' }}>{parsedImpressions}</div>
                    <div className="text-[11px] text-nxl-green flex items-center gap-1 mt-2">
                      <ArrowUpRight className="w-3 h-3" /> +28%
                    </div>
                  </div>
                  <div className="bg-[#111] border border-white/5 rounded-xl p-5">
                    <div className="text-[11px] text-white/40 font-sans font-bold uppercase tracking-wider mb-2">Custo Por Lead</div>
                    <div className="text-3xl font-black text-white">R$ 12,40</div>
                    <div className="text-[11px] text-[#ef4444] flex items-center gap-1 mt-2">
                      <ArrowDownRight className="w-3 h-3" /> -18%
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CANVAS VIEW */}
            {activeTab === 'canvas' && (
              <motion.div 
                key="canvas"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] p-8 overflow-auto"
              >
                <div className="flex gap-2 mb-8">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-sans font-bold text-white/60">
                    {parsedPosts.length} POSTS
                  </div>
                </div>

                <div className="flex flex-wrap gap-8">
                  {parsedPosts.length === 0 && (
                    <div className="text-white/30 text-[13px] font-mono">Nenhum post detectado. Escreva um {'<post>'}!</div>
                  )}
                  {parsedPosts.map((post, idx) => (
                    <div key={idx} className="bg-[#161616] border border-white/10 rounded-lg p-4 w-64 shadow-xl relative">
                      <div className="absolute -top-3 left-4 px-2 py-0.5 bg-nxl-violet/20 border border-nxl-violet/30 rounded text-[9px] font-bold text-nxl-violet uppercase">
                        Post
                      </div>
                      <h4 className="text-[13px] font-sans font-bold mt-2 leading-tight mb-3">{post.title}</h4>
                      <div className="flex justify-between items-center mt-auto border-t border-white/5 pt-3">
                        <span className="text-[10px] text-white/40 font-mono">Instagram</span>
                        {post.published ? (
                          <span className="flex items-center gap-1 text-[10px] text-nxl-green"><div className="w-1.5 h-1.5 rounded-full bg-nxl-green"></div> Publicado</span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] text-nxl-amber"><div className="w-1.5 h-1.5 rounded-full bg-nxl-amber"></div> Rascunho</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* LIBRARY VIEW */}
            {activeTab === 'library' && (
              <motion.div 
                key="library"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 p-8"
              >
                <h3 className="text-[10px] uppercase tracking-wider text-nxl-amber font-bold mb-2">Conhecimento</h3>
                <h2 className="text-3xl font-black font-sans tracking-tight mb-2">{parsedImport}</h2>
                <p className="text-white/40 text-[13px] font-sans mb-8">Cofre local importado via NXL.</p>
                
                <div className="border-l-2 border-nxl-amber/30 pl-4 py-1 mb-8">
                  <p className="text-[14px] text-white/70 font-sans leading-relaxed italic">
                    Mercado de café especial cresce ~12% a.a. no Brasil. SP concentra ~40% das cafeterias premium. Persona-alvo valoriza origem do grão e storytelling do barista.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a1111] border border-[#ef4444]/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <FileText className="w-8 h-8 text-[#ef4444]/60" />
                    <div className="text-center">
                      <div className="text-[11px] font-bold">relatorio-2024.pdf</div>
                      <div className="text-[10px] text-white/40 mt-1">1.2 MB</div>
                    </div>
                  </div>
                  <div className="bg-[#111a14] border border-[#10b981]/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <FileSpreadsheet className="w-8 h-8 text-[#10b981]/60" />
                    <div className="text-center">
                      <div className="text-[11px] font-bold">concorrentes.xlsx</div>
                      <div className="text-[10px] text-white/40 mt-1">Google Sheets</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
