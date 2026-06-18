# 🎨 Design System — ABO Sim v1.0

## 1. Identidade visual

**Conceito**: Laboratorial moderno — clean, científico, mas com calor humano. Inspirado em dashboards de saúde premium e apps de educação gamificada.

**Mood**: Dark mode principal (conforto visual em projetor/sala escura) com light mode alternativo.

---

## 2. Paleta de cores

### 2.1 Dark Theme (Principal)

```css
:root[data-theme="dark"] {
  /* Background hierarchy */
  --bg-primary:     hsl(220, 20%, 8%);     /* #111520 - fundo principal */
  --bg-secondary:   hsl(220, 18%, 12%);    /* #181c28 - cards/painéis */
  --bg-tertiary:    hsl(220, 16%, 16%);    /* #222838 - inputs/wells */
  --bg-elevated:    hsl(220, 14%, 20%);    /* #2c3248 - modais/tooltips */

  /* Text hierarchy */
  --text-primary:   hsl(220, 20%, 95%);    /* #eef0f5 */
  --text-secondary: hsl(220, 15%, 65%);    /* #959cae */
  --text-muted:     hsl(220, 10%, 45%);    /* #666d7a */

  /* Accent — Vermelho sangue científico */
  --accent-primary:   hsl(0, 72%, 50%);    /* #da2c2c - sangue */
  --accent-hover:     hsl(0, 72%, 60%);    /* #e05555 */
  --accent-subtle:    hsl(0, 72%, 15%);    /* #3d1010 - bg accent */

  /* Reagentes (cores dos poços) */
  --reagent-anti-a:   hsl(210, 85%, 55%);  /* #2e7dd6 - Azul (Anti-A) */
  --reagent-anti-b:   hsl(45, 90%, 55%);   /* #e6b81a - Amarelo (Anti-B) */
  --reagent-anti-d:   hsl(150, 70%, 45%);  /* #22a861 - Verde (Anti-D/Rh) */

  /* Feedback */
  --success:  hsl(145, 65%, 42%);   /* #26a65b */
  --warning:  hsl(38, 92%, 50%);    /* #f5a623 */
  --error:    hsl(0, 75%, 55%);     /* #d94040 */
  --info:     hsl(210, 80%, 55%);   /* #3388dd */

  /* Aglutinação visual */
  --blood-cell:       hsl(0, 65%, 40%);    /* hemácia normal */
  --blood-cell-agglu: hsl(0, 70%, 30%);    /* hemácia em cluster */
  --plasma:           hsl(45, 30%, 85%);   /* plasma de fundo */

  /* Glass effect */
  --glass-bg:     rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur:   12px;
}
```

### 2.2 Light Theme

```css
:root[data-theme="light"] {
  --bg-primary:     hsl(220, 20%, 97%);
  --bg-secondary:   hsl(220, 18%, 93%);
  --bg-tertiary:    hsl(220, 16%, 88%);
  --bg-elevated:    hsl(0, 0%, 100%);
  --text-primary:   hsl(220, 20%, 10%);
  --text-secondary: hsl(220, 15%, 40%);
  --text-muted:     hsl(220, 10%, 60%);
  /* Accents mantidos iguais */
}
```

---

## 3. Tipografia

```css
/* Importar subsets para offline */
@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: 'Outfit';
  src: url('./fonts/Outfit-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

:root {
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Outfit', 'Inter', sans-serif;

  /* Scale (modular — ratio 1.25) */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.25rem;   /* 20px */
  --text-xl:   1.563rem;  /* 25px */
  --text-2xl:  1.953rem;  /* 31px */
  --text-3xl:  2.441rem;  /* 39px */
  --text-4xl:  3.052rem;  /* 49px */

  /* Weight */
  --weight-normal:   400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
}

/* Uso */
h1 { font: var(--weight-bold) var(--text-3xl) var(--font-display); }
h2 { font: var(--weight-semibold) var(--text-2xl) var(--font-display); }
h3 { font: var(--weight-semibold) var(--text-xl) var(--font-display); }
body { font: var(--weight-normal) var(--text-base)/1.6 var(--font-body); }
```

---

## 4. Spacing & Layout

