# 📋 Especificação de Features — ABO Sim v1.0

## Feature Map

| ID | Feature | Prioridade | Fase |
|:---|:---|:---|:---|
| F01 | Home Screen (Hero + Navegação) | P0 | 1 |
| F02 | Simulador de Tipagem (Core) | P0 | 1 |
| F03 | Sistema de Partículas (Canvas) | P0 | 1 |
| F04 | Aglutinação Visual | P0 | 1 |
| F05 | Revelação de Resultado | P0 | 1 |
| F06 | Quiz Gamificado | P0 | 2 |
| F07 | Score & Achievements | P1 | 2 |
| F08 | Mitos vs. Fatos | P1 | 2 |
| F09 | Enciclopédia | P1 | 3 |
| F10 | Cenários de Transfusão | P1 | 3 |
| F11 | Dark/Light Theme | P1 | 3 |
| F12 | Painel do Professor | P2 | 3 |
| F13 | Acessibilidade completa | P1 | 3 |
| F14 | Responsividade mobile | P0 | Contínuo |

---

## F01 — Home Screen

**Descrição:** Tela inicial que apresenta o simulador e permite navegar para todas as seções.

**Critérios de aceite:**
- [ ] Hero com título, subtítulo e CTA "Começar Simulação"
- [ ] Grid de 4-6 feature cards com ícone, título e descrição
- [ ] Navbar com logo, toggle de tema e botão de acessibilidade
- [ ] Animação de entrada (fade + slide)
- [ ] Score acumulado visível se existir progresso anterior
- [ ] Responsivo: cards empilham em mobile

---

## F02 — Simulador de Tipagem (Core)

**Descrição:** Tela principal onde o usuário realiza a tipagem virtual.

**Fluxo do usuário:**
```
1. [Tela exibe 3 poços: Anti-A, Anti-B, Anti-D]
2. [Botão "Pingar sangue" ou seletor de tipo]
3. Usuário clica/toca em um poço
4. Animação: gota cai no poço
5. Partículas (hemácias) aparecem no poço
6. Reação ocorre automaticamente (aglutina ou não)
7. Rótulo "Positivo ✓" ou "Negativo ✗" aparece no poço
8. Repete para os 3 poços
9. [Todos preenchidos] → Resultado revelado com explicação
10. [Botão "Novo teste" ou "Ir para Quiz"]
```

**Critérios de aceite:**
- [ ] 3 poços circulares com rótulo e cor distintos (Anti-A=azul, Anti-B=amarelo, Anti-D=verde)
- [ ] Click/touch no poço dispara animação de gota
- [ ] Partículas aparecem com fade-in (spawn de 30-50 por poço)
- [ ] Reação visível em 2-3 segundos
- [ ] Não permite re-clicar um poço já preenchido
- [ ] Resultado final exibido em card com: tipo ABO, Rh, genótipos possíveis
- [ ] Explicação textual do por que aglutiou ou não
- [ ] Botão "Novo teste" reseta os poços

**Modos de operação:**
1. **Modo Descoberta**: Sistema escolhe tipo aleatório. Usuário observa reações e deduz.
2. **Modo Verificação**: Usuário escolhe um tipo e verifica se acertou as reações.
3. **Modo Desafio**: Sistema mostra reações e usuário deve identificar o tipo.

---

## F03 — Sistema de Partículas (Canvas)

**Descrição:** Motor de partículas que renderiza hemácias em cada poço do simulador.

**Especificação técnica:**
- Canvas 2D dedicado por poço (ou 1 Canvas grande com viewports)
- 30-50 partículas por poço
- Cada partícula: círculo de 6-10px, cor vermelha/carmesim
- Movimento Browniano: velocidade aleatória com colisão elástica nas paredes
- Frame rate: 60fps via `requestAnimationFrame`
- Pool de objetos reutilizáveis (evita GC pressure)

**Critérios de aceite:**
- [ ] Partículas se movem suavemente sem stuttering
- [ ] Colisão com paredes do poço (bounce)
- [ ] Performance: < 16ms por frame com 150 partículas totais
- [ ] Partículas têm leve variação de tamanho e opacidade (naturalismo)
- [ ] Spawn com animação de fade-in progressivo

---

## F04 — Aglutinação Visual

**Descrição:** Quando o anticorpo do reagente encontra o antígeno da hemácia, as partículas devem visualmente clusterizar.

