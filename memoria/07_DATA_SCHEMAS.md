# 📦 Schemas de Dados — ABO Sim v1.0

## 1. blood-types.json

Definição dos 8 tipos sanguíneos com todas as propriedades necessárias.

```json
{
  "bloodTypes": [
    {
      "id": "A_POS",
      "label": "A+",
      "aboGroup": "A",
      "rhFactor": "positive",
      "antigens": {
        "A": true,
        "B": false,
        "D": true
      },
      "antibodiesInPlasma": ["Anti-B"],
      "possibleGenotypes": ["IA IA", "IA i"],
      "canDonateTo": ["A+", "AB+"],
      "canReceiveFrom": ["A+", "A-", "O+", "O-"],
      "frequencyBrazil": 0.34,
      "frequencyLabel": "~34%",
      "description": "Tipo A positivo é o mais comum no Brasil. Possui antígeno A na superfície das hemácias e anticorpo Anti-B no plasma.",
      "funFact": "Foi um dos primeiros tipos identificados por Karl Landsteiner em 1901."
    }
  ]
}
```

**Campos obrigatórios por tipo:**
| Campo | Tipo | Descrição |
|:---|:---|:---|
| `id` | string | Identificador único (A_POS, A_NEG, B_POS, etc.) |
| `label` | string | Rótulo de exibição (A+, A-, B+, etc.) |
| `aboGroup` | string | Grupo ABO (A, B, AB, O) |
| `rhFactor` | string | "positive" ou "negative" |
| `antigens` | object | `{A: bool, B: bool, D: bool}` |
| `antibodiesInPlasma` | string[] | Lista de anticorpos no plasma |
| `possibleGenotypes` | string[] | Genótipos possíveis |
| `canDonateTo` | string[] | Para quem pode doar hemácias |
| `canReceiveFrom` | string[] | De quem pode receber hemácias |
| `frequencyBrazil` | number | Frequência decimal (0.34 = 34%) |
| `frequencyLabel` | string | Frequência formatada |
| `description` | string | Explicação educativa |
| `funFact` | string | Curiosidade |

**Os 8 tipos a serem incluídos:** A+, A-, B+, B-, AB+, AB-, O+, O-

---

## 2. questions.json

Banco de questões do quiz gamificado.

```json
{
  "questions": [
    {
      "id": "q001",
      "category": "genetics",
      "difficulty": "easy",
      "type": "multiple_choice",
      "question": "Quais são os alelos possíveis no sistema ABO?",
      "options": [
        { "id": "a", "text": "A, B e O" },
        { "id": "b", "text": "IA, IB e i" },
        { "id": "c", "text": "Rh+ e Rh-" },
        { "id": "d", "text": "X e Y" }
      ],
      "correctAnswer": "b",
      "explanation": "O sistema ABO é determinado por três alelos: IA (produz antígeno A), IB (produz antígeno B) e i (não produz antígeno). IA e IB são codominantes entre si e ambos dominam sobre i.",
      "reference": "Genética mendeliana — Landsteiner, 1901"
    },
    {
      "id": "q002",
      "category": "transfusion",
      "difficulty": "medium",
      "type": "true_false",
      "question": "Uma pessoa do tipo O negativo pode doar hemácias para qualquer pessoa.",
      "correctAnswer": true,
      "explanation": "Verdadeiro para hemácias concentradas: tipo O- não possui antígenos A, B nem D na superfície das hemácias, então não causa reação transfusional. Porém, o plasma de tipo O contém Anti-A e Anti-B, então a doação de sangue total deve ser feita com cautela.",
      "reference": "Medicina transfusional"
    },
    {
      "id": "q003",
      "category": "antigens",
      "difficulty": "hard",
      "type": "matching",
      "question": "Relacione cada tipo sanguíneo com os anticorpos presentes no seu plasma:",
      "pairs": [
        { "left": "Tipo A", "right": "Anti-B" },
        { "left": "Tipo B", "right": "Anti-A" },
        { "left": "Tipo AB", "right": "Nenhum" },
        { "left": "Tipo O", "right": "Anti-A e Anti-B" }
      ],
      "explanation": "O organismo produz anticorpos contra os antígenos que NÃO possui. Tipo A tem antígeno A, então produz Anti-B. Tipo O não tem nenhum antígeno, então produz ambos.",
      "reference": "Imunohematologia básica"
    }
  ]
}
```

