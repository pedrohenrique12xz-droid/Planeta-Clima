import { PROBLEMS } from './problems';
import { SOLUCOES } from '../pages/Solucoes';

const PROBLEMS_KEY = 'planeta-e-climas-crud-problems';
const SOLUTIONS_KEY = 'planeta-e-climas-crud-solutions';

function read(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

const initialProblems = PROBLEMS.map((problem) => ({
  id: problem.id,
  title: problem.title,
  category: 'Problema ambiental',
  description: problem.shortText,
}));

const initialSolutions = SOLUCOES.map((solution) => ({
  id: String(solution.id),
  title: solution.title,
  category: solution.tag,
  description: solution.desc,
}));

const config = {
  problems: { key: PROBLEMS_KEY, initial: initialProblems },
  solutions: { key: SOLUTIONS_KEY, initial: initialSolutions },
};

export function getItems(type) {
  const collection = config[type];
  return read(collection.key, collection.initial);
}

export function createItem(type, data) {
  const collection = config[type];
  const item = { ...data, id: crypto.randomUUID() };
  write(collection.key, [...getItems(type), item]);
  return item;
}

export function updateItem(type, id, data) {
  const collection = config[type];
  write(
    collection.key,
    getItems(type).map((item) => (item.id === id ? { ...item, ...data } : item)),
  );
}

export function deleteItem(type, id) {
  const collection = config[type];
  write(
    collection.key,
    getItems(type).filter((item) => item.id !== id),
  );
}
