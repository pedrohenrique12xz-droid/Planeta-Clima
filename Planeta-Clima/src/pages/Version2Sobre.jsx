import { useNavigate } from 'react-router';
import Version2Layout from '../components/Version2Layout';

export default function Version2Sobre() {
  const navigate = useNavigate();

  return (
    <Version2Layout>
      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0284c7]">Sobre o projeto</span>
            <h1 className="mt-3 font-['Poppins'] text-4xl font-bold leading-tight text-[#075985] sm:text-5xl">O litoral é um sistema conectado</h1>
            <p className="mt-6 text-base leading-8 text-[#52758b]">
              O Planeta e Climas transforma informações sobre clima, território e meio ambiente em uma experiência educativa acessível.
            </p>
            <p className="mt-4 text-base leading-8 text-[#52758b]">
              A Página 2 amplia o olhar para outras cidades costeiras e mostra como decisões tomadas em cada território afetam encostas, rios, praias e o oceano.
            </p>
            <button type="button" onClick={() => navigate('/versao-2/problemas')} className="mt-8 rounded-xl bg-[#0284c7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(2,132,199,0.24)] transition hover:bg-[#0369a1]">
              Conhecer os desafios
            </button>
          </div>
          <div className="rounded-3xl bg-[#075985] p-8 text-white shadow-[0_20px_50px_rgba(7,89,133,0.18)] sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7dd3fc]">Nossa proposta</span>
            <div className="mt-7 space-y-6">
              {[
                ['Comparar', 'Observar semelhanças e diferenças entre cidades litorâneas.'],
                ['Compreender', 'Relacionar clima, relevo, urbanização e riscos ambientais.'],
                ['Agir', 'Apresentar soluções coletivas e atitudes possíveis no cotidiano.'],
              ].map(([title, text], index) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#38bdf8] text-sm font-bold">{index + 1}</span>
                  <div>
                    <h2 className="font-['Poppins'] font-bold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#bae6fd] bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
            {[
              ['4 cidades', 'apresentadas em páginas próprias'],
              ['6 desafios', 'ambientais explicados'],
              ['6 soluções', 'para ampliar a resiliência'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl bg-[#eefaff] p-6 text-center">
                <p className="font-['Poppins'] text-2xl font-bold text-[#0284c7]">{value}</p>
                <p className="mt-2 text-sm text-[#52758b]">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Version2Layout>
  );
}
