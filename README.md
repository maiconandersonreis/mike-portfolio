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
  interactions.js   animações de entrada ao rolar (desligadas com prefers-reduced-motion)
assets/
  fonts/            Inter variável (latino, woff2) + licença SIL OFL
  images/projects/  capturas autorizadas dos projetos (WebP 720w/1440w)
  cv/               currículos PT/EN em PDF (o link acompanha o idioma do site)
404.html            página de erro (caminhos absolutos; servida pelo Cloudflare Pages)
_headers            cabeçalhos HTTP: CSP, frame, permissions (Cloudflare Pages)
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
- [x] Fase C — interações, acessibilidade, mídia e PDFs
- [ ] Fase D — publicação no Cloudflare Pages

## Obrigatório antes da publicação definitiva (Fase D)

- [ ] **Remover** `<meta name="robots" content="noindex, follow">` do `index.html`. Ele foi adicionado temporariamente para que a URL de pré-publicação não seja indexada enquanto houver placeholders (auditoria, item AUD-003).
- [ ] Adicionar `Sitemap:` ao `robots.txt`, `sitemap.xml`, canonical e Open Graph final com o domínio definitivo.

## Cabeçalhos e CSP

O `_headers` define o Content-Security-Policy. O único script inline (no `<head>` do `index.html`) é liberado pelo hash. **Se esse script for alterado, recalcule o hash** e atualize o `_headers`:

```bash
python3 -c "import re,hashlib,base64;s=re.search(r'<script>(.*?)</script>',open('index.html').read(),re.S).group(1);print('sha256-'+base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())"
```

O CSP não permite `style="..."` no HTML: use classes.

## Navegação sem JavaScript

O `<html>` começa com a classe `no-js`, e o CSS correspondente exibe os links do menu em linha, com cabeçalho estático. Um script inline remove a classe na primeira pintura. Se `js/main.js` não marcar `nav-ready` em 4 s (falha de rede ou erro), a classe volta e os links reaparecem. O i18n é carregado depois do menu, por `import()` dinâmico, então uma falha nas traduções não afeta a navegação.

Placeholders marcados com `[PENDENTE]` indicam conteúdo que depende de confirmação (ver seção 9 da especificação).
