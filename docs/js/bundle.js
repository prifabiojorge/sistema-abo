
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
    "explanation": "Falso para simuladores virtuais: o ABO Pai d'égua elimina totalmente a necessidade de profissional de saúde, sangue real e riscos biológicos. Porém, se houver coleta real de sangue, a presença de profissional habilitado é obrigatória por lei.",
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

// --- FILE: learning/learning-data.js ---
const INLINE_GLOSSARY = [
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

const INLINE_TRAILS = [
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

const INLINE_CLINICAL_CASES = [
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

// --- FILE: learning/progress-utils.js ---
const BLOOD_LABEL_TO_ID = {
  'A+': 'A_POS', 'A-': 'A_NEG',
  'B+': 'B_POS', 'B-': 'B_NEG',
  'AB+': 'AB_POS', 'AB-': 'AB_NEG',
  'O+': 'O_POS', 'O-': 'O_NEG'
};

const BLOOD_ID_TO_LABEL = Object.fromEntries(
  Object.entries(BLOOD_LABEL_TO_ID).map(([label, id]) => [id, label])
);

const COMPATIBILITY = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  'AB-': ['A-', 'B-', 'AB-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-']
};

function normalizeBloodLabel(value) {
  return BLOOD_ID_TO_LABEL[value] || value;
}

function isCompatibleRecipient(patientType, donorType) {
  const patient = normalizeBloodLabel(patientType);
  const donor = normalizeBloodLabel(donorType);
  return (COMPATIBILITY[patient] || []).includes(donor);
}

function nowIso() {
  return new Date().toISOString();
}

function formatDateTime(iso) {
  if (!iso) return 'Sem data';
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function readSet(storage, key) {
  return new Set(storage.get(key) || []);
}

function writeSet(storage, key, value) {
  storage.set(key, Array.from(value));
}

function getProgressMetrics(storage) {
  const score = storage.get('score') || {};
  const quizHistory = storage.get('quiz-history') || [];
  const history = storage.get('history') || [];
  const caseProgress = storage.get('case-progress') || {};
  const encyclopediaVisited = storage.get('encyclopedia-visited') || [];
  const mythsCompleted = storage.get('myths-completed') || [];
  const bookmarks = storage.get('bookmarks') || [];
  const achievements = storage.get('achievements') || { unlocked: [] };
  const comparisons = storage.get('comparisons') || [];

  return {
    score,
    quizHistory,
    history,
    caseProgress,
    encyclopediaVisited,
    mythsCompleted,
    bookmarks,
    achievements,
    comparisons,
    typingsCompleted: score.typingsCompleted || history.length || 0,
    quizzesTaken: quizHistory.length,
    scenariosCompleted: score.scenariosCompleted || 0,
    casesCompleted: Object.values(caseProgress).filter(item => item.completed).length,
    historyCount: history.length,
    comparisonsCount: comparisons.length
  };
}

function csvEscape(value) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

function downloadText(filename, text, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadJson(filename, data) {
  downloadText(filename, JSON.stringify(data, null, 2), 'application/json;charset=utf-8');
}

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
    this.transitioning = false;
  }

  init() {
    document.querySelectorAll('[data-screen]').forEach(el => {
      this.screens.set(el.dataset.screen, el);
    });

    window.addEventListener('hashchange', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      const navEl = e.target.closest('[data-nav]');
      if (navEl) {
        e.preventDefault();
        const target = navEl.dataset.nav || navEl.getAttribute('href')?.replace('#', '');
        if (target) this.navigate(target);
      }
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

    if (this.transitioning) return;

    const from = this.currentScreen;

    // Quick exit if same screen
    if (from === screenId && this.screens.get(screenId)?.classList.contains('screen--active')) {
      return;
    }

    // Apply page transition (v1.3.0 — Task 8.5)
    const oldScreen = this.screens.get(from);
    const newScreen = this.screens.get(screenId);

    // Hide all screens first (no animation on old)
    this.screens.forEach((el, id) => {
      if (id !== screenId) {
        el.hidden = true;
        el.classList.remove('screen--active', 'screen-enter');
      }
    });

    // Show and animate new screen
    newScreen.hidden = false;
    newScreen.classList.add('screen--active');

    // Apply entrance animation
    newScreen.classList.remove('screen-enter');
    void newScreen.offsetHeight; // Force reflow
    newScreen.classList.add('screen-enter');

    this.currentScreen = screenId;
    this.bus.emit('screen:change', { from, to: screenId });

    if (updateHash) {
      window.location.hash = screenId;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  getCurrentScreen() {
    return this.currentScreen;
  }
}

// --- FILE: core/screen-manager.js ---


/**
 * Screen Manager — ABO Sim v1.3.0
 * Lazy init para telas pesadas mantendo bundle unico e compatibilidade file://.
 */
class ScreenManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.registry = new Map();
    this.initialized = new Set();
    this.initializing = new Map();
    this.ready = false;
  }

  register(name, config) {
    this.registry.set(name, {
      init: config.init,
      enter: config.enter || null,
      skeletonTarget: config.skeletonTarget || null,
      skeleton: config.skeleton || 'card'
    });
  }

  init() {
    if (this.ready) return;
    this.ready = true;
    this.bus.on('screen:change', ({ from, to }) => {
      this.ensure(to, { from }).catch((error) => {
        console.error(`[ScreenManager] Falha ao inicializar "${to}":`, error);
        this.bus.emit('toast:show', {
          type: 'error',
          message: `Não foi possível abrir a tela ${to}.`
        });
      });
    });
  }

  async ensure(name, context = {}) {
    const config = this.registry.get(name);
    if (!config) return false;

    if (this.initialized.has(name)) return true;
    if (this.initializing.has(name)) return this.initializing.get(name);

    const initPromise = this._initialize(name, config, context);
    this.initializing.set(name, initPromise);
    return initPromise;
  }

  getInitializedScreens() {
    return Array.from(this.initialized);
  }

  async _initialize(name, config, context) {
    const startedAt = performance.now();
    const skeletonTimer = setTimeout(() => this._renderSkeleton(name, config), 50);

    try {
      await config.init();
      this.initialized.add(name);

      if (config.enter) {
        config.enter(context);
      }

      this.bus.emit('screen:init', {
        screen: name,
        duration: Math.round(performance.now() - startedAt)
      });

      return true;
    } finally {
      clearTimeout(skeletonTimer);
      this.initializing.delete(name);
    }
  }

  _renderSkeleton(name, config) {
    const target = config.skeletonTarget
      ? document.querySelector(config.skeletonTarget)
      : document.querySelector(`#screen-${name}`);

    if (!target) return;

    if (config.skeleton === 'quiz') {
      SkeletonManager.renderQuiz(target);
    } else if (config.skeleton === 'grid') {
      SkeletonManager.renderGrid(target, 4);
    } else {
      SkeletonManager.render(target, { lines: 4, hasCard: true });
    }
  }
}

// --- FILE: core/keyboard.js ---
/**
 * Keyboard Manager — ABO Pai d'égua v2.6.0
 * Atalhos globais, busca e apresentação.
 */
class KeyboardManager {
  constructor(eventBus, router) {
    this.bus = eventBus;
    this.router = router;
    this.shortcuts = new Map();
    this.modalOpen = false;
    this._registerDefaults();
  }

  init() {
    document.addEventListener('keydown', (e) => this._handleKeydown(e));
  }

  _registerDefaults() {
    // Navigation shortcuts
    this.shortcuts.set('1', { action: () => this._navigate('home'), desc: 'Ir para Início', category: 'Navegação' });
    this.shortcuts.set('2', { action: () => this._navigate('simulator'), desc: 'Ir para Simulador', category: 'Navegação' });
    this.shortcuts.set('3', { action: () => this._navigate('quiz'), desc: 'Ir para Quiz', category: 'Navegação' });
    this.shortcuts.set('4', { action: () => this._navigate('transfusion'), desc: 'Ir para Transfusão', category: 'Navegação' });
    this.shortcuts.set('5', { action: () => this._navigate('myths'), desc: 'Ir para Mitos vs. Fatos', category: 'Navegação' });
    this.shortcuts.set('6', { action: () => this._navigate('encyclopedia'), desc: 'Ir para Enciclopédia', category: 'Navegação' });
    this.shortcuts.set('7', { action: () => this._navigate('teacher'), desc: 'Painel do Professor', category: 'Navegação' });
    this.shortcuts.set('8', { action: () => this._navigate('dashboard'), desc: 'Meu Progresso', category: 'Navegação' });
    this.shortcuts.set('9', { action: () => this._navigate('trails'), desc: 'Trilhas de aprendizado', category: 'Navegação' });
    this.shortcuts.set('0', { action: () => this._navigate('cases'), desc: 'Casos clínicos', category: 'Navegação' });

    // System shortcuts
    this.shortcuts.set('?', { action: () => this._toggleHelpModal(), desc: 'Atalhos de teclado', category: 'Sistema' });
    this.shortcuts.set('Ctrl+K', { action: () => this.bus.emit('search:open'), desc: 'Busca global', category: 'Sistema' });
    this.shortcuts.set('Ctrl+J', { action: () => this._navigate('minigame'), desc: 'Hemácia Runner', category: 'Sistema' });
    this.shortcuts.set('q', { action: () => this.bus.emit('qr:open'), desc: 'Abrir QR Code', category: 'Professor' });
    this.shortcuts.set('t', { action: () => this._toggleTheme(), desc: 'Alternar tema', category: 'Sistema' });
    this.shortcuts.set('s', { action: () => this._navigate('settings'), desc: 'Abrir configurações', category: 'Sistema' });
    this.shortcuts.set('p', { action: () => this.bus.emit('presentation:toggle'), desc: 'Modo apresentação', category: 'Professor' });
    this.shortcuts.set('Escape', { action: () => this._handleEscape(), desc: 'Fechar modal / Voltar', category: 'Sistema' });
  }

  _handleKeydown(e) {
    // Não captura atalhos quando foco em input/textarea/select
    const tag = e.target?.tagName?.toLowerCase?.() || '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if ((e.ctrlKey || e.metaKey) && (e.key || '').toLowerCase() === 'k') {
      e.preventDefault();
      this.bus.emit('search:open');
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key || '').toLowerCase() === 'j') {
      e.preventDefault();
      this._navigate('minigame');
      return;
    }

    // Não captura outros atalhos com Ctrl/Cmd
    if (e.ctrlKey || e.metaKey) return;

    const key = e.key;
    const shortcut = this.shortcuts.get(key);

    if (shortcut) {
      e.preventDefault();
      shortcut.action();
    }
  }

  _navigate(screenId) {
    if (this.router) {
      this.router.navigate(screenId);
    } else {
      window.location.hash = screenId;
    }
    // Toast sutil de feedback
    if (this.bus) {
      const screenNames = {
        home: 'Início', simulator: 'Simulador', quiz: 'Quiz',
        transfusion: 'Transfusão', myths: 'Mitos vs. Fatos',
        encyclopedia: 'Enciclopédia', teacher: 'Professor', settings: 'Configurações',
        dashboard: 'Meu Progresso', trails: 'Trilhas', cases: 'Casos Clínicos',
        history: 'Histórico', minigame: 'Hemácia Runner'
      };
      this.bus.emit('toast:show', { type: 'info', message: `Tela: ${screenNames[screenId] || screenId}`, duration: 1500 });
    }
  }

  _toggleTheme() {
    if (window.ABO && window.ABO.theme) {
      window.ABO.theme.toggle();
    }
  }

  _handleEscape() {
    if (this.modalOpen) {
      this._closeHelpModal();
    } else {
      this._navigate('home');
    }
  }

  _toggleHelpModal() {
    if (this.modalOpen) {
      this._closeHelpModal();
    } else {
      this._openHelpModal();
    }
  }

  _openHelpModal() {
    this.modalOpen = true;

    const overlay = document.createElement('div');
    overlay.id = 'keyboard-help-overlay';
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this._closeHelpModal();
    });

    const modal = document.createElement('div');
    modal.className = 'modal modal--keyboard';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'keyboard-help-title');
    modal.setAttribute('aria-modal', 'true');

    // Group shortcuts by category
    const categories = {};
    for (const [key, shortcut] of this.shortcuts) {
      if (!categories[shortcut.category]) categories[shortcut.category] = [];
      categories[shortcut.category].push({ key, desc: shortcut.desc });
    }

    let contentHtml = '';
    for (const [category, items] of Object.entries(categories)) {
      contentHtml += `<h4 class="modal__category">${category}</h4>`;
      contentHtml += '<div class="shortcut-list">';
      for (const item of items) {
        const displayKey = item.key === 'Escape' ? 'Esc' : item.key === '?' ? '?' : item.key.toUpperCase();
        contentHtml += `
          <div class="shortcut-item">
            <kbd class="shortcut-key">${displayKey}</kbd>
            <span class="shortcut-desc">${item.desc}</span>
          </div>
        `;
      }
      contentHtml += '</div>';
    }

    modal.innerHTML = `
      <header class="modal__header">
        <h3 id="keyboard-help-title">⌨️ Atalhos de Teclado</h3>
        <button class="modal__close btn btn--ghost" aria-label="Fechar">&times;</button>
      </header>
      <div class="modal__body">
        ${contentHtml}
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Focus trap
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.focus();
      closeBtn.addEventListener('click', () => this._closeHelpModal());
    }
  }

  _closeHelpModal() {
    this.modalOpen = false;
    const overlay = document.getElementById('keyboard-help-overlay');
    if (overlay) {
      overlay.classList.add('modal-overlay--exit');
      setTimeout(() => overlay.remove(), 200);
    }
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

// --- FILE: ui/toast.js ---
/**
 * Toast Manager — ABO Sim v1.3.0
 * Sistema de notificações não-intrusivas (4 níveis).
 * Integra com EventBus: 'toast:show', 'toast:dismiss'.
 */
class ToastManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.container = null;
    this.toasts = [];
    this.maxVisible = 4;
    this.defaultDuration = 3500;
  }

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.setAttribute('role', 'region');
      this.container.setAttribute('aria-live', 'polite');
      this.container.setAttribute('aria-label', 'Notificações');
      document.body.appendChild(this.container);
    }

    if (this.bus) {
      this.bus.on('toast:show', (data) => this._show(data));
      this.bus.on('toast:dismiss', () => this._dismissOldest());
    }

    // Esc fecha o toast mais antigo
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.toasts.length > 0) {
        this._dismissOldest();
      }
    });
  }

  success(message, duration) {
    this._show({ type: 'success', message, duration });
  }

  error(message, duration) {
    this._show({ type: 'error', message, duration });
  }

  info(message, duration) {
    this._show({ type: 'info', message, duration });
  }

  warning(message, duration) {
    this._show({ type: 'warning', message, duration });
  }

  achievement(title, description) {
    this._show({
      type: 'achievement',
      message: `<strong>${title}</strong><br>${description}`,
      duration: 4500
    });
  }

  _show({ type = 'info', message = '', duration = null }) {
    if (!this.container) return;

    // FIFO: remover mais antigo se exceder max
    while (this.toasts.length >= this.maxVisible) {
      this._dismissOldest();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',
      achievement: '🏆'
    };

    toast.innerHTML = `
      <span class="toast__icon" aria-hidden="true">${icons[type] || 'ℹ️'}</span>
      <div class="toast__content">${message}</div>
      <button class="toast__close" aria-label="Fechar notificação">&times;</button>
    `;

    // Pause on hover
    let timeout = null;
    const startTimer = () => {
      timeout = setTimeout(() => this._dismiss(toast), duration || this.defaultDuration);
    };

    toast.addEventListener('mouseenter', () => {
      if (timeout) clearTimeout(timeout);
    });
    toast.addEventListener('mouseleave', () => {
      startTimer();
    });

    // Close button
    const closeBtn = toast.querySelector('.toast__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this._dismiss(toast));
    }

    this.container.appendChild(toast);
    this.toasts.push(toast);

    // Force reflow for animation
    toast.offsetHeight;
    toast.classList.add('toast--visible');

    startTimer();
  }

  _dismiss(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.remove('toast--visible');
    toast.classList.add('toast--exit');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 250);
  }

  _dismissOldest() {
    if (this.toasts.length > 0) {
      this._dismiss(this.toasts[0]);
    }
  }
}

// --- FILE: ui/skeleton.js ---
/**
 * Skeleton Screen Manager — ABO Sim v1.3.0
 * Exibe placeholders animados durante carregamento (Task 8.4).
 */
class SkeletonManager {
  static render(target, config = {}) {
    if (!target) return;
    const { lines = 3, hasCircle = false, hasCard = true } = config;

    let html = '<div class="skeleton-wrapper" aria-hidden="true">';
    const widthClasses = ['skeleton-line--wide', 'skeleton-line--full', 'skeleton-line--medium'];

    if (hasCard) {
      html += '<div class="skeleton-card">';
      if (hasCircle) {
        html += '<div class="skeleton skeleton-circle"></div>';
      }
      for (let i = 0; i < lines; i++) {
        const widthClass = widthClasses[Math.min(i, widthClasses.length - 1)];
        html += `<div class="skeleton skeleton-line ${widthClass}"></div>`;
      }
      html += '</div>';
    } else {
      for (let i = 0; i < lines; i++) {
        const widthClass = i === 0 ? 'skeleton-line--medium' : i === lines - 1 ? 'skeleton-line--short' : 'skeleton-line--wide';
        html += `<div class="skeleton skeleton-line ${widthClass}"></div>`;
      }
    }

    html += '</div>';
    target.innerHTML = html;
  }

  static renderQuiz(target) {
    if (!target) return;
    target.innerHTML = `
      <div class="skeleton-wrapper" aria-hidden="true">
        <div class="skeleton-card">
          <div class="skeleton skeleton-line skeleton-line--narrow"></div>
          <div class="skeleton skeleton-line skeleton-line--full skeleton-line--thick"></div>
          <div class="skeleton skeleton-line skeleton-line--wide"></div>
          <div class="skeleton-options">
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
          </div>
        </div>
      </div>
    `;
  }

  static renderGrid(target, count = 4) {
    if (!target) return;
    let html = '<div class="skeleton-wrapper skeleton-grid" aria-hidden="true">';
    for (let i = 0; i < count; i++) {
      html += `
        <div class="skeleton-card">
          <div class="skeleton skeleton-circle"></div>
          <div class="skeleton skeleton-line skeleton-line--medium"></div>
          <div class="skeleton skeleton-line skeleton-line--wide"></div>
        </div>
      `;
    }
    html += '</div>';
    target.innerHTML = html;
  }

  static clear(target) {
    if (!target) return;
    const wrapper = target.querySelector('.skeleton-wrapper');
    if (wrapper) wrapper.remove();
  }
}

class EmptyState {
  static markup({ icon = '📭', title = 'Nada por aqui ainda', desc = '', ctaLabel = '', ctaHref = '', compact = false } = {}) {
    const cta = ctaLabel
      ? `<a href="${ctaHref || '#home'}" class="btn btn--primary empty-state__cta" data-nav="${(ctaHref || '#home').replace('#', '')}">${ctaLabel}</a>`
      : '';

    return `
      <div class="empty-state ${compact ? 'empty-state--compact' : ''}" role="status">
        <span class="empty-state__icon" aria-hidden="true">${icon}</span>
        <h3 class="empty-state__title">${title}</h3>
        ${desc ? `<p class="empty-state__desc">${desc}</p>` : ''}
        ${cta}
      </div>
    `;
  }

  static render(target, options = {}) {
    if (!target) return;
    target.innerHTML = EmptyState.markup(options);
  }
}

// --- FILE: ui/tour.js ---
/**
 * Tour Manager — ABO Pai d'égua v2.6.0
 * Tour guiado de onboarding para primeiro uso (Task 8.9).
 */
class TourManager {
  constructor(storage, eventBus) {
    this.storage = storage;
    this.bus = eventBus;
    this.key = 'onboarded';
    this.steps = [];
    this.currentStep = 0;
    this.overlay = null;
    this.active = false;
  }

  init() {
    this.steps = [
      {
        title: "Bem-vindo ao ABO Pai d'égua! 🧪",
        text: 'Este é um simulador interativo de tipagem sanguínea ABO/Rh. Vamos fazer um tour rápido!',
        target: null, // modal central
        position: 'center'
      },
      {
        title: 'Navegação',
        text: 'Use o menu no topo para alternar entre telas. Você pode trocar o tema claro/escuro e acessar configurações.',
        target: '.navbar',
        position: 'bottom'
      },
      {
        title: 'Simulação de Tipagem',
        text: 'Comece aqui! Pingue sangue nos poços com reagentes Anti-A, Anti-B e Anti-D para observar as reações de aglutinação.',
        target: '.hero__cta',
        position: 'bottom'
      },
      {
        title: 'Explore os Módulos',
        text: 'Quiz, Mitos vs. Fatos, Enciclopédia e Cenários de Transfusão — tudo para aprender imunohematologia!',
        target: '.feature-grid',
        position: 'top'
      },
      {
        title: 'Atalhos de Teclado',
        text: 'Pressione ? a qualquer momento para ver todos os atalhos disponíveis. Use 1-8 para navegar entre telas.',
        target: null,
        position: 'center'
      },
      {
        title: 'Pronto! 🎉',
        text: 'Você está pronto para começar. Clique em "Começar Simulação" para fazer sua primeira tipagem!',
        target: null,
        position: 'center'
      }
    ];

    // Verificar se já fez onboarding
    const onboarded = this.storage.get(this.key);
    if (!onboarded) {
      // Aguardar um pouco para a UI carregar
      setTimeout(() => this.start(), 800);
    }
  }

  start() {
    this.currentStep = 0;
    this.active = true;
    this._render();
  }

  restart() {
    this.storage.remove(this.key);
    this.start();
  }

  _render() {
    if (this.currentStep >= this.steps.length) {
      this._finish();
      return;
    }

    const step = this.steps[this.currentStep];
    this._removeOverlay();

    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'tour-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-labelledby', 'tour-title');
    this.overlay.setAttribute('aria-modal', 'true');

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = `tour-tooltip tour-tooltip--${step.position}`;

    tooltip.innerHTML = `
      <h4 id="tour-title" class="tour-tooltip__title">${step.title}</h4>
      <p class="tour-tooltip__text">${step.text}</p>
      <div class="tour-tooltip__footer">
        <span class="tour-tooltip__counter">${this.currentStep + 1} / ${this.steps.length}</span>
        <div class="tour-tooltip__actions">
          <button class="btn btn--ghost tour-btn-skip">Pular tour</button>
          ${this.currentStep > 0 ? '<button class="btn btn--secondary tour-btn-prev">← Anterior</button>' : ''}
          <button class="btn btn--primary tour-btn-next">${this.currentStep === this.steps.length - 1 ? 'Finalizar' : 'Próximo →'}</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    document.body.appendChild(tooltip);

    // Events
    tooltip.querySelector('.tour-btn-next').addEventListener('click', () => {
      this.currentStep++;
      this._render();
    });

    tooltip.querySelector('.tour-btn-skip').addEventListener('click', () => {
      this._finish();
    });

    const prevBtn = tooltip.querySelector('.tour-btn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentStep--;
        this._render();
      });
    }

    // Focus next button
    tooltip.querySelector('.tour-btn-next').focus();
  }

  _finish() {
    this._removeOverlay();
    this.active = false;
    this.storage.set(this.key, true);
    if (this.bus) {
      this.bus.emit('toast:show', { type: 'success', message: 'Tour concluído! Boas simulações! 🧪' });
    }
  }

  _removeOverlay() {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    const tooltip = document.querySelector('.tour-tooltip');
    if (tooltip) tooltip.remove();
  }
}

