import { initI18n } from './i18n.js';

initI18n();

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const desktopQuery = window.matchMedia('(min-width: 900px)');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

function onScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

// Fecha o menu ao escolher um link
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

// Fecha com Esc e devolve o foco ao botão
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

// Ao passar para desktop, garante estado consistente
desktopQuery.addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
