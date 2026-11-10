import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { searchSite } from '../data/search';
import Chatbot from './Chatbot';
import { getCurrentUser, subscribeToAuth } from '../data/auth';

const NAV_LINKS = ['Início', 'Climas', 'Problemas', 'Áreas afetadas', 'Soluções', 'Sobre'];

function SearchSuggestions({
  query,
  results,
  onSelect,
  onViewAll,
  mobile = false,
}) {
  if (query.trim().length < 2) return null;

  return (
    <div
      className={`${mobile ? 'mt-2 w-full' : 'absolute right-0 top-full mt-2 w-88'} overflow-hidden rounded-xl border border-[#d9e5f0] bg-white text-left shadow-[0_16px_45px_rgba(6,43,85,0.22)]`}
    >
      <div className="flex items-center justify-between border-b border-[#e8eff6] bg-[#f6faff] px-4 py-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-[#60738c]">Resultados sugeridos</span>
        <span className="rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-bold text-[#1677E8]">{results.length}</span>
      </div>

      {results.length > 0 ? (
        <div className="divide-y divide-[#edf2f7]">
          {results.map((result) => (
            <button
              key={result.path}
              type="button"
              onClick={() => onSelect(result.path)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-[#f0f7ff] focus:bg-[#f0f7ff] focus:outline-none"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#062B55]">{result.title}</span>
                <span className="mt-0.5 block text-xs text-[#7890aa]">{result.category}</span>
              </span>
              <svg className="h-4 w-4 flex-shrink-0 text-[#1677E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          ))}
        </div>
      ) : (
        <p className="px-4 py-5 text-center text-sm text-[#60738c]">Nenhuma sugestão encontrada.</p>
      )}

      <button
        type="button"
        onClick={onViewAll}
        className="flex w-full items-center justify-center gap-2 border-t border-[#e8eff6] bg-[#f9fbfd] px-4 py-3 text-sm font-bold text-[#1677E8] transition hover:bg-[#eef6ff]"
      >
        Ver todos os resultados para “{query.trim()}”
      </button>
    </div>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const suggestedResults = searchTerm.trim().length >= 2 ? searchSite(searchTerm).slice(0, 5) : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => subscribeToAuth(() => setCurrentUser(getCurrentUser())), []);

  const activeNav =
    location.pathname === '/'
      ? 'Início'
      : location.pathname === '/climas'
      ? 'Climas'
      : location.pathname === '/problemas' || location.pathname.startsWith('/problema')
      ? 'Problemas'
      : location.pathname === '/areas-afetadas'
      ? 'Áreas afetadas'
      : location.pathname === '/solucoes'
      ? 'Soluções'
      : location.pathname === '/sobre'
      ? 'Sobre'
      : '';

  const handleNav = (link) => {
    setMenuOpen(false);
    if (link === 'Início') navigate('/');
    else if (link === 'Climas') navigate('/climas');
    else if (link === 'Problemas') navigate('/problemas');
    else if (link === 'Áreas afetadas') navigate('/areas-afetadas');
    else if (link === 'Soluções') navigate('/solucoes');
    else if (link === 'Sobre') navigate('/sobre');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    setMenuOpen(false);
    setSearchOpen(false);
    navigate(`/busca?q=${encodeURIComponent(query)}`);
  };

  const openSearchResult = (path) => {
    setMenuOpen(false);
    setSearchOpen(false);
    navigate(path);
  };

  const viewAllResults = () => {
    const query = searchTerm.trim();
    if (!query) return;
    setMenuOpen(false);
    setSearchOpen(false);
    navigate(`/busca?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-full" style={{ fontFamily: "'Inter', 'Poppins', sans-serif", backgroundColor: '#f0f6ff' }}>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 transition-shadow duration-300"
        style={{ backgroundColor: '#062B55', boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer">
              {/* Logo: Serra do Mar + ondas do oceano */}
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Fundo circular azul-marinho */}
                  <circle cx="18" cy="18" r="17" fill="#062B55" />
                  {/* Ceu azul gradiente — metade superior */}
                  <clipPath id="circle-clip">
                    <circle cx="18" cy="18" r="17" />
                  </clipPath>
                  <g clipPath="url(#circle-clip)">
                    {/* Ceu */}
                    <rect x="1" y="1" width="34" height="22" fill="#1677E8" opacity="0.9" />
                    {/* Silhueta da Serra do Mar — montanhas ao fundo */}
                    <path d="M1 22 L7 12 L11 17 L16 8 L21 18 L25 13 L30 20 L35 15 L35 24 L1 24 Z" fill="#25A9F5" opacity="0.45" />
                    {/* Montanhas principais — primeiro plano */}
                    <path d="M1 24 L9 14 L13 19 L18 10 L23 20 L27 15 L35 23 L35 26 L1 26 Z" fill="#062B55" opacity="0.85" />
                    {/* Pico nevado / iluminado */}
                    <path d="M16 10 L18 10 L20 13 L18 12.5 Z" fill="white" opacity="0.6" />
                    {/* Oceano — base */}
                    <rect x="1" y="24" width="34" height="11" fill="#1677E8" />
                    {/* Onda 1 */}
                    <path d="M1 26 C5 24.5, 9 27.5, 13 26 C17 24.5, 21 27.5, 25 26 C29 24.5, 33 27, 35 26 L35 28 L1 28 Z" fill="#25A9F5" opacity="0.55" />
                    {/* Onda 2 */}
                    <path d="M1 29 C4 27.8, 8 30.5, 12 29 C16 27.5, 20 30.5, 24 29 C28 27.5, 32 30, 35 29 L35 31 L1 31 Z" fill="white" opacity="0.18" />
                  </g>
                  {/* Anel externo */}
                  <circle cx="18" cy="18" r="16.5" stroke="#25A9F5" strokeWidth="1" opacity="0.5" fill="none" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="text-white">Planeta</span>
                <span style={{ color: '#25A9F5' }}> e Climas</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: activeNav === link ? '#1677E8' : 'transparent',
                    color: activeNav === link ? '#fff' : 'rgba(255,255,255,0.72)',
                  }}
                  onMouseEnter={(e) => { if (activeNav !== link) e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { if (activeNav !== link) e.currentTarget.style.color = 'rgba(255,255,255,0.72)'; }}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <div
                className="relative hidden sm:block"
                onFocus={() => setSearchOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setSearchOpen(false);
                }}
              >
                <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <button type="submit" aria-label="Pesquisar" className="text-white opacity-50 transition-opacity hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" strokeWidth="2" />
                      <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      setSearchOpen(true);
                    }}
                    placeholder="Buscar..."
                    aria-label="Buscar no site"
                    aria-expanded={searchOpen && searchTerm.trim().length >= 2}
                    className="bg-transparent text-white text-sm outline-none placeholder-white/40 w-24"
                  />
                </form>
                {searchOpen && (
                  <SearchSuggestions
                    query={searchTerm}
                    results={suggestedResults}
                    onSelect={openSearchResult}
                    onViewAll={viewAllResults}
                  />
                )}
              </div>
              <button
                onClick={() => navigate(currentUser ? '/conta' : '/login')}
                className="hidden lg:flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors cursor-pointer"
                style={{ backgroundColor: ['/login', '/conta'].includes(location.pathname) ? '#1677E8' : 'rgba(255,255,255,0.12)' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <path d="m10 17 5-5-5-5M15 12H3" />
                </svg>
                {currentUser ? 'Minha conta' : 'Entrar'}
              </button>
              <button
                className="lg:hidden p-2 rounded-lg text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen
                    ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden border-t pb-3 pt-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="flex flex-col gap-1">
                <div
                  className="relative mb-2"
                  onFocus={() => setSearchOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setSearchOpen(false);
                  }}
                >
                  <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                        setSearchOpen(true);
                      }}
                      placeholder="Buscar no site..."
                      aria-label="Buscar no site"
                      aria-expanded={searchOpen && searchTerm.trim().length >= 2}
                      className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder-white/40"
                    />
                    <button type="submit" aria-label="Pesquisar" className="text-white/70">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </form>
                  {searchOpen && (
                    <SearchSuggestions
                      query={searchTerm}
                      results={suggestedResults}
                      onSelect={openSearchResult}
                      onViewAll={viewAllResults}
                      mobile
                    />
                  )}
                </div>
                {NAV_LINKS.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNav(link)}
                    className="text-left px-4 py-2.5 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: activeNav === link ? '#1677E8' : 'transparent',
                      color: activeNav === link ? '#fff' : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {link}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(currentUser ? '/conta' : '/login');
                  }}
                  className="mt-1 flex items-center gap-2 rounded-lg px-4 py-2.5 text-left text-sm font-semibold text-white"
                  style={{ backgroundColor: ['/login', '/conta'].includes(location.pathname) ? '#1677E8' : 'rgba(255,255,255,0.1)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <path d="m10 17 5-5-5-5M15 12H3" />
                  </svg>
                  {currentUser ? 'Minha conta' : 'Entrar'}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {children}

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#062B55' }}>
        <div>
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-10">
            <path d="M0,20 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#f0f6ff" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(37,169,245,0.15)', border: '1px solid rgba(37,169,245,0.3)', color: '#25A9F5' }}
              >
                <LeafIcon />
              </div>
              <p className="font-medium italic" style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.95rem', maxWidth: '320px', lineHeight: '1.5' }}>
                "Preservar o clima é preservar o nosso futuro."
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Conscientização', 'Ação', 'Um planeta melhor'].map((item) => (
                <span key={item} className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: 'rgba(22,119,232,0.2)', color: '#25A9F5', border: '1px solid rgba(37,169,245,0.25)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 text-center text-xs"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Planeta e Climas · Caraguatatuba · Litoral Norte de São Paulo
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
