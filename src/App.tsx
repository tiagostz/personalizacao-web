import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Apple, 
  Stethoscope, 
  Briefcase, 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Layout, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

interface Template {
  id: string;
  title: string;
  niche: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

// --- Data ---

const templates: Template[] = [
  {
    id: '1',
    title: 'Elite Performance',
    niche: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    icon: <Dumbbell className="w-5 h-5" />,
    description: 'Um template focado em resultados, com galeria de transformações, agendamento de aulas e blog de dicas de treino.',
    features: ['Agendamento Online', 'Calculadora de IMC', 'Galeria de Resultados', 'Blog de Treinos'],
  },
  {
    id: '2',
    title: 'Vitality Hub',
    niche: 'Nutricionista',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    icon: <Apple className="w-5 h-5" />,
    description: 'Design clean e orgânico para nutricionistas, com foco em planos alimentares, receitas e depoimentos de pacientes.',
    features: ['Área de Receitas', 'Planos Personalizados', 'Integração com Apps', 'Depoimentos'],
  },
  {
    id: '3',
    title: 'Care Connect',
    niche: 'Médico',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    icon: <Stethoscope className="w-5 h-5" />,
    description: 'Profissionalismo e sobriedade para clínicas e consultórios médicos, com pré-agendamento e currículo detalhado.',
    features: ['Pré-agendamento', 'Lista de Convênios', 'Currículo Lattes', 'FAQ de Saúde'],
  },
  {
    id: '4',
    title: 'Smile Studio',
    niche: 'Dentista',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Focado em estética e saúde bucal, com visualização de tratamentos, tecnologia utilizada e equipe.',
    features: ['Galeria Antes/Depois', 'Tour Virtual', 'Equipe Clínica', 'Tratamentos'],
  },
  {
    id: '5',
    title: 'Legal Path',
    niche: 'Advogado',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Autoridade e confiança para advogados, com áreas de atuação, blog jurídico e formulário de consulta.',
    features: ['Áreas de Atuação', 'Publicações Jurídicas', 'Consulta Online', 'Equipe de Sócios'],
  },
  {
    id: '6',
    title: 'Creative Mind',
    niche: 'Psicólogo',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    icon: <Layout className="w-5 h-5" />,
    description: 'Ambiente acolhedor e minimalista para psicólogos, com foco em especialidades, abordagem e blog terapêutico.',
    features: ['Abordagem Clínica', 'Blog Terapêutico', 'Agendamento Discreto', 'Especialidades'],
  },
];

const steps = [
  {
    title: 'Escolha a Base',
    description: 'Selecione um de nossos modelos de alta performance como ponto de partida visual.',
    icon: <Layout className="w-6 h-6" />,
    color: 'bg-blue-500'
  },
  {
    title: 'Desenvolvimento Sob Medida',
    description: 'Nossa equipe adapta cada funcionalidade e detalhe visual para as necessidades específicas do seu negócio.',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-emerald-500'
  },
  {
    title: 'Entrega do Site',
    description: 'Seu site personalizado no ar em tempo recorde, pronto para converter visitantes em clientes.',
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: 'bg-zinc-900'
  },
];

const features = [
  {
    title: 'Performance',
    description: 'Sites que carregam em menos de 1 segundo.',
    icon: <Zap className="w-6 h-6" />,
    size: 'large'
  },
  {
    title: 'Mobile First',
    description: 'Experiência perfeita em qualquer tela.',
    icon: <Smartphone className="w-6 h-6" />,
    size: 'small'
  },
  {
    title: 'Design Premium',
    description: 'Estética minimalista que transmite autoridade e confiança.',
    icon: <Layout className="w-6 h-6" />,
    size: 'medium'
  },
];

// --- Components ---

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "glass border-zinc-200/50 dark:border-zinc-800/50 py-4" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-zinc-900 font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Personalização<span className="font-light text-zinc-500">Web</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Modelos', 'Como Funciona', 'Vantagens', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item}
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="relative z-10 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 cursor-pointer"
            aria-label="Alternar modo escuro"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a href="#contato" className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-lg transition-all">
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="relative z-10 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="p-2 text-zinc-600 dark:text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Modelos', 'Como Funciona', 'Vantagens', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                {item}
              </a>
            ))}
            <a href="#contato" onClick={() => setIsOpen(false)} className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-4 rounded-xl text-center font-bold">
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 dark:bg-zinc-900/20 -z-10 hidden lg:block" />
      <div className="absolute top-0 left-[10%] w-px h-full bg-zinc-100 dark:bg-zinc-800 -z-10 hidden xl:block" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-serif font-medium leading-[0.82] text-zinc-900 dark:text-zinc-100 mb-12 tracking-tighter">
              A Arte da <br />
              <span className="italic text-zinc-300 dark:text-zinc-700">Personalização</span> <br />
              Digital.
            </h1>

            <div className="max-w-md ml-auto lg:ml-0">
              <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed font-light">
                Elevamos sua presença digital através de uma curadoria técnica e estética rigorosa. Transformamos modelos de alta performance em experiências únicas.
              </p>
              
              <div className="flex flex-wrap gap-10 items-center">
                <a 
                  href="#modelos" 
                  className="group relative flex items-center gap-4 text-zinc-900 dark:text-zinc-100 font-semibold"
                >
                  <span className="relative z-10">Ver Portfólio</span>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors" />
                  </div>
                </a>
                
                <a 
                  href="#contato" 
                  className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Agendar Consultoria
                </a>
              </div>
            </div>
            
            {/* Vertical Decorative Text */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden xl:block">
              <p className="writing-mode-vertical rotate-180 text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-200 dark:text-zinc-800 whitespace-nowrap">
                EST. 2024 • DESIGN DE ELITE • PERSONALIZAÇÃO WEB
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Tall Vertical Image Composition */}
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] bg-white dark:bg-zinc-900 border-[16px] border-white dark:border-zinc-900 transition-colors duration-300">
              <div className="aspect-[2/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop" 
                  alt="Minimalist Interior Design" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Minimalist Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 hidden xl:block z-20 transition-colors duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-zinc-900 dark:bg-zinc-100 rounded-2xl flex items-center justify-center text-white dark:text-zinc-900 font-serif italic text-2xl transition-colors duration-300">
                  P
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">Curadoria</p>
                  <p className="text-zinc-900 dark:text-zinc-100 font-bold transition-colors duration-300">Design de Elite</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Background Shape */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TemplateCard = ({ template, onPreview }: { template: Template; onPreview: (t: Template) => void }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={template.image} 
          alt={template.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button 
            onClick={() => onPreview(template)}
            className="bg-white dark:bg-zinc-100 text-zinc-900 dark:text-zinc-900 px-6 py-3 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            Visualizar Modelo
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 mb-2">
          {template.icon}
          <span className="text-xs font-semibold uppercase tracking-widest">{template.niche}</span>
        </div>
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{template.title}</h3>
      </div>
    </motion.div>
  );
};

