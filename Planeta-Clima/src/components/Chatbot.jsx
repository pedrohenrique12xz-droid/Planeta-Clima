import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { searchSite } from '../data/search';

const QUICK_QUESTIONS = [
  'Quais são as áreas afetadas?',
  'Como agir em uma enchente?',
  'Quais são as soluções?',
];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'bot',
      text: 'Olá. Sou o assistente do Planeta e Climas. Posso ajudar você a encontrar informações sobre riscos ambientais, regiões afetadas e formas de prevenção.',
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const createResponse = (question) => {
    const normalized = normalize(question);
    const emergencyTerms = ['emergencia', 'socorro', 'deslizamento agora', 'enchente agora', 'alagado', 'perigo'];

    if (emergencyTerms.some((term) => normalized.includes(term))) {
      return {
        id: Date.now() + 1,
        author: 'bot',
        text: 'Se houver risco imediato, saia da área com segurança e ligue para a Defesa Civil no 199 ou para os Bombeiros no 193. Não atravesse áreas alagadas e mantenha distância de encostas.',
        links: searchSite('prevenção áreas afetadas').slice(0, 2),
      };
    }

    if (normalized.includes('ola') || normalized.includes('oi') || normalized.includes('bom dia') || normalized.includes('boa tarde')) {
      return {
        id: Date.now() + 1,
        author: 'bot',
        text: 'Olá. Você pode perguntar sobre chuvas, enchentes, deslizamentos, praias, áreas afetadas ou soluções ambientais.',
      };
    }

    const results = searchSite(question).slice(0, 3);

    if (results.length) {
      return {
        id: Date.now() + 1,
        author: 'bot',
        text: results.length === 1
          ? 'Encontrei um conteúdo que pode responder à sua pergunta:'
          : 'Encontrei alguns conteúdos relacionados à sua pergunta:',
        links: results,
      };
    }

    return {
      id: Date.now() + 1,
      author: 'bot',
      text: 'Não encontrei uma resposta específica. Tente usar termos como chuva, enchente, deslizamento, poluição, áreas afetadas ou soluções.',
    };
  };

  const sendMessage = (text) => {
    const question = text.trim();
    if (!question) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), author: 'user', text: question },
      createResponse(question),
    ]);
    setInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  const openLink = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="no-print fixed bottom-5 right-4 z-[70] sm:bottom-6 sm:right-6">
      {open && (
        <section
          role="dialog"
          aria-label="Assistente virtual do Planeta e Climas"
          className="mb-3 flex h-[min(620px,calc(100vh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-[#d6e3ef] bg-white shadow-[0_24px_70px_rgba(6,43,85,0.28)] sm:w-[390px]"
        >
          <header className="flex items-center justify-between bg-[#062B55] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1677E8] text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M7 18.5h10.5a4.5 4.5 0 0 0 .7-8.94A6.5 6.5 0 0 0 5.85 8.4 5 5 0 0 0 7 18.5Z" />
                </svg>
              </span>
              <div>
                <h2 className="font-['Poppins'] text-sm font-bold text-white">Assistente Planeta e Climas</h2>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
                  <span className="text-xs text-white/60">Assistente educativo</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Fechar assistente"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#f4f8fc] px-4 py-5">
            <div className="space-y-4" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] ${message.author === 'user' ? '' : 'flex gap-2.5'}`}>
                    {message.author === 'bot' && (
                      <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#dceeff] text-[#1677E8]">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path d="M12 2v3M8 2h8M5 9a7 7 0 0 1 14 0v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Z" />
                          <path d="M9 12h.01M15 12h.01M9 16h6" />
                        </svg>
                      </span>
                    )}
                    <div>
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                          message.author === 'user'
                            ? 'rounded-br-md bg-[#1677E8] text-white'
                            : 'rounded-bl-md border border-[#dce7f1] bg-white text-[#3f5872] shadow-sm'
                        }`}
                      >
                        {message.text}
                      </div>

                      {message.links && message.links.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {message.links.map((link) => (
                            <button
                              key={link.path}
                              type="button"
                              onClick={() => openLink(link.path)}
                              className="flex w-full items-center justify-between gap-3 rounded-xl border border-[#d7e5f2] bg-white px-3 py-2.5 text-left transition hover:border-[#1677E8]/40 hover:bg-[#f0f7ff]"
                            >
                              <span className="min-w-0">
                                <span className="block truncate text-xs font-bold text-[#062B55]">{link.title}</span>
                                <span className="mt-0.5 block text-[11px] text-[#7890aa]">{link.category}</span>
                              </span>
                              <svg className="h-4 w-4 flex-shrink-0 text-[#1677E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>

          {messages.length === 1 && (
            <div className="border-t border-[#e4edf5] bg-white px-4 py-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#7890aa]">Perguntas rápidas</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="rounded-full border border-[#cddfed] bg-[#f5faff] px-3 py-1.5 text-xs font-semibold text-[#1677E8] transition hover:border-[#1677E8]"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-[#e4edf5] bg-white p-3">
            <label htmlFor="chat-message" className="sr-only">Digite sua pergunta</label>
            <textarea
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage(input);
                }
              }}
              rows={1}
              placeholder="Digite sua pergunta..."
              className="max-h-24 min-h-11 flex-1 resize-none rounded-xl border border-[#cddbea] bg-[#f8fbff] px-4 py-3 text-sm text-[#062B55] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1677E8] text-white transition hover:bg-[#0f65ca] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Enviar mensagem"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
          <p className="bg-white px-4 pb-3 text-center text-[10px] leading-4 text-[#94a3b8]">
            Conteúdo educativo. Em emergências, ligue 199 ou 193.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`ml-auto flex items-center justify-center bg-[#1677E8] text-white shadow-[0_10px_30px_rgba(22,119,232,0.4)] transition hover:bg-[#0f65ca] hover:scale-105 ${
          open ? 'h-12 w-12 rounded-full' : 'h-14 gap-3 rounded-full px-5'
        }`}
        aria-label={open ? 'Fechar assistente virtual' : 'Abrir assistente virtual'}
        aria-expanded={open}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M7 18.5h10.5a4.5 4.5 0 0 0 .7-8.94A6.5 6.5 0 0 0 5.85 8.4 5 5 0 0 0 7 18.5Z" />
          )}
        </svg>
        {!open && <span className="text-sm font-bold">Posso ajudar?</span>}
      </button>
    </div>
  );
}
