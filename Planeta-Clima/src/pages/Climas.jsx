import { useNavigate } from 'react-router';

const DADOS_CLIMA = [
  { valor: '3.500–4.500 mm', label: 'Chuva anual média' },
  { valor: '28°C', label: 'Temperatura máxima verão' },
  { valor: '18°C', label: 'Temperatura mínima inverno' },
  { valor: '85%', label: 'Umidade relativa média' },
];

const ESTACOES = [
  {
    nome: 'Verão',
    meses: 'Dezembro – Março',
    cor: '#e67e22',
    desc: 'A estação mais quente e chuvosa. As temperaturas chegam a 30°C e as chuvas são intensas e frequentes, especialmente à tarde. O período concentra a maioria dos eventos extremos de enchentes e deslizamentos.',
    destaques: ['Chuvas acima de 400 mm/mês', 'Ressacas mais intensas', 'Alto risco de deslizamentos'],
  },
  {
    nome: 'Outono',
    meses: 'Abril – Junho',
    cor: '#d97706',
    desc: 'Transição gradual para temperaturas mais amenas. As chuvas diminuem, mas ainda ocorrem frentes frias vindas do sul trazendo precipitações moderadas e ventos fortes na orla.',
    destaques: ['Frentes frias frequentes', 'Mar mais agitado', 'Visibilidade reduzida'],
  },
  {
    nome: 'Inverno',
    meses: 'Julho – Setembro',
    cor: '#0891b2',
    desc: 'A estação mais seca e fria, com temperaturas podendo cair abaixo de 18°C nas madrugadas. Apesar de menor volume de chuva, as frentes frias do Atlântico Sul trazem ventos intensos e ressacas expressivas.',
    destaques: ['Menor volume de chuva', 'Ventos sul intensos', 'Ressacas na orla'],
  },
  {
    nome: 'Primavera',
    meses: 'Outubro – Novembro',
    cor: '#16a34a',
    desc: 'Retorno progressivo do calor e das chuvas. A umidade sobe rapidamente e os eventos de chuva intensa começam a se repetir, sinalizando o início de uma nova temporada crítica para o litoral.',
    destaques: ['Umidade crescente', 'Retorno de temporais', 'Preparação para o verão'],
  },
];

const FENOMENOS = [
  {
    titulo: 'Efeito Orográfico',
    cor: '#1677E8',
    img: 'https://images.unsplash.com/photo-1660081732292-e5a3f0e7aa88?w=600&h=380&fit=crop&auto=format',
    alt: 'Serra do Mar com nuvens e neblina',
    desc: 'A Serra do Mar atua como barreira natural. Os ventos úmidos do oceano sobem as encostas, esfriando e precipitando chuvas intensas — o principal mecanismo por trás da alta pluviosidade de Caraguatatuba.',
  },
  {
    titulo: 'Frentes Frias Atlânticas',
    cor: '#0891b2',
    img: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=380&fit=crop&auto=format',
    alt: 'Mar agitado com ondas grandes',
    desc: 'Sistemas frontais vindos do sul do continente trazem ventos intensos, ondas de até 4 metros e ressacas repentinas. Podem ocorrer em qualquer época do ano, mas são mais frequentes no inverno.',
  },
  {
    titulo: 'ZCAS — Zona de Convergência',
    cor: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?w=600&h=380&fit=crop&auto=format',
    alt: 'Raio durante tempestade noturna',
    desc: 'A Zona de Convergência do Atlântico Sul (ZCAS) é responsável por episódios prolongados de chuva intensa durante o verão, podendo acumular 200 mm em 24 horas — um dos maiores riscos climáticos da região.',
  },
];

