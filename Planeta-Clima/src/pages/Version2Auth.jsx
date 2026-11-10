import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { loginUser, registerUser } from '../data/auth';
import Version2Layout from '../components/Version2Layout';

function AuthLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#E0F5FF" />
      <circle cx="24" cy="24" r="22" stroke="#38BDF8" strokeWidth="2" />
      <path d="M4 28 13 17l6 7 7-12 8 13 5-6 5 8v8H4v-7Z" fill="#0B6FA4" />
      <path d="M3 33c7-3 11 3 18 0s11 3 18 0c2-.8 4-.5 6 0v11H3V33Z" fill="#38BDF8" />
      <path d="M4 38c6-2.5 11 2.5 17 0s11 2.5 17 0c2-.8 4-.6 6 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Version2Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegister = location.pathname.endsWith('/criar-conta');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get('password'));

    try {
      if (isRegister) {
        if (password !== String(data.get('passwordConfirmation'))) {
          throw new Error('As senhas informadas não são iguais.');
        }
        registerUser({
          name: String(data.get('name')),
          email: String(data.get('email')),
          password,
        });
      } else {
        loginUser(String(data.get('email')), password);
      }

      const destination = location.state?.from?.startsWith('/versao-2')
        ? location.state.from
        : '/versao-2';
      navigate(destination, { replace: true });
    } catch (authError) {
      setError(authError.message);
    }
  };

  const switchMode = () => {
    setError('');
    navigate(isRegister ? '/versao-2/login' : '/versao-2/criar-conta', {
      state: location.state,
    });
  };

  return (
    <Version2Layout>
      <main className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-[#eefaff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-[#38bdf8]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-4 h-96 w-96 rounded-full bg-[#0284c7]/12 blur-3xl" />

        <div className="relative mx-auto grid min-h-[680px] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(7,89,133,0.15)] lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative hidden overflow-hidden bg-[#075985] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/15" />
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-white/15" />
            <svg viewBox="0 0 600 260" preserveAspectRatio="none" className="absolute bottom-0 h-64 w-full" aria-hidden="true">
              <path d="M0 90c105-58 158 50 270 0s182 48 330-13v183H0V90Z" fill="#0ea5e9" opacity=".45" />
              <path d="M0 160c100-45 170 45 285 0s198 42 315-8v108H0V160Z" fill="#38bdf8" opacity=".55" />
            </svg>
          </div>
          <button type="button" onClick={() => navigate('/versao-2')} className="relative z-10 flex w-fit items-center gap-3 text-left">
            <AuthLogo />
            <span>
              <span className="block font-['Poppins'] text-xl font-bold">Planeta e Climas</span>
              <span className="text-xs font-semibold text-[#7dd3fc]">Página 2</span>
            </span>
          </button>
          <div className="relative z-10 mb-28 max-w-md">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">Cidades conectadas</span>
            <h1 className="mt-4 font-['Poppins'] text-4xl font-bold leading-tight">
              Explore o litoral com informação e consciência.
            </h1>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Entre para comparar cidades, compreender desafios ambientais e conhecer soluções para territórios costeiros.
            </p>
          </div>
        </section>

        <section className="flex items-center px-6 py-10 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <button type="button" onClick={() => navigate('/versao-2')} className="mb-9 flex items-center gap-3 text-left lg:hidden">
              <AuthLogo />
              <span className="font-['Poppins'] font-bold text-[#075985]">Planeta e Climas</span>
            </button>

            <span className="text-sm font-bold text-[#0284c7]">{isRegister ? 'Novo cadastro' : 'Área de acesso'}</span>
            <h2 className="mt-2 font-['Poppins'] text-3xl font-bold text-[#075985]">
              {isRegister ? 'Crie sua conta' : 'Bem-vindo à Página 2'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#52758b]">
              {isRegister
                ? 'Preencha seus dados para começar a explorar o conteúdo.'
                : 'Faça login para acessar a página inicial e os conteúdos educativos.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {isRegister && (
                <div>
                  <label htmlFor="v2-name" className="mb-2 block text-sm font-semibold text-[#164e63]">Nome completo</label>
                  <input id="v2-name" name="name" type="text" required autoComplete="name" placeholder="Digite seu nome" className="h-13 w-full rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm text-[#075985] outline-none transition focus:border-[#0284c7] focus:ring-4 focus:ring-[#38bdf8]/15" />
                </div>
              )}
              <div>
                <label htmlFor="v2-email" className="mb-2 block text-sm font-semibold text-[#164e63]">E-mail</label>
                <input id="v2-email" name="email" type="email" required autoComplete="email" placeholder="seuemail@exemplo.com" className="h-13 w-full rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm text-[#075985] outline-none transition focus:border-[#0284c7] focus:ring-4 focus:ring-[#38bdf8]/15" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="v2-password" className="text-sm font-semibold text-[#164e63]">Senha</label>
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="text-xs font-bold text-[#0284c7] hover:underline">
                    {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  </button>
                </div>
                <input id="v2-password" name="password" type={showPassword ? 'text' : 'password'} required minLength={6} autoComplete={isRegister ? 'new-password' : 'current-password'} placeholder="Mínimo de 6 caracteres" className="h-13 w-full rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm text-[#075985] outline-none transition focus:border-[#0284c7] focus:ring-4 focus:ring-[#38bdf8]/15" />
              </div>
              {isRegister && (
                <div>
                  <label htmlFor="v2-password-confirmation" className="mb-2 block text-sm font-semibold text-[#164e63]">Confirmar senha</label>
                  <input id="v2-password-confirmation" name="passwordConfirmation" type={showPassword ? 'text' : 'password'} required minLength={6} autoComplete="new-password" placeholder="Repita sua senha" className="h-13 w-full rounded-xl border border-[#bae6fd] bg-[#f8fdff] px-4 text-sm text-[#075985] outline-none transition focus:border-[#0284c7] focus:ring-4 focus:ring-[#38bdf8]/15" />
                </div>
              )}

              {error && <div role="alert" className="rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#991b1b]">{error}</div>}

              <button type="submit" className="flex h-13 w-full items-center justify-center rounded-xl bg-[#0284c7] text-sm font-bold text-white shadow-[0_8px_24px_rgba(2,132,199,0.28)] transition hover:bg-[#0369a1] focus:ring-4 focus:ring-[#38bdf8]/20">
                {isRegister ? 'Criar conta e acessar' : 'Entrar na Página 2'}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#52758b]">
              {isRegister ? 'Já possui uma conta?' : 'Ainda não tem uma conta?'}{' '}
              <button type="button" onClick={switchMode} className="font-bold text-[#0284c7] hover:underline">
                {isRegister ? 'Fazer login' : 'Criar conta'}
              </button>
            </p>
          </div>
        </section>
        </div>
      </main>
    </Version2Layout>
  );
}
