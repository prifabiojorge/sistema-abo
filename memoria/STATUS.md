# 📊 Status do Projeto — ABO Sim

**Última atualização:** 2026-07-03T22:59:26-03:00  
**Fase atual:** v2.6.0 publicada — QR Code + GitHub Pages para Chromebook  
**Progresso v2.6.0:** 6/6 tasks concluídas no ambiente automatizável  
**Entrega adicional:** Versão 2.6.0 implementada em `app-v-2-6-0/`, publicada em `docs/` e servida por GitHub Pages — 2026-07-03

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
| 8.1 Auditoria visual v1.2 | ✅ DONE | 2026-06-19 | Auditoria documental registrada em `memoria/12_AUDIT_v1.2.md` com 17 desvios priorizados |
| 8.2 Sistema de Toasts | ✅ DONE | 2026-06-19 | `ToastManager`, container ARIA, variantes, FIFO e integração com EventBus/achievements |
| 8.3 Empty states | ✅ DONE | 2026-06-19 | `EmptyState` aplicado em quiz, transfusão, mitos, enciclopédia e painel professor |
| 8.4 Skeleton screens | ✅ DONE | 2026-06-19 | `SkeletonManager` aplicado em boot/quiz/enciclopédia e integrado ao lazy init |
| 8.5 Microinterações | ✅ DONE | 2026-06-19 | Transições de rota, result reveal, well shake, achievement unlock e shimmer |
| 8.6 Atalhos de teclado | ✅ DONE | 2026-06-19 | `KeyboardManager` com atalhos 1-8, tema, settings, Esc e modal acessível |
| 8.7 Configurações A11y ampliadas | ✅ DONE | 2026-06-19 | Tema, fonte, alto contraste plus, movimento reduzido, áudio e dados |
| 8.8 Daltonismo + texturas | ✅ DONE | 2026-06-19 | Paletas protanopia/deuteranopia/tritanopia via `data-colorblind` |
| 8.9 Tour guiado | ✅ DONE | 2026-06-19 | `TourManager` de onboarding com persistência `abo-sim-onboarded` |
| 8.10 Settings centralizado | ✅ DONE | 2026-06-19 | Tela `#settings`, botão no navbar e reset granular com modal de confirmação |
| 13.1 Lazy init de telas | ✅ DONE | 2026-06-19 | `ScreenManager` inicializa telas pesadas só na primeira visita, mantendo bundle único |
| 9.1 Busca global | ✅ DONE | 2026-06-21 | `SearchPalette` via Ctrl/Cmd+K indexa telas, enciclopédia, mitos, cenários, questões, glossário, trilhas e casos |
| 9.2 Histórico de tipagens | ✅ DONE | 2026-06-21 | Tela `#history` com timeline, filtros, revisita de tipo e limpeza confirmada por `ConfirmDialog` |
| 9.3 Comparação lado-a-lado | ✅ DONE | 2026-06-21 | Modo `Comparar tipos` no simulador mostra reações Anti-A/Anti-B/Anti-D e tabela comparativa |
| 9.4 Glossário interativo | ✅ DONE | 2026-06-21 | `GlossaryManager` adiciona tooltips acessíveis para termos científicos nas telas ativas |
| 9.5 Trilha de aprendizado guiada | ✅ DONE | 2026-06-21 | Tela `#trails` com trilhas Iniciante, Intermediária e Avançada calculadas a partir do progresso local |
| 9.6 Casos clínicos CBL | ✅ DONE | 2026-06-21 | Tela `#cases` com 5 casos clínicos, feedback científico, persistência e pontuação |
| 9.7 Favoritos na enciclopédia | ✅ DONE | 2026-06-21 | Bookmarks persistidos em `abo-sim-bookmarks` com filtro “Ver apenas favoritos” |
| 9.8 Dashboard do aluno | ✅ DONE | 2026-06-21 | Tela `#dashboard` consolida tipagens, quiz, casos, favoritos, trilhas, sugestões e atividade recente |
| 9.9 Modo apresentação | ✅ DONE | 2026-06-21 | `PresentationMode` com atalho `P`, navegação por setas e bloqueio por autenticação docente |
| 10.1 Editor de questões | ✅ DONE | 2026-06-21 | Painel Professor permite criar, validar, importar/exportar e misturar questões customizadas no quiz |
| 10.2 Editor de cenários | ✅ DONE | 2026-06-21 | Painel Professor cria cenários de transfusão com validação ABO/Rh e import/export JSON |
| 10.3 Gestão de turmas | ✅ DONE | 2026-06-21 | Criação de turmas locais com código de 6 caracteres, ativação e importação/exportação de aluno |
| 10.4 Exportação CSV/JSON | ✅ DONE | 2026-06-21 | Exportação de turma em CSV UTF-8 com BOM, JSON de turma e JSON de progresso local |
| 10.5 Reset granular | ✅ DONE | 2026-06-21 | Reset por checkboxes no Painel Professor e Settings, com confirmação antes de apagar dados |
| 14.1 README/manual v2.1.0 | ✅ DONE | 2026-07-02 | `README.md` criado em `app-v-2-1-0/` com início rápido, manual do aluno, manual do professor, atalhos, privacidade e problemas comuns |
| 14.2 Atalho de dois cliques | ✅ DONE | 2026-07-02 | `ABRIR-ABO-Sim-v2.1.0.html` criado como lançador portátil; `.cmd` alternativo para Windows |
| 14.3 Pacote v2.1.0 | ✅ DONE | 2026-07-02 | Versão atualizada no HTML, logs e service worker; bundle validado; ZIP `ABO-Sim-v2.1.0.zip` gerado |
| 15.1 Renomeação v2.2.0 | ✅ DONE | 2026-07-02 | App renomeado para `ABO Pai d'égua` em título, navbar, rodapé, manifest, README, atalhos e imagem social |
| 15.2 Chatbot Gemini | ✅ DONE | 2026-07-02 | Tela `#chatbot`/Assistente ABO criada com escopo educativo, fallback local, modelo configurável e chamada REST para Gemini Interactions API |
| 15.3 Segurança da chave | ✅ DONE | 2026-07-02 | Chave Google AI Studio não foi gravada em arquivo; usuário salva localmente no navegador via `abo-sim-gemini-api-key`; varredura por `AIza` sem achados |
| 15.4 Validação v2.2.0 | ✅ DONE | 2026-07-02 | Build, `node --check`, varreduras e smoke test em Chrome headless cobrindo atalho, nome novo e chatbot sem chave |
| 16.1 Assistente modo local primeiro | ✅ DONE | 2026-07-02 | `#chatbot` agora abre pronto para perguntar; configuração da IA fica recolhida e opcional |
| 16.2 Conexão automática Gemini | ✅ DONE | 2026-07-02 | Botão “Conectar e escolher modelo” lista/testa modelos e salva apenas conexão válida |
| 16.3 Fallback e erro amigável | ✅ DONE | 2026-07-02 | Falhas como `denied access` viram orientação em português; app responde pelo modo local e não salva chave inválida |
| 16.4 Validação v2.3.0 | ✅ DONE | 2026-07-02 | Build, `node --check`, varredura de segredos, teste local sem chave e teste simulado de falha Gemini passaram |
| 17.1 Base v2.4.0 | ✅ DONE | 2026-07-02 | `app-v-2-4-0/` criada a partir da v2.3.0, com atalhos `ABRIR-ABO-Pai-degua-v2.4.0.html/.cmd` e metadados v2.4.0 |
| 17.2 Gemma 4 26B | ✅ DONE | 2026-07-02 | Assistente passa a preferir `gemma-4-26b-a4b-it` via Gemini API `generateContent`, com `gemma-4-31b-it` e modelos Flash como fallback |
| 17.3 Segurança e UX IA | ✅ DONE | 2026-07-02 | Chave segue fora dos arquivos; app usa storage local apenas após conexão válida, limita escopo, limpa rascunhos/pensamento visível e mantém modo local |
| 17.4 Validação v2.4.0 | ✅ DONE | 2026-07-02 | Build, `node --check`, varredura de segredos, Playwright simulado para 26B e fallback 500 passaram; API real listou 26B, mas `generateContent` do 26B retornou 500 no momento do teste |
| 18.1 Chave API embutida | ✅ DONE | 2026-07-02 | Chave embutida via concatenação de strings no código; UI de configuração removida; auto-conexão transparente |
| 18.2 Chatbot removido | ✅ DONE | 2026-07-03 | Assistente ABO (chatbot) completamente removido do build, index.html, navbar, search-palette e keyboard shortcuts |
| 18.3 Hemácia Runner adicionado | ✅ DONE | 2026-07-03 | Mini-game retrô educativo canvas-based: endless runner onde o jogador é uma hemácia desviando de anticorpos incompatíveis, com explicação educativa no game-over |
| 18.4 Validação v2.5.0 | ✅ DONE | 2026-07-03 | Build, `node --check`, varredura de referências chatbot: 0 resultados nos arquivos ativos |
| 18.5 Correção do mini-game | ✅ DONE | 2026-07-03 | Corrigida a inicialização do loop `requestAnimationFrame` no primeiro acesso a `#minigame`; validação via `file://` e HTTP confirmou canvas desenhado e início com Espaço |
| 18.6 Dificuldade progressiva | ✅ DONE | 2026-07-03 | Hemácia Runner agora acelera mais, reduz intervalos de spawn, adiciona chance de duplas de anticorpos após avanço e preserva bônus no placar |
| 18.7 Curva hard de dificuldade | ✅ DONE | 2026-07-03 | Velocidade máxima elevada para 24, aceleração maior, intervalo final ~30 frames e chance de duplas/trios de anticorpos |
| 18.8 Sons arcade do Hemácia Runner | ✅ DONE | 2026-07-03 | Paleta procedural com feedback para início, pulo, coleta, passagem segura, combo, perigo, avanço de dificuldade e game over; inspirada em lógica de arcade sem mecânica de aposta |
| 18.9 Balanceamento O- e volume | ✅ DONE | 2026-07-03 | O- removido do sorteio do Hemácia Runner para impedir partida sem risco; ganho mestre do áudio elevado para 0.65 e sons do runner reforçados |
| 19.1 Base segura v2.6.0 | ✅ DONE | 2026-07-03 | `app-v-2-6-0/` criada a partir da v2.5.0; `chatbot-screen.js` removido antes de montar `docs/` |
| 19.2 QR Code Chromebook | ✅ DONE | 2026-07-03 | Gerador QR local em `js/ui/qr-code.js`, `img/qr-code.svg` e `qr-print.html` A4 com dois QR Codes por folha |
| 19.3 Integração Professor/PWA | ✅ DONE | 2026-07-03 | Aba `QR Code`, atalho `Q`, entrada na busca, modal de projeção, prompt PWA e manifest com `id`/`scope` |
| 19.4 `docs/` GitHub Pages | ✅ DONE | 2026-07-03 | `docs/` montada apenas com arquivos públicos: `index`, `manifest`, `sw`, `qr-print`, `js/bundle.js`, `css/`, `fonts/`, `img/` |
| 19.5 Validação local v2.6.0 | ✅ DONE | 2026-07-03 | Build, `node --check`, varredura de segredos em `docs/` e decodificação OpenCV do QR Code passaram |
| 19.6 Deploy GitHub Pages | ✅ DONE | 2026-07-03 | Commit `1d0ab9a` publicado em `main`; Pages configurado para `/docs`, status `built`, URL pública HTTP 200 |
| 19.7 Offline PWA público | ✅ DONE | 2026-07-03 | Chrome headless validou service worker `abo-pai-degua-v2.6.0` com 21 itens cacheados e recarregamento offline da URL pública |
| 19.8 Roteiro de validação Chromebook | ✅ DONE | 2026-07-03 | `memoria/22_VALIDACAO_CHROMEBOOK_MANUAL.md` criado para registrar o teste físico de câmera/QR em Chromebook real |

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
| 2026-06-19 | Retomada da execução interrompida | `app-v-1-3-0/` assumido como linha de trabalho local não rastreada e validado antes de avançar |
| 2026-06-19 | Settings inicializa no boot | Exceção consciente ao lazy init porque preferências globais precisam ser aplicadas antes da navegação |
| 2026-06-19 | Service Worker só registra em HTTP/HTTPS | Evita warning em `file://`, preservando execução local do bundle |
| 2026-06-21 | v2.0.0 como marco combinado | Fases 2 e 3 foram entregues juntas em `app-v-2-0-0/` para preservar compatibilidade entre aprendizagem e painel docente |
| 2026-06-21 | Persistência segue em LocalStorage namespaced | Mantém o princípio zero backend e permite exportação/importação manual para uso em turma |
| 2026-06-21 | CSV antes de XLSX | Exportação Excel foi atendida via CSV com BOM, abrível no Excel/Sheets sem incluir biblioteca pesada no bundle |
| 2026-07-02 | Lançador HTML como atalho recomendado | É portátil, não executa comando de sistema e funciona mesmo se a pasta for movida |
| 2026-07-02 | `.cmd` mantido como alternativa Windows | Ajuda usuários acostumados com “abrir app”, mas o README recomenda o HTML por segurança e portabilidade |
| 2026-07-02 | Chave Gemini fora do código | Como o projeto tem remote GitHub, a chave deve ser inserida pelo usuário no app e permanecer apenas no navegador local |
| 2026-07-02 | Chatbot restrito por escopo | O prompt de sistema limita respostas a ABO/Rh, imunohematologia básica e uso do app, com aviso para não substituir atendimento/protocolo clínico |
| 2026-07-02 | GitHub não atualizado automaticamente | Remote `origin` existe (`prifabiojorge/sistema-abo`), mas não foi feito commit/push sem comando explícito do usuário |
| 2026-07-02 | UX do chatbot prioriza uso imediato | O aluno pode perguntar sem configurar IA; a conexão Gemini é opcional e automatizada para reduzir atrito |
| 2026-07-02 | Chave inválida não permanece salva | Se o teste automático falhar, a chave é removida e o app fica em modo local para evitar repetição de erro |
| 2026-07-02 | Gemma 4 26B como alvo padrão | A v2.4.0 usa `gemma-4-26b-a4b-it` primeiro porque é o modelo menor solicitado; o app mantém fallback para não bloquear aula se a API retornar 500 |
| 2026-07-02 | `generateContent` para Gemma | A chamada Gemma usa `models/{model}:generateContent`, pois os testes anteriores indicaram que Gemma 4 funciona nesse contrato e não no fluxo antigo do app baseado em Interactions |
| 2026-07-02 | Resposta final sem pensamento visível | O prompt e o pós-processamento removem canais/rascunhos antes de exibir ao aluno, atendendo à orientação de esconder raciocínio interno em aplicações de usuário final |
| 2026-07-02 | Chave API embutida no código | Decisão do professor: chave inserida diretamente via concatenação de strings para eliminar fricção de configuração; risco aceito para ambiente local (laptop do professor) |
| 2026-07-03 | Chatbot substituído por mini-game | Latência da API Gemini era insatisfatória para uso em sala; Hemácia Runner mantém foco educativo sem depender de serviços externos |
| 2026-07-03 | Constantes MG_ no minigame | `BLOOD_TYPES` → `MG_BLOOD_TYPES`, `GAME_CONFIG` → `MG_CONFIG` para evitar conflito de namespace com `blood-logic.js` no bundle concatenado |
| 2026-07-03 | Entrada explícita do Hemácia Runner | `ScreenManager.enter` agora chama `minigame.enter()`, garantindo renderização e loop ativo no primeiro acesso e em navegação pela home |
| 2026-07-03 | Curva de dificuldade do Hemácia Runner | Dificuldade 1–6 altera velocidade, intervalo de obstáculos e chance de sequência para manter o jogo mais desafiador conforme o aluno avança, sem punir o início |
| 2026-07-03 | Curva hard solicitada | Após teste do professor, a progressão foi intensificada com muito mais velocidade, menos espaço entre obstáculos e sequências de até 3 anticorpos |
| 2026-07-03 | Sons arcade sem manipulação de aposta | Estratégias sonoras foram aproveitadas como feedback de ação, recompensa pedagógica e tensão clara, sem near-miss, compra, aposta ou reforço predatório |
| 2026-07-03 | O- fora do Hemácia Runner | Como O- não possui antígenos A/B/D, nenhum anticorpo do mini-game seria perigoso; remover do sorteio preserva desafio e evita partida infinita |
| 2026-07-03 | Volume de áudio reforçado | Ganho mestre passou de 0.25 para 0.65 e os eventos sonoros do runner receberam ganhos maiores para uso em notebook/sala |
| 2026-07-03 | GitHub Pages via `docs/` | v2.6.0 publica somente assets estáticos mínimos, evitando expor fontes antigas, build scripts e qualquer arquivo de chatbot |
| 2026-07-03 | QR local sem serviço externo | QR Code é gerado/servido localmente no app e codifica a URL pública do GitHub Pages, preservando o uso zero backend |
