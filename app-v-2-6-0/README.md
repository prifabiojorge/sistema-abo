# ABO Pai d'égua v2.6.0

Simulador interativo de tipagem sanguínea ABO/Rh com mini-game retrô educativo Hemácia Runner.

## Início Rápido

1. Abra a pasta `app-v-2-6-0`.
2. Dê dois cliques em `ABRIR-ABO-Pai-degua-v2.6.0.html`.
3. O app abrirá no navegador padrão.

Alternativas:

- Se preferir, dê dois cliques em `index.html`.
- No Windows, também é possível usar `ABRIR-ABO-Pai-degua-v2.6.0.cmd`.
- Navegadores recomendados: Google Chrome ou Microsoft Edge.

## Acesso Por QR Code No Chromebook

URL pública planejada para GitHub Pages:

`https://prifabiojorge.github.io/sistema-abo/`

Fluxo do aluno:

1. Abra a câmera do Chromebook.
2. Aponte para o QR Code projetado ou impresso.
3. Toque no link exibido para abrir o app no Chrome.

Para imprimir o QR Code, abra `qr-print.html`. Para projetar em sala, entre no `Painel do Professor`, use a aba `QR Code` e clique em `Projetar QR Code`.

## 🎮 Mini-game Hemácia Runner

Acesse o mini-game na tela inicial ou use o atalho `Ctrl+J`.

O **Hemácia Runner** é um jogo retrô canvas-based estilo endless runner que reforça os conceitos de compatibilidade sanguínea de forma interativa:

- **Jogador**: Você é uma hemácia com tipo sanguíneo **aleatório** (A+, B-, AB+, O+, etc.). O tipo O- fica fora do sorteio do mini-game para evitar partidas sem anticorpo perigoso.
- **Obstáculos**: Anticorpos em formato de Y (Anti-A em azul, Anti-B em amarelo, Anti-D em verde) avançam pela direita.
- **Mecânica de Pulo**: Aperte **Espaço**, a tecla **↑ (Seta para Cima)** ou **toque na tela** para pular obstáculos.
- **Compatibilidade**:
  - Se o anticorpo for **incompatível** com a hemácia (ex: Anti-A contra hemácia A+), colidir causa **aglutinação** (fim de jogo).
  - Se for **compatível** (ex: Anti-B contra hemácia A+), você pode atravessá-lo com segurança para ganhar **bônus (+10 pts)**.
- **Coletáveis**: Pegue gotas de plasma vermelho com símbolo de cruz para ganhar **bônus (+15 pts)**.
- **Velocidade e dificuldade**: Aumentam fortemente conforme você avança; nas fases mais altas, os anticorpos aparecem com bem menos espaço e podem surgir em sequências de dois ou três.
- **Som responsivo**: Feedbacks curtos e mais audíveis para início, pulo, coleta, passagem segura, combo, perigo, avanço de dificuldade e game over. A lógica usa pistas de arcade como subida de tom, stingers e tensão, sem mecânica de aposta.
- **Game Over Educativo**: A tela de fim de jogo explica detalhadamente **POR QUE** houve aglutinação (quais antígenos estavam presentes na hemácia e qual anticorpo reagiu contra eles).
- **Recorde**: Salvo automaticamente no dispositivo.

---

## O Que Tem Nesta Versão (v2.6.0)