// --- FILE: ui/dialog.js ---
/**
 * Confirm Dialog — ABO Sim v1.3.0
 * Modal acessivel para substituir confirm() nativo em acoes destrutivas.
 */
class ConfirmDialog {
  static confirm({
    title = 'Confirmar acao',
    message = '',
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    danger = false
  } = {}) {
    if (typeof document === 'undefined') return Promise.resolve(false);

    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.setAttribute('role', 'presentation');

      const modal = document.createElement('div');
      modal.className = 'modal modal--confirm';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'confirm-dialog-title');
      modal.setAttribute('aria-describedby', 'confirm-dialog-message');

      modal.innerHTML = `
        <header class="modal__header">
          <h3 id="confirm-dialog-title">${title}</h3>
          <button class="modal__close btn btn--ghost" type="button" aria-label="Fechar">&times;</button>
        </header>
        <div class="modal__body">
          <p id="confirm-dialog-message" class="modal__message">${message}</p>
          <div class="modal__actions">
            <button class="btn btn--ghost modal__cancel" type="button">${cancelText}</button>
            <button class="btn ${danger ? 'btn--destructive' : 'btn--primary'} modal__confirm" type="button">${confirmText}</button>
          </div>
        </div>
      `;

      const close = (value) => {
        overlay.classList.add('modal-overlay--exit');
        document.removeEventListener('keydown', onKeydown);
        setTimeout(() => overlay.remove(), 200);
        resolve(value);
      };

      const onKeydown = (event) => {
        if (event.key === 'Escape') close(false);
        if (event.key !== 'Tab') return;

        const focusable = modal.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };

      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) close(false);
      });

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      modal.querySelector('.modal__close')?.addEventListener('click', () => close(false));
      modal.querySelector('.modal__cancel')?.addEventListener('click', () => close(false));
      modal.querySelector('.modal__confirm')?.addEventListener('click', () => close(true));
      document.addEventListener('keydown', onKeydown);
      modal.querySelector('.modal__cancel')?.focus();
    });
  }
}

// --- FILE: ui/qr-code.js ---
const PUBLIC_APP_URL = 'https://prifabiojorge.github.io/sistema-abo/';
const QR_VERSION = 4;
const QR_SIZE = 33;
const QR_DATA_CODEWORDS = 80;
const QR_ECC_CODEWORDS = 20;

class QrBitBuffer {
  constructor() {
    this.bits = [];
  }

  append(value, length) {
    for (let i = length - 1; i >= 0; i--) {
      this.bits.push((value >>> i) & 1);
    }
  }

  toBytes() {
    const bytes = [];
    for (let i = 0; i < this.bits.length; i += 8) {
      let value = 0;
      for (let j = 0; j < 8; j++) {
        value = (value << 1) | (this.bits[i + j] || 0);
      }
      bytes.push(value);
    }
    return bytes;
  }
}

class QrCodeV4L {
  constructor(text) {
    this.text = String(text || PUBLIC_APP_URL);
    this.size = QR_SIZE;
    this.modules = this._blank(false);
    this.isFunction = this._blank(false);

    this._drawFunctionPatterns();
    const data = this._encodeData(this.text);
    const ecc = this._computeRemainder(data, this._computeDivisor(QR_ECC_CODEWORDS));
    this._drawCodewords([...data, ...ecc]);
    this._chooseMask();
  }

  _blank(value) {
    return Array.from({ length: this.size }, () => Array(this.size).fill(value));
  }

  _setFunction(x, y, dark) {
    if (x < 0 || y < 0 || x >= this.size || y >= this.size) return;
    this.modules[y][x] = Boolean(dark);
    this.isFunction[y][x] = true;
  }

  _drawFunctionPatterns() {
    this._drawFinder(0, 0);
    this._drawFinder(this.size - 7, 0);
    this._drawFinder(0, this.size - 7);
    this._drawAlignment(26, 26);

    for (let i = 8; i < this.size - 8; i++) {
      const dark = i % 2 === 0;
      this._setFunction(i, 6, dark);
      this._setFunction(6, i, dark);
    }

    this._drawFormatBits(0);
    this._setFunction(8, 4 * QR_VERSION + 9, true);
  }

  _drawFinder(left, top) {
    for (let y = -1; y <= 7; y++) {
      for (let x = -1; x <= 7; x++) {
        const xx = left + x;
        const yy = top + y;
        if (xx < 0 || yy < 0 || xx >= this.size || yy >= this.size) continue;
        const inside = x >= 0 && x <= 6 && y >= 0 && y <= 6;
        const dark = inside && (
          x === 0 || x === 6 || y === 0 || y === 6 ||
          (x >= 2 && x <= 4 && y >= 2 && y <= 4)
        );
        this._setFunction(xx, yy, dark);
      }
    }
  }

  _drawAlignment(cx, cy) {
    for (let y = -2; y <= 2; y++) {
      for (let x = -2; x <= 2; x++) {
        this._setFunction(cx + x, cy + y, Math.max(Math.abs(x), Math.abs(y)) !== 1);
      }
    }
  }

  _drawFormatBits(mask) {
    const bits = this._formatBits(mask);
    for (let i = 0; i <= 5; i++) this._setFunction(8, i, this._bit(bits, i));
    this._setFunction(8, 7, this._bit(bits, 6));
    this._setFunction(8, 8, this._bit(bits, 7));
    this._setFunction(7, 8, this._bit(bits, 8));
    for (let i = 9; i < 15; i++) this._setFunction(14 - i, 8, this._bit(bits, i));
    for (let i = 0; i < 8; i++) this._setFunction(this.size - 1 - i, 8, this._bit(bits, i));
    for (let i = 8; i < 15; i++) this._setFunction(8, this.size - 15 + i, this._bit(bits, i));
    this._setFunction(8, this.size - 8, true);
  }

  _formatBits(mask) {
    const eclLow = 1;
    const data = (eclLow << 3) | mask;
    let rem = data << 10;
    for (let i = 14; i >= 10; i--) {
      if (((rem >>> i) & 1) !== 0) rem ^= 0x537 << (i - 10);
    }
    return ((data << 10) | (rem & 0x3FF)) ^ 0x5412;
  }

  _bit(value, index) {
    return ((value >>> index) & 1) !== 0;
  }

  _encodeData(text) {
    const bytes = Array.from(new TextEncoder().encode(text));
    const capacityBits = QR_DATA_CODEWORDS * 8;
    const buffer = new QrBitBuffer();
    buffer.append(0x4, 4);
    buffer.append(bytes.length, 8);
    bytes.forEach((byte) => buffer.append(byte, 8));
    if (buffer.bits.length > capacityBits) {
      throw new Error('Texto grande demais para o QR Code v4-L.');
    }
    buffer.append(0, Math.min(4, capacityBits - buffer.bits.length));
    while (buffer.bits.length % 8 !== 0) buffer.append(0, 1);
    const data = buffer.toBytes();
    for (let pad = 0xEC; data.length < QR_DATA_CODEWORDS; pad ^= 0xEC ^ 0x11) {
      data.push(pad);
    }
    return data;
  }

  _drawCodewords(codewords) {
    const bits = [];
    codewords.forEach((byte) => {
      for (let i = 7; i >= 0; i--) bits.push((byte >>> i) & 1);
    });

    let bitIndex = 0;
    let upward = true;
    for (let right = this.size - 1; right >= 1; right -= 2) {
      if (right === 6) right--;
      for (let vert = 0; vert < this.size; vert++) {
        const y = upward ? this.size - 1 - vert : vert;
        for (let dx = 0; dx < 2; dx++) {
          const x = right - dx;
          if (this.isFunction[y][x]) continue;
          this.modules[y][x] = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
          bitIndex++;
        }
      }
      upward = !upward;
    }
  }

  _chooseMask() {
    const base = this.modules.map((row) => row.slice());
    let bestMask = 0;
    let bestPenalty = Infinity;
    let bestModules = base;

    for (let mask = 0; mask < 8; mask++) {
      this.modules = base.map((row) => row.slice());
      this._applyMask(mask);
      this._drawFormatBits(mask);
      const penalty = this._penalty();
      if (penalty < bestPenalty) {
        bestPenalty = penalty;
        bestMask = mask;
        bestModules = this.modules.map((row) => row.slice());
      }
    }

    this.modules = bestModules;
    this._drawFormatBits(bestMask);
  }

  _applyMask(mask) {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.isFunction[y][x]) continue;
        if (this._mask(mask, x, y)) this.modules[y][x] = !this.modules[y][x];
      }
    }
  }

  _mask(mask, x, y) {
    switch (mask) {
      case 0: return (x + y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x + y) % 3 === 0;
      case 4: return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
      case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
      case 6: return ((((x * y) % 2) + ((x * y) % 3)) % 2) === 0;
      case 7: return ((((x + y) % 2) + ((x * y) % 3)) % 2) === 0;
      default: return false;
    }
  }

  _penalty() {
    let result = 0;
    for (let y = 0; y < this.size; y++) result += this._runPenalty((i) => this.modules[y][i]);
    for (let x = 0; x < this.size; x++) result += this._runPenalty((i) => this.modules[i][x]);

    for (let y = 0; y < this.size - 1; y++) {
      for (let x = 0; x < this.size - 1; x++) {
        const color = this.modules[y][x];
        if (color === this.modules[y][x + 1] &&
            color === this.modules[y + 1][x] &&
            color === this.modules[y + 1][x + 1]) {
          result += 3;
        }
      }
    }

    const dark = this.modules.flat().filter(Boolean).length;
    const total = this.size * this.size;
    result += Math.floor(Math.abs(dark * 20 - total * 10) / total) * 10;
    return result;
  }

  _runPenalty(get) {
    let penalty = 0;
    let runColor = get(0);
    let runLength = 1;
    for (let i = 1; i < this.size; i++) {
      const color = get(i);
      if (color === runColor) {
        runLength++;
      } else {
        if (runLength >= 5) penalty += 3 + (runLength - 5);
        runColor = color;
        runLength = 1;
      }
    }
    if (runLength >= 5) penalty += 3 + (runLength - 5);
    return penalty;
  }

  _computeDivisor(degree) {
    const result = Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] = this._gfMultiply(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = this._gfMultiply(root, 0x02);
    }
    return result;
  }

  _computeRemainder(data, divisor) {
    const result = Array(divisor.length).fill(0);
    data.forEach((byte) => {
      const factor = byte ^ result.shift();
      result.push(0);
      divisor.forEach((coef, index) => {
        result[index] ^= this._gfMultiply(coef, factor);
      });
    });
    return result;
  }

  _gfMultiply(x, y) {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
      z = ((z << 1) ^ (((z >>> 7) & 1) * 0x11D)) & 0xFF;
      if (((y >>> i) & 1) !== 0) z ^= x;
    }
    return z & 0xFF;
  }

  toSvg({ scale = 8, border = 4, dark = '#111827', light = '#ffffff', title = '' } = {}) {
    const dimension = (this.size + border * 2) * scale;
    const parts = [];
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.modules[y][x]) {
          const xx = (x + border) * scale;
          const yy = (y + border) * scale;
          parts.push(`M${xx},${yy}h${scale}v${scale}h-${scale}z`);
        }
      }
    }
    const titleMarkup = title ? `<title>${escapeQrText(title)}</title>` : '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dimension} ${dimension}" width="${dimension}" height="${dimension}" role="img" aria-label="${escapeQrText(title || 'QR Code')}">${titleMarkup}<rect width="100%" height="100%" fill="${light}"/><path d="${parts.join('')}" fill="${dark}"/></svg>`;
  }
}

function escapeQrText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getQrTargetUrl() {
  if (typeof window !== 'undefined' && /^https?:$/.test(window.location.protocol)) {
    const current = new URL(window.location.href);
    current.hash = '';
    current.search = '';
    current.pathname = current.pathname.replace(/index\.html$/i, '');
    return current.href;
  }
  return PUBLIC_APP_URL;
}

function createQrSvg(text = getQrTargetUrl(), options = {}) {
  return new QrCodeV4L(text).toSvg(options);
}

function renderQrCanvas(canvas, text = getQrTargetUrl(), { pixelSize = 320, border = 4, dark = '#111827', light = '#ffffff' } = {}) {
  if (!canvas) return;
  const qr = new QrCodeV4L(text);
  const moduleSize = Math.floor(pixelSize / (qr.size + border * 2));
  const size = (qr.size + border * 2) * moduleSize;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = dark;
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.modules[y][x]) {
        ctx.fillRect((x + border) * moduleSize, (y + border) * moduleSize, moduleSize, moduleSize);
      }
    }
  }
}

function openQrCodeModal({ bus = null } = {}) {
  const existing = document.getElementById('qr-code-overlay');
  if (existing) existing.remove();

  const url = getQrTargetUrl();
  const overlay = document.createElement('div');
  overlay.id = 'qr-code-overlay';
  overlay.className = 'modal-overlay qr-code-overlay';
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) overlay.remove();
  });

  overlay.innerHTML = `
    <div class="modal modal--qr-code" role="dialog" aria-modal="true" aria-labelledby="qr-code-title">
      <header class="modal__header">
        <h3 id="qr-code-title">QR Code do ABO Pai d'égua</h3>
        <button class="modal__close btn btn--ghost" type="button" aria-label="Fechar">&times;</button>
      </header>
      <div class="qr-code-panel">
        <div class="qr-code-frame">
          <canvas id="qr-code-modal-canvas" width="320" height="320" aria-label="QR Code para abrir o app"></canvas>
        </div>
        <div class="qr-code-info">
          <p class="qr-code-url">${escapeQrText(url)}</p>
          <div class="button-row">
            <button class="btn btn--primary" type="button" id="qr-code-fullscreen">Tela cheia</button>
            <a class="btn btn--secondary" href="./qr-print.html" target="_blank" rel="noopener">Imprimir</a>
            <button class="btn btn--ghost" type="button" id="qr-code-copy">Copiar URL</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  renderQrCanvas(document.getElementById('qr-code-modal-canvas'), url, { pixelSize: 336 });

  overlay.querySelector('.modal__close')?.addEventListener('click', () => overlay.remove());
  overlay.querySelector('#qr-code-fullscreen')?.addEventListener('click', () => {
    const target = overlay.querySelector('.modal--qr-code');
    if (target?.requestFullscreen) target.requestFullscreen();
  });
  overlay.querySelector('#qr-code-copy')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(url);
      bus?.emit('toast:show', { type: 'success', message: 'URL do QR Code copiada.' });
    } catch {
      bus?.emit('toast:show', { type: 'warning', message: 'Não foi possível copiar automaticamente.' });
    }
  });
}

function initPwaInstallPrompt(bus) {
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    window.__aboInstallPrompt = event;
    bus?.emit('toast:show', {
      type: 'info',
      duration: 7000,
      message: `Instalar ABO Pai d'égua no dispositivo? <button class="btn btn--ghost toast-install-btn" type="button" id="abo-install-action">Instalar</button>`
    });
  });

  document.addEventListener('click', async (event) => {
    if (event.target?.id !== 'abo-install-action' || !deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice.catch(() => null);
    deferredPrompt = null;
  });
}

