import { VERSION_2_CITIES } from './version2Cities';
import { TOURISM_PLACES } from './version2Tourism';

export const VERSION_2_PROBLEMS = [
  {
    id: 'chuvas-deslizamentos',
    title: 'Chuvas intensas e deslizamentos',
    eyebrow: 'Encostas',
    description:
      'A combinação entre relevo íngreme, solo encharcado e ocupação de áreas vulneráveis aumenta o risco de movimentos de massa.',
    cities: 'Ubatuba, Caraguatatuba e Rio de Janeiro',
  },
  {
    id: 'alagamentos',
    title: 'Alagamentos e drenagem urbana',
    eyebrow: 'Cidades',
    description:
      'Chuvas concentradas, impermeabilização do solo e marés elevadas dificultam o escoamento da água em áreas urbanizadas.',
    cities: 'Santos, Caraguatatuba e Ubatuba',
  },
  {
    id: 'erosao-costeira',
    title: 'Erosão costeira e avanço do mar',
    eyebrow: 'Orla',
    description:
      'Ressacas, ocupação da faixa de areia e elevação do nível do oceano transformam praias e ameaçam estruturas próximas.',
    cities: 'Santos, Ilhabela e Caraguatatuba',
  },
  {
    id: 'poluicao-marinha',
    title: 'Poluição marinha e saneamento',
    eyebrow: 'Oceano',
    description:
      'O crescimento populacional e turístico pressiona redes de coleta, rios, praias, baías e ecossistemas costeiros.',
    cities: 'Todas as cidades pesquisadas',
  },
  {
    id: 'calor-urbano',
    title: 'Ondas de calor e ilhas térmicas',
    eyebrow: 'Temperatura',
    description:
      'Áreas densas e com pouca vegetação retêm calor, elevando o desconforto térmico e os riscos para a saúde.',
    cities: 'Santos e Rio de Janeiro',
  },
  {
    id: 'pressao-ecossistemas',
    title: 'Pressão sobre ecossistemas',
    eyebrow: 'Biodiversidade',
    description:
      'Expansão urbana, turismo e descarte inadequado ameaçam a Mata Atlântica, manguezais e ambientes marinhos.',
    cities: 'Ubatuba, Ilhabela e Caraguatatuba',
  },
];

export const VERSION_2_SOLUTIONS = [
  {
    id: 'alerta-prevencao',
    title: 'Monitoramento e alerta antecipado',
    description:
      'Integrar previsão meteorológica, sensores, sirenes e comunicação comunitária para agir antes de eventos extremos.',
    action: 'Acompanhar alertas oficiais e conhecer as rotas seguras do bairro.',
  },
  {
    id: 'infraestrutura-verde',
    title: 'Infraestrutura verde e drenagem',
    description:
      'Ampliar áreas permeáveis, jardins de chuva, parques lineares e sistemas de drenagem adaptados às marés.',
    action: 'Preservar áreas vegetadas e nunca descartar resíduos em bueiros e rios.',
  },
  {
    id: 'encostas-seguras',
    title: 'Proteção de encostas',
    description:
      'Combinar fiscalização, recuperação vegetal, obras de contenção e moradia segura fora das zonas de risco.',
    action: 'Observar rachaduras, inclinação de árvores e mudanças no fluxo de água.',
  },
  {
    id: 'saneamento',
    title: 'Saneamento e oceano limpo',
    description:
      'Universalizar coleta e tratamento de esgoto, reduzir plásticos e monitorar a qualidade de rios e praias.',
    action: 'Reduzir descartáveis e comunicar vazamentos ou descarte irregular.',
  },
  {
    id: 'educacao-climatica',
    title: 'Educação climática comunitária',
    description:
      'Levar conhecimento local para escolas, associações e visitantes, fortalecendo uma cultura permanente de prevenção.',
    action: 'Compartilhar informações verificadas e participar das ações do território.',
  },
  {
    id: 'planejamento-costeiro',
    title: 'Planejamento costeiro integrado',
    description:
      'Planejar ocupação, mobilidade e turismo considerando bacias hidrográficas, encostas e dinâmica do oceano.',
    action: 'Acompanhar planos municipais e participar de consultas públicas.',
  },
];

const STATIC_SEARCH_ITEMS = [
  {
    title: 'Sobre o Planeta e Climas',
    category: 'Sobre',
    description: 'Conheça a proposta educativa e a conexão entre as cidades costeiras.',
    path: '/versao-2/sobre',
  },
  ...VERSION_2_PROBLEMS.map((problem) => ({
    title: problem.title,
    category: 'Problema ambiental',
    description: `${problem.description} Cidades relacionadas: ${problem.cities}.`,
    path: `/versao-2/problemas#${problem.id}`,
  })),
  ...VERSION_2_SOLUTIONS.map((solution) => ({
    title: solution.title,
    category: 'Solução',
    description: `${solution.description} ${solution.action}`,
    path: `/versao-2/solucoes#${solution.id}`,
  })),
  ...VERSION_2_CITIES.map((city) => ({
    title: city.name,
    category: 'Cidade',
    description: `${city.summary} ${city.climate} ${city.challenges.join(' ')}.`,
    path: `/versao-2/cidade/${city.id}`,
  })),
  ...TOURISM_PLACES.map((place) => ({
    title: place.name,
    category: `${place.category} em ${place.city}`,
    description: `${place.description} ${place.address} ${place.contact}.`,
    path: `/versao-2/turismo#${place.id}`,
  })),
];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export const VERSION_2_POPULAR_SEARCHES = ['deslizamentos', 'saneamento', 'erosão', 'Ubatuba'];

export function searchVersion2(query) {
  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return STATIC_SEARCH_ITEMS.filter((item) => {
    const searchable = normalize(`${item.title} ${item.category} ${item.description}`);
    return terms.every((term) => searchable.includes(term));
  });
}