**Campos por questão:**
| Campo | Tipo | Descrição |
|:---|:---|:---|
| `id` | string | Identificador único |
| `category` | enum | `genetics`, `antigens`, `transfusion`, `rh_dhrn`, `biosafety` |
| `difficulty` | enum | `easy`, `medium`, `hard` |
| `type` | enum | `multiple_choice`, `true_false`, `matching`, `clinical_scenario` |
| `question` | string | Enunciado da pergunta |
| `options` | array | (para multiple_choice) Alternativas |
| `pairs` | array | (para matching) Pares left/right |
| `correctAnswer` | string\|boolean | Resposta correta |
| `explanation` | string | Explicação científica |
| `reference` | string | Fonte/referência |

**Distribuição mínima:**
- `genetics`: 8 perguntas (3 easy, 3 medium, 2 hard)
- `antigens`: 6 perguntas (2 easy, 2 medium, 2 hard)
- `transfusion`: 8 perguntas (3 easy, 3 medium, 2 hard)
- `rh_dhrn`: 4 perguntas (1 easy, 2 medium, 1 hard)
- `biosafety`: 4 perguntas (2 easy, 1 medium, 1 hard)

---

## 3. transfusion-rules.json

Matriz de compatibilidade para hemácias concentradas.

```json
{
  "compatibilityMatrix": {
    "A+":  { "canReceiveFrom": ["A+","A-","O+","O-"], "canDonateTo": ["A+","AB+"] },
    "A-":  { "canReceiveFrom": ["A-","O-"],           "canDonateTo": ["A+","A-","AB+","AB-"] },
    "B+":  { "canReceiveFrom": ["B+","B-","O+","O-"], "canDonateTo": ["B+","AB+"] },
    "B-":  { "canReceiveFrom": ["B-","O-"],           "canDonateTo": ["B+","B-","AB+","AB-"] },
    "AB+": { "canReceiveFrom": ["A+","A-","B+","B-","AB+","AB-","O+","O-"], "canDonateTo": ["AB+"] },
    "AB-": { "canReceiveFrom": ["A-","B-","AB-","O-"], "canDonateTo": ["AB+","AB-"] },
    "O+":  { "canReceiveFrom": ["O+","O-"],           "canDonateTo": ["A+","B+","AB+","O+"] },
    "O-":  { "canReceiveFrom": ["O-"],                "canDonateTo": ["A+","A-","B+","B-","AB+","AB-","O+","O-"] }
  }
}
```

---

## 4. transfusion-scenarios.json

```json
{
  "scenarios": [
    {
      "id": "ts001",
      "difficulty": "easy",
      "patient": {
        "name": "João",
        "age": 45,
        "bloodType": "A+",
        "situation": "Cirurgia eletiva de joelho. Necessita de 2 unidades de hemácias."
      },
      "availableBlood": ["A+", "B+", "O+", "AB-", "O-", "A-"],
      "correctAnswers": ["A+", "O+", "O-", "A-"],
      "explanation": "Paciente A+ pode receber de: A+, A-, O+, O-. Os tipos B+ e AB- contêm antígenos contra os quais o paciente possui anticorpos."
    }
  ]
}
```

---

## 5. myths.json

```json
{
  "myths": [
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
    }
  ]
}
```

**Campos:**
| Campo | Tipo | Descrição |
|:---|:---|:---|
| `answer` | enum | `myth`, `fact`, `partial_myth`, `partial_fact` |
| `answerLabel` | string | Rótulo de exibição |
| `references` | string[] | Fontes |

---

## 6. encyclopedia.json

```json
{
  "entries": [
    {
      "id": "enc001",
      "title": "Sistema ABO",
      "category": "fundamentos",
      "shortDescription": "O sistema de classificação sanguínea mais importante na medicina transfusional.",
      "content": "O sistema ABO foi descoberto por Karl Landsteiner em 1900-1901...",
      "keyTerms": ["antígeno", "anticorpo", "aglutinação", "Landsteiner"],
      "relatedEntries": ["enc002", "enc003", "enc004"],
      "icon": "🔬"
    }
  ]
}
```

---

## 7. Dados de estado (LocalStorage)

### abo-sim-score
```json
{
  "totalScore": 0,
  "currentStreak": 0,
  "bestStreak": 0,
  "typingsCompleted": 0,
  "quizzesTaken": 0,
  "scenariosCompleted": 0,
  "lastUpdated": "2026-04-24T12:00:00Z"
}
```

### abo-sim-achievements
```json
{
  "unlocked": ["ACH01"],
  "progress": {
    "ACH02": { "current": 3, "target": 8 },
    "ACH03": { "current": 7, "target": 10 }
  }
}
```

### abo-sim-teacher
```json
{
  "pinHash": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
  "totalTypings": 0,
  "quizResults": [],
  "mostMissedQuestions": []
}
```
