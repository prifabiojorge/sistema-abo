# 📝 CHANGELOG v1.1.0 — Modo Diagnóstico Livre (Modo Inverso)

**Data da Implementação:** 27 de Abril de 2026
**Responsável:** AI Agent / Prof. Fábio Fabuloso
**Pasta de Desenvolvimento:** `app-v1-1/`

## Resumo Executivo
Atendendo à demanda de ampliar a capacidade pedagógica do simulador, a versão 1.1.0 introduz o **Modo Diagnóstico Livre** (ou Modo Inverso). Anteriormente, o usuário selecionava o tipo sanguíneo e o sistema exibia a reação. Agora, a dinâmica inverte-se: o aluno pode "clicar" diretamente nos poços para simular reações visuais de aglutinação e solicitar ao sistema que identifique qual tipo sanguíneo produz aquele padrão.

## Modificações Arquiteturais

### 1. Núcleo Lógico (`blood-logic.js`)
- **Implementado Busca Reversa:** Adicionada a função `getBloodTypeByReactions(antiA, antiB, antiD)`.
- **Funcionamento:** Recebe uma trinca de valores booleanos e varre o banco de dados interno `BLOOD_TYPES` para encontrar a correspondência exata dos antígenos, retornando o objeto correspondente (ou nulo em casos de padronagens patológicas/inválidas).

### 2. Motor Físico e Visual (`reagent-well.js`)
- **Estados Independentes:** Poços agora mantêm um estado interno `manualAgglutinated`.
- **Toggle de Aglutinação:** Adicionado o método `toggleManualAgglutination()`. Diferente da simulação padrão que envolve *delay* e pingar sangue, este método permite forçar a separação ou atração das hemácias (partículas) instantaneamente, reiniciando ou cancelando as forças físicas do `AgglutinationEngine` com base em cliques.

### 3. Gerenciamento de Estado (`simulation-engine.js` & `simulator-screen.js`)
- **Multimodo Integrado:** O orquestrador agora transiciona entre `discovery` (padrão) e `inverse`.
- **Injeção Dinâmica:** Quando no modo inverso, a interação de pingar tubo é desabilitada. Os cliques no `canvas` do poço são capturados para disparar o toggle físico local.
- **Botão Identificar:** Um novo fluxo de avaliação final consolida o array de booleanos dos 3 poços e evoca o Cartão de Resultados com a função reversa.

### 4. Interface (UI/UX) (`index.html` & `main.css`)
- **Mode Switcher:** Inclusão de _radio buttons_ para troca suave de modo.
- **Feedback Tátil:** Adicionada a classe `.well-clickable` que induz _cursor pointer_, leve _scale_ (transform) e anéis de brilho (box-shadow) ao passar o mouse por cima dos poços no modo inverso.

## Solução de Incidentes durante o Desenvolvimento

- **Falso "Negativo" Global:** Corrigido um problema legado onde a avaliação dos resultados disparava antes do término da animação. O validador não lê mais a "física", mas cruza nativamente com a tabela da verdade.
- **Erro de Bundle / Mojibake:** A reconstrução do `bundle.js` pela automação PowerShell gerou o cabeçalho "UTF-8 BOM", causando _Syntax Error_ no browser. Script corrigido para ler e salvar estritamente em UTF-8 SEM BOM e otimizada a limpeza de diretivas `import` / `export` com regex multiline em `build-bundle.ps1`.

---

> [!NOTE]
> A pasta `app-v1-1` agora contém o artefato estável. Recomenda-se realizar o transplante dessas lógicas para a *codebase* principal de compilação futuramente, e empacotar uma nova versão `.exe` quando houver finalização absoluta da fase de manutenções.