- QR Code para acesso rápido em Chromebook via GitHub Pages.
- Aba `QR Code` no Painel do Professor, modal de projeção, botão de tela cheia e cópia da URL.
- Página `qr-print.html` em A4 com dois QR Codes por folha.
- PWA ajustado com `scope`, `id`, cache v2.6.0 e prompt de instalação em navegadores compatíveis.
- **Hemácia Runner**: Mini-game retrô integrado diretamente no app (removendo a dependência de APIs externas de chat).
- Curva de dificuldade hard no Hemácia Runner: muito mais velocidade, bem menos intervalo entre obstáculos, chance de duplas/trios e indicador `DIF` no HUD.
- Sons arcade com volume reforçado, gerados por Web Audio API no próprio app, sem arquivos externos: pulo, coleta, passagem segura, perigo, combo, mudança de dificuldade e game over.
- Estética retrô com scanlines CRT, vignette, parallax e efeitos de partículas.
- Atalhos globais e busca atualizados para o mini-game.
- Simulador ABO/Rh com reações Anti-A, Anti-B e Anti-D.
- Modo diagnóstico livre (Modo Normal e Modo Comparar).
- Quiz com 30 questões de genética, imunohematologia e transfusão.
- Cenários clínicos de transfusão baseados em tomada de decisão.
- Mitos/Fatos com referências e Enciclopédia com sistema de favoritos.
- Painel do professor com editor de questões, editor de cenários, gestão de turmas locais e exportação CSV/JSON.

---

## Como Usar Como Aluno

### Simulador
Entre em `Simulador`, escolha um tipo sanguíneo ou use `Aleatório`, depois clique em `Pingar sangue`. O app mostra se houve aglutinação em Anti-A, Anti-B e Anti-D e explica o resultado.
Use `Comparar tipos` para ver dois tipos sanguíneos lado a lado.

### Quiz
Entre em `Quiz` para responder perguntas. Após cada resposta, leia a explicação antes de avançar.

### Transfusão
Entre em `Transfusão` para resolver cenários clínicos. Escolha doadores compatíveis e confira o feedback.

### Casos Clínicos
Entre em `Casos Clínicos`, escolha um caso e responda à decisão proposta. O app mostra feedback científico e registra o progresso.

---

## Como Usar Como Professor

1. Entre em `Professor`.
2. Digite o PIN padrão: `1234`.
3. Use as abas `Banco de Questões`, `Cenários`, `Turmas`, `QR Code`, `Exportação` e `Dados`.

Sem backend: os dados ficam no dispositivo de cada aluno. Para reunir dados, o aluno exporta o progresso e o professor importa no painel.

---

## Atalhos de Teclado

| Atalho | Ação |
|:---|:---|
| `1` | Início |
| `2` | Simulador |
| `3` | Quiz |
| `4` | Transfusão |
| `5` | Mitos vs. Fatos |
| `6` | Enciclopédia |
| `7` | Painel do Professor |
| `8` | Meu Progresso |
| `9` | Trilhas |
| `0` | Casos Clínicos |
| `Ctrl+K` | Busca global |
| `Ctrl+J` | Hemácia Runner (Mini-game) |
| `Q` | Abrir QR Code |
| `P` | Modo apresentação |
| `S` | Configurações |
| `T` | Alternar tema |
| `?` | Ajuda de atalhos |
| `Esc` | Fechar modal ou voltar |

---

## Problemas Comuns

| Problema | Solução |
|:---|:---|
| Dei dois cliques e não abriu | Abra o navegador e arraste `index.html` para dentro dele |
| Bati em um anticorpo e não perdi | O anticorpo era compatível com seu tipo de hemácia! Ele dá pontos extras |
| A tela parece antiga após atualizar | Feche e abra o navegador novamente; se necessário, limpe o cache do site |
| Perdi o progresso / recorde | O progresso depende do navegador/dispositivo usado; exporte JSON antes de trocar de máquina |

---

## Estrutura da Pasta

| Item | Função |
|:---|:---|
| `ABRIR-ABO-Pai-degua-v2.6.0.html` | Atalho recomendado de dois cliques |
| `ABRIR-ABO-Pai-degua-v2.6.0.cmd` | Atalho alternativo para Windows |
| `index.html` | Entrada principal do app |
| `qr-print.html` | Página imprimível com QR Code |
| `js/bundle.js` | Código do app empacotado |
| `css/` | Estilos visuais |
| `fonts/` | Fontes locais |
| `img/` | Ícones e imagens |
| `img/qr-code.svg` | QR Code estático para GitHub Pages |
| `sw.js` | Cache PWA para uso em navegador compatível |

## Créditos

ABO Pai d'égua v2.6.0 — Prof. Fábio Fabuloso — CISEB Celso Rodrigues 2026.
