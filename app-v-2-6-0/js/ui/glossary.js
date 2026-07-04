import { INLINE_GLOSSARY } from '../learning/learning-data.js';

export class GlossaryManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.terms = INLINE_GLOSSARY
      .filter(item => item.term.length > 2)
      .sort((a, b) => b.term.length - a.term.length);
  }

  init() {
    this.bus.on('screen:change', () => {
      setTimeout(() => this.enhanceActiveScreen(), 120);
    });
  }

  enhanceActiveScreen() {
    const screen = document.querySelector('.screen--active');
    if (!screen || screen.dataset.glossaryEnhanced === 'true') return;

    const walker = document.createTreeWalker(
      screen,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.closest('button, input, select, textarea, canvas, script, style, .term, .toast, .modal-overlay')) return NodeFilter.FILTER_REJECT;
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          return this.terms.some(item => this._matches(node.nodeValue, item.term))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.slice(0, 60).forEach(node => this._wrapTerms(node));
    screen.dataset.glossaryEnhanced = 'true';
  }

  _wrapTerms(textNode) {
    let html = textNode.nodeValue;
    let touched = false;

    for (const item of this.terms) {
      const re = new RegExp(`\\b(${this._escape(item.term)})\\b`, 'iu');
      if (!re.test(html)) continue;
      touched = true;
      html = html.replace(re, `<span class="term" tabindex="0" role="term" data-definition="${this._attr(item.definition)}" data-ref="${item.encyclopediaRef || ''}">$1</span>`);
    }

    if (!touched) return;
    const span = document.createElement('span');
    span.innerHTML = html;
    textNode.parentNode.replaceChild(span, textNode);
    span.querySelectorAll('.term').forEach(term => this._bindTerm(term));
  }

  _bindTerm(term) {
    const show = () => this._showTooltip(term);
    const hide = () => this._hideTooltip();
    term.addEventListener('mouseenter', show);
    term.addEventListener('focus', show);
    term.addEventListener('mouseleave', hide);
    term.addEventListener('blur', hide);
    term.addEventListener('click', () => {
      const ref = term.dataset.ref;
      if (ref && window.ABO?.router) window.ABO.router.navigate('encyclopedia');
    });
  }

  _showTooltip(term) {
    this._hideTooltip();
    const tip = document.createElement('div');
    tip.className = 'term-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.textContent = term.dataset.definition;
    term.appendChild(tip);
  }

  _hideTooltip() {
    document.querySelectorAll('.term-tooltip').forEach(tip => tip.remove());
  }

  _matches(text, term) {
    return new RegExp(`\\b${this._escape(term)}\\b`, 'iu').test(text);
  }

  _escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  _attr(text) {
    return text.replace(/"/g, '&quot;');
  }
}
