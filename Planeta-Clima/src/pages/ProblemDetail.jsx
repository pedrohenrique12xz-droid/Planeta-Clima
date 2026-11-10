import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { PROBLEMS } from '../data/problems';

export default function ProblemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const problem = PROBLEMS.find((p) => p.id === id);
  const currentIndex = PROBLEMS.findIndex((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f0f6ff' }}>
        <div className="text-center">
          <p className="text-2xl mb-4">Página não encontrada</p>
          <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl text-white font-semibold" style={{ backgroundColor: '#1677E8' }}>
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const prev = PROBLEMS[currentIndex - 1];
  const next = PROBLEMS[currentIndex + 1];

  return (
    <div style={{ backgroundColor: '#f0f6ff' }}>
      <div className="relative overflow-hidden" style={{ height: 'clamp(260px, 40vh, 480px)' }}>
        <img src={problem.heroImg} alt={problem.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(6,43,85,0.6) 0%, rgba(6,43,85,0.75) 100%)' }} />

        <div className="absolute top-6 left-4 sm:left-8 z-10 flex items-center gap-2 text-sm"
          style={{ color: 'rgba(255,255,255,0.7)' }}>
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">Início</button>
          <span>›</span>
          <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="hover:text-white transition-colors cursor-pointer">Problemas</button>
          <span>›</span>
          <span className="text-white font-medium truncate max-w-40">{problem.title}</span>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: problem.color, color: '#fff' }}>
              Problema {problem.num} de {PROBLEMS.length}
            </span>
          </div>
          <h1 className="text-white font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            {problem.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg leading-relaxed mb-10 pb-10"
          style={{ color: '#2d4a6e', borderBottom: '1px solid #dce8f5', fontWeight: 500 }}>
          {problem.shortText}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {problem.facts.map((f) => (
            <div key={f.label} className="rounded-2xl p-4 text-center"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(6,43,85,0.07)' }}>
              <div className="font-bold text-xl mb-1" style={{ color: problem.color, fontFamily: "'Poppins', sans-serif" }}>
                {f.value}
              </div>
              <div className="text-xs leading-tight" style={{ color: '#6b7280' }}>{f.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 mb-12">
          {problem.sections.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 18px rgba(6,43,85,0.07)', borderLeft: `4px solid ${problem.color}` }}>
              <h2 className="font-bold mb-3 text-lg" style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55' }}>
                {s.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4b6080' }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 sm:p-8 mb-12"
          style={{ background: `linear-gradient(135deg, ${problem.color}14 0%, ${problem.color}08 100%)`, border: `1px solid ${problem.color}30` }}>
          <h2 className="font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#062B55' }}>
            O que você pode fazer
          </h2>
          <ul className="flex flex-col gap-3">
            {problem.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: problem.color }}>{i + 1}</span>
                <span className="text-sm leading-relaxed" style={{ color: '#4b6080' }}>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8" style={{ borderTop: '1px solid #dce8f5' }}>
          {prev ? (
            <button onClick={() => navigate(`/problema/${prev.id}`)}
              className="flex items-center gap-3 flex-1 rounded-2xl p-4 text-left transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(6,43,85,0.07)' }}
              onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 6px 24px rgba(22,119,232,0.14)')}
              onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 12px rgba(6,43,85,0.07)')}>
              <span className="text-xl flex-shrink-0" style={{ color: '#1677E8' }}>←</span>
              <div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: '#9ca3af' }}>Anterior</div>
                <div className="text-sm font-bold" style={{ color: '#062B55' }}>{prev.title}</div>
              </div>
            </button>
          ) : <div className="flex-1" />}

          <button onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#1677E8', color: '#fff' }}
            onMouseEnter={(e) => ((e.currentTarget).style.backgroundColor = '#0f5ec4')}
            onMouseLeave={(e) => ((e.currentTarget).style.backgroundColor = '#1677E8')}>
            Ver todos
          </button>

          {next ? (
            <button onClick={() => navigate(`/problema/${next.id}`)}
              className="flex items-center gap-3 flex-1 rounded-2xl p-4 text-right justify-end transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(6,43,85,0.07)' }}
              onMouseEnter={(e) => ((e.currentTarget).style.boxShadow = '0 6px 24px rgba(22,119,232,0.14)')}
              onMouseLeave={(e) => ((e.currentTarget).style.boxShadow = '0 2px 12px rgba(6,43,85,0.07)')}>
              <div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: '#9ca3af' }}>Próximo</div>
                <div className="text-sm font-bold" style={{ color: '#062B55' }}>{next.title}</div>
              </div>
              <span className="text-xl flex-shrink-0" style={{ color: '#1677E8' }}>→</span>
            </button>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
}
