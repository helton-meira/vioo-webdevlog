import Link from "next/link";
import { 
  Wallet, 
  Terminal, 
  Palette, 
  BrainCircuit, 
  Cloud, 
  History, 
  GitCommit, 
  ChevronDown,
  ArrowLeft
} from "lucide-react";

export default function DevLog() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="size-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Wallet size={20} />
            </Link>
            <Link href="/" className="text-xl font-bold tracking-tight">Vioo</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium text-primary" href="/devlog">Timeline</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Funcionalidades</Link>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all">
              Launch App
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-[960px] mx-auto px-6 py-12 flex-1">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[21/9] flex items-center justify-center text-center p-8 group">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}
              ></div>
            </div>
            <div className="relative z-20 max-w-2xl flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">Internal Dev Log</span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Vioo: Diário de Bordo</h1>
              <p className="text-slate-300 text-lg">Acompanhe o progresso da nossa fintech focada em economia antecipada via análise inteligente de recibos.</p>
            </div>
          </div>
        </section>

        {/* Category Filter (Chips) */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold mr-2 opacity-60">Filtrar por:</span>
            
            <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary/30 group">
              <Terminal size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">Backend</span>
            </button>
            
            <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary/30 group">
              <Palette size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">Design</span>
            </button>
            
            <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary/30 group">
              <BrainCircuit size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">IA</span>
            </button>
            
            <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary/30 group">
              <Cloud size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">Infrastructure</span>
            </button>
          </div>
        </section>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Últimas Atualizações</h2>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800 ml-6"></div>
        </div>

        {/* Timeline Section */}
        <section className="relative">
          {/* Central Line */}
          <div className="absolute left-[4.5rem] md:left-[8.5rem] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
          
          <div className="space-y-16">
            {/* Entry 1 */}
            <div className="relative grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 group">
              <div className="text-right pt-2 pr-4 md:pr-10">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">20 Out</p>
                <p className="text-xs font-medium opacity-50">2023</p>
              </div>
              <div className="relative pl-8 pb-4">
                {/* Dot */}
                <div className="absolute left-[-1.5px] top-4 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10 transition-transform group-hover:scale-125 shadow-[0_0_0_4px_rgba(19,55,236,0.2)]"></div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-tag-ia/10 text-tag-ia text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-tag-ia/20">IA</span>
                    <span className="bg-tag-backend/10 text-tag-backend text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-tag-backend/20">Backend</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integração de OCR para Recibos</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">
                    Implementamos um novo motor de OCR baseado em redes neurais para extrair dados de recibos com 98% de precisão. Agora processamos CNPJ, data, valor e itens automaticamente.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1"><History size={14} /> 2 dias atrás</span>
                    <span className="flex items-center gap-1"><GitCommit size={14} /> v1.4.2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="relative grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 group">
              <div className="text-right pt-2 pr-4 md:pr-10">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">15 Out</p>
                <p className="text-xs font-medium opacity-50">2023</p>
              </div>
              <div className="relative pl-8 pb-4">
                {/* Dot */}
                <div className="absolute left-[-1.5px] top-4 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-background-light dark:border-background-dark z-10 group-hover:bg-primary transition-all"></div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-tag-design/10 text-tag-design text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-tag-design/20">Design</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Redesign do Dashboard Financeiro</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    Novo layout focado em visualização de gastos por categoria e projeção de economia. Interface simplificada para mobile e novos gráficos interativos.
                  </p>
                </div>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="relative grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 group">
              <div className="text-right pt-2 pr-4 md:pr-10">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">10 Out</p>
                <p className="text-xs font-medium opacity-50">2023</p>
              </div>
              <div className="relative pl-8 pb-4">
                {/* Dot */}
                <div className="absolute left-[-1.5px] top-4 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-background-light dark:border-background-dark z-10 group-hover:bg-primary transition-all"></div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-tag-backend/10 text-tag-backend text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-tag-backend/20">Backend</span>
                    <span className="text-slate-500 bg-slate-500/10 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-500/20">Infra</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Arquitetura de Microserviços</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    Migramos o serviço de processamento de fila para RabbitMQ, permitindo escalabilidade horizontal durante horários de pico de upload de recibos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* End of Timeline Indicator */}
          <div className="flex justify-center mt-16 relative">
            <button className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-sm font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 text-slate-600 dark:text-slate-300">
              Carregar Logs Anteriores
              <ChevronDown size={20} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60 text-slate-600 dark:text-slate-400">
            <Wallet size={20} />
            <span className="text-sm font-bold">Vioo © 2023</span>
          </div>
          <div className="flex gap-8">
            <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">GitHub</Link>
            <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Documentation</Link>
            <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Status</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
