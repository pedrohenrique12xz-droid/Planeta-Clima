import { useMemo, useState } from 'react';
import Version2Layout from '../components/Version2Layout';
import TourismChatbot from '../components/TourismChatbot';
import {
  getTourismMapUrl,
  TOURISM_CATEGORIES,
  TOURISM_CITIES,
  TOURISM_PLACES,
} from '../data/version2Tourism';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1725378531790-dc2b9cf5a647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600';

export default function Version2Turismo() {
  const [city, setCity] = useState('Todas');
  const [category, setCategory] = useState('Todas');
  const [query, setQuery] = useState('');

  const places = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    return TOURISM_PLACES.filter((place) => {
      const matchesCity = city === 'Todas' || place.city === city;
      const matchesCategory = category === 'Todas' || place.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${place.name} ${place.description} ${place.tags.join(' ')}`
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCity && matchesCategory && matchesQuery;
    });
  }, [city, category, query]);

  return (
    <Version2Layout>
      <main>
        <section className="relative min-h-[440px] overflow-hidden">
          <img src={HERO_IMAGE} alt="Visitantes caminhando em uma praia do litoral brasileiro" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#075985]/95 via-[#075985]/78 to-[#075985]/35" />
          <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">Guia do Litoral Norte</span>
              <h1 className="mt-4 font-['Poppins'] text-4xl font-bold leading-tight sm:text-5xl">Planeje sua estadia com tudo em um só lugar</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Encontre hospedagem, gastronomia e lazer em Caraguatatuba, Ubatuba, Ilhabela e São Sebastião, com endereço, contato e acesso direto ao mapa.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#bae6fd] bg-white p-5 shadow-[0_12px_35px_rgba(14,116,144,0.07)] sm:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#52758b]">Pesquisar local</span>
                <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hotel, restaurante, praia..." className="h-12 w-full rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm text-[#075985] outline-none focus:border-[#0284c7]" />
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#52758b]">Cidade</span>
                <select value={city} onChange={(event) => setCity(event.target.value)} className="h-12 min-w-52 rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm font-semibold text-[#075985] outline-none focus:border-[#0284c7]">
                  <option>Todas</option>
                  {TOURISM_CITIES.map((item) => <option key={item.id}>{item.name}</option>)}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#52758b]">Categoria</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-12 min-w-48 rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm font-semibold text-[#075985] outline-none focus:border-[#0284c7]">
                  <option>Todas</option>
                  {TOURISM_CATEGORIES.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_390px]">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-[#0284c7]">Diretório turístico</span>
                  <h2 className="mt-1 font-['Poppins'] text-2xl font-bold text-[#075985]">{places.length} opções encontradas</h2>
                </div>
              </div>

              <div className="space-y-4">
                {places.map((place) => (
                  <article id={place.id} key={place.id} className="scroll-mt-28 rounded-2xl border border-[#bae6fd] bg-white p-6 shadow-[0_8px_25px_rgba(14,116,144,0.06)]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#e0f2fe] px-3 py-1 text-xs font-bold text-[#0369a1]">{place.category}</span>
                          <span className="rounded-full bg-[#f0f9ff] px-3 py-1 text-xs font-semibold text-[#52758b]">{place.city}</span>
                        </div>
                        <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-[#075985]">{place.name}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#52758b]">{place.description}</p>
                    <div className="mt-5 grid gap-3 border-t border-[#e0f2fe] pt-5 sm:grid-cols-2">
                      <p className="text-sm text-[#365e73]"><strong className="block text-xs text-[#0284c7]">Endereço</strong>{place.address}</p>
                      <p className="text-sm text-[#365e73]"><strong className="block text-xs text-[#0284c7]">Contato</strong>{place.contact}</p>
                      <p className="text-sm text-[#365e73] sm:col-span-2"><strong className="block text-xs text-[#0284c7]">Funcionamento</strong>{place.hours}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={getTourismMapUrl(place)} target="_blank" rel="noreferrer" className="rounded-xl bg-[#0284c7] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0369a1]">Abrir localização</a>
                      <a href={place.website} target="_blank" rel="noreferrer" className="rounded-xl border border-[#7dd3fc] px-4 py-2.5 text-sm font-bold text-[#0369a1] transition hover:bg-[#e0f2fe]">Site ou informações</a>
                    </div>
                  </article>
                ))}
                {!places.length && (
                  <div className="rounded-2xl border border-[#bae6fd] bg-white p-10 text-center">
                    <h3 className="font-['Poppins'] text-lg font-bold text-[#075985]">Nenhum local encontrado</h3>
                    <p className="mt-2 text-sm text-[#52758b]">Altere a cidade, a categoria ou o termo pesquisado.</p>
                  </div>
                )}
              </div>
            </div>
            <TourismChatbot />
          </div>

          <p className="mt-10 rounded-2xl bg-[#eaf8ff] px-5 py-4 text-xs leading-6 text-[#52758b]">
            Horários, contatos e condições de acesso podem mudar. Confirme as informações nos canais oficiais antes de sair.
          </p>
        </section>
      </main>
    </Version2Layout>
  );
}