**Comportamento:**
```
NÃO-AGLUTINAÇÃO:
  - Partículas permanecem dispersas
  - Brownian motion contínuo
  - Distribuição uniforme no poço
  - Cor: vermelho normal

AGLUTINAÇÃO:
  - Partículas são atraídas entre si (força gravitacional simulada)
  - Formam 3-5 clusters distintos
  - Cada cluster: 6-15 partículas agrupadas
  - Clusters se movem lentamente como unidades
  - Cor: vermelho mais escuro nos clusters
  - Tempo para clustering completo: 2-3 segundos
  - Efeito visual: partículas "grudam" e ficam mais opacas
```

**Algoritmo de clustering:**
```
Para cada partícula com antígeno correspondente:
  1. Calcular distância para partículas vizinhas
  2. Se distância < threshold → aplicar força de atração
  3. Quando 2+ partículas colidem → criar cluster (grupo)
  4. Cluster herda posição do centroide
  5. Novas partículas próximas são atraídas ao cluster
  6. Cluster inteiro se move com velocidade reduzida
```

**Critérios de aceite:**
- [ ] Aglutinação visualmente distinguível de não-aglutinação em < 3s
- [ ] Clusters são orgânicos (não grid, não alinhados)
- [ ] Transição é gradual (não instantânea)
- [ ] Sem overlap excessivo (partículas não ficam todas num ponto)

---

## F05 — Revelação de Resultado

**Descrição:** Após os 3 poços serem preenchidos, revela o tipo sanguíneo com explicação.

**Conteúdo do resultado:**
```
┌─────────────────────────────────────────┐
│  Resultado: Tipo A+                     │
│                                         │
│  Anti-A: POSITIVO ✓ (aglutinou)         │
│  Anti-B: NEGATIVO ✗ (não aglutinou)     │
│  Anti-D: POSITIVO ✓ (aglutinou)         │
│                                         │
│  Explicação:                            │
│  As hemácias possuem antígeno A na      │
│  superfície, por isso reagiram com o    │
│  Anti-A. Não possuem antígeno B. O      │
│  fator Rh (antígeno D) está presente.   │
│                                         │
│  Genótipos possíveis: IA IA ou IA i     │
│                                         │
│  Frequência na população brasileira:    │
│  ~34% (tipo mais comum)                 │
│                                         │
│  [🔄 Novo Teste]   [📝 Ir para Quiz]   │
└─────────────────────────────────────────┘
```

**Critérios de aceite:**
- [ ] Card com animação de reveal (escala + fade)
- [ ] Mostra reação de cada poço com ícone visual
- [ ] Explicação em linguagem acessível (não jargão)
- [ ] Genótipos possíveis (mendelismo)
- [ ] Frequência na população brasileira
- [ ] Score: +5 pontos por tipagem completada

---

## F06 — Quiz Gamificado

**Descrição:** Série de perguntas sobre sistema ABO, genética, transfusão e biossegurança.

**Tipos de pergunta:**
1. **Múltipla escolha**: 4 alternativas, 1 correta
2. **Verdadeiro/Falso**: Afirmação a ser julgada
3. **Matching (drag-and-drop)**: Conectar tipo → anticorpo, tipo → pode doar para
4. **Cenário clínico**: Caso + pergunta de decisão

**Banco de questões mínimo: 30 perguntas**

**Categorias:**
| Categoria | Qtd mínima | Exemplo |
|:---|:---|:---|
| Genética ABO | 8 | "Quais genótipos um indivíduo tipo AB pode ter?" |
| Antígenos e anticorpos | 6 | "Qual anticorpo está no plasma de tipo O?" |
| Compatibilidade transfusional | 8 | "Tipo B pode receber sangue de quem?" |
| Fator Rh e DHRN | 4 | "Por que Rh- na gravidez é preocupante?" |
| Biossegurança | 4 | "Qual o descarte correto de lanceta usada?" |

**Mecânica:**
- 10 perguntas por rodada (sorteadas do banco)
- Timer de 30s por pergunta (configurável)
- Feedback imediato: correto (verde + explicação), incorreto (vermelho + explicação)
- +10pts por acerto, streak multiplier (2x após 3 seguidos, 3x após 5, 5x após 10)
- Barra de progresso (X/10)
- Resultado final: nota, acertos, tempo médio

**Critérios de aceite:**
- [ ] Mínimo 30 perguntas no banco
- [ ] Embaralhamento de perguntas e alternativas
- [ ] Feedback com explicação científica em cada questão
- [ ] Animação de acerto/erro (shake para erro, confetti para acerto)
- [ ] Score persistido em LocalStorage
- [ ] Botão "Jogar novamente" com novo embaralhamento

