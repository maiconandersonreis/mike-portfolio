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
index.html          página única (conteúdo PT na Fase A)
css/
  reset.css         normalização mínima
  variables.css     tokens de cor, tipografia, espaçamento
  components.css    base, botões, tags, placeholders, header/nav
  sections.css      hero, sobre, stack, projetos, experiência, contato, footer
  responsive.css    breakpoints (600px, 900px) e prefers-reduced-motion
js/
  main.js           menu mobile, estado do header no scroll, ano do footer
assets/             imagens, ícones e PDFs de currículo (vazios até receber material autorizado)
favicon.svg
robots.txt
```

`js/i18n.js` e `js/content.js` entram na Fase B (PT/EN); `sitemap.xml`, canonical e OG final na Fase D, após o domínio.

## Status

- [x] Fase A — layout estático e conteúdo PT
- [ ] Fase B — dicionários PT/EN e troca de idioma
- [ ] Fase C — interações, acessibilidade, mídia e PDFs
- [ ] Fase D — publicação no Cloudflare Pages

Placeholders marcados com `[PENDENTE]` indicam conteúdo que depende de confirmação (ver seção 9 da especificação).
