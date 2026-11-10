import { useNavigate } from 'react-router';
import { PROBLEMS } from '../data/problems';
import { useCardReveal } from '../hooks/useInView';

export default function Problemas() {
  const navigate = useNavigate();
  const gridRef = useCardReveal();

  return (
    <div style={{ backgroundColor: '#f0f6ff' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '300px', height: 'clamp(260px, 38vh, 440px)' }}>
        <img
          src="https://images.unsplash.com/photo-1626060451577-8b90a394e355?w=1400&h=600&fit=crop&auto=format"
          alt="Ondas do oceano Atlântico na costa de Caraguatatuba"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(140deg, rgba(6,43,85,0.93) 0%, rgba(6,43,85,0.55) 60%, rgba(6,43,85,0.82) 100%)' }} />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <span>›</span>
            <span className="text-white font-medium">Problemas</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase w-fit"
            style={{ backgroundColor: 'rgba(22,119,232,0.3)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.35)' }}>
            Desafios Locais
          </div>
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Problemas do <span style={{ color: '#25A9F5' }}>Litoral</span>
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7 }}>
            Os desafios climáticos que afetam Caraguatatuba — entre o mar que avança e a serra que desmorona.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
            <path d="M0,40 C360,0 1080,70 1440,20 L1440,56 L0,56 Z" fill="#f0f6ff" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5"
          style={{ backgroundColor: '#fff', boxShadow: '0 2px 20px rgba(6,43,85,0.07)', borderLeft: '4px solid #1677E8' }}>
          <div className="flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" fill="#dbeafe" />
              <path d="M16 8 L16 17" stroke="#1677E8" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="16" cy="21" r="1.5" fill="#1677E8" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1" style={{ color: '#062B55', fontFamily: "'Poppins', sans-serif" }}>
              Por que Caraguatatuba é tão vulnerável?
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>
              A posição geográfica entre a <strong>Serra do Mar</strong> e o <strong>Oceano Atlântico</strong> cria um cenário único de exposição a riscos climáticos. O crescimento urbano acelerado e as mudanças climáticas globais intensificam esses problemas ano após ano.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
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
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl p-8 sm:p-12"
            style={{ background: 'linear-gradient(135deg, #062B55 0%, #1677E8 100%)', boxShadow: '0 8px 40px rgba(22,119,232,0.3)' }}>
            <h2 className="font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Existe saída para esses desafios?
            </h2>
            <p className="text-white/75 mb-6 text-sm sm:text-base leading-relaxed">
              Conheça as regiões mais expostas e veja as iniciativas concretas para proteger Caraguatatuba e construir um litoral mais resiliente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => navigate('/areas-afetadas')}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                style={{ backgroundColor: '#fff', color: '#1677E8' }}>
                Ver áreas afetadas
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <button onClick={() => navigate('/solucoes')}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer">
                Ver as soluções
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
