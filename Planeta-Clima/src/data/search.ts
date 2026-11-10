import { PROBLEMS } from './problems';
import { SOLUCOES } from '../pages/Solucoes';

export interface SearchResult {
  title: string;
  path: string;
  category: string;
  description: string;
  keywords: string;
  score: number;
}

const SITE_PAGES = [
  {
    title: 'Página inicial',
    path: '/',
    category: 'Página',
    description: 'Uma visão geral do clima de Caraguatatuba e dos principais desafios ambientais do litoral.',
    keywords: 'início clima tempo caraguatatuba litoral norte serra do mar oceano atlântico educação ambiental riscos natureza',
  },
  {
    title: 'Climas',
    path: '/climas',
    category: 'Página',
    description: 'Conheça as características do clima litorâneo, as estações e os fenômenos que afetam a região.',
    keywords: 'climas clima tempo meteorologia temperatura chuva umidade verão inverno previsão efeito orográfico frentes frias atlânticas zcas zona de convergência precipitação',
  },
  {
    title: 'Problemas ambientais',
    path: '/problemas',
    category: 'Página',
    description: 'Explore os riscos e problemas ambientais que afetam Caraguatatuba e o Litoral Norte.',
    keywords: 'problemas riscos ambientais desastres enchentes alagamentos erosão poluição deslizamentos desmatamento ressacas mar eventos extremos defesa civil',
  },
  {
    title: 'Soluções',
    path: '/solucoes',
    category: 'Página',
    description: 'Descubra ações individuais e coletivas para proteger a cidade, a serra e o oceano.',
    keywords: 'soluções prevenção sustentabilidade ações proteção ambiente reflorestamento drenagem saneamento energia renovável alerta precoce planejamento recifes praias',
  },
  {
    title: 'Áreas afetadas',
    path: '/areas-afetadas',
    category: 'Página',
    description: 'Conheça municípios próximos e regiões de Caraguatatuba expostas a chuvas, deslizamentos, enchentes e ressacas.',
    keywords: 'áreas afetadas regiões bairros municípios vizinhos ubatuba são sebastião ilhabela paraibuna massaguaçu tabatinga martim de sá indaiá porto novo juqueriquerê mapa risco',
  },
  {
    title: 'Sobre Caraguatatuba',
    path: '/sobre',
    category: 'Página',
    description: 'História, geografia, ecossistemas e dados sobre Caraguatatuba.',
    keywords: 'sobre cidade história praias ecossistemas mata atlântica caraguatatuba população território litoral manguezal restinga biodiversidade turismo',
  },
];

const SYNONYM_GROUPS = [
  ['clima', 'tempo', 'meteorologia', 'temperatura'],
  ['chuva', 'temporal', 'tempestade', 'precipitacao'],
  ['enchente', 'alagamento', 'inundacao', 'transbordamento'],
  ['deslizamento', 'desmoronamento', 'encosta', 'queda de barreira'],
  ['mar', 'oceano', 'litoral', 'costa', 'praia'],
  ['ressaca', 'onda', 'mare', 'avanco do mar'],
  ['poluicao', 'lixo', 'residuo', 'plastico', 'esgoto', 'contaminacao'],
  ['mata', 'floresta', 'vegetacao', 'mata atlantica'],
  ['desmatamento', 'corte de arvores', 'degradacao florestal'],
  ['solucao', 'prevencao', 'protecao', 'acao', 'sustentabilidade'],
  ['caraguatatuba', 'caragua', 'litoral norte'],
];

const STOP_WORDS = new Set(['a', 'as', 'e', 'o', 'os', 'de', 'da', 'das', 'do', 'dos', 'em', 'no', 'na', 'para', 'por', 'um', 'uma']);

export const POPULAR_SEARCHES = ['chuvas', 'deslizamentos', 'praias', 'poluição', 'Mata Atlântica', 'soluções'];

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      previous = current;
    }
  }

  return row[b.length];
}

function variantsFor(term: string) {
  const variants = new Set([term]);
  SYNONYM_GROUPS.forEach((group) => {
    if (group.some((word) => word.includes(term) || term.includes(word))) {
      group.forEach((word) => variants.add(word));
    }
  });
  return [...variants];
}

function fieldMatchScore(field: string, variants: string[], weight: number) {
  const words = field.split(/[^a-z0-9]+/).filter(Boolean);
  let best = 0;

  variants.forEach((variant) => {
    if (field.includes(variant)) {
      best = Math.max(best, weight);
      return;
    }

    if (variant.length >= 3 && words.some((word) => word.startsWith(variant) || variant.startsWith(word))) {
      best = Math.max(best, weight * 0.75);
      return;
    }

    if (
      variant.length >= 4 &&
      words.some((word) => Math.abs(word.length - variant.length) <= 1 && editDistance(word, variant) <= 1)
    ) {
      best = Math.max(best, weight * 0.55);
    }
  });

  return best;
}

export function searchSite(query: string): SearchResult[] {
  const normalizedQuery = normalize(query.trim());
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const terms = queryWords.filter((term) => !STOP_WORDS.has(term));
  const effectiveTerms = terms.length ? terms : queryWords;

  if (!effectiveTerms.length) return [];

  const problemPages = PROBLEMS.map((problem) => ({
    title: problem.title,
    path: `/problema/${problem.id}`,
    category: 'Problema ambiental',
    description: problem.shortText,
    keywords: [
      problem.title,
      problem.shortText,
      ...problem.sections.map((section) => `${section.heading} ${section.body}`),
      ...problem.tips,
    ].join(' '),
  }));

  const solutionPages = SOLUCOES.map((solution) => ({
    title: solution.title,
    path: `/solucoes#solucao-${solution.id}`,
    category: 'Solução',
    description: solution.desc,
    keywords: [solution.tag, solution.title, solution.desc, ...solution.actions].join(' '),
  }));

  return [...SITE_PAGES, ...problemPages, ...solutionPages]
    .map((item) => {
      const title = normalize(item.title);
      const description = normalize(item.description);
      const keywords = normalize(item.keywords);
      let score = 0;
      let matchedTerms = 0;

      if (title.includes(normalizedQuery)) score += 45;
      if (description.includes(normalizedQuery)) score += 20;

      effectiveTerms.forEach((term) => {
        const variants = variantsFor(term);
        const termScore = Math.max(
          fieldMatchScore(title, variants, 14),
          fieldMatchScore(description, variants, 7),
          fieldMatchScore(keywords, variants, 4),
        );

        if (termScore > 0) {
          matchedTerms += 1;
          score += termScore;
        }
      });

      score += matchedTerms * 3;
      if (matchedTerms === effectiveTerms.length && effectiveTerms.length > 1) score += 12;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
