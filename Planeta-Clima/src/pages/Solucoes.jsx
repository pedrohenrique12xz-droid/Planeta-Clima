import { useNavigate } from 'react-router';

export const SOLUCOES = [
  {
    id: 1,
    tag: 'Natureza',
    color: '#16a34a',
    title: 'Reflorestamento da Mata Atlântica',
    desc: 'Restaurar a cobertura vegetal nas encostas da Serra do Mar reduz o risco de deslizamentos, regula o ciclo hídrico e preserva a biodiversidade endêmica da região.',
    img: 'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?w=600&h=380&fit=crop&auto=format',
    alt: 'Pessoa plantando árvore na floresta',
    actions: [
      'Plano de restauração do Parque Estadual da Serra do Mar',
      'Viveiros municipais de mudas nativas',
      'Compensação ambiental em licenças de obra',
    ],
  },
  {
    id: 2,
    tag: 'Orla',
    color: '#0891b2',
    title: 'Proteção Costeira Inteligente',
    desc: 'Recifes artificiais, engordamento de praias e estruturas de dissipação de energia reduzem a erosão costeira sem impactar negativamente o ecossistema marinho.',
    img: 'https://images.unsplash.com/photo-1766483678925-801347eb308a?w=600&h=380&fit=crop&auto=format',
    alt: 'Quebra-mar de pedras com oceano calmo',
    actions: [
      'Programa de monitoramento da linha de costa (USP/IPT)',
      'Recifes artificiais para dissipar energia das ondas',
      'Restrição de uso em faixas de risco definidas',
    ],
  },
  {
    id: 3,
    tag: 'Infraestrutura',
    color: '#1677E8',
    title: 'Drenagem Urbana e Contenção',
    desc: 'Galerias pluviais ampliadas, piscinões de detenção e obras de contenção de encostas são essenciais para reduzir os impactos das enchentes nos bairros mais vulneráveis.',
    img: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a?w=600&h=380&fit=crop&auto=format',
    alt: 'Construção sustentável com vegetação',
    actions: [
      'Ampliação da rede de galerias pluviais no Centro e Massaguaçu',
      'Construção de piscinões de detenção em áreas críticas',
      'Muros de contenção e cortinas atirantadas nas encostas',
    ],
  },
  {
    id: 4,
    tag: 'Energia',
    color: '#d97706',
    title: 'Energia Renovável Litorânea',
    desc: 'A posição privilegiada de Caraguatatuba, com alta incidência solar e ventos constantes do oceano, a torna candidata ideal à geração de energia limpa.',
    img: 'https://images.unsplash.com/photo-1774597997816-3cd4e9b1f013?w=600&h=380&fit=crop&auto=format',
    alt: 'Estação com painéis solares à beira-mar',
    actions: [
      'Incentivo a painéis fotovoltaicos em edificações públicas',
      'Estudo para energia eólica offshore no litoral norte',
      'Tarifas verdes e cooperativas de energia solar',
    ],
  },
  {
    id: 5,
    tag: 'Mar Limpo',
    color: '#059669',
    title: 'Saneamento e Mar Limpo',
    desc: 'Universalizar o tratamento de esgoto e eliminar os pontos de lançamento irregular são medidas fundamentais para recuperar a balneabilidade e a saúde dos ecossistemas marinhos.',
    img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?w=600&h=380&fit=crop&auto=format',
    alt: 'Voluntários recolhendo lixo na praia',
    actions: [
      'Ampliação da cobertura de coleta e tratamento de esgoto (meta: 100% até 2035)',
      'Mutirões mensais de limpeza de praias e rios',
      'Educação ambiental nas escolas municipais',
    ],
  },
  {
    id: 6,
    tag: 'Tecnologia',
    color: '#7c3aed',
    title: 'Alerta Precoce e Planejamento',
    desc: 'Sistemas de monitoramento em tempo real de chuvas, rios e encostas permitem emitir alertas antes de desastres, salvando vidas e reduzindo prejuízos materiais.',
    img: 'https://images.unsplash.com/photo-1616680214084-22670de1bc82?w=600&h=380&fit=crop&auto=format',
    alt: 'Equipe de voluntários ambientais organizados',
    actions: [
      'Expansão da rede de pluviômetros e sensores de encosta',
      'App de alerta da Defesa Civil integrado ao celular',
      'Revisão do Plano Diretor com mapeamento de zonas de risco',
    ],
  },
];

