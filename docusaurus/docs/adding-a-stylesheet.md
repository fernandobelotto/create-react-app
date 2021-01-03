---
id: adding-a-stylesheet
title: Adicionando uma Stylesheet
sidebar_label: Adicionando Stylesheets
---

Esta configuração de projeto usa [webpack](https://webpack.js.org/) para lidar com todos os assets. webpack oferece uma maneira personalizada de “estender” o conceito de `import` além do JavaScript. Para expressar que um arquivo JavaScript depende de um arquivo CSS, você precisa **importar o CSS do arquivo JavaScript**:

## `Button.css`

```css
.Button {
  padding: 20px;
}
```

## `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Diga ao webpack que o Button.js usa esses estilos

class Button extends Component {
  render() {
    // Você pode usá-los como estilos CSS regulares
    return <div className="Button" />;
  }
}
```

**Isso não é necessário para o React**, mas muitas pessoas acham esse recurso conveniente. Você pode ler sobre os benefícios dessa abordagem [aqui](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b). No entanto, você deve estar ciente de que isso torna seu código menos portátil para outras ferramentas e ambientes de construção do que o webpack.

No desenvolvimento, expressar dependências dessa maneira permite que seus estilos sejam recarregados rapidamente conforme você os edita. Na produção, todos os arquivos CSS serão concatenados em um único arquivo `.css` reduzido na saída da compilação.

Se você está preocupado em usar a semântica específica do webpack, pode colocar todo o seu CSS diretamente em `src/index.css`. Ele ainda seria importado de `src/index.js`, mas você sempre pode remover essa importação se mais tarde migrar para uma ferramenta de construção diferente.
