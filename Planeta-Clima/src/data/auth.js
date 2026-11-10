const USERS_KEY = 'planeta-e-climas-users';
const SESSION_KEY = 'planeta-e-climas-session';
const AUTH_EVENT = 'planeta-auth-change';

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function notifyAuthChange() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function subscribeToAuth(callback) {
  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export function getCurrentUser() {
  const userId = localStorage.getItem(SESSION_KEY);
  if (!userId) return null;

  const user = readUsers().find((item) => item.id === userId);
  return user ? { id: user.id, name: user.name, email: user.email } : null;
}

export function registerUser({ name, email, password }) {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Já existe uma conta cadastrada com este e-mail.');
  }

  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  saveUsers([...users, user]);
  localStorage.setItem(SESSION_KEY, user.id);
  notifyAuthChange();
  return user;
}

export function getUsers() {
  return readUsers().map(({ password, ...user }) => user);
}

export function createUser({ name, email, password }) {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Já existe uma conta cadastrada com este e-mail.');
  }

  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  };
  saveUsers([...users, user]);
  notifyAuthChange();
  return user;
}

export function editUser(id, { name, email, password }) {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  if (users.some((user) => user.id !== id && user.email === normalizedEmail)) {
    throw new Error('Este e-mail já está sendo usado por outra conta.');
  }

  saveUsers(
    users.map((user) =>
      user.id === id
        ? {
            ...user,
            name: name.trim(),
            email: normalizedEmail,
            ...(password ? { password } : {}),
          }
        : user,
    ),
  );
  notifyAuthChange();
}

export function removeUser(id) {
  const currentUser = getCurrentUser();
  if (currentUser?.id === id) {
    throw new Error('Você não pode excluir a conta que está usando no momento.');
  }
  saveUsers(readUsers().filter((user) => user.id !== id));
  notifyAuthChange();
}

export function loginUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = readUsers().find(
    (item) => item.email === normalizedEmail && item.password === password,
  );

  if (!user) {
    throw new Error('E-mail ou senha incorretos. Verifique os dados e tente novamente.');
  }

  localStorage.setItem(SESSION_KEY, user.id);
  notifyAuthChange();
  return user;
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
  notifyAuthChange();
}

export function updateProfile({ name, email }) {
  const currentUser = getCurrentUser();
  if (!currentUser) throw new Error('Sua sessão expirou. Entre novamente.');

  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  if (users.some((user) => user.id !== currentUser.id && user.email === normalizedEmail)) {
    throw new Error('Este e-mail já está sendo usado por outra conta.');
  }

  const updatedUsers = users.map((user) =>
    user.id === currentUser.id
      ? { ...user, name: name.trim(), email: normalizedEmail }
      : user,
  );
  saveUsers(updatedUsers);
  notifyAuthChange();
}

export function updatePassword(currentPassword, newPassword) {
  const currentUser = getCurrentUser();
  if (!currentUser) throw new Error('Sua sessão expirou. Entre novamente.');

  const users = readUsers();
  const user = users.find((item) => item.id === currentUser.id);
  if (user.password !== currentPassword) {
    throw new Error('A senha atual está incorreta.');
  }

  saveUsers(
    users.map((item) =>
      item.id === currentUser.id ? { ...item, password: newPassword } : item,
    ),
  );
}

export function deleteAccount(password) {
  const currentUser = getCurrentUser();
  if (!currentUser) throw new Error('Sua sessão expirou. Entre novamente.');

  const users = readUsers();
  const user = users.find((item) => item.id === currentUser.id);
  if (user.password !== password) {
    throw new Error('Senha incorreta. A conta não foi excluída.');
  }

  saveUsers(users.filter((item) => item.id !== currentUser.id));
  logoutUser();
}
