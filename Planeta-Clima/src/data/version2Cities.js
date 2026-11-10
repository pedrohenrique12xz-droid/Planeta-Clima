export const VERSION_2_CITIES = [
  {
    id: 'ubatuba',
    name: 'Ubatuba',
    state: 'São Paulo',
    distance: '55 km',
    proximity: 'Cidade próxima',
    image:
      'https://images.unsplash.com/photo-1717351854801-59f13b1c2ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    alt: 'Costa rochosa e mar em Ubatuba',
    summary:
      'Ao norte de Caraguatatuba, Ubatuba combina Mata Atlântica preservada, muitas praias e uma das maiores médias de chuva do Brasil.',
    climate:
      'O clima tropical úmido recebe forte influência da Serra do Mar. O verão concentra calor, umidade e chuvas intensas, enquanto o inverno permanece ameno.',
    connection:
      'Ubatuba e Caraguatatuba compartilham a mesma faixa de Mata Atlântica, a Rodovia Rio–Santos e desafios como deslizamentos, enchentes e pressão turística.',
    challenges: ['Chuvas intensas e deslizamentos', 'Saneamento na alta temporada', 'Proteção de praias e comunidades tradicionais'],
    facts: [
      ['Litoral Norte', 'Região'],
      ['Tropical úmido', 'Clima'],
      ['Próxima', 'Relação com Caraguatatuba'],
    ],
  },
  {
    id: 'ilhabela',
    name: 'Ilhabela',
    state: 'São Paulo',
    distance: '30 km',
    proximity: 'Cidade próxima',
    image:
      'https://images.unsplash.com/photo-1598122401685-728b1ab601e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    alt: 'Palmeiras e mar azul em Ilhabela',
    summary:
      'Separada do continente pelo Canal de São Sebastião, Ilhabela preserva extensas áreas de floresta e possui forte relação com o oceano.',
    climate:
      'A ilha apresenta clima tropical litorâneo, alta umidade e chuvas distribuídas ao longo do ano. O relevo montanhoso cria muitos microclimas.',
    connection:
      'Ilhabela está diante de São Sebastião e próxima de Caraguatatuba. As cidades dividem fluxos turísticos, ecossistemas marinhos e riscos costeiros.',
    challenges: ['Mobilidade e dependência da balsa', 'Pressão urbana sobre a floresta', 'Poluição e conservação marinha'],
    facts: [
      ['Arquipélago', 'Território'],
      ['Tropical litorâneo', 'Clima'],
      ['Muito próxima', 'Relação com Caraguatatuba'],
    ],
  },
  {
    id: 'santos',
    name: 'Santos',
    state: 'São Paulo',
    distance: '155 km',
    proximity: 'Cidade regional',
    image:
      'https://images.unsplash.com/photo-1661518555450-7b3e912d8094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    alt: 'Barco no litoral de Santos',
    summary:
      'Santos é uma grande cidade portuária do litoral paulista, com orla urbanizada e papel econômico central para todo o estado.',
    climate:
      'O clima tropical litorâneo é quente e úmido. Frentes frias, marés elevadas e chuvas fortes influenciam diretamente a drenagem urbana.',
    connection:
      'Mesmo mais distante, Santos ajuda a comparar os impactos da urbanização costeira com os desafios enfrentados por Caraguatatuba.',
    challenges: ['Elevação do nível do mar', 'Drenagem em áreas densamente ocupadas', 'Impactos ambientais da atividade portuária'],
    facts: [
      ['Baixada Santista', 'Região'],
      ['Tropical litorâneo', 'Clima'],
      ['Distância média', 'Relação com Caraguatatuba'],
    ],
  },
  {
    id: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    distance: '430 km',
    proximity: 'Referência distante',
    image:
      'https://images.unsplash.com/photo-1544991337-95176b5233c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    alt: 'Montanhas e oceano no Rio de Janeiro',
    summary:
      'A metrópole fluminense reúne montanhas, baías, praias e áreas densamente urbanizadas, formando uma referência costeira em escala maior.',
    climate:
      'O clima tropical atlântico apresenta verões quentes e chuvosos. O relevo interfere nos ventos e pode intensificar temporais localizados.',
    connection:
      'O Rio de Janeiro está mais longe, mas compartilha com Caraguatatuba a convivência entre mar, encostas, Mata Atlântica e ocupação urbana.',
    challenges: ['Ondas de calor e ilhas térmicas', 'Deslizamentos em encostas ocupadas', 'Poluição de baías e lagoas'],
    facts: [
      ['Sudeste brasileiro', 'Região'],
      ['Tropical atlântico', 'Clima'],
      ['Referência distante', 'Relação com Caraguatatuba'],
    ],
  },
];

export function getVersion2City(id) {
  return VERSION_2_CITIES.find((city) => city.id === id);
}