// --- FILE: ui/search-palette.js ---



class SearchPalette {
  constructor(bus, router, storage) {
    this.bus = bus;
    this.router = router;
    this.storage = storage;
    this.historyKey = 'search-history';
    this.overlay = null;
    this.input = null;
    this.results = [];
    this.activeIndex = 0;
    this.index = [];
  }

  init() {
    this.index = this._buildIndex();
    this.bus.on('search:open', () => this.open());
  }

  open() {
    if (this.overlay) return;

    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay search-palette-overlay';
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) this.close();
    });

    const history = this.storage.get(this.historyKey) || [];
    this.overlay.innerHTML = `
      <div class="modal search-palette" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <header class="modal__header">
          <h3 id="search-title">Buscar no ABO Pai d'égua</h3>
          <button class="modal__close btn btn--ghost" aria-label="Fechar">&times;</button>
        </header>
        <div class="search-palette__body">
          <input id="search-palette-input" class="input search-palette__input" role="combobox" aria-expanded="true" aria-controls="search-results" aria-activedescendant="" placeholder="Digite termo, tela, questão, caso..." autocomplete="off">
          <div class="search-palette__hint">Use setas para navegar, Enter para abrir e Esc para fechar.</div>
          ${history.length ? `<div class="search-palette__recent">Recentes: ${history.map(item => `<button class="search-chip" data-query="${item}">${item}</button>`).join('')}</div>` : ''}
          <div id="search-results" class="search-results" role="listbox"></div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this.input = document.getElementById('search-palette-input');
    this.input.addEventListener('input', () => this._search(this.input.value));
    this.input.addEventListener('keydown', (event) => this._handleKeydown(event));
    this.overlay.querySelector('.modal__close')?.addEventListener('click', () => this.close());
    this.overlay.querySelectorAll('.search-chip').forEach(button => {
      button.addEventListener('click', () => {
        this.input.value = button.dataset.query;
        this._search(button.dataset.query);
      });
    });
    this._search('');
    this.input.focus();
  }

  close() {
    if (!this.overlay) return;
    this.overlay.remove();
    this.overlay = null;
    this.input = null;
  }

  _handleKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (!this.results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex = Math.min(this.activeIndex + 1, this.results.length - 1);
      this._renderResults();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
      this._renderResults();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      this._select(this.results[this.activeIndex]);
    }
  }

  _search(query) {
    const normalized = this._normalize(query);
    const pool = normalized
      ? this.index.map(item => ({ item, score: this._score(this._normalize(item.title + ' ' + item.subtitle + ' ' + item.keywords), normalized) }))
        .filter(hit => hit.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(hit => hit.item)
      : this.index.filter(item => item.priority).sort((a, b) => b.priority - a.priority);

    this.results = pool.slice(0, 24);
    this.activeIndex = 0;
    this._renderResults();
  }

  _renderResults() {
    const container = document.getElementById('search-results');
    if (!container) return;
    if (!this.results.length) {
      container.innerHTML = '<div class="empty-state empty-state--compact"><span class="empty-state__icon" aria-hidden="true">🔎</span><h3 class="empty-state__title">Nada encontrado</h3><p class="empty-state__desc">Tente buscar por antígeno, Rh, transfusão, quiz ou caso clínico.</p></div>';
      return;
    }

    container.innerHTML = this.results.map((result, index) => `
      <button class="search-result ${index === this.activeIndex ? 'search-result--active' : ''}" id="search-result-${index}" role="option" aria-selected="${index === this.activeIndex}" data-index="${index}">
        <span class="search-result__icon" aria-hidden="true">${result.icon}</span>
        <span class="search-result__body">
          <strong>${result.title}</strong>
          <small>${result.type} · ${result.subtitle}</small>
        </span>
      </button>
    `).join('');

    this.input?.setAttribute('aria-activedescendant', `search-result-${this.activeIndex}`);
    container.querySelectorAll('.search-result').forEach(button => {
      button.addEventListener('click', () => this._select(this.results[Number(button.dataset.index)]));
    });
  }

  _select(result) {
    if (!result) return;
    const history = [this.input?.value || result.title, ...(this.storage.get(this.historyKey) || [])]
      .filter(Boolean)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .slice(0, 5);
    this.storage.set(this.historyKey, history);
    this.close();
    if (result.route) this.router.navigate(result.route);
    if (result.event) this.bus.emit(result.event, result.payload || {});
  }

  _buildIndex() {
    const nav = [
      ['Início', 'Tela inicial', 'home', '🏠'],
      ['Simulador', 'Tipagem sanguínea e comparação', 'simulator', '🔬'],
      ['Quiz', 'Perguntas sobre ABO/Rh', 'quiz', '❓'],
      ['Transfusão', 'Cenários de compatibilidade', 'transfusion', '🚨'],
      ['Mitos vs. Fatos', 'Revisão de afirmações populares', 'myths', '🧬'],
      ['Enciclopédia', 'Verbetes de imunohematologia', 'encyclopedia', '📖'],
      ['Histórico', 'Timeline de tipagens', 'history', '🕒'],
      ['Trilhas', 'Aprendizado guiado', 'trails', '🧭'],
      ['Casos Clínicos', 'Aprendizagem baseada em casos', 'cases', '🏥'],
      ['Meu Progresso', 'Dashboard do aluno', 'dashboard', '📊'],
      ['Hemácia Runner', 'Mini-game retrô de anticorpos e hemácias', 'minigame', '🎮'],
      ['Painel do Professor', 'Ferramentas docentes', 'teacher', '👨‍🏫']
    ].map(([title, subtitle, route, icon], priority) => ({ title, subtitle, route, icon, type: 'Tela', keywords: title + ' ' + subtitle, priority: 100 - priority }));

    const teacherTools = [
      {
        title: 'QR Code',
        subtitle: 'Abrir QR Code para Chromebooks',
        event: 'qr:open',
        icon: '📱',
        type: 'Professor',
        keywords: 'qr code chromebook github pages acesso alunos imprimir projetar',
        priority: 98
      }
    ];

    return [
      ...nav,
      ...teacherTools,
      ...INLINE_ENCYCLOPEDIA.map(item => ({ title: item.title, subtitle: item.shortDescription, route: 'encyclopedia', icon: item.icon || '📖', type: 'Verbete', keywords: [...(item.keyTerms || []), item.category].join(' ') })),
      ...INLINE_MYTHS.map(item => ({ title: item.statement, subtitle: item.answerLabel, route: 'myths', icon: item.icon || '🧬', type: 'Mito/Fato', keywords: item.explanation })),
      ...INLINE_SCENARIOS.map(item => ({ title: item.patient?.situation || item.id, subtitle: `Paciente ${item.patient?.bloodType || ''}`, route: 'transfusion', icon: '🚨', type: 'Transfusão', keywords: item.explanation })),
      ...INLINE_CLINICAL_CASES.map(item => ({ title: item.title, subtitle: item.challenge, route: 'cases', icon: '🏥', type: 'Caso clínico', keywords: item.category + ' ' + item.explanation })),
      ...INLINE_QUESTIONS.map(item => ({ title: item.question, subtitle: `${item.category} · ${item.difficulty}`, route: 'quiz', icon: '❓', type: 'Questão', keywords: item.explanation })),
      ...INLINE_GLOSSARY.map(item => ({ title: item.term, subtitle: item.definition, route: 'encyclopedia', icon: '🔖', type: 'Glossário', keywords: (item.relatedTerms || []).join(' ') })),
      ...INLINE_TRAILS.map(item => ({ title: item.title, subtitle: item.desc, route: 'trails', icon: '🧭', type: 'Trilha', keywords: item.steps.map(step => step.label).join(' ') }))
    ];
  }

  _normalize(text = '') {
    return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  _score(text, query) {
    if (text.includes(query)) return 100 + query.length;
    let score = 0;
    let last = -1;
    for (const char of query) {
      const index = text.indexOf(char, last + 1);
      if (index === -1) return 0;
      score += last >= 0 && index === last + 1 ? 8 : 2;
      last = index;
    }
    return score;
  }
}

// --- FILE: ui/glossary.js ---


class GlossaryManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.terms = INLINE_GLOSSARY
      .filter(item => item.term.length > 2)
      .sort((a, b) => b.term.length - a.term.length);
  }

  init() {
    this.bus.on('screen:change', () => {
      setTimeout(() => this.enhanceActiveScreen(), 120);
    });
  }

  enhanceActiveScreen() {
    const screen = document.querySelector('.screen--active');
    if (!screen || screen.dataset.glossaryEnhanced === 'true') return;

    const walker = document.createTreeWalker(
      screen,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.closest('button, input, select, textarea, canvas, script, style, .term, .toast, .modal-overlay')) return NodeFilter.FILTER_REJECT;
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          return this.terms.some(item => this._matches(node.nodeValue, item.term))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.slice(0, 60).forEach(node => this._wrapTerms(node));
    screen.dataset.glossaryEnhanced = 'true';
  }

  _wrapTerms(textNode) {
    let html = textNode.nodeValue;
    let touched = false;

    for (const item of this.terms) {
      const re = new RegExp(`\\b(${this._escape(item.term)})\\b`, 'iu');
      if (!re.test(html)) continue;
      touched = true;
      html = html.replace(re, `<span class="term" tabindex="0" role="term" data-definition="${this._attr(item.definition)}" data-ref="${item.encyclopediaRef || ''}">$1</span>`);
    }

    if (!touched) return;
    const span = document.createElement('span');
    span.innerHTML = html;
    textNode.parentNode.replaceChild(span, textNode);
    span.querySelectorAll('.term').forEach(term => this._bindTerm(term));
  }

  _bindTerm(term) {
    const show = () => this._showTooltip(term);
    const hide = () => this._hideTooltip();
    term.addEventListener('mouseenter', show);
    term.addEventListener('focus', show);
    term.addEventListener('mouseleave', hide);
    term.addEventListener('blur', hide);
    term.addEventListener('click', () => {
      const ref = term.dataset.ref;
      if (ref && window.ABO?.router) window.ABO.router.navigate('encyclopedia');
    });
  }

  _showTooltip(term) {
    this._hideTooltip();
    const tip = document.createElement('div');
    tip.className = 'term-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.textContent = term.dataset.definition;
    term.appendChild(tip);
  }

  _hideTooltip() {
    document.querySelectorAll('.term-tooltip').forEach(tip => tip.remove());
  }

  _matches(text, term) {
    return new RegExp(`\\b${this._escape(term)}\\b`, 'iu').test(text);
  }

  _escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  _attr(text) {
    return text.replace(/"/g, '&quot;');
  }
}

// --- FILE: ui/presentation-mode.js ---
class PresentationMode {
  constructor(bus, router, storage) {
    this.bus = bus;
    this.router = router;
    this.storage = storage;
    this.active = false;
    this.index = 0;
    this.sequenceKey = 'presentation-settings';
    this.defaultSequence = ['home', 'simulator', 'quiz', 'encyclopedia', 'cases', 'dashboard'];
  }

  init() {
    this.bus.on('presentation:toggle', () => this.toggle());
    document.addEventListener('keydown', (event) => {
      if (!this.active) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        this.stop();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.next();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.prev();
      }
    });
  }

  toggle() {
    if (this.active) this.stop();
    else this.start();
  }

  start() {
    if (!this._teacherAllowed()) {
      this.router.navigate('teacher');
      this.bus.emit('toast:show', { type: 'warning', message: 'Entre no Painel do Professor antes de iniciar apresentação.' });
      return;
    }
    this.active = true;
    this.index = 0;
    document.body.classList.add('presentation-mode');
    this._ensureHud();
    this._go();
    this.bus.emit('toast:show', { type: 'info', message: 'Modo apresentação iniciado. Use ←/→ e Esc.' });
  }

  stop() {
    this.active = false;
    document.body.classList.remove('presentation-mode');
    document.getElementById('presentation-hud')?.remove();
    this.bus.emit('toast:show', { type: 'info', message: 'Modo apresentação encerrado.' });
  }

  next() {
    const sequence = this._sequence();
    this.index = Math.min(this.index + 1, sequence.length - 1);
    this._go();
  }

  prev() {
    this.index = Math.max(this.index - 1, 0);
    this._go();
  }

  _go() {
    const sequence = this._sequence();
    this.router.navigate(sequence[this.index] || 'home');
    this._updateHud();
  }

  _sequence() {
    const saved = this.storage.get(this.sequenceKey);
    return saved?.sequence?.length ? saved.sequence : this.defaultSequence;
  }

  _teacherAllowed() {
    return !!window.ABO?.teacher?.authenticated;
  }

  _ensureHud() {
    if (document.getElementById('presentation-hud')) return;
    const hud = document.createElement('div');
    hud.id = 'presentation-hud';
    hud.className = 'presentation-hud';
    document.body.appendChild(hud);
  }

  _updateHud() {
    const hud = document.getElementById('presentation-hud');
    if (!hud) return;
    const sequence = this._sequence();
    hud.textContent = `${this.index + 1}/${sequence.length} · ${sequence[this.index]}`;
  }
}

// --- FILE: audio/audio-engine.js ---
/**
 * Audio Engine — ABO Sim
 * Gera sons proceduralmente via Web Audio API (sem arquivos externos).
 * Inspirado em feedbacks satisfatórios de jogos arcade/casuais.
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
      this.masterGain.gain.value = 0.65;
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

  _sweep(fromFreq, toFreq, type, duration, startTime, gainValue = 0.18) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(fromFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, toFreq), startTime + duration);
    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  _noise(duration, startTime, gainValue = 0.15, filterFreq = 800, filterType = 'lowpass') {
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = filterFreq;
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

      case 'runner-start':
        [392, 523.25, 659.25, 783.99].forEach((freq, i) => {
          this._osc(freq, 'triangle', 0.11, now + i * 0.045, 0.22);
          this._osc(freq * 2, 'sine', 0.08, now + i * 0.045, 0.085);
        });
        this._noise(0.08, now, 0.07, 1800, 'highpass');
        break;

      case 'runner-jump':
        this._sweep(420, 920, 'triangle', 0.12, now, 0.22);
        this._osc(1200, 'sine', 0.04, now + 0.03, 0.07);
        break;

      case 'runner-safe':
        this._osc(1046.5, 'sine', 0.08, now, 0.24);
        this._osc(1567.98, 'triangle', 0.09, now + 0.055, 0.2);
        break;

      case 'runner-collect':
        [1318.51, 1760, 2093].forEach((freq, i) => {
          this._osc(freq, 'square', 0.045, now + i * 0.035, 0.12);
          this._osc(freq, 'sine', 0.09, now + i * 0.035, 0.11);
        });
        break;

      case 'runner-clear':
        this._osc(740, 'triangle', 0.07, now, 0.18);
        this._osc(988, 'sine', 0.08, now + 0.045, 0.15);
        break;

      case 'runner-level':
        [659.25, 783.99, 987.77, 1318.51].forEach((freq, i) => {
          this._osc(freq, 'triangle', 0.1, now + i * 0.05, 0.2);
        });
        this._noise(0.12, now + 0.03, 0.05, 2600, 'highpass');
        break;

      case 'runner-combo':
        [1174.66, 1396.91, 1760, 2093, 2637.02].forEach((freq, i) => {
          this._osc(freq, i % 2 ? 'triangle' : 'sine', 0.055, now + i * 0.028, 0.14);
        });
        break;

      case 'runner-danger':
        this._osc(220, 'sawtooth', 0.08, now, 0.16);
        this._osc(330, 'square', 0.05, now + 0.055, 0.1);
        break;

      case 'runner-over':
        this._sweep(180, 55, 'sawtooth', 0.38, now, 0.28);
        this._osc(92, 'sine', 0.42, now + 0.04, 0.24);
        this._noise(0.22, now + 0.03, 0.18, 650, 'lowpass');
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

    this.bus.emit('toast:show', {
      type: 'achievement',
      message: `<strong>${achievement.icon} Conquista desbloqueada!</strong><br>${achievement.name}`,
      duration: 4500
    });
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
  constructor(storage = null) {
    this.storage = storage;
    this.questions = [];
    this.usedIds = new Set();
  }

  async load() {
    const customEnabled = this.storage?.get('use-custom-questions') !== false;
    const custom = customEnabled ? this._validCustomQuestions() : [];
    this.questions = [...(INLINE_QUESTIONS || []), ...custom];
    return this.questions;
  }

  _validCustomQuestions() {
    const payload = this.storage?.get('custom-questions');
    const questions = Array.isArray(payload?.questions) ? payload.questions : Array.isArray(payload) ? payload : [];
    return questions.filter(q => q && q.id && q.question && q.explanation && (typeof q.correctAnswer === 'string' || typeof q.correctAnswer === 'boolean'));
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
      percentage: Math.round((correctCount / this.questions.length) * 100),
      categoryStats: this._categoryStats()
    };

    this._persist(result);
    this.bus.emit('quiz:results', result);
  }

  _persist(result) {
    const saved = this.storage.get('quiz-history') || [];
    saved.push({ ...result, answers: this.answers, date: new Date().toISOString() });
    if (saved.length > 20) saved.shift();
    this.storage.set('quiz-history', saved);

    const scoreData = this.storage.get('score') || { total: 0 };
    scoreData.total = (scoreData.total || 0) + result.score;
    scoreData.quizzesTaken = (scoreData.quizzesTaken || 0) + 1;
    scoreData.bestStreak = Math.max(scoreData.bestStreak || 0, result.bestStreak || 0);
    scoreData.lastUpdated = new Date().toISOString();
    this.storage.set('score', scoreData);
  }

  _categoryStats() {
    const stats = {};
    for (const answer of this.answers) {
      const question = this.questions.find(q => q.id === answer.questionId);
      const category = question?.category || 'geral';
      if (!stats[category]) stats[category] = { correct: 0, total: 0 };
      stats[category].total++;
      if (answer.correct) stats[category].correct++;
    }
    return stats;
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
        <div class="quiz-progress"><div class="quiz-progress__bar bar-w-0"></div></div>
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
        <div class="quiz-progress"><div class="quiz-progress__bar ${this._progressClass(progress)}"></div></div>
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

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
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
    this.comparePanel = document.getElementById('compare-panel');
    this.compareOutput = document.getElementById('compare-output');
    this.compareTypeA = document.getElementById('compare-type-a');
    this.compareTypeB = document.getElementById('compare-type-b');

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
        const isCompare = e.target.value === 'compare';
        this._setMode(isInverse ? 'inverse' : isCompare ? 'compare' : 'discovery');
        
        // Alternar visibilidade através de classes semânticas (Atomic Design)
        document.getElementById('type-selector').classList.toggle('is-hidden', isInverse || isCompare);
        if (this.dropBtn) this.dropBtn.classList.toggle('is-hidden', isInverse || isCompare);
        if (this.comparePanel) this.comparePanel.classList.toggle('is-hidden', !isCompare);
        document.getElementById('wells-container')?.classList.toggle('is-hidden', isCompare);
        
        const btnAnalyze = document.getElementById('btn-analyze-inverse');
        if (btnAnalyze) btnAnalyze.classList.toggle('is-hidden', !isInverse);
        
        const invInstr = document.getElementById('inverse-instruction');
        if (invInstr) invInstr.classList.toggle('is-hidden', !isInverse);

        document.querySelectorAll('.reagent-well').forEach(w => w.classList.toggle('well-clickable', isInverse));

        if (isCompare) {
          this._updateInfo('Modo Comparação: escolha dois tipos para ver reações e características lado a lado.');
          this._renderComparison();
        } else if (isInverse) {
          this._updateInfo('Modo Diagnóstico: Clique nos poços para alternar a aglutinação e clique em "Identificar Sangue".');
        } else {
          this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
        }


      });
    });

    [this.compareTypeA, this.compareTypeB].forEach(select => {
      if (select) select.addEventListener('change', () => this._renderComparison());
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
    this._recordHistory(typeId, results);
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

  _renderComparison() {
    if (!this.compareOutput || !this.compareTypeA || !this.compareTypeB) return;
    const first = this.compareTypeA.value;
    const second = this.compareTypeB.value;
    const firstData = getBloodTypeById(first);
    const secondData = getBloodTypeById(second);
    this._recordComparison(first, second);

    this.compareOutput.innerHTML = `
      <div class="compare-grid">
        ${this._renderCompareCard(first, firstData)}
        ${this._renderCompareCard(second, secondData)}
      </div>
      <table class="compare-table">
        <thead><tr><th>Critério</th><th>${firstData.label}</th><th>${secondData.label}</th></tr></thead>
        <tbody>
          <tr><th>Antígeno A</th><td>${firstData.antigens.A ? 'Presente' : 'Ausente'}</td><td>${secondData.antigens.A ? 'Presente' : 'Ausente'}</td></tr>
          <tr><th>Antígeno B</th><td>${firstData.antigens.B ? 'Presente' : 'Ausente'}</td><td>${secondData.antigens.B ? 'Presente' : 'Ausente'}</td></tr>
          <tr><th>Rh/D</th><td>${firstData.antigens.D ? 'Positivo' : 'Negativo'}</td><td>${secondData.antigens.D ? 'Positivo' : 'Negativo'}</td></tr>
          <tr><th>Frequência</th><td>${firstData.frequencyLabel}</td><td>${secondData.frequencyLabel}</td></tr>
        </tbody>
      </table>
    `;
  }

  _renderCompareCard(typeId, data) {
    const reactions = ['anti-a', 'anti-b', 'anti-d'].map(reagent => ({
      label: reagent === 'anti-a' ? 'Anti-A' : reagent === 'anti-b' ? 'Anti-B' : 'Anti-D',
      value: shouldAgglutinate(typeId, reagent)
    }));
    return `
      <article class="compare-card">
        <h3>${data.label}</h3>
        <div class="mini-wells">
          ${reactions.map(reaction => `<span class="mini-well ${reaction.value ? 'mini-well--positive' : 'mini-well--negative'}">${reaction.label}<strong>${reaction.value ? '+' : '-'}</strong></span>`).join('')}
        </div>
        <p>${data.description}</p>
      </article>
    `;
  }

  _recordHistory(typeId, results) {
    if (!typeId || typeId === 'unknown') return;
    const history = this.storage.get('history') || [];
    history.push({
      timestamp: nowIso(),
      bloodType: BLOOD_ID_TO_LABEL[typeId] || typeId,
      mode: this.mode,
      reactions: results,
      correct: true
    });
    while (history.length > 50) history.shift();
    this.storage.set('history', history);

    const saved = this.storage.get('score') || {};
    saved.typingsCompleted = (saved.typingsCompleted || 0) + 1;
    saved.lastUpdated = nowIso();
    this.storage.set('score', saved);
  }

  _recordComparison(first, second) {
    const comparisons = this.storage.get('comparisons') || [];
    const last = comparisons[comparisons.length - 1];
    if (last && last.first === first && last.second === second) return;
    comparisons.push({ first, second, timestamp: nowIso() });
    while (comparisons.length > 20) comparisons.shift();
    this.storage.set('comparisons', comparisons);
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
    this.loader = new QuestionLoader(storage);
    this.engine = null;
    this.renderer = null;
    this.initialized = false;
    this.startTimer = null;
  }

  async init() {
    SkeletonManager.renderQuiz(document.getElementById('quiz-content'));
    await this.loader.load();
    this.renderer = new QuizRenderer(this.bus);

    this.bus.on('quiz:answer', ({ optionId }) => {
      if (this.engine) this.engine.answer(optionId);
    });

    this.bus.on('quiz:advance', () => {
      if (this.engine) this.engine.advance();
    });

    this.bus.on('quiz:restart', () => {
      this.loader.load();
      this.start();
    });

    this.bus.on('quiz:reset', () => {
      this.loader.reset();
      this.loader.load();
      this.start();
    });

    this.bus.on('quiz:error', ({ message }) => {
      EmptyState.render(this.renderer?.container, {
        icon: '❓',
        title: 'Quiz indisponível',
        desc: message || 'Não foi possível carregar as questões agora.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
    });

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'quiz') {
        this.start();
      } else {
        if (this.startTimer) {
          clearTimeout(this.startTimer);
          this.startTimer = null;
        }
        if (this.engine) this.engine.destroy();
      }
    });

    this.initialized = true;
  }

  start() {
    if (!this.initialized || !this.renderer) return;

    if (this.startTimer) clearTimeout(this.startTimer);
    SkeletonManager.renderQuiz(this.renderer.container);

    this.startTimer = setTimeout(() => {
      this.engine = new QuizEngine(this.bus, this.state, this.storage);
      const questions = this.loader.getQuestions(10);

      if (!questions || questions.length === 0) {
        EmptyState.render(this.renderer.container, {
          icon: '❓',
          title: 'Ainda não há questões',
          desc: 'Adicione ou restaure o banco de questões para iniciar o quiz.',
          ctaLabel: 'Ir para início',
          ctaHref: '#home'
        });
        return;
      }

      this.engine.start(questions);
    }, 300);
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
    this.scenarios = [...(INLINE_SCENARIOS || []), ...this._customScenarios()];

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'transfusion') {
        this.currentIndex = 0;
        this.render();
      }
    });
  }

  _customScenarios() {
    const payload = this.storage.get('custom-scenarios');
    const scenarios = Array.isArray(payload?.scenarios) ? payload.scenarios : Array.isArray(payload) ? payload : [];
    return scenarios.filter(item => item && item.id && item.patient && Array.isArray(item.availableBlood) && Array.isArray(item.correctAnswers));
  }

  render() {
    if (this.scenarios.length === 0) {
      EmptyState.render(this.container, {
        icon: '🚨',
        title: 'Nenhum cenário disponível',
        desc: 'Restaure os dados da aplicação para praticar compatibilidade transfusional.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
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
          <div class="transfusion-progress__bar ${this._progressClass(progress)}"></div>
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

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
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

    if (this.myths.length === 0) {
      EmptyState.render(this.container, {
        icon: '🧬',
        title: 'Nenhum mito cadastrado',
        desc: 'Restaure os dados do app para revisar mitos e fatos sobre tipos sanguíneos.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
      return;
    }

    const progress = Math.round((this.completed.size / this.myths.length) * 100);

    this.container.innerHTML = `
      <div class="myths-intro">
        <p>Teste seus conhecimentos! Cada card apresenta uma afirmação. Você acha que é MITO ou FATO?</p>
        <div class="myths-progress">
          <div class="myths-progress__bar ${this._progressClass(progress)}"></div>
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

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
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
    this.bookmarks = new Set();
    this.container = document.getElementById('encyclopedia-content');
    this.currentEntry = null;
    this.renderTimer = null;
  }

  async init() {
    this.entries = INLINE_ENCYCLOPEDIA || [];

    const saved = this.storage.get('encyclopedia-visited');
    if (saved) this.visited = new Set(saved);
    const savedBookmarks = this.storage.get('bookmarks');
    if (savedBookmarks) this.bookmarks = new Set(savedBookmarks);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'encyclopedia') {
        if (this.renderTimer) clearTimeout(this.renderTimer);
        SkeletonManager.renderGrid(this.container, 4);
        this.renderTimer = setTimeout(() => this.render(), 300);
      } else if (this.renderTimer) {
        clearTimeout(this.renderTimer);
        this.renderTimer = null;
      }
    });
  }

  render() {
    if (!this.container) return;

    if (this.entries.length === 0) {
      EmptyState.render(this.container, {
        icon: '📖',
        title: 'Enciclopédia sem verbetes',
        desc: 'Restaure os dados do app para consultar os conceitos de imunohematologia.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
      return;
    }

    this.container.innerHTML = `
      <div class="encyclopedia-layout">
        <aside class="encyclopedia-sidebar">
          <input type="text" class="encyclopedia-search" placeholder="🔍 Buscar verbete..." id="ency-search">
          <label class="favorite-filter"><input type="checkbox" id="ency-favorites-only"> Ver apenas favoritos (${this.bookmarks.size})</label>
          <nav class="encyclopedia-nav" id="ency-nav">
            ${this._renderNavList(this.entries)}
          </nav>
        </aside>
        <article class="encyclopedia-article" id="ency-article">
          ${EmptyState.markup({
            icon: '📖',
            title: 'Escolha um verbete',
            desc: 'Use a lista ou a busca para abrir o primeiro conceito.',
            compact: true
          })}
        </article>
      </div>
    `;

    const searchInput = document.getElementById('ency-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this._filterEntries(e.target.value);
      });
    }
    document.getElementById('ency-favorites-only')?.addEventListener('change', () => this._filterEntries(searchInput?.value || ''));

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
      return EmptyState.markup({
        icon: '🔎',
        title: 'Nenhum verbete encontrado',
        desc: 'Tente buscar por antígeno, Rh, plasma ou transfusão.',
        compact: true
      });
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
    const favoritesOnly = document.getElementById('ency-favorites-only')?.checked;
    const filtered = this.entries.filter(e =>
      (!favoritesOnly || this.bookmarks.has(e.id)) &&
      (
        e.title.toLowerCase().includes(lower) ||
        e.shortDescription.toLowerCase().includes(lower) ||
        e.keyTerms.some(t => t.toLowerCase().includes(lower))
      )
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
          <button class="btn btn--secondary" id="btn-bookmark-entry">${this.bookmarks.has(entry.id) ? '★ Favorito' : '☆ Favoritar'}</button>
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

      document.getElementById('btn-bookmark-entry')?.addEventListener('click', () => this._toggleBookmark(entry.id));
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

  _toggleBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
      this.bus.emit('toast:show', { type: 'info', message: 'Favorito removido.' });
    } else {
      this.bookmarks.add(id);
      this.bus.emit('toast:show', { type: 'success', message: 'Verbete favoritado.' });
    }
    this.storage.set('bookmarks', Array.from(this.bookmarks));
    this._showEntry(id);
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
    this.activeTab = 'overview';
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'teacher') this.authenticated ? this.renderDashboard() : this.renderLogin();
    });

    if (!this.container) return;
    this.container.addEventListener('submit', (event) => this._handleSubmit(event));
    this.container.addEventListener('click', (event) => this._handleClick(event));
    this.container.addEventListener('change', (event) => this._handleChange(event));
  }

  renderLogin() {
    if (!this.container) return;
    this.container.innerHTML = `
      <form id="teacher-login" class="teacher__login">
        <h3>Painel do Professor</h3>
        <p>Digite o PIN de 4 dígitos para acessar as ferramentas docentes.</p>
        <label for="teacher-pin">PIN:</label>
        <input type="password" id="teacher-pin" class="input" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" required aria-label="PIN do professor">
        <button type="submit" class="btn btn--primary">Entrar</button>
        <p class="teacher__hint">PIN padrão: 1234</p>
      </form>
    `;
  }

  renderDashboard() {
    const tabs = [
      ['overview', 'Visão geral'],
      ['questions', 'Banco de Questões'],
      ['scenarios', 'Cenários'],
      ['classes', 'Turmas'],
      ['qr', 'QR Code'],
      ['export', 'Exportação'],
      ['data', 'Dados']
    ];

    this.container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-dashboard__header">
          <h3>Painel do Professor</h3>
          <button id="btn-logout-teacher" class="btn btn--ghost">Sair</button>
        </div>
        <nav class="teacher-tabs" role="tablist">
          ${tabs.map(([id, label]) => `<button class="teacher-tab ${this.activeTab === id ? 'teacher-tab--active' : ''}" data-teacher-tab="${id}" role="tab" aria-selected="${this.activeTab === id}">${label}</button>`).join('')}
        </nav>
        <div class="teacher-tab-panel">
          ${this._renderActiveTab()}
        </div>
      </div>
    `;
    if (this.activeTab === 'qr') this._drawTeacherQr();
  }

  _renderActiveTab() {
    if (this.activeTab === 'questions') return this._renderQuestions();
    if (this.activeTab === 'scenarios') return this._renderScenarios();
    if (this.activeTab === 'classes') return this._renderClasses();
    if (this.activeTab === 'qr') return this._renderQrCode();
    if (this.activeTab === 'export') return this._renderExport();
    if (this.activeTab === 'data') return this._renderDataTools();
    return this._renderOverview();
  }

  _renderOverview() {
    const metrics = getProgressMetrics(this.storage);
    const quizHistory = metrics.quizHistory;
    const avgCorrect = quizHistory.length ? Math.round(quizHistory.reduce((a, b) => a + b.correct, 0) / quizHistory.length) : 0;
    const classes = this.storage.get('classes') || [];
    return `
      <div class="teacher-stats">
        <div class="teacher-stat"><span class="teacher-stat__value">${metrics.history.length}</span><span class="teacher-stat__label">Tipagens registradas</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${quizHistory.length}</span><span class="teacher-stat__label">Quizzes finalizados</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${avgCorrect}/10</span><span class="teacher-stat__label">Média de acertos</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${classes.length}</span><span class="teacher-stat__label">Turmas locais</span></div>
      </div>
      <section class="teacher-section">
        <h4>Desempenho nos quizzes</h4>
        ${quizHistory.length ? `<div class="teacher-chart">${this._renderQuizBars(quizHistory)}</div>` : EmptyState.markup({
          icon: '📊',
          title: 'Nenhum quiz realizado ainda',
          desc: 'Quando alunos concluírem quizzes neste dispositivo, os resultados aparecerão aqui.',
          ctaLabel: 'Abrir quiz',
          ctaHref: '#quiz',
          compact: true
        })}
      </section>
    `;
  }

  _renderQuestions() {
    const custom = this._customQuestions();
    const enabled = this.storage.get('use-custom-questions') !== false;
    return `
      <section class="teacher-section">
        <div class="tool-panel__bar">
          <h4>Banco de Questões</h4>
          <label class="settings-toggle"><input type="checkbox" id="toggle-custom-questions" ${enabled ? 'checked' : ''}> <span class="settings-toggle__label">Usar questões personalizadas no quiz</span></label>
          <button id="export-questions" class="btn btn--secondary">Exportar JSON</button>
        </div>
        <form id="question-editor" class="editor-form">
          <input class="input" name="question" placeholder="Enunciado da questão" required>
          <div class="form-grid">
            <select class="input" name="type"><option value="multiple_choice">Múltipla escolha</option><option value="true_false">Verdadeiro/Falso</option></select>
            <select class="input" name="category"><option value="genetics">Genética</option><option value="antigens">Antígenos</option><option value="transfusion">Transfusão</option><option value="rh_dhrn">Rh/DHRN</option><option value="biosafety">Biossegurança</option></select>
            <select class="input" name="difficulty"><option value="easy">Fácil</option><option value="medium">Médio</option><option value="hard">Difícil</option></select>
          </div>
          <input class="input" name="options" placeholder="Alternativas separadas por ; (para múltipla escolha)">
          <input class="input" name="correctAnswer" placeholder="Resposta correta: a/b/c/d ou true/false" required>
          <textarea class="input" name="explanation" placeholder="Explicação científica" required></textarea>
          <input class="input" name="reference" placeholder="Referência opcional">
          <button class="btn btn--primary" type="submit">Salvar questão</button>
        </form>
        <textarea id="questions-import" class="input import-box" placeholder="Cole JSON exportado de questões para importar"></textarea>
        <button id="import-questions" class="btn btn--secondary">Importar questões</button>
        <div class="teacher-list">
          <p><strong>Padrão:</strong> ${INLINE_QUESTIONS.length} questões · <strong>Personalizadas:</strong> ${custom.length}</p>
          ${custom.map(q => `<article class="teacher-list-item"><strong>${q.question}</strong><small>${q.category} · ${q.difficulty}</small><button class="btn btn--ghost" data-delete-question="${q.id}">Remover</button></article>`).join('') || '<p>Nenhuma questão personalizada.</p>'}
        </div>
      </section>
    `;
  }

  _renderScenarios() {
    const custom = this._customScenarios();
    return `
      <section class="teacher-section">
        <div class="tool-panel__bar">
          <h4>Cenários de Transfusão</h4>
          <button id="export-scenarios" class="btn btn--secondary">Exportar JSON</button>
        </div>
        <form id="scenario-editor" class="editor-form">
          <div class="form-grid">
            <input class="input" name="name" placeholder="Nome do paciente" required>
            <input class="input" name="age" type="number" min="1" max="120" placeholder="Idade" required>
            <select class="input" name="bloodType">${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(t => `<option value="${t}">${t}</option>`).join('')}</select>
          </div>
          <textarea class="input" name="situation" placeholder="Contexto clínico" required></textarea>
          <input class="input" name="availableBlood" placeholder="Doadores disponíveis separados por vírgula" required>
          <input class="input" name="correctAnswers" placeholder="Respostas corretas separadas por vírgula" required>
          <textarea class="input" name="explanation" placeholder="Explicação" required></textarea>
          <button class="btn btn--primary" type="submit">Salvar cenário</button>
        </form>
        <textarea id="scenarios-import" class="input import-box" placeholder="Cole JSON exportado de cenários para importar"></textarea>
        <button id="import-scenarios" class="btn btn--secondary">Importar cenários</button>
        <div class="teacher-list">
          <p><strong>Padrão:</strong> ${INLINE_SCENARIOS.length} cenários · <strong>Personalizados:</strong> ${custom.length}</p>
          ${custom.map(s => `<article class="teacher-list-item"><strong>${s.patient.name} · ${s.patient.bloodType}</strong><small>${s.patient.situation}</small><button class="btn btn--ghost" data-delete-scenario="${s.id}">Remover</button></article>`).join('') || '<p>Nenhum cenário personalizado.</p>'}
        </div>
      </section>
    `;
  }

  _renderClasses() {
    const classes = this.storage.get('classes') || [];
    return `
      <section class="teacher-section">
        <h4>Gestão de Turmas</h4>
        <form id="class-editor" class="editor-form">
          <div class="form-grid">
            <input class="input" name="name" placeholder="Nome da turma" required>
            <input class="input" name="period" placeholder="Período">
            <input class="input" name="school" placeholder="Escola">
          </div>
          <button class="btn btn--primary" type="submit">Criar turma</button>
        </form>
        <textarea id="student-import" class="input import-box" placeholder="Cole aqui o JSON exportado pelo aluno"></textarea>
        <button id="import-student" class="btn btn--secondary">Importar aluno para turma ativa</button>
        <button id="export-student-local" class="btn btn--secondary">Exportar dados deste aluno</button>
        <div class="teacher-list">
          ${classes.map(c => `<article class="teacher-list-item ${c.active ? 'is-active' : ''}"><strong>${c.name}</strong><small>Código ${c.code} · ${c.students?.length || 0} aluno(s)</small><button class="btn btn--ghost" data-class-active="${c.code}">Ativar</button></article>`).join('') || '<p>Nenhuma turma criada.</p>'}
        </div>
      </section>
    `;
  }

  _renderQrCode() {
    const url = getQrTargetUrl();
    return `
      <section class="teacher-section teacher-qr-section">
        <div class="tool-panel__bar">
          <h4>QR Code para Chromebooks</h4>
          <button id="teacher-open-qr-modal" class="btn btn--primary" type="button">Projetar QR Code</button>
        </div>
        <div class="teacher-qr-layout">
          <div class="qr-code-frame qr-code-frame--teacher">
            <canvas id="teacher-qr-canvas" width="300" height="300" aria-label="QR Code do app"></canvas>
          </div>
          <div class="teacher-qr-copy">
            <p class="qr-code-url">${this._escape(url)}</p>
            <div class="button-row">
              <a class="btn btn--secondary" href="./qr-print.html" target="_blank" rel="noopener">Abrir página de impressão</a>
              <button id="teacher-copy-qr-url" class="btn btn--ghost" type="button">Copiar URL</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  _renderExport() {
    return `
      <section class="teacher-section">
        <h4>Exportação</h4>
        <p>Gere arquivos locais para abrir no Excel, Google Sheets ou compartilhar entre dispositivos.</p>
        <div class="button-row">
          <button id="export-class-csv" class="btn btn--primary">Exportar turma CSV</button>
          <button id="export-class-json" class="btn btn--secondary">Exportar turma JSON</button>
          <button id="export-progress-json" class="btn btn--secondary">Exportar progresso local</button>
        </div>
      </section>
    `;
  }

  _renderDataTools() {
    const keys = [
      ['score', 'Score e resumo'],
      ['leaderboard', 'Leaderboard'],
      ['achievements', 'Conquistas'],
      ['quiz-history', 'Histórico do quiz'],
      ['history', 'Histórico de tipagens'],
      ['bookmarks', 'Favoritos'],
      ['trail-progress', 'Trilhas'],
      ['case-progress', 'Casos clínicos'],
      ['custom-questions', 'Questões customizadas'],
      ['custom-scenarios', 'Cenários customizados'],
      ['classes', 'Turmas'],
      ['settings', 'Configurações']
    ];
    return `
      <section class="teacher-section">
        <h4>Reset granular</h4>
        <div class="settings-checkboxes">
          ${keys.map(([key, label]) => `<label class="settings-checkbox"><input type="checkbox" value="${key}" data-reset-key> ${label}</label>`).join('')}
        </div>
        <button id="teacher-reset-selected" class="btn btn--destructive">Resetar selecionados</button>
      </section>
    `;
  }

  _handleSubmit(event) {
    if (event.target.id === 'teacher-login') {
      event.preventDefault();
      this._checkPin();
    }
    if (event.target.id === 'question-editor') {
      event.preventDefault();
      this._saveQuestion(new FormData(event.target));
    }
    if (event.target.id === 'scenario-editor') {
      event.preventDefault();
      this._saveScenario(new FormData(event.target));
    }
    if (event.target.id === 'class-editor') {
      event.preventDefault();
      this._saveClass(new FormData(event.target));
    }
  }

  _handleClick(event) {
    const target = event.target;
    if (target.id === 'btn-logout-teacher') {
      this.authenticated = false;
      this.renderLogin();
    }
    if (target.dataset.teacherTab) {
      this.activeTab = target.dataset.teacherTab;
      this.renderDashboard();
    }
    if (target.id === 'export-questions') this._exportQuestions();
    if (target.id === 'import-questions') this._importQuestions();
    if (target.dataset.deleteQuestion) this._deleteCustom('custom-questions', 'questions', target.dataset.deleteQuestion);
    if (target.id === 'export-scenarios') this._exportScenarios();
    if (target.id === 'import-scenarios') this._importScenarios();
    if (target.dataset.deleteScenario) this._deleteCustom('custom-scenarios', 'scenarios', target.dataset.deleteScenario);
    if (target.dataset.classActive) this._activateClass(target.dataset.classActive);
    if (target.id === 'import-student') this._importStudent();
    if (target.id === 'export-student-local') this._exportStudentLocal();
    if (target.id === 'export-class-csv') this._exportClassCsv();
    if (target.id === 'export-class-json') this._exportClassJson();
    if (target.id === 'export-progress-json') this._exportProgress();
    if (target.id === 'teacher-open-qr-modal') openQrCodeModal({ bus: this.bus });
    if (target.id === 'teacher-copy-qr-url') this._copyQrUrl();
    if (target.id === 'teacher-reset-selected') this._resetSelected();
  }

  _handleChange(event) {
    if (event.target.id === 'toggle-custom-questions') {
      this.storage.set('use-custom-questions', event.target.checked);
      this.bus.emit('toast:show', { type: 'success', message: 'Preferência do quiz atualizada.' });
    }
  }

  _checkPin() {
    const input = document.getElementById('teacher-pin');
    if (!input) return;
    if (this._hashPin(input.value) === this.pinHash) {
      this.authenticated = true;
      this.renderDashboard();
    } else {
      input.classList.add('has-error');
      input.value = '';
      input.placeholder = 'PIN incorreto';
      setTimeout(() => input.classList.remove('has-error'), 2000);
    }
  }

  _saveQuestion(form) {
    const type = form.get('type');
    const correctRaw = String(form.get('correctAnswer')).trim();
    const question = {
      id: `custom-q-${Date.now()}`,
      category: form.get('category'),
      difficulty: form.get('difficulty'),
      type,
      question: String(form.get('question')).trim(),
      explanation: String(form.get('explanation')).trim(),
      reference: String(form.get('reference')).trim() || 'Questão criada pelo professor',
      correctAnswer: type === 'true_false' ? correctRaw === 'true' : correctRaw
    };
    if (type === 'multiple_choice') {
      const labels = ['a', 'b', 'c', 'd'];
      const options = String(form.get('options')).split(';').map(text => text.trim()).filter(Boolean);
      if (options.length < 2 || !labels.includes(correctRaw)) return this._toastError('Informe alternativas e resposta correta a/b/c/d.');
      question.options = options.slice(0, 4).map((text, index) => ({ id: labels[index], text }));
    }
    if (!question.question || !question.explanation) return this._toastError('Enunciado e explicação são obrigatórios.');
    const payload = this.storage.get('custom-questions') || { schemaVersion: 1, questions: [] };
    payload.schemaVersion = 1;
    payload.questions = [...(payload.questions || []), question];
    this.storage.set('custom-questions', payload);
    this.bus.emit('toast:show', { type: 'success', message: 'Questão salva.' });
    this.renderDashboard();
  }

  _saveScenario(form) {
    const patientType = form.get('bloodType');
    const available = this._splitCsv(form.get('availableBlood'));
    const correct = this._splitCsv(form.get('correctAnswers'));
    if (!correct.length || correct.some(type => !isCompatibleRecipient(patientType, type))) {
      return this._toastError('Respostas corretas devem ser compatíveis com o paciente.');
    }
    const scenario = {
      id: `custom-s-${Date.now()}`,
      difficulty: 'custom',
      patient: {
        name: String(form.get('name')).trim(),
        age: Number(form.get('age')),
        bloodType: patientType,
        situation: String(form.get('situation')).trim()
      },
      availableBlood: available,
      correctAnswers: correct,
      explanation: String(form.get('explanation')).trim()
    };
    if (!scenario.patient.name || !scenario.patient.situation || !available.length || !scenario.explanation) return this._toastError('Preencha todos os campos do cenário.');
    const payload = this.storage.get('custom-scenarios') || { schemaVersion: 1, scenarios: [] };
    payload.schemaVersion = 1;
    payload.scenarios = [...(payload.scenarios || []), scenario];
    this.storage.set('custom-scenarios', payload);
    this.bus.emit('toast:show', { type: 'success', message: 'Cenário salvo.' });
    this.renderDashboard();
  }

  _saveClass(form) {
    const classes = this.storage.get('classes') || [];
    const code = this._classCode();
    classes.forEach(c => c.active = false);
    classes.push({
      schemaVersion: 1,
      code,
      name: String(form.get('name')).trim(),
      period: String(form.get('period')).trim(),
      school: String(form.get('school')).trim(),
      students: [],
      active: true,
      createdAt: nowIso()
    });
    this.storage.set('classes', classes);
    this.bus.emit('toast:show', { type: 'success', message: `Turma criada: ${code}` });
    this.renderDashboard();
  }

  _exportQuestions() {
    downloadJson('abo-sim-questoes.json', this.storage.get('custom-questions') || { schemaVersion: 1, questions: [] });
  }

  _importQuestions() {
    this._importPayload('questions-import', 'custom-questions', 'questions', this._isValidQuestion.bind(this));
  }

  _exportScenarios() {
    downloadJson('abo-sim-cenarios.json', this.storage.get('custom-scenarios') || { schemaVersion: 1, scenarios: [] });
  }

  _importScenarios() {
    this._importPayload('scenarios-import', 'custom-scenarios', 'scenarios', this._isValidScenario.bind(this));
  }

  _importPayload(textareaId, storageKey, collectionKey, validator) {
    try {
      const data = JSON.parse(document.getElementById(textareaId)?.value || '{}');
      const incoming = Array.isArray(data?.[collectionKey]) ? data[collectionKey] : [];
      const valid = incoming.filter(validator);
      if (!valid.length) return this._toastError('JSON sem itens válidos.');
      const payload = this.storage.get(storageKey) || { schemaVersion: 1, [collectionKey]: [] };
      const byId = new Map((payload[collectionKey] || []).map(item => [item.id, item]));
      valid.forEach(item => byId.set(item.id, item));
      payload.schemaVersion = 1;
      payload[collectionKey] = Array.from(byId.values());
      this.storage.set(storageKey, payload);
      this.bus.emit('toast:show', { type: 'success', message: `${valid.length} item(ns) importado(s).` });
      this.renderDashboard();
    } catch {
      this._toastError('JSON inválido.');
    }
  }

  _deleteCustom(storageKey, collectionKey, id) {
    const payload = this.storage.get(storageKey) || { schemaVersion: 1, [collectionKey]: [] };
    payload[collectionKey] = (payload[collectionKey] || []).filter(item => item.id !== id);
    this.storage.set(storageKey, payload);
    this.renderDashboard();
  }

  _activateClass(code) {
    const classes = this.storage.get('classes') || [];
    classes.forEach(c => c.active = c.code === code);
    this.storage.set('classes', classes);
    this.renderDashboard();
  }

  _importStudent() {
    try {
      const data = JSON.parse(document.getElementById('student-import')?.value || '{}');
      if (!data.studentId || !data.exportedAt) return this._toastError('JSON de aluno inválido.');
      const classes = this.storage.get('classes') || [];
      const active = classes.find(c => c.active) || classes[0];
      if (!active) return this._toastError('Crie uma turma antes de importar alunos.');
      active.students = active.students || [];
      const existingIndex = active.students.findIndex(s => s.studentId === data.studentId);
      if (existingIndex >= 0) {
        if (String(data.exportedAt) > String(active.students[existingIndex].exportedAt)) active.students[existingIndex] = data;
      } else {
        active.students.push(data);
      }
      this.storage.set('classes', classes);
      this.bus.emit('toast:show', { type: 'success', message: 'Aluno importado.' });
      this.renderDashboard();
    } catch {
      this._toastError('JSON de aluno inválido.');
    }
  }

  _exportStudentLocal() {
    const payload = {
      schemaVersion: 1,
      studentId: this.storage.get('student-id') || `student-${Date.now()}`,
      exportedAt: nowIso(),
      metrics: getProgressMetrics(this.storage)
    };
    this.storage.set('student-id', payload.studentId);
    downloadJson('abo-sim-aluno.json', payload);
  }

  _exportClassJson() {
    const active = this._activeClass();
    if (!active) return this._toastError('Nenhuma turma ativa.');
    downloadJson(`abo-sim-turma-${active.code}.json`, active);
  }

  _exportClassCsv() {
    const active = this._activeClass();
    if (!active) return this._toastError('Nenhuma turma ativa.');
    const rows = [['aluno', 'exported_at', 'quiz_score', 'cases_completed', 'achievements', 'last_activity']];
    for (const student of active.students || []) {
      const m = student.metrics || {};
      const latestQuiz = (m.quizHistory || []).slice(-1)[0] || {};
      rows.push([
        student.studentName || student.studentId,
        student.exportedAt,
        latestQuiz.score || 0,
        m.casesCompleted || 0,
        m.achievements?.unlocked?.length || 0,
        m.score?.lastUpdated || student.exportedAt
      ]);
    }
    const csv = '\uFEFF' + rows.map(row => row.map(csvEscape).join(';')).join('\n');
    downloadText(`abo-sim-turma-${active.code}.csv`, csv, 'text/csv;charset=utf-8');
  }

  _exportProgress() {
    downloadJson('abo-sim-progresso-local.json', {
      schemaVersion: 1,
      exportedAt: nowIso(),
      metrics: getProgressMetrics(this.storage)
    });
  }

  _drawTeacherQr() {
    requestAnimationFrame(() => {
      renderQrCanvas(document.getElementById('teacher-qr-canvas'), getQrTargetUrl(), { pixelSize: 300 });
    });
  }

  async _copyQrUrl() {
    try {
      await navigator.clipboard.writeText(getQrTargetUrl());
      this.bus.emit('toast:show', { type: 'success', message: 'URL do QR Code copiada.' });
    } catch {
      this._toastError('Não foi possível copiar automaticamente.');
    }
  }

  async _resetSelected() {
    const keys = Array.from(this.container.querySelectorAll('[data-reset-key]:checked')).map(input => input.value);
    if (!keys.length) return this._toastError('Selecione pelo menos um item.');
    const ok = await ConfirmDialog.confirm({
      title: 'Resetar dados selecionados',
      message: `${keys.length} grupo(s) de dados serão apagados deste dispositivo.`,
      confirmText: 'Resetar selecionados',
      danger: true
    });
    if (!ok) return;
    keys.forEach(key => this.storage.remove(key));
    this.bus.emit('toast:show', { type: 'success', message: 'Dados selecionados resetados.' });
    this.renderDashboard();
  }

  _renderQuizBars(history) {
    const maxScore = Math.max(...history.map(h => h.score), 1);
    return history.slice(-10).map((h, i) => {
      const pct = (h.score / maxScore) * 100;
      const tone = h.percentage >= 70 ? 'teacher-bar__fill--success' : h.percentage >= 50 ? 'teacher-bar__fill--warning' : 'teacher-bar__fill--error';
      return `<div class="teacher-bar"><span class="teacher-bar__label">#${i + 1}</span><div class="teacher-bar__track"><div class="teacher-bar__fill ${this._progressClass(pct)} ${tone}"></div></div><span class="teacher-bar__value">${h.score}</span></div>`;
    }).join('');
  }

  _customQuestions() {
    return this.storage.get('custom-questions')?.questions || [];
  }

  _customScenarios() {
    return this.storage.get('custom-scenarios')?.scenarios || [];
  }

  _activeClass() {
    const classes = this.storage.get('classes') || [];
    return classes.find(c => c.active) || classes[0];
  }

  _hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
      hash = ((hash << 5) - hash) + pin.charCodeAt(i);
      hash = hash & hash;
    }
    return String(hash);
  }

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
  }

  _classCode() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  _splitCsv(value) {
    return String(value || '').split(',').map(item => item.trim()).filter(Boolean);
  }

  _escape(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  _isValidQuestion(q) {
    return q && q.id && q.question && q.explanation && (typeof q.correctAnswer === 'string' || typeof q.correctAnswer === 'boolean');
  }

  _isValidScenario(s) {
    return s && s.id && s.patient?.bloodType && Array.isArray(s.availableBlood) && Array.isArray(s.correctAnswers);
  }

  _toastError(message) {
    this.bus.emit('toast:show', { type: 'error', message });
  }
}