const STATS = [
  { value: '12', label: 'Ações prioritárias mapeadas' },
  { value: '2035', label: 'Meta de saneamento universal' },
  { value: '3', label: 'Universidades parceiras em pesquisa' },
  { value: '100%', label: 'Potencial de energia solar na região' },
];

export default function Solucoes() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f0f6ff' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '340px', height: 'clamp(300px, 42vh, 480px)' }}>
        <img
          src="https://images.unsplash.com/photo-1695453463057-aa5d48d9e3d4?w=1400&h=600&fit=crop&auto=format"
          alt="Litoral de Caraguatatuba"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(140deg, rgba(6,43,85,0.92) 0%, rgba(6,43,85,0.6) 60%, rgba(6,43,85,0.8) 100%)' }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <span>›</span>
            <span className="text-white font-medium">Soluções</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase w-fit"
            style={{ backgroundColor: 'rgba(22,119,232,0.3)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.35)' }}>
            Caminhos para o futuro
          </div>
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Soluções para o <span style={{ color: '#25A9F5' }}>Litoral</span>
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7 }}>
            Iniciativas concretas para proteger Caraguatatuba dos desafios climáticos e construir um litoral mais resiliente para as próximas gerações.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
            <path d="M0,40 C360,0 1080,70 1440,20 L1440,56 L0,56 Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      {/* Stats strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="rounded-2xl p-5 text-center"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 14px rgba(6,43,85,0.07)' }}>
              <div className="font-bold text-2xl mb-1" style={{ color: '#1677E8', fontFamily: "'Poppins', sans-serif" }}>{s.value}</div>
              <div className="text-xs leading-snug" style={{ color: '#6b7280' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5"
          style={{ backgroundColor: '#fff', boxShadow: '0 2px 20px rgba(6,43,85,0.07)', borderLeft: '4px solid #25A9F5' }}>
          <div className="flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" fill="#dbeafe" />
              <path d="M10 16 C10 12, 13 10, 16 10 C19 10, 22 12, 22 16 C22 20, 19 22, 16 22 C13 22, 10 20, 10 16Z" stroke="#1677E8" strokeWidth="1.8" fill="none" />
              <path d="M13 16 L15 18 L19 14" stroke="#1677E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-base mb-1" style={{ color: '#062B55', fontFamily: "'Poppins', sans-serif" }}>
              Solucionar é um esforço coletivo
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>
              Cada solução abaixo combina <strong>ação do poder público</strong>, <strong>pesquisa científica</strong> e <strong>participação da comunidade</strong>. Nenhuma delas funciona isolada — a resiliência climática de Caraguatatuba depende de todas sendo implementadas em conjunto, com prioridade para as populações mais vulneráveis.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#062B55' }}>
            6 Frentes de <span style={{ color: '#1677E8' }}>Ação</span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#4b6080' }}>
            Iniciativas prioritárias para Caraguatatuba e o litoral norte paulista
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUCOES.map((s) => (
            <div key={s.id} id={`solucao-${s.id}`}
              className="rounded-2xl overflow-hidden group transition-all duration-300"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)' }}
              onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = `0 10px 40px ${s.color}28`)}
              onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 18px rgba(6,43,85,0.07)')}>
              <div className="relative h-44 overflow-hidden bg-blue-50">
                <img src={s.img} alt={s.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,43,85,0.4) 0%, transparent 55%)' }} />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow"
                  style={{ backgroundColor: s.color }}>
                  {s.id}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: s.color }}>
                  {s.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base leading-tight mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4b6080' }}>
                  {s.desc}
                </p>
                <div className="rounded-xl p-3 flex flex-col gap-2" style={{ backgroundColor: `${s.color}0d` }}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.color }}>
                    Ações concretas
                  </p>
                  {s.actions.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white mt-0.5"
                        style={{ backgroundColor: s.color, fontSize: '9px', fontWeight: 700 }}>
                        {i + 1}
                      </span>
                      <span className="text-xs leading-snug" style={{ color: '#374151' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl p-8 sm:p-12"
            style={{ background: 'linear-gradient(135deg, #062B55 0%, #1677E8 100%)', boxShadow: '0 8px 40px rgba(22,119,232,0.3)' }}>
            <h2 className="font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Conhecimento é o primeiro passo
            </h2>
            <p className="text-white/75 mb-6 text-sm sm:text-base leading-relaxed">
              Entenda os problemas que afetam o litoral de Caraguatatuba e como cada um deles pode ser enfrentado com ação coletiva e política pública.
            </p>
            <button onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ backgroundColor: '#fff', color: '#1677E8' }}>
              Ver os problemas do litoral →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
