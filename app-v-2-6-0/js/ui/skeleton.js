/**
 * Skeleton Screen Manager — ABO Sim v1.3.0
 * Exibe placeholders animados durante carregamento (Task 8.4).
 */
export class SkeletonManager {
  static render(target, config = {}) {
    if (!target) return;
    const { lines = 3, hasCircle = false, hasCard = true } = config;

    let html = '<div class="skeleton-wrapper" aria-hidden="true">';
    const widthClasses = ['skeleton-line--wide', 'skeleton-line--full', 'skeleton-line--medium'];

    if (hasCard) {
      html += '<div class="skeleton-card">';
      if (hasCircle) {
        html += '<div class="skeleton skeleton-circle"></div>';
      }
      for (let i = 0; i < lines; i++) {
        const widthClass = widthClasses[Math.min(i, widthClasses.length - 1)];
        html += `<div class="skeleton skeleton-line ${widthClass}"></div>`;
      }
      html += '</div>';
    } else {
      for (let i = 0; i < lines; i++) {
        const widthClass = i === 0 ? 'skeleton-line--medium' : i === lines - 1 ? 'skeleton-line--short' : 'skeleton-line--wide';
        html += `<div class="skeleton skeleton-line ${widthClass}"></div>`;
      }
    }

    html += '</div>';
    target.innerHTML = html;
  }

  static renderQuiz(target) {
    if (!target) return;
    target.innerHTML = `
      <div class="skeleton-wrapper" aria-hidden="true">
        <div class="skeleton-card">
          <div class="skeleton skeleton-line skeleton-line--narrow"></div>
          <div class="skeleton skeleton-line skeleton-line--full skeleton-line--thick"></div>
          <div class="skeleton skeleton-line skeleton-line--wide"></div>
          <div class="skeleton-options">
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
            <div class="skeleton skeleton-option"></div>
          </div>
        </div>
      </div>
    `;
  }

  static renderGrid(target, count = 4) {
    if (!target) return;
    let html = '<div class="skeleton-wrapper skeleton-grid" aria-hidden="true">';
    for (let i = 0; i < count; i++) {
      html += `
        <div class="skeleton-card">
          <div class="skeleton skeleton-circle"></div>
          <div class="skeleton skeleton-line skeleton-line--medium"></div>
          <div class="skeleton skeleton-line skeleton-line--wide"></div>
        </div>
      `;
    }
    html += '</div>';
    target.innerHTML = html;
  }

  static clear(target) {
    if (!target) return;
    const wrapper = target.querySelector('.skeleton-wrapper');
    if (wrapper) wrapper.remove();
  }
}

export class EmptyState {
  static markup({ icon = '📭', title = 'Nada por aqui ainda', desc = '', ctaLabel = '', ctaHref = '', compact = false } = {}) {
    const cta = ctaLabel
      ? `<a href="${ctaHref || '#home'}" class="btn btn--primary empty-state__cta" data-nav="${(ctaHref || '#home').replace('#', '')}">${ctaLabel}</a>`
      : '';

    return `
      <div class="empty-state ${compact ? 'empty-state--compact' : ''}" role="status">
        <span class="empty-state__icon" aria-hidden="true">${icon}</span>
        <h3 class="empty-state__title">${title}</h3>
        ${desc ? `<p class="empty-state__desc">${desc}</p>` : ''}
        ${cta}
      </div>
    `;
  }

  static render(target, options = {}) {
    if (!target) return;
    target.innerHTML = EmptyState.markup(options);
  }
}
