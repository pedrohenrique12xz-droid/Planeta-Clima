export interface Problem {
  id: string;
  num: number;
  title: string;
  shortText: string;
  img: string;
  alt: string;
  color: string;
  heroImg: string;
  sections: { heading: string; body: string }[];
  facts: { label: string; value: string }[];
  tips: string[];
}

export const PROBLEMS: Problem[] = [
  {
    id: 'chuvas-enchentes',
    num: 1,
    title: 'Chuvas Intensas e Enchentes',
    color: '#1677E8',
    shortText:
      'Caraguatatuba registra índices pluviométricos entre os mais altos do Brasil. As chuvas de verão causam transbordamento de rios e alagamentos frequentes em bairros como Massaguaçu e Centro.',
    img: 'https://images.unsplash.com/photo-1657069345471-c54f2432b79c?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?w=1400&h=600&fit=crop&auto=format',
    alt: 'Rua alagada por chuvas intensas',
    sections: [
      {
        heading: 'Por que chove tanto em Caraguatatuba?',
        body: 'Caraguatatuba está encravada entre a Serra do Mar e o Oceano Atlântico, criando uma armadilha geográfica para a umidade. Os ventos úmidos vindos do oceano sobem a encosta da serra, esfriando e precipitando chuva de forma intensa. Esse fenômeno, chamado de precipitação orográfica, garante à cidade uma pluviosidade média anual entre 3.500 e 4.500 mm — mais de quatro vezes a média de São Paulo capital.',
      },
      {
        heading: 'Impactos no cotidiano da cidade',
        body: 'Durante os meses de verão (dezembro a março), é comum que eventos de chuva concentrada em poucas horas causem o transbordamento dos rios Juqueriquerê, Claro e Santo Antônio. Bairros como Massaguaçu, Tabatinga e o próprio Centro ficam ilhados. Casas são invadidas pela lama, comércios fecham e a Rodovia dos Tamoios (SP-99) — única ligação com o Vale do Paraíba — é frequentemente interditada.',
      },
      {
        heading: 'Mudanças climáticas e o futuro',
        body: 'Projeções do IPCC e do INPE indicam que eventos de chuva extrema no litoral paulista devem se tornar ainda mais frequentes e intensos até 2050. O aquecimento do Oceano Atlântico Sul turbina os sistemas frontais, aumentando a quantidade de água disponível para precipitação. Para Caraguatatuba, isso significa planejar drenagem urbana, requalificação de margens de rios e sistemas de alerta precoce.',
      },
    ],
    facts: [
      { value: '4.000 mm', label: 'Chuva anual média' },
      { value: '200 mm', label: 'Recorde em 24 horas' },
      { value: '3 rios', label: 'Principais corpos d\'água urbanos' },
      { value: 'Dez–Mar', label: 'Período crítico de chuvas' },
    ],
    tips: [
      'Acompanhe os alertas do Sistema de Alerta a Desastres (SIAD-SP)',
      'Não jogue lixo em calçadas — entulhos bloqueiam bueiros e pioram enchentes',
      'Identifique rotas de fuga e pontos altos próximos de casa',
      'Mantenha documentos e itens essenciais em local elevado e de fácil acesso',
    ],
  },
  {
    id: 'deslizamentos',
    num: 2,
    title: 'Deslizamentos de Encosta',
    color: '#7c3aed',
    shortText:
      'A Serra do Mar que circunda a cidade é altamente vulnerável a deslizamentos. Em 1967, um megadeslizamento devastou a cidade. Hoje, o risco persiste com o aumento das chuvas extremas.',
    img: 'https://images.unsplash.com/photo-1779026111951-6dfb4f575876?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1780229700322-cdafa81d80e0?w=1400&h=600&fit=crop&auto=format',
    alt: 'Deslizamento de encosta bloqueando estrada',
    sections: [
      {
        heading: 'O megadeslizamento de 1967',
        body: 'Em março de 1967, chuvas torrenciais desencadearam um dos maiores desastres naturais da história do Brasil. Toneladas de lama e rocha desceram a Serra do Mar sobre Caraguatatuba em questão de horas. Mais de 400 pessoas morreram, bairros inteiros foram soterrados e a cidade levou anos para se reconstruir. O evento é até hoje referência de risco geológico no litoral norte paulista.',
      },
      {
        heading: 'Por que a Serra do Mar é tão suscetível?',
        body: 'A Serra do Mar é formada por rochas cristalinas com espessa camada de solo tropical úmido. Quando saturado de água, esse solo perde coesão e desliza encosta abaixo. A vegetação de Mata Atlântica age como âncora natural — mas onde ela foi removida para construções irregulares, o risco aumenta exponencialmente. Encostas com declividade acima de 30° são consideradas de alto risco.',
      },
      {
        heading: 'Ocupação irregular e urbanização',
        body: 'O crescimento populacional acelerado nas últimas décadas levou ao surgimento de habitações em áreas de risco nas encostas. Cortes de talude sem contenção adequada e a impermeabilização do solo agravam o escoamento superficial. O Plano Preventivo de Defesa Civil (PPDC-SP) monitora as áreas críticas durante o período chuvoso, mas a fiscalização de novas ocupações ainda é insuficiente.',
      },
    ],
    facts: [
      { value: '+400', label: 'Vítimas em 1967' },
      { value: '30°+', label: 'Declividade de alto risco' },
      { value: 'Nov–Mar', label: 'Período de maior vigilância' },
      { value: 'PPDC-SP', label: 'Sistema de monitoramento ativo' },
    ],
    tips: [
      'Fique atento a rachaduras em paredes e no solo próximos a encostas',
      'Sons de estalos ou água borbulhando no solo podem indicar movimentação',
      'Evacue imediatamente ao receber alerta de deslizamento',
      'Nunca construa em áreas de encosta sem laudo geotécnico aprovado',
    ],
  },
  {
    id: 'erosao-costeira',
    num: 3,
    title: 'Erosão Costeira',
    color: '#0891b2',
    shortText:
      'O avanço do mar sobre a orla está eliminando faixas de areia em praias como Indaiá e Martim de Sá. Ressacas cada vez mais fortes destroem calçadões e estruturas litorâneas.',
    img: 'https://images.unsplash.com/photo-1662622201651-0d6c7dc2c10f?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1594365458706-6fab3472f681?w=1400&h=600&fit=crop&auto=format',
    alt: 'Erosão costeira em falésias e praia',
    sections: [
      {
        heading: 'O que é erosão costeira e por que ocorre?',
        body: 'A erosão costeira é o recuo da linha de costa causado pela ação das ondas, marés e correntes. No litoral norte paulista, esse processo é acelerado pelo aumento do nível do mar, pelo maior volume de ressacas e pela retirada de areia dos sistemas de dunas para construção civil. Praias como Indaiá, Martim de Sá e Massaguaçu já perderam metros de faixa de areia nas últimas décadas.',
      },
      {
        heading: 'Impactos nas praias e na infraestrutura',
        body: 'Calçadões, quiosques, redes de esgoto e pavimentação são diretamente ameaçados pelo avanço do mar. Em eventos de ressaca intensa, ondas chegam à avenida beira-mar, danificando veículos e edificações. A perda de areia também afeta o turismo — principal motor econômico de Caraguatatuba —, reduzindo a atratividade das praias.',
      },
      {
        heading: 'Soluções e perspectivas',
        body: 'Pesquisadores da USP e do IPT monitoram a evolução da linha de costa no litoral norte. Entre as soluções estudadas estão o engordamento artificial de praias (reposição de areia), a construção de recifes artificiais para dissipar energia das ondas e a restrição de uso nas faixas de risco. A longo prazo, a contenção do aquecimento global é a única forma de reduzir o ritmo de elevação do nível do mar.',
      },
    ],
    facts: [
      { value: '2–4 m', label: 'Recuo médio anual em áreas críticas' },
      { value: '0,3 cm/ano', label: 'Elevação do nível do mar no Brasil' },
      { value: '3 praias', label: 'Áreas de erosão intensa em Caraguatatuba' },
      { value: '2050', label: 'Ano crítico nas projeções do IPCC' },
    ],
    tips: [
      'Não retire areia ou vegetação das dunas — elas protegem a costa',
      'Respeite as sinalizações de perigo em períodos de ressaca',
      'Evite construções a menos de 50 metros da linha d\'água',
      'Apoie iniciativas de reflorestamento de restingas e mangues',
    ],
  },
  {
    id: 'poluicao-marinha',
    num: 4,
    title: 'Poluição Marinha',
    color: '#059669',
    shortText:
      'Resíduos sólidos e esgoto sem tratamento ameaçam os ecossistemas marinhos do litoral norte paulista, prejudicando a fauna aquática, o turismo e a pesca artesanal local.',
    img: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1610093703375-6d8fd641294b?w=1400&h=600&fit=crop&auto=format',
    alt: 'Poluição plástica em praia tropical',
    sections: [
      {
        heading: 'Lixo plástico e microplásticos',
        body: 'Caraguatatuba recebe resíduos plásticos trazidos pelo vento e pelas correntes marinhas, além dos gerados localmente. Durante enchentes, toneladas de lixo urbano são carregadas pelos rios até o oceano. Estima-se que mais de 80% do plástico nos oceanos vem de rios e linhas costeiras. Os microplásticos, resultado da fragmentação de plásticos maiores, já foram detectados em peixes comercializados na região.',
      },
      {
        heading: 'Esgoto e balneabilidade',
        body: 'Apesar dos avanços no saneamento básico, ainda há pontos de lançamento de esgoto sem tratamento no município. Em períodos de alta temporada, o volume de efluentes supera a capacidade das estações de tratamento. O resultado são praias com interdição por má balneabilidade, afetando a saúde dos banhistas e a imagem turística da cidade.',
      },
      {
        heading: 'Impacto na fauna e pesca artesanal',
        body: 'Os fundos marinhos próximos ao Porto São Sebastião e às águas de Caraguatatuba abrigam espécies como manta-raia, tartarugas marinhas e golfinhos. A poluição compromete o habitat dessas espécies e afeta a reprodução de peixes costeiros. Para os pescadores artesanais da comunidade do Camaroeiro, a queda na qualidade das águas já se traduz em redução de capturas e perda de renda.',
      },
    ],
    facts: [
      { value: '8 Mt', label: 'Plástico despejado nos oceanos por ano no mundo' },
      { value: '60%', label: 'Praias sem saneamento adequado no litoral norte' },
      { value: '1.500+', label: 'Espécies marinhas ameaçadas por resíduos plásticos' },
      { value: '300 anos', label: 'Tempo de decomposição de uma garrafa PET' },
    ],
    tips: [
      'Nunca deixe lixo na praia — leve seu resíduo de volta',
      'Participe de mutirões de limpeza de praia e rios',
      'Reduza o consumo de plástico descartável no dia a dia',
      'Fiscalize e denuncie lançamentos irregulares de esgoto à CETESB',
    ],
  },
  {
    id: 'desmatamento',
    num: 5,
    title: 'Desmatamento da Mata Atlântica',
    color: '#16a34a',
    shortText:
      'Apesar da proteção legal, a expansão urbana desordenada pressiona os remanescentes de Mata Atlântica ao redor de Caraguatatuba, reduzindo a biodiversidade e aumentando o risco de deslizamentos.',
    img: 'https://images.unsplash.com/photo-1557600287-790c8422bcc2?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1788543632230-cdc8f988868c?w=1400&h=600&fit=crop&auto=format',
    alt: 'Área de desmatamento na floresta',
    sections: [
      {
        heading: 'A Mata Atlântica em Caraguatatuba',
        body: 'O município de Caraguatatuba está inserido no Parque Estadual da Serra do Mar, um dos maiores remanescentes contínuos de Mata Atlântica do mundo. A floresta cobre as encostas e serve como reguladora do ciclo hídrico, âncora de solos e abrigo de biodiversidade excepcional. Estima-se que a Mata Atlântica original tenha sido reduzida a menos de 12% de sua extensão histórica no Brasil.',
      },
      {
        heading: 'Pressão urbana e expansão irregular',
        body: 'O crescimento populacional de Caraguatatuba, impulsionado pelo turismo e pela indústria do petróleo na Bacia de Santos, gerou grande pressão sobre as áreas de amortecimento do parque. Loteamentos irregulares, chácaras e condomínios avançam sobre a mata, fragmentando habitats e criando "ilhas" florestais isoladas. A fragmentação impede o deslocamento de animais e reduz drasticamente a biodiversidade local.',
      },
      {
        heading: 'Consequências climáticas do desmatamento',
        body: 'A cobertura vegetal regula temperatura, umidade e precipitação. Sem a floresta, as encostas ficam expostas à erosão e deslizamentos, o solo perde capacidade de absorção de água, as nascentes secam e o microclima local se torna mais quente e seco. O desmatamento em Caraguatatuba agrava diretamente os riscos de enchentes e deslizamentos nos bairros urbanos.',
      },
    ],
    facts: [
      { value: '12%', label: 'Remanescente da Mata Atlântica original no Brasil' },
      { value: '20.000', label: 'Espécies vegetais na Mata Atlântica' },
      { value: '850+', label: 'Espécies de aves registradas na Mata Atlântica' },
      { value: '148 mil ha', label: 'Área do Parque Estadual da Serra do Mar (SP)' },
    ],
    tips: [
      'Denuncie desmatamento ilegal ao Instituto Florestal (IF-SP) e IBAMA',
      'Não compre terrenos ou imóveis em áreas de APP (Área de Preservação Permanente)',
      'Plante espécies nativas da Mata Atlântica no seu quintal',
      'Apoie projetos de corredores ecológicos na região',
    ],
  },
  {
    id: 'ressacas-mar',
    num: 6,
    title: 'Ressacas e Aumento do Mar',
    color: '#0369a1',
    shortText:
      'O aquecimento dos oceanos intensifica as ressacas no litoral norte. A elevação do nível do mar projeta inundações permanentes em partes baixas da cidade até 2050, ameaçando residências e infraestrutura.',
    img: 'https://images.unsplash.com/photo-1675726674424-c0a7ac0ecd01?w=600&h=400&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?w=1400&h=600&fit=crop&auto=format',
    alt: 'Mar agitado em cidade costeira',
    sections: [
      {
        heading: 'O que são ressacas e por que estão mais intensas?',
        body: 'Ressacas são ondulações geradas por tempestades distantes no oceano que chegam à costa com grande energia. No litoral norte de São Paulo, as ressacas de sudeste são as mais comuns e perigosas. Com o aquecimento dos oceanos, as tempestades se tornam mais intensas e frequentes, gerando ondas maiores. Além disso, o nível mais elevado do mar amplifica o alcance das ondas sobre a costa.',
      },
      {
        heading: 'Elevação do nível do mar: os números',
        body: 'O nível médio dos oceanos sobe cerca de 3 mm por ano globalmente — mas no litoral sudeste brasileiro, esse ritmo é ainda maior, próximo de 4 mm/ano, devido a fatores como subsidência do solo e correntes oceânicas. Projeções do IPCC para o cenário de altas emissões indicam uma elevação de 0,6 a 1,1 metro até 2100. Para Caraguatatuba, isso significa que áreas planas a menos de 2 metros acima do nível do mar estariam permanentemente alagadas.',
      },
      {
        heading: 'Infraestrutura e comunidades em risco',
        body: 'Bairros costeiros como Tabatinga, Martim de Sá e partes do Centro histórico estão em zonas vulneráveis à elevação do mar. A Rodovia dos Tamoios, principal acesso à cidade, possui trechos próximos ao nível do mar que poderiam ser comprometidos. Comunidades caiçaras tradicionais, já pressionadas pelo turismo, teriam seus territórios históricos ameaçados pelo avanço das águas.',
      },
    ],
    facts: [
      { value: '4 mm/ano', label: 'Elevação do mar no litoral SE brasileiro' },
      { value: '1,1 m', label: 'Projeção máxima de elevação até 2100 (IPCC)' },
      { value: '6 m', label: 'Altura de ondas em ressacas extremas registradas' },
      { value: '2050', label: 'Ano em que inundações frequentes são projetadas' },
    ],
    tips: [
      'Respeite faixas de isolamento durante ressacas — o mar pode avançar metros em segundos',
      'Não se aproxime de molhes e costões durante ondas grandes',
      'Acompanhe previsões de mar do Centro de Hidrografia da Marinha (CHM)',
      'Apoie políticas de redução de emissões de carbono — a solução é global',
    ],
  },
];
