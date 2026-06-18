# 📁 Estrutura de Arquivos — ABO Sim v1.0

## Árvore completa do projeto

```
SISTEMA-ABO/
├── PROBLEMAS.txt                    # Contexto original (não alterar)
├── .agent.lnk                       # Link para ecossistema de agentes
│
├── memoria/                         # Documentação de engenharia (não alterar)
│   ├── 00_OVERVIEW.md
│   ├── 01_ARCHITECTURE.md
│   ├── 02_DESIGN_SYSTEM.md
│   ├── 03_FEATURES_SPEC.md
│   ├── 04_IMPLEMENTATION_PLAN.md
│   ├── 05_ORCHESTRATOR.md
│   ├── 06_FILE_STRUCTURE.md         # (este arquivo)
│   ├── 07_DATA_SCHEMAS.md
│   └── STATUS.md                    # Criado pela IA executora
│
├── app/                             # ← TODA a aplicação fica aqui
│   ├── index.html                   # Entry point principal
│   │
│   ├── css/
│   │   ├── reset.css                # CSS reset moderno
│   │   ├── variables.css            # Design tokens (cores, fonts, spacing)
│   │   ├── main.css                 # @import de todos os módulos CSS
│   │   ├── layout.css               # Grid, containers, responsividade
│   │   ├── components.css           # Botões, cards, modais, navbar
│   │   ├── simulator.css            # Estilos do simulador (poços, canvas)
│   │   ├── quiz.css                 # Estilos do quiz
│   │   ├── screens.css              # Estilos por tela (home, myths, etc.)
│   │   └── animations.css           # Keyframes e transições
│   │
│   ├── js/
│   │   ├── main.js                  # Entry point JS — inicializa app
│   │   │
│   │   ├── core/
│   │   │   ├── event-bus.js         # Pub/Sub pattern
│   │   │   ├── state-manager.js     # Estado global centralizado
│   │   │   ├── router.js            # Hash-based screen routing
│   │   │   └── storage.js           # Abstração LocalStorage
│   │   │
│   │   ├── simulation/
│   │   │   ├── particle.js          # Classe Particle (hemácia)
│   │   │   ├── particle-system.js   # Pool e lifecycle de partículas
│   │   │   ├── reagent-well.js      # Classe ReagentWell (poço)
│   │   │   ├── agglutination.js     # Lógica e animação de clustering
│   │   │   ├── simulation-engine.js # Orquestração da simulação
│   │   │   └── animation-loop.js    # requestAnimationFrame wrapper
│   │   │
│   │   ├── quiz/
│   │   │   ├── quiz-engine.js       # Estado e lógica do quiz
│   │   │   ├── quiz-renderer.js     # Renderiza UI do quiz
│   │   │   └── question-loader.js   # Carrega/embaralha questões
│   │   │
│   │   ├── game/
│   │   │   ├── score-manager.js     # Score, streak, multiplicador
│   │   │   ├── achievements.js      # Sistema de conquistas
│   │   │   └── leaderboard.js       # Ranking local
│   │   │
│   │   ├── screens/
│   │   │   ├── home-screen.js       # Tela inicial
│   │   │   ├── simulator-screen.js  # Tela do simulador
│   │   │   ├── transfusion-screen.js# Cenários de transfusão
│   │   │   ├── quiz-screen.js       # Tela do quiz
│   │   │   ├── myths-screen.js      # Mitos vs. Fatos
│   │   │   ├── encyclopedia-screen.js# Enciclopédia
│   │   │   └── teacher-screen.js    # Painel do professor
│   │   │
│   │   ├── ui/
│   │   │   ├── components.js        # Componentes reutilizáveis
│   │   │   ├── animations.js        # Transições programáticas
│   │   │   ├── accessibility.js     # ARIA, focus management
│   │   │   └── theme.js             # Dark/light toggle
│   │   │
│   │   └── utils/
│   │       ├── blood-logic.js       # Regras ABO/Rh, compatibilidade
│   │       ├── random.js            # Helpers de aleatoriedade
│   │       └── dom-helpers.js       # querySelector wrappers
│   │
│   ├── data/
│   │   ├── blood-types.json         # 8 tipos sanguíneos com propriedades
│   │   ├── questions.json           # 30+ perguntas do quiz
│   │   ├── transfusion-rules.json   # Matriz de compatibilidade
│   │   ├── transfusion-scenarios.json# 5-8 cenários clínicos
│   │   ├── myths.json               # 10 mitos/fatos
│   │   └── encyclopedia.json        # 12 verbetes educativos
│   │
│   ├── fonts/
│   │   ├── Inter-Variable.woff2     # Fonte Inter (body)
│   │   └── Outfit-Variable.woff2    # Fonte Outfit (headings)
│   │
│   ├── img/
│   │   ├── favicon.svg              # Favicon
│   │   ├── og-image.png             # Open Graph (1200x630)
│   │   ├── hero-bg.svg              # Background decorativo do hero
│   │   └── icons/
│   │       ├── blood-drop.svg       # Gota de sangue
│   │       ├── red-blood-cell.svg   # Hemácia
│   │       ├── antibody.svg         # Anticorpo (Y-shape)
│   │       ├── microscope.svg       # Microscópio
│   │       ├── quiz.svg             # Ícone quiz
│   │       ├── trophy.svg           # Troféu
│   │       ├── book.svg             # Livro (enciclopédia)
│   │       └── myth-buster.svg      # Lupa (mitos)
│   │
│   └── audio/ (opcional)
│       ├── correct.mp3              # Som de acerto (curto)
│       ├── incorrect.mp3            # Som de erro (curto)
│       ├── achievement.mp3          # Som de conquista
│       └── drop.mp3                 # Som de gota caindo
```

---

## Convenções de nomenclatura

| Elemento | Convenção | Exemplo |
|:---|:---|:---|
| Arquivos JS | kebab-case | `particle-system.js` |
| Classes JS | PascalCase | `class ParticleSystem` |
| Funções JS | camelCase | `function spawnParticles()` |
| Constantes JS | UPPER_SNAKE | `const MAX_PARTICLES = 50` |
| Variáveis CSS | kebab-case com prefixo | `--bg-primary`, `--text-xl` |
| Classes CSS | BEM simplificado | `.reagent-well--anti-a` |
| IDs HTML | kebab-case | `id="quiz-container"` |
| Arquivos JSON | kebab-case | `blood-types.json` |

---

## Regras de organização

1. **Um módulo por arquivo** — cada arquivo JS exporta uma coisa principal
2. **Imports no topo** — todos os `import` agrupados no início
3. **CSS modular** — cada arquivo CSS cobre um aspecto; `main.css` apenas importa
4. **Dados separados do código** — todo conteúdo em `data/*.json`
5. **Assets otimizados** — SVGs com SVGO, fontes em woff2
6. **Nenhum arquivo fora de `app/`** — a pasta `app/` é auto-contida e deployável
