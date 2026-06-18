
// --- FILE: data-inline.js ---

const INLINE_QUESTIONS = [
  {
    "id": "q001",
    "category": "genetics",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Quais são os alelos possíveis no sistema ABO?",
    "options": [
      {
        "id": "a",
        "text": "A, B e O"
      },
      {
        "id": "b",
        "text": "IA, IB e i"
      },
      {
        "id": "c",
        "text": "Rh+ e Rh-"
      },
      {
        "id": "d",
        "text": "X e Y"
      }
    ],
    "correctAnswer": "b",
    "explanation": "O sistema ABO é determinado por três alelos: IA (produz antígeno A), IB (produz antígeno B) e i (não produz antígeno). IA e IB são codominantes entre si e ambos dominam sobre i.",
    "reference": "Genética mendeliana — Landsteiner, 1901"
  },
  {
    "id": "q002",
    "category": "genetics",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Se ambos os pais são do tipo A, quais tipos sanguíneos os filhos podem ter?",
    "options": [
      {
        "id": "a",
        "text": "Apenas tipo A"
      },
      {
        "id": "b",
        "text": "A ou B"
      },
      {
        "id": "c",
        "text": "A ou O"
      },
      {
        "id": "d",
        "text": "A, B, AB ou O"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Pais tipo A podem ter genótipos IAIA ou IAi. Se ambos forem IAi (heterozigotos), há 25% de chance de filho tipo O (ii). Nunca terão filhos B ou AB pois não possuem o alelo IB.",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q003",
    "category": "genetics",
    "difficulty": "easy",
    "type": "true_false",
    "question": "O alelo IA é dominante sobre o alelo i.",
    "correctAnswer": true,
    "explanation": "Verdadeiro. IA e IB são codominantes entre si, mas ambos são dominantes sobre i. Um indivíduo com genótipo IAi expressa o fenótipo tipo A.",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q004",
    "category": "genetics",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Um casal com filho tipo AB pode ter quais genótipos?",
    "options": [
      {
        "id": "a",
        "text": "Ambos precisam ser AB"
      },
      {
        "id": "b",
        "text": "Um A e um B, necessariamente"
      },
      {
        "id": "c",
        "text": "Um AB e qualquer outro tipo"
      },
      {
        "id": "d",
        "text": "Qualquer combinação que inclua IA e IB"
      }
    ],
    "correctAnswer": "d",
    "explanation": "Para ter um filho AB (IAIB), cada pai deve contribuir com um alelo: um com IA e outro com IB. Poderia ser, por exemplo, pai A (IAi) e mãe B (IBi), ou pai AB (IAIB) e mãe O (ii), entre outras combinações.",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q005",
    "category": "genetics",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Qual a probabilidade de um casal AB × O ter um filho tipo A?",
    "options": [
      {
        "id": "a",
        "text": "0%"
      },
      {
        "id": "b",
        "text": "25%"
      },
      {
        "id": "c",
        "text": "50%"
      },
      {
        "id": "d",
        "text": "100%"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Pai AB (IAIB) pode passar IA ou IB. Mãe O (ii) sempre passa i. Combinações possíveis: IAi (tipo A) ou IBi (tipo B). Probabilidade de tipo A = 50%.",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q006",
    "category": "genetics",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Qual genótipo produz o fenótipo tipo O?",
    "options": [
      {
        "id": "a",
        "text": "IAIA"
      },
      {
        "id": "b",
        "text": "IAi"
      },
      {
        "id": "c",
        "text": "IBi"
      },
      {
        "id": "d",
        "text": "ii"
      }
    ],
    "correctAnswer": "d",
    "explanation": "O genótipo ii é o único que não produz antígenos A nem B na superfície das hemácias, resultando no fenótipo tipo O.",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q007",
    "category": "genetics",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "No sistema ABO, quantos fenótipos e genótipos distintos existem?",
    "options": [
      {
        "id": "a",
        "text": "4 fenótipos e 4 genótipos"
      },
      {
        "id": "b",
        "text": "4 fenótipos e 6 genótipos"
      },
      {
        "id": "c",
        "text": "6 fenótipos e 4 genótipos"
      },
      {
        "id": "d",
        "text": "3 fenótipos e 6 genótipos"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Fenótipos: A, B, AB, O (4). Genótipos: IAIA, IAi, IBIB, IBi, IAIB, ii (6).",
    "reference": "Genética mendeliana"
  },
  {
    "id": "q008",
    "category": "genetics",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Um indivíduo com genótipo IAIB e pai Rh- (rr) e mãe Rh+ (Rr). Qual a probabilidade de ser Rh-?",
    "options": [
      {
        "id": "a",
        "text": "0%"
      },
      {
        "id": "b",
        "text": "25%"
      },
      {
        "id": "c",
        "text": "50%"
      },
      {
        "id": "d",
        "text": "75%"
      }
    ],
    "correctAnswer": "c",
    "explanation": "O fator Rh é independente do ABO. Pai rr passa r. Mãe Rr passa R ou r (50% cada). Probabilidade de rr (Rh-) = 50%.",
    "reference": "Genética mendeliana — Herança independente"
  },
  {
    "id": "q009",
    "category": "antigens",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Onde os antígenos ABO estão localizados?",
    "options": [
      {
        "id": "a",
        "text": "No núcleo da hemácia"
      },
      {
        "id": "b",
        "text": "Na membrana plasmática da hemácia"
      },
      {
        "id": "c",
        "text": "No plasma sanguíneo"
      },
      {
        "id": "d",
        "text": "Nas mitocôndrias"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Os antígenos ABO são glicoproteínas e glicolipídios inseridos na membrana plasmática das hemácias (eritrócitos).",
    "reference": "Imunohematologia básica"
  },
  {
    "id": "q010",
    "category": "antigens",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Qual anticorpo está naturalmente presente no plasma de indivíduos tipo A?",
    "options": [
      {
        "id": "a",
        "text": "Anti-A"
      },
      {
        "id": "b",
        "text": "Anti-B"
      },
      {
        "id": "c",
        "text": "Anti-D"
      },
      {
        "id": "d",
        "text": "Nenhum"
      }
    ],
    "correctAnswer": "b",
    "explanation": "O organismo produz anticorpos contra os antígenos que NÃO possui. Tipo A tem antígeno A, então produz Anti-B.",
    "reference": "Imunohematologia básica"
  },
  {
    "id": "q011",
    "category": "antigens",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Qual tipo sanguíneo NÃO possui anticorpos anti-A nem anti-B no plasma?",
    "options": [
      {
        "id": "a",
        "text": "Tipo A"
      },
      {
        "id": "b",
        "text": "Tipo B"
      },
      {
        "id": "c",
        "text": "Tipo AB"
      },
      {
        "id": "d",
        "text": "Tipo O"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Tipo AB possui ambos os antígenos (A e B), portanto não produz anticorpos contra nenhum deles. É chamado de 'receptor universal' de hemácias.",
    "reference": "Imunohematologia básica"
  },
  {
    "id": "q012",
    "category": "antigens",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "O antígeno D (fator Rh) é um antígeno de:",
    "options": [
      {
        "id": "a",
        "text": "Proteína transmembrana"
      },
      {
        "id": "b",
        "text": "Glicoproteína de membrana"
      },
      {
        "id": "c",
        "text": "Carboidrato livre"
      },
      {
        "id": "d",
        "text": "Lipídio nuclear"
      }
    ],
    "correctAnswer": "a",
    "explanation": "O antígeno D é uma proteína transmembrana (polipeptídio) presente na membrana dos eritrócitos, diferente dos antígenos ABO que são glicoproteínas/glicolipídios.",
    "reference": "Imunohematologia — Sistema Rh"
  },
  {
    "id": "q013",
    "category": "antigens",
    "difficulty": "hard",
    "type": "true_false",
    "question": "Indivíduos tipo O possuem anticorpos anti-A e anti-B do tipo IgG, que atravessam a placenta.",
    "correctAnswer": false,
    "explanation": "Falso. Os anticorpos naturais anti-A e anti-B são predominantemente IgM (não atravessam a placenta). Após sensibilização (ex: transfusão ou gravidez), podem aparecer IgG.",
    "reference": "Imunohematologia — Imunoglobulinas"
  },
  {
    "id": "q014",
    "category": "antigens",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "O que acontece em uma reação de aglutinação in vitro?",
    "options": [
      {
        "id": "a",
        "text": "As hemácias se dissolvem (hemólise)"
      },
      {
        "id": "b",
        "text": "As hemácias se agrupam em clusters visíveis"
      },
      {
        "id": "c",
        "text": "O plasma se coagula"
      },
      {
        "id": "d",
        "text": "Os anticorpos são destruídos"
      }
    ],
    "correctAnswer": "b",
    "explanation": "A aglutinação é o agrupamento visível de hemácias mediado por anticorpos que se ligam a antígenos em hemácias adjacentes, formando clusters (grumos).",
    "reference": "Imunohematologia — Reação antígeno-anticorpo"
  },
  {
    "id": "q015",
    "category": "transfusion",
    "difficulty": "easy",
    "type": "true_false",
    "question": "Uma pessoa do tipo O negativo pode doar hemácias para qualquer pessoa.",
    "correctAnswer": true,
    "explanation": "Verdadeiro para hemácias concentradas: tipo O- não possui antígenos A, B nem D na superfície das hemácias, então não causa reação transfusional. Porém, o plasma de tipo O contém Anti-A e Anti-B, então a doação de sangue total deve ser feita com cautela.",
    "reference": "Medicina transfusional"
  },
  {
    "id": "q016",
    "category": "transfusion",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Quem pode receber hemácias de um doador tipo A+?",
    "options": [
      {
        "id": "a",
        "text": "Qualquer pessoa"
      },
      {
        "id": "b",
        "text": "Apenas A+ e AB+"
      },
      {
        "id": "c",
        "text": "A+, A-, AB+ e AB-"
      },
      {
        "id": "d",
        "text": "Apenas A+"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Tipo A+ possui antígenos A e D. Quem pode receber: A+ (tem A e D), AB+ (tem A, B e D). Rh+ pode doar para Rh+, mas não para Rh-.",
    "reference": "Medicina transfusional — Compatibilidade ABO/Rh"
  },
  {
    "id": "q017",
    "category": "transfusion",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "O tipo AB+ é chamado de 'receptor universal' porque:",
    "options": [
      {
        "id": "a",
        "text": "Pode doar para todos"
      },
      {
        "id": "b",
        "text": "Não possui anticorpos anti-A nem anti-B no plasma"
      },
      {
        "id": "c",
        "text": "Possui sangue mais puro"
      },
      {
        "id": "d",
        "text": "Tem mais hemácias que os outros tipos"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Tipo AB+ possui antígenos A, B e D. Como possui todos os antígenos, não produz anticorpos contra nenhum deles, podendo receber hemácias de qualquer tipo ABO e Rh.",
    "reference": "Medicina transfusional"
  },
  {
    "id": "q018",
    "category": "transfusion",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Um paciente tipo B- precisa de hemácias. Quais tipos são compatíveis?",
    "options": [
      {
        "id": "a",
        "text": "B+, B-, O+, O-"
      },
      {
        "id": "b",
        "text": "B- e O- apenas"
      },
      {
        "id": "c",
        "text": "A+, A-, B+, B-"
      },
      {
        "id": "d",
        "text": "Todos exceto AB"
      }
    ],
    "correctAnswer": "b",
    "explanation": "B- não possui antígenos A nem D. Pode receber de: B- (não tem A, não tem D), O- (não tem A, não tem B, não tem D). Rh- só pode receber de Rh-.",
    "reference": "Medicina transfusional"
  },
  {
    "id": "q019",
    "category": "transfusion",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Por que a compatibilidade de plasma é o oposto da compatibilidade de hemácias?",
    "options": [
      {
        "id": "a",
        "text": "Plasma não contém anticorpos"
      },
      {
        "id": "b",
        "text": "O plasma contém anticorpos contra os antígenos que o indivíduo não possui"
      },
      {
        "id": "c",
        "text": "Plasma é filtrado antes da transfusão"
      },
      {
        "id": "d",
        "text": "É um erro histórico da medicina"
      }
    ],
    "correctAnswer": "b",
    "explanation": "O plasma contém anticorpos contra antígenos ausentes. Tipo O tem Anti-A e Anti-B no plasma, então só pode RECEBER plasma de tipo O. Tipo AB não tem anticorpos, então pode receber plasma de qualquer tipo.",
    "reference": "Medicina transfusional — Compatibilidade de plasma"
  },
  {
    "id": "q020",
    "category": "transfusion",
    "difficulty": "medium",
    "type": "clinical_scenario",
    "question": "EMERGÊNCIA: Paciente tipo A+ precisa de hemácias com urgência. No estoque há: A+, O+, O-. Qual a melhor escolha?",
    "options": [
      {
        "id": "a",
        "text": "A+ (tipo idêntico)"
      },
      {
        "id": "b",
        "text": "O+ (doador universal de hemácias)"
      },
      {
        "id": "c",
        "text": "O- (doador universal absoluto)"
      },
      {
        "id": "d",
        "text": "Qualquer um, pois são todos compatíveis"
      }
    ],
    "correctAnswer": "a",
    "explanation": "A+ é a escolha ideal: compatível e preserva estoque de O- para emergências onde o tipo não é conhecido. O+ e O- também são compatíveis com A+, mas O- deve ser reservado para situações de tipo desconhecido ou receptor Rh-.",
    "reference": "Medicina transfusional — Protocolos de emergência"
  },
  {
    "id": "q021",
    "category": "transfusion",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "O que caracteriza uma reação transfusional aguda por incompatibilidade ABO?",
    "options": [
      {
        "id": "a",
        "text": "Febre leve e coceira"
      },
      {
        "id": "b",
        "text": "Hemólise intravascular, hemoglobinúria, hipotensão e choque"
      },
      {
        "id": "c",
        "text": "Aumento da pressão arterial"
      },
      {
        "id": "d",
        "text": "Apenas manchas vermelhas na pele"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Reação ABO aguda é mediada por anticorpos pré-formados (Anti-A/Anti-B) do tipo IgM, que ativam o complemento e causam hemólise intravascular massiva. Manifestações: dor lombar, febre, hipotensão, hemoglobinúria, choque.",
    "reference": "Medicina transfusional — Reações adversas"
  },
  {
    "id": "q022",
    "category": "transfusion",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Se um paciente tipo O recebe sangue tipo A por engano, qual anticorpo causa a reação?",
    "options": [
      {
        "id": "a",
        "text": "Anti-A do receptor contra as hemácias do doador"
      },
      {
        "id": "b",
        "text": "Anti-B do receptor contra as hemácias do doador"
      },
      {
        "id": "c",
        "text": "Anti-O do doador contra as hemácias do receptor"
      },
      {
        "id": "d",
        "text": "Nenhum, pois O é doador universal"
      }
    ],
    "correctAnswer": "a",
    "explanation": "O receptor tipo O possui Anti-A e Anti-B no plasma. Quando recebe hemácias tipo A, o Anti-A do receptor ataca as hemácias do doador (que possuem antígeno A), causando hemólise.",
    "reference": "Medicina transfusional — Fisiopatologia das reações"
  },
  {
    "id": "q023",
    "category": "rh_dhrn",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "O que significa ser 'Rh negativo'?",
    "options": [
      {
        "id": "a",
        "text": "Não ter anticorpos no sangue"
      },
      {
        "id": "b",
        "text": "Não possuir o antígeno D na membrana das hemácias"
      },
      {
        "id": "c",
        "text": "Ter sangue azulado"
      },
      {
        "id": "d",
        "text": "Não poder ter filhos"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Rh negativo significa ausência do antígeno D na membrana dos eritrócitos. A presença do antígeno D determina o Rh positivo.",
    "reference": "Imunohematologia — Sistema Rh"
  },
  {
    "id": "q024",
    "category": "rh_dhrn",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A Doença Hemolítica do Recém-Nascido (DHRN) por incompatibilidade Rh ocorre quando:",
    "options": [
      {
        "id": "a",
        "text": "Mãe Rh+ e bebê Rh-"
      },
      {
        "id": "b",
        "text": "Mãe Rh- e bebê Rh+"
      },
      {
        "id": "c",
        "text": "Pai Rh- e mãe Rh+"
      },
      {
        "id": "d",
        "text": "Ambos os pais são Rh+"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Mãe Rh- pode ser sensibilizada durante a gestação ou parto de um bebê Rh+, produzindo Anti-D. Em gestações subsequentes com bebês Rh+, os anticorpos maternos atravessam a placenta e destroem as hemácias fetais.",
    "reference": "Obstetrícia — DHRN"
  },
  {
    "id": "q025",
    "category": "rh_dhrn",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Qual a medida preventiva para DHRN por incompatibilidade Rh?",
    "options": [
      {
        "id": "a",
        "text": "Transfusão de sangue Rh+ para a mãe"
      },
      {
        "id": "b",
        "text": "Imunoglobulina anti-D (Rhogam)"
      },
      {
        "id": "c",
        "text": "Vacina contra hepatite B"
      },
      {
        "id": "d",
        "text": "Não há prevenção possível"
      }
    ],
    "correctAnswer": "b",
    "explanation": "A imunoglobulina anti-D (Rhogam) é administrada à mãe Rh- após procedimentos ou parto de bebê Rh+. Ela destrói as hemácias fetais Rh+ antes que a mãe desenvolva sua própria resposta imune.",
    "reference": "Obstetrícia — Prevenção de DHRN"
  },
  {
    "id": "q026",
    "category": "rh_dhrn",
    "difficulty": "hard",
    "type": "true_false",
    "question": "A primeira gestação de uma mãe Rh- com bebê Rh+ geralmente não apresenta DHRN grave.",
    "correctAnswer": true,
    "explanation": "Verdadeiro. A sensibilização ocorre tipicamente no final da primeira gestação ou durante o parto. A DHRN grave manifesta-se mais comumente em gestações subsequentes, quando a mãe já produziu anticorpos anti-D.",
    "reference": "Obstetrícia — DHRN"
  },
  {
    "id": "q027",
    "category": "biosafety",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Qual o descarte correto de uma lanceta usada em teste de glicemia?",
    "options": [
      {
        "id": "a",
        "text": "Lixo comum doméstico"
      },
      {
        "id": "b",
        "text": "Lixo orgânico"
      },
      {
        "id": "c",
        "text": "Recipiente apropriado para perfurocortantes (classe B)"
      },
      {
        "id": "d",
        "text": "Reciclagem de plásticos"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Lancetas são resíduos perfurocortantes potencialmente contaminados (classe B do PGRSS). Devem ser descartadas em caixas apropriadas rígidas e resistentes à perfuração, nunca no lixo comum.",
    "reference": "Biossegurança — PGRSS (Anvisa RDC 222/2018)"
  },
  {
    "id": "q028",
    "category": "biosafety",
    "difficulty": "easy",
    "type": "true_false",
    "question": "Em uma ação de tipagem sanguínea educativa em escola, é obrigatória a presença de profissional de saúde habilitado.",
    "correctAnswer": false,
    "explanation": "Falso para simuladores virtuais: o ABO Sim elimina totalmente a necessidade de profissional de saúde, sangue real e riscos biológicos. Porém, se houver coleta real de sangue, a presença de profissional habilitado é obrigatória por lei.",
    "reference": "Legislação — Lei 7.498/1986 (Lei do Exercício Profissional de Enfermagem)"
  },
  {
    "id": "q029",
    "category": "biosafety",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Qual vírus representa o maior risco em acidente com perfurocortante contaminado?",
    "options": [
      {
        "id": "a",
        "text": "Influenza"
      },
      {
        "id": "b",
        "text": "HIV, VHB (Hepatite B) e VHC (Hepatite C)"
      },
      {
        "id": "c",
        "text": "Herpes simples"
      },
      {
        "id": "d",
        "text": "HPV"
      }
    ],
    "correctAnswer": "b",
    "explanation": "HIV, HBV e HCV são os principais patógenos de transmissão hematogênica em acidentes ocupacionais com perfurocortantes. A hepatite B tem o maior risco de transmissão (~30%), seguida por HCV (~3%) e HIV (~0.3%).",
    "reference": "Biossegurança — Protocolos de PEP (Profilaxia Pós-Exposição)"
  },
  {
    "id": "q030",
    "category": "biosafety",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Segundo a LGPD (Lei 13.709/2018), o tipo sanguíneo de um servidor público é considerado:",
    "options": [
      {
        "id": "a",
        "text": "Dado público"
      },
      {
        "id": "b",
        "text": "Dado pessoal sensível"
      },
      {
        "id": "c",
        "text": "Dado anonimizado"
      },
      {
        "id": "d",
        "text": "Dado irrelevante para proteção"
      }
    ],
    "correctAnswer": "b",
    "explanation": "O tipo sanguíneo é considerado dado pessoal sensível segundo o art. 5º, II e art. 11 da LGPD, pois se enquadra em 'dados relativos à saúde'. Requer consentimento explícito para coleta e tratamento.",
    "reference": "LGPD — Lei 13.709/2018, art. 5º e 11"
  }
];

const INLINE_SCENARIOS = [
  {
    "id": "ts001",
    "difficulty": "easy",
    "patient": {
      "name": "João",
      "age": 45,
      "bloodType": "A+",
      "situation": "Cirurgia eletiva de joelho. Necessita de 2 unidades de hemácias."
    },
    "availableBlood": [
      "A+",
      "B+",
      "O+",
      "AB-",
      "O-",
      "A-"
    ],
    "correctAnswers": [
      "A+",
      "O+",
      "O-",
      "A-"
    ],
    "explanation": "Paciente A+ pode receber hemácias de: A+, A-, O+, O-. Os tipos B+ e AB- contêm antígenos contra os quais o paciente possui anticorpos (Anti-B)."
  },
  {
    "id": "ts002",
    "difficulty": "easy",
    "patient": {
      "name": "Maria",
      "age": 28,
      "bloodType": "O-",
      "situation": "Hemorragia pós-parto. Estado de choque hemorrágico."
    },
    "availableBlood": [
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-"
    ],
    "correctAnswers": [
      "O-"
    ],
    "explanation": "Paciente O- não possui antígenos A, B nem D, e possui Anti-A e Anti-B no plasma. Só pode receber hemácias de O- (doador universal absoluto) para evitar reação hemolítica aguda."
  },
  {
    "id": "ts003",
    "difficulty": "medium",
    "patient": {
      "name": "Carlos",
      "age": 62,
      "bloodType": "AB+",
      "situation": "Anemia severa por insuficiência renal crônica."
    },
    "availableBlood": [
      "A+",
      "B-",
      "O+",
      "AB+",
      "AB-"
    ],
    "correctAnswers": [
      "A+",
      "B-",
      "O+",
      "AB+",
      "AB-"
    ],
    "explanation": "AB+ é o receptor universal de hemácias. Possui todos os antígenos (A, B, D) e não produz anticorpos anti-A nem anti-B. Pode receber de qualquer tipo ABO e Rh."
  },
  {
    "id": "ts004",
    "difficulty": "medium",
    "patient": {
      "name": "Ana",
      "age": 19,
      "bloodType": "B-",
      "situation": "Trauma em acidente de moto. Tipo sanguíneo confirmado."
    },
    "availableBlood": [
      "B+",
      "B-",
      "O+",
      "O-",
      "A-",
      "AB-"
    ],
    "correctAnswers": [
      "B-",
      "O-"
    ],
    "explanation": "Paciente B- possui antígeno B, mas não possui D. Possui Anti-A no plasma. Pode receber de B- (mesmo tipo) ou O- (sem A, sem B, sem D). B+ e O+ têm antígeno D, que causaria sensibilização."
  },
  {
    "id": "ts005",
    "difficulty": "hard",
    "patient": {
      "name": "Pedro",
      "age": 8,
      "bloodType": "A-",
      "situation": "Leucemia aguda em quimioterapia. Necessita transfusão de plaquetas e hemácias."
    },
    "availableBlood": [
      "A+",
      "A-",
      "O+",
      "O-",
      "AB+",
      "B-"
    ],
    "correctAnswers": [
      "A-",
      "O-"
    ],
    "explanation": "Crianças com leucemia em tratamento devem receber sangue Rh-negativo sempre que possível para evitar sensibilização ao antígeno D, que limitaria opções futuras. A- e O- são as únicas opções seguras."
  },
  {
    "id": "ts006",
    "difficulty": "hard",
    "patient": {
      "name": "Lucia",
      "age": 35,
      "bloodType": "O+",
      "situation": "Gravidez de risco com anemia falciforme. Gestação de 32 semanas."
    },
    "availableBlood": [
      "O+",
      "O-",
      "A+",
      "A-",
      "B+",
      "B-"
    ],
    "correctAnswers": [
      "O+",
      "O-"
    ],
    "explanation": "Gestante O+ pode receber O+ ou O-. Porém, em gestação, prefere-se O- para evitar sensibilização Rh, especialmente se o bebê for Rh+. O+ é aceitável se não houver O- disponível e a gestante já for Rh+."
  },
  {
    "id": "ts007",
    "difficulty": "hard",
    "patient": {
      "name": "Roberto",
      "age": 55,
      "bloodType": "AB-",
      "situation": "Transplante de fígado em lista de espera. Necessita reserva de sangue."
    },
    "availableBlood": [
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-"
    ],
    "correctAnswers": [
      "A-",
      "B-",
      "AB-",
      "O-"
    ],
    "explanation": "AB- possui antígenos A e B, mas não D. Pode receber de A-, B-, AB- e O-. Não pode receber de tipos Rh+ (A+, B+, AB+, O+) pois não possui o antígeno D."
  }
];

const INLINE_MYTHS = [
  {
    "id": "m001",
    "statement": "Pessoas com tipo sanguíneo O são 'doadores universais' e podem doar para qualquer pessoa sem risco.",
    "answer": "partial_myth",
    "answerLabel": "MITO PARCIAL",
    "explanation": "É verdade que hemácias do tipo O não possuem antígenos A ou B, tornando-as compatíveis com qualquer receptor para transfusão de hemácias concentradas. Porém, o plasma do tipo O contém anticorpos Anti-A e Anti-B, que podem causar reações se o sangue total for transfundido. Por isso, em emergência, usa-se apenas hemácias concentradas de O-, não sangue total.",
    "references": [
      "Manual de Medicina Transfusional, Ministério da Saúde, 2016"
    ],
    "icon": "🩸"
  },
  {
    "id": "m002",
    "statement": "O tipo sanguíneo determina a personalidade de uma pessoa (tipo A = organizado, tipo B = criativo, etc.).",
    "answer": "myth",
    "answerLabel": "MITO",
    "explanation": "Não existe evidência científica robusta que correlacione tipo sanguíneo com traços de personalidade. A 'teoria da personalidade por tipo sanguíneo' surgiu no Japão na década de 1930 como pseudociência e foi amplamente desacreditada por estudos controlados.",
    "references": [
      "Wikipedia: Blood type personality theory",
      "Dean, 2012 — Critique of blood type personality theory"
    ],
    "icon": "🧠"
  },
  {
    "id": "m003",
    "statement": "Sangue Rh negativo é raro e perigoso para quem o possui.",
    "answer": "partial_myth",
    "answerLabel": "MITO PARCIAL",
    "explanation": "É verdade que Rh- é relativamente raro (~15% da população brasileira), mas não é 'perigoso'. A única complicação importante é em gestações de mãe Rh- com bebê Rh+, que pode causar DHRN. Com imunoglobulina anti-D (Rhogam), essa condição é perfeitamente prevenível.",
    "references": [
      "Dados populacionais brasileiros — IBGE/Ministério da Saúde"
    ],
    "icon": "🩺"
  },
  {
    "id": "m004",
    "statement": "Os filhos sempre herdam o tipo sanguíneo do pai.",
    "answer": "partial_myth",
    "answerLabel": "MITO PARCIAL",
    "explanation": "Os filhos herdam UM alelo de cada pai. O tipo sanguíneo depende da combinação dos alelos materno e paterno. Um pai tipo A (IAi) e mãe tipo B (IBi) podem ter filho tipo AB, A, B ou O, independentemente do tipo de cada um.",
    "references": [
      "Genética mendeliana — Sistema ABO"
    ],
    "icon": "👨‍👩‍👧‍👦"
  },
  {
    "id": "m005",
    "statement": "Tipo AB pode receber sangue de qualquer pessoa sem problemas.",
    "answer": "partial_myth",
    "answerLabel": "MITO PARCIAL",
    "explanation": "Verdadeiro apenas para hemácias concentradas. Tipo AB+ é 'receptor universal' de hemácias porque não possui anticorpos anti-A nem anti-B. Porém, para transfusão de plasma, a regra se inverte: tipo AB só pode RECEBER plasma de tipo AB, pois possui antígenos A e B que reagiriam com plasma de outros tipos.",
    "references": [
      "Hematologia — Compatibilidade transfusional"
    ],
    "icon": "🅰️🅱️"
  },
  {
    "id": "m006",
    "statement": "A dieta do tipo sanguíneo (comer de acordo com seu tipo) melhora a saúde e ajuda a emagrecer.",
    "answer": "myth",
    "answerLabel": "MITO",
    "explanation": "Nenhum estudo científico randomizado controlado demonstrou benefícios da dieta do tipo sanguíneo. Uma revisão sistemática de 2013 (Wang et al., PLoS ONE) concluiu que não há evidência para apoiar essa teoria. A dieta balanceada e individualizada por necessidades nutricionais é o que funciona.",
    "references": [
      "Wang et al., 2013 — PLoS ONE (meta-análise)"
    ],
    "icon": "🥗"
  },
  {
    "id": "m007",
    "statement": "Mosquitos preferem picar pessoas com tipo sanguíneo O.",
    "answer": "partial_fact",
    "answerLabel": "FATO PARCIAL",
    "explanation": "Alguns estudos (como o de Shirai et al., 2004, Journal of Medical Entomology) sugerem que mosquitos do gênero Aedes e Anopheles são mais atraídos por indivíduos tipo O. Porém, outros fatores (CO2 exalado, temperatura corporal, microbioma da pele) também influenciam fortemente. Não é uma regra absoluta.",
    "references": [
      "Shirai et al., 2004 — Journal of Medical Entomology"
    ],
    "icon": "🦟"
  },
  {
    "id": "m008",
    "statement": "O tipo sanguíneo de uma pessoa pode mudar ao longo da vida.",
    "answer": "myth",
    "answerLabel": "MITO",
    "explanation": "O tipo sanguíneo ABO é geneticamente determinado e permanece inalterado ao longo da vida, exceto em casos extremamente raros de transplante de medula óssea (onde o tipo muda para o do doador) ou condições hematológicas muito raras (como síndrome de Bombay).",
    "references": [
      "Genética básica — Determinação do tipo ABO"
    ],
    "icon": "🔄"
  },
  {
    "id": "m009",
    "statement": "Doar sangue enfraquece a pessoa e demora meses para se recuperar.",
    "answer": "myth",
    "answerLabel": "MITO",
    "explanation": "O corpo humano repõe o volume de plasma em 24-48 horas e as hemácias em 4-6 semanas. A doação de sangue é segura para adultos saudáveis e não causa enfraquecimento persistente. Recomenda-se apenas evitar esforço físico intenso no dia da doação.",
    "references": [
      "Hemocentros — Orientações pós-doação"
    ],
    "icon": "💪"
  },
  {
    "id": "m010",
    "statement": "Pessoas com tipo sanguíneo A têm maior risco de desenvolver COVID-19 grave.",
    "answer": "partial_myth",
    "answerLabel": "MITO PARCIAL",
    "explanation": "Alguns estudos iniciais (Zhao et al., 2020) sugeriram associação entre tipo A e maior risco, e tipo O com menor risco. Porém, meta-análises subsequentes mostraram que o efeito é pequeno, inconsistente entre populações e provavelmente confundido por outros fatores genéticos. O tipo sanguíneo NÃO é um preditor confiável de risco de COVID-19.",
    "references": [
      "Zhao et al., 2020 — NEJM (estudo inicial)",
      "Meta-análise 2021 — Inconclusivo"
    ],
    "icon": "🦠"
  }
];

const INLINE_ENCYCLOPEDIA = [
  {
    "id": "enc001",
    "title": "Sistema ABO",
    "category": "fundamentos",
    "shortDescription": "O sistema de classificação sanguínea mais importante na medicina transfusional.",
    "content": "O sistema ABO foi descoberto por Karl Landsteiner em 1900-1901, quando observou que o soro de alguns indivíduos aglutinava hemácias de outros. Ele identificou três grupos (A, B, O) e, posteriormente, seu aluno Decastello descobriu o quarto grupo (AB). Landsteiner recebeu o Prêmio Nobel de Fisiologia ou Medicina em 1930 por essa descoberta. O sistema ABO é determinado por três alelos (IA, IB, i) localizados no cromossomo 9. Os antígenos A e B são glicoproteínas e glicolipídios na superfície dos eritrócitos, enquanto o tipo O não expressa nenhum desses antígenos.",
    "keyTerms": [
      "antígeno",
      "Landsteiner",
      "aglutinação",
      "alelos"
    ],
    "relatedEntries": [
      "enc002",
      "enc003",
      "enc005"
    ],
    "icon": "🔬"
  },
  {
    "id": "enc002",
    "title": "Antígenos",
    "category": "fundamentos",
    "shortDescription": "Moléculas na superfície das hemácias que determinam o tipo sanguíneo.",
    "content": "Antígenos são moléculas capazes de induzir resposta imune. No sistema ABO, os antígenos A e B são oligossacarídeos ligados a proteínas ou lipídios da membrana eritrocitária. O antígeno A possui N-acetilgalactosamina como açúcar terminal, enquanto o antígeno B possui galactose. O tipo O possui apenas a cadeia precursora H, sem açúcar terminal adicional. O antígeno D (Rh) é uma proteína transmembrana de 417 aminoácidos, diferente na estrutura dos antígenos ABO.",
    "keyTerms": [
      "glicoproteína",
      "oligossacarídeo",
      "membrana eritrocitária",
      "antígeno D"
    ],
    "relatedEntries": [
      "enc001",
      "enc003",
      "enc006"
    ],
    "icon": "🧬"
  },
  {
    "id": "enc003",
    "title": "Anticorpos",
    "category": "fundamentos",
    "shortDescription": "Proteínas do sistema imune que reconhecem e neutralizam antígenos estranhos.",
    "content": "No sistema ABO, os anticorpos anti-A e anti-B são naturalmente presentes no plasma de indivíduos que não possuem o antígeno correspondente. Eles são predominantemente IgM (imunoglobulina M), de grande tamanho, que não atravessam a placenta. O tipo O possui anti-A e anti-B; o tipo A possui anti-B; o tipo B possui anti-A; o tipo AB não possui nenhum. Já o anti-D (anti-Rh) não é natural — só aparece após exposição ao antígeno D, como em gestação ou transfusão, e é do tipo IgG, que atravessa a placenta.",
    "keyTerms": [
      "IgM",
      "IgG",
      "anti-A",
      "anti-B",
      "anti-D"
    ],
    "relatedEntries": [
      "enc002",
      "enc004",
      "enc008"
    ],
    "icon": "🛡️"
  },
  {
    "id": "enc004",
    "title": "Aglutinação",
    "category": "fundamentos",
    "shortDescription": "Reação visual entre antígenos e anticorpos que forma grumos de hemácias.",
    "content": "A aglutinação ocorre quando anticorpos se ligam a antígenos em superfícies de hemácias adjacentes, formando pontes que unem as células em clusters visíveis. Cada molécula de IgM pode ligar-se a 10 antígenos, sendo extremamente eficaz na aglutinação. In vitro, a aglutinação é o princípio do teste de tipagem sanguínea: hemácias com antígeno A aglutinam na presença de anti-A; hemácias sem o antígeno permanecem dispersas. A aglutinação in vivo (transfusão incompatível) ativa o sistema do complemento, causando hemólise intravascular, liberação de hemoglobina, obstrução tubular renal e choque hemorrágico.",
    "keyTerms": [
      "IgM",
      "complemento",
      "hemólise",
      "teste de tipagem"
    ],
    "relatedEntries": [
      "enc002",
      "enc003",
      "enc007"
    ],
    "icon": "🔴"
  },
  {
    "id": "enc005",
    "title": "Genética Mendeliana do ABO",
    "category": "genetica",
    "shortDescription": "Como os alelos IA, IB e i determinam o tipo sanguíneo por herança mendeliana.",
    "content": "O lócus ABO está no braço longo do cromossomo 9 (9q34). Três alelos principais determinam o fenótipo: IA (codifica transferase A, que adiciona N-acetilgalactosamina), IB (codifica transferase B, que adiciona galactose) e i (alelo recessivo, não codifica enzima funcional). IA e IB são codominantes entre si; ambos dominam sobre i. Assim, existem 6 genótipos possíveis: IAIA, IAi, IBIB, IBi, IAIB, ii — que resultam em 4 fenótipos: A, B, AB e O. A herança segue as leis de Mendel: cada pai transmite um alelo aleatório para cada filho.",
    "keyTerms": [
      "alelos",
      "codominância",
      "recessivo",
      "cromossomo 9",
      "fenótipo"
    ],
    "relatedEntries": [
      "enc001",
      "enc002"
    ],
    "icon": "🧬"
  },
  {
    "id": "enc006",
    "title": "Fator Rh (Antígeno D)",
    "category": "fundamentos",
    "shortDescription": "Segundo sistema de tipagem sanguínea mais importante, determinado pela presença do antígeno D.",
    "content": "O sistema Rh foi descoberto em 1937 por Landsteiner e Wiener em macacos Rhesus. O antígeno D é uma proteína transmembrana (polipeptídeo de 417 aa) codificada pelo gene RHD. Indivíduos Rh+ possuem pelo menos um alelo D; Rh- possuem dois alelos d (deleção ou mutação não funcional). A frequência de Rh- varia etnicamente: ~15% em caucasianos, ~5-8% em afro-descendentes, <1% em asiáticos. O Rh é crucial em transfusões (sensibilização) e gestações (DHRN). A imunoglobulina anti-D (Rhogam) previne a sensibilização em mães Rh-.",
    "keyTerms": [
      "RHD",
      "Rhogam",
      "sensibilização",
      "transmembrana"
    ],
    "relatedEntries": [
      "enc002",
      "enc008"
    ],
    "icon": "🅾️"
  },
  {
    "id": "enc007",
    "title": "Transfusão Sanguínea",
    "category": "clinica",
    "shortDescription": "Procedimento médico de transferência de sangue ou componentes entre doador e receptor.",
    "content": "A primeira transfusão documentada foi realizada por Jean-Baptiste Denys em 1667 (sangue de cordeiro, com resultado fatal). James Blundell, em 1818, foi o primeiro a transfundir sangue humano com sucesso. A tipagem ABO (1901) e a descoberta do Rh (1937) revolucionaram a segurança transfusional. Hoje, o sangue é fracionado em componentes: hemácias concentradas, plasma fresco congelado, plaquetas e crioprecipitado. A compatibilidade ABO/Rh é obrigatória para hemácias. Além disso, são realizados testes cruzados (crossmatching) e triagem para anticorpos irregulares.",
    "keyTerms": [
      "hemácias concentradas",
      "crossmatching",
      "componentes sanguíneos",
      "tipagem cruzada"
    ],
    "relatedEntries": [
      "enc004",
      "enc006",
      "enc008"
    ],
    "icon": "💉"
  },
  {
    "id": "enc008",
    "title": "Doença Hemolítica do Recém-Nascido (DHRN)",
    "category": "clinica",
    "shortDescription": "Condição em que anticorpos maternos destroem hemácias fetais, causando anemia grave.",
    "content": "A DHRN ocorre quando uma mãe sensibilizada produz anticorpos IgG que atravessam a placenta e atacam hemácias fetais. A forma mais comum é por incompatibilidade Rh: mãe Rh- + bebê Rh+. A primeira gestação geralmente não é afetada (a sensibilização ocorre no parto). Em gestações subsequentes, o bebê desenvolve anemia hemolítica, icterícia, hepatoesplenomegalia e, em casos graves, hidropsia fetal (edema generalizado). A prevenção é feita com imunoglobulina anti-D (Rhogam) aos 28 semanas e no pós-parto (se o bebê for Rh+). O tratamento inclui fototerapia, transfusão intrauterina e, em casos graves, exchange transfusion.",
    "keyTerms": [
      "sensibilização",
      "imunoglobulina anti-D",
      "icterícia",
      "anemia hemolítica"
    ],
    "relatedEntries": [
      "enc003",
      "enc006",
      "enc007"
    ],
    "icon": "👶"
  },
  {
    "id": "enc009",
    "title": "Subgrupos de A (A1 e A2)",
    "category": "avancado",
    "shortDescription": "Variações do antígeno A que afetam a expressão e a reatividade sorológica.",
    "content": "O grupo A possui dois subgrupos principais: A1 (~80% dos indivíduos tipo A) e A2 (~20%). A1 expressa mais antígenos A na superfície eritrocitária (~800.000-1.200.000 sítios/célula) do que A2 (~250.000-350.000). O antígeno A1 reage fortemente com anti-A, enquanto A2 pode reação mais fraca. Indivíduos A2 podem produzir anti-A1, um anticorpo que reage com hemácias A1 mas não com A2. Em tipagem de rotina, A1 e A2 não são diferenciados, mas em transfusões de grande volume ou transplante de medula, essa distinção pode ser relevante. O gene A1 é o alelo padrão; A2 resulta de uma mutação pontual que reduz a atividade da transferase A.",
    "keyTerms": [
      "anti-A1",
      "transferase A",
      "subgrupo",
      "expressão antigênica"
    ],
    "relatedEntries": [
      "enc001",
      "enc002"
    ],
    "icon": "🔍"
  },
  {
    "id": "enc010",
    "title": "D Fraco (Weak D)",
    "category": "avancado",
    "shortDescription": "Variante do antígeno D com expressão reduzida, de importância clínica em tipagem.",
    "content": "O fenótipo 'D fraco' (weak D) ocorre quando o antígeno D está presente na membrana eritrocitária em quantidade reduzida (~30-10.000 sítios/célula, vs. ~10.000-30.000 em D normal). Indivíduos D fraco podem ser classificados erroneamente como Rh- em testes de tipagem indireta (soro anti-D policlonais), mas são identificados como Rh+ em testes diretos (monoclonais) ou técnicas de antiglobulina (Coombs). A importância clínica: indivíduos D fraco NÃO produzem anti-D quando expostos a sangue D positivo. Portanto, não necessitam Rhogam em gestação e podem receber sangue Rh+ sem risco de sensibilização. No entanto, como doadores, seu sangue deve ser classificado como Rh+ para não sensibilizar receptores Rh-.",
    "keyTerms": [
      "expressão reduzida",
      "tipagem indireta",
      "antiglobulina",
      "Coombs"
    ],
    "relatedEntries": [
      "enc002",
      "enc006"
    ],
    "icon": "🧪"
  },
  {
    "id": "enc011",
    "title": "Doação de Sangue",
    "category": "saude_publica",
    "shortDescription": "Processo de coleta de sangue voluntário para uso em transfusões e tratamentos.",
    "content": "No Brasil, a doação de sangue é regulada pela RDC 153/2004 da Anvisa. Requisitos básicos: idade 16-69 anos (16-17 com consentimento), peso >50kg, boas condições de saúde, jejum de 2-4h (evitar alimentos gordurosos). O intervalo mínimo é de 60 dias para homens e 90 dias para mulheres (até 4 doações/ano para homens, 3 para mulheres). O volume coletado é ~450mL de sangue total. Após a doação, o plasma é reposto em 24-48h; as hemácias, em 4-6 semanas. O sangue passa por triagem sorológica para HIV, hepatites B e C, sífilis, Chagas e HTLV. O Brasil tem ~1,8% de doadores voluntários regularmente (meta OMS: 3-5%).",
    "keyTerms": [
      "RDC 153/2004",
      "triagem sorológica",
      "doador voluntário",
      "hemocomponentes"
    ],
    "relatedEntries": [
      "enc007",
      "enc012"
    ],
    "icon": "❤️"
  },
  {
    "id": "enc012",
    "title": "Hemocentros no Brasil",
    "category": "saude_publica",
    "shortDescription": "Rede de serviços de coleta, processamento e distribuição de sangue no SUS.",
    "content": "Os hemocentros são unidades especializadas que coletam, processam, testam, armazenam e distribuem sangue e hemocomponentes. No Brasil, a rede é coordenada pelo Ministério da Saúde e regulamentada por legislações específicas (Lei 10.205/2001, RDC 153/2004). O Hemominas (MG), Hemope (PE), Hemocentro de Campinas (SP) e Fundação Pró-Sangue (SP) são referências nacionais. O sistema utiliza o sistema InVesalius e SIGTAP para gestão. O sangue é armazenado em diferentes temperaturas: hemácias a 2-6°C (vida útil 35-42 dias com aditivos), plasma a -18°C (1 ano), plaquetas a 20-24°C com agitação (5 dias). O Brasil possui ~3.000 bancos de sangue, mas a distribuição é desigual, com concentração na região Sudeste.",
    "keyTerms": [
      "SUS",
      "Hemominas",
      "hemocomponentes",
      "InVesalius",
      "armazenamento"
    ],
    "relatedEntries": [
      "enc007",
      "enc011"
    ],
    "icon": "🏥"
  }
];

// --- FILE: utils/random.js ---
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// --- FILE: utils/blood-logic.js ---
const BLOOD_TYPES = {
  A_POS:  { label: 'A+',  antigens: { A: true,  B: false, D: true },  frequencyLabel: '~34%', description: 'Tipo A positivo é o mais comum no Brasil. Possui antígeno A e fator Rh.' },
  A_NEG:  { label: 'A-',  antigens: { A: true,  B: false, D: false }, frequencyLabel: '~6%',  description: 'Tipo A negativo. Possui antígeno A, mas não possui fator Rh.' },
  B_POS:  { label: 'B+',  antigens: { A: false, B: true,  D: true },  frequencyLabel: '~8%',  description: 'Tipo B positivo. Possui antígeno B e fator Rh.' },
  B_NEG:  { label: 'B-',  antigens: { A: false, B: true,  D: false }, frequencyLabel: '~2%',  description: 'Tipo B negativo. Possui antígeno B, mas não possui fator Rh.' },
  AB_POS: { label: 'AB+', antigens: { A: true,  B: true,  D: true },  frequencyLabel: '~4%',  description: 'Tipo AB positivo. Possui antígenos A e B, e fator Rh. Receptor universal de hemácias.' },
  AB_NEG: { label: 'AB-', antigens: { A: true,  B: true,  D: false }, frequencyLabel: '~1%',  description: 'Tipo AB negativo. Possui antígenos A e B, mas não possui fator Rh.' },
  O_POS:  { label: 'O+',  antigens: { A: false, B: false, D: true },  frequencyLabel: '~36%', description: 'Tipo O positivo. Não possui antígenos A ou B, mas tem fator Rh. Doador universal de hemácias.' },
  O_NEG:  { label: 'O-',  antigens: { A: false, B: false, D: false }, frequencyLabel: '~9%',  description: 'Tipo O negativo. Não possui antígenos A, B nem fator Rh. Doador universal verdadeiro.' }
};

const REAGENT_MAP = {
  'anti-a': 'A',
  'anti-b': 'B',
  'anti-d': 'D'
};

function getBloodTypeById(id) {
  return BLOOD_TYPES[id] || null;
}

function shouldAgglutinate(bloodTypeId, reagentType) {
  const type = BLOOD_TYPES[bloodTypeId];
  if (!type) return false;
  const antigen = REAGENT_MAP[reagentType];
  if (!antigen) return false;
  return type.antigens[antigen] === true;
}

function getAllBloodTypeIds() {
  return Object.keys(BLOOD_TYPES);
}

function getBloodTypeByReactions(antiA, antiB, antiD) {
  const typeIds = Object.keys(BLOOD_TYPES);
  for (const id of typeIds) {
    const t = BLOOD_TYPES[id];
    if (t.antigens.A === antiA && t.antigens.B === antiB && t.antigens.D === antiD) {
      return { id, ...t };
    }
  }
  return null;
}

// --- FILE: core/event-bus.js ---
class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }

  off(event, callback) {
    if (!this.events.has(event)) return;
    const listeners = this.events.get(event).filter(cb => cb !== callback);
    this.events.set(event, listeners);
  }

  emit(event, data) {
    if (!this.events.has(event)) return;
    this.events.get(event).forEach(callback => {
      try {
        callback(data);
      } catch (err) {
        console.error(`[EventBus] Erro no handler de "${event}":`, err);
      }
    });
  }

  once(event, callback) {
    const wrapper = (data) => {
      this.off(event, wrapper);
      callback(data);
    };
    this.on(event, wrapper);
  }
}

// --- FILE: core/state-manager.js ---
class StateManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.state = {
      screen: 'home',
      theme: 'dark',
      highContrast: false,
      score: {
        total: 0,
        currentStreak: 0,
        bestStreak: 0,
        typingsCompleted: 0,
        quizzesTaken: 0,
        scenariosCompleted: 0
      },
      achievements: {
        unlocked: [],
        progress: {}
      },
      simulation: {
        mode: 'discovery',
        selectedType: null,
        wells: {
          'anti-a': { filled: false, agglutinated: null },
          'anti-b': { filled: false, agglutinated: null },
          'anti-d': { filled: false, agglutinated: null }
        },
        completed: false
      },
      quiz: {
        currentQuestion: 0,
        questions: [],
        answers: [],
        timer: null
      }
    };
  }

  init() {
    this.bus.on('state:update', ({ key, value }) => {
      this.set(key, value);
    });
  }

  get(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], this.state);
  }

  set(key, value) {
    const keys = key.split('.');
    let target = this.state;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in target)) target[keys[i]] = {};
      target = target[keys[i]];
    }
    const oldValue = target[keys[keys.length - 1]];
    target[keys[keys.length - 1]] = value;
    this.bus.emit('state:changed', { key, value, oldValue });
  }

  getAll() {
    return structuredClone ? structuredClone(this.state) : JSON.parse(JSON.stringify(this.state));
  }
}

// --- FILE: core/storage.js ---
const PREFIX = 'abo-sim-';

class Storage {
  get(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error(`[Storage] Erro ao ler "${key}":`, e);
      return null;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error(`[Storage] Erro ao salvar "${key}":`, e);
    }
  }

  remove(key) {
    localStorage.removeItem(PREFIX + key);
  }

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  }
}

// --- FILE: core/router.js ---
class Router {
  constructor(eventBus) {
    this.bus = eventBus;
    this.screens = new Map();
    this.currentScreen = 'home';
  }

  init() {
    document.querySelectorAll('[data-screen]').forEach(el => {
      this.screens.set(el.dataset.screen, el);
    });

    window.addEventListener('hashchange', () => this.handleRoute());
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.dataset.nav || el.getAttribute('href')?.replace('#', '');
        if (target) this.navigate(target);
      });
    });

    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash, false);
  }

  navigate(screenId, updateHash = true) {
    if (!this.screens.has(screenId)) {
      console.warn(`[Router] Tela "${screenId}" não encontrada`);
      return;
    }

    this.screens.forEach((el, id) => {
      const isActive = id === screenId;
      el.hidden = !isActive;
      el.classList.toggle('screen--active', isActive);
    });

    this.currentScreen = screenId;
    this.bus.emit('screen:change', { from: this.currentScreen, to: screenId });

    if (updateHash) {
      window.location.hash = screenId;
    }
  }

  getCurrentScreen() {
    return this.currentScreen;
  }
}

// --- FILE: ui/theme.js ---
class ThemeManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'theme';
    this.toggleBtn = document.getElementById('theme-toggle');
  }

  init() {
    const saved = this.storage.get(this.key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.storage.set(this.key, theme);
    if (this.toggleBtn) {
      this.toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
      this.toggleBtn.setAttribute('aria-label',
        theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'
      );
    }
  }

  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}

// --- FILE: ui/accessibility.js ---
class AccessibilityManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'high-contrast';
    this.toggleBtn = document.getElementById('accessibility-toggle');
  }

  init() {
    const enabled = this.storage.get(this.key) === true;
    if (enabled) this.setHighContrast(true);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  setHighContrast(enabled) {
    document.documentElement.classList.toggle('high-contrast', enabled);
    this.storage.set(this.key, enabled);
  }

  toggle() {
    const isEnabled = document.documentElement.classList.contains('high-contrast');
    this.setHighContrast(!isEnabled);
  }
}

// --- FILE: audio/audio-engine.js ---
/**
 * Audio Engine — ABO Sim
 * Gera sons proceduralmente via Web Audio API (sem arquivos externos).
 * Inspirado em sons satisfatórios de jogos casuais/slots.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
    this.init();
  }

  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.25;
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('[Audio] Web Audio API não suportada');
      this.enabled = false;
    }
  }

  _ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _osc(freq, type, duration, startTime, gainValue = 0.3) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  _noise(duration, startTime, gainValue = 0.15) {
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  play(name) {
    if (!this.enabled || !this.ctx) return;
    this._ensureContext();
    const now = this.ctx.currentTime;

    switch (name) {
      case 'click':
        // Tick curto e seco (feedback tátil)
        this._osc(1200, 'square', 0.05, now, 0.08);
        this._osc(1800, 'sine', 0.03, now, 0.06);
        break;

      case 'hover':
        // Tick sutil de hover
        this._osc(800, 'sine', 0.03, now, 0.04);
        break;

      case 'drop':
        // Som líquido de gota/pingar sangue
        this._osc(600, 'sine', 0.08, now, 0.3);
        this._osc(400, 'sine', 0.12, now + 0.02, 0.2);
        this._noise(0.06, now + 0.01, 0.1);
        break;

      case 'agglutinate':
        // Partículas grudando — clusters de notas curtas ascendentes
        [0, 0.04, 0.08, 0.12].forEach((t, i) => {
          this._osc(300 + i * 120, 'triangle', 0.06, now + t, 0.15);
        });
        break;

      case 'correct':
        // Acerto — arpeggio brilhante ascendente (estilo slots)
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          this._osc(freq, 'sine', 0.15, now + i * 0.08, 0.2);
          this._osc(freq * 2, 'triangle', 0.1, now + i * 0.08, 0.08);
        });
        break;

      case 'wrong':
        // Erro — nota grave descendente curta
        this._osc(200, 'sawtooth', 0.25, now, 0.15);
        this._osc(150, 'sine', 0.3, now + 0.1, 0.12);
        break;

      case 'achievement':
        // Conquista — fanfarra de bônus (3 notas brilhantes)
        this._osc(880, 'sine', 0.18, now, 0.25);
        this._osc(1108.73, 'sine', 0.18, now + 0.12, 0.25);
        this._osc(1318.51, 'sine', 0.25, now + 0.24, 0.3);
        this._osc(1760, 'triangle', 0.2, now + 0.36, 0.15);
        break;

      case 'complete':
        // Quiz/simulação completa — sequência de celebração
        const notes = [523.25, 587.33, 659.25, 783.99, 880, 1046.50, 1174.66, 1318.51];
        notes.forEach((freq, i) => {
          this._osc(freq, 'sine', 0.2, now + i * 0.1, 0.18);
          if (i % 2 === 0) {
            this._osc(freq * 1.5, 'triangle', 0.1, now + i * 0.1, 0.08);
          }
        });
        break;

      case 'tick':
        // Contador/click metálico
        this._osc(2000, 'square', 0.02, now, 0.05);
        break;
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const audio = new AudioEngine();

// Atalhos globais
window.playSound = (name) => audio.play(name);
window.toggleSound = () => audio.toggle();

{ audio };

// --- FILE: simulation/particle.js ---


class Particle {
  constructor(well) {
    this.well = well;
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * well.radius * 0.6;
    this.x = well.centerX + Math.cos(angle) * dist;
    this.y = well.centerY + Math.sin(angle) * dist;
    this.vx = randomRange(-0.5, 0.5);
    this.vy = randomRange(-0.5, 0.5);
    this.radius = randomRange(5, 8);
    this.baseColor = 'hsl(0, 65%, 40%)';
    this.clusterColor = 'hsl(0, 70%, 28%)';
    this.color = this.baseColor;
    this.opacity = 0;
    this.targetOpacity = randomRange(0.55, 0.75);
    this.clusterId = null;
    this.mass = 1;
    this.friction = 0.98;
    this.MAX_SPEED = 1.5;
  }

  update(dt) {
    if (this.opacity < this.targetOpacity) {
      this.opacity = Math.min(this.opacity + dt * 2, this.targetOpacity);
    }

    if (this.clusterId !== null) {
      this._updateClustered(dt);
    } else {
      this._updateFree(dt);
    }

    this._checkWallCollision();
  }

  _updateFree(dt) {
    this.vx += randomRange(-0.1, 0.1);
    this.vy += randomRange(-0.1, 0.1);
    this.vx *= this.friction;
    this.vy *= this.friction;

    const speed = Math.hypot(this.vx, this.vy);
    if (speed > this.MAX_SPEED) {
      this.vx = (this.vx / speed) * this.MAX_SPEED;
      this.vy = (this.vy / speed) * this.MAX_SPEED;
    }

    this.x += this.vx * dt * 60;
    this.y += this.vy * dt * 60;
  }

  _updateClustered(dt) {
    this.vx += randomRange(-0.03, 0.03);
    this.vy += randomRange(-0.03, 0.03);
    this.vx *= 0.92;
    this.vy *= 0.92;
    this.x += this.vx * dt * 60;
    this.y += this.vy * dt * 60;
  }

  _checkWallCollision() {
    const well = this.well;
    const dx = this.x - well.centerX;
    const dy = this.y - well.centerY;
    const dist = Math.hypot(dx, dy);

    if (dist + this.radius > well.radius) {
      const nx = dx / dist;
      const ny = dy / dist;
      const dot = this.vx * nx + this.vy * ny;
      this.vx -= 2 * dot * nx;
      this.vy -= 2 * dot * ny;
      this.x = well.centerX + nx * (well.radius - this.radius - 1);
      this.y = well.centerY + ny * (well.radius - this.radius - 1);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

// --- FILE: simulation/particle-system.js ---


class ParticleSystem {
  constructor(well) {
    this.well = well;
    this.particles = [];
    this.pool = [];
    this.maxParticles = 50;
  }

  spawn(count) {
    const toSpawn = Math.min(count, this.maxParticles - this.particles.length);
    for (let i = 0; i < toSpawn; i++) {
      let p = this.pool.pop();
      if (!p) {
        p = new Particle(this.well);
      } else {
        this._resetParticle(p);
      }
      this.particles.push(p);
    }
  }

  clear() {
    this.pool.push(...this.particles);
    this.particles = [];
  }

  update(dt) {
    for (const p of this.particles) {
      p.update(dt);
    }
  }

  draw(ctx) {
    for (const p of this.particles) {
      p.draw(ctx);
    }
  }

  _resetParticle(p) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.well.radius * 0.6;
    p.x = this.well.centerX + Math.cos(angle) * dist;
    p.y = this.well.centerY + Math.sin(angle) * dist;
    p.vx = (Math.random() - 0.5);
    p.vy = (Math.random() - 0.5);
    p.opacity = 0;
    p.clusterId = null;
    p.color = p.baseColor;
    p.well = this.well;
  }
}

// --- FILE: simulation/agglutination.js ---
const ATTRACTION_RADIUS = 60;
const ATTRACTION_FORCE = 0.02;
const CLUSTER_RADIUS = 12;
const NUM_SEEDS = 4;
const DAMPING = 0.92;

class AgglutinationEngine {
  constructor() {
    this.active = false;
    this.clusters = [];
    this.progress = 0;
  }

  start(particles) {
    if (this.active) return;
    this.active = true;
    this.progress = 0;
    this.clusters = [];

    const eligible = particles.filter(p => p.clusterId === null);
    if (eligible.length < NUM_SEEDS) return;

    const shuffled = eligible.sort(() => Math.random() - 0.5);
    for (let i = 0; i < NUM_SEEDS && i < shuffled.length; i++) {
      const seed = shuffled[i];
      seed.clusterId = i;
      seed.color = seed.clusterColor;
      seed.opacity = 0.85;
      this.clusters.push({
        id: i,
        centroidX: seed.x,
        centroidY: seed.y,
        particles: [seed]
      });
    }
  }

  update(dt, particles) {
    if (!this.active) return;
    this.progress += dt;

    for (const p of particles) {
      if (p.clusterId === null) {
        this._attractToNearestCluster(p);
      } else {
        this._maintainInCluster(p);
      }
    }

    this._recalculateCentroids();
  }

  _attractToNearestCluster(particle) {
    let nearest = null;
    let minDist = Infinity;

    for (const cluster of this.clusters) {
      const dx = cluster.centroidX - particle.x;
      const dy = cluster.centroidY - particle.y;
      const dist = Math.hypot(dx, dy);
      if (dist < minDist) {
        minDist = dist;
        nearest = cluster;
      }
    }

    if (!nearest) return;

    if (minDist < ATTRACTION_RADIUS) {
      const fx = (nearest.centroidX - particle.x) * ATTRACTION_FORCE;
      const fy = (nearest.centroidY - particle.y) * ATTRACTION_FORCE;
      particle.vx += fx;
      particle.vy += fy;
    }

    if (minDist < CLUSTER_RADIUS) {
      particle.clusterId = nearest.id;
      particle.color = particle.clusterColor;
      particle.opacity = 0.85;
      nearest.particles.push(particle);
    }
  }

  _maintainInCluster(particle) {
    const cluster = this.clusters.find(c => c.id === particle.clusterId);
    if (!cluster) return;

    const dx = cluster.centroidX - particle.x;
    const dy = cluster.centroidY - particle.y;
    const dist = Math.hypot(dx, dy);

    if (dist > CLUSTER_RADIUS * 2.5) {
      const pull = 0.005;
      particle.vx += dx * pull;
      particle.vy += dy * pull;
    }

    particle.vx += (Math.random() - 0.5) * 0.06;
    particle.vy += (Math.random() - 0.5) * 0.06;
    particle.vx *= DAMPING;
    particle.vy *= DAMPING;
  }

  _recalculateCentroids() {
    for (const cluster of this.clusters) {
      if (cluster.particles.length === 0) continue;
      let sumX = 0, sumY = 0;
      for (const p of cluster.particles) {
        sumX += p.x;
        sumY += p.y;
      }
      cluster.centroidX = sumX / cluster.particles.length;
      cluster.centroidY = sumY / cluster.particles.length;
    }
  }

  reset() {
    this.active = false;
    this.clusters = [];
    this.progress = 0;
  }
}

// --- FILE: simulation/reagent-well.js ---




class ReagentWell {
  constructor(canvasId, type, label) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.type = type;
    this.label = label;
    this.state = 'empty';
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = Math.min(this.centerX, this.centerY) - 4;
    this.particleSystem = new ParticleSystem(this);
    this.agglutinationEngine = new AgglutinationEngine();
    this.bloodType = null;
    this.manualAgglutinated = false;
  }

  addBlood(bloodType) {
    if (this.state !== 'empty') return;
    this.bloodType = bloodType;
    this.state = 'filled';
    this.particleSystem.spawn(40);

    if (shouldAgglutinate(bloodType, this.type)) {
      setTimeout(() => {
        this.agglutinationEngine.start(this.particleSystem.particles);
      }, 500);
    }
  }

  fillForInverseMode() {
    this.reset();
    this.state = 'filled';
    this.particleSystem.spawn(40);
  }

  toggleManualAgglutination() {
    if (this.state !== 'filled') return;
    this.manualAgglutinated = !this.manualAgglutinated;
    if (this.manualAgglutinated) {
      this.agglutinationEngine.start(this.particleSystem.particles);
    } else {
      this.agglutinationEngine.reset();
      // Espalhar as partículas novamente
      for (const p of this.particleSystem.particles) {
        p.clusterId = null;
        p.color = p.baseColor;
        p.vx = (Math.random() - 0.5) * 2;
        p.vy = (Math.random() - 0.5) * 2;
      }
    }
  }

  reset() {
    this.state = 'empty';
    this.bloodType = null;
    this.particleSystem.clear();
    this.agglutinationEngine.reset();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-tertiary').trim() || '#222838';
    ctx.fill();

    let borderColor = '#444';
    if (this.type === 'anti-a') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-a').trim() || '#2e7dd6';
    if (this.type === 'anti-b') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-b').trim() || '#e6b81a';
    if (this.type === 'anti-d') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-d').trim() || '#22a861';

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  update(dt) {
    if (this.state === 'empty') return;
    if (this.agglutinationEngine.active) {
      this.agglutinationEngine.update(dt, this.particleSystem.particles);
    }
    this.drawBackground();
    this.particleSystem.update(dt);
    this.particleSystem.draw(this.ctx);
  }
}

// --- FILE: simulation/animation-loop.js ---
class AnimationLoop {
  constructor() {
    this.running = false;
    this.lastTime = 0;
    this.callbacks = [];
    this.debug = false;
    this.fps = 0;
    this.frameCount = 0;
    this.fpsTime = 0;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  }

  stop() {
    this.running = false;
  }

  add(callback) {
    this.callbacks.push(callback);
  }

  remove(callback) {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  _tick(timestamp) {
    if (!this.running) return;

    const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
    this.lastTime = timestamp;

    this.frameCount++;
    this.fpsTime += dt;
    if (this.fpsTime >= 1) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.fpsTime = 0;
      if (this.debug) {
        console.log(`[AnimationLoop] FPS: ${this.fps}`);
      }
    }

    for (const cb of this.callbacks) {
      cb(dt);
    }

    requestAnimationFrame(this._tick);
  }
}

// --- FILE: simulation/simulation-engine.js ---




class SimulationEngine {
  constructor(eventBus) {
    this.bus = eventBus;
    this.loop = new AnimationLoop();
    this.wells = {};
    this.selectedType = null;
    this.mode = 'discovery';
    this.completed = false;
    this.completeTimeout = null;
  }

  init() {
    this.wells['anti-a'] = new ReagentWell('well-anti-a', 'anti-a', 'Anti-A');
    this.wells['anti-b'] = new ReagentWell('well-anti-b', 'anti-b', 'Anti-B');
    this.wells['anti-d'] = new ReagentWell('well-anti-d', 'anti-d', 'Anti-D');

    for (const well of Object.values(this.wells)) {
      this.loop.add((dt) => well.update(dt));
    }

    this.loop.start();
  }

  setMode(mode) {
    this.mode = mode; // 'discovery', 'standard', ou 'inverse'
    this.reset();
    if (this.mode === 'inverse') {
      for (const well of Object.values(this.wells)) {
        well.fillForInverseMode();
      }
    }
  }

  evaluateInverseMode() {
    const results = {};
    for (const [key, well] of Object.entries(this.wells)) {
      results[key] = well.manualAgglutinated;
    }
    const identifiedType = getBloodTypeByReactions(results['anti-a'], results['anti-b'], results['anti-d']);
    this.bus.emit('simulation:complete', {
      typeId: identifiedType ? identifiedType.id : 'unknown',
      typeData: identifiedType || { label: 'Desconhecido', description: 'Combinação inválida', frequencyLabel: '0%' },
      results
    });
  }

  selectType(typeId) {
    if (typeId === 'random') {
      const types = ['A_POS','A_NEG','B_POS','B_NEG','AB_POS','AB_NEG','O_POS','O_NEG'];
      this.selectedType = types[Math.floor(Math.random() * types.length)];
    } else {
      this.selectedType = typeId;
    }
    this.bus.emit('simulation:typeSelected', { typeId: this.selectedType });
  }

  dropBlood(wellType) {
    if (!this.selectedType) return false;
    const well = this.wells[wellType];
    if (!well || well.state !== 'empty') return false;

    well.addBlood(this.selectedType);
    this.bus.emit('simulation:wellFilled', { wellType, bloodType: this.selectedType });

    if (this.checkComplete()) {
      this.complete();
    }
    return true;
  }

  checkComplete() {
    return Object.values(this.wells).every(w => w.state === 'filled');
  }

  complete() {
    if (this.completed) return;
    this.completed = true;

    const typeData = getBloodTypeById(this.selectedType);
    const results = {};
    for (const [key, well] of Object.entries(this.wells)) {
      results[key] = shouldAgglutinate(this.selectedType, key);
    }

    this.completeTimeout = setTimeout(() => {
      this.bus.emit('simulation:complete', {
        typeId: this.selectedType,
        typeData,
        results
      });
    }, 800);
  }

  reset() {
    if (this.completeTimeout) {
      clearTimeout(this.completeTimeout);
      this.completeTimeout = null;
    }
    this.completed = false;
    for (const well of Object.values(this.wells)) {
      well.reset();
    }
    if (this.mode === 'discovery') {
      this.selectedType = null;
    }
    this.bus.emit('simulation:reset');
  }

  destroy() {
    this.loop.stop();
  }
}

// --- FILE: game/score-manager.js ---
class ScoreManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'score';
  }

  getScore() {
    return this.storage.get(this.key) || {
      total: 0,
      currentStreak: 0,
      bestStreak: 0,
      typingsCompleted: 0,
      quizzesTaken: 0,
      scenariosCompleted: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  addPoints(points) {
    const score = this.getScore();
    score.total += points;
    score.lastUpdated = new Date().toISOString();
    this.storage.set(this.key, score);
    return score;
  }

  updateStreak(currentStreak) {
    const score = this.getScore();
    score.currentStreak = currentStreak;
    if (currentStreak > score.bestStreak) {
      score.bestStreak = currentStreak;
    }
    this.storage.set(this.key, score);
    return score;
  }

  recordTyping() {
    const score = this.getScore();
    score.typingsCompleted++;
    this.storage.set(this.key, score);
    return score;
  }

  recordQuiz() {
    const score = this.getScore();
    score.quizzesTaken++;
    this.storage.set(this.key, score);
    return score;
  }

  recordScenario() {
    const score = this.getScore();
    score.scenariosCompleted++;
    this.storage.set(this.key, score);
    return score;
  }
}

// --- FILE: game/achievements.js ---
const ACHIEVEMENTS_DEF = [
  { id: 'ACH01', name: 'Primeiro Teste', desc: 'Completar 1 tipagem', icon: '🩸', condition: (s) => s.typingsCompleted >= 1 },
  { id: 'ACH02', name: 'Hematologista Mirim', desc: 'Completar tipagem de todos os 8 tipos', icon: '🔬', condition: (s, p) => (p.uniqueTypings || new Set()).size >= 8 },
  { id: 'ACH03', name: 'Quiz Master', desc: 'Acertar 10/10 no quiz', icon: '🏆', condition: (s, p) => p.quizPerfect10 },
  { id: 'ACH04', name: 'Sem Errar', desc: 'Quiz perfeito sem erro', icon: '⭐', condition: (s, p) => p.quizZeroWrong },
  { id: 'ACH05', name: 'Streak de Fogo', desc: 'Streak de 10 respostas certas', icon: '🔥', condition: (s) => s.bestStreak >= 10 },
  { id: 'ACH06', name: 'Enciclopedista', desc: 'Visitar todos os verbetes', icon: '📚', condition: (s, p) => (p.encyclopediaVisited || new Set()).size >= 12 },
  { id: 'ACH07', name: 'Caçador de Mitos', desc: 'Completar todos os Mitos vs. Fatos', icon: '🕵️', condition: (s, p) => (p.mythsCompleted || new Set()).size >= 10 },
  { id: 'ACH08', name: 'Salva-vidas', desc: 'Acertar todos os cenários de transfusão', icon: '❤️', condition: (s, p) => (p.scenariosCompleted || new Set()).size >= 5 }
];

class Achievements {
  constructor(storage, eventBus) {
    this.storage = storage;
    this.bus = eventBus;
    this.key = 'achievements';
  }

  getState() {
    return this.storage.get(this.key) || {
      unlocked: [],
      progress: {}
    };
  }

  check(scoreData, progressData = {}) {
    const state = this.getState();
    const unlocked = new Set(state.unlocked);
    const newUnlocks = [];

    for (const ach of ACHIEVEMENTS_DEF) {
      if (unlocked.has(ach.id)) continue;
      if (ach.condition(scoreData, progressData)) {
        unlocked.add(ach.id);
        newUnlocks.push(ach);
      }
    }

    if (newUnlocks.length > 0) {
      state.unlocked = Array.from(unlocked);
      this.storage.set(this.key, state);
      for (const ach of newUnlocks) {
        this._notify(ach);
        if (window.playSound) window.playSound('achievement');
      }
    }

    return newUnlocks;
  }

  _notify(achievement) {
    this.bus.emit('achievement:unlocked', achievement);

    if (typeof document === 'undefined') return;

    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <span class="achievement-toast__icon">${achievement.icon}</span>
      <div>
        <strong>Conquista desbloqueada!</strong>
        <div>${achievement.name}</div>
      </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('achievement-toast--hide');
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }

  list() {
    const state = this.getState();
    const unlocked = new Set(state.unlocked);
    return ACHIEVEMENTS_DEF.map(ach => ({
      ...ach,
      unlocked: unlocked.has(ach.id)
    }));
  }
}

// --- FILE: game/leaderboard.js ---
class Leaderboard {
  constructor(storage) {
    this.storage = storage;
    this.key = 'leaderboard';
  }

  getEntries() {
    return this.storage.get(this.key) || [];
  }

  addEntry(nickname, score) {
    const entries = this.getEntries();
    entries.push({ nickname, score, date: new Date().toISOString() });
    entries.sort((a, b) => b.score - a.score);
    if (entries.length > 10) entries.length = 10;
    this.storage.set(this.key, entries);
    return entries;
  }

  getTop10() {
    return this.getEntries().slice(0, 10);
  }
}

// --- FILE: quiz/question-loader.js ---


class QuestionLoader {
  constructor() {
    this.questions = [];
    this.usedIds = new Set();
  }

  async load() {
    this.questions = INLINE_QUESTIONS || [];
    return this.questions;
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  getQuestions(count = 10, category = null, difficulty = null) {
    let pool = this.questions.filter(q => q && q.id && !this.usedIds.has(q.id));

    if (category) {
      pool = pool.filter(q => q.category === category);
    }
    if (difficulty) {
      pool = pool.filter(q => q.difficulty === difficulty);
    }

    // Se pool esgotado, resetar e tentar novamente
    if (pool.length === 0) {
      this.usedIds.clear();
      pool = this.questions.filter(q => q && q.id);
      if (category) pool = pool.filter(q => q.category === category);
      if (difficulty) pool = pool.filter(q => q.difficulty === difficulty);
    }

    pool = this.shuffle(pool);
    const selected = pool.slice(0, count);
    selected.forEach(q => { if (q && q.id) this.usedIds.add(q.id); });
    return selected;
  }

  reset() {
    this.usedIds.clear();
  }
}

// --- FILE: quiz/quiz-engine.js ---
class QuizEngine {
  constructor(eventBus, state, storage) {
    this.bus = eventBus;
    this.state = state;
    this.storage = storage;
    this.questions = [];
    this.currentIndex = 0;
    this.answers = [];
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.status = 'idle';
  }

  start(questions) {
    if (!questions || questions.length === 0) {
      console.error('[QuizEngine] Nenhuma questão disponível!');
      this.bus.emit('quiz:error', { message: 'Não foi possível carregar as questões.' });
      return;
    }
    this.questions = questions.filter(q => q && q.id);
    this.currentIndex = 0;
    this.answers = [];
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.status = 'question';
    this.bus.emit('quiz:started', { total: this.questions.length });
    this._startQuestion();
  }

  _startQuestion() {
    this.status = 'question';
    this.bus.emit('quiz:question', {
      index: this.currentIndex,
      total: this.questions.length,
      question: this.questions[this.currentIndex]
    });
  }

  answer(optionId) {
    if (this.status !== 'question') return;

    const question = this.questions[this.currentIndex];
    const isCorrect = optionId === question.correctAnswer;

    if (isCorrect) {
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      const multiplier = this.streak >= 10 ? 5 : this.streak >= 5 ? 3 : this.streak >= 3 ? 2 : 1;
      const points = 10 * multiplier;
      this.score += points;
    } else {
      this.streak = 0;
    }

    this.answers.push({
      questionId: question.id,
      selected: optionId,
      correct: isCorrect
    });

    this.status = 'feedback';
    this.bus.emit('quiz:feedback', {
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      points: isCorrect ? (10 * (this.streak >= 10 ? 5 : this.streak >= 5 ? 3 : this.streak >= 3 ? 2 : 1)) : 0,
      streak: this.streak
    });
  }

  advance() {
    if (this.status !== 'feedback') return;
    this._next();
  }

  _next() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this._finish();
    } else {
      this._startQuestion();
    }
  }

  _finish() {
    this.status = 'results';
    const correctCount = this.answers.filter(a => a.correct).length;
    const result = {
      score: this.score,
      correct: correctCount,
      total: this.questions.length,
      bestStreak: this.bestStreak,
      percentage: Math.round((correctCount / this.questions.length) * 100)
    };

    this._persist(result);
    this.bus.emit('quiz:results', result);
  }

  _persist(result) {
    const saved = this.storage.get('quiz-history') || [];
    saved.push({ ...result, date: new Date().toISOString() });
    if (saved.length > 20) saved.shift();
    this.storage.set('quiz-history', saved);

    const scoreData = this.storage.get('score') || { total: 0 };
    scoreData.total = (scoreData.total || 0) + result.score;
    scoreData.lastUpdated = new Date().toISOString();
    this.storage.set('score', scoreData);
  }

  destroy() {
    // Timer removido
  }
}

// --- FILE: quiz/quiz-renderer.js ---
class QuizRenderer {
  constructor(eventBus) {
    this.bus = eventBus;
    this.container = document.getElementById('quiz-content');
    this._bindEvents();
  }

  _bindEvents() {
    this.bus.on('quiz:started', (data) => this.renderStart(data));
    this.bus.on('quiz:question', (data) => this.renderQuestion(data));
    this.bus.on('quiz:feedback', (data) => this.renderFeedback(data));
    this.bus.on('quiz:results', (data) => this.renderResults(data));
  }

  renderStart({ total }) {
    this.container.innerHTML = `
      <div class="quiz-intro">
        <h3>Quiz ABO/Rh</h3>
        <p>${total} perguntas</p>
        <div class="quiz-progress"><div class="quiz-progress__bar" style="width:0%"></div></div>
      </div>
    `;
  }

  renderQuestion({ index, total, question }) {
    if (!question) {
      console.error('[QuizRenderer] Questão undefined!', { index, total });
      this.container.innerHTML = '<p class="quiz-error">Erro ao carregar questão. Tente reiniciar o quiz.</p>';
      return;
    }
    const progress = ((index) / total) * 100;
    let optionsHtml = '';

    if (question.type === 'true_false') {
      optionsHtml = `
        <button class="quiz-option" data-value="true">Verdadeiro</button>
        <button class="quiz-option" data-value="false">Falso</button>
      `;
    } else if (question.options) {
      const shuffled = [...question.options].sort(() => Math.random() - 0.5);
      optionsHtml = shuffled.map(opt => `
        <button class="quiz-option" data-value="${opt.id}">${opt.text}</button>
      `).join('');
    }

    this.container.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-header">
          <span class="quiz-counter">${index + 1}/${total}</span>
        </div>
        <div class="quiz-progress"><div class="quiz-progress__bar" style="width:${progress}%"></div></div>
        <p class="quiz-text">${question.question}</p>
        <div class="quiz-options">${optionsHtml}</div>
      </div>
    `;

    this.container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('mouseenter', () => { if (window.playSound) window.playSound('hover'); });
      btn.addEventListener('click', () => {
        if (window.playSound) window.playSound('click');
        this.bus.emit('quiz:answer', { optionId: btn.dataset.value });
      });
    });
  }

  renderFeedback({ isCorrect, correctAnswer, explanation, points, streak }) {
    if (window.playSound) window.playSound(isCorrect ? 'correct' : 'wrong');
    const options = this.container.querySelectorAll('.quiz-option');
    options.forEach(btn => {
      btn.disabled = true;
      const val = btn.dataset.value;
      if (val === String(correctAnswer)) {
        btn.classList.add('quiz-option--correct');
      } else if (btn.classList.contains('quiz-option--selected')) {
        btn.classList.add('quiz-option--wrong');
      }
    });

    // Remove feedback anterior para evitar acúmulo
    const oldFeedback = this.container.querySelector('.quiz-feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = `quiz-feedback ${isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? '✅ Correto!' : '❌ Incorreto'}</strong>
      ${isCorrect ? `<span class="quiz-points">+${points} pts</span>` : ''}
      ${streak >= 3 ? `<span class="quiz-streak">🔥 Streak x${streak}</span>` : ''}
      <p>${explanation}</p>
      <button id="btn-quiz-advance" class="btn btn--primary u-mt-4 u-w-full">Avançar →</button>
    `;
    this.container.appendChild(feedback);

    const advanceBtn = document.getElementById('btn-quiz-advance');
    if (advanceBtn) {
      advanceBtn.addEventListener('click', () => {
        this.bus.emit('quiz:advance');
      });
    }
  }

  renderResults({ score, correct, total, bestStreak, percentage }) {
    if (window.playSound) window.playSound('complete');
    let message = '';
    if (percentage >= 90) message = '🏆 Excelente! Você é um especialista!';
    else if (percentage >= 70) message = '👏 Muito bem! Continue estudando!';
    else if (percentage >= 50) message = '👍 Bom! Dá para melhorar!';
    else message = '📚 Continue estudando! Você vai conseguir!';

    this.container.innerHTML = `
      <div class="quiz-results">
        <h3>Resultado do Quiz</h3>
        <div class="quiz-results__score">${score} pts</div>
        <p>${correct}/${total} acertos (${percentage}%)</p>
        <p>🔥 Melhor streak: ${bestStreak}</p>
        <p class="quiz-results__message">${message}</p>
        <div class="quiz-results__actions">
          <button id="btn-replay-quiz" class="btn btn--primary">🔄 Jogar Novamente</button>
          <button id="btn-reset-quiz" class="btn btn--secondary">↺ Resetar</button>
          <a href="#home" class="btn btn--ghost" data-nav="home">🏠 Início</a>
        </div>
      </div>
    `;

    const replayBtn = document.getElementById('btn-replay-quiz');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        this.bus.emit('quiz:restart');
      });
    }

    const resetBtn = document.getElementById('btn-reset-quiz');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.bus.emit('quiz:reset');
      });
    }
  }
}

// --- FILE: screens/simulator-screen.js ---


class SimulatorScreen {
  constructor(bus, state, storage) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.engine = null;
    this.mode = 'discovery';
  }

  init() {
    this.engine = new SimulationEngine(this.bus);
    this.engine.init();

    this.typeSelect = document.getElementById('blood-type-select');
    this.dropBtn = document.getElementById('btn-drop-blood');
    this.infoPanel = document.getElementById('info-panel');
    this.scoreDisplay = document.getElementById('score-display');

    this._bindEvents();
    this._bindBusEvents();
    this._updateScore();
  }

  _bindEvents() {
    if (this.typeSelect) {
      this.typeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val !== 'random') {
          this.engine.selectType(val);
          this._setMode('verification');
        } else {
          this._setMode('discovery');
        }
        this._updateInfo('Selecione um poço para pingar sangue.');
        if (this.dropBtn) this.dropBtn.disabled = false;
      });
    }

    if (this.dropBtn) {
      this.dropBtn.addEventListener('click', () => {
        this._dropAllWells();
      });
    }

    document.querySelectorAll('.reagent-well').forEach(wellEl => {
      wellEl.addEventListener('click', () => {
        const reagent = wellEl.dataset.reagent;
        if (this.mode === 'inverse') {
          this.engine.wells[reagent].toggleManualAgglutination();
        } else {
          this._dropOnWell(reagent);
        }
      });
      wellEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const reagent = wellEl.dataset.reagent;
          if (this.mode === 'inverse') {
            this.engine.wells[reagent].toggleManualAgglutination();
          } else {
            this._dropOnWell(reagent);
          }
        }
      });
    });

    document.querySelectorAll('input[name="sim-mode"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const isInverse = e.target.value === 'inverse';
        this._setMode(isInverse ? 'inverse' : 'discovery');
        
        // Alternar visibilidade através de classes semânticas (Atomic Design)
        document.getElementById('type-selector').classList.toggle('is-hidden', isInverse);
        if (this.dropBtn) this.dropBtn.classList.toggle('is-hidden', isInverse);
        
        const btnAnalyze = document.getElementById('btn-analyze-inverse');
        if (btnAnalyze) btnAnalyze.classList.toggle('is-hidden', !isInverse);
        
        const invInstr = document.getElementById('inverse-instruction');
        if (invInstr) invInstr.classList.toggle('is-hidden', !isInverse);

        document.querySelectorAll('.reagent-well').forEach(w => w.classList.toggle('well-clickable', isInverse));

        if (isInverse) {
          this._updateInfo('Modo Diagnóstico: Clique nos poços para alternar a aglutinação e clique em "Identificar Sangue".');
        } else {
          this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
        }


      });
    });

    const btnAnalyze = document.getElementById('btn-analyze-inverse');
    if (btnAnalyze) {
      btnAnalyze.addEventListener('click', () => {
        this.engine.evaluateInverseMode();
      });
    }
  }

  _bindBusEvents() {
    this.bus.on('simulation:wellFilled', ({ wellType }) => {
      const label = wellType === 'anti-a' ? 'Anti-A' : wellType === 'anti-b' ? 'Anti-B' : 'Anti-D';
      this._updateInfo(`Sangue pingado no poço ${label}. Observando reação...`);
      if (window.playSound) window.playSound('drop');
    });

    this.bus.on('simulation:complete', ({ typeId, typeData, results }) => {
      this._showResult(typeId, typeData, results);
      this._addScore(5);
      if (window.playSound) window.playSound('complete');
    });

    this.bus.on('simulation:reset', () => {
      this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
      if (this.dropBtn) this.dropBtn.disabled = false;
    });
  }

  _setMode(mode) {
    this.mode = mode;
    this.engine.setMode(mode);
  }

  _dropOnWell(reagent) {
    if (!this.engine.selectedType && this.mode !== 'discovery') {
      this._updateInfo('Selecione um tipo sanguíneo primeiro.');
      return;
    }
    if (this.mode === 'discovery' && !this.engine.selectedType) {
      this.engine.selectType('random');
    }
    const ok = this.engine.dropBlood(reagent);
    if (!ok) {
      this._updateInfo('Este poço já foi preenchido.');
    }
  }

  _dropAllWells() {
    if (!this.engine.selectedType) {
      if (this.mode === 'discovery') {
        this.engine.selectType('random');
      } else {
        this._updateInfo('Selecione um tipo sanguíneo primeiro.');
        return;
      }
    }
    for (const key of ['anti-a', 'anti-b', 'anti-d']) {
      this.engine.dropBlood(key);
    }
  }

  _showResult(typeId, typeData, results) {
    const reactions = [];
    for (const [key, agglutinated] of Object.entries(results)) {
      const label = key === 'anti-a' ? 'Anti-A' : key === 'anti-b' ? 'Anti-B' : 'Anti-D';
      const status = agglutinated ? 'POSITIVO ✓ (aglutinou)' : 'NEGATIVO ✗ (não aglutinou)';
      reactions.push(`<strong>${label}:</strong> ${status}`);
    }

    const html = `
      <div class="result-card">
        <h3>Resultado: Tipo ${typeData.label}</h3>
        <div class="result-reactions">
          ${reactions.join('<br>')}
        </div>
        <p>${typeData.description || ''}</p>
        <p><strong>Frequência no Brasil:</strong> ${typeData.frequencyLabel || 'N/A'}</p>
        <div class="result-actions">
          <button id="btn-new-test" class="btn btn--secondary">🔄 Novo Teste</button>
          <a href="#quiz" class="btn btn--primary" data-nav="quiz">📝 Ir para Quiz</a>
        </div>
      </div>
    `;

    if (this.infoPanel) {
      this.infoPanel.innerHTML = html;
      const newTestBtn = document.getElementById('btn-new-test');
      if (newTestBtn) {
        newTestBtn.addEventListener('click', () => {
          this.engine.reset();
          if (this.typeSelect) this.typeSelect.value = 'random';
        });
      }
    }

    if (this.dropBtn) this.dropBtn.disabled = true;
  }

  _updateInfo(text) {
    if (this.infoPanel) {
      this.infoPanel.innerHTML = `<p>${text}</p>`;
    }
  }

  _addScore(points) {
    const current = this.state.get('score.total') || 0;
    this.state.set('score.total', current + points);
    this._updateScore();

    const saved = this.storage.get('score') || {};
    saved.total = current + points;
    saved.lastUpdated = new Date().toISOString();
    this.storage.set('score', saved);
  }

  _updateScore() {
    const total = this.state.get('score.total') || 0;
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `Score: ${total}`;
    }
  }
}

// --- FILE: screens/quiz-screen.js ---




class QuizScreen {
  constructor(bus, state, storage) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.loader = new QuestionLoader();
    this.engine = null;
    this.renderer = null;
    this.initialized = false;
  }

  async init() {
    await this.loader.load();
    this.renderer = new QuizRenderer(this.bus);

    this.bus.on('quiz:answer', ({ optionId }) => {
      if (this.engine) this.engine.answer(optionId);
    });

    this.bus.on('quiz:advance', () => {
      if (this.engine) this.engine.advance();
    });

    this.bus.on('quiz:restart', () => {
      this.start();
    });

    this.bus.on('quiz:reset', () => {
      this.loader.reset();
      this.start();
    });

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'quiz') {
        this.start();
      } else if (this.engine) {
        this.engine.destroy();
      }
    });

    this.initialized = true;
  }

  start() {
    if (!this.initialized) return;
    this.engine = new QuizEngine(this.bus, this.state, this.storage);
    const questions = this.loader.getQuestions(10);
    this.engine.start(questions);
  }
}

// --- FILE: screens/transfusion-screen.js ---


class TransfusionScreen {
  constructor(bus, state, storage, scoreManager, achievements) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.scoreManager = scoreManager;
    this.achievements = achievements;
    this.scenarios = [];
    this.currentIndex = 0;
    this.completedScenarios = new Set();
    this.container = document.getElementById('transfusion-content');
  }

  async init() {
    this.scenarios = INLINE_SCENARIOS || [];

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'transfusion') {
        this.currentIndex = 0;
        this.render();
      }
    });
  }

  render() {
    if (this.scenarios.length === 0) {
      this.container.innerHTML = '<p>Nenhum cenário disponível.</p>';
      return;
    }

    if (this.currentIndex >= this.scenarios.length) {
      this._renderSummary();
      return;
    }

    const scenario = this.scenarios[this.currentIndex];
    const progress = ((this.currentIndex) / this.scenarios.length) * 100;

    this.container.innerHTML = `
      <div class="transfusion-scenario">
        <div class="transfusion-progress">
          <div class="transfusion-progress__bar" style="width:${progress}%"></div>
        </div>
        <div class="transfusion-card">
          <div class="transfusion-header">
            <span class="transfusion-emoji">🚨</span>
            <h3>Cenário ${this.currentIndex + 1}/${this.scenarios.length}</h3>
          </div>
          <div class="transfusion-patient">
            <p><strong>Paciente:</strong> ${scenario.patient.name}, ${scenario.patient.age} anos</p>
            <p><strong>Tipo sanguíneo:</strong> <span class="transfusion-blood-type">${scenario.patient.bloodType}</span></p>
            <p><strong>Situação:</strong> ${scenario.patient.situation}</p>
          </div>
          <div class="transfusion-stock">
            <p><strong>Estoque disponível:</strong></p>
            <div class="transfusion-options">
              ${scenario.availableBlood.map(type => `
                <label class="transfusion-option">
                  <input type="checkbox" value="${type}" data-type="${type}">
                  <span class="transfusion-type-label">${type}</span>
                </label>
              `).join('')}
            </div>
          </div>
          <button id="btn-check-transfusion" class="btn btn--primary">Verificar</button>
          <div id="transfusion-feedback" class="transfusion-feedback is-hidden"></div>
        </div>
      </div>
    `;

    document.getElementById('btn-check-transfusion').addEventListener('click', () => {
      this._checkAnswer(scenario);
    });
  }

  _checkAnswer(scenario) {
    const checkboxes = this.container.querySelectorAll('input[type="checkbox"]:checked');
    const selected = Array.from(checkboxes).map(cb => cb.value);
    const correct = scenario.correctAnswers;

    const isCorrect = selected.length === correct.length && selected.every(s => correct.includes(s));

    const feedback = document.getElementById('transfusion-feedback');
    feedback.classList.remove('is-hidden');

    if (isCorrect) {
      feedback.className = 'transfusion-feedback transfusion-feedback--correct';
      feedback.innerHTML = `
        <strong>✅ Correto!</strong>
        <p>${scenario.explanation}</p>
        <p class="transfusion-points">+15 pontos</p>
      `;
      this.completedScenarios.add(scenario.id);
      this.scoreManager.addPoints(15);
      this.scoreManager.recordScenario();
    } else {
      feedback.className = 'transfusion-feedback transfusion-feedback--wrong';
      feedback.innerHTML = `
        <strong>❌ Incorreto</strong>
        <p>Resposta correta: ${correct.join(', ')}</p>
        <p>${scenario.explanation}</p>
      `;
    }

    const btn = document.getElementById('btn-check-transfusion');
    btn.textContent = 'Próximo cenário →';
    btn.onclick = () => {
      this.currentIndex++;
      this.render();
    };

    this.container.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = true);

    if (this.currentIndex >= this.scenarios.length - 1) {
      this.achievements.check(this.scoreManager.getScore(), {
        scenariosCompleted: this.completedScenarios
      });
    }
  }

  _renderSummary() {
    const total = this.scenarios.length;
    const completed = this.completedScenarios.size;
    const percentage = Math.round((completed / total) * 100);

    this.container.innerHTML = `
      <div class="transfusion-summary">
        <h3>Resumo dos Cenários</h3>
        <p>${completed}/${total} cenários corretos (${percentage}%)</p>
        <div class="transfusion-summary__actions">
          <button id="btn-replay-transfusion" class="btn btn--primary">🔄 Recomeçar</button>
          <a href="#home" class="btn btn--secondary" data-nav="home">🏠 Início</a>
        </div>
      </div>
    `;

    document.getElementById('btn-replay-transfusion').addEventListener('click', () => {
      this.currentIndex = 0;
      this.completedScenarios.clear();
      this.render();
    });
  }
}

// --- FILE: screens/myths-screen.js ---


class MythsScreen {
  constructor(bus, storage, achievements) {
    this.bus = bus;
    this.storage = storage;
    this.achievements = achievements;
    this.myths = [];
    this.completed = new Set();
    this.container = document.getElementById('myths-content');
  }

  async init() {
    this.myths = INLINE_MYTHS || [];

    const saved = this.storage.get('myths-completed');
    if (saved) this.completed = new Set(saved);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'myths') this.render();
    });
  }

  render() {
    if (!this.container) return;

    const progress = Math.round((this.completed.size / this.myths.length) * 100);

    this.container.innerHTML = `
      <div class="myths-intro">
        <p>Teste seus conhecimentos! Cada card apresenta uma afirmação. Você acha que é MITO ou FATO?</p>
        <div class="myths-progress">
          <div class="myths-progress__bar" style="width:${progress}%"></div>
          <span>${this.completed.size}/${this.myths.length}</span>
        </div>
      </div>
      <div class="myths-grid">
        ${this.myths.map((myth, idx) => this._renderCard(myth, idx)).join('')}
      </div>
    `;

    this.myths.forEach((myth, idx) => {
      const card = this.container.querySelector(`[data-myth="${myth.id}"]`);
      if (!card) return;

      const buttons = card.querySelectorAll('.myth-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const guess = btn.dataset.guess;
          this._reveal(card, myth, guess);
        });
      });
    });
  }

  _renderCard(myth, idx) {
    const isCompleted = this.completed.has(myth.id);
    const isRevealed = isCompleted;

    return `
      <div class="myth-card ${isRevealed ? 'myth-card--revealed' : ''}" data-myth="${myth.id}">
        <div class="myth-card__front">
          <span class="myth-card__icon">${myth.icon}</span>
          <p class="myth-card__statement">${myth.statement}</p>
          ${!isRevealed ? `
            <div class="myth-card__actions">
              <button class="myth-btn myth-btn--myth" data-guess="myth">MITO</button>
              <button class="myth-btn myth-btn--fact" data-guess="fact">FATO</button>
              <button class="myth-btn myth-btn--partial" data-guess="partial">PARCIAL</button>
            </div>
          ` : `
            <div class="myth-card__result">
              <span class="myth-result__label myth-result__label--${myth.answer}">${myth.answerLabel}</span>
            </div>
          `}
        </div>
        ${isRevealed ? `
          <div class="myth-card__back">
            <p>${myth.explanation}</p>
            <small>Referência: ${myth.references.join(', ')}</small>
          </div>
        ` : ''}
      </div>
    `;
  }

  _reveal(card, myth, guess) {
    this.completed.add(myth.id);
    this.storage.set('myths-completed', Array.from(this.completed));

    const isCorrect = this._isCorrect(guess, myth.answer);
    if (window.playSound) window.playSound(isCorrect ? 'correct' : 'wrong');

    card.classList.add('myth-card--revealed');
    card.innerHTML = `
      <div class="myth-card__front">
        <span class="myth-card__icon">${myth.icon}</span>
        <p class="myth-card__statement">${myth.statement}</p>
        <div class="myth-card__result">
          <span class="myth-result__label myth-result__label--${myth.answer}">${myth.answerLabel}</span>
          ${isCorrect ? '<span class="myth-result__badge">✅ Acertou!</span>' : '<span class="myth-result__badge">❌ Errou</span>'}
        </div>
      </div>
      <div class="myth-card__back">
        <p>${myth.explanation}</p>
        <small>Referência: ${myth.references.join(', ')}</small>
      </div>
    `;

    if (this.completed.size === this.myths.length) {
      this.achievements.check(this.storage.get('score') || {}, {
        mythsCompleted: this.completed
      });
    }

    this.render();
  }

  _isCorrect(guess, answer) {
    const map = {
      'myth': ['myth'],
      'fact': ['fact'],
      'partial': ['partial_myth', 'partial_fact']
    };
    return map[guess]?.includes(answer) || false;
  }
}

// --- FILE: screens/encyclopedia-screen.js ---


class EncyclopediaScreen {
  constructor(bus, storage, achievements) {
    this.bus = bus;
    this.storage = storage;
    this.achievements = achievements;
    this.entries = [];
    this.visited = new Set();
    this.container = document.getElementById('encyclopedia-content');
    this.currentEntry = null;
  }

  async init() {
    this.entries = INLINE_ENCYCLOPEDIA || [];

    const saved = this.storage.get('encyclopedia-visited');
    if (saved) this.visited = new Set(saved);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'encyclopedia') this.render();
    });
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="encyclopedia-layout">
        <aside class="encyclopedia-sidebar">
          <input type="text" class="encyclopedia-search" placeholder="🔍 Buscar verbete..." id="ency-search">
          <nav class="encyclopedia-nav" id="ency-nav">
            ${this._renderNavList(this.entries)}
          </nav>
        </aside>
        <article class="encyclopedia-article" id="ency-article">
          <div class="encyclopedia-placeholder">
            <span class="encyclopedia-placeholder__icon">📖</span>
            <p>Selecione um verbete para ler</p>
          </div>
        </article>
      </div>
    `;

    const searchInput = document.getElementById('ency-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this._filterEntries(e.target.value);
      });
    }

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.dataset.id;
        this._showEntry(id);
      });
    });
  }

  _renderNavList(entries) {
    if (entries.length === 0) {
      return '<p class="encyclopedia-empty">Nenhum verbete encontrado</p>';
    }
    return entries.map(entry => `
      <a href="#" class="encyclopedia-link ${this.visited.has(entry.id) ? 'encyclopedia-link--visited' : ''}" data-id="${entry.id}">
        <span class="encyclopedia-link__icon">${entry.icon}</span>
        <div>
          <div class="encyclopedia-link__title">${entry.title}</div>
          <div class="encyclopedia-link__desc">${entry.shortDescription}</div>
        </div>
      </a>
    `).join('');
  }

  _filterEntries(query) {
    const nav = document.getElementById('ency-nav');
    if (!nav) return;
    const lower = query.toLowerCase();
    const filtered = this.entries.filter(e =>
      e.title.toLowerCase().includes(lower) ||
      e.shortDescription.toLowerCase().includes(lower) ||
      e.keyTerms.some(t => t.toLowerCase().includes(lower))
    );
    nav.innerHTML = this._renderNavList(filtered);

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this._showEntry(link.dataset.id);
      });
    });
  }

  _showEntry(id) {
    const entry = this.entries.find(e => e.id === id);
    if (!entry) return;

    this.currentEntry = entry;
    this.visited.add(id);
    this.storage.set('encyclopedia-visited', Array.from(this.visited));

    const article = document.getElementById('ency-article');
    if (article) {
      article.innerHTML = `
        <header class="encyclopedia-article__header">
          <span class="encyclopedia-article__icon">${entry.icon}</span>
          <h2>${entry.title}</h2>
          <span class="encyclopedia-article__category">${entry.category}</span>
        </header>
        <div class="encyclopedia-article__content">
          <p class="encyclopedia-article__lead">${entry.shortDescription}</p>
          <p>${entry.content}</p>
        </div>
        <div class="encyclopedia-article__terms">
          <strong>Termos-chave:</strong> ${entry.keyTerms.join(', ')}
        </div>
        ${entry.relatedEntries.length > 0 ? `
          <div class="encyclopedia-article__related">
            <strong>Ver também:</strong>
            ${entry.relatedEntries.map(relId => {
              const rel = this.entries.find(e => e.id === relId);
              return rel ? `<a href="#" class="encyclopedia-related-link" data-id="${rel.id}">${rel.title}</a>` : '';
            }).filter(Boolean).join(', ')}
          </div>
        ` : ''}
      `;

      article.querySelectorAll('.encyclopedia-related-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this._showEntry(link.dataset.id);
        });
      });
    }

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      if (link.dataset.id === id) {
        link.classList.add('encyclopedia-link--visited');
      }
    });

    if (this.visited.size >= 12) {
      this.achievements.check(this.storage.get('score') || {}, {
        encyclopediaVisited: this.visited
      });
    }
  }
}

// --- FILE: screens/teacher-screen.js ---
class TeacherScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.pinHash = this.storage.get('teacher-pin') || this._hashPin('1234');
    this.authenticated = false;
    this.container = document.getElementById('teacher-content');
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'teacher') {
        if (this.authenticated) {
          this.renderDashboard();
        } else {
          this.renderLogin();
        }
      }
    });

    if (this.container) {
      this.container.addEventListener('submit', (e) => {
        if (e.target.id === 'teacher-login') {
          e.preventDefault();
          this._checkPin();
        }
      });

      this.container.addEventListener('click', (e) => {
        if (e.target.id === 'btn-reset-class') {
          this._resetClass();
        }
        if (e.target.id === 'btn-logout-teacher') {
          this.authenticated = false;
          this.renderLogin();
        }
      });
    }
  }

  _hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
      const char = pin.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return String(hash);
  }

  renderLogin() {
    if (!this.container) return;
    this.container.innerHTML = `
      <form id="teacher-login" class="teacher__login">
        <h3>Painel do Professor</h3>
        <p>Digite o PIN de 4 dígitos para acessar os dados da turma.</p>
        <label for="teacher-pin">PIN:</label>
        <input type="password" id="teacher-pin" class="input" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" required aria-label="PIN do professor">
        <button type="submit" class="btn btn--primary">Entrar</button>
        <p class="teacher__hint">PIN padrão: 1234</p>
      </form>
    `;
  }

  _checkPin() {
    const input = document.getElementById('teacher-pin');
    if (!input) return;
    const pin = input.value;
    if (this._hashPin(pin) === this.pinHash) {
      this.authenticated = true;
      this.renderDashboard();
    } else {
      input.classList.add('has-error');
      input.value = '';
      input.placeholder = 'PIN incorreto';
      setTimeout(() => input.classList.remove('has-error'), 2000);
    }
  }

  renderDashboard() {
    if (!this.container) return;

    const score = this.storage.get('score') || { total: 0, typingsCompleted: 0, quizzesTaken: 0, scenariosCompleted: 0 };
    const quizHistory = this.storage.get('quiz-history') || [];
    const totalQuizzes = quizHistory.length;
    const avgScore = totalQuizzes > 0 ? Math.round(quizHistory.reduce((a, b) => a + b.score, 0) / totalQuizzes) : 0;
    const avgCorrect = totalQuizzes > 0 ? Math.round(quizHistory.reduce((a, b) => a + b.correct, 0) / totalQuizzes) : 0;

    this.container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-dashboard__header">
          <h3>Dashboard da Turma</h3>
          <button id="btn-logout-teacher" class="btn btn--ghost">Sair</button>
        </div>
        
        <div class="teacher-stats">
          <div class="teacher-stat">
            <span class="teacher-stat__value">${score.typingsCompleted || 0}</span>
            <span class="teacher-stat__label">Tipagens realizadas</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${totalQuizzes}</span>
            <span class="teacher-stat__label">Quizzes finalizados</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${avgCorrect}/10</span>
            <span class="teacher-stat__label">Média de acertos</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${score.scenariosCompleted || 0}</span>
            <span class="teacher-stat__label">Cenários completados</span>
          </div>
        </div>

        <div class="teacher-section">
          <h4>📊 Desempenho nos Quizzes</h4>
          ${totalQuizzes > 0 ? `
            <div class="teacher-chart">
              ${this._renderQuizBars(quizHistory)}
            </div>
          ` : '<p class="teacher-empty">Nenhum quiz realizado ainda.</p>'}
        </div>

        <div class="teacher-section">
          <h4>⚠️ Ações</h4>
          <button id="btn-reset-class" class="btn btn--destructive">🗑️ Resetar Dados da Turma</button>
        </div>
      </div>
    `;
  }

  _renderQuizBars(history) {
    const maxScore = Math.max(...history.map(h => h.score), 1);
    return history.slice(-10).map((h, i) => {
      const pct = (h.score / maxScore) * 100;
      const color = h.percentage >= 70 ? 'var(--success)' : h.percentage >= 50 ? 'var(--warning)' : 'var(--error)';
      return `
        <div class="teacher-bar">
          <span class="teacher-bar__label">#${i + 1}</span>
          <div class="teacher-bar__track">
            <div class="teacher-bar__fill" style="width:${pct}%; --bar-bg: ${color}"></div>
          </div>
          <span class="teacher-bar__value">${h.score}</span>
        </div>
      `;
    }).join('');
  }

  _resetClass() {
    if (!confirm('Tem certeza que deseja apagar TODOS os dados da turma? Esta ação não pode ser desfeita.')) return;

    this.storage.remove('score');
    this.storage.remove('quiz-history');
    this.storage.remove('achievements');
    this.storage.remove('leaderboard');
    this.storage.remove('myths-completed');
    this.storage.remove('encyclopedia-visited');

    this.bus.emit('teacher:reset');
    this.renderDashboard();
  }
}

// --- FILE: main.js ---

















const bus = new EventBus();
const state = new StateManager(bus);
const router = new Router(bus);
const storage = new Storage();
const theme = new ThemeManager(storage);
const a11y = new AccessibilityManager(storage);
const scoreManager = new ScoreManager(storage);
const achievements = new Achievements(storage, bus);
const leaderboard = new Leaderboard(storage);
const simulator = new SimulatorScreen(bus, state, storage);
const quiz = new QuizScreen(bus, state, storage);
const transfusion = new TransfusionScreen(bus, state, storage, scoreManager, achievements);
const myths = new MythsScreen(bus, storage, achievements);
const encyclopedia = new EncyclopediaScreen(bus, storage, achievements);
const teacher = new TeacherScreen(bus, storage);

window.ABO = { bus, state, router, storage, theme, a11y, scoreManager, achievements, leaderboard, simulator, quiz, transfusion, myths, encyclopedia, teacher };

function init() {
  console.log('[ABO Sim] Inicializando...');
  router.init();
  state.init();
  theme.init();
  a11y.init();
  simulator.init();
  quiz.init();
  transfusion.init();
  myths.init();
  encyclopedia.init();
  teacher.init();

  bus.emit('app:ready');

  const savedScore = storage.get('score');
  const scoreBadge = document.getElementById('home-score');
  if (savedScore && savedScore.total > 0 && scoreBadge) {
    scoreBadge.textContent = `🏆 Score: ${savedScore.total}`;
    scoreBadge.hidden = false;
  }

  console.log('[ABO Sim] Pronto!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