// --- FILE: screens/settings-screen.js ---



/**
 * Settings Screen — ABO Sim v1.3.0
 * Painel de configurações centralizado (Tasks 8.7, 8.8, 8.10).
 */
class SettingsScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.settingsKey = 'settings';
    this.container = document.getElementById('settings-content');
    this.defaults = {
      theme: 'dark',
      fontSize: 'normal',       // compact | normal | large
      colorblind: 'off',        // off | protanopia | deuteranopia | tritanopia
      highContrast: false,
      reducedMotion: 'auto',    // auto | off | on
      soundEnabled: true,
      soundVolume: 25
    };
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'settings') this.render();
    });

    // Aplicar settings salvas ao carregar
    this._applySettings(this._getSettings());
  }

  _getSettings() {
    return { ...this.defaults, ...(this.storage.get(this.settingsKey) || {}) };
  }

  _saveSettings(settings) {
    this.storage.set(this.settingsKey, settings);
    this._applySettings(settings);
    if (this.bus) {
      this.bus.emit('settings:change', settings);
      this.bus.emit('toast:show', { type: 'success', message: 'Configurações salvas', duration: 2000 });
    }
  }

  _applySettings(settings) {
    const root = document.documentElement;

    // Tema
    root.setAttribute('data-theme', settings.theme || 'dark');

    // Font scale
    root.setAttribute('data-font-size', settings.fontSize || 'normal');

    // Daltonismo
    if (settings.colorblind && settings.colorblind !== 'off') {
      root.setAttribute('data-colorblind', settings.colorblind);
    } else {
      root.removeAttribute('data-colorblind');
    }

    // Alto contraste plus
    root.classList.toggle('high-contrast-plus', !!settings.highContrast);

    // Redução de movimento
    if (settings.reducedMotion === 'on') {
      root.classList.add('reduced-motion');
      root.classList.remove('reduced-motion-off');
    } else if (settings.reducedMotion === 'off') {
      root.classList.remove('reduced-motion');
      root.classList.add('reduced-motion-off');
    } else {
      root.classList.remove('reduced-motion', 'reduced-motion-off');
    }
    // 'auto' usa a media query do sistema

    // Som
    if (window.ABO && window.ABO.theme) {
      // Theme toggle sync
    }
  }

  render() {
    if (!this.container) return;
    const settings = this._getSettings();

    this.container.innerHTML = `
      <div class="settings-layout">
        <nav class="settings-nav" role="tablist">
          <button class="settings-tab settings-tab--active" data-tab="appearance" role="tab" aria-selected="true">🎨 Aparência</button>
          <button class="settings-tab" data-tab="accessibility" role="tab">♿ Acessibilidade</button>
          <button class="settings-tab" data-tab="audio" role="tab">🔊 Áudio</button>
          <button class="settings-tab" data-tab="data" role="tab">💾 Dados</button>
        </nav>

        <div class="settings-panels">
          <!-- Aparência -->
          <div class="settings-panel settings-panel--active" data-panel="appearance" role="tabpanel">
            <h3 class="settings-panel__title">Aparência</h3>

            <div class="settings-group">
              <label class="settings-label">Tema</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-theme" value="dark" ${settings.theme === 'dark' ? 'checked' : ''}> 🌙 Escuro</label>
                <label class="settings-radio"><input type="radio" name="setting-theme" value="light" ${settings.theme === 'light' ? 'checked' : ''}> ☀️ Claro</label>
              </div>
            </div>

            <div class="settings-group">
              <label class="settings-label">Tamanho da fonte</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="compact" ${settings.fontSize === 'compact' ? 'checked' : ''}> Compacto (0.875×)</label>
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="normal" ${settings.fontSize === 'normal' ? 'checked' : ''}> Padrão (1×)</label>
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="large" ${settings.fontSize === 'large' ? 'checked' : ''}> Grande (1.25×)</label>
              </div>
            </div>
          </div>

          <!-- Acessibilidade -->
          <div class="settings-panel" data-panel="accessibility" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Acessibilidade</h3>

            <div class="settings-group">
              <label class="settings-label">Modo daltonismo</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="off" ${settings.colorblind === 'off' ? 'checked' : ''}> Desativado</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="protanopia" ${settings.colorblind === 'protanopia' ? 'checked' : ''}> Protanopia (vermelho-verde)</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="deuteranopia" ${settings.colorblind === 'deuteranopia' ? 'checked' : ''}> Deuteranopia (vermelho-verde)</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="tritanopia" ${settings.colorblind === 'tritanopia' ? 'checked' : ''}> Tritanopia (azul-amarelo)</label>
              </div>
            </div>

            <div class="settings-group">
              <label class="settings-toggle">
                <input type="checkbox" id="setting-highcontrast" ${settings.highContrast ? 'checked' : ''}>
                <span class="settings-toggle__label">Alto contraste plus (ratio ≥ 7:1 AAA)</span>
              </label>
            </div>

            <div class="settings-group">
              <label class="settings-label">Redução de movimento</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-motion" value="auto" ${settings.reducedMotion === 'auto' ? 'checked' : ''}> Automático (seguir sistema)</label>
                <label class="settings-radio"><input type="radio" name="setting-motion" value="off" ${settings.reducedMotion === 'off' ? 'checked' : ''}> Desativado (sempre animar)</label>
                <label class="settings-radio"><input type="radio" name="setting-motion" value="on" ${settings.reducedMotion === 'on' ? 'checked' : ''}> Ativado (sem animações)</label>
              </div>
            </div>
          </div>

          <!-- Áudio -->
          <div class="settings-panel" data-panel="audio" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Áudio</h3>

            <div class="settings-group">
              <label class="settings-toggle">
                <input type="checkbox" id="setting-sound" ${settings.soundEnabled ? 'checked' : ''}>
                <span class="settings-toggle__label">Sons ligados</span>
              </label>
            </div>

            <div class="settings-group">
              <label class="settings-label">Volume</label>
              <input type="range" id="setting-volume" min="0" max="100" value="${settings.soundVolume}" class="settings-range">
              <span class="settings-range-value">${settings.soundVolume}%</span>
            </div>
          </div>

          <!-- Dados -->
          <div class="settings-panel" data-panel="data" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Dados</h3>

            <div class="settings-group">
              <p class="settings-desc">Selecione os dados que deseja resetar:</p>
              <div class="settings-checkboxes">
                <label class="settings-checkbox"><input type="checkbox" value="score"> Score e leaderboard</label>
                <label class="settings-checkbox"><input type="checkbox" value="leaderboard"> Leaderboard</label>
                <label class="settings-checkbox"><input type="checkbox" value="achievements"> Conquistas</label>
                <label class="settings-checkbox"><input type="checkbox" value="quiz-history"> Progresso do quiz</label>
                <label class="settings-checkbox"><input type="checkbox" value="history"> Histórico de tipagens</label>
                <label class="settings-checkbox"><input type="checkbox" value="bookmarks"> Favoritos da enciclopédia</label>
                <label class="settings-checkbox"><input type="checkbox" value="trail-progress"> Trilhas de aprendizado</label>
                <label class="settings-checkbox"><input type="checkbox" value="case-progress"> Casos clínicos</label>
                <label class="settings-checkbox"><input type="checkbox" value="myths-completed"> Mitos vs. Fatos</label>
                <label class="settings-checkbox"><input type="checkbox" value="encyclopedia-visited"> Enciclopédia visitados</label>
                <label class="settings-checkbox"><input type="checkbox" value="custom-questions"> Questões customizadas</label>
                <label class="settings-checkbox"><input type="checkbox" value="custom-scenarios"> Cenários customizados</label>
                <label class="settings-checkbox"><input type="checkbox" value="classes"> Turmas</label>
                <label class="settings-checkbox"><input type="checkbox" value="settings"> Configurações do app</label>
              </div>
              <button id="btn-reset-selected" class="btn btn--destructive">🗑️ Resetar selecionados</button>
            </div>

            <div class="settings-group">
              <button id="btn-export-progress" class="btn btn--secondary">Exportar progresso (JSON)</button>
            </div>

            <div class="settings-group">
              <button id="btn-restore-defaults" class="btn btn--secondary">↺ Restaurar padrões</button>
            </div>

            <div class="settings-group">
              <button id="btn-restart-tour" class="btn btn--secondary">🎓 Rever tour guiado</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this._bindEvents(settings);
  }

  _bindEvents(settings) {
    // Tab navigation
    this.container.querySelectorAll('.settings-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.container.querySelectorAll('.settings-tab').forEach(t => {
          t.classList.remove('settings-tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        this.container.querySelectorAll('.settings-panel').forEach(p => {
          p.hidden = true;
          p.classList.remove('settings-panel--active');
        });
        tab.classList.add('settings-tab--active');
        tab.setAttribute('aria-selected', 'true');
        const panel = this.container.querySelector(`[data-panel="${tab.dataset.tab}"]`);
        if (panel) {
          panel.hidden = false;
          panel.classList.add('settings-panel--active');
        }
      });
    });

    // Theme
    this.container.querySelectorAll('[name="setting-theme"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.theme = e.target.value;
        this._saveSettings(s);
      });
    });

    // Font size
    this.container.querySelectorAll('[name="setting-fontsize"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.fontSize = e.target.value;
        this._saveSettings(s);
      });
    });

    // Colorblind
    this.container.querySelectorAll('[name="setting-colorblind"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.colorblind = e.target.value;
        this._saveSettings(s);
      });
    });

    // High contrast
    const hcCheckbox = document.getElementById('setting-highcontrast');
    if (hcCheckbox) {
      hcCheckbox.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.highContrast = e.target.checked;
        this._saveSettings(s);
      });
    }

    // Reduced motion
    this.container.querySelectorAll('[name="setting-motion"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.reducedMotion = e.target.value;
        this._saveSettings(s);
      });
    });

    // Sound
    const soundCheckbox = document.getElementById('setting-sound');
    if (soundCheckbox) {
      soundCheckbox.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.soundEnabled = e.target.checked;
        this._saveSettings(s);
        if (window.toggleSound) window.toggleSound();
      });
    }

    // Volume
    const volumeRange = document.getElementById('setting-volume');
    if (volumeRange) {
      volumeRange.addEventListener('input', (e) => {
        const val = e.target.value;
        const s = this._getSettings();
        s.soundVolume = parseInt(val);
        this._saveSettings(s);
        const display = this.container.querySelector('.settings-range-value');
        if (display) display.textContent = val + '%';
      });
    }

    // Reset selected
    const resetBtn = document.getElementById('btn-reset-selected');
    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        const checked = Array.from(this.container.querySelectorAll('.settings-checkboxes input:checked')).map(cb => cb.value);
        if (checked.length === 0) {
          this.bus.emit('toast:show', { type: 'warning', message: 'Selecione pelo menos um item para resetar.' });
          return;
        }

        const confirmed = await ConfirmDialog.confirm({
          title: 'Resetar dados selecionados',
          message: `${checked.length} item(ns) serão apagados permanentemente deste dispositivo.`,
          confirmText: 'Resetar selecionados',
          danger: true
        });

        if (!confirmed) return;
        checked.forEach(key => this.storage.remove(key));
        this.bus.emit('toast:show', { type: 'success', message: `${checked.length} item(ns) resetado(s).` });
      });
    }

    // Restore defaults
    const restoreBtn = document.getElementById('btn-restore-defaults');
    if (restoreBtn) {
      restoreBtn.addEventListener('click', async () => {
        const confirmed = await ConfirmDialog.confirm({
          title: 'Restaurar padrões',
          message: 'As configurações de aparência, acessibilidade e áudio voltarão aos valores padrão.',
          confirmText: 'Restaurar padrões'
        });

        if (!confirmed) return;
        this._saveSettings({ ...this.defaults });
        this.render();
      });
    }

    const exportBtn = document.getElementById('btn-export-progress');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        downloadJson('abo-sim-progresso.json', {
          schemaVersion: 1,
          exportedAt: nowIso(),
          metrics: getProgressMetrics(this.storage)
        });
      });
    }

    // Restart tour
    const tourBtn = document.getElementById('btn-restart-tour');
    if (tourBtn) {
      tourBtn.addEventListener('click', () => {
        if (window.ABO && window.ABO.tour) {
          window.ABO.tour.restart();
          this.bus.emit('toast:show', { type: 'info', message: 'Tour reiniciado! Voltando ao início...' });
          setTimeout(() => {
            if (window.ABO.router) window.ABO.router.navigate('home');
          }, 500);
        }
      });
    }
  }
}

// --- FILE: screens/history-screen.js ---




class HistoryScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('history-content');
    this.filters = { type: 'all', mode: 'all' };
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'history') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const history = this._filteredHistory();
    const all = this.storage.get('history') || [];

    if (!all.length) {
      EmptyState.render(this.container, {
        icon: '🕒',
        title: 'Nenhuma tipagem registrada',
        desc: 'Faça uma simulação para criar sua primeira entrada na linha do tempo.',
        ctaLabel: 'Ir para simulador',
        ctaHref: '#simulator'
      });
      return;
    }

    this.container.innerHTML = `
      <div class="tool-panel">
        <div class="tool-panel__bar">
          <label>Tipo
            <select id="history-type" class="input">
              <option value="all">Todos</option>
              ${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(type => `<option value="${type}" ${this.filters.type === type ? 'selected' : ''}>${type}</option>`).join('')}
            </select>
          </label>
          <label>Modo
            <select id="history-mode" class="input">
              <option value="all">Todos</option>
              ${['discovery','verification','inverse','compare'].map(mode => `<option value="${mode}" ${this.filters.mode === mode ? 'selected' : ''}>${this._modeLabel(mode)}</option>`).join('')}
            </select>
          </label>
          <button id="history-clear" class="btn btn--destructive">Limpar histórico</button>
        </div>
        ${history.length ? `
          <ol class="timeline">
            ${history.map(item => this._renderItem(item)).join('')}
          </ol>
        ` : EmptyState.markup({
          icon: '🔎',
          title: 'Nenhum registro para o filtro',
          desc: 'Troque os filtros para ver outras tipagens.',
          compact: true
        })}
      </div>
    `;

    document.getElementById('history-type')?.addEventListener('change', event => {
      this.filters.type = event.target.value;
      this.render();
    });
    document.getElementById('history-mode')?.addEventListener('change', event => {
      this.filters.mode = event.target.value;
      this.render();
    });
    document.getElementById('history-clear')?.addEventListener('click', () => this._clear());
    this.container.querySelectorAll('[data-revisit]').forEach(button => {
      button.addEventListener('click', () => {
        this.storage.set('revisit-type', button.dataset.revisit);
        this.bus.emit('toast:show', { type: 'info', message: `Reabrindo tipo ${button.dataset.revisit} no simulador.` });
        window.ABO?.router?.navigate('simulator');
      });
    });
  }

  _renderItem(item) {
    const type = normalizeBloodLabel(item.bloodType);
    const reactions = item.reactions || {};
    return `
      <li class="timeline-item">
        <div class="timeline-item__header">
          <span class="blood-badge">${type || 'N/A'}</span>
          <strong>${this._modeLabel(item.mode)}</strong>
          <time>${formatDateTime(item.timestamp)}</time>
        </div>
        <div class="reaction-row">
          ${Object.entries(reactions).map(([key, value]) => `<span class="reaction-pill ${value ? 'reaction-pill--positive' : 'reaction-pill--negative'}">${this._reagentLabel(key)} ${value ? '+' : '-'}</span>`).join('')}
        </div>
        <button class="btn btn--secondary" data-revisit="${type}">Revisitar</button>
      </li>
    `;
  }

  _filteredHistory() {
    return (this.storage.get('history') || [])
      .filter(item => this.filters.type === 'all' || normalizeBloodLabel(item.bloodType) === this.filters.type)
      .filter(item => this.filters.mode === 'all' || item.mode === this.filters.mode)
      .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
  }

  async _clear() {
    const ok = await ConfirmDialog.confirm({
      title: 'Limpar histórico',
      message: 'Todas as tipagens registradas neste dispositivo serão apagadas.',
      confirmText: 'Limpar histórico',
      danger: true
    });
    if (!ok) return;
    this.storage.remove('history');
    this.bus.emit('toast:show', { type: 'success', message: 'Histórico limpo.' });
    this.render();
  }

  _modeLabel(mode) {
    return {
      discovery: 'Descoberta',
      verification: 'Verificação',
      standard: 'Simulação',
      inverse: 'Diagnóstico livre',
      compare: 'Comparação'
    }[mode] || 'Simulação';
  }

  _reagentLabel(key) {
    return key === 'anti-a' ? 'Anti-A' : key === 'anti-b' ? 'Anti-B' : key === 'anti-d' ? 'Anti-D' : key;
  }
}

// --- FILE: screens/trails-screen.js ---



class TrailsScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('trails-content');
    this.activeKey = 'active-trail';
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'trails') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const activeId = this.storage.get(this.activeKey) || 'beginner';
    const metrics = getProgressMetrics(this.storage);

    this.container.innerHTML = `
      <div class="trail-grid">
        ${INLINE_TRAILS.map(trail => this._renderTrail(trail, trail.id === activeId, metrics)).join('')}
      </div>
    `;

    this.container.querySelectorAll('[data-trail-select]').forEach(button => {
      button.addEventListener('click', () => {
        this.storage.set(this.activeKey, button.dataset.trailSelect);
        this.bus.emit('toast:show', { type: 'success', message: 'Trilha ativa atualizada.' });
        this.render();
      });
    });
    this.container.querySelectorAll('[data-nav-step]').forEach(button => {
      button.addEventListener('click', () => window.ABO?.router?.navigate(button.dataset.navStep));
    });
  }

  _renderTrail(trail, active, metrics) {
    const completed = trail.steps.filter(step => this._valueFor(step.metric, metrics) >= step.target).length;
    const pct = Math.round((completed / trail.steps.length) * 100);
    return `
      <article class="trail-card ${active ? 'trail-card--active' : ''}">
        <header class="trail-card__header">
          <span class="trail-card__badge">${trail.badge}</span>
          <h3>${trail.title}</h3>
          <p>${trail.desc}</p>
        </header>
        <div class="progress-track"><div class="progress-track__bar bar-w-${Math.round(pct / 10) * 10}"></div></div>
        <strong>${completed}/${trail.steps.length} passos</strong>
        <ol class="trail-steps">
          ${trail.steps.map(step => {
            const value = this._valueFor(step.metric, metrics);
            const done = value >= step.target;
            return `
              <li class="${done ? 'is-complete' : ''}">
                <span>${done ? '✓' : '○'}</span>
                <button class="link-button" data-nav-step="${step.route}">${step.label}</button>
                <small>${Math.min(value, step.target)}/${step.target}</small>
              </li>
            `;
          }).join('')}
        </ol>
        <button class="btn ${active ? 'btn--secondary' : 'btn--primary'}" data-trail-select="${trail.id}">${active ? 'Trilha ativa' : 'Ativar trilha'}</button>
      </article>
    `;
  }

  _valueFor(metric, metrics) {
    const map = {
      encyclopediaVisited: metrics.encyclopediaVisited.length,
      mythsCompleted: metrics.mythsCompleted.length,
      bookmarks: metrics.bookmarks.length,
      comparisons: metrics.comparisonsCount
    };
    return map[metric] ?? metrics[metric] ?? 0;
  }
}

// --- FILE: screens/cases-screen.js ---



class CasesScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('cases-content');
    this.activeCaseId = null;
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'cases') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const progress = this.storage.get('case-progress') || {};
    const activeCase = INLINE_CLINICAL_CASES.find(item => item.id === this.activeCaseId);

    this.container.innerHTML = activeCase ? this._renderCase(activeCase, progress) : `
      <div class="case-grid">
        ${INLINE_CLINICAL_CASES.map(item => `
          <article class="case-card ${progress[item.id]?.completed ? 'case-card--complete' : ''}">
            <span class="case-card__category">${item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.patient}</p>
            <button class="btn btn--primary" data-case-open="${item.id}">${progress[item.id]?.completed ? 'Revisar caso' : 'Resolver caso'}</button>
          </article>
        `).join('')}
      </div>
    `;

    this.container.querySelectorAll('[data-case-open]').forEach(button => {
      button.addEventListener('click', () => {
        this.activeCaseId = button.dataset.caseOpen;
        this.render();
      });
    });
    this.container.querySelector('[data-case-back]')?.addEventListener('click', () => {
      this.activeCaseId = null;
      this.render();
    });
    this.container.querySelectorAll('[data-case-answer]').forEach(button => {
      button.addEventListener('click', () => this._answer(activeCase, button.dataset.caseAnswer));
    });
  }

  _renderCase(item, progress) {
    const completed = progress[item.id];
    return `
      <article class="case-detail">
        <button class="btn btn--ghost" data-case-back>← Todos os casos</button>
        <span class="case-card__category">${item.category}</span>
        <h3>${item.title}</h3>
        <p><strong>Paciente:</strong> ${item.patient}</p>
        <p><strong>Desafio:</strong> ${item.challenge}</p>
        <div class="case-options">
          ${item.options.map(option => `
            <button class="case-option ${completed?.selected === option.id ? 'case-option--selected' : ''}" data-case-answer="${option.id}" ${completed?.completed ? 'disabled' : ''}>
              ${option.text}
            </button>
          `).join('')}
        </div>
        ${completed?.completed ? `
          <div class="case-feedback ${completed.correct ? 'case-feedback--correct' : 'case-feedback--wrong'}">
            <strong>${completed.correct ? 'Correto' : 'Revise a decisão'}</strong>
            <p>${item.explanation}</p>
            <small>Referência: ${item.reference}</small>
          </div>
        ` : ''}
      </article>
    `;
  }

  _answer(item, selected) {
    const progress = this.storage.get('case-progress') || {};
    const correct = selected === item.correctAnswer;
    progress[item.id] = {
      completed: true,
      correct,
      selected,
      completedAt: nowIso()
    };
    this.storage.set('case-progress', progress);

    if (correct) {
      const score = this.storage.get('score') || {};
      score.total = (score.total || 0) + 50;
      score.lastUpdated = nowIso();
      this.storage.set('score', score);
    }

    this.bus.emit('toast:show', {
      type: correct ? 'success' : 'warning',
      message: correct ? '+50 pts: caso concluído corretamente.' : 'Caso concluído. Leia o feedback científico.'
    });
    this.render();
  }
}

// --- FILE: screens/dashboard-screen.js ---




class DashboardScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('dashboard-content');
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'dashboard') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const metrics = getProgressMetrics(this.storage);
    const hasData = metrics.typingsCompleted || metrics.quizzesTaken || metrics.history.length || metrics.casesCompleted || metrics.encyclopediaVisited.length;

    if (!hasData) {
      EmptyState.render(this.container, {
        icon: '📊',
        title: 'Seu painel ainda está vazio',
        desc: 'Faça uma simulação, responda um quiz ou leia um verbete para começar.',
        ctaLabel: 'Começar simulação',
        ctaHref: '#simulator'
      });
      return;
    }

    const avgQuiz = metrics.quizHistory.length
      ? Math.round(metrics.quizHistory.reduce((sum, item) => sum + item.percentage, 0) / metrics.quizHistory.length)
      : 0;
    const activeTrail = this.storage.get('active-trail') || 'beginner';
    const trail = INLINE_TRAILS.find(item => item.id === activeTrail);
    const trailDone = trail ? trail.steps.filter(step => this._metricValue(step.metric, metrics) >= step.target).length : 0;

    this.container.innerHTML = `
      <div class="dashboard-grid">
        ${this._stat('Tipagens', metrics.history.length || metrics.typingsCompleted, '🩸', 'Histórico de simulações', 'history')}
        ${this._stat('Quiz médio', `${avgQuiz}%`, '❓', `${metrics.quizzesTaken} quiz(es) finalizados`, 'quiz')}
        ${this._stat('Casos', `${metrics.casesCompleted}/${INLINE_CLINICAL_CASES.length}`, '🏥', 'Casos clínicos concluídos', 'cases')}
        ${this._stat('Favoritos', metrics.bookmarks.length, '★', 'Verbetes salvos', 'encyclopedia')}
      </div>
      <section class="dashboard-section">
        <h3>Trilha ativa</h3>
        <p>${trail ? `${trail.title}: ${trailDone}/${trail.steps.length} passos` : 'Nenhuma trilha ativa.'}</p>
        <div class="progress-track"><div class="progress-track__bar bar-w-${trail ? Math.round((trailDone / trail.steps.length) * 10) * 10 : 0}"></div></div>
        <a href="#trails" class="btn btn--secondary" data-nav="trails">Abrir trilhas</a>
      </section>
      <section class="dashboard-section">
        <h3>Sugestão de estudo</h3>
        <p>${this._suggestion(metrics, avgQuiz)}</p>
      </section>
      <section class="dashboard-section">
        <h3>Atividade recente</h3>
        ${metrics.history.slice(-5).reverse().map(item => `<p><strong>${item.bloodType}</strong> em ${formatDateTime(item.timestamp)}</p>`).join('') || '<p>Nenhuma tipagem recente.</p>'}
      </section>
    `;
  }

  _stat(title, value, icon, desc, route) {
    return `
      <a class="dashboard-card" href="#${route}" data-nav="${route}">
        <span aria-hidden="true">${icon}</span>
        <strong>${value}</strong>
        <h3>${title}</h3>
        <p>${desc}</p>
      </a>
    `;
  }

  _metricValue(metric, metrics) {
    const map = {
      encyclopediaVisited: metrics.encyclopediaVisited.length,
      mythsCompleted: metrics.mythsCompleted.length,
      bookmarks: metrics.bookmarks.length,
      comparisons: metrics.comparisonsCount
    };
    return map[metric] ?? metrics[metric] ?? 0;
  }

  _suggestion(metrics, avgQuiz) {
    if (!metrics.encyclopediaVisited.length) return 'Comece pela Enciclopédia para fixar os termos básicos antes do quiz.';
    if (!metrics.history.length) return 'Faça uma tipagem no simulador para conectar teoria e reação visual.';
    if (avgQuiz && avgQuiz < 70) return 'Revise Rh e compatibilidade transfusional antes do próximo quiz.';
    if (!metrics.casesCompleted) return 'Experimente um caso clínico para aplicar o conteúdo em uma situação prática.';
    return 'Ótimo progresso. Use a comparação lado a lado para revisar diferenças finas entre tipos.';
  }
}

// --- FILE: screens/minigame-screen.js ---
/**
 * Hemácia Runner — Mini-game retrô educativo
 *
 * O jogador é uma hemácia com tipo sanguíneo aleatório.
 * Anticorpos incompatíveis devem ser desviados (pular).
 * Anticorpos compatíveis passam sem causar dano (bônus).
 * Quanto mais longe, mais rápido fica.
 * Game-over explica POR QUE houve aglutinação.
 */

const MG_BLOOD_TYPES = [
  { name: 'A+',  antigens: ['A', 'D'] },
  { name: 'A-',  antigens: ['A'] },
  { name: 'B+',  antigens: ['B', 'D'] },
  { name: 'B-',  antigens: ['B'] },
  { name: 'AB+', antigens: ['A', 'B', 'D'] },
  { name: 'AB-', antigens: ['A', 'B'] },
  { name: 'O+',  antigens: ['D'] }
  // O- fica fora do runner: sem antigenos A/B/D, nenhum anticorpo seria perigoso.
];

const MG_ANTIBODY_DEFS = [
  { type: 'Anti-A', targetsAntigen: 'A', color: '#3b82f6', hue: 220 },
  { type: 'Anti-B', targetsAntigen: 'B', color: '#fbbf24', hue: 45  },
  { type: 'Anti-D', targetsAntigen: 'D', color: '#22c55e', hue: 142 }
];

const MG_CONFIG = {
  gravity: 0.55,
  jumpForce: -10.5,
  initialSpeed: 5.2,
  maxSpeed: 24,
  speedIncrement: 0.009,
  difficultyRampDistance: 2600,
  groundY: 0.78,
  playerX: 80,
  playerRadius: 18,
  obstacleWidth: 24,
  obstacleHeight: 36,
  startMinSpawnInterval: 44,
  startMaxSpawnInterval: 92,
  minSpawnInterval: 16,
  maxSpawnInterval: 42,
  burstStartDistance: 650,
  maxBurstChance: 0.58,
  maxTripleChance: 0.22,
  burstMinGap: 54,
  burstMaxGap: 104,
  collectibleChance: 0.25,
  collectibleRadius: 10
};

class MinigameScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('minigame-content');
    this.canvas = null;
    this.ctx = null;
    this.raf = null;
    this.state = 'menu'; // menu | playing | gameover
    this.highScore = this.storage.get('hemacia-highscore') || 0;
    this._boundKeyDown = this._onKeyDown.bind(this);
    this._boundKeyUp = this._onKeyUp.bind(this);
    this._boundTouch = this._onTouch.bind(this);
    this._boundResize = this._onResize.bind(this);
    this._lastDangerSoundFrame = -999;
    this._lastComboSoundFrame = -999;
  }

  init() {
    this.bus.on('screen:change', ({ to, from }) => {
      if (to === 'minigame') {
        this.enter();
      }
      if (from === 'minigame') {
        this.leave();
      }
    });
  }

  enter() {
    this.render();
    this._startGameLoop();
  }

  leave() {
    this._stopGameLoop();
    window.removeEventListener('resize', this._boundResize);
  }

  render() {
    if (!this.container) return;
    this._stopGameLoop();
    this.container.innerHTML = `
      <div class="minigame-wrapper">
        <canvas id="hemacia-canvas" class="minigame-canvas" width="800" height="400"></canvas>
        <div class="minigame-controls">
          <p class="minigame-hint">⌨️ <strong>Espaço</strong> ou <strong>↑</strong> para pular · 📱 Toque na tela</p>
          <div class="minigame-stats">
            <span class="minigame-highscore">🏆 Recorde: <strong>${this.highScore}</strong></span>
          </div>
        </div>
      </div>
    `;
    this.canvas = document.getElementById('hemacia-canvas');
    this.ctx = this.canvas.getContext('2d');
    this._resizeCanvas();
    window.removeEventListener('resize', this._boundResize);
    window.addEventListener('resize', this._boundResize);
  }

  /* ------------------------------------------------------------------ */
  /*  Game state                                                         */
  /* ------------------------------------------------------------------ */

  _resetGame() {
    const bt = MG_BLOOD_TYPES[Math.floor(Math.random() * MG_BLOOD_TYPES.length)];
    this.bloodType = bt;
    this.player = {
      x: MG_CONFIG.playerX,
      y: 0,
      vy: 0,
      radius: MG_CONFIG.playerRadius,
      grounded: true,
      squash: 1
    };
    this.obstacles = [];
    this.collectibles = [];
    this.particles = [];
    this.bgStars = this._generateBgCells(40);
    this.score = 0;
    this.bonusScore = 0;
    this.distance = 0;
    this.difficulty = 0;
    this.difficultyLevel = 1;
    this.speed = MG_CONFIG.initialSpeed;
    this.spawnTimer = MG_CONFIG.startMinSpawnInterval;
    this.frameCount = 0;
    this.hitObstacle = null;
    this.shakeFrames = 0;
    this.flashFrames = 0;
    this.groundY = 0;
    this._lastDangerSoundFrame = -999;
    this._lastComboSoundFrame = -999;
    this.state = 'playing';
    this._playSound('runner-start');
  }

  /* ------------------------------------------------------------------ */
  /*  Main loop                                                          */
  /* ------------------------------------------------------------------ */

  _startGameLoop() {
    if (!this.canvas || !this.ctx) return;
    if (this.raf) cancelAnimationFrame(this.raf);
    document.removeEventListener('keydown', this._boundKeyDown);
    document.removeEventListener('keyup', this._boundKeyUp);
    this.canvas.removeEventListener('pointerdown', this._boundTouch);
    document.addEventListener('keydown', this._boundKeyDown);
    document.addEventListener('keyup', this._boundKeyUp);
    this.canvas.addEventListener('pointerdown', this._boundTouch);
    this.state = 'menu';
    this._loop();
  }

  _stopGameLoop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
    document.removeEventListener('keydown', this._boundKeyDown);
    document.removeEventListener('keyup', this._boundKeyUp);
    this.canvas?.removeEventListener('pointerdown', this._boundTouch);
  }

  _loop() {
    this.raf = requestAnimationFrame(() => this._loop());
    if (!this.ctx || !this.canvas) return;

    const W = this.canvas.width;
    const H = this.canvas.height;
    this.groundY = H * MG_CONFIG.groundY;

    if (this.state === 'menu') {
      this._drawMenu(W, H);
    } else if (this.state === 'playing') {
      this._update(W, H);
      this._draw(W, H);
    } else if (this.state === 'gameover') {
      this._draw(W, H);
      this._drawGameOver(W, H);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Input                                                              */
  /* ------------------------------------------------------------------ */

  _onKeyDown(e) {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      this._handleJump();
    }
  }

  _onKeyUp() {}

  _onTouch(e) {
    e.preventDefault();
    this._handleJump();
  }

  _handleJump() {
    if (this.state === 'menu') {
      this._resetGame();
      return;
    }
    if (this.state === 'gameover') {
      this.state = 'menu';
      return;
    }
    if (this.state === 'playing' && this.player.grounded) {
      this.player.vy = MG_CONFIG.jumpForce;
      this.player.grounded = false;
      this.player.squash = 0.7;
      this._playSound('runner-jump');
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Update                                                             */
  /* ------------------------------------------------------------------ */

  _update(W, H) {
    this.frameCount++;
    this.distance++;
    this._updateDifficulty();
    this.score = Math.floor(this.distance / 8) + this.bonusScore;
    this.speed = Math.min(MG_CONFIG.maxSpeed, MG_CONFIG.initialSpeed + this.distance * MG_CONFIG.speedIncrement);

    // Player physics
    const p = this.player;
    p.vy += MG_CONFIG.gravity;
    p.y += p.vy;
    const floor = this.groundY - p.radius;
    if (p.y >= floor) {
      p.y = floor;
      p.vy = 0;
      p.grounded = true;
      p.squash += (1 - p.squash) * 0.3;
    } else {
      p.grounded = false;
    }

    // Spawn obstacles
    this.spawnTimer--;
    if (this.spawnTimer <= 0) {
      this._spawnObstacle(W, H);
      this.spawnTimer = this._nextSpawnInterval();
    }

    // Move obstacles
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const o = this.obstacles[i];
      o.x -= this.speed;
      if (o.x + o.w < 0) {
        // Passed safely
        if (!o.hit && o.isDangerous) {
          this._addBonus(5); // bonus for dodging dangerous ones
          this._playSound('runner-clear');
        }
        this.obstacles.splice(i, 1);
        continue;
      }
      // Collision
      if (!o.hit && this._collides(p, o)) {
        if (o.isDangerous) {
          this._gameOver(o);
          return;
        } else {
          // Compatible antibody = bonus!
          o.hit = true;
          this._addBonus(10);
          this.flashFrames = 8;
          this._spawnParticles(o.x, o.y, o.color, 6);
          this._playSound('runner-safe');
        }
      }
    }

    // Move collectibles
    for (let i = this.collectibles.length - 1; i >= 0; i--) {
      const c = this.collectibles[i];
      c.x -= this.speed;
      c.bobPhase += 0.08;
      if (c.x + c.r < 0) {
        this.collectibles.splice(i, 1);
        continue;
      }
      const dx = p.x - c.x;
      const dy = p.y - (c.y + Math.sin(c.bobPhase) * 6);
      if (Math.sqrt(dx * dx + dy * dy) < p.radius + c.r) {
        this._addBonus(15);
        this.flashFrames = 6;
        this._spawnParticles(c.x, c.y, '#ef4444', 8);
        this.collectibles.splice(i, 1);
        this._playSound('runner-collect');
      }
    }

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.vy += 0.15;
      pt.life--;
      if (pt.life <= 0) this.particles.splice(i, 1);
    }

    // Move background cells
    for (const star of this.bgStars) {
      star.x -= this.speed * star.depth;
      if (star.x < -10) {
        star.x = W + 10 + Math.random() * 40;
        star.y = Math.random() * this.groundY;
      }
    }

    // Shake decay
    if (this.shakeFrames > 0) this.shakeFrames--;
    if (this.flashFrames > 0) this.flashFrames--;
  }

  _updateDifficulty() {
    const previousLevel = this.difficultyLevel || 1;
    const progress = Math.min(1, this.distance / MG_CONFIG.difficultyRampDistance);
    this.difficulty = 1 - Math.pow(1 - progress, 2);
    this.difficultyLevel = 1 + Math.floor(this.difficulty * 5);
    if (this.state === 'playing' && this.frameCount > 10 && this.difficultyLevel > previousLevel) {
      this._playSound('runner-level');
    }
  }

  _nextSpawnInterval() {
    const min = Math.round(this._lerp(MG_CONFIG.startMinSpawnInterval, MG_CONFIG.minSpawnInterval, this.difficulty));
    const max = Math.round(this._lerp(MG_CONFIG.startMaxSpawnInterval, MG_CONFIG.maxSpawnInterval, this.difficulty));
    return min + Math.floor(Math.random() * Math.max(1, max - min + 1));
  }

  _spawnObstacle(W, H) {
    this._pushObstacle(W + 20, this._randomAntibodyDef());

    const burstChance = this.distance < MG_CONFIG.burstStartDistance ? 0 : this.difficulty * MG_CONFIG.maxBurstChance;
    if (Math.random() < burstChance) {
      const gap = MG_CONFIG.burstMinGap + Math.random() * (MG_CONFIG.burstMaxGap - MG_CONFIG.burstMinGap);
      this._pushObstacle(W + 20 + gap, this._randomAntibodyDef());
      this._playComboCue();

      const tripleChance = Math.max(0, this.difficulty - 0.45) * MG_CONFIG.maxTripleChance;
      if (Math.random() < tripleChance) {
        const secondGap = MG_CONFIG.burstMinGap + Math.random() * (MG_CONFIG.burstMaxGap - MG_CONFIG.burstMinGap);
        this._pushObstacle(W + 20 + gap + secondGap, this._randomAntibodyDef());
        this._playComboCue();
      }
    }

    const collectibleChance = MG_CONFIG.collectibleChance + this.difficulty * 0.08;
    if (Math.random() < collectibleChance) {
      this.collectibles.push({
        x: W + 120 + Math.random() * 100,
        y: this.groundY - 60 - Math.random() * 80,
        r: MG_CONFIG.collectibleRadius,
        bobPhase: Math.random() * Math.PI * 2
      });
    }
  }

  _pushObstacle(x, def) {
    const isDangerous = this.bloodType.antigens.includes(def.targetsAntigen);

    this.obstacles.push({
      x,
      y: this.groundY - MG_CONFIG.obstacleHeight,
      w: MG_CONFIG.obstacleWidth,
      h: MG_CONFIG.obstacleHeight,
      type: def.type,
      color: def.color,
      hue: def.hue,
      isDangerous,
      hit: false
    });

    if (isDangerous && this.difficulty > 0.45 && this.frameCount - this._lastDangerSoundFrame > 120) {
      this._lastDangerSoundFrame = this.frameCount;
      this._playSound('runner-danger');
    }
  }

  _randomAntibodyDef() {
    return MG_ANTIBODY_DEFS[Math.floor(Math.random() * MG_ANTIBODY_DEFS.length)];
  }

  _addBonus(points) {
    this.bonusScore += points;
    this.score = Math.floor(this.distance / 8) + this.bonusScore;
  }

  _lerp(from, to, amount) {
    return from + (to - from) * amount;
  }

  _collides(player, obstacle) {
    // Circle vs rectangle
    const cx = player.x;
    const cy = player.y;
    const r = player.radius * 0.75; // slight forgiveness
    const rx = obstacle.x;
    const ry = obstacle.y;
    const rw = obstacle.w;
    const rh = obstacle.h;
    const closestX = Math.max(rx, Math.min(cx, rx + rw));
    const closestY = Math.max(ry, Math.min(cy, ry + rh));
    const dx = cx - closestX;
    const dy = cy - closestY;
    return (dx * dx + dy * dy) < (r * r);
  }

  _gameOver(obstacle) {
    this.state = 'gameover';
    this.hitObstacle = obstacle;
    this.shakeFrames = 20;
    this._spawnParticles(this.player.x, this.player.y, '#ef4444', 20);
    this._playSound('runner-over');
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.storage.set('hemacia-highscore', this.highScore);
      this._updateHighScoreDisplay();
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Drawing                                                            */
  /* ------------------------------------------------------------------ */

  _draw(W, H) {
    const ctx = this.ctx;

    // Camera shake
    let shakeX = 0, shakeY = 0;
    if (this.shakeFrames > 0) {
      shakeX = (Math.random() - 0.5) * this.shakeFrames * 1.2;
      shakeY = (Math.random() - 0.5) * this.shakeFrames * 1.2;
    }
    ctx.save();
    ctx.translate(shakeX, shakeY);

    // Background — dark blood vessel
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0f18');
    grad.addColorStop(0.7, '#1a0a0a');
    grad.addColorStop(1, '#2a0a0a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Vessel walls (top & bottom)
    ctx.fillStyle = '#3a1515';
    ctx.fillRect(0, 0, W, 6);
    ctx.fillRect(0, this.groundY + 20, W, H - this.groundY);
    ctx.fillStyle = '#4a1a1a';
    ctx.fillRect(0, this.groundY + 16, W, 6);

    // Pulsing vessel glow
    const pulse = 0.3 + Math.sin(this.frameCount * 0.02) * 0.1;
    ctx.shadowBlur = 0;

    // Background floating cells
    ctx.globalAlpha = 0.15;
    for (const star of this.bgStars) {
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.ellipse(star.x, star.y, star.size, star.size * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Ground line
    ctx.strokeStyle = 'rgba(200, 60, 60, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(0, this.groundY + 14);
    ctx.lineTo(W, this.groundY + 14);
    ctx.stroke();
    ctx.setLineDash([]);

    // Flash effect
    if (this.flashFrames > 0) {
      ctx.fillStyle = `rgba(34, 197, 94, ${this.flashFrames * 0.04})`;
      ctx.fillRect(0, 0, W, H);
    }

    // Draw collectibles (plasma drops)
    for (const c of this.collectibles) {
      const by = c.y + Math.sin(c.bobPhase) * 6;
      ctx.fillStyle = '#ef4444';
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      // Drop shape
      ctx.moveTo(c.x, by - c.r);
      ctx.bezierCurveTo(c.x + c.r, by - c.r * 0.3, c.x + c.r * 0.7, by + c.r, c.x, by + c.r);
      ctx.bezierCurveTo(c.x - c.r * 0.7, by + c.r, c.x - c.r, by - c.r * 0.3, c.x, by - c.r);
      ctx.fill();
      ctx.shadowBlur = 0;
      // Cross symbol
      ctx.fillStyle = '#fff';
      ctx.fillRect(c.x - 3, by - 1, 6, 2);
      ctx.fillRect(c.x - 1, by - 3, 2, 6);
    }

    // Draw obstacles (Y-shaped antibodies)
    for (const o of this.obstacles) {
      if (o.hit) continue;
      this._drawAntibody(ctx, o);
    }

    // Draw player (hemácia)
    this._drawPlayer(ctx);

    // Draw particles
    for (const pt of this.particles) {
      ctx.globalAlpha = pt.life / pt.maxLife;
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x - 2, pt.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;

    // HUD
    this._drawHUD(ctx, W);

    // CRT scanline overlay
    this._drawScanlines(ctx, W, H);

    ctx.restore();
  }

  _drawPlayer(ctx) {
    const p = this.player;
    const sx = 1 / p.squash;
    const sy = p.squash;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(sx, sy);

    // Glow
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 16;

    // Main cell body
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.radius, p.radius * 0.85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Biconcave dimple (hemácia shape)
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.radius * 0.5, p.radius * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    ctx.fillStyle = 'rgba(255, 150, 150, 0.4)';
    ctx.beginPath();
    ctx.ellipse(-4, -5, 6, 4, -0.4, 0, Math.PI * 2);
    ctx.fill();

    // Blood type label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.bloodType.name, 0, 1);

    ctx.restore();
  }

  _drawAntibody(ctx, o) {
    const cx = o.x + o.w / 2;
    const by = o.y + o.h;
    const armSpread = 10;

    ctx.strokeStyle = o.color;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.shadowColor = o.color;
    ctx.shadowBlur = o.isDangerous ? 12 : 4;

    // Stem
    ctx.beginPath();
    ctx.moveTo(cx, by);
    ctx.lineTo(cx, o.y + o.h * 0.45);
    ctx.stroke();

    // Left arm
    ctx.beginPath();
    ctx.moveTo(cx, o.y + o.h * 0.45);
    ctx.lineTo(cx - armSpread, o.y);
    ctx.stroke();

    // Right arm
    ctx.beginPath();
    ctx.moveTo(cx, o.y + o.h * 0.45);
    ctx.lineTo(cx + armSpread, o.y);
    ctx.stroke();

    // Binding tips
    ctx.fillStyle = o.color;
    ctx.beginPath();
    ctx.arc(cx - armSpread, o.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + armSpread, o.y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    // Danger indicator (pulsing !)
    if (o.isDangerous) {
      const blink = Math.sin(this.frameCount * 0.15) > 0;
      if (blink) {
        ctx.fillStyle = '#ff0000';
        ctx.font = 'bold 14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('⚠', cx, o.y - 8);
      }
    }

    // Label
    ctx.fillStyle = o.color;
    ctx.font = '9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(o.type, cx, by + 12);
  }

  _drawHUD(ctx, W) {
    // Score
    ctx.fillStyle = '#f9fafb';
    ctx.font = 'bold 18px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE: ${this.score}`, 16, 32);

    // Blood type badge
    const badgeX = W - 16;
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.8)';
    const tw = ctx.measureText(`TIPO: ${this.bloodType.name}`).width;
    ctx.fillRect(badgeX - tw - 16, 12, tw + 24, 28);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px monospace';
    ctx.fillText(`TIPO: ${this.bloodType.name}`, badgeX - 4, 31);

    // Speed indicator
    ctx.textAlign = 'left';
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    const speedPct = Math.min(100, Math.floor(((this.speed - MG_CONFIG.initialSpeed) / (MG_CONFIG.maxSpeed - MG_CONFIG.initialSpeed)) * 100));
    ctx.fillText(`VEL: ${speedPct}%   DIF: ${this.difficultyLevel}/6`, 16, 52);

    // Legend — which antibodies are dangerous
    const antigens = this.bloodType.antigens;
    let legendY = 68;
    ctx.font = '10px monospace';
    for (const def of MG_ANTIBODY_DEFS) {
      const dangerous = antigens.includes(def.targetsAntigen);
      ctx.fillStyle = dangerous ? '#ef4444' : '#4ade80';
      ctx.fillText(`${dangerous ? '⚠' : '✓'} ${def.type}`, 16, legendY);
      legendY += 14;
    }
  }

  _drawScanlines(ctx, W, H) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    for (let y = 0; y < H; y += 3) {
      ctx.fillRect(0, y, W, 1);
    }
    // Vignette
    const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  /* ------------------------------------------------------------------ */
  /*  Menu screen                                                        */
  /* ------------------------------------------------------------------ */

  _drawMenu(W, H) {
    const ctx = this.ctx;

    // Background
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0f18');
    grad.addColorStop(0.5, '#1a0a0a');
    grad.addColorStop(1, '#0d0f18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Animated floating cells
    if (!this._menuCells) this._menuCells = this._generateBgCells(25);
    for (const c of this._menuCells) {
      c.x -= 0.5;
      if (c.x < -10) c.x = W + 10;
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = c.color;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.size, c.size * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Title
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 36px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#dc2626';
    ctx.shadowBlur = 20;
    ctx.fillText('HEMÁCIA RUNNER', W / 2, H * 0.28);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px monospace';
    ctx.fillText('Desvie dos anticorpos incompatíveis!', W / 2, H * 0.38);

    // Big hemácia icon
    ctx.save();
    ctx.translate(W / 2, H * 0.55);
    const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.06;
    ctx.scale(pulse, pulse);
    ctx.fillStyle = '#dc2626';
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.ellipse(0, 0, 40, 34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.ellipse(0, 0, 20, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,180,180,0.3)';
    ctx.beginPath();
    ctx.ellipse(-8, -10, 12, 8, -0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('ABO', 0, 2);
    ctx.restore();

    // Start prompt
    const blink = Math.sin(Date.now() * 0.004) > 0;
    if (blink) {
      ctx.fillStyle = '#f9fafb';
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('[ ESPAÇO / TOQUE PARA JOGAR ]', W / 2, H * 0.78);
    }

    // High score
    if (this.highScore > 0) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = '13px monospace';
      ctx.fillText(`RECORDE: ${this.highScore}`, W / 2, H * 0.88);
    }

    this._drawScanlines(ctx, W, H);
  }

  /* ------------------------------------------------------------------ */
  /*  Game Over screen                                                   */
  /* ------------------------------------------------------------------ */

  _drawGameOver(W, H) {
    const ctx = this.ctx;

    // Overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, W, H);

    // Panel background
    const panelW = Math.min(500, W - 40);
    const panelH = 230;
    const px = (W - panelW) / 2;
    const py = (H - panelH) / 2 - 10;
    ctx.fillStyle = '#1a1f2e';
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(px, py, panelW, panelH, 12);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Title
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('AGLUTINAÇÃO!', W / 2, py + 32);

    // Score
    ctx.fillStyle = '#f9fafb';
    ctx.font = '16px monospace';
    ctx.fillText(`Score: ${this.score}`, W / 2, py + 62);

    if (this.score >= this.highScore && this.score > 0) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 13px monospace';
      ctx.fillText('🏆 NOVO RECORDE!', W / 2, py + 82);
    }

    // Educational explanation
    if (this.hitObstacle) {
      const o = this.hitObstacle;
      const antigen = MG_ANTIBODY_DEFS.find(d => d.type === o.type)?.targetsAntigen || '?';

      ctx.fillStyle = '#d1d5db';
      ctx.font = '12px monospace';
      const lines = [
        `Sua hemácia era tipo ${this.bloodType.name}.`,
        `Ela possui antígeno${this.bloodType.antigens.length !== 1 ? 's' : ''}: ${this.bloodType.antigens.length ? this.bloodType.antigens.join(', ') : 'nenhum'}.`,
        `${o.type} reconheceu o antígeno ${antigen} e causou aglutinação!`,
        `Na vida real, isso significa agrupamento das hemácias.`
      ];
      let ly = py + 108;
      for (const line of lines) {
        ctx.fillText(line, W / 2, ly);
        ly += 18;
      }
    }

    // Restart prompt
    const blink = Math.sin(Date.now() * 0.004) > 0;
    if (blink) {
      ctx.fillStyle = '#9ca3af';
      ctx.font = '13px monospace';
      ctx.fillText('[ ESPAÇO / TOQUE PARA CONTINUAR ]', W / 2, py + panelH - 16);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */

  _generateBgCells(count) {
    const cells = [];
    for (let i = 0; i < count; i++) {
      cells.push({
        x: Math.random() * 900,
        y: Math.random() * 350,
        size: 3 + Math.random() * 8,
        depth: 0.2 + Math.random() * 0.6,
        color: ['#dc2626', '#991b1b', '#7f1d1d', '#450a0a'][Math.floor(Math.random() * 4)]
      });
    }
    return cells;
  }

  _spawnParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        color,
        life: 20 + Math.floor(Math.random() * 20),
        maxLife: 40
      });
    }
  }

  _resizeCanvas() {
    if (!this.canvas) return;
    const wrapper = this.canvas.parentElement;
    if (!wrapper) return;
    const w = wrapper.clientWidth || wrapper.getBoundingClientRect().width || 800;
    const ratio = 800 / 400;
    const canvasW = Math.max(320, Math.min(800, w));
    const canvasH = canvasW / ratio;
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
  }

  _onResize() {
    this._resizeCanvas();
  }

  _playComboCue() {
    if (this.frameCount - this._lastComboSoundFrame < 90) return;
    this._lastComboSoundFrame = this.frameCount;
    this._playSound('runner-combo');
  }

  _playSound(name) {
    if (typeof window.playSound === 'function') {
      window.playSound(name);
    }
  }

  _updateHighScoreDisplay() {
    const el = this.container?.querySelector('.minigame-highscore strong');
    if (el) el.textContent = this.highScore;
  }
}

