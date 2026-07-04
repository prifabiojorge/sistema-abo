# Validação Manual — QR Code Em Chromebook

Data: 2026-07-03  
URL: `https://prifabiojorge.github.io/sistema-abo/`  
Etapa do plano: `7.4 Escanear QR Code com câmera do Chromebook`

## Objetivo

Comprovar em dispositivo real que o fluxo do aluno funciona como planejado:

1. Abrir a câmera do Chromebook.
2. Apontar para o QR Code do ABO Pai d'égua.
3. Tocar no link detectado.
4. Confirmar que o app abre no Chrome, pronto para uso.

## Evidências Automatizadas Já Obtidas

- GitHub Pages ativo em `main /docs`, status `built`.
- URL pública responde HTTP 200.
- `qr-print.html`, `img/qr-code.svg`, `js/bundle.js` e `sw.js` respondem HTTP 200.
- QR Code remoto foi baixado, rasterizado e decodificado com OpenCV para `https://prifabiojorge.github.io/sistema-abo/`.
- `docs/js/bundle.js` passou em `node --check`.
- Varredura de `docs/` por segredos/API/chatbot retornou zero achados.
- Chrome headless validou o PWA offline: cache `abo-pai-degua-v2.6.0` com 21 itens e recarregamento offline da URL pública.

## Checklist No Chromebook

| Passo | Ação | Resultado esperado |
|:---|:---|:---|
| 1 | Abrir `https://prifabiojorge.github.io/sistema-abo/qr-print.html` no computador do professor ou abrir a aba `QR Code` no Painel do Professor | QR Code aparece em tamanho grande |
| 2 | No Chromebook, abrir o app Câmera | Câmera abre sem pedir login extra |
| 3 | Apontar a câmera para o QR Code projetado/impresso | Chromebook detecta o link do GitHub Pages |
| 4 | Tocar no link detectado | Chrome abre `https://prifabiojorge.github.io/sistema-abo/` |
| 5 | Conferir a tela inicial | Aparece `ABO Pai d'égua` e os cards do app |
| 6 | Abrir `Hemácia Runner` | O mini-game carrega |
| 7 | Voltar para a tela inicial e abrir `Professor` | O painel solicita PIN |
| 8 | No painel, usar a aba `QR Code` | O QR Code aparece para projeção |

## Validação Offline No Chromebook

Depois do primeiro carregamento online:

1. Abrir o app uma vez e aguardar a tela inicial carregar.
2. Desativar Wi-Fi do Chromebook.
3. Recarregar a página.
4. Resultado esperado: o app continua abrindo por cache PWA.

## Registro Da Execução Manual

Preencher após teste físico:

- Data/hora:
- Modelo do Chromebook:
- Rede usada:
- QR projetado ou impresso:
- Link detectado corretamente? Sim/Não:
- App abriu? Sim/Não:
- Offline funcionou após primeiro acesso? Sim/Não:
- Observações:

## Status

Pendente apenas por depender de câmera/dispositivo físico. Todos os componentes técnicos necessários para o teste estão publicados e validados por automação.
