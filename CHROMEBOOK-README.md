# 📱 ABO Sim — PWA para Chromebook

## O que é?

Esta é uma versão **PWA (Progressive Web App)** do ABO Sim, otimizada para **Chromebooks**. Funciona como um app nativo: tem ícone na barra de tarefas, abre em janela própria e funciona 100% offline.

## Como instalar no Chromebook

### Método 1: Instalação pelo Chrome (2 cliques)

1. Abra o **Google Chrome** no Chromebook
2. Acesse a pasta do app (onde está o arquivo `index.html`) ou abra-o localmente
3. Na barra de endereço do Chrome, clique no ícone **➕ Instalar ABO Sim** (aparece à direita da URL)
4. Confirme clicando em **"Instalar"**

Pronto! O app agora:
- Aparece no menu de aplicativos do Chromebook
- Tem ícone na barra de tarefas (shelf)
- Abre em janela própria, sem barra de endereço
- Funciona offline mesmo sem internet

### Método 2: Instalação manual

1. Abra o Chrome
2. Pressione **Ctrl + O** e selecione o arquivo `index.html`
3. Clique no menu ⋮ (três pontinhos) → **Mais ferramentas** → **Criar atalho...**
4. Marque **"Abrir como janela"** e clique em **Criar**

## Funcionalidades no Chromebook

| Recurso | Status |
|:---|:---|
| ⬜ Offline | Funciona sem internet |
| 📱 Tela cheia | Suporta modo apresentação |
| 🎮 Controles touch | Otimizado para tela touch |
| ⌨️ Teclado | Atalhos de teclado suportados |
| 🖱️ Mouse | Totalmente funcional |
| 🌙 Tema claro/escuro | Funciona em ambos |
| 🔊 Sons | Feedback sonoro procedural |

## Diferenças da versão Windows (.exe)

| | PWA (Chromebook) | Portátil (.exe) |
|:---|:---|:---|
| **Instalação** | Pelo Chrome | Duplo clique no .exe |
| **Tamanho** | ~350 KB (arquivos web) | ~67 MB (com navegador) |
| **Offline** | ✅ Sim | ✅ Sim |
| **Atualizações** | Substituir arquivos | Substituir .exe |
| **Chromebook** | ✅ Nativo | ❌ Não compatível |
| **Windows** | ⚠️ Via navegador | ✅ Nativo |

## Requisitos

- Chromebook com Chrome OS 80+
- Google Chrome instalado
- Não precisa de Play Store
- Não precisa de Linux (Crostini)
- Não precisa de permissão de administrador

## Arquivos incluídos

```
app/
├── index.html          ← Página principal
├── manifest.json       ← Configuração do PWA
├── sw.js               ← Service Worker (cache offline)
├── css/                ← Estilos
├── js/                 ← Scripts
├── fonts/              ← Fontes
├── img/                ← Imagens e ícones
└── img/icons/          ← Ícones do PWA (72px a 512px)
```

## Desinstalar

1. Clique com o botão direito no ícone do app
2. Selecione **"Desinstalar"** ou **"Remover do Chrome"**

---

**Desenvolvido por:** Prof. Fábio Fabuloso — CISEB Celso Rodrigues 2026
