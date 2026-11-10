import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  createUser,
  editUser,
  getCurrentUser,
  getUsers,
  logoutUser,
  removeUser,
} from '../data/auth';
import { createItem, deleteItem, getItems, updateItem } from '../data/crudStore';

const inputClass =
  'h-11 w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] px-4 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10';

const MODULES = [
  { id: 'users', label: 'Usuários', singular: 'usuário' },
  { id: 'problems', label: 'Problemas', singular: 'problema' },
  { id: 'solutions', label: 'Soluções', singular: 'solução' },
];

function CrudGuide() {
  const actions = [
    ['C', 'Create', 'criar ou cadastrar'],
    ['R', 'Read', 'ler, listar ou consultar'],
    ['U', 'Update', 'atualizar ou editar'],
    ['D', 'Delete', 'excluir'],
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {actions.map(([letter, title, description]) => (
        <div key={letter} className="rounded-xl border border-white/10 bg-white/10 p-3">
          <span className="text-lg font-bold text-[#25A9F5]">{letter}</span>
          <p className="text-xs font-bold text-white">{title}</p>
          <p className="mt-1 text-xs text-white/60">{description}</p>
        </div>
      ))}
    </div>
  );
}

function EmptyState({ label }) {
  return (
    <div className="rounded-xl border border-dashed border-[#b9cde0] px-5 py-10 text-center text-sm text-[#60738c]">
      Nenhum {label} cadastrado.
    </div>
  );
}

