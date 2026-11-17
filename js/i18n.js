// Troca de idioma no cliente, sem recarregar a página.
// Usa somente textContent/setAttribute — nunca innerHTML.

import { DICTIONARIES, LANGS, DEFAULT_LANG } from './content.js';

const STORAGE_KEY = 'portfolio.lang';

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Armazenamento indisponível (modo privado, bloqueio): segue sem persistir.
  }
}

function isSupported(lang) {
  return Object.hasOwn(DICTIONARIES, lang);
}

// Escolha salva > preferência do navegador na primeira visita > português.
export function detectLanguage() {
  const stored = readStored();
  if (stored && isSupported(stored)) return stored;

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const base = String(tag || '').toLowerCase().split('-')[0];
    if (isSupported(base)) return base;
  }
  return DEFAULT_LANG;
}

function translate(dict, key) {
  if (Object.hasOwn(dict, key)) return dict[key];
  console.warn(`[i18n] chave ausente: ${key}`);
  return null;
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el && value != null) el.setAttribute('content', value);
}

export function applyLanguage(lang) {
  if (!isSupported(lang)) lang = DEFAULT_LANG;
  const dict = DICTIONARIES[lang];

  document.documentElement.lang = LANGS[lang].htmlLang;

  // Texto: data-i18n="chave"
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const value = translate(dict, el.dataset.i18n);
    if (value != null) el.textContent = value;
  }

  // Atributos: data-i18n-attr="aria-label:chave; title:chave"
  for (const el of document.querySelectorAll('[data-i18n-attr]')) {
    for (const pair of el.dataset.i18nAttr.split(';')) {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (!attr || !key) continue;
      const value = translate(dict, key);
      if (value != null) el.setAttribute(attr, value);
    }
  }

  // Metadados
  const title = dict['meta.title'];
  const description = dict['meta.description'];
  document.title = title;
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:locale"]', LANGS[lang].ogLocale);

  // Estado do seletor
  for (const btn of document.querySelectorAll('[data-lang]')) {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  }

  return lang;
}

export function initI18n() {
  applyLanguage(detectLanguage());

  for (const btn of document.querySelectorAll('[data-lang]')) {
    btn.addEventListener('click', () => {
      const lang = applyLanguage(btn.dataset.lang);
      store(lang);
    });
  }
}
