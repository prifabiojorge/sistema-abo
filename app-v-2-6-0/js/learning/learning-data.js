export const INLINE_GLOSSARY = [
  { term: 'antígeno', definition: 'Marcador na superfície da hemácia que pode ser reconhecido pelo sistema imune.', encyclopediaRef: 'enc002', relatedTerms: ['anticorpo', 'aglutinação'] },
  { term: 'anticorpo', definition: 'Proteína de defesa presente no plasma que reconhece antígenos específicos.', encyclopediaRef: 'enc003', relatedTerms: ['antígeno', 'plasma'] },
  { term: 'aglutinação', definition: 'Agrupamento visível de hemácias quando anticorpos encontram antígenos compatíveis.', encyclopediaRef: 'enc004', relatedTerms: ['reagente', 'hemácia'] },
  { term: 'fenótipo', definition: 'Característica observável, como o tipo sanguíneo A+, B- ou O+.', encyclopediaRef: 'enc001', relatedTerms: ['genótipo'] },
  { term: 'genótipo', definition: 'Combinação genética que explica o fenótipo sanguíneo.', encyclopediaRef: 'enc001', relatedTerms: ['alelo', 'fenótipo'] },
  { term: 'alelo', definition: 'Versão de um gene. No sistema ABO, os alelos principais são IA, IB e i.', encyclopediaRef: 'enc001', relatedTerms: ['genótipo'] },
  { term: 'hemácia', definition: 'Célula vermelha do sangue que carrega antígenos na superfície.', encyclopediaRef: 'enc002', relatedTerms: ['antígeno'] },
  { term: 'plasma', definition: 'Parte líquida do sangue, onde ficam muitos anticorpos.', encyclopediaRef: 'enc003', relatedTerms: ['anticorpo'] },
  { term: 'soro', definition: 'Parte líquida após coagulação, usada em testes laboratoriais.', encyclopediaRef: 'enc004', relatedTerms: ['plasma'] },
  { term: 'Rh', definition: 'Sistema sanguíneo relacionado principalmente ao antígeno D.', encyclopediaRef: 'enc005', relatedTerms: ['Anti-D'] },
  { term: 'compatibilidade', definition: 'Condição em que o sangue do doador não deve causar reação perigosa no receptor.', encyclopediaRef: 'enc006', relatedTerms: ['transfusão'] },
  { term: 'transfusão', definition: 'Procedimento de receber componentes sanguíneos compatíveis.', encyclopediaRef: 'enc006', relatedTerms: ['compatibilidade'] },
  { term: 'prova reversa', definition: 'Teste que observa anticorpos do soro do paciente contra hemácias conhecidas.', encyclopediaRef: 'enc004', relatedTerms: ['soro', 'anticorpo'] },
  { term: 'Bombaim', definition: 'Fenótipo raro que pode parecer tipo O na prova direta, mas possui anti-H.', encyclopediaRef: 'enc001', relatedTerms: ['fenótipo'] }
];

