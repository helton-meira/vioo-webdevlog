import Link from "next/link";
import { 
  ExternalLink, 
  Mail, 
  ShieldCheck, 
  TrendingUp, 
  BadgeCheck, 
  Receipt, 
  Check, 
  ArrowRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display antialiased selection:bg-primary/30">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#101322]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary flex items-center justify-center">
              <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-black tracking-tighter text-white">Vioo</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Produto
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Como Funciona
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              Dev Log
              <ExternalLink size={14} />
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-white px-4 py-2 hover:bg-white/5 rounded-lg transition-all">
              Entrar
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all">
              Começar agora
            </button>
          </div>
        </div>
      </header>

      <main className="relative pt-20 overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Versão Beta disponível em breve
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              Antecipe sua economia <br className="hidden md:block" /> com <span className="text-primary italic">inteligência</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl">
              Transforme seus recibos em previsibilidade financeira. O Vioo analisa seus gastos reais para garantir que você economize antes mesmo de passar o cartão.
            </p>

            {/* Waitlist Form */}
            <div className="w-full max-w-xl">
              <form className="flex flex-col sm:flex-row gap-3 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="relative flex-1 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <input 
                    type="email" 
                    className="w-full pl-11 pr-4 py-4 bg-transparent border-0 focus:ring-0 text-white placeholder:text-slate-500 text-base outline-none" 
                    placeholder="Seu melhor e-mail" 
                  />
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/25">
                  Entrar na Lista de Espera
                </button>
              </form>
              <p className="mt-4 text-slate-500 text-xs flex items-center justify-center gap-2">
                <ShieldCheck size={16} />
                Privacidade garantida. Sem spam, apenas atualizações do produto.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Economia Média</p>
              <div className="flex items-end gap-2">
                <span className="text-white text-4xl font-bold leading-none">15%</span>
                <span className="text-emerald-500 text-sm font-bold flex items-center mb-1 gap-1">
                  <TrendingUp size={16} />
                  +3.2%
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Usuários na Lista</p>
              <div className="flex items-end gap-2">
                <span className="text-white text-4xl font-bold leading-none">2.5k+</span>
                <span className="text-primary text-sm font-bold mb-1">Crescendo</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Precisão de Dados</p>
              <div className="flex items-end gap-2">
                <span className="text-white text-4xl font-bold leading-none">99.9%</span>
                <BadgeCheck size={24} className="text-emerald-500 mb-1" />
              </div>
            </div>
          </div>

          {/* Visual Asset / Mockup Preview */}
          <div className="mt-20 relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-[16/9] md:aspect-[21/9] shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            {/* Background image com overlay escuro */}
            <div 
              className="absolute inset-0 flex items-center justify-center p-8 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ 
                backgroundImage: `linear-gradient(rgba(16, 19, 34, 0.4), rgba(16, 19, 34, 0.4)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')` 
              }}
            >
              {/* Floating Glass UI Elements */}
              <div className="hidden md:flex gap-4 items-center z-20">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl translate-y-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Receipt size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Recibo Analisado</p>
                      <p className="text-slate-400 text-xs">Supermercado Silva</p>
                    </div>
                  </div>
                  <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3"></div>
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl -translate-y-12">
                  <p className="text-slate-400 text-xs mb-1">Previsão de Gasto</p>
                  <p className="text-white font-bold text-2xl">R$ 1.450,00</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="size-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check size={10} className="text-emerald-500" />
                    </div>
                    <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-tight">Dentro do Orçamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Meta Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
          <h4 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Acompanhe a Evolução</h4>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm font-normal">
              Nosso time está construindo o futuro da inteligência financeira.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-primary transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-primary">
              Versão v0.1 Alpha • Ver Dev Log Completo
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <svg className="size-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <span className="text-white font-bold">Vioo</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © 2026 Vioo Tecnologias Financeiras Ltda. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacidade</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Termos</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
