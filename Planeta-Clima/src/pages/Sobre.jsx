import { useNavigate } from 'react-router';

const DADOS = [
  { valor: '114 mil', label: 'Habitantes (2024)' },
  { valor: '484 km²', label: 'Área territorial' },
  { valor: '60 km', label: 'Extensão de litoral' },
  { valor: '1857', label: 'Ano de fundação' },
];

const PRAIAS = [
  { nome: 'Praia do Martim de Sá', desc: 'A mais selvagem e preservada, encrustada entre costões rochosos e Mata Atlântica densa. Acesso limitado garante águas cristalinas.' },
  { nome: 'Praia de Indaiá', desc: 'Extensa faixa de areia fina, ideal para caminhadas. Um dos pontos mais afetados pela erosão costeira, exigindo atenção especial.' },
  { nome: 'Praia do Massaguaçu', desc: 'A mais longa do município — quase 7 km de extensão. Popular entre veranistas, com intensa ocupação urbana na orla.' },
  { nome: 'Praia da Tabatinga', desc: 'Pequena enseada de águas calmas cercada por morros cobertos de mata. Um dos cartões-postais do litoral norte paulista.' },
  { nome: 'Praia da Mococa', desc: 'Encravada no extremo norte do município, na divisa com Ubatuba. Preservação quase integral, acessível só por trilha.' },
  { nome: 'Praia do Centro', desc: 'A praia urbana da cidade, próxima ao comércio e ao trapiche. Ponto de embarque para pescadores artesanais da comunidade caiçara.' },
];

const LINHA_DO_TEMPO = [
  { ano: '1530', evento: 'Chegada dos primeiros colonizadores portugueses ao litoral norte paulista, encontrando povos indígenas Tupinambá.' },
  { ano: '1670', evento: 'Fundação do primeiro núcleo de colonização na região, baseado na pesca e no cultivo de mandioca.' },
  { ano: '1857', evento: 'Elevação à categoria de município, consolidando Caraguatatuba como polo do litoral norte de São Paulo.' },
  { ano: '1967', evento: 'Megadeslizamento devastador: chuvas torrenciais derrubam a Serra do Mar sobre a cidade, matando mais de 400 pessoas.' },
  { ano: '1980', evento: 'Início do turismo em massa; boom imobiliário na orla transforma a paisagem e pressiona a Mata Atlântica.' },
  { ano: '2010', evento: 'Descoberta do pré-sal na Bacia de Santos impulsiona o setor de petróleo e gás na região, atraindo novos moradores.' },
  { ano: '2024', evento: 'Caraguatatuba integra o Plano Estadual de Adaptação às Mudanças Climáticas do litoral paulista.' },
];

const ECOSSISTEMAS = [
  {
    titulo: 'Mata Atlântica',
    cor: '#16a34a',
    desc: 'Um dos biomas mais ameaçados do planeta, a Mata Atlântica cobre as encostas da Serra do Mar que circundam a cidade. Abriga mais de 850 espécies de aves e centenas de espécies endêmicas. O Parque Estadual da Serra do Mar protege legalmente grande parte desse remanescente.',
  },
  {
    titulo: 'Restinga e Manguezal',
    cor: '#0891b2',
    desc: 'As restingas — vegetação adaptada ao solo arenoso da orla — e os manguezais dos estuários dos rios Juqueriquerê e Santo Antônio são ecossistemas cruciais para a reprodução de peixes e caranguejos, e para a proteção natural da costa contra a erosão.',
  },
  {
    titulo: 'Fundo Marinho',
    cor: '#1677E8',
    desc: 'As águas do Canal de São Sebastião, entre Caraguatatuba e Ilhabela, abrigam recifes rochosos com rica fauna marinha: manta-raia, tartarugas, golfinhos e mais de 300 espécies de peixes. A qualidade dessas águas é diretamente afetada pelo saneamento da cidade.',
  },
];

