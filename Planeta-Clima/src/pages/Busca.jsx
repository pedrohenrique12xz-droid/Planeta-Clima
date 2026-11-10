import { useNavigate, useSearchParams } from 'react-router';
import { POPULAR_SEARCHES, searchSite } from '../data/search';

export default function Busca() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const results = searchSite(query);

  return (
    <main className="min-h-[70vh] bg-[#f0f6ff]">
      <section className="relative overflow-hidden bg-[#062B55] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#25A9F5]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#25A9F5]/15" />
        <div className="relative mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mb-5 flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar ao início
          </button>
          <span className="inline-flex rounded-full border border-[#25A9F5]/30 bg-[#25A9F5]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#25A9F5]">
            Pesquisa no site
          </span>
          <h1 className="mt-4 font-['Poppins'] text-3xl font-bold text-white sm:text-4xl">
            Resultados de busca
          </h1>
          {query && (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              {results.length === 1 ? '1 resultado encontrado' : `${results.length} resultados encontrados`} para{' '}
              <strong className="font-semibold text-white">“{query}”</strong>
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-semibold text-[#4b6080]">Buscas populares:</span>
          {POPULAR_SEARCHES.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => navigate(`/busca?q=${encodeURIComponent(suggestion)}`)}
              className="rounded-full border border-[#cbdced] bg-white px-3 py-1.5 text-xs font-semibold text-[#1677E8] transition hover:border-[#1677E8] hover:bg-[#eef6ff]"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {!query ? (
          <div className="rounded-2xl border border-[#d7e4f1] bg-white px-6 py-12 text-center shadow-[0_2px_18px_rgba(6,43,85,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f3ff] text-[#1677E8]">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </div>
            <h2 className="mt-5 font-['Poppins'] text-xl font-bold text-[#062B55]">Digite um termo para pesquisar</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#60738c]">
              Use o campo de busca no cabeçalho para encontrar informações sobre clima, riscos e soluções ambientais.
            </p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((result) => (
              <button
                key={result.path}
                type="button"
                onClick={() => navigate(result.path)}
                className="group rounded-2xl border border-[#dbe6f1] bg-white p-6 text-left shadow-[0_2px_14px_rgba(6,43,85,0.05)] transition hover:-translate-y-0.5 hover:border-[#1677E8]/35 hover:shadow-[0_10px_30px_rgba(22,119,232,0.11)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1677E8]">
                      {result.category}
                    </span>
                    <h2 className="mt-2 font-['Poppins'] text-lg font-bold text-[#062B55] transition group-hover:text-[#1677E8]">
                      {result.title}
                    </h2>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[#1677E8] transition group-hover:bg-[#1677E8] group-hover:text-white">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#60738c]">{result.description}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#d7e4f1] bg-white px-6 py-12 text-center shadow-[0_2px_18px_rgba(6,43,85,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f3ff] text-[#1677E8]">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
                <path d="M8.5 8.5l5 5m0-5-5 5" />
              </svg>
            </div>
            <h2 className="mt-5 font-['Poppins'] text-xl font-bold text-[#062B55]">Nenhum resultado encontrado</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#60738c]">
              Não encontramos conteúdo para “{query}”. Tente usar menos palavras ou escolha uma das buscas sugeridas acima.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