// --- FILE: main.js ---































const bus = new EventBus();
const state = new StateManager(bus);
const router = new Router(bus);
const screenManager = new ScreenManager(bus);
const storage = new Storage();
const theme = new ThemeManager(storage);
const a11y = new AccessibilityManager(storage);
const toasts = new ToastManager(bus);
const keyboard = new KeyboardManager(bus, router);
const tour = new TourManager(storage, bus);
const search = new SearchPalette(bus, router, storage);
const glossary = new GlossaryManager(bus);
const presentation = new PresentationMode(bus, router, storage);
const scoreManager = new ScoreManager(storage);
const achievements = new Achievements(storage, bus);
const leaderboard = new Leaderboard(storage);
const simulator = new SimulatorScreen(bus, state, storage);
const quiz = new QuizScreen(bus, state, storage);
const transfusion = new TransfusionScreen(bus, state, storage, scoreManager, achievements);
const myths = new MythsScreen(bus, storage, achievements);
const encyclopedia = new EncyclopediaScreen(bus, storage, achievements);
const teacher = new TeacherScreen(bus, storage);
const settings = new SettingsScreen(bus, storage);
const history = new HistoryScreen(bus, storage);
const trails = new TrailsScreen(bus, storage);
const cases = new CasesScreen(bus, storage);
const dashboard = new DashboardScreen(bus, storage);
const minigame = new MinigameScreen(bus, storage);

