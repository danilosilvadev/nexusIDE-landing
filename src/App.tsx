import { useState } from 'react';
import { Terminal, Brain, Bot, Sparkles, ChevronDown, ChevronUp, Code2, Layers, Cpu, Command, Key, GitMerge, WifiOff } from 'lucide-react';
import { ScrollCodeAnimation } from './components/ScrollCodeAnimation';
import { InteractiveDemo } from './components/InteractiveDemo';

function AccordionItem({ title, content }: { title: string, content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-nxl-violet transition-colors"
      >
        <span className="font-sans font-semibold text-[15px] pr-4">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-white/40 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-[14px] text-white/60 leading-relaxed font-sans animate-fade-in">
          {content}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background-main selection:bg-nxl-violet/30 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-background-main/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-white tracking-tight">
            <Command className="w-4 h-4 text-nxl-violet" />
            <span>NexusIDE</span>
          </div>
          <button className="px-4 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 text-[13px] font-sans font-medium transition-colors">
            Early Access
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        {/* Hero */}
        <section className="flex flex-col items-center text-center space-y-6 animate-slide-up">
          <div className="kicker">O Primeiro IDE Estratégico</div>
          <h1 className="text-4xl md:text-6xl font-black font-sans tracking-tighter leading-[0.95] max-w-3xl text-glow-hero">
            Pare de gerenciar tarefas.<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-nxl-violet to-nxl-cyan">Comece a programar o seu marketing.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/60 max-w-2xl font-sans mt-6">
            O primeiro Ambiente de Desenvolvimento (IDE) feito puramente para Agências Solo e Estrategistas Independentes. Não preencha formulários chatos. Escreva sua campanha.
          </p>
          <div className="pt-8 flex items-center gap-4">
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-nxl-violet to-[#8b3fdc] text-white font-sans font-semibold text-[14px] shadow-[0_0_20px_oklch(0.66_0.22_300/0.4)] hover:shadow-[0_0_30px_oklch(0.66_0.22_300/0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Solicite um Convite Early Access
            </button>
          </div>

          {/* Philosophy Banner */}
          <div className="mt-16 bg-[#111] border border-white/10 rounded-xl p-6 max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left shadow-2xl">
            <div className="p-4 bg-white/5 border border-white/5 rounded-full shrink-0">
              <Code2 className="w-8 h-8 text-white/60" />
            </div>
            <div>
              <h3 className="text-white font-sans font-bold text-[18px] mb-2 tracking-tight">O VS Code do Marketing</h3>
              <p className="text-white/50 text-[15px] leading-relaxed font-sans">
                O NexusIDE está para as campanhas assim como o VS Code está para o software. Suas estratégias são arquivos de texto puros salvos em um cofre local (vault), como no <strong>Obsidian</strong>. Sem formatação engessada, sem lentidão de nuvem. Só você, o código e um motor brutal de renderização.
              </p>
            </div>
          </div>
        </section>

        {/* Scroll-Linked Animation Section */}
        <ScrollCodeAnimation />

        {/* O Fim do PDF Copy & Interactive Demo */}
        <section className="mb-32 mt-32">
          <div className="kicker mb-8 text-center">O Fim do Planejamento Morto</div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight mb-6">
              Seu planejamento não é um PDF. <br className="hidden md:block"/>
              <span className="text-nxl-green">É um software vivo.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-sans leading-relaxed text-[16px]">
              No Notion ou num doc, se você muda uma meta, ninguém fica sabendo. No NexusIDE, 
              o seu texto é executável. Uma alteração no código reconfigura todo o Dashboard, 
              o Calendário e os Agentes Autônomos instantaneamente.
              <br/><br/>
              <strong className="text-white">Teste você mesmo no playground abaixo.</strong> Edite o código à esquerda. Tente mudar o número da meta (target), o nome do arquivo importado, ou mude um post de <code>published={'{'}false{'}'}</code> para <code>true</code>. Veja a interface reagir em tempo real nas abas à direita.
            </p>
          </div>
          
          <InteractiveDemo />
        </section>

        {/* Features */}
        <section className="mb-32">
          <div className="kicker mb-8 text-center">O Verdadeiro Poder do NexusIDE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-background-card border border-white/5 hover:border-nxl-violet/30 transition-colors p-6 rounded-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nxl-violet/10 rounded-md">
                  <Code2 className="w-5 h-5 text-nxl-violet" />
                </div>
                <h3 className="font-sans font-bold text-[16px]">A Linguagem NXL</h3>
              </div>
              <p className="text-white/60 text-[14px] font-sans leading-relaxed">
                Você não preenche formulários chatos. Você <em className="text-white/80">escreve</em> sua campanha. Usando tags como <code className="font-mono text-[12px] text-nxl-cyan bg-white/5 px-1.5 py-0.5 rounded">{'<campaign>'}</code> e annotations como <code className="font-mono text-[12px] text-nxl-amber bg-white/5 px-1.5 py-0.5 rounded">@goals</code>, você programa a lógica do seu lançamento.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-amber/30 transition-colors p-6 rounded-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nxl-amber/10 rounded-md">
                  <Brain className="w-5 h-5 text-nxl-amber" />
                </div>
                <h3 className="font-sans font-bold text-[16px]">Knowledge Imports</h3>
              </div>
              <p className="text-white/60 text-[14px] font-sans leading-relaxed">
                O Fim do Copiar e Colar no ChatGPT. Módulos marcados com <code className="font-mono text-[12px] text-nxl-amber bg-white/5 px-1.5 py-0.5 rounded">@knowledge</code> podem ser importados. O NexusIDE injeta essa inteligência no System Prompt. A IA já nasce sabendo tudo.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-green/30 transition-colors p-6 rounded-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nxl-green/10 rounded-md">
                  <Bot className="w-5 h-5 text-nxl-green" />
                </div>
                <h3 className="font-sans font-bold text-[16px]">Agentes Autônomos Nativos</h3>
              </div>
              <p className="text-white/60 text-[14px] font-sans leading-relaxed">
                Escreva componentes que rodam no piloto automático via cron job. O agente acorda, roda <code className="font-mono text-[12px] text-white/80 bg-white/5 px-1.5 py-0.5 rounded">{'<fetchMentions>'}</code> e enfileira um <code className="font-mono text-[12px] text-white/80 bg-white/5 px-1.5 py-0.5 rounded">{'<publish>'}</code>. Tudo com botão de Dry-Run para testar.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-cyan/30 transition-colors p-6 rounded-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nxl-cyan/10 rounded-md">
                  <Layers className="w-5 h-5 text-nxl-cyan" />
                </div>
                <h3 className="font-sans font-bold text-[16px]">Multi-View Synchronization</h3>
              </div>
              <p className="text-white/60 text-[14px] font-sans leading-relaxed">
                Escreva 10 linhas de código NXL e gere automaticamente um Strategy Dashboard, Calendar dinâmico, Timeline e Mapas Mentais (Analysis Canvas) interativos flutuando na tela.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-violet/30 transition-colors p-6 rounded-xl md:col-span-2 hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nxl-violet/10 rounded-md">
                  <Sparkles className="w-5 h-5 text-nxl-violet" />
                </div>
                <h3 className="font-sans font-bold text-[16px]">AI Inline (@gen e A/B Testing)</h3>
              </div>
              <p className="text-white/60 text-[14px] font-sans leading-relaxed">
                Escreveu <code className="font-mono text-[12px] text-nxl-violet bg-white/5 px-1.5 py-0.5 rounded">@gen "Crie um teaser misterioso"</code> em cima de um <code className="font-mono text-[12px] text-white/80 bg-white/5 px-1.5 py-0.5 rounded">{'<post>'}</code>? A IA gera o conteúdo na hora direto no seu arquivo. A anotação <code className="font-mono text-[12px] text-nxl-violet bg-white/5 px-1.5 py-0.5 rounded">@testAB</code> divide a renderização e métricas nativamente.
              </p>
            </div>

          </div>
        </section>

        {/* Anti-Commodity Moat */}
        <section className="mb-32">
          <div className="kicker mb-8 text-center">Por que não somos uma commodity</div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-sans tracking-tight mb-4">
              Paz de espírito arquitetada no código.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-sans leading-relaxed">
              O NexusIDE não é "mais uma IA" que edita as coisas enquanto você dorme, nem um SaaS que prende os seus dados em um servidor caro na nuvem. Nós desenhamos o motor pensando na sua segurança e no seu bolso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background-card border border-white/5 hover:border-nxl-violet/30 transition-colors p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-0.5">
              <div className="p-3 bg-nxl-violet/10 rounded-full mb-4">
                <GitMerge className="w-6 h-6 text-nxl-violet" />
              </div>
              <h3 className="font-sans font-bold text-[16px] mb-3">Patches, não mutações</h3>
              <p className="text-white/60 text-[13px] font-sans leading-relaxed">
                A IA do NexusIDE <strong>nunca altera nada silenciosamente</strong>. Quando o Agente sugere uma mudança na sua campanha, ele cria um <em>Patch</em> pendente. Você revisa um Diff (Antes vs Depois) e a mudança só entra se você aprovar explicitamente. Você é o Diretor de Arte, a IA é o estagiário.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-green/30 transition-colors p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-0.5">
              <div className="p-3 bg-nxl-green/10 rounded-full mb-4">
                <Key className="w-6 h-6 text-nxl-green" />
              </div>
              <h3 className="font-sans font-bold text-[16px] mb-3">BYOK (Bring Your Own Key)</h3>
              <p className="text-white/60 text-[13px] font-sans leading-relaxed">
                Chega de pagar a "taxa SaaS" abusiva na API da OpenAI ou Anthropic. Você insere a sua própria chave e paga centavos direto na fonte, apenas pelo que consumir. Suas chaves viajam apenas no header da requisição, e <strong>nunca são logadas ou persistidas nos nossos servidores</strong>.
              </p>
            </div>

            <div className="bg-background-card border border-white/5 hover:border-nxl-amber/30 transition-colors p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-0.5">
              <div className="p-3 bg-nxl-amber/10 rounded-full mb-4">
                <WifiOff className="w-6 h-6 text-nxl-amber" />
              </div>
              <h3 className="font-sans font-bold text-[16px] mb-3">Offline-Tolerante</h3>
              <p className="text-white/60 text-[13px] font-sans leading-relaxed">
                O vault de campanhas vive inteiro no <code className="font-mono text-[11px] text-nxl-amber bg-white/5 px-1.5 py-0.5 rounded">localStorage</code> do seu navegador e exporta para JSON portável. Se a internet do avião cair, o editor ainda compila, formata e valida seu código 100% offline. Somente as chamadas conectadas de IA irão falhar.
              </p>
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="mb-32">
          <div className="kicker mb-8">Debugging Objections</div>
          <div className="bg-background-card border border-white/5 rounded-xl p-6">
            <AccordionItem 
              title="Mas eu/meu time de marketing não sabemos programar. Código assusta."
              content="O NXL não é C++ ou Python, é uma linguagem descritiva baseada em tags (como o HTML) e Markdown. Se você sabe usar colchetes e hashtags no Notion, você sabe usar NXL. Além disso, a IA integrada do NexusIDE escreve 80% do código para você. Você atua como Diretor de Arte, não como pedreiro. O ganho é que, por ter essa estrutura, você para de cometer erros humanos."
            />
            <AccordionItem 
              title="Eu já uso Notion/ClickUp integrado com ChatGPT. Pra que mudar?"
              content="No Notion ou no ClickUp, o seu texto está morto. Se você muda uma data lá, você tem que ir no calendário, mudar a tarefa e avisar o time. No NexusIDE, o seu texto é executável. Você muda uma data ou uma meta na linha 4 do seu planejamento, e o Dashboard, o Calendário, e os Agentes Autônomos se reconfiguram em tempo real. Notion é um papel digital; NexusIDE é um motor."
            />
            <AccordionItem 
              title="Mas por que não usar um CRM como HubSpot ou RD Station para campanhas?"
              content="CRMs foram desenhados para olhar para o retrovisor: eles registram o que o cliente já fez (abriu email, clicou, comprou). O NexusIDE foi desenhado para olhar para o parabrisa: ele serve para arquitetar o que vai acontecer. CRMs são para gerenciar o lead; o NexusIDE é a fábrica que constrói a campanha que traz o lead."
            />
            <AccordionItem 
              title="Automatizar posts com IA não tira a autenticidade?"
              content="Tiraria se você usasse o ChatGPT padrão. Mas o Nexus usa o sistema de Knowledge Imports. Você alimenta um módulo com o seu tom de voz, as objeções do seu mercado e suas referências. Quando o @agent gera um post às 9h da manhã, ele usa esse banco de dados neural. Não é uma IA genérica, é um clone estratégico da sua mente."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center px-6 py-16 nx-dashed rounded-xl border-white/20 bg-gradient-to-b from-transparent to-nxl-violet/5 animate-fade-in relative overflow-hidden">
          {/* Subtle glow behind the CTA */}
          <div className="absolute inset-0 bg-nxl-violet/5 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <Cpu className="w-8 h-8 text-nxl-violet mx-auto mb-6 opacity-50" />
            <h2 className="text-2xl md:text-3xl font-sans font-black tracking-tight mb-4">
              Software tradicional engessa sua estratégia.<br/>
              <span className="text-nxl-violet">O NexusIDE liberta.</span>
            </h2>
            <button className="mt-8 px-8 py-4 rounded-md bg-white text-black font-sans font-bold text-[15px] hover:bg-white/90 hover:-translate-y-0.5 transition-all flex items-center gap-2 mx-auto shadow-lg">
              <Terminal className="w-5 h-5" />
              Solicite um Convite Early Access
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="font-mono text-[12px] text-white/30">
          © {new Date().getFullYear()} NexusIDE. Absolute Dark UI.
        </p>
      </footer>
    </div>
  );
}

export default App;