function CrudModule({ type, singular }) {
  const [items, setItems] = useState(() =>
    type === 'users' ? getUsers() : getItems(type),
  );
  const [editing, setEditing] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const refresh = () =>
    setItems(type === 'users' ? getUsers() : getItems(type));

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
    setFeedback('');
  };

  const openEdit = (item) => {
    setEditing(item);
    setFormOpen(true);
    setFeedback('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      if (type === 'users') {
        const values = {
          name: String(data.get('name')),
          email: String(data.get('email')),
          password: String(data.get('password')),
        };
        if (editing) editUser(editing.id, values);
        else createUser(values);
      } else {
        const values = {
          title: String(data.get('title')),
          category: String(data.get('category')),
          description: String(data.get('description')),
        };
        if (editing) updateItem(type, editing.id, values);
        else createItem(type, values);
      }
      refresh();
      setFormOpen(false);
      setEditing(null);
      setFeedback(`${singular[0].toUpperCase()}${singular.slice(1)} ${editing ? 'atualizado' : 'cadastrado'} com sucesso.`);
    } catch (error) {
      setFeedback(error.message);
    }
  };

  const handleDelete = (item) => {
    if (!window.confirm(`Deseja excluir “${item.name || item.title}”?`)) return;
    try {
      if (type === 'users') removeUser(item.id);
      else deleteItem(type, item.id);
      refresh();
      setFeedback(`${singular[0].toUpperCase()}${singular.slice(1)} excluído com sucesso.`);
    } catch (error) {
      setFeedback(error.message);
    }
  };

  return (
    <section className="rounded-2xl border border-[#d9e5f0] bg-white p-5 shadow-[0_12px_35px_rgba(6,43,85,0.08)] sm:p-7">
      <div className="flex flex-col gap-4 border-b border-[#e4edf5] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#1677E8]">Create</p>
          <h2 className="mt-1 font-['Poppins'] text-xl font-bold text-[#062B55]">
            Cadastrar {singular}
          </h2>
        </div>
        <button type="button" onClick={openCreate} className="h-11 rounded-xl bg-[#1677E8] px-5 text-sm font-bold text-white transition hover:bg-[#0f65ca]">
          Novo cadastro
        </button>
      </div>

      {formOpen && (
        <form onSubmit={handleSubmit} className="mt-5 rounded-2xl bg-[#f0f6ff] p-5">
          <h3 className="font-['Poppins'] font-bold text-[#062B55]">
            {editing ? `Editar ${singular}` : `Novo ${singular}`}
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {type === 'users' ? (
              <>
                <input name="name" required defaultValue={editing?.name || ''} placeholder="Nome completo" aria-label="Nome completo" className={inputClass} />
                <input name="email" type="email" required defaultValue={editing?.email || ''} placeholder="E-mail" aria-label="E-mail" className={inputClass} />
                <input name="password" type="password" required={!editing} minLength={6} placeholder={editing ? 'Nova senha (opcional)' : 'Senha'} aria-label="Senha" className={`${inputClass} md:col-span-2`} />
              </>
            ) : (
              <>
                <input name="title" required defaultValue={editing?.title || ''} placeholder="Título" aria-label="Título" className={inputClass} />
                <input name="category" required defaultValue={editing?.category || ''} placeholder="Categoria" aria-label="Categoria" className={inputClass} />
                <textarea name="description" required defaultValue={editing?.description || ''} placeholder="Descrição" aria-label="Descrição" rows="3" className="w-full rounded-xl border border-[#cbd9e8] bg-[#f8fbff] px-4 py-3 text-sm text-[#062B55] outline-none transition focus:border-[#1677E8] focus:ring-4 focus:ring-[#1677E8]/10 md:col-span-2" />
              </>
            )}
          </div>
          <div className="mt-4 flex gap-3">
            <button type="submit" className="h-10 rounded-xl bg-[#1677E8] px-5 text-sm font-bold text-white">
              {editing ? 'Salvar edição' : 'Cadastrar'}
            </button>
            <button type="button" onClick={() => setFormOpen(false)} className="h-10 rounded-xl border border-[#cbd9e8] px-5 text-sm font-semibold text-[#60738c]">
              Cancelar
            </button>
          </div>
        </form>
      )}

      {feedback && <div role="status" className="mt-4 rounded-xl bg-[#eef6ff] px-4 py-3 text-sm text-[#173f68]">{feedback}</div>}

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#1677E8]">Read</p>
          <h3 className="font-['Poppins'] font-bold text-[#062B55]">Lista de registros</h3>
        </div>
        <span className="rounded-full bg-[#e8f3ff] px-3 py-1 text-xs font-bold text-[#1677E8]">{items.length} itens</span>
      </div>

      <div className="mt-4 space-y-3">
        {items.length === 0 ? (
          <EmptyState label={singular} />
        ) : (
          items.map((item) => (
            <article key={item.id} className="flex flex-col gap-4 rounded-xl border border-[#e0eaf3] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h4 className="truncate font-semibold text-[#062B55]">{item.name || item.title}</h4>
                <p className="mt-1 truncate text-xs text-[#60738c]">{item.email || item.category}</p>
                {item.description && <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#60738c]">{item.description}</p>}
              </div>
              <div className="flex flex-shrink-0 gap-2">
                <button type="button" onClick={() => openEdit(item)} className="rounded-lg border border-[#1677E8] px-3 py-2 text-xs font-bold text-[#1677E8]">
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(item)} className="rounded-lg border border-[#fecaca] px-3 py-2 text-xs font-bold text-[#b42318]">
                  Excluir
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default function Conta() {
  const navigate = useNavigate();
  const [user] = useState(() => getCurrentUser());
  const [activeModule, setActiveModule] = useState('users');

  useEffect(() => {
    if (!user) navigate('/login', { replace: true });
  }, [navigate, user]);

  if (!user) return null;
  const module = MODULES.find((item) => item.id === activeModule);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f0f6ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-[#062B55] p-7 shadow-[0_20px_55px_rgba(6,43,85,0.16)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm font-semibold text-[#25A9F5]">Painel administrativo</span>
              <h1 className="mt-2 font-['Poppins'] text-3xl font-bold text-white sm:text-4xl">Gerenciamento CRUD</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Olá, {user.name}. Cadastre, consulte, edite e exclua os registros do site.
              </p>
            </div>
            <button type="button" onClick={handleLogout} className="h-11 rounded-xl border border-white/20 px-5 text-sm font-bold text-white transition hover:bg-white/10">
              Sair da conta
            </button>
          </div>
          <div className="mt-8">
            <CrudGuide />
          </div>
        </div>

        <nav aria-label="Módulos CRUD" className="my-6 grid grid-cols-3 gap-2 rounded-2xl bg-white p-2 shadow-[0_8px_25px_rgba(6,43,85,0.07)]">
          {MODULES.map((item) => (
            <button key={item.id} type="button" onClick={() => setActiveModule(item.id)} className={`rounded-xl px-3 py-3 text-sm font-bold transition ${activeModule === item.id ? 'bg-[#1677E8] text-white' : 'text-[#60738c] hover:bg-[#eef6ff]'}`}>
              CRUD {item.label}
            </button>
          ))}
        </nav>

        <CrudModule key={module.id} type={module.id} singular={module.singular} />
      </div>
    </main>
  );
}
