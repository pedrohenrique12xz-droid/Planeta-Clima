import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Version2Layout from '../components/Version2Layout';
import { searchVersion2, VERSION_2_POPULAR_SEARCHES } from '../data/version2Content';

export default function Version2Busca() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const [term, setTerm] = useState(query);
  const results = searchVersion2(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextQuery = term.trim();
    if (nextQuery) navigate(`/versao-2/busca?q=${encodeURIComponent(nextQuery)}`);
  };

  return (
    <Version2Layout>
      <main className="min-h-[70vh]">
        <section className="bg-[#075985] px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">Pesquisa no conteúdo</span>
            <h1 className="mt-3 font-['Poppins'] text-4xl font-bold">O que você quer encontrar?</h1>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-[0_14px_35px_rgba(3,105,161,0.28)]">
              <input type="search" value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Busque por cidade, problema ou solução" aria-label="Buscar na Página 2" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#075985] outline-none placeholder:text-[#7890aa]" />
              <button type="submit" className="rounded-xl bg-[#0284c7] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0369a1]">Buscar</button>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold text-[#52758b]">Buscas populares:</span>
            {VERSION_2_POPULAR_SEARCHES.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => navigate(`/versao-2/busca?q=${encodeURIComponent(suggestion)}`)} className="rounded-full border border-[#7dd3fc] bg-white px-3 py-1.5 text-xs font-bold text-[#0284c7] transition hover:bg-[#e0f2fe]">{suggestion}</button>
            ))}
          </div>

          {!query ? (
            <div className="rounded-3xl border border-[#bae6fd] bg-white px-6 py-14 text-center">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#075985]">Digite um termo para começar</h2>
              <p className="mt-2 text-sm text-[#52758b]">A busca pesquisa cidades, desafios, soluções e informações sobre o projeto.</p>
            </div>
          ) : results.length ? (
            <>
              <p className="mb-6 text-sm text-[#52758b]"><strong className="text-[#075985]">{results.length}</strong> {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'} para “{query}”</p>
              <div className="grid gap-4 md:grid-cols-2">
                {results.map((result) => (
                  <button key={result.path} type="button" onClick={() => navigate(result.path)} className="group rounded-2xl border border-[#bae6fd] bg-white p-6 text-left shadow-[0_8px_25px_rgba(14,116,144,0.06)] transition hover:-translate-y-0.5 hover:border-[#38bdf8]">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0284c7]">{result.category}</span>
                    <h2 className="mt-2 font-['Poppins'] text-lg font-bold text-[#075985] group-hover:text-[#0284c7]">{result.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#52758b]">{result.description}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-[#bae6fd] bg-white px-6 py-14 text-center">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#075985]">Nenhum resultado encontrado</h2>
              <p className="mt-2 text-sm text-[#52758b]">Tente outro termo ou escolha uma das buscas populares.</p>
            </div>
          )}
        </section>
      </main>
    </Version2Layout>
  );
}
