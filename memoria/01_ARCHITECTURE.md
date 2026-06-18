# 🏗️ Arquitetura Técnica — ABO Sim v1.0

## 1. Visão geral

```
┌──────────────────────────────────────────────────────────┐
│                    BROWSER (Client-only)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  UI Layer   │  │  Simulation │  │   Game/Quiz     │  │
│  │  (HTML/CSS) │  │  Engine     │  │   Engine        │  │
│  │             │  │  (Canvas)   │  │   (JS Logic)    │  │
│  └──────┬──────┘  └──────┬──────┘  └───────┬─────────┘  │
│  ┌──────┴────────────────┴──────────────────┴─────────┐  │
│  │         Core (State Manager + Event Bus)            │  │
│  └──────────────────────┬──────────────────────────────┘  │
│  ┌──────────────────────┴──────────────────────────────┐  │
│  │         Data Layer (Static JSON + LocalStorage)      │  │
│  └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

**Zero Backend** — Funciona como HTML estático abrindo offline no navegador.

---

## 2. Padrão: Module Pattern + Event-Driven

```
         EVENT BUS (Pub/Sub global)
    ┌────┴───┐ ┌────┴───┐ ┌───┴────┐ ┌───┴────┐
    │ Screen │ │  Sim   │ │  Quiz  │ │ Score  │
    │ Router │ │ Engine │ │ Engine │ │Manager │
    └────────┘ └────────┘ └────────┘ └────────┘
```

Eventos principais: `reagent:drop`, `agglutination:start`, `agglutination:complete`, `quiz:answer`, `score:update`, `screen:change`, `theme:toggle`

---

## 3. Componentes

### 3.1 Screen Router
- Hash-based routing (`#home`, `#simulator`, `#quiz`, `#myths`, `#encyclopedia`, `#transfusion`, `#teacher`)

### 3.2 Simulation Engine (Canvas 2D)
- **ParticleSystem** → Pool de partículas (hemácias)
- **ReagentManager** → Estado dos 3 poços (Anti-A, Anti-B, Anti-D)
- **AgglutinationSim** → Clustering quando há reação Ag-Ab
- **AnimationLoop** → requestAnimationFrame a 60fps
- **InteractionHandler** → Drag/drop, touch, click

**Fluxo da simulação:**
1. Usuário seleciona tipo sanguíneo (ou recebe aleatório)
2. "Pinga" sangue virtual em cada poço
3. ParticleSystem spawna hemácias
4. AgglutinationSim verifica compatibilidade Ag-Ab
5. Se reage → partículas clusterizam (aglutinação visual)
6. Se não reage → partículas dispersas (Brownian motion)
7. Após 3 poços → resultado revelado com explicação

### 3.3 Particle Model (Hemácia)
```javascript
{
  x, y,              // posição no canvas
  vx, vy,            // velocidade
  radius: 6-10,      // raio visual (px)
  clusterId: null|int,// null=livre, int=cluster
  antigenA: boolean,
  antigenB: boolean,
  antigenD: boolean,
  color: string,
  opacity: number
}
```

- **Não-aglutinação**: Brownian motion, colisão elástica
- **Aglutinação**: Força de atração, clusters crescentes, ~2-3s para efeito completo

### 3.4 Quiz Engine
- 4 alternativas (single choice) + drag-and-drop matching + cenários clínicos
- Feedback imediato com explicação científica
- Progressão por dificuldade

### 3.5 Score Manager
- +10pts resposta correta, +5pts tipagem correta
- Multiplicador streak (2x, 3x, 5x)
- Achievements desbloqueáveis
- Leaderboard local (apelido, sem dados sensíveis)

### 3.6 Data Layer
**Estáticos (JSON):** `blood-types.json`, `questions.json`, `transfusion-rules.json`, `myths.json`, `encyclopedia.json`

**Persistência (LocalStorage):** `abo-sim-score`, `abo-sim-progress`, `abo-sim-quiz-history`, `abo-sim-achievements`

---

## 4. Módulos JavaScript

```
js/
├── main.js
├── core/
│   ├── event-bus.js, state-manager.js, router.js, storage.js
├── simulation/
│   ├── particle.js, particle-system.js, reagent-well.js
│   ├── agglutination.js, simulation-engine.js, animation-loop.js
├── quiz/
│   ├── quiz-engine.js, quiz-renderer.js, question-loader.js
├── game/
│   ├── score-manager.js, achievements.js, leaderboard.js
├── screens/
│   ├── home-screen.js, simulator-screen.js, transfusion-screen.js
│   ├── quiz-screen.js, myths-screen.js, encyclopedia-screen.js
│   └── teacher-screen.js
├── ui/
│   ├── components.js, animations.js, accessibility.js, theme.js
└── utils/
    ├── blood-logic.js, random.js, dom-helpers.js
```

---

## 5. Decisões técnicas

| Decisão | Escolha | Justificativa |
|:---|:---|:---|
| Rendering | Canvas 2D | Performance para centenas de partículas |
| Módulos | ES Modules nativos | Sem bundler, navegadores modernos suportam |
| Estilização | CSS custom properties | Theming dark/light sem recompilação |
| Tipografia | Inter + Outfit (embutidas) | Funciona offline |
| Persistência | LocalStorage | Sem banco de dados |
| Build | Nenhum | Abre index.html e funciona |

## 6. Performance budget

| Recurso | Budget |
|:---|:---|
| HTML | < 50KB |
| CSS | < 80KB |
| JavaScript | < 150KB |
| Fontes | < 200KB |
| SVG assets | < 300KB |
| Total | **< 1.3MB** |

## 7. Compatibilidade

- **Tier 1** (full): Chrome 90+, Edge 90+, Firefox 88+, Safari 14+
- **Tier 2** (degraded): Chrome 80-89, Firefox 78-87 → fallback imagens estáticas
- **Tier 3** (blocked): IE 11 → mensagem de atualização
