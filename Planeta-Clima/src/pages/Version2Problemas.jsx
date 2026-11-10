import Version2Layout from '../components/Version2Layout';
import { VERSION_2_PROBLEMS } from '../data/version2Content';

export default function Version2Problemas() {
  return (
    <Version2Layout>
      <main>
        <section className="bg-[#075985] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">Desafios compartilhados</span>
            <h1 className="mt-3 max-w-3xl font-['Poppins'] text-4xl font-bold sm:text-5xl">Problemas que as cidades enfrentam</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Cidades costeiras têm características diferentes, mas compartilham riscos ligados à chuva, ao oceano e à ocupação urbana.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VERSION_2_PROBLEMS.map((problem, index) => (
              <article id={problem.id} key={problem.id} className="scroll-mt-28 rounded-3xl border border-[#bae6fd] bg-white p-7 shadow-[0_12px_35px_rgba(14,116,144,0.07)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0284c7]">{problem.eyebrow}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e0f2fe] text-sm font-bold text-[#0369a1]">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="mt-5 font-['Poppins'] text-xl font-bold text-[#075985]">{problem.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#52758b]">{problem.description}</p>
                <div className="mt-6 border-t border-[#e0f2fe] pt-4">
                  <span className="text-xs font-bold text-[#0e7490]">Onde observar</span>
                  <p className="mt-1 text-sm text-[#52758b]">{problem.cities}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Version2Layout>
  );
}
