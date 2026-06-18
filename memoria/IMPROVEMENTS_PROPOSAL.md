# 🚀 Proposta de Melhorias — ABO Sim

## 1. Resumo Executivo
O **ABO Sim** atingiu um estado de maturidade técnica e visual excepcional na versão 1.2.0, com a implementação de um Design System robusto (Tokens DTCG), conformidade WCAG 2.2 AA e a introdução do Modo Diagnóstico Livre (v1.1.0). Atualmente, o app cumpre todos os requisitos do MVP e as metas de alta fidelidade.

Para evoluir de um "Simulador de Tipagem" para uma "Plataforma de Aprendizagem em Imunohematologia", propõe-se a expansão do conteúdo pedagógico, a gamificação avançada e a abertura do sistema para customização docente.

---

## 2. Análise de Estado Atual
- **Pontos Fortes**:
    - **Arquitetura**: Event-Driven, desacoplada e performática (Canvas 2D).
    - **UI/UX**: Consistente, acessível e moderna.
    - **Distribuição**: Versatilidade total (Web, PWA, Electron .exe).
    - **Pedagogia**: Cobre a base do sistema ABO/Rh de forma interativa.

- **Lacunas Identificadas**:
    - **Profundidade Científica**: Limitado ao sistema ABO/Rh básico.
    - **Interatividade Docente**: O Painel do Professor é apenas consultivo (leitura de dados).
    - **Fluxo de Aprendizado**: As features (Simulador $\rightarrow$ Quiz $\rightarrow$ Enciclopédia) são independentes, sem um "fio condutor" ou trilha de aprendizado.

---

## 3. Propostas de Melhoria

### 🟢 Nível 1: Expansão Pedagógica (Alto Impacto)
*Objetivo: Aumentar a profundidade científica e a utilidade clínica.*

1. **Módulos de Tipagem Avançada**:
    - **Fenótipo Bombaim (h/h)**: Adicionar um cenário onde o sangue parece ser "O" no teste direto, mas a prova reversa revela a ausência de antígeno H.
    - **Subgrupos de A (A1, A2)**: Simular reações mais fracas ou discordantes para ensinar a complexidade laboratorial.
    - **Sistema Kell e Duffy**: Introduzir novos reagentes para expandir o conhecimento além do ABO/Rh.
2. **Jornada do Paciente (Case Studies)**:
    - Substituir cenários isolados por "Casos Clínicos". Ex: *Paciente chega com sintomas X $\rightarrow$ Usuário realiza tipagem $\rightarrow$ Usuário decide a transfusão $\rightarrow$ Sistema mostra a evolução do paciente.*
3. **Enciclopédia Interativa**:
    - Substituir textos longos por diagramas SVG interativos que mostram a ligação antígeno-anticorpo em nível molecular.

### 🟡 Nível 2: Gamificação e Engajamento (Médio Impacto)
*Objetivo: Aumentar a retenção e a motivação do aluno.*

1. **Trilhas de Conquistas (Learning Paths)**:
    - Criar "Missões". Ex: *Missão 1: O Básico (Completar 3 tipagens + 5 questões de genética).*
2. **Modo Competitivo (Battle Mode)**:
    - Desafio de tempo: Quem identifica o tipo sanguíneo mais rápido em 5 amostras aleatórias.
3. **Certificado de Competência**:
    - Gerar um PDF automático ao completar todas as conquistas e o quiz com nota $\ge 80\%$.

### 🔵 Nível 3: Empoderamento Docente (Médio Impacto)
*Objetivo: Transformar o app em uma ferramenta flexível para cada professor.*

1. **Editor de Questões e Cenários**:
    - Permitir que o professor adicione suas próprias perguntas ao quiz ou crie novos cenários de transfusão via Painel do Professor (salvos em `LocalStorage` ou exportáveis via JSON).
2. **Gestão de Turmas**:
    - Possibilidade de criar "Turmas" e exportar o relatório de desempenho da turma em CSV/Excel.

### ⚪ Nível 4: Refinamentos Técnicos (Baixo Impacto)
*Objetivo: Polimento final e escalabilidade.*

1. **Adaptive Learning no Quiz**:
    - O sistema ajusta a dificuldade das perguntas com base nos erros do aluno (se erra genética, o sistema oferece mais questões básicas de genética).
2. **Modo de Performance "Lite"**:
    - Opção de reduzir a quantidade de partículas no Canvas para dispositivos extremamente antigos (ex: Chromebooks de entrada).

---

## 4. Roadmap Sugerido

| Prioridade | Feature | Esforço | Impacto | Prazo Est. |
|:---:|:---|:---:|:---:|:---:|
| **1** | Jornada do Paciente (Casos Clínicos) | Médio | Altíssimo | 1 semana |
| **2** | Módulos Avançados (Bombaim/Subgrupos) | Médio | Alto | 1 semana |
| **3** | Editor de Questões (Painel Professor) | Alto | Alto | 2 semanas |
| **4** | Trilhas de Conquistas e Certificado | Baixo | Médio | 3 dias |
| **5** | Modo Competitivo / Adaptive Learning | Alto | Médio | 2 semanas |

## 5. Conclusão
O ABO Sim já é uma ferramenta de excelência. A transição para a versão 2.0 deve focar menos em "estética" (que já está resolvida) e mais em **"profundidade pedagógica"** e **"autonomia docente"**, consolidando-se como a referência em simulação de imunohematologia para o ensino médio e técnico.
