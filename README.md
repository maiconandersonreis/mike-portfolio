# Portfólio — Maicon Reis

Portfólio pessoal estático (HTML, CSS e JavaScript puro). Sem frameworks e sem etapa de build.

## Rodar localmente

Qualquer servidor estático serve. Exemplo:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

(Abrir `index.html` direto pelo `file://` não carrega ES modules em alguns navegadores.)

## Estrutura

```text
index.html          página única (texto PT inline como padrão)
css/
  reset.css         normalização mínima
  variables.css     tokens de cor, tipografia, espaçamento
  components.css    base, botões, tags, placeholders, header/nav
  sections.css      hero, sobre, stack, projetos, experiência, contato, footer
  responsive.css    breakpoints (600px, 900px) e prefers-reduced-motion
js/
  main.js           ponto de entrada: i18n, menu mobile, header no scroll, ano do footer
  i18n.js           detecção, troca e persistência de idioma (sem innerHTML)
  content.js        dicionários pt/en (mesmas chaves)
assets/             imagens, ícones e PDFs de currículo (vazios até receber material autorizado)
favicon.svg
robots.txt
```

`sitemap.xml`, canonical e OG final na Fase D, após o domínio.

## Idiomas

- Elementos traduzíveis usam `data-i18n="chave"` (texto) ou `data-i18n-attr="aria-label:chave"` (atributos).
- O HTML traz o texto em português, que vale como padrão sem JavaScript.
- Ordem de escolha: idioma salvo no `localStorage` → preferência do navegador → `pt`.
- Idioma trocado no cliente, em URL única. Rotas `/pt/` e `/en/` com `hreflang` podem ser avaliadas no futuro para SEO.

## Status

- [x] Fase A — layout estático e conteúdo PT
- [x] Fase B — dicionários PT/EN e troca de idioma
- [ ] Fase C — interações, acessibilidade, mídia e PDFs
- [ ] Fase D — publicação no Cloudflare Pages

Placeholders marcados com `[PENDENTE]` indicam conteúdo que depende de confirmação (ver seção 9 da especificação).
