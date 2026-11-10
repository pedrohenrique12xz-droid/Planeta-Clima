import { useNavigate, useParams } from 'react-router';
import Version2Layout from '../components/Version2Layout';
import { getVersion2City, VERSION_2_CITIES } from '../data/version2Cities';

export default function CidadeVersao2() {
  const { id } = useParams();
  const navigate = useNavigate();
  const city = getVersion2City(id);

  if (!city) {
    return (
      <Version2Layout>
        <main className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-['Poppins'] text-3xl font-bold text-[#075985]">Cidade não encontrada</h1>
          <button type="button" onClick={() => navigate('/versao-2')} className="mt-6 rounded-xl bg-[#0284c7] px-6 py-3 text-sm font-bold text-white">Voltar ao início</button>
        </main>
      </Version2Layout>
    );
  }

  const related = VERSION_2_CITIES.filter((item) => item.id !== city.id);

  return (
    <Version2Layout>
      <main>
        <section className="relative min-h-[500px] overflow-hidden">
          <img src={city.image} alt={city.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#075985]/95 via-[#075985]/70 to-transparent" />
          <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <button type="button" onClick={() => navigate('/versao-2')} className="mb-7 text-sm font-semibold text-white/70 hover:text-white">Página 2 / Cidades</button>
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">{city.proximity}</span>
              <h1 className="mt-3 font-['Poppins'] text-4xl font-bold sm:text-6xl">{city.name}</h1>
              <p className="mt-3 text-lg text-white/70">{city.state} · {city.distance} de Caraguatatuba</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80">{city.summary}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {city.facts.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#bae6fd] bg-white p-5 text-center shadow-[0_8px_25px_rgba(14,116,144,0.06)]">
                <p className="font-['Poppins'] text-lg font-bold text-[#0284c7]">{value}</p>
                <p className="mt-1 text-xs text-[#52758b]">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <article className="rounded-3xl bg-white p-7 shadow-[0_12px_35px_rgba(14,116,144,0.07)] sm:p-9">
                <span className="text-sm font-bold text-[#0284c7]">Clima e território</span>
                <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-[#075985]">Como é o clima de {city.name}?</h2>
                <p className="mt-4 text-sm leading-7 text-[#52758b]">{city.climate}</p>
              </article>
              <article className="rounded-3xl bg-[#dff4ff] p-7 sm:p-9">
                <span className="text-sm font-bold text-[#0284c7]">Conexão regional</span>
                <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-[#075985]">Relação com Caraguatatuba</h2>
                <p className="mt-4 text-sm leading-7 text-[#52758b]">{city.connection}</p>
              </article>
            </div>

            <aside className="rounded-3xl bg-[#075985] p-7 text-white shadow-[0_16px_40px_rgba(7,89,133,0.18)] sm:p-9">
              <span className="text-sm font-bold text-[#7dd3fc]">Atenção ambiental</span>
              <h2 className="mt-2 font-['Poppins'] text-2xl font-bold">Principais desafios</h2>
              <div className="mt-6 space-y-4">
                {city.challenges.map((challenge, index) => (
                  <div key={challenge} className="flex gap-3 rounded-xl bg-white/10 p-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#38bdf8] text-xs font-bold">{index + 1}</span>
                    <p className="text-sm leading-6 text-white/80">{challenge}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-[#bae6fd] bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-['Poppins'] text-2xl font-bold text-[#075985]">Continue a comparação</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <button key={item.id} type="button" onClick={() => navigate(`/versao-2/cidade/${item.id}`)} className="rounded-xl border border-[#7dd3fc] bg-[#f0f9ff] px-5 py-3 text-sm font-bold text-[#0369a1] transition hover:bg-[#e0f2fe]">
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Version2Layout>
  );
}
