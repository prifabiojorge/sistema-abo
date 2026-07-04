# Changelog v2.6.0 — QR Code + Deploy Chromebook

Data: 2026-07-03  
Pasta fonte: `app-v-2-6-0/`  
Pasta pública: `docs/`  
URL planejada: `https://prifabiojorge.github.io/sistema-abo/`

## Objetivo

Permitir que alunos em Chromebook acessem o ABO Pai d'égua por QR Code, usando GitHub Pages como hospedagem estática HTTPS e mantendo o app pronto para uso com um scan.

## Segurança Antes Do Deploy

- `app-v-2-6-0/` foi criada a partir de `app-v-2-5-0/`.
- `js/screens/chatbot-screen.js` foi removido da v2.6.0 antes da montagem de `docs/`.
- `docs/` foi montada apenas com arquivos públicos necessários:
  - `index.html`, `manifest.json`, `sw.js`, `qr-print.html`;
  - `js/bundle.js`;
  - `css/`, `fonts/`, `img/`.
- `docs/` não contém fontes JS, `js/screens/`, `js/build.ps1`, launchers, README, `.cmd` ou arquivos `chatbot-*`.
- Varredura em `docs/` por `AQ.`, `AIza`, `api_key`, `api-key`, `GEMINI`, `EMBEDDED_API_KEY`, `generativelanguage`, `chatbot-screen`, `ghp_` e `sk-` retornou zero achados.

## QR Code

- Adicionado `js/ui/qr-code.js` com gerador QR local em JavaScript, sem API externa.
- O QR dinâmico usa a URL atual quando o app roda em HTTP/HTTPS e usa `https://prifabiojorge.github.io/sistema-abo/` como fallback local.
- Gerado `img/qr-code.svg` para a URL pública.
- Criado `qr-print.html` em layout A4 com dois QR Codes por folha.
- Validação local: o SVG rasterizado foi decodificado com OpenCV e retornou `https://prifabiojorge.github.io/sistema-abo/`.

## Integração No App

- Painel do Professor ganhou aba `QR Code`.
- A aba permite projetar QR Code em modal, abrir em tela cheia, copiar a URL e abrir a página de impressão.
- Atalho `Q` abre o QR Code.
- Busca global ganhou entrada `QR Code`.
- `main.js` registra o evento `qr:open`.

## PWA Chromebook

- `manifest.json` recebeu:
  - `"id": "abo-pai-degua"`;
  - `"scope": "./"`;
  - `"prefer_related_applications": false`.
- `sw.js` usa cache `abo-pai-degua-v2.6.0`.
- `qr-print.html` e `img/qr-code.svg` foram adicionados ao cache.
- Adicionado prompt via `beforeinstallprompt` com toast para instalação opcional.

## Validação Local

- `node --check app-v-2-6-0/js/ui/qr-code.js` sem erro.
- `node --check app-v-2-6-0/js/screens/teacher-screen.js` sem erro.
- `node --check app-v-2-6-0/js/core/keyboard.js` sem erro.
- `node --check app-v-2-6-0/js/ui/search-palette.js` sem erro.
- `node --check app-v-2-6-0/js/main.js` sem erro.
- `powershell -ExecutionPolicy Bypass -File .\build.ps1` executado com sucesso em `app-v-2-6-0/js`.
- `node --check app-v-2-6-0/js/bundle.js` sem erro.
- `node --check docs/js/bundle.js` sem erro.
- `docs/js/` contém apenas `bundle.js`.
- QR Code de `docs/img/qr-code.svg` decodificado com sucesso para a URL pública.
- Lista do `sw.js` em `docs/` validada localmente: 21 URLs cacheadas, 0 arquivos ausentes.

## Deploy GitHub Pages

- Commit publicado em `main`: `1d0ab9aa7a8b46386b7a764cab81637713cafa6e`.
- GitHub Pages criado/configurado via API para `main` + `/docs`.
- Status final da API: `built`.
- URL pública carregou com HTTP 200: `https://prifabiojorge.github.io/sistema-abo/`.
- Artefatos públicos validados com HTTP 200: `qr-print.html`, `img/qr-code.svg`, `js/bundle.js` e `sw.js`.
- `sw.js` remoto validado: 21 URLs cacheadas, 0 falhas; sem `README.md` ou launcher local no cache público.
- Teste offline com Chrome headless: app abriu online, `abo-pai-degua-v2.6.0` cacheou 21 itens, navegador foi colocado offline e a URL pública recarregou com o título `ABO Pai d'égua v2.6.0 - Tipagem Sanguínea`.

## Pendências Externas

- A validação em Chromebook real depende do dispositivo/câmera dos alunos ou do professor.
- A validação de câmera ainda depende de apontar um Chromebook real para o QR Code projetado ou impresso.
