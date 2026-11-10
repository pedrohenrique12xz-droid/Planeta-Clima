import Version2Layout from '../components/Version2Layout';
import { VERSION_2_SOLUTIONS } from '../data/version2Content';

export default function Version2Solucoes() {
  return (
    <Version2Layout>
      <main>
        <section className="relative overflow-hidden bg-[#dff4ff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#38bdf8]/30" />
          <div className="relative mx-auto max-w-7xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0284c7]">Caminhos possíveis</span>
            <h1 className="mt-3 max-w-3xl font-['Poppins'] text-4xl font-bold text-[#075985] sm:text-5xl">Soluções para cidades mais resilientes</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#52758b]">
              Poder público, ciência e comunidades precisam atuar juntos para reduzir riscos e cuidar dos ecossistemas costeiros.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {VERSION_2_SOLUTIONS.map((solution, index) => (
              <article id={solution.id} key={solution.id} className="scroll-mt-28 grid gap-6 rounded-3xl border border-[#bae6fd] bg-white p-7 shadow-[0_10px_30px_rgba(14,116,144,0.06)] md:grid-cols-[auto_1fr_0.8fr] md:items-center md:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0284c7] font-['Poppins'] font-bold text-white">{index + 1}</span>
                <div>
                  <h2 className="font-['Poppins'] text-xl font-bold text-[#075985]">{solution.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#52758b]">{solution.description}</p>
                </div>
                <div className="rounded-2xl bg-[#eaf8ff] p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0284c7]">Como participar</span>
                  <p className="mt-2 text-sm leading-6 text-[#075985]">{solution.action}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Version2Layout>
  );
}
