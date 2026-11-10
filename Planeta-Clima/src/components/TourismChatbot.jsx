import { useEffect, useRef, useState } from 'react';
import { getTourismMapUrl, TOURISM_PLACES } from '../data/version2Tourism';

const QUICK_QUESTIONS = [
  'Onde ficar em Ubatuba?',
  'O que fazer em Ilhabela?',
  'Restaurantes em Caraguatatuba',
];

function createAnswer(question) {
  const normalized = question
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const cityNames = ['caraguatatuba', 'ubatuba', 'ilhabela', 'sao sebastiao'];
  const city = cityNames.find((name) => normalized.includes(name));
  const category =
    normalized.includes('ficar') || normalized.includes('hotel') || normalized.includes('pousada') || normalized.includes('hospedagem')
      ? 'Hospedagem'
      : normalized.includes('comer') || normalized.includes('restaurante') || normalized.includes('gastronomia')
      ? 'Gastronomia'
      : normalized.includes('fazer') || normalized.includes('passeio') || normalized.includes('lazer') || normalized.includes('praia')
      ? 'Lazer'
      : null;

  const results = TOURISM_PLACES.filter((place) => {
    const normalizedCity = place.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const matchesCity = !city || normalizedCity === city;
    const matchesCategory = !category || place.category === category;
    const content = `${place.name} ${place.description} ${place.tags.join(' ')}`
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    const matchesFreeText = city || category || normalized.split(/\s+/).some((term) => term.length > 3 && content.includes(term));
    return matchesCity && matchesCategory && matchesFreeText;
  }).slice(0, 3);

  return results.length
    ? {
        text: `Encontrei ${results.length === 1 ? 'uma opção' : 'estas opções'} no guia. Selecione um local para abrir a localização no mapa:`,
        places: results,
      }
    : {
        text: 'Não encontrei uma opção exata. Pergunte por hospedagem, restaurante ou lazer e informe Caraguatatuba, Ubatuba, Ilhabela ou São Sebastião.',
      };
}

export default function TourismChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'bot',
      text: 'Olá. Sou o assistente do Guia do Litoral Norte. Posso indicar hospedagens, gastronomia, lazer, endereços e localizações nas quatro cidades.',
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (value) => {
    const question = value.trim();
    if (!question) return;
    const response = createAnswer(question);
    setMessages((current) => [
      ...current,
      { id: Date.now(), author: 'user', text: question },
      { id: Date.now() + 1, author: 'bot', ...response },
    ]);
    setInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <aside className="overflow-hidden rounded-3xl border border-[#bae6fd] bg-white shadow-[0_18px_50px_rgba(7,89,133,0.13)] lg:sticky lg:top-24">
      <header className="bg-[#075985] px-5 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#38bdf8]">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 9a7 7 0 0 1 14 0v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Z" />
              <path d="M9 12h.01M15 12h.01M9 16h6M12 2v3" />
            </svg>
          </span>
          <div>
            <h2 className="font-['Poppins'] font-bold">Assistente de viagem</h2>
            <p className="mt-0.5 text-xs text-white/60">Informações do catálogo turístico</p>
          </div>
        </div>
      </header>

      <div className="h-[430px] overflow-y-auto bg-[#f5fbff] px-4 py-5" aria-live="polite">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[90%]">
                <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${message.author === 'user' ? 'rounded-br-md bg-[#0284c7] text-white' : 'rounded-bl-md border border-[#d8edf8] bg-white text-[#365e73]'}`}>
                  {message.text}
                </div>
                {message.places && (
                  <div className="mt-2 space-y-2">
                    {message.places.map((place) => (
                      <a key={place.id} href={getTourismMapUrl(place)} target="_blank" rel="noreferrer" className="block rounded-xl border border-[#bae6fd] bg-white p-3 transition hover:border-[#38bdf8]">
                        <span className="block text-xs font-bold text-[#075985]">{place.name}</span>
                        <span className="mt-1 block text-[11px] text-[#52758b]">{place.city} · {place.category}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </div>

      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2 border-t border-[#e0f2fe] px-4 py-3">
          {QUICK_QUESTIONS.map((question) => (
            <button key={question} type="button" onClick={() => sendMessage(question)} className="rounded-full border border-[#7dd3fc] bg-[#f0f9ff] px-3 py-1.5 text-xs font-semibold text-[#0369a1]">
              {question}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[#e0f2fe] bg-white p-3">
        <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder="Pergunte sobre sua viagem..." aria-label="Pergunta para o assistente turístico" className="min-w-0 flex-1 rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 py-3 text-sm text-[#075985] outline-none focus:border-[#0284c7]" />
        <button type="submit" className="rounded-xl bg-[#0284c7] px-4 text-sm font-bold text-white transition hover:bg-[#0369a1]" aria-label="Enviar pergunta">Enviar</button>
      </form>
    </aside>
  );
}
