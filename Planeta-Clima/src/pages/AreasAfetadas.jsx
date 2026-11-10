import { useNavigate } from 'react-router';

const MUNICIPALITIES = [
  {
    name: 'Ubatuba',
    direction: 'Norte',
    distance: 'cerca de 55 km',
    level: 'Atenção alta',
    color: '#dc2626',
    image: 'https://images.unsplash.com/photo-1650622341741-493753c270de?auto=format&fit=crop&w=900&q=80',
    alt: 'Vista do litoral recortado e das ilhas de Ubatuba',
    risks: ['Chuvas intensas', 'Deslizamentos', 'Alagamentos'],
    description: 'A combinação entre encostas íngremes, Mata Atlântica e alta pluviosidade deixa bairros costeiros e acessos rodoviários expostos durante períodos de chuva prolongada.',
    problem: 'deslizamentos',
  },
  {
    name: 'São Sebastião',
    direction: 'Sul',
    distance: 'cerca de 27 km',
    level: 'Atenção alta',
    color: '#dc2626',
    image: 'https://images.unsplash.com/photo-1651597965858-045e6ca2d5d1?auto=format&fit=crop&w=900&q=80',
    alt: 'Praia e litoral urbano de São Sebastião',
    risks: ['Deslizamentos', 'Enchentes', 'Erosão costeira'],
    description: 'Ocupações próximas às encostas da Serra do Mar e planícies costeiras estreitas aumentam a exposição a movimentos de massa, enxurradas e avanço do mar.',
    problem: 'chuvas-enchentes',
  },
  {
    name: 'Ilhabela',
    direction: 'Sudeste',
    distance: 'acesso por balsa',
    level: 'Atenção moderada',
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1598122401685-728b1ab601e2?auto=format&fit=crop&w=900&q=80',
    alt: 'Costa arborizada e mar de Ilhabela',
    risks: ['Ressacas', 'Deslizamentos', 'Poluição marinha'],
    description: 'A geografia insular concentra áreas urbanas entre o mar e as encostas. Ressacas afetam a orla, enquanto chuvas fortes podem comprometer vias e moradias.',
    problem: 'ressacas-mar',
  },
  {
    name: 'Paraibuna',
    direction: 'Interior',
    distance: 'cerca de 70 km',
    level: 'Atenção moderada',
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1559562591-6de6f7187f56?auto=format&fit=crop&w=900&q=80',
    alt: 'Montanhas verdes na região de Paraibuna',
    risks: ['Chuvas fortes', 'Erosão do solo', 'Cheias de rios'],
    description: 'Localizado no planalto, o município integra bacias hidrográficas conectadas à Serra do Mar. Chuvas persistentes podem afetar estradas rurais, rios e reservatórios.',
    problem: 'chuvas-enchentes',
  },
];

const LOCAL_AREAS = [
  {
    name: 'Massaguaçu e Cocanha',
    zone: 'Região norte',
    risks: 'Alagamentos, erosão costeira e ressacas',
    reason: 'Planície costeira próxima a cursos d’água e trechos de orla expostos à energia das ondas.',
  },
  {
    name: 'Tabatinga e Mococa',
    zone: 'Extremo norte',
    risks: 'Ressacas, erosão e isolamento viário',
    reason: 'Faixa urbana estreita entre o oceano, morros e a Rodovia Rio–Santos.',
  },
  {
    name: 'Martim de Sá e Prainha',
    zone: 'Centro-norte',
    risks: 'Erosão costeira, ressacas e drenagem urbana',
    reason: 'Alta ocupação junto à orla e pressão sobre a faixa de areia durante marés elevadas.',
  },
  {
    name: 'Centro e Indaiá',
    zone: 'Região central',
    risks: 'Alagamentos e transbordamento de canais',
    reason: 'Impermeabilização do solo, baixa altitude e concentração de infraestrutura urbana.',
  },
  {
    name: 'Porto Novo e Juqueriquerê',
    zone: 'Região sul',
    risks: 'Enchentes, cheias do rio e erosão de margens',
    reason: 'Proximidade com a foz do Rio Juqueriquerê e áreas baixas sujeitas a drenagem lenta.',
  },
];

