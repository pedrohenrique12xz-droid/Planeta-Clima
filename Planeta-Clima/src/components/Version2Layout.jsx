import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { VERSION_2_CITIES } from '../data/version2Cities';
import { getCurrentUser, logoutUser, subscribeToAuth } from '../data/auth';

const NAV_ITEMS = [
  ['Início', '/versao-2'],
  ['Problemas', '/versao-2/problemas'],
  ['Soluções', '/versao-2/solucoes'],
  ['Turismo', '/versao-2/turismo'],
  ['Sobre', '/versao-2/sobre'],
];

function Version2Logo() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#E0F5FF" />
      <circle cx="24" cy="24" r="22" stroke="#38BDF8" strokeWidth="2" />
      <path d="M4 28 13 17l6 7 7-12 8 13 5-6 5 8v8H4v-7Z" fill="#0B6FA4" />
      <path d="M3 33c7-3 11 3 18 0s11 3 18 0c2-.8 4-.5 6 0v11H3V33Z" fill="#38BDF8" />
      <path d="M4 38c6-2.5 11 2.5 17 0s11 2.5 17 0c2-.8 4-.6 6 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Version2Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());

  useEffect(() => subscribeToAuth(() => setCurrentUser(getCurrentUser())), []);

  const goTo = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    setMenuOpen(false);
    navigate(`/versao-2/busca?q=${encodeURIComponent(query)}`);
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="min-h-screen bg-[#eefaff] font-['Inter']">
      <header className="sticky top-0 z-50 border-b border-[#bae6fd] bg-white/95 shadow-[0_5px_25px_rgba(14,116,144,0.08)] backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button type="button" onClick={() => goTo('/versao-2')} className="flex items-center gap-3 text-left">
            <Version2Logo />
            <span>
              <span className="block font-['Poppins'] text-base font-bold text-[#075985]">Planeta e Climas</span>
              <span className="block text-xs font-semibold text-[#0ea5e9]">Página 2</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map(([label, path]) => (
              <button key={path} type="button" onClick={() => goTo(path)} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${location.pathname === path ? 'bg-[#e0f2fe] text-[#0369a1]' : 'text-[#52758b] hover:bg-[#f0f9ff] hover:text-[#0369a1]'}`}>
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => goTo('/versao-2/busca')} className={`hidden rounded-xl p-2.5 transition sm:block ${location.pathname === '/versao-2/busca' ? 'bg-[#0284c7] text-white' : 'bg-[#e0f2fe] text-[#0369a1] hover:bg-[#bae6fd]'}`} aria-label="Buscar na Página 2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
            <button type="button" onClick={() => navigate('/')} className="hidden rounded-xl border border-[#7dd3fc] px-3 py-2 text-sm font-bold text-[#0369a1] transition hover:bg-[#e0f2fe] xl:block">
              Página principal
            </button>
            {currentUser && (
              <div className="hidden items-center gap-2 xl:flex">
                <span className="max-w-28 truncate text-xs font-semibold text-[#52758b]" title={currentUser.name}>
                  {currentUser.name.split(' ')[0]}
                </span>
                <button type="button" onClick={handleLogout} className="rounded-lg px-2 py-2 text-xs font-bold text-[#0284c7] transition hover:bg-[#e0f2fe]">Sair</button>
              </div>
            )}
            {!currentUser && (
              <button type="button" onClick={() => goTo('/versao-2/login')} className="hidden rounded-xl bg-[#0284c7] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0369a1] xl:block">
                Entrar
              </button>
            )}
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-lg bg-[#e0f2fe] p-2 text-[#0369a1] lg:hidden" aria-label="Abrir menu da página 2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#bae6fd] bg-white px-4 py-3 lg:hidden">
            <form onSubmit={handleSearch} className="mb-3 flex rounded-xl border border-[#bae6fd] bg-[#f8fdff] p-1">
              <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Buscar conteúdo..." aria-label="Buscar na Página 2" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#075985] outline-none" />
              <button type="submit" className="rounded-lg bg-[#0284c7] px-3 py-2 text-xs font-bold text-white">Buscar</button>
            </form>
            {NAV_ITEMS.map(([label, path]) => (
              <button key={path} type="button" onClick={() => goTo(path)} className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold ${location.pathname === path ? 'bg-[#e0f2fe] text-[#0369a1]' : 'text-[#52758b]'}`}>
                {label}
              </button>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#e0f2fe] pt-3">
              <button type="button" onClick={() => goTo('/')} className="rounded-lg bg-[#e0f2fe] px-3 py-2 text-left text-sm font-bold text-[#0369a1]">Página principal</button>
              {currentUser ? (
                <button type="button" onClick={handleLogout} className="rounded-lg border border-[#bae6fd] px-3 py-2 text-left text-sm font-bold text-[#0284c7]">Sair da conta</button>
              ) : (
                <button type="button" onClick={() => goTo('/versao-2/login')} className="rounded-lg bg-[#0284c7] px-3 py-2 text-left text-sm font-bold text-white">Fazer login</button>
              )}
            </div>
          </nav>
        )}
      </header>

      {children}

      <footer className="bg-[#075985] text-white">
        <div className="h-2 bg-gradient-to-r from-[#7dd3fc] via-[#38bdf8] to-[#0ea5e9]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Version2Logo />
              <div>
                <p className="font-['Poppins'] font-bold">Planeta e Climas</p>
                <p className="text-xs text-[#bae6fd]">Cidades e conexões costeiras</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Conteúdo educativo sobre cidades litorâneas, clima e desafios ambientais do Sudeste brasileiro.
            </p>
          </div>
          <div>
            <h2 className="font-['Poppins'] text-sm font-bold text-[#7dd3fc]">Cidades próximas</h2>
            <button type="button" onClick={() => goTo('/versao-2/cidade/ubatuba')} className="mt-4 block text-sm text-white/70 hover:text-white">Ubatuba</button>
            <button type="button" onClick={() => goTo('/versao-2/cidade/ilhabela')} className="mt-3 block text-sm text-white/70 hover:text-white">Ilhabela</button>
          </div>
          <div>
            <h2 className="font-['Poppins'] text-sm font-bold text-[#7dd3fc]">Outras referências</h2>
            <button type="button" onClick={() => goTo('/versao-2/turismo')} className="mt-4 block text-sm text-white/70 hover:text-white">Guia turístico</button>
            <button type="button" onClick={() => goTo('/versao-2/sobre')} className="mt-3 block text-sm text-white/70 hover:text-white">Sobre o projeto</button>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
          Planeta e Climas — Página 2 · Projeto educativo sobre o litoral brasileiro
        </div>
      </footer>
    </div>
  );
}
