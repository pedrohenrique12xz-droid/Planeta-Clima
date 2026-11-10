import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BrandIcon } from './Login';
import { registerUser } from '../data/auth';

export default function CriarConta() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get('password'));
    const confirmation = String(data.get('passwordConfirmation'));

    if (password !== confirmation) {
      setError('As senhas informadas não são iguais.');
      return;
    }

    try {
      registerUser({
        name: String(data.get('name')),
        email: String(data.get('email')),
        password,
      });
      setError('');
      navigate('/conta');
    } catch (registrationError) {
      setError(registrationError.message);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f0f6ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="pointer-events-none absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-[#1677E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-[#25A9F5]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(6,43,85,0.14)] lg:grid-cols-[1.1fr_0.9fr]">
        <section className="flex min-h-[720px] items-center px-6 py-10 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mb-8 flex w-fit items-center gap-3 text-left lg:hidden"
              aria-label="Voltar para a página inicial"
            >
              <BrandIcon />
              <span className="font-['Poppins'] text-lg font-bold text-[#062B55]">
                Planeta <span className="text-[#1677E8]">e Climas</span>
              </span>
            </button>

            <div className="mb-7">
              <span className="text-sm font-semibold text-[#1677E8]">Novo cadastro</span>
              <h1 className="mt-2 font-['Poppins'] text-3xl font-bold text-[#062B55]">Crie sua conta</h1>
              <p className="mt-2 text-sm leading-6 text-[#60738c]">
                Cadastre-se para acessar conteúdos e acompanhar sua jornada de aprendizado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#173f68]">
                  Nome completo
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7890aa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Digite seu nome"
                    className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] pl-12 pr-4 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="register-email" className="mb-2 block text-sm font-semibold text-[#173f68]">
                  E-mail
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7890aa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="seuemail@exemplo.com"
                    className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] pl-12 pr-4 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="register-password" className="mb-2 block text-sm font-semibold text-[#173f68]">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      id="register-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      autoComplete="new-password"
                      placeholder="Mínimo 6 caracteres"
                      className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] px-4 pr-11 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7890aa] transition hover:text-[#1677E8]"
                      aria-label={showPassword ? 'Ocultar senhas' : 'Mostrar senhas'}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="password-confirmation" className="mb-2 block text-sm font-semibold text-[#173f68]">
                    Confirmar senha
                  </label>
                  <input
                    id="password-confirmation"
                    name="passwordConfirmation"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder="Repita a senha"
                    className="h-13 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] px-4 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10"
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm leading-6 text-[#60738c]">
                <input type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 rounded border-[#cbd9e8] accent-[#1677E8]" />
                <span>
                  Li e concordo com os <button type="button" className="font-semibold text-[#1677E8] hover:underline">termos de uso</button> e a política de privacidade.
                </span>
              </label>

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#1677E8] text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,119,232,0.28)] transition hover:bg-[#0f65ca] focus:outline-none focus:ring-4 focus:ring-[#1677E8]/20 active:scale-[0.99]"
              >
                Criar minha conta
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

            <p className="mt-7 text-center text-sm text-[#60738c]">
              Já possui uma conta?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="font-semibold text-[#1677E8] hover:underline"
              >
                Fazer login
              </button>
            </p>
          </div>
        </section>

        <section className="relative hidden min-h-[720px] overflow-hidden bg-[#062B55] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-[#25A9F5]/20" />
            <div className="absolute -left-8 -top-8 h-52 w-52 rounded-full border border-[#25A9F5]/25" />
            <svg viewBox="0 0 440 280" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 96c70-45 121 35 196-2s137 46 244-12v198H0V96Z" fill="#1677E8" opacity=".42" />
              <path d="M0 155c79-38 139 33 220-3s141 43 220-5v133H0V155Z" fill="#25A9F5" opacity=".48" />
              <path d="M0 216c75-31 137 25 216-5s145 30 224-4v73H0v-64Z" fill="#25A9F5" opacity=".3" />
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

          <div className="relative z-10 mb-28">
            <span className="mb-5 inline-flex rounded-full border border-[#25A9F5]/30 bg-[#25A9F5]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#25A9F5]">
              Faça parte
            </span>
            <h2 className="max-w-sm font-['Poppins'] text-4xl font-bold leading-tight">
              Informação transforma. Participação protege.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Crie seu acesso e descubra como pequenas ações podem fortalecer a resiliência ambiental de Caraguatatuba.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
