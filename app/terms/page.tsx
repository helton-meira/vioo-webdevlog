import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

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
  <div className="border-l-4 border-yellow-500 bg-yellow-500/10 px-4 py-3 rounded-r-xl mb-4">
    <p className="text-yellow-200 text-sm font-semibold leading-6">{children}</p>
  </div>
);

export default function TermsPage() {
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
            <FileText size={18} className="text-primary" />
            <span className="text-sm font-semibold">Termos de Uso</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <FileText size={12} />
            Legal
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-3">
            Termos de Uso
          </h1>
          <p className="text-slate-500 text-sm">Última atualização: 08 de Fevereiro de 2025</p>
        </div>

        <Body>
          Ao usar o Vioo, você concorda com estes Termos de Uso. Se não concordar, não utilize o aplicativo.
        </Body>

        <Section title="1. O Serviço">
          <Body>O Vioo permite:</Body>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <Bullet>Escanear notas fiscais via QR Code</Bullet>
            <Bullet>Acompanhar histórico de compras</Bullet>
            <Bullet>Comparar preços de produtos em diferentes mercados</Bullet>
            <Bullet>Encontrar mercados próximos à sua localização</Bullet>
            <Bullet>Exportar dados de compras</Bullet>
          </ul>
        </Section>

        <Section title="2. Conta de Usuário">
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <Bullet>Você precisa criar uma conta para usar o Vioo (e-mail ou Google)</Bullet>
            <Bullet>Você é responsável pela segurança da sua conta</Bullet>
            <Bullet>Forneça apenas informações verdadeiras</Bullet>
          </ul>
        </Section>

        <Section title="3. Uso Aceitável">
          <Body>Você concorda em NÃO:</Body>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <Bullet>Usar o aplicativo para fins ilegais</Bullet>
            <Bullet>Tentar acessar contas de outros usuários</Bullet>
            <Bullet>Fazer engenharia reversa ou modificar o app</Bullet>
            <Bullet>Enviar dados falsos ou fraudulentos</Bullet>
            <Bullet>Usar bots ou scripts automatizados</Bullet>
          </ul>
        </Section>

        <Section title="4. Seus Dados">
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <Bullet>Você mantém a propriedade dos dados que envia (notas fiscais, compras)</Bullet>
            <Bullet>Ao usar o serviço, você nos permite processar e armazenar seus dados</Bullet>
            <Bullet>
              Você concorda com o uso anônimo e agregado dos seus dados para análises de mercado
              (ex: tendências de preços por região)
            </Bullet>
          </ul>
        </Section>

        <Section title="5. Assinaturas">
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <Bullet>O Vioo oferece recursos gratuitos e premium via assinatura</Bullet>
            <Bullet>Cobranças são feitas pela Google Play Store</Bullet>
            <Bullet>Cancele a qualquer momento pelas configurações da Play Store</Bullet>
            <Bullet>Reembolsos seguem as políticas da Google Play</Bullet>
          </ul>
        </Section>

        <Section title="6. Precisão das Informações">
          <Highlight>
            Os preços exibidos são baseados em dados de notas fiscais enviadas por usuários.
            Não garantimos que reflitam os preços atuais nos mercados.
          </Highlight>
          <Body>
            O Vioo não se responsabiliza por decisões de compra baseadas nas informações do app.
          </Body>
        </Section>

        <Section title="7. Modificações">
          <Body>
            Podemos atualizar estes termos, modificar funcionalidades ou alterar preços com aviso
            prévio. O uso continuado após alterações implica aceitação dos novos termos.
          </Body>
        </Section>

        <Section title="8. Lei Aplicável">
          <Body>Estes termos são regidos pelas leis da República Federativa do Brasil.</Body>
        </Section>

        <Section title="9. Contato">
          <Body>Dúvidas? Entre em contato:</Body>
          <a
            href="mailto:vioopromotions@gmail.com"
            className="text-primary hover:underline text-sm font-medium"
          >
            vioopromotions@gmail.com
          </a>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
          <Link href="/privacy" className="text-sm text-slate-400 hover:text-primary transition-colors">
            ← Política de Privacidade
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            Voltar para o início →
          </Link>
        </div>
      </main>
    </div>
  );
}
