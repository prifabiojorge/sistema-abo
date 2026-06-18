# 🎨 Refatoração UX/UI — Integração de Skills (Fase 2)

Este documento detalha o plano de ação estratégico para substituir as definições visuais ad-hoc descritas no arquivo `02_DESIGN_SYSTEM.md` por uma **arquitetura de tokens semânticos e Atomic Design** de alto nível, oriundos do repositório `ux-ui-agent-skills`.

## 1. Visão Geral da Mudança
O objetivo desta refatoração é elevar a maturidade da *codebase* CSS do projeto ABO Sim, tornando-a estritamente escalável, ultra-acessível e guiada por Design Tokens (Formato DTCG). A lógica funcional (Orquestrador, EventBus, StateManager) permanecerá intacta, mas a apresentação (UI) e o controle de estados visuais sofrerão um upgrade arquitetural.

---

## 2. Padrões Adotados (Agent Skills)

### 2.1. Arquitetura de Tokens (3 Camadas)
Todo valor numérico ou cor absoluta no CSS será refatorado para a hierarquia:
1. **Primitives:** Cores/Medidas base (ex: `--blue-600: #2563EB`).
2. **Semantics:** Valores com contexto lógico (ex: `--action-primary: var(--blue-600)`).
3. **Components:** Valores isolados (ex: `--btn-bg: var(--action-primary)`).

*Nota técnica: Como o simulador roda em Vanilla (sem compiladores como Tailwind), implementaremos esses tokens usando Variáveis Nativas (CSS Custom Properties) no arquivo global de estilos.*

### 2.2. Atomic Design e Componentização
- **Atoms:** Refatoração de `.btn`, `.input`, `.badge` para suportarem no mínimo 6 estados canônicos (Default, Hover, Focus, Active, Disabled, Loading).
- **Molecules & Organisms:** Ajuste dos formulários (Painel do Professor) e dos layouts de grade.

### 2.3. Acessibilidade Aprimorada (WCAG 2.2 AA)
- Substituição de contornos (`outline`) nativos confusos por *Focus Rings* padronizados e semânticos (`--shadow-focus-ring`).
- Injeção sistemática de atributos ARIA (`aria-live`, `aria-pressed`) controlados reativamente pelo `EventBus` do JS.

---

## 3. Roteiro de Execução

| Etapa | Ação Técnica | Status |
|:---|:---|:---|
| **Auditoria Visual** | Analisar discrepâncias entre o app-v1-1 atual e os checks do `ux-ui-agent-skills` | Pendente |
| **Tokens CSS** | Transcrever `colors.json`, `spacing.json` e `typography.json` para `:root` em `tokens.css` ou `main.css` | Pendente |
| **Refatoração Global** | Trocar todas as variáveis antigas no CSS pelos novos tokens semânticos | Pendente |
| **Componentes Atômicos** | Refazer os estilos de Botões, Inputs, Cards e Tipografia | Pendente |
| **Orquestração de UI** | Ajustar o JS para que ele NÃO injete estilos inline, mas APENAS alterne classes de estado (`.is-active`, `.has-error`) | Pendente |
| **Testes (QA)** | Validar acessibilidade (tabulação) e design nas telas de Simulação, Quiz e Enciclopédia | Pendente |
| **Build Final** | Atualizar o script de build para unificar o CSS e gerar a v1.2 do app | Pendente |

---

> [!IMPORTANT]
> Este plano entrará em execução imediata após o aval do usuário. Os artefatos do diretório `app-v1-1` atuarão como ambiente de laboratório para a transição.