export default function AreasAfetadas() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f0f6ff]">
      <section className="relative min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1783364340363-9e1b01f0bf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Vista aérea de montanhas cobertas por vegetação junto ao oceano"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,43,85,0.96)_0%,rgba(6,43,85,0.78)_52%,rgba(6,43,85,0.42)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/60">
            <button type="button" onClick={() => navigate('/')} className="transition hover:text-white">
              Início
            </button>
            <span aria-hidden="true">›</span>
            <span className="font-medium text-white">Áreas afetadas</span>
          </div>
          <span className="w-fit rounded-full border border-[#25A9F5]/35 bg-[#1677E8]/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
            Panorama regional
          </span>
          <h1 className="mt-5 max-w-2xl font-['Poppins'] text-3xl font-bold leading-tight text-white sm:text-5xl">
            Áreas afetadas no entorno de <span className="text-[#25A9F5]">Caraguatatuba</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Entenda como chuvas extremas, movimentos de encosta, ressacas e enchentes também atingem municípios vizinhos e diferentes regiões da cidade.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="h-8 w-full sm:h-12" aria-hidden="true">
            <path d="M0 40C360 0 1080 70 1440 20v36H0V40Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ['4', 'municípios próximos'],
            ['5', 'regiões locais destacadas'],
            ['4', 'grupos de risco climático'],
            ['199', 'Defesa Civil'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-white p-5 text-center shadow-[0_2px_16px_rgba(6,43,85,0.07)]">
              <strong className="block font-['Poppins'] text-2xl text-[#1677E8]">{value}</strong>
              <span className="mt-1 block text-xs leading-snug text-[#60738c]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1677E8]">Visão territorial</span>
          <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-[#062B55] sm:text-3xl">Conexões de risco no Litoral Norte</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60738c]">
            Os eventos climáticos não respeitam limites municipais. Rodovias, bacias hidrográficas, encostas e o oceano conectam toda a região.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_8px_36px_rgba(6,43,85,0.09)] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[430px] overflow-hidden bg-[#e7f3fb] p-5 sm:p-8">
            <svg viewBox="0 0 680 440" className="h-full w-full" role="img" aria-label="Diagrama regional de Caraguatatuba e municípios próximos">
              <path d="M40 25h450c-44 53-24 91-81 129-36 25-16 69-69 98-56 31-34 93-116 121-54 18-77 28-111 42H40V25Z" fill="#d7eadc" />
              <path d="M490 25c-44 53-24 91-81 129-36 25-16 69-69 98-56 31-34 93-116 121-54 18-77 28-111 42h527V25H490Z" fill="#bce8fa" />
              <path d="M489 25c-44 53-24 91-81 129-36 25-16 69-69 98-56 31-34 93-116 121-54 18-77 28-111 42" fill="none" stroke="#25A9F5" strokeWidth="6" />
              <path d="M145 30c58 69 79 128 114 192 29 52 31 115 65 184" fill="none" stroke="#94a3b8" strokeDasharray="7 8" strokeWidth="3" />
              <path d="M434 259c68 8 116 39 155 89" fill="none" stroke="#94a3b8" strokeDasharray="7 8" strokeWidth="3" />

              {[
                { x: 255, y: 80, label: 'Ubatuba', color: '#dc2626' },
                { x: 330, y: 220, label: 'Caraguatatuba', color: '#1677E8' },
                { x: 310, y: 350, label: 'São Sebastião', color: '#dc2626' },
                { x: 520, y: 340, label: 'Ilhabela', color: '#d97706' },
                { x: 110, y: 155, label: 'Paraibuna', color: '#d97706' },
              ].map((point) => (
                <g key={point.label}>
                  <circle cx={point.x} cy={point.y} r="17" fill="white" opacity=".9" />
                  <circle cx={point.x} cy={point.y} r="10" fill={point.color} />
                  <circle cx={point.x} cy={point.y} r="4" fill="white" />
                  <text x={point.x + 20} y={point.y + 5} fill="#062B55" fontSize="14" fontWeight="700">{point.label}</text>
                </g>
              ))}

              <text x="535" y="80" fill="#1677E8" fontSize="14" fontWeight="700" opacity=".7">Oceano Atlântico</text>
              <path d="M570 97c18-7 30 8 48 1" fill="none" stroke="#1677E8" strokeWidth="2" opacity=".5" />
              <path d="M550 111c18-7 30 8 48 1" fill="none" stroke="#1677E8" strokeWidth="2" opacity=".35" />
            </svg>
            <p className="absolute bottom-4 left-5 right-5 text-center text-[11px] leading-4 text-[#60738c]">
              Representação esquemática para fins educativos, sem escala cartográfica.
            </p>
          </div>

          <div className="flex flex-col justify-center bg-[#062B55] p-7 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#25A9F5]">Como interpretar</span>
            <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-white">Uma região, riscos conectados</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">
              A Serra do Mar direciona a chuva e limita a ocupação urbana. Já o oceano influencia ressacas, erosão e o escoamento dos rios.
            </p>
            <div className="mt-7 space-y-4">
              {[
                ['#dc2626', 'Atenção alta', 'Maior combinação de exposição e recorrência histórica.'],
                ['#d97706', 'Atenção moderada', 'Riscos importantes que variam conforme o evento.'],
                ['#1677E8', 'Caraguatatuba', 'Ponto central deste panorama educativo.'],
              ].map(([color, title, text]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full" style={{ backgroundColor: color }} />
                  <div>
                    <strong className="block text-sm text-white">{title}</strong>
                    <span className="mt-0.5 block text-xs leading-5 text-white/55">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1677E8]">Municípios vizinhos</span>
          <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-[#062B55] sm:text-3xl">Áreas próximas sob atenção</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {MUNICIPALITIES.map((area) => (
            <article key={area.name} className="overflow-hidden rounded-2xl border border-[#dce7f1] bg-white shadow-[0_2px_16px_rgba(6,43,85,0.06)]">
              <div className="relative h-48 overflow-hidden bg-[#dbeafe] sm:h-52">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,43,85,0.72)_0%,transparent_60%)]" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">{area.direction} · {area.distance}</span>
                  <h3 className="mt-1 font-['Poppins'] text-2xl font-bold text-white">{area.name}</h3>
                </div>
                <span className="absolute right-4 top-4 flex-shrink-0 rounded-full border border-white/35 bg-white/90 px-3 py-1.5 text-xs font-bold backdrop-blur-sm" style={{ color: area.color }}>
                  {area.level}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-[#60738c]">{area.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.risks.map((risk) => (
                    <span key={risk} className="rounded-full bg-[#eef6ff] px-3 py-1.5 text-xs font-semibold text-[#1677E8]">{risk}</span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/problema/${area.problem}`)}
                  className="mt-5 flex items-center gap-2 text-sm font-bold text-[#1677E8] transition hover:gap-3"
                >
                  Entender o risco principal
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1677E8]">Dentro do município</span>
          <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-[#062B55] sm:text-3xl">Regiões de Caraguatatuba</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60738c]">
            Diferentes trechos da cidade apresentam vulnerabilidades específicas conforme relevo, drenagem, ocupação e proximidade do mar.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#dce7f1] bg-white shadow-[0_4px_24px_rgba(6,43,85,0.06)]">
          <div className="hidden grid-cols-[1fr_0.7fr_1.2fr_1.5fr] gap-4 bg-[#062B55] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/75 md:grid">
            <span>Área</span>
            <span>Localização</span>
            <span>Principais riscos</span>
            <span>Por que exige atenção</span>
          </div>
          <div className="divide-y divide-[#e8eff6]">
            {LOCAL_AREAS.map((area) => (
              <div key={area.name} className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_0.7fr_1.2fr_1.5fr] md:px-6">
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase text-[#7890aa] md:hidden">Área</span>
                  <strong className="text-sm text-[#062B55]">{area.name}</strong>
                </div>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase text-[#7890aa] md:hidden">Localização</span>
                  <span className="text-sm text-[#60738c]">{area.zone}</span>
                </div>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase text-[#7890aa] md:hidden">Principais riscos</span>
                  <span className="text-sm font-medium text-[#1677E8]">{area.risks}</span>
                </div>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase text-[#7890aa] md:hidden">Por que exige atenção</span>
                  <span className="text-sm leading-6 text-[#60738c]">{area.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,#062B55_0%,#1677E8_100%)] p-7 shadow-[0_10px_40px_rgba(22,119,232,0.22)] sm:p-10 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7dd3fc]">Informação de segurança</span>
            <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-white">Em uma emergência, não espere</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Siga os alertas oficiais, afaste-se de encostas, rios e áreas alagadas e ligue para a Defesa Civil pelo número 199.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/solucoes')}
            className="flex-shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1677E8] shadow-lg transition hover:bg-[#eef6ff]"
          >
            Ver ações preventivas
          </button>
        </div>
        <p className="mt-4 text-center text-xs leading-5 text-[#7890aa]">
          Este conteúdo é educativo e não substitui mapas oficiais de risco, alertas da Defesa Civil ou orientações das autoridades locais.
        </p>
      </section>
    </main>
  );
}
