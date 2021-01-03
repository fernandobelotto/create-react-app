---
id: adding-css-reset
title: Adicionando uma redefinição de CSS
sidebar_label: Adicionando uma redefinição de CSS
---

Esta configuração de projeto usa [PostCSS Normalize] para adicionar um [CSS Reset].

Para começar a usá-lo, adicione `@import-normalize;` em qualquer lugar em seu(s) arquivo(s) CSS. Você só precisa incluí-lo uma vez e as importações duplicadas são removidas automaticamente. Já que você só precisa incluí-lo uma vez, um bom lugar para adicioná-lo é `index.css` ou `App.css`.

## `index.css`

```css
@import-normalize; /* trazer estilos normalize.css */

/* resto de estilos do aplicativos */
```

> **Dica**: Se você vir um aviso "_Unknown at rule @import-normalize css (unknownAtRules)_" no VSCode, altere a configuração `css.lint.unknownAtRules` para `ignore`.

Você pode controlar quais partes de [normalize.css] usar por meio da [browserslist] do seu projeto.

Resultados quando [browserslist] são as `últimas 3 versões`:

```css
/**
 * Adicione a exibição correta em IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Remova a borda nas imagens dentro de links em IE 10-.
 */

img {
  border-style: none;
}
```

Results when [browserslist] is `last 2 versions`:

```css
/**
 * Remova a borda em imagens dentro de links no IE 10-.
 */

img {
  border-style: none;
}
```

## Suporte de navegador

O suporte do navegador é ditado pelo que normalize.css [suporta]. No momento em que este documento foi escrito, ele inclui:

- Chrome (últimas 3 versões)
- Edge (últimas 3 versões)
- Firefox (últimas 3 versões)
- Firefox ESR
- Opera (últimas 3 versões)
- Safari (últimas 3 versões)
- iOS Safari (últimas 2 versões)
- Internet Explorer 9+

[browserslist]: http://browserl.ist/
[css reset]: https://cssreset.com/what-is-a-css-reset/
[normalize.css]: https://github.com/csstools/normalize.css
[supports]: https://github.com/csstools/normalize.css#browser-support
[postcss normalize]: https://github.com/csstools/postcss-normalize
