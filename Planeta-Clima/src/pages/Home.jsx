import { useNavigate } from 'react-router';
import { PROBLEMS } from '../data/problems';
import { useCardReveal } from '../hooks/useInView';

const HERO_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1695453463057-aa5d48d9e3d4?w=800&h=700&fit=crop&auto=format', alt: 'Praia tropical com palmeiras — litoral de Caraguatatuba' },
  { src: 'https://images.unsplash.com/photo-1788543632230-cdc8f988868c?w=800&h=700&fit=crop&auto=format', alt: 'Mata Atlântica densa com neblina na Serra do Mar' },
  { src: 'https://images.unsplash.com/photo-1777957638415-2496f7220699?w=800&h=700&fit=crop&auto=format', alt: 'Praia com barcos e montanhas ao fundo' },
  { src: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?w=800&h=700&fit=crop&auto=format', alt: 'Ondas do oceano Atlântico na costa' },
];

export default function Home() {
  const navigate = useNavigate();
  const gridRef = useCardReveal();

  const scrollToProblems = () => {
    document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section id="climas" className="relative overflow-hidden" style={{ minHeight: '560px', height: 'clamp(500px, 72vh, 740px)' }}>
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1">
          {HERO_IMAGES.map((img, i) => (
            <div key={i} className="relative overflow-hidden bg-blue-900">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover"
                style={{ transform: `scale(1.1) translateX(${i % 2 === 1 ? '2%' : '-2%'})` }} />
              {i < 3 && (
                <div className="absolute inset-y-0 right-0 w-12 z-10 hidden sm:block pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(6,43,85,0.55))' }} />
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(140deg, rgba(6,43,85,0.88) 0%, rgba(6,43,85,0.5) 55%, rgba(6,43,85,0.72) 100%)' }} />

        <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ backgroundColor: 'rgba(37,169,245,0.18)', border: '1px solid rgba(37,169,245,0.4)', color: '#25A9F5' }}>
          Caraguatatuba · SP
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wider uppercase"
                style={{ backgroundColor: 'rgba(22,119,232,0.3)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.35)' }}>
                Clima Litorâneo
              </div>
              <h1 className="font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
                O Clima de{' '}
                <span style={{ color: '#25A9F5' }}>Caraguatatuba</span>
              </h1>
              <p className="text-white/80 leading-relaxed mb-8"
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '520px' }}>
                Entre a Serra do Mar e o Atlântico, Caraguatatuba vive um dos climas mais úmidos do Brasil — e enfrenta desafios ambientais únicos que moldam o cotidiano da cidade e de seus moradores.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={scrollToProblems}
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: '#1677E8', color: '#fff', boxShadow: '0 4px 24px rgba(22,119,232,0.5)', fontSize: '1rem' }}
                  onMouseEnter={(e) => ((e.currentTarget).style.backgroundColor = '#0f5ec4')}
                  onMouseLeave={(e) => ((e.currentTarget).style.backgroundColor = '#1677E8')}>
                  Saiba mais →
                </button>
                <button
                  onClick={() => navigate('/versao-2')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20 active:scale-95"
                >
                  Acessar página 2
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                {[['4.000 mm', 'Chuva anual média'], ['28°C', 'Temp. média verão'], ['Serra do Mar', 'Barreira orográfica']].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold" style={{ color: '#25A9F5', fontFamily: "'Poppins', sans-serif" }}>{val}</div>
                    <div className="text-xs text-white/55 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-14">
            <path d="M0,44 C360,4 1080,80 1440,24 L1440,64 L0,64 Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      {/* CONTEXT STRIP */}
      <section style={{ backgroundColor: '#f0f6ff' }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ backgroundColor: '#fff', boxShadow: '0 2px 20px rgba(6,43,85,0.07)', borderLeft: '4px solid #1677E8' }}>
            <div className="flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" fill="#dbeafe" />
                <path d="M10 22 L16 10 L22 22" stroke="#1677E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 18 h7" stroke="#1677E8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base mb-1" style={{ color: '#062B55', fontFamily: "'Poppins', sans-serif" }}>
                Por que Caraguatatuba é tão especial?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>
                Encravada entre a <strong>Serra do Mar</strong> e o <strong>Oceano Atlântico</strong>, a cidade possui um clima tropical litorâneo com altíssima umidade. Essa geografia privilegiada também torna Caraguatatuba altamente vulnerável a eventos climáticos extremos — de deslizamentos históricos a ressacas devastadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section id="problemas" style={{ backgroundColor: '#f0f6ff' }} className="pb-20 sm:pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
              style={{ backgroundColor: '#dbeafe', color: '#1677E8' }}>
              Desafios Locais
            </div>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#062B55' }}>
              Principais <span style={{ color: '#1677E8' }}>Problemas</span> do Litoral
            </h2>
            <p className="mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#4b6080', maxWidth: '580px' }}>
              Os desafios climáticos de Caraguatatuba são únicos e urgentes — entre o mar que avança e a serra que desmorona, a cidade busca equilíbrio.
            </p>
          </div>

          {/* Cards com animação de scroll */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {PROBLEMS.map((p) => (
              <div key={p.id}
                className="card-reveal rounded-2xl overflow-hidden group"
                style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)', transition: 'box-shadow 0.3s ease' }}
                onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 10px 44px rgba(22,119,232,0.16)')}
                onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 18px rgba(6,43,85,0.07)')}>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-blue-100">
                  <img src={p.img} alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,43,85,0.35) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                    style={{ backgroundColor: p.color }}>
                    {p.num}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>
                    {p.shortText}
                  </p>
                  <button
                    onClick={() => navigate(`/problema/${p.id}`)}
                    className="mt-4 text-sm font-semibold flex items-center gap-1 transition-opacity duration-200 cursor-pointer hover:opacity-70"
                    style={{ color: p.color }}>
                    Saiba mais →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