export default function Sobre() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f0f6ff' }}>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px', height: 'clamp(340px, 48vh, 520px)' }}>
        <img
          src="https://images.unsplash.com/photo-1629228420074-c5a87b09ccb7?w=1400&h=600&fit=crop&auto=format"
          alt="Vista aérea do litoral de Caraguatatuba"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(6,43,85,0.93) 0%, rgba(6,43,85,0.55) 65%, rgba(6,43,85,0.75) 100%)' }} />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <span>›</span>
            <span className="text-white font-medium">Sobre</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase w-fit"
            style={{ backgroundColor: 'rgba(22,119,232,0.3)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.35)' }}>
            Litoral Norte de São Paulo
          </div>
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Sobre <span style={{ color: '#25A9F5' }}>Caraguatatuba</span>
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7 }}>
            Uma cidade entre a serra e o mar, de cultura caiçara rica, natureza exuberante e desafios climáticos únicos no Brasil.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
            <path d="M0,40 C360,0 1080,70 1440,20 L1440,56 L0,56 Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      {/* DADOS GERAIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DADOS.map((d, i) => (
            <div key={d.label} className="rounded-2xl p-5 text-center"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 14px rgba(6,43,85,0.07)' }}>
              <div className="font-bold text-xl mb-1" style={{ color: '#1677E8', fontFamily: "'Poppins', sans-serif" }}>{d.valor}</div>
              <div className="text-xs leading-snug" style={{ color: '#6b7280' }}>{d.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
              style={{ backgroundColor: '#dbeafe', color: '#1677E8' }}>
              A cidade
            </div>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
              Entre a Serra e o Atlântico
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: '#4b6080' }}>
              <p>
                Caraguatatuba é o maior município do Litoral Norte de São Paulo, ocupando uma posição geográfica singular: ao norte e a oeste, as escarpas da <strong style={{ color: '#062B55' }}>Serra do Mar</strong> formam uma barreira montanhosa coberta de Mata Atlântica; ao sul e a leste, as águas quentes do <strong style={{ color: '#062B55' }}>Oceano Atlântico</strong> definem mais de 60 quilômetros de litoral entre praias, costões rochosos, restingas e manguezais.
              </p>
              <p>
                Essa geografia moldou uma cultura caiçara singular — pescadores, artesãos e agricultores que desenvolveram ao longo de séculos um modo de vida em harmonia com os ciclos da natureza. O jogo de malha, a pesca com tarrafa, o conserto de redes e a culinária à base de frutos do mar ainda marcam a identidade da cidade.
              </p>
              <p>
                Nas últimas décadas, o turismo e a indústria do petróleo na <strong style={{ color: '#062B55' }}>Bacia de Santos</strong> transformaram a economia e o perfil populacional da cidade. Com crescimento acelerado e nem sempre planejado, surgem tensões entre desenvolvimento e preservação ambiental — tensões que o clima torna cada vez mais urgentes de resolver.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ height: '380px', boxShadow: '0 8px 40px rgba(6,43,85,0.12)' }}>
            <img
              src="https://images.unsplash.com/photo-1577717178135-85fb2c60fd79?w=800&h=600&fit=crop&auto=format"
              alt="Formações rochosas no litoral de Caraguatatuba"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,43,85,0.5) 0%, transparent 55%)' }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-xs font-medium opacity-80">Litoral Norte de São Paulo · Formações rochosas típicas da costa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 30px rgba(6,43,85,0.1)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative" style={{ minHeight: '320px' }}>
              <img
                src="https://images.unsplash.com/photo-1660081732292-e5a3f0e7aa88?w=800&h=500&fit=crop&auto=format"
                alt="Serra do Mar com nuvens e neblina"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-7 sm:p-10" style={{ backgroundColor: '#062B55' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
                style={{ backgroundColor: 'rgba(37,169,245,0.2)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.3)' }}>
                O Clima
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
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[['3.500–4.500 mm', 'Chuva anual'], ['18–30°C', 'Temperatura'], ['85%', 'Umidade média']].map(([v, l]) => (
                  <div key={l} className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="font-bold text-sm mb-0.5" style={{ color: '#25A9F5', fontFamily: "'Poppins', sans-serif" }}>{v}</div>
                    <div className="text-xs opacity-60 text-white">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase"
            style={{ backgroundColor: '#d1fae5', color: '#16a34a' }}>
            Biodiversidade
          </div>
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
            Ecossistemas do Litoral Norte
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ECOSSISTEMAS.map((e, i) => (
            <div key={e.titulo} className="rounded-2xl p-6"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)', borderTop: `4px solid ${e.cor}` }}>
              <h3 className="font-bold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55', fontSize: '1rem' }}>{e.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRAIAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase"
            style={{ backgroundColor: '#dbeafe', color: '#1677E8' }}>
            Praias
          </div>
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
            Principais Praias
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#4b6080' }}>60 km de litoral com personalidade em cada trecho</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRAIAS.map((p, i) => (
            <div key={p.nome}
              className="rounded-2xl p-5 flex gap-4 items-start transition-all duration-200"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 14px rgba(6,43,85,0.07)' }}
              onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 6px 28px rgba(22,119,232,0.14)')}
              onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 14px rgba(6,43,85,0.07)')}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-0.5"
                style={{ backgroundColor: '#1677E8' }}>
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55' }}>{p.nome}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase"
            style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
            História
          </div>
          <h2 className="font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#062B55' }}>
            Linha do Tempo
          </h2>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#dbeafe' }} />
          <div className="flex flex-col gap-6">
            {LINHA_DO_TEMPO.map((item, i) => (
              <div key={item.ano} className="flex gap-5 items-start relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 z-10"
                  style={{ backgroundColor: i === 3 ? '#dc2626' : '#1677E8', fontFamily: "'Poppins', sans-serif", fontSize: '10px' }}>
                  {item.ano}
                </div>
                <div className="flex-1 rounded-2xl p-4 mt-1"
                  style={{ backgroundColor: i === 3 ? '#fef2f2' : '#fff', boxShadow: '0 2px 12px rgba(6,43,85,0.07)', borderLeft: `3px solid ${i === 3 ? '#dc2626' : '#1677E8'}` }}>
                  <p className="text-sm leading-relaxed" style={{ color: i === 3 ? '#7f1d1d' : '#4b6080' }}>{item.evento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => navigate('/')}
            className="rounded-2xl p-6 text-left flex items-center gap-4 transition-all duration-200 cursor-pointer group"
            style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)' }}
            onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 8px 32px rgba(22,119,232,0.15)')}
            onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 18px rgba(6,43,85,0.07)')}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dbeafe' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1677E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm mb-0.5" style={{ color: '#062B55', fontFamily: "'Poppins', sans-serif" }}>Problemas do Litoral</div>
              <div className="text-xs" style={{ color: '#6b7280' }}>Conheça os desafios climáticos que afetam Caraguatatuba</div>
            </div>
            <span className="ml-auto text-xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: '#1677E8' }}>→</span>
          </button>
          <button onClick={() => navigate('/solucoes')}
            className="rounded-2xl p-6 text-left flex items-center gap-4 transition-all duration-200 cursor-pointer group"
            style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)' }}
            onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 8px 32px rgba(22,119,232,0.15)')}
            onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 18px rgba(6,43,85,0.07)')}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d1fae5' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm mb-0.5" style={{ color: '#062B55', fontFamily: "'Poppins', sans-serif" }}>Soluções</div>
              <div className="text-xs" style={{ color: '#6b7280' }}>Veja as iniciativas para um litoral mais resiliente</div>
            </div>
            <span className="ml-auto text-xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: '#16a34a' }}>→</span>
          </button>
        </div>
      </section>

    </div>
  );
}
