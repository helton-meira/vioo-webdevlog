import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-primary text-lg font-bold mb-3">{title}</h2>
    {children}
  </div>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-400 text-sm leading-7 mb-3">{children}</p>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-400 text-sm leading-7">{children}</li>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-primary bg-primary/10 px-4 py-3 rounded-r-xl mb-4">
    <p className="text-white text-sm font-semibold leading-6">{children}</p>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display antialiased">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#101322]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-primary" />
            <span className="text-sm font-semibold">Política de Privacidade</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Shield size={12} />
            Legal
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-slate-500 text-sm">Última atualização: 08 de Fevereiro de 2025</p>
        </div>

        <div className="space-y-2">
          <Body>
            A Vioo tem o compromisso de proteger sua privacidade. Esta política explica como
            coletamos, usamos e protegemos suas informações pessoais.
          </Body>

          <Section title="1. Informações que Coletamos">
            <Body>Informações da conta:</Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Nome e e-mail (conta ou login com Google)</Bullet>
              <Bullet>Foto de perfil (opcional, via Google)</Bullet>
            </ul>
            <Body>Dados de notas fiscais:</Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Produtos, preços, impostos, data e mercado</Bullet>
              <Bullet>QR Codes escaneados para extração de dados</Bullet>
            </ul>
            <Body>Localização:</Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Localização aproximada para encontrar mercados próximos (somente com sua permissão)</Bullet>
              <Bullet>Endereço salvo no perfil (opcional)</Bullet>
            </ul>
          </Section>

          <Section title="2. Como Usamos seus Dados">
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Processar notas fiscais e comparar preços</Bullet>
              <Bullet>Mostrar mercados próximos à sua localização</Bullet>
              <Bullet>Salvar seu histórico de compras</Bullet>
              <Bullet>Melhorar os recursos do aplicativo</Bullet>
              <Bullet>Gerar estatísticas e análises de mercado (de forma anônima)</Bullet>
            </ul>
          </Section>

          <Section title="2.1 Dados Anônimos e Agregados">
            <Highlight>Seus dados pessoais NUNCA são compartilhados individualmente.</Highlight>
            <Body>
              Podemos usar dados anônimos e agregados para análises de mercado, como tendências de
              preços por região ou produtos mais comprados em determinadas áreas.
            </Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>O que fazemos: "Consumidores da região Sul estão comprando mais arroz"</Bullet>
              <Bullet>O que NUNCA fazemos: "João Silva comprou arroz no mercado X"</Bullet>
            </ul>
            <Body>
              Esses dados agregados podem ser utilizados para melhorar nossos serviços, gerar
              relatórios de mercado ou compartilhar insights com parceiros comerciais.
            </Body>
          </Section>

          <Section title="3. Compartilhamento de Dados">
            <Highlight>Não vendemos suas informações pessoais.</Highlight>
            <Body>Compartilhamos dados apenas com:</Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Provedores de serviço que nos ajudam a operar o app (Supabase, RevenueCat)</Bullet>
              <Bullet>Autoridades quando exigido por lei</Bullet>
            </ul>
          </Section>

          <Section title="4. Serviços de Terceiros">
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Supabase — armazenamento seguro de dados</Bullet>
              <Bullet>Google Sign-In — autenticação</Bullet>
              <Bullet>RevenueCat — gerenciamento de assinaturas</Bullet>
            </ul>
          </Section>

          <Section title="5. Segurança">
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Criptografia de dados em trânsito (HTTPS/TLS)</Bullet>
              <Bullet>Armazenamento seguro em servidores protegidos</Bullet>
              <Bullet>Autenticação segura via tokens</Bullet>
            </ul>
          </Section>

          <Section title="6. Seus Direitos (LGPD)">
            <Body>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</Body>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <Bullet>Acesso — solicitar cópia dos seus dados</Bullet>
              <Bullet>Correção — corrigir dados incorretos</Bullet>
              <Bullet>Exclusão — solicitar remoção dos seus dados</Bullet>
              <Bullet>Portabilidade — receber seus dados em formato estruturado</Bullet>
              <Bullet>Revogação — retirar seu consentimento a qualquer momento</Bullet>
            </ul>
          </Section>

          <Section title="7. Câmera">
            <Body>
              O Vioo usa a câmera exclusivamente para escanear QR Codes de notas fiscais.
              As imagens não são armazenadas após a extração das informações.
            </Body>
          </Section>

          <Section title="8. Contato">
            <Body>Dúvidas sobre privacidade? Entre em contato:</Body>
            <a
              href="mailto:vioopromotions@gmail.com"
              className="text-primary hover:underline text-sm font-medium"
            >
              vioopromotions@gmail.com
            </a>
          </Section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
          <Link href="/terms" className="text-sm text-slate-400 hover:text-primary transition-colors">
            Termos de Uso →
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            ← Voltar para o início
          </Link>
        </div>
      </main>
    </div>
  );
}