// --- Template Previews ---

// --- Template Previews ---

const PersonalTrainerPreview = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans">
      {/* Hero */}
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Personal Trainer"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded text-emerald-400 font-bold tracking-widest text-[10px] uppercase mb-6"
          >
            Treinamento de Alta Performance
          </motion.div>
          <h1 className="text-6xl font-serif text-white mb-6 leading-[1.1]">
            Supere seus <br />
            <span className="italic text-emerald-400">limites</span> hoje.
          </h1>
          <p className="text-zinc-300 mb-10 text-xl leading-relaxed max-w-lg">
            Metodologia exclusiva focada em resultados reais através de ciência aplicada ao movimento e nutrição.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 text-black px-10 py-5 rounded-full font-bold hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
              Agendar Avaliação
            </button>
            <button className="border border-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all">
              Ver Planos
            </button>
          </div>
        </div>
      </div>

      {/* Stats - Bento Style */}
      <div className="p-12 grid grid-cols-4 gap-4 bg-zinc-50">
        <div className="col-span-2 bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="text-4xl font-bold text-zinc-900 mb-2">15+</div>
          <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">Anos de Experiência</div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">Uma década dedicada a transformar corpos e mentes através do esporte de alto nível e consultoria personalizada.</p>
        </div>
        <div className="bg-zinc-900 p-8 rounded-3xl text-white flex flex-col justify-between">
          <Dumbbell className="w-8 h-8 text-emerald-400" />
          <div>
            <div className="text-2xl font-bold">800+</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500">Alunos Ativos</div>
          </div>
        </div>
        <div className="bg-emerald-500 p-8 rounded-3xl text-black flex flex-col justify-between">
          <CheckCircle2 className="w-8 h-8" />
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-900">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="p-12 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Metodologia Científica</h2>
          <p className="text-zinc-500">Não acreditamos em fórmulas mágicas. Nosso trabalho é baseado em quatro pilares fundamentais.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[
            { t: 'Avaliação Biomecânica', d: 'Análise detalhada do seu movimento para prevenir lesões e maximizar a eficiência.' },
            { t: 'Periodização Inteligente', d: 'Treinos estruturados em ciclos para garantir evolução constante sem estagnação.' },
            { t: 'Acompanhamento Nutricional', d: 'Estratégias alimentares alinhadas ao seu gasto energético e objetivos específicos.' },
            { t: 'Suporte 24/7', d: 'Canal direto para tirar dúvidas e manter a motivação sempre em alta.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-sm">{i+1}</span>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">{item.t}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plans Section */}
      <div className="p-12 bg-zinc-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-2">Planos de Consultoria</h2>
          <p className="text-zinc-500">Escolha o nível de acompanhamento ideal para você.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border-2 border-zinc-100 bg-white hover:border-emerald-500 transition-all group">
            <h3 className="text-xl font-bold mb-2">Plano Pro</h3>
            <div className="text-3xl font-bold mb-6">R$ 297<span className="text-sm font-normal text-zinc-400">/mês</span></div>
            <ul className="space-y-4 mb-8">
              {['Treino Mensal Personalizado', 'Suporte via WhatsApp', 'Acesso ao App de Treino', 'Guia Nutricional Básico'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-zinc-900 font-bold group-hover:bg-zinc-900 group-hover:text-white transition-all">Assinar Agora</button>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Popular</div>
            <h3 className="text-xl font-bold mb-2">Plano Elite</h3>
            <div className="text-3xl font-bold mb-6 text-emerald-400">R$ 497<span className="text-sm font-normal text-zinc-500">/mês</span></div>
            <ul className="space-y-4 mb-8">
              {['Treino Semanal Atualizado', 'Suporte Prioritário 24/7', 'Acompanhamento Nutricional Completo', 'Check-in Quinzenal por Vídeo'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all">Assinar Agora</button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">Resultados Reais</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Carlos Silva', r: 'Perdi 12kg em 3 meses e recuperei minha autoestima. O acompanhamento é impecável.', i: 'https://picsum.photos/seed/p1/100/100' },
            { n: 'Mariana Costa', r: 'A periodização mudou meu jogo. Nunca evoluí tanto em força e técnica.', i: 'https://picsum.photos/seed/p2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.i} className="w-12 h-12 rounded-full" alt={t.n} />
                <div className="font-bold">{t.n}</div>
              </div>
              <p className="text-sm text-zinc-500 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="p-12 bg-zinc-50">
        <h2 className="text-3xl font-serif mb-8 text-center">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'Preciso treinar todos os dias?', a: 'Não. O plano é adaptado à sua disponibilidade, focando em qualidade e não apenas quantidade.' },
            { q: 'Como recebo meu treino?', a: 'Através de um aplicativo exclusivo com vídeos demonstrativos de cada exercício.' }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100">
              <div className="font-bold mb-2">{f.q}</div>
              <p className="text-sm text-zinc-500">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-emerald-500 text-black text-center">
        <h2 className="text-4xl font-serif mb-6">Pronto para começar?</h2>
        <p className="text-emerald-900 mb-10 max-w-xl mx-auto">Transforme seu corpo e sua saúde com um acompanhamento profissional de verdade.</p>
        <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-transform">
          Quero minha consultoria
        </button>
      </div>
    </div>
  );
};

const NutritionistPreview = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans">
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Nutritionist"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-emerald-100 rounded text-emerald-700 font-bold tracking-widest text-[10px] uppercase mb-6">
            Nutrição Consciente
          </div>
          <h1 className="text-6xl font-serif text-zinc-900 mb-6 leading-[1.1]">
            Alimente sua <br />
            <span className="italic text-emerald-600">melhor</span> versão.
          </h1>
          <p className="text-zinc-600 mb-10 text-xl leading-relaxed max-w-lg">
            Planos alimentares personalizados que respeitam sua rotina, cultura e objetivos de saúde, sem restrições severas.
          </p>
          <button className="bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all">
            Agendar Consulta
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-12 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">Especialidades</h2>
          <p className="text-zinc-500">Atendimento especializado para diferentes fases e objetivos da vida.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { t: 'Emagrecimento', d: 'Foco em perda de gordura com preservação de massa muscular.' },
            { t: 'Nutrição Esportiva', d: 'Otimização da performance e recuperação para atletas.' },
            { t: 'Saúde da Mulher', d: 'Acompanhamento nutricional para ciclos hormonais e gestação.' },
            { t: 'Hipertrofia', d: 'Estratégias para ganho de massa magra e força.' },
            { t: 'Reeducação', d: 'Mudança de hábitos para uma vida mais equilibrada e duradoura.' },
            { t: 'Veganos/Veg', d: 'Ajustes nutricionais para dietas à base de plantas.' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-emerald-50 transition-colors">
              <h4 className="font-bold mb-2 text-emerald-700">{item.t}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="p-12 bg-emerald-50/30">
        <h2 className="text-3xl font-serif mb-12 text-center">Jornada do Paciente</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {[
            { t: 'Anamnese Completa', d: 'Entendemos seu histórico, rotina, exames e relação com a comida.' },
            { t: 'Plano Personalizado', d: 'Você recebe um cardápio flexível e adaptado às suas preferências.' },
            { t: 'Suporte via App', d: 'Acesso a receitas, lista de compras e chat direto para dúvidas.' },
            { t: 'Acompanhamento', d: 'Retornos periódicos para ajustes e celebração de conquistas.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                {i+1}
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">{item.t}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">Depoimentos</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Julia Mendes', r: 'Aprendi a comer sem culpa. Minha relação com a comida mudou completamente.', i: 'https://picsum.photos/seed/n1/100/100' },
            { n: 'Roberto Alves', r: 'O plano esportivo me ajudou a baixar meu tempo na maratona. Excelente!', i: 'https://picsum.photos/seed/n2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.i} className="w-12 h-12 rounded-full" alt={t.n} />
                <div className="font-bold text-emerald-900">{t.n}</div>
              </div>
              <p className="text-sm text-zinc-600 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="p-12 bg-zinc-50">
        <h2 className="text-3xl font-serif mb-8 text-center">Dúvidas Comuns</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'Vou ter que parar de comer o que gosto?', a: 'Não. Trabalhamos com flexibilidade e equilíbrio, incluindo seus alimentos preferidos no planejamento.' },
            { q: 'Como funciona o suporte?', a: 'Temos um aplicativo onde você pode tirar dúvidas e registrar sua evolução diária.' }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100">
              <div className="font-bold mb-2 text-zinc-900">{f.q}</div>
              <p className="text-sm text-zinc-500">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-emerald-50 text-center">
        <h2 className="text-4xl font-serif mb-6 text-emerald-900">Sua saúde não pode esperar.</h2>
        <p className="text-emerald-700/70 mb-10 max-w-xl mx-auto">Agende sua primeira consulta e descubra como a nutrição pode ser leve e prazerosa.</p>
        <button className="bg-emerald-600 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors">
          Agendar agora
        </button>
      </div>
    </div>
  );
};

const MedicalPreview = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans">
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden border-b border-zinc-100">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Medical"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <div className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4">Medicina de Excelência</div>
          <h1 className="text-6xl font-serif text-zinc-900 mb-6 leading-[1.1]">
            Cuidado <span className="italic">humano</span> e tecnologia de ponta.
          </h1>
          <p className="text-zinc-500 mb-10 text-xl leading-relaxed max-w-lg">
            Dedicados à sua saúde com diagnósticos precisos, tratamentos personalizados e um atendimento acolhedor.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all">
              Agendar Consulta
            </button>
            <button className="border border-zinc-200 text-zinc-900 px-10 py-5 rounded-full font-bold hover:bg-zinc-50 transition-all">
              Nossa Clínica
            </button>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="p-12 bg-zinc-50">
        <div className="grid grid-cols-4 gap-6">
          {[
            { t: 'Cardiologia', i: <Zap className="w-5 h-5" /> },
            { t: 'Dermatologia', i: <Layout className="w-5 h-5" /> },
            { t: 'Ortopedia', i: <Dumbbell className="w-5 h-5" /> },
            { t: 'Pediatria', i: <CheckCircle2 className="w-5 h-5" /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.i}
              </div>
              <h4 className="font-bold text-sm">{item.t}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance */}
      <div className="p-12 bg-white text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Convênios Atendidos</h3>
        <div className="flex justify-center gap-12 opacity-30 grayscale">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="text-2xl font-black italic">LOGO {i}</div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="p-12 bg-zinc-900 text-white grid grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Onde estamos</h2>
          <div className="space-y-4 text-zinc-400">
            <p>Av. Paulista, 1000 - Bela Vista</p>
            <p>São Paulo - SP, 01310-100</p>
            <p className="pt-4 text-white font-bold">Segunda a Sexta: 08h às 20h</p>
            <p className="text-white font-bold">Sábado: 08h às 12h</p>
          </div>
        </div>
        <div className="aspect-video bg-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center text-zinc-600">
          MAPA INTERATIVO
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">O que dizem nossos pacientes</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Ana Paula', r: 'Atendimento humanizado e equipe extremamente competente. Recomendo a todos.', i: 'https://picsum.photos/seed/m1/100/100' },
            { n: 'Fernando Lima', r: 'A clínica é moderna e os médicos são muito atenciosos. Me senti muito seguro.', i: 'https://picsum.photos/seed/m2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-blue-50/30 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.i} className="w-12 h-12 rounded-full" alt={t.n} />
                <div className="font-bold text-blue-900">{t.n}</div>
              </div>
              <p className="text-sm text-zinc-600 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-serif mb-6">Sua saúde em boas mãos.</h2>
        <p className="text-blue-100 mb-10 max-w-xl mx-auto">Agende sua consulta hoje mesmo e tenha acesso ao melhor da medicina moderna.</p>
        <button className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors">
          Marcar Consulta
        </button>
      </div>
    </div>
  );
};

const DentistPreview = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans">
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Dentist"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/80 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-serif text-zinc-900 mb-6 leading-[1.1]">
            O sorriso que <br />
            você sempre <span className="italic text-blue-500">sonhou</span>.
          </h1>
          <p className="text-zinc-600 mb-10 text-xl leading-relaxed max-w-lg">
            Estética dental avançada e saúde bucal completa com o conforto e a tecnologia que você merece.
          </p>
          <button className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200">
            Marcar Avaliação
          </button>
        </div>
      </div>

      {/* Treatments */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">Tratamentos</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { t: 'Lentes de Contato', d: 'Transformação estética do sorriso com lâminas ultrafinas de porcelana.' },
            { t: 'Implantes Dentários', d: 'Recuperação da função e estética com tecnologia suíça.' },
            { t: 'Invisalign', d: 'Alinhamento dos dentes de forma invisível e confortável.' },
            { t: 'Clareamento Laser', d: 'Dentes brancos de forma rápida e segura em consultório.' },
            { t: 'Odontopediatria', d: 'Cuidado especializado e lúdico para os pequenos.' },
            { t: 'Harmonização', d: 'Equilíbrio estético entre o sorriso e as linhas do rosto.' }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-zinc-100 hover:shadow-xl transition-all group">
              <h4 className="font-bold mb-3 text-blue-600">{item.t}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology */}
      <div className="p-12 bg-blue-50 grid grid-cols-2 gap-12 items-center">
        <div className="aspect-video rounded-3xl bg-white overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Clinic" />
        </div>
        <div>
          <h3 className="text-3xl font-serif mb-6 text-zinc-900">Tecnologia Digital</h3>
          <p className="text-zinc-600 leading-relaxed mb-6">Utilizamos scanners 3D de última geração para moldagens digitais, eliminando o desconforto das massas tradicionais e garantindo precisão absoluta.</p>
          <ul className="space-y-3">
            {['Scanner iTero 5D', 'Raio-X Digital Panorâmico', 'Câmera Intraoral HD'].map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">Sorrisos Transformados</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Beatriz Soares', r: 'Minhas lentes de contato ficaram super naturais. Mudou meu sorriso e minha confiança.', i: 'https://picsum.photos/seed/d1/100/100' },
            { n: 'Lucas Mendes', r: 'O tratamento com Invisalign foi rápido e indolor. Equipe nota 10!', i: 'https://picsum.photos/seed/d2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.i} className="w-12 h-12 rounded-full" alt={t.n} />
                <div className="font-bold">{t.n}</div>
              </div>
              <p className="text-sm text-zinc-500 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-zinc-900 text-white text-center">
        <h2 className="text-4xl font-serif mb-6">Sorria com confiança.</h2>
        <p className="text-zinc-500 mb-10 max-w-xl mx-auto">Agende uma avaliação e descubra o plano de tratamento ideal para o seu sorriso.</p>
        <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">
          Agendar Avaliação
        </button>
      </div>
    </div>
  );
};

const LawyerPreview = () => {
  return (
    <div className="bg-zinc-900 text-white font-sans">
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden border-b border-zinc-800">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Lawyer"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-2xl">
          <div className="w-12 h-1 bg-amber-500 mb-8" />
          <h1 className="text-6xl font-serif text-white mb-6 leading-[1.1]">
            Excelência Jurídica e <br />
            <span className="italic text-amber-500">Compromisso</span> Ético.
          </h1>
          <p className="text-zinc-400 mb-10 text-xl leading-relaxed max-w-lg">
            Soluções jurídicas estratégicas e personalizadas para proteger seus interesses e garantir seus direitos em um mundo complexo.
          </p>
          <button className="bg-amber-600 text-white px-10 py-5 rounded-sm font-bold hover:bg-amber-700 transition-all uppercase tracking-widest text-sm">
            Agendar Consulta Jurídica
          </button>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="p-12 bg-zinc-950">
        <h2 className="text-3xl font-serif mb-16 text-center text-white">Áreas de Atuação</h2>
        <div className="grid grid-cols-3 gap-12">
          {[
            { t: 'Direito Civil', d: 'Contratos, responsabilidade civil e questões possessórias.' },
            { t: 'Direito Digital', d: 'LGPD, crimes cibernéticos e propriedade intelectual online.' },
            { t: 'Empresarial', d: 'Constituição de holdings, fusões e assessoria societária.' },
            { t: 'Família e Sucessões', d: 'Inventários, divórcios e planejamento sucessório.' },
            { t: 'Trabalhista Patronal', d: 'Defesa de interesses empresariais e compliance.' },
            { t: 'Tributário', d: 'Recuperação de créditos e planejamento fiscal estratégico.' }
          ].map((item, i) => (
            <div key={i} className="border-l border-zinc-800 pl-8 hover:border-amber-500 transition-colors group">
              <h3 className="text-amber-500 font-bold mb-3 uppercase tracking-widest text-xs group-hover:text-white transition-colors">{item.t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="p-12 bg-zinc-900 grid grid-cols-3 gap-8 text-center">
        {[
          { t: 'Transparência', d: 'Relatórios periódicos sobre o andamento de cada processo.' },
          { t: 'Agilidade', d: 'Uso de tecnologia para acelerar trâmites e comunicações.' },
          { t: 'Exclusividade', d: 'Atendimento boutique focado em casos de alta complexidade.' }
        ].map((v, i) => (
          <div key={i} className="p-8 bg-zinc-950/50 rounded-2xl border border-zinc-800">
            <h4 className="text-white font-bold mb-4">{v.t}</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-zinc-950">
        <h2 className="text-3xl font-serif mb-12 text-center text-white">Confiança e Resultados</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Empresa X', r: 'A assessoria tributária nos poupou milhões em impostos recuperados. Estratégicos e precisos.', i: 'https://picsum.photos/seed/l1/100/100' },
            { n: 'Dr. Ricardo', r: 'Representação impecável em um caso complexo de direito digital. Altamente recomendados.', i: 'https://picsum.photos/seed/l2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.i} className="w-12 h-12 rounded-full" alt={t.n} />
                <div className="font-bold text-amber-500">{t.n}</div>
              </div>
              <p className="text-sm text-zinc-400 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-amber-600 text-white text-center">
        <h2 className="text-4xl font-serif mb-6">Defesa técnica de excelência.</h2>
        <p className="text-amber-100 mb-10 max-w-xl mx-auto">Entre em contato para uma análise preliminar do seu caso com total sigilo e profissionalismo.</p>
        <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-zinc-900 transition-colors">
          Falar com Especialista
        </button>
      </div>
    </div>
  );
};

const PsychologistPreview = () => {
  return (
    <div className="bg-stone-50 text-stone-900 font-sans">
      <div className="relative h-[600px] flex items-center px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 rounded-l-[100px]" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-serif text-stone-900 mb-6 leading-[1.1]">
            Um espaço para <br />
            <span className="italic text-stone-400">você</span> se reencontrar.
          </h1>
          <p className="text-stone-500 mb-10 text-xl leading-relaxed max-w-lg">
            Psicoterapia individual e acolhedora para auxiliar no seu processo de autoconhecimento, saúde mental e equilíbrio emocional.
          </p>
          <button className="bg-stone-800 text-white px-10 py-5 rounded-full font-medium hover:bg-stone-700 transition-all">
            Agendar Primeira Sessão
          </button>
        </div>
        <div className="absolute right-12 w-1/3 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Psychologist" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Approach */}
      <div className="p-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Abordagem Terapêutica</h2>
            <p className="text-stone-500 leading-relaxed mb-6">Trabalho com a Terapia Cognitivo-Comportamental (TCC), uma abordagem focada no presente e na resolução de problemas atuais, auxiliando na identificação de padrões de pensamento.</p>
            <ul className="space-y-4">
              {['Ansiedade e Estresse', 'Depressão', 'Conflitos de Relacionamento', 'Autoestima'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-stone-300" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100">
            <h3 className="text-xl font-serif mb-4">Modalidades</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Smartphone className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Online</h4>
                  <p className="text-xs text-stone-400">Sessões por vídeo no conforto da sua casa.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Layout className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Presencial</h4>
                  <p className="text-xs text-stone-400">Consultório localizado no centro da cidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 text-center max-w-2xl mx-auto">
        <p className="text-stone-400 italic text-lg mb-4">"A jornada de mil milhas começa com um único passo."</p>
        <div className="w-12 h-0.5 bg-stone-200 mx-auto" />
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-stone-100/50">
        <h2 className="text-3xl font-serif mb-12 text-center">Relatos de Superação</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { n: 'Anônimo', r: 'Encontrei um lugar seguro para falar sobre minhas dores. O processo tem sido libertador.', i: 'https://picsum.photos/seed/ps1/100/100' },
            { n: 'Anônimo', r: 'A terapia me ajudou a entender meus padrões e a viver com mais leveza.', i: 'https://picsum.photos/seed/ps2/100/100' }
          ].map((t, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold">A</div>
                <div className="font-bold text-stone-800">{t.n}</div>
              </div>
              <p className="text-sm text-stone-500 italic">"{t.r}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-20 bg-stone-800 text-white text-center">
        <h2 className="text-4xl font-serif mb-6">O cuidado que você merece.</h2>
        <p className="text-stone-400 mb-10 max-w-xl mx-auto">Dê o primeiro passo em direção ao seu bem-estar emocional. Agende sua sessão inicial.</p>
        <button className="bg-stone-200 text-stone-800 px-12 py-6 rounded-full font-bold text-lg hover:bg-white transition-colors">
          Agendar Sessão
        </button>
      </div>
    </div>
  );
};

const PreviewModal = ({ template, onClose }: { template: Template; onClose: () => void }) => {
  const renderPreview = () => {
    switch (template.id) {
      case '1': return <PersonalTrainerPreview />;
      case '2': return <NutritionistPreview />;
      case '3': return <MedicalPreview />;
      case '4': return <DentistPreview />;
      case '5': return <LawyerPreview />;
      case '6': return <PsychologistPreview />;
      default: return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
          <img 
            src={template.image} 
            alt={template.title} 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="p-12 space-y-8">
            <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-3/4" />
            <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-1/2" />
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-video bg-zinc-50 dark:bg-zinc-800 rounded-xl" />
              <div className="aspect-video bg-zinc-50 dark:bg-zinc-800 rounded-xl" />
              <div className="aspect-video bg-zinc-50 dark:bg-zinc-800 rounded-xl" />
            </div>
            <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-full" />
            <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-5/6" />
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-zinc-900/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-zinc-900 w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl transition-colors duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Image Preview Area */}
        <div className="md:w-2/3 bg-zinc-100 dark:bg-zinc-950 overflow-y-auto custom-scrollbar transition-colors duration-300">
          <div className="p-4 md:p-8">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
              {/* Browser-like header */}
              <div className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 flex items-center gap-2 transition-colors duration-300">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md py-1 px-3 text-[10px] text-zinc-400 dark:text-zinc-500 truncate transition-colors duration-300">
                  https://preview.personalizacaoweb.com/{template.title.toLowerCase().replace(' ', '-')}
                </div>
              </div>
              
              {/* Content Switching */}
              {renderPreview()}
            </div>
          </div>
        </div>

        {/* Info Area */}
        <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
                {template.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{template.niche}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <X className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </button>
            </div>
            
            <h2 className="text-3xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">{template.title}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed transition-colors duration-300">
              {template.description}
            </p>

            <div className="space-y-4 mb-12">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Recursos Inclusos</h4>
              <ul className="space-y-3">
                {template.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => {
                onClose();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              Solicitar este Modelo <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest">
              Entrega em até 7 dias úteis
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ModelsSection = ({ onPreview }: { onPreview: (t: Template) => void }) => {
  return (
    <section id="modelos" className="section-padding bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-4">Pontos de Partida</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Estes modelos são a nossa base. Cada elemento pode ser adaptado para refletir sua identidade e atender às demandas exclusivas do seu negócio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map(template => (
            <TemplateCard key={template.id} template={template} onPreview={onPreview} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-4">O Caminho para o Sucesso</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Um processo refinado para entregar excelência em tempo recorde.</p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform",
                  step.color
                )}>
                  {step.icon}
                </div>
                <div className="text-4xl font-serif text-zinc-100 dark:text-zinc-800 mb-4 group-hover:text-zinc-200 dark:group-hover:text-zinc-700 transition-colors">0{index + 1}</div>
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  return (
    <section id="vantagens" className="section-padding bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-4">Diferenciais Personalização Web</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Não entregamos apenas código. Entregamos uma ferramenta estratégica de posicionamento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bento Grid Layout */}
          <div className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] p-12 text-zinc-900 dark:text-white relative overflow-hidden group border border-zinc-100 dark:border-zinc-800">
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-8" />
              <h3 className="text-3xl font-serif mb-4">Performance Extrema</h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                Utilizamos as tecnologias mais modernas do mercado para garantir que seu site carregue instantaneamente, reduzindo a taxa de rejeição e melhorando o SEO.
              </p>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
          </div>
          
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
            <Smartphone className="w-10 h-10 text-zinc-900 dark:text-zinc-100" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Mobile First</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Design pensado primeiro para a tela que seu cliente mais usa.</p>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] p-12 border border-emerald-100 dark:border-emerald-800/20 relative overflow-hidden group">
            <div className="relative z-10">
              <Layout className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-8" />
              <h3 className="text-3xl font-serif text-zinc-900 dark:text-zinc-100 mb-4">Design Sob Medida</h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                Não ficamos presos a modelos. Adaptamos cada pixel para que seu site seja uma extensão autêntica da sua marca e atenda suas necessidades reais.
              </p>
            </div>
            <div className="absolute right-10 top-10 opacity-10 group-hover:rotate-12 transition-transform">
              <Layout className="w-40 h-40 text-emerald-900 dark:text-emerald-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const niche = formData.get('niche');
    const message = formData.get('message');
    
    const text = `Olá! Gostaria de solicitar uma consultoria.
    
*Nome:* ${name}
*E-mail:* ${email}
*Nicho:* ${niche}
*Mensagem:* ${message}`;

    const whatsappUrl = `https://wa.me/5519998059027?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="section-padding bg-zinc-900 dark:bg-zinc-950 text-white dark:text-zinc-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 leading-tight">
            Vamos elevar seu <br />
            <span className="italic text-zinc-500">legado</span> digital?
          </h2>
          <p className="text-zinc-400 text-xl mb-12 leading-relaxed max-w-md font-light">
            Não somos apenas uma agência. Somos parceiros no seu crescimento. Fale conosco e descubra o potencial da sua marca.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 bg-zinc-800 dark:bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">E-mail</div>
                <div className="text-lg font-medium">contato@personalizacaoweb.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 bg-zinc-800 dark:bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">WhatsApp</div>
                <div className="text-lg font-medium">+55 (19) 99805-9027</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white dark:bg-zinc-900 rounded-[3rem] p-10 md:p-14 text-zinc-900 dark:text-zinc-100 shadow-2xl transition-colors duration-300"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 ml-1">Nome Completo</label>
                      <input required name="name" type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-900 transition-all" placeholder="Como podemos te chamar?" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 ml-1">E-mail Profissional</label>
                      <input required name="email" type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-900 transition-all" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 ml-1">Seu Nicho de Atuação</label>
                    <select name="niche" className="w-full bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-900 transition-all appearance-none cursor-pointer">
                      <option>Personal Trainer</option>
                      <option>Nutricionista</option>
                      <option>Médico / Dentista</option>
                      <option>Advogado</option>
                      <option>Outro Profissional</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 ml-1">Mensagem</label>
                    <textarea required name="message" rows={4} className="w-full bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-900 transition-all resize-none" placeholder="Conte-nos um pouco sobre seus objetivos..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-5 rounded-2xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                    Enviar Solicitação <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500 rounded-[3rem] p-14 text-black h-full flex flex-col items-center justify-center text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-black text-emerald-500 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-emerald-900 font-medium leading-relaxed max-w-xs">
                  Obrigado pelo contato. Nossa equipe analisará seu perfil e entrará em contato em breve.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Voltar ao formulário
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded flex items-center justify-center">
            <span className="text-white dark:text-zinc-900 font-bold text-xs">P</span>
          </div>
          <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Personalização<span className="font-light text-zinc-500">Web</span></span>
        </div>
        <div className="flex gap-8 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Termos</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Cookies</a>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Personalização Web. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5519998059027" 
      target="_blank" 
      className="fixed bottom-8 right-8 z-[90] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-emerald-400 transition-all group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Especialista
      </span>
    </a>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Quanto tempo leva para o site ficar pronto?", a: "Nossa entrega padrão é de 7 a 10 dias úteis após o envio de todo o conteúdo necessário." },
    { q: "Eu mesmo posso alterar os textos e fotos depois?", a: "Sim! Entregamos o site com um painel administrativo intuitivo para que você tenha total autonomia." },
    { q: "O site já vem com domínio e hospedagem?", a: "Nós auxiliamos na contratação, mas os custos de domínio e hospedagem são de responsabilidade do cliente (aprox. R$ 40/mês)." },
    { q: "O site funciona bem no celular?", a: "Com certeza. Todos os nossos projetos são 'Mobile First', garantindo uma experiência impecável em smartphones." },
  ];

  return (
    <section id="faq" className="section-padding bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-4">Dúvidas Frequentes</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Tudo o que você precisa saber antes de começarmos.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <span className="font-bold text-zinc-900 dark:text-zinc-100">{faq.q}</span>
                <ChevronRight className={cn("w-5 h-5 transition-transform text-zinc-400", openIndex === i && "rotate-90")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-zinc-900 dark:selection:bg-zinc-100 selection:text-white dark:selection:text-zinc-900">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <ModelsSection onPreview={setSelectedTemplate} />
        <HowItWorks />
        <Advantages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />

      <AnimatePresence>
        {selectedTemplate && (
          <PreviewModal 
            template={selectedTemplate} 
            onClose={() => setSelectedTemplate(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
