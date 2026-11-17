// Animações discretas de entrada ao rolar a página.
// - Não roda com prefers-reduced-motion ou sem IntersectionObserver.
// - Elementos já visíveis no carregamento não são animados (sem flash, sem atraso de LCP).
// - Só altera opacity/transform: não provoca deslocamento de layout.

const TARGETS = [
  '.section__header',
  '.about__body',
  '.stack-group',
  '.project-card',
  '.subsection-title',
  '.timeline__item',
  '.education__item',
  '.contact__lead',
  '.contact__list',
].join(',');

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 3;

export function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
  );

  const pending = [];
  for (const el of document.querySelectorAll(TARGETS)) {
    if (el.getBoundingClientRect().top < window.innerHeight) continue;

    // Pequeno escalonamento entre irmãos (ex.: cards no mesmo grid)
    const siblings = [...el.parentElement.children].filter((child) => child.matches(TARGETS));
    const step = Math.min(siblings.indexOf(el) % (MAX_STAGGER_STEPS + 1), MAX_STAGGER_STEPS);
    if (step > 0) el.style.setProperty('--reveal-delay', `${step * STAGGER_MS}ms`);

    el.classList.add('reveal');
    observer.observe(el);
    pending.push(el);
  }

  // Se o usuário ativar "reduzir movimento" com a página aberta, mostra tudo imediatamente.
  reduceMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    for (const el of pending) el.classList.add('is-visible');
  });
}
