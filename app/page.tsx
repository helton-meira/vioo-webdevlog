// app/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import Timeline from "@/components/Timeline";
import { ThemeToggle, Newsletter } from "@/components/UiComponents";
import { Wallet } from "lucide-react";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Wallet size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Vioo</h1>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">
              Timeline
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-[960px] mx-auto px-6 py-12">
        {/* Hero Section Restaurado */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[21/9] flex items-center justify-center text-center p-8 group shadow-2xl">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
              {/* Imagem de Fundo */}
              <div 
                className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}
              ></div>
            </div>
            
            <div className="relative z-20 max-w-2xl flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-primary/20">
                Internal Dev Log
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                Vioo: Diário de Bordo
              </h1>
              <p className="text-slate-200 text-lg mb-8 drop-shadow-md max-w-lg mx-auto leading-relaxed">
                Acompanhe o progresso da nossa fintech focada em economia antecipada via análise inteligente de recibos.
              </p>
              
              {/* Área de Captura de Email no Hero */}
              <div className="w-full flex justify-center">
                 <Newsletter />
              </div>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Últimas Atualizações</h2>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800 ml-6"></div>
        </div>

        {/* Timeline Inteligente */}
        <Timeline posts={posts} />

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60">
            <Wallet size={20} />
            <span className="text-sm font-bold">Vioo © 2026</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </>
  );
}