---

## F07 — Score & Achievements

**Achievements desbloqueáveis:**

| ID | Nome | Condição | Ícone |
|:---|:---|:---|:---|
| ACH01 | Primeiro Teste | Completar 1 tipagem | 🩸 |
| ACH02 | Hematologista Mirim | Completar tipagem de todos os 8 tipos | 🔬 |
| ACH03 | Quiz Master | 10/10 no quiz | 🏆 |
| ACH04 | Sem Errar | Quiz perfeito sem erro | ⭐ |
| ACH05 | Streak de Fogo | Streak de 10 respostas certas | 🔥 |
| ACH06 | Enciclopedista | Visitar todos os verbetes | 📚 |
| ACH07 | Caçador de Mitos | Completar todos os Mitos vs. Fatos | 🕵️ |
| ACH08 | Salva-vidas | Acertar todos os cenários de transfusão | ❤️ |

---

## F08 — Mitos vs. Fatos

**Descrição:** Seção que apresenta mitos populares sobre tipos sanguíneos e os desmistifica com evidência.

**Formato:** Card com afirmação → usuário clica MITO ou FATO → reveal com explicação.

**Conteúdo mínimo (10 cards):**

| Afirmação | Resposta | Referência |
|:---|:---|:---|
| "Tipo O é doador universal" | PARCIALMENTE — apenas hemácias concentradas | Medicina transfusional |
| "Tipo sanguíneo define personalidade" | MITO — sem base científica | Wikipedia: Blood type personality theory |
| "Sangue Rh- é raro e perigoso" | MITO PARCIAL — raro (~15%), mas não perigoso | Dados populacionais |
| "Filhos herdam tipo do pai" | PARCIALMENTE — herdam alelos de AMBOS os pais | Genética mendeliana |
| "Tipo AB pode receber de todos" | PARCIALMENTE — hemácias sim, plasma não | Hematologia |
| "Dieta do tipo sanguíneo funciona" | MITO — sem evidência científica robusta | Meta-análises |
| "Mosquitos preferem tipo O" | FATO PARCIAL — há estudos sugerindo preferência | Journal of Medical Entomology |
| "Tipo sanguíneo muda ao longo da vida" | MITO — determinado geneticamente, não muda | Genética básica |
| "Doar sangue enfraquece" | MITO — corpo repõe volume em 24-72h | Hematologia |
| "COVID-19 afeta mais tipo A" | PARCIALMENTE — alguns estudos sugeriram, mas inconclusivos | Meta-análise 2021 |

---

## F09 — Enciclopédia

**Verbetes (mínimo 12):**
1. Sistema ABO — história e descoberta (Landsteiner, 1900)
2. Antígenos — o que são, onde ficam
3. Anticorpos — Anti-A, Anti-B, Anti-D
4. Aglutinação — mecanismo imunológico
5. Genética mendeliana do ABO — alelos IA, IB, i
6. Fator Rh — antígeno D
7. Transfusão sanguínea — história e regras
8. DHRN — Doença hemolítica do recém-nascido
9. Subgrupos de A — A1, A2
10. D fraco — importância clínica
11. Doação de sangue — processo e requisitos
12. Hemocentros — como funcionam no Brasil

---

## F10 — Cenários de Transfusão

**Descrição:** Simulação de decisão clínica: paciente chega, qual sangue usar?

**Formato:**
```
┌──────────────────────────────────┐
│ 🚨 EMERGÊNCIA                   │
│                                  │
│ Paciente: Maria, 28 anos         │
│ Tipo sanguíneo: B-               │
│ Situação: Hemorragia pós-parto   │
│                                  │
│ Estoque disponível:              │
│ [A+] [A-] [B+] [B-] [O+] [O-]  │
│                                  │
│ Qual(is) sangue(s) podem ser     │
│ transfundidos com segurança?     │
│                                  │
│ [Selecione os compatíveis]       │
└──────────────────────────────────┘
```

**5-8 cenários com complexidade crescente.**

---

## F11 — Dark/Light Theme
- Toggle no navbar (ícone 🌙/☀️)
- Persiste escolha em LocalStorage
- Respeita `prefers-color-scheme` do sistema como default

## F12 — Painel do Professor
- Acesso por PIN (4 dígitos, configurável, default: 1234)
- Visualiza: total de tipagens feitas, distribuição de acertos no quiz, perguntas mais erradas
- Dados agregados (sem identificação individual)
- Botão "Resetar dados" para nova turma
