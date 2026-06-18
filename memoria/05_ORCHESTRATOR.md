# 🎛️ Orquestrador de Agentes — ABO Sim v1.0

## 1. Propósito

Este documento define o **protocolo de orquestração** para a IA executora que irá codificar o projeto ABO Sim. O orquestrador determina **qual agente/skill invocar**, **em que momento**, e **como validar** a saída antes de prosseguir.

---

## 2. Mapa de agentes disponíveis

| Agente | Localização | Quando usar |
|:---|:---|:---|
| `frontend-specialist` | `agents/frontend-specialist.md` | UI, CSS, Canvas, animações, responsividade |
| `game-developer` | `agents/game-developer.md` | Particle system, game loop, gamificação |
| `deep-researcher` | `agents/deep-researcher.md` | Conteúdo científico, questões, validação |
| `documentation-writer` | `agents/documentation-writer.md` | Verbetes da enciclopédia, explicações |
| `test-engineer` | `agents/test-engineer.md` | Testes manuais, validação, QA |
| `product-manager` | `agents/product-manager.md` | Decisões de scope, trade-offs |
| `project-planner` | `agents/project-planner.md` | Replanejar se houver atrasos |
| `debugger` | `agents/debugger.md` | Bugs, performance issues |
| `seo-specialist` | `agents/seo-specialist.md` | Meta tags, OG, estrutura semântica |
| `performance-optimizer` | `agents/performance-optimizer.md` | Canvas performance, bundle size |

## 3. Mapa de skills disponíveis

| Skill | Localização | Quando usar |
|:---|:---|:---|
| `frontend-design` | `skills/frontend-design/` | Implementar design system |
| `web-design-guidelines` | `skills/web-design-guidelines/` | Acessibilidade, responsividade |
| `game-development` | `skills/game-development/` | Particle physics, game loop |
| `brainstorming` | `skills/brainstorming/` | Ideação de conteúdo, cenários |
| `app-builder` | `skills/app-builder/` | Scaffolding, feature building |
| `research-synthesis` | `skills/research-synthesis/` | Síntese de conteúdo educativo |
| `source-verification` | `skills/source-verification/` | Validar info científica |
| `data-analysis` | `skills/data-analysis/` | Dashboard do professor |
| `clean-code` | `skills/clean-code/` | Refactoring, code quality |
| `testing-patterns` | `skills/testing-patterns/` | Estratégia de teste |
| `seo-fundamentals` | `skills/seo-fundamentals/` | SEO on-page |
| `responsive-design` | `skills/mindrally-skills/responsive-design/` | Breakpoints, fluid layout |

---

## 4. Protocolo de orquestração

### 4.1 Regra OBRIGATÓRIA antes de cada task

```
ANTES de iniciar qualquer Task do 04_IMPLEMENTATION_PLAN.md:

1. LER o SKILL.md correspondente na pasta da skill indicada
2. LER o arquivo do agente indicado em agents/
3. VERIFICAR o STATUS.md para contexto do que já foi feito
4. VERIFICAR se a task possui dependências não concluídas
5. SÓ ENTÃO começar a codar
```

### 4.2 Regra OBRIGATÓRIA após cada task

```
APÓS concluir cada Task:

1. TESTAR no navegador (abrir index.html, verificar console)
2. VALIDAR contra os critérios de conclusão da task
3. ATUALIZAR o STATUS.md com:
   - Task ID
   - Status: ✅ DONE | ⚠️ PARCIAL | ❌ BLOQUEADO
   - Notas (se houver desvio do plano)
4. SE houver bug → invocar agente `debugger`
5. SE houver dúvida de scope → invocar agente `product-manager`
6. Prosseguir para próxima task
```

---

## 5. Fluxo de decisão do orquestrador

```
┌─────────────────────────────────┐
│       INÍCIO DE NOVA TASK       │
└──────────────┬──────────────────┘
               ▼
┌──────────────────────────────────┐
│ 1. Ler 04_IMPLEMENTATION_PLAN.md │
│    → Identificar próxima task    │
└──────────────┬───────────────────┘
               ▼
┌──────────────────────────────────┐
│ 2. Verificar dependências        │
│    → Todas concluídas?           │
└──────┬───────────────┬───────────┘
       │ SIM           │ NÃO
       ▼               ▼
┌──────────────┐ ┌──────────────────┐
│ 3. Ler skill │ │ BLOQUEAR: anotar │
│    + agente  │ │ em STATUS.md     │
└──────┬───────┘ └──────────────────┘
       ▼
┌──────────────────────────────────┐
│ 4. EXECUTAR a task               │
│    (codar, criar arquivos, etc.) │
└──────────────┬───────────────────┘
               ▼
┌──────────────────────────────────┐
│ 5. VALIDAR                       │
│    → Critérios de conclusão OK?  │
└──────┬───────────────┬───────────┘
       │ SIM           │ NÃO
       ▼               ▼
┌──────────────┐ ┌──────────────────────┐
│ 6. Atualizar │ │ DEBUGAR:             │
│    STATUS.md │ │ → invocar `debugger` │
│    → ✅ DONE │ │ → corrigir           │
└──────┬───────┘ │ → re-validar         │
       │         └──────────┬───────────┘
       ▼                    │
┌──────────────┐            │
│ PRÓXIMA TASK │◄───────────┘
└──────────────┘
```