export default function Climas() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f0f6ff' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '340px', height: 'clamp(300px, 44vh, 500px)' }}>
        <img
          src="https://images.unsplash.com/photo-1695453463057-aa5d48d9e3d4?w=1400&h=600&fit=crop&auto=format"
          alt="Litoral de Caraguatatuba com Serra do Mar ao fundo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(140deg, rgba(6,43,85,0.93) 0%, rgba(6,43,85,0.55) 60%, rgba(6,43,85,0.82) 100%)' }} />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <span>›</span>
            <span className="text-white font-medium">Climas</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase w-fit"
            style={{ backgroundColor: 'rgba(22,119,232,0.3)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.35)' }}>
            Clima Litorâneo
          </div>
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            O Clima de <span style={{ color: '#25A9F5' }}>Caraguatatuba</span>
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7 }}>
            Entre a Serra do Mar e o Atlântico, um dos climas mais úmidos e dinâmicos do Brasil.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
            <path d="M0,40 C360,0 1080,70 1440,20 L1440,56 L0,56 Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      {/* Dados gerais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DADOS_CLIMA.map((d) => (
            <div key={d.label} className="rounded-2xl p-5 text-center"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 14px rgba(6,43,85,0.07)' }}>
              <div className="font-bold text-xl mb-1" style={{ color: '#1677E8', fontFamily: "'Poppins', sans-serif" }}>{d.valor}</div>
              <div className="text-xs leading-snug" style={{ color: '#6b7280' }}>{d.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 30px rgba(6,43,85,0.1)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative" style={{ minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1660081732292-e5a3f0e7aa88?w=800&h=500&fit=crop&auto=format"
                alt="Serra do Mar com nuvens"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-7 sm:p-10" style={{ backgroundColor: '#062B55' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
                style={{ backgroundColor: 'rgba(37,169,245,0.2)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.3)' }}>
                Tropical Úmido Litorâneo
              </div>
              <h2 className="font-bold mb-4 text-white"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                Um dos mais úmidos do Brasil
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <p>O clima de Caraguatatuba é classificado como <strong className="text-white">tropical úmido litorâneo</strong>, sem estação seca definida. A Serra do Mar atua como barreira orográfica: os ventos úmidos do oceano sobem as encostas, esfriando e precipitando chuvas intensas ao longo do ano.</p>
                <p>A pluviosidade média anual varia entre <strong className="text-white">3.500 e 4.500 mm</strong> — comparado aos cerca de 1.400 mm da cidade de São Paulo. Em eventos extremos, já foram registrados mais de 200 mm em 24 horas.</p>
                <p>As temperaturas são amenas, entre <strong className="text-white">18°C no inverno</strong> e <strong className="text-white">30°C no verão</strong>, com alta umidade relativa do ar ao longo de todo o ano.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estações */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase"
            style={{ backgroundColor: '#dbeafe', color: '#1677E8' }}>
            Sazonalidade
          </div>
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
            As 4 Estações no Litoral Norte
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ESTACOES.map((e) => (
            <div key={e.nome} className="rounded-2xl p-6"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)', borderLeft: `4px solid ${e.cor}` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-bold text-lg" style={{ color: e.cor, fontFamily: "'Poppins', sans-serif" }}>{e.nome}</span>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: `${e.cor}14`, color: e.cor }}>{e.meses}</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#4b6080' }}>{e.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {e.destaques.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs" style={{ color: '#374151' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: e.cor }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fenômenos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase"
            style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
            Meteorologia
          </div>
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
            Fenômenos que Moldam o Clima
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FENOMENOS.map((f) => (
            <div key={f.titulo} className="rounded-2xl overflow-hidden group"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)' }}
              onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = `0 10px 40px ${f.cor}28`)}
              onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 18px rgba(6,43,85,0.07)')}>
              <div className="relative h-44 overflow-hidden">
                <img src={f.img} alt={f.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,43,85,0.5) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: f.cor }}>
                    {f.titulo}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl p-8 sm:p-12"
            style={{ background: 'linear-gradient(135deg, #062B55 0%, #1677E8 100%)', boxShadow: '0 8px 40px rgba(22,119,232,0.3)' }}>
            <h2 className="font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Como o clima gera problemas reais?
            </h2>
            <p className="text-white/75 mb-6 text-sm sm:text-base leading-relaxed">
              Entenda os impactos diretos das chuvas, ressacas e deslizamentos no cotidiano de Caraguatatuba.
            </p>
            <button onClick={() => navigate('/problemas')}
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
