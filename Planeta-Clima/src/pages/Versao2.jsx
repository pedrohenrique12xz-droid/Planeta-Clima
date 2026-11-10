import { useNavigate } from 'react-router';
import Version2Layout from '../components/Version2Layout';
import { VERSION_2_CITIES } from '../data/version2Cities';

export default function Versao2() {
  const navigate = useNavigate();

  return (
    <Version2Layout>
      <main>
        <section className="relative min-h-[590px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1650622341741-493753c270de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800" alt="Ilhas e oceano no litoral brasileiro" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#075985]/95 via-[#0c86bd]/80 to-[#38bdf8]/40" />
          <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                De Caraguatatuba para o litoral
              </span>
              <h1 className="mt-6 font-['Poppins'] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Cidades conectadas pelo clima e pelo oceano
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Compare paisagens, climas e desafios ambientais de cidades próximas e distantes de Caraguatatuba.
              </p>
              <button type="button" onClick={() => document.getElementById('cidades')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0369a1] shadow-[0_10px_30px_rgba(3,105,161,0.25)] transition hover:bg-[#e0f2fe]">
                Explorar as quatro cidades
              </button>
            </div>
          </div>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute bottom-0 h-12 w-full sm:h-16" aria-hidden="true">
            <path d="M0 40c360-55 900 55 1440-15v45H0V40Z" fill="#eefaff" />
          </svg>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['2 cidades', 'próximas de Caraguatatuba'],
              ['2 referências', 'em outras regiões costeiras'],
              ['1 oceano', 'conectando todos os territórios'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-[#bae6fd] bg-white p-6 shadow-[0_10px_30px_rgba(14,116,144,0.06)]">
                <p className="font-['Poppins'] text-2xl font-bold text-[#0284c7]">{value}</p>
                <p className="mt-1 text-sm text-[#52758b]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cidades" className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#0284c7]">Quatro perspectivas</span>
            <h2 className="mt-2 font-['Poppins'] text-3xl font-bold text-[#075985] sm:text-4xl">Conheça as cidades</h2>
            <p className="mt-4 text-sm leading-7 text-[#52758b]">
              Cada página apresenta como o território se relaciona com Caraguatatuba e quais desafios ambientais merecem atenção.
            </p>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {VERSION_2_CITIES.map((city, index) => (
              <article key={city.id} className="v2-city-card group overflow-hidden rounded-3xl border border-[#bae6fd] bg-white shadow-[0_12px_35px_rgba(14,116,144,0.08)]" style={{ animationDelay: `${index * 130}ms` }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={city.image} alt={city.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#075985]/80 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0369a1]">{city.proximity}</span>
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="font-['Poppins'] text-2xl font-bold">{city.name}</h3>
                    <p className="mt-1 text-sm text-white/75">{city.distance} de Caraguatatuba</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-6 text-[#52758b]">{city.summary}</p>
                  <button type="button" onClick={() => navigate(`/versao-2/cidade/${city.id}`)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0284c7] hover:underline">
                    Conhecer a cidade
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Version2Layout>
  );
}
