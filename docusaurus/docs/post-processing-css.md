---
id: post-processing-css
title: Pós-processamento CSS
---

Esta configuração de projeto minimiza seu CSS e adiciona prefixos de fornecedor a ele automaticamente por meio do [Autoprefixer](https://github.com/postcss/autoprefixer) para que você não precise se preocupar com isso.

Suporte para novos recursos CSS como a [propriedade `all`](https://developer.mozilla.org/en-US/docs/Web/CSS/all), [propriedades `break`](https://www.w3.org/TR/css-break-3/#breaking-controls), [propriedades personalizadas](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) e [media query ranges](https://www.w3.org/TR/mediaqueries-4/#range-context) são automaticamente polyfilled para adicionar suporte para navegadores mais antigos.

Você pode personalizar seus navegadores de suporte de destino ajustando a chave `browserslist` em `package.json` de acordo com a [especificação de Browserslist](https://github.com/browserslist/browserslist#readme).

Por exemplo, este:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

se torna isso:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
```
Se você precisar desativar o autoprefixing por algum motivo, [siga esta seção](https://github.com/postcss/autoprefixer#disabling).

[Layout de CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) a prefixação está desabilitada por padrão, mas **não** tira a prefixação manual.
Se você gostaria de aderir ao prefixo CSS Grid, [primeiro familiarize-se com suas limitações](https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie).

Para habilitar a prefixação CSS Grid, adicione `/* autoprefixer grid:autoplace */` no topo de seu arquivo CSS.
