
export const INLINE_QUESTIONS = [
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

export const INLINE_SCENARIOS = [
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

export const INLINE_MYTHS = [
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

export const INLINE_ENCYCLOPEDIA = [
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
