// Ponto de entrada. A navegação é inicializada primeiro e não depende do i18n:
// uma falha ao carregar as traduções não pode desativar o menu (AUD-009).

const root = document.documentElement;
const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const desktopQuery = window.matchMedia('(min-width: 900px)');

function isOpen() {
  return toggle.getAttribute('aria-expanded') === 'true';
}

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

function initNav() {
  if (!toggle || !nav) return false;

  toggle.addEventListener('click', () => setMenu(!isOpen()));

  // Fecha o menu ao escolher um link
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  // Fecha ao clicar fora do menu e do botão (AUD-006)
  document.addEventListener('click', (event) => {
    if (isOpen() && !nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });

  // Fecha com Esc e devolve o foco ao botão
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Ao passar para desktop, garante estado consistente
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });

  return true;
}

if (initNav()) {
  // Sinaliza ao script inline que o menu está pronto; garante o modo com JS.
  root.classList.add('nav-ready');
  root.classList.remove('no-js');
}

if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

// Idioma: carregado depois da navegação; em caso de falha a página permanece em PT.
import('./i18n.js')
  .then(({ initI18n }) => initI18n())
  .catch((error) => console.error('[i18n] falha ao inicializar:', error));

// Animações: opcionais; uma falha aqui não afeta navegação nem conteúdo.
import('./interactions.js')
  .then(({ initReveal }) => initReveal())
  .catch((error) => console.error('[interactions] falha ao inicializar:', error));