export const INLINE_TRAILS = [
  {
    id: 'beginner',
    title: 'Iniciante',
    badge: 'Bronze',
    desc: 'Primeiros passos para entender ABO/Rh com segurança.',
    steps: [
      { id: 'sim_discovery', label: 'Fazer uma simulação', route: 'simulator', metric: 'typingsCompleted', target: 1 },
      { id: 'quiz_basic', label: 'Completar um quiz', route: 'quiz', metric: 'quizzesTaken', target: 1 },
      { id: 'ency_5', label: 'Ler 5 verbetes', route: 'encyclopedia', metric: 'encyclopediaVisited', target: 5 }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediário',
    badge: 'Prata',
    desc: 'Pratique decisões e interpretações com mais autonomia.',
    steps: [
      { id: 'history_3', label: 'Registrar 3 tipagens', route: 'history', metric: 'historyCount', target: 3 },
      { id: 'transfusion_3', label: 'Resolver 3 cenários de transfusão', route: 'transfusion', metric: 'scenariosCompleted', target: 3 },
      { id: 'myths_5', label: 'Revisar 5 mitos/fatos', route: 'myths', metric: 'mythsCompleted', target: 5 }
    ]
  },
  {
    id: 'advanced',
    title: 'Avançado',
    badge: 'Ouro',
    desc: 'Integre raciocínio clínico, comparação e revisão dirigida.',
    steps: [
      { id: 'cases_3', label: 'Completar 3 casos clínicos', route: 'cases', metric: 'casesCompleted', target: 3 },
      { id: 'quiz_3', label: 'Completar 3 quizzes', route: 'quiz', metric: 'quizzesTaken', target: 3 },
      { id: 'bookmarks_3', label: 'Favoritar 3 verbetes', route: 'encyclopedia', metric: 'bookmarks', target: 3 },
      { id: 'compare_1', label: 'Usar comparação lado a lado', route: 'simulator', metric: 'comparisons', target: 1 }
    ]
  }
];

export const INLINE_CLINICAL_CASES = [
  {
    id: 'case-rh-gestante',
    title: 'Gestante Rh-',
    category: 'Rh/DHRN',
    patient: 'Gestante O- com parceiro Rh+ e primeira consulta pré-natal.',
    challenge: 'Qual risco deve ser monitorado e qual conduta preventiva é discutida?',
    options: [
      { id: 'a', text: 'Ignorar Rh, pois ABO é o único sistema importante.' },
      { id: 'b', text: 'Acompanhar risco de sensibilização Rh e discutir profilaxia anti-D.' },
      { id: 'c', text: 'Transfundir sangue AB+ preventivamente.' }
    ],
    correctAnswer: 'b',
    explanation: 'Gestantes Rh- podem se sensibilizar contra hemácias Rh+ fetais. O caso introduz a lógica da profilaxia anti-D em contexto educacional.',
    reference: 'Imunohematologia básica e prevenção de DHRN.'
  },
  {
    id: 'case-trauma',
    title: 'Acidente e transfusão urgente',
    category: 'Transfusão',
    patient: 'Paciente inconsciente chega ao pronto atendimento com hemorragia intensa e tipagem ainda indisponível.',
    challenge: 'Qual escolha é mais segura enquanto a tipagem não fica pronta?',
    options: [
      { id: 'a', text: 'Hemácias O- em emergência.' },
      { id: 'b', text: 'Qualquer sangue disponível.' },
      { id: 'c', text: 'Plasma O em grande volume sem avaliação.' }
    ],
    correctAnswer: 'a',
    explanation: 'Em contexto emergencial, hemácias O- reduzem risco ABO/Rh enquanto a identificação completa é realizada.',
    reference: 'Princípios de compatibilidade transfusional.'
  },
  {
    id: 'case-falciforme',
    title: 'Anemia falciforme e transfusões repetidas',
    category: 'Fenotipagem',
    patient: 'Paciente com anemia falciforme e histórico de múltiplas transfusões.',
    challenge: 'Qual cuidado adicional é importante?',
    options: [
      { id: 'a', text: 'Considerar fenotipagem estendida para reduzir aloimunização.' },
      { id: 'b', text: 'Usar sempre AB+ porque é receptor universal.' },
      { id: 'c', text: 'Desconsiderar sistemas além de ABO.' }
    ],
    correctAnswer: 'a',
    explanation: 'Transfusões repetidas aumentam risco de aloimunização; sistemas além de ABO/Rh podem ser relevantes.',
    reference: 'Medicina transfusional para pacientes politransfundidos.'
  },
  {
    id: 'case-a2',
    title: 'Tipagem A com reação inesperada',
    category: 'Subgrupos',
    patient: 'Doador com reação fraca em anti-A e divergência na interpretação inicial.',
    challenge: 'Qual hipótese avançada ajuda a explicar o achado?',
    options: [
      { id: 'a', text: 'Subgrupo A1/A2 pode alterar intensidade de reação.' },
      { id: 'b', text: 'Todo tipo A reage sempre igual.' },
      { id: 'c', text: 'Rh negativo elimina antígeno A.' }
    ],
    correctAnswer: 'a',
    explanation: 'Subgrupos do A podem gerar intensidade de aglutinação diferente, tema avançado para investigação.',
    reference: 'Subgrupos ABO em imunohematologia.'
  },
  {
    id: 'case-reacao',
    title: 'Suspeita de reação transfusional',
    category: 'Investigação',
    patient: 'Paciente apresenta febre e mal-estar após início de transfusão.',
    challenge: 'Qual postura educativa é mais segura?',
    options: [
      { id: 'a', text: 'Parar e investigar compatibilidade, identificação e sinais clínicos.' },
      { id: 'b', text: 'Aumentar velocidade da transfusão.' },
      { id: 'c', text: 'Ignorar se o tipo ABO parecia correto.' }
    ],
    correctAnswer: 'a',
    explanation: 'Reações transfusionais exigem interrupção e investigação imediata; ABO é essencial, mas não é o único fator de segurança.',
    reference: 'Rotinas de segurança transfusional.'
  }
];
