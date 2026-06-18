# Changelog v1.2.0 (2026-04-27)

## 🎨 Design System & UX/UI (Refactor Completo)
*   **Arquitetura de Tokens (DTCG)**: Implementação de sistema de 3 camadas (Primitive, Semantic, Component) no `tokens.css`.
*   **Atomic Design**: Refatoração de componentes (átomos e moléculas) para garantir consistência visual.
*   **Estados Interativos**: Todos os elementos interativos agora possuem os 6 estados obrigatórios (Default, Hover, Focus, Active, Disabled, Loading).
*   **Fim dos Estilos Inline**: Manipulação visual via JavaScript agora utiliza estritamente o chaveamento de classes semânticas (`.is-active`, `.has-error`, `.is-hidden`).

## ♿ Acessibilidade (WCAG 2.2 AA)
*   **Keyboard Focus**: Implementação de `focus-visible` com anéis de foco de alto contraste em todo o sistema.
*   **Semântica HTML**: Refino de `ARIA landmarks` e `roles` para melhor suporte a leitores de tela.
*   **Contraste**: Validação de contraste de cores nos temas Dark e Light.

## 🛠️ Infraestrutura e Build
*   **Build Engine**: Novo script `build.ps1` para geração do `bundle.js` com limpeza de ESM e proteção contra Mojibake (UTF-8 sem BOM).
*   **PWA & Chromebook**: Service Worker (`sw.js`) e `manifest.json` atualizados para caminhos relativos e inclusão dos novos arquivos de estilo no cache offline.
*   **Legacy Aliases**: Mapa de compatibilidade mantido no `tokens.css` para garantir que extensões futuras não quebrem o legado.

---
**Status**: Versão de Alta Fidelidade (Premium) concluída.