---

## 6. Tabela de roteamento Task → Agente(s) + Skill(s)

| Task | Agente primário | Skill(s) | Agente secundário |
|:---|:---|:---|:---|
| 0.1 Scaffold | — | `app-builder/scaffolding.md` | — |
| 0.2 Fonts | `frontend-specialist` | — | — |
| 1.1 Home Screen | `frontend-specialist` | `frontend-design`, `web-design-guidelines` | — |
| 1.2 Canvas+Particles | `frontend-specialist` | `game-development` | `game-developer` |
| 1.3 Agglutination | `frontend-specialist` | `game-development` | — |
| 1.4 Sim Orchestration | `frontend-specialist` | — | — |
| 2.1 Banco Questões | `deep-researcher` | `research-synthesis`, `source-verification` | — |
| 2.2 Quiz Engine | `frontend-specialist` | `game-development` | — |
| 2.3 Score/Achievements | `frontend-specialist` | — | `game-developer` |
| 2.4 Transfusion | `frontend-specialist` | — | `deep-researcher` |
| 3.1 Mitos vs Fatos | `deep-researcher` | `source-verification` | `frontend-specialist` |
| 3.2 Enciclopédia | `deep-researcher` | `research-synthesis` | `documentation-writer` |
| 3.3 Painel Professor | `frontend-specialist` | `data-analysis` | — |
| 3.4 Assets visuais | `frontend-specialist` | — | — |
| 4.1 Acessibilidade | `frontend-specialist` | `web-design-guidelines` | — |
| 4.2 Responsividade | `frontend-specialist` | `responsive-design` | — |
| 4.3 Polish | `frontend-specialist` | `frontend-design` | — |
| 5.1 Testing | `test-engineer` | `testing-patterns` | `debugger` |
| 5.2 Bundle | — | — | `performance-optimizer` |

---

## 7. Protocolo de fallback

### 7.1 Se uma task falhar após 3 tentativas
```
1. Marcar como ⚠️ PARCIAL no STATUS.md
2. Documentar o que funciona e o que não funciona
3. Invocar `debugger` com contexto completo
4. Se debugger falhar → invocar `product-manager` para decisão de scope
5. Possível decisão: simplificar feature, adiar para v1.1, remover do MVP
```

### 7.2 Se performance do Canvas estiver ruim
```
1. Invocar `performance-optimizer`
2. Medidas possíveis:
   - Reduzir contagem de partículas (30 → 20 por poço)
   - Usar OffscreenCanvas (se suportado)
   - Reduzir fidelidade visual em mobile
   - Desabilitar Brownian motion em dispositivos lentos
```

### 7.3 Se conteúdo científico gerar dúvida
```
1. Invocar `deep-researcher` com skill `source-verification`
2. Buscar referências primárias (PubMed, livros-texto de hematologia)
3. Em caso de controvérsia → apresentar ambos os lados no app
4. NUNCA publicar informação não verificada
```

---

## 8. Template do STATUS.md

A IA executora deve criar e manter o arquivo `memoria/STATUS.md` com o seguinte formato:

```markdown
# 📊 Status do Projeto — ABO Sim

**Última atualização:** [data/hora]
**Fase atual:** [0-5]
**Progresso geral:** [X/18 tasks concluídas]

## Tasks

| Task | Status | Data | Notas |
|:---|:---|:---|:---|
| 0.1 Scaffold | ⬜ TODO | — | — |
| 0.2 Fonts | ⬜ TODO | — | — |
| 1.1 Home Screen | ⬜ TODO | — | — |
| ... | ... | ... | ... |

## Blockers

| Blocker | Task afetada | Ação necessária |
|:---|:---|:---|
| — | — | — |

## Decisões tomadas

| Data | Decisão | Motivo |
|:---|:---|:---|
| — | — | — |
```

---

## 9. Instruções finais para a IA executora

> [!IMPORTANT]
> ### Checklist de contexto OBRIGATÓRIO antes de iniciar
> 
> Antes de escrever UMA LINHA de código, a IA executora DEVE ler, nesta ordem:
> 
> 1. `memoria/00_OVERVIEW.md` — Entender o propósito e restrições
> 2. `memoria/01_ARCHITECTURE.md` — Entender a arquitetura e padrões
> 3. `memoria/02_DESIGN_SYSTEM.md` — Entender cores, tipografia, componentes
> 4. `memoria/03_FEATURES_SPEC.md` — Entender cada feature em detalhe
> 5. `memoria/04_IMPLEMENTATION_PLAN.md` — Entender a ordem das tasks
> 6. `memoria/05_ORCHESTRATOR.md` (este arquivo) — Entender o protocolo
> 7. `memoria/06_FILE_STRUCTURE.md` — Entender onde colocar cada arquivo
> 8. `memoria/07_DATA_SCHEMAS.md` — Entender a estrutura dos dados JSON
> 9. `PROBLEMAS.txt` (raiz do projeto) — Contexto original do problema
> 
> **Se algum documento estiver ausente ou incompleto, PARAR e reportar.**