window.ABO = { bus, state, router, screenManager, storage, theme, a11y, toasts, keyboard, tour, search, glossary, presentation, scoreManager, achievements, leaderboard, simulator, quiz, transfusion, myths, encyclopedia, teacher, settings, history, trails, cases, dashboard, minigame };

function registerScreens() {
  screenManager.register('simulator', {
    init: () => simulator.init(),
    skeletonTarget: '#info-panel'
  });

  screenManager.register('quiz', {
    init: () => quiz.init(),
    enter: () => quiz.start(),
    skeletonTarget: '#quiz-content',
    skeleton: 'quiz'
  });

  screenManager.register('transfusion', {
    init: () => transfusion.init(),
    enter: () => {
      transfusion.currentIndex = 0;
      transfusion.render();
    },
    skeletonTarget: '#transfusion-content',
    skeleton: 'card'
  });

  screenManager.register('myths', {
    init: () => myths.init(),
    enter: () => myths.render(),
    skeletonTarget: '#myths-content',
    skeleton: 'grid'
  });

  screenManager.register('encyclopedia', {
    init: () => encyclopedia.init(),
    enter: () => encyclopedia.render(),
    skeletonTarget: '#encyclopedia-content',
    skeleton: 'grid'
  });

  screenManager.register('teacher', {
    init: () => teacher.init(),
    enter: () => teacher.authenticated ? teacher.renderDashboard() : teacher.renderLogin(),
    skeletonTarget: '#teacher-content',
    skeleton: 'card'
  });

  screenManager.register('history', {
    init: () => history.init(),
    enter: () => history.render(),
    skeletonTarget: '#history-content',
    skeleton: 'card'
  });

  screenManager.register('trails', {
    init: () => trails.init(),
    enter: () => trails.render(),
    skeletonTarget: '#trails-content',
    skeleton: 'grid'
  });

  screenManager.register('cases', {
    init: () => cases.init(),
    enter: () => cases.render(),
    skeletonTarget: '#cases-content',
    skeleton: 'grid'
  });

  screenManager.register('dashboard', {
    init: () => dashboard.init(),
    enter: () => dashboard.render(),
    skeletonTarget: '#dashboard-content',
    skeleton: 'grid'
  });

  screenManager.register('minigame', {
    init: () => minigame.init(),
    enter: () => minigame.enter(),
    skeletonTarget: '#minigame-content',
    skeleton: 'card'
  });
}

function init() {
  console.log("ABO Pai d'égua v2.6.0 inicializando...");
  state.init();
  theme.init();
  a11y.init();
  toasts.init();
  bus.on('qr:open', () => openQrCodeModal({ bus }));
  initPwaInstallPrompt(bus);
  keyboard.init();
  settings.init();
  search.init();
  glossary.init();
  presentation.init();
  registerScreens();
  screenManager.init();
  router.init();
  tour.init();

  bus.emit('app:ready');

  const savedScore = storage.get('score');
  const scoreBadge = document.getElementById('home-score');
  if (savedScore && savedScore.total > 0 && scoreBadge) {
    scoreBadge.textContent = `🏆 Score: ${savedScore.total}`;
    scoreBadge.hidden = false;
  }

  console.log("ABO Pai d'égua v2.6.0 pronto!");
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
