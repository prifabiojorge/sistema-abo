# 📊 Status do Projeto — ABO Sim

**Última atualização:** 2026-04-24T13:00:00-03:00  
**Fase atual:** 1 (Manutenção e Features Secundárias)  
**Progresso geral:** 21/21 tasks concluídas
**Entrega adicional:** Versão 1.1.0 (Modo Inverso) implementada e validada — 2026-04-27

---

## Tasks

| Task | Status | Data | Notas |
|:---|:---|:---|:---|
| 0.1 Scaffold | ✅ DONE | 2026-04-24 | Estrutura completa criada; testes de core (EventBus, StateManager, Storage, Router) passaram |
| 0.2 Fonts/Assets base | ✅ DONE | 2026-04-24 | Inter (48KB) e Outfit (32KB) baixados e referenciados via @font-face
| 1.1 Home Screen | ✅ DONE | 2026-04-24 | Hero, feature cards, navbar, theme/a11y toggles, responsivo, score badge |
| 1.2 Canvas + Particles | ✅ DONE | 2026-04-24 | AnimationLoop, Particle, ParticleSystem, ReagentWell, random.js — testados
| 1.3 Agglutination Logic | ✅ DONE | 2026-04-24 | blood-logic.js (24/24 testes OK), AgglutinationEngine com clustering por forças
| 1.4 Sim Orchestration | ✅ DONE | 2026-04-24 | SimulationEngine, SimulatorScreen, 3 modos, resultado com genótipos/frequência
| 2.1 Banco de Questões | ✅ DONE | 2026-04-24 | 30 questões validadas (8 genética, 6 antígenos, 8 transfusão, 4 Rh/DHRN, 4 biossegurança)
| 2.2 Quiz Engine | ✅ DONE | 2026-04-24 | QuestionLoader, QuizEngine (streak/multiplicador), QuizRenderer, QuizScreen — 30 questões funcionais
| 2.3 Score & Achievements | ✅ DONE | 2026-04-24 | ScoreManager, Achievements (8 conquistas), Leaderboard — testados
| 2.4 Cenários Transfusão | ✅ DONE | 2026-04-24 | 7 cenários clínicos, seleção múltipla, feedback com explicação, +15pts/cenário
| 3.1 Mitos vs. Fatos | ✅ DONE | 2026-04-24 | 10 cards mitos/fatos com referências, progresso persistido, integração com achievements
| 3.2 Enciclopédia | ✅ DONE | 2026-04-24 | 12 verbetes, busca/filtro, navegação lateral, marcação de visitados, integração com achievements
| 3.3 Painel Professor | ✅ DONE | 2026-04-24 | Autenticação PIN, dashboard com estatísticas, gráficos CSS, reset de turma
| 3.4 Assets visuais | ✅ DONE | 2026-04-24 | Favicon SVG, OG image SVG, meta tags sociais
| 4.1 Acessibilidade | ✅ DONE | 2026-04-24 | Skip links, ARIA labels, focus visible, reduced motion, alto contraste
| 4.2 Responsividade final | ✅ DONE | 2026-04-24 | Mobile-first, breakpoints 320-1440px, touch targets ≥44px, landscape support
| 4.3 Micro-animações & Polish | ✅ DONE | 2026-04-24 | Smooth scroll, skeleton loading, hover effects, fade transitions
| 5.1 Testing & QA | ✅ DONE | 2026-04-24 | 14/14 testes passaram (100%): blood logic, quiz, score, achievements, JSON valid, offline check
| 5.2 Bundle final v1.0 | ✅ DONE | 2026-04-24 | App empacotado: 341KB, 47 arquivos, ZIP gerado (ABO-Sim-v1.0.0.zip)
| 6.1 Lógica Reversa | ✅ DONE | 2026-04-27 | getBloodTypeByReactions implementado em blood-logic.js
| 6.2 Motor Visual Inverso | ✅ DONE | 2026-04-27 | toggleManualAgglutination adicionado ao reagent-well.js
| 6.3 Interface Modo Inverso | ✅ DONE | 2026-04-27 | UI de toggle de modo, botão de identificação e refatoração do SimulatorScreen implementados no bundle.js v1.1.0
| 7.1 UX/UI: Tokens CSS | ✅ DONE | 2026-04-27 | Arquitetura DTCG de 3 camadas implementada no tokens.css
| 7.2 UX/UI: Componentização | ✅ DONE | 2026-04-27 | Refatoração completa de botões, inputs e cards em components.css
| 7.3 UX/UI: Orquestração Visual| ✅ DONE | 2026-04-27 | Estilos inline removidos e substituídos por toggle de classes semânticas no JS
| 7.4 UX/UI: Acessibilidade | ✅ DONE | 2026-04-27 | Focus rings, ARIA roles e conformidade WCAG 2.2 AA validados

---

## Blockers

| Blocker | Task afetada | Ação necessária |
|:---|:---|:---|
| — | — | — |

---

## Decisões tomadas

| Data | Decisão | Motivo |
|:---|:---|:---|
| 2026-04-24 | Planejamento completo criado (00-07 + STATUS) | Requisito do usuário |
| 2026-04-24 | Stack: HTML+CSS+JS puro, zero framework | Funcionar offline como arquivo estático |
| 2026-04-24 | Canvas 2D para partículas (não SVG) | Performance com centenas de partículas |
| 2026-04-24 | Event-Driven Architecture | Desacoplamento entre módulos |
| 2026-04-24 | Bundle único JS (sem ES modules) | Corrigir funcionamento via file:// (CORS bloqueava imports) |
| 2026-04-24 | Dados inline no bundle | Eliminar fetch() — JSONs incorporados no JS para funcionar offline file:// |
| 2026-04-24 | Fix Quiz: verificações defensivas | Adicionado check para array vazio/undefined em QuestionLoader, QuizEngine e QuizRenderer |
| 2026-04-24 | Fix Quiz: acúmulo de feedbacks | Remover feedback anterior antes de adicionar novo (evita pilha de "Incorreto") |
| 2026-04-24 | Versão Portátil (.exe) | Electron + electron-builder: app roda com 2 cliques, sem instalação, sem navegador |
| 2026-04-24 | Versão PWA (Chromebook) | Manifest + Service Worker + ícones: instala nativamente no Chrome OS |
| 2026-04-24 | Remover timer do quiz | Tempo de resposta removido a pedido do usuário |
| 2026-04-24 | Botão Reset no quiz | Permite resetar o quiz sem sair da tela |
| 2026-04-24 | Botão Avançar no quiz | Remove avanço automático; usuário clica para ir à próxima pergunta |
| 2026-04-24 | Remover "Funciona offline" do rodapé | Texto removido a pedido do usuário |
| 2026-04-24 | Sons viciantes (Web Audio API) | 8 sons proceduralmente gerados: click, hover, drop, agglutinate, correct, wrong, achievement, complete |
| 2026-04-24 | Créditos no rodapé | Prof. Fábio Fabuloso — CISEB Celso Rodrigues 2026 |
| 2026-04-27 | Criação da v1.1.0 com Modo Inverso | Demanda do usuário para ampliar cenários pedagógicos, permitindo que o aluno deduza o tipo a partir da reação |
| 2026-04-27 | Resolução de Encoding no Bundle | Leitura e escrita estrita em UTF-8 no build-bundle.ps1 para evitar Mojibake (corrupção de acentos/emojis) |