```css
:root {
  --space-1:  0.25rem;  /* 4px */
  --space-2:  0.5rem;   /* 8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-5:  1.5rem;   /* 24px */
  --space-6:  2rem;     /* 32px */
  --space-7:  3rem;     /* 48px */
  --space-8:  4rem;     /* 64px */

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  --shadow-sm:  0 1px 3px rgba(0,0,0,0.12);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg:  0 8px 32px rgba(0,0,0,0.20);
  --shadow-glow: 0 0 20px rgba(218, 44, 44, 0.3); /* glow vermelho */
}
```

---

## 5. Componentes UI

### 5.1 Botões
```css
.btn {
  font: var(--weight-medium) var(--text-sm) var(--font-body);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn--primary   { background: var(--accent-primary); color: white; }
.btn--secondary { background: var(--glass-bg); border-color: var(--glass-border); }
.btn--ghost     { background: transparent; color: var(--text-secondary); }
.btn:hover      { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active     { transform: translateY(0); }
```

### 5.2 Cards (Glassmorphism)
```css
.card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### 5.3 Poço de reagente
```css
.reagent-well {
  width: 160px;
  height: 160px;
  border-radius: var(--radius-full);
  border: 3px solid var(--glass-border);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.reagent-well--anti-a { border-color: var(--reagent-anti-a); }
.reagent-well--anti-b { border-color: var(--reagent-anti-b); }
.reagent-well--anti-d { border-color: var(--reagent-anti-d); }
.reagent-well:hover   { box-shadow: 0 0 24px rgba(var(--well-color-rgb), 0.3); }
.reagent-well.active  { border-width: 4px; animation: pulse 1.5s infinite; }
```

---

## 6. Animações

```css
/* Fade in para telas */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Pulse para poço ativo */
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--well-color-rgb), 0.4); }
  50%      { box-shadow: 0 0 0 12px rgba(var(--well-color-rgb), 0); }
}

/* Blood drop falling */
@keyframes dropFall {
  0%   { transform: translateY(-60px) scale(1); opacity: 0; }
  50%  { opacity: 1; }
  100% { transform: translateY(0) scale(0.8); opacity: 0.8; }
}

/* Score popup */
@keyframes scorePopup {
  0%   { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Layout das telas principais

### 7.1 Home Screen
```
┌──────────────────────────────────────────────┐
│  [Logo]  ABO Sim            [🌙] [♿]       │ ← Navbar
├──────────────────────────────────────────────┤
│                                              │
│    🧪 Simulador Interativo de                │
│       Tipagem Sanguínea ABO/Rh               │ ← Hero
│                                              │
│    [Começar Simulação]   [Quiz]              │
│                                              │
├────────┬────────┬────────┬───────────────────┤
│ 🔬     │ ❓     │ 🧬     │ 📖               │
│Simular │Quiz    │Mitos   │Enciclopédia       │ ← Feature cards
│        │        │vs Fatos│                   │
└────────┴────────┴────────┴───────────────────┘
```

### 7.2 Simulator Screen
```
┌──────────────────────────────────────────────┐
│  ← Voltar    SIMULADOR          Score: 150   │
├──────────────────────────────────────────────┤
│                                              │
│    Tipo sanguíneo: [???]                     │
│                                              │
│    ┌────────┐  ┌────────┐  ┌────────┐       │
│    │ Anti-A │  │ Anti-B │  │ Anti-D │       │
│    │  (🔵)  │  │  (🟡)  │  │  (🟢)  │       │ ← Canvas wells
│    │        │  │        │  │        │       │
│    └────────┘  └────────┘  └────────┘       │
│                                              │
│    [🩸 Pingar sangue]                        │ ← Action button
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ Explicação: Aguardando teste...      │    │ ← Info panel
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 8. Responsividade

| Breakpoint | Target | Layout |
|:---|:---|:---|
| < 480px | Celular portrait | Poços empilhados verticalmente |
| 480-768px | Celular landscape / tablet | Poços em row, info abaixo |
| 768-1024px | Tablet | Layout completo, sidebar info |
| > 1024px | Desktop / Projetor | Layout completo, espaçamento extra |

---

## 9. Acessibilidade

| Requisito | Implementação |
|:---|:---|
| Contraste mínimo 4.5:1 | Cores validadas contra WCAG AA |
| Navegação por teclado | Focus visible, tab order lógico |
| Screen reader | ARIA labels em todos os interativos |
| Reduced motion | `@media (prefers-reduced-motion)` |
| Alto contraste | Toggle manual no navbar |
| Daltonismo | Formas + texto além de cor nos poços |
