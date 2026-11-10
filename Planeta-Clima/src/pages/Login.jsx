import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../data/auth';

export function BrandIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-13 w-13">
      <circle cx="26" cy="26" r="25" fill="#1677E8" />
      <path d="M1 31 11 17l7 8 8-13 9 14 6-8 10 12v11H1V31Z" fill="#062B55" opacity=".9" />
      <path d="M1 36c7-3 12 3 19 0s12 3 19 0 9 0 12 1v14H1V36Z" fill="#25A9F5" />
      <path d="M1 42c7-3 12 3 19 0s12 3 19 0 9 0 12 1" stroke="white" strokeOpacity=".55" strokeWidth="2" />
      <circle cx="26" cy="26" r="24.5" stroke="#25A9F5" />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      loginUser(String(data.get('email')), String(data.get('password')));
      setError('');
      navigate('/conta');
    } catch (loginError) {
      setError(loginError.message);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f0f6ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#25A9F5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-[#1677E8]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(6,43,85,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative hidden min-h-[650px] overflow-hidden bg-[#062B55] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#25A9F5]/20" />
            <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full border border-[#25A9F5]/25" />
            <svg viewBox="0 0 520 250" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 95c80-48 132 45 220 4s146 42 300-13v164H0V95Z" fill="#1677E8" opacity=".45" />
              <path d="M0 143c93-42 145 42 242 2s167 47 278-7v112H0V143Z" fill="#25A9F5" opacity=".48" />
              <path d="M0 190c78-33 146 28 228-4s169 34 292-5v69H0v-60Z" fill="#25A9F5" opacity=".35" />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="relative z-10 flex w-fit items-center gap-3 text-left"
            aria-label="Voltar para a página inicial"
          >
            <BrandIcon />
            <span className="font-['Poppins'] text-xl font-bold">
              Planeta <span className="text-[#25A9F5]">e Climas</span>
            </span>
          </button>

          <div className="relative z-10 mb-24">
            <span className="mb-5 inline-flex rounded-full border border-[#25A9F5]/30 bg-[#25A9F5]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#25A9F5]">
              Conhecimento que protege
            </span>
            <h1 className="max-w-sm font-['Poppins'] text-4xl font-bold leading-tight">
              Entenda o clima. Cuide do seu território.
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Acesse conteúdos educativos sobre o litoral de Caraguatatuba e acompanhe os riscos ambientais da região.
            </p>
          </div>
        </section>

        <section className="flex min-h-[620px] items-center px-6 py-10 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <BrandIcon />
              <span className="font-['Poppins'] text-lg font-bold text-[#062B55]">
                Planeta <span className="text-[#1677E8]">e Climas</span>
              </span>
            </div>

            <div className="mb-8">
              <span className="text-sm font-semibold text-[#1677E8]">Área de acesso</span>
              <h2 className="mt-2 font-['Poppins'] text-3xl font-bold text-[#062B55]">Bem-vindo de volta</h2>
              <p className="mt-2 text-sm leading-6 text-[#60738c]">
                Entre com seus dados para continuar sua jornada de aprendizado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#173f68]">
                  E-mail
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7890aa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="seuemail@exemplo.com"
                    className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] pl-12 pr-4 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-[#173f68]">
                    Senha
                  </label>
                  <button type="button" className="text-xs font-semibold text-[#1677E8] hover:underline">
                    Esqueci minha senha
                  </button>
                </div>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7890aa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                    className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] pl-12 pr-12 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7890aa] transition hover:text-[#1677E8]"
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      {showPassword ? (
                        <>
                          <path d="M3 3l18 18" />
                          <path d="M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 4.2A10.7 10.7 0 0 1 12 4c5.5 0 9 6 9 6a17.5 17.5 0 0 1-2.1 2.8M6.6 6.6C4.4 8.1 3 10 3 10s3.5 6 9 6c1.3 0 2.5-.3 3.6-.8" />
                        </>
                      ) : (
                        <>
                          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                          <circle cx="12" cy="12" r="2.5" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#60738c]">
                <input type="checkbox" className="h-4 w-4 rounded border-[#cbd9e8] accent-[#1677E8]" />
                Lembrar meus dados neste dispositivo
              </label>

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#1677E8] text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,119,232,0.28)] transition hover:bg-[#0f65ca] focus:outline-none focus:ring-4 focus:ring-[#1677E8]/20 active:scale-[0.99]"
              >
                Entrar
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              {error && (
                <div role="alert" className="rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#991b1b]">
                  {error}
                </div>
              )}
            </form>

            <p className="mt-8 text-center text-sm text-[#60738c]">
              Ainda não tem uma conta?{' '}
              <button
                type="button"
                onClick={() => navigate('/criar-conta')}
                className="font-semibold text-[#1677E8] hover:underline"
              >
                Criar conta
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
