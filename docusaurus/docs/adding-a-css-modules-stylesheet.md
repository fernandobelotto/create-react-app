---
id: adding-a-css-modules-stylesheet
title: Adicionando uma stylesheet de CSS Modules
sidebar_label: Adicionando CSS Modules
---

> Nota: este recurso está disponível com `react-scripts@2.0.0` e superior.

Este projeto suporta [Módulos CSS](https://github.com/css-modules/css-modules) junto com folhas de estilo regulares usando a convenção de nomenclatura de arquivo `[name].module.css`. Os Módulos CSS permitem o escopo do CSS criando automaticamente um nome de classe exclusivo do formato `[nome do arquivo]\_[nome da classe]\_\_[hash]`.

> **Dica:** se você quiser pré-processar uma folha de estilo com o Sass, certifique-se de [seguir as instruções de instalação](adicionar-a-sass-stylesheet.md) e alterar a extensão do arquivo da folha de estilo da seguinte maneira: `[nome].module.scss` ou `[nome].module.sass`.

Os módulos CSS permitem que você use o mesmo nome de classe CSS em arquivos diferentes sem se preocupar com conflitos de nomes. Saiba mais sobre os CSS Modules [aqui](https://css-tricks.com/css-modules-part-1-need/).

## `Button.module.css`

```css
.error {
  background-color: red;
}
```

## `another-stylesheet.css`

```css
.error {
  color: red;
}
```

## `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // Importar stylesheet de CSS Modules
import './another-stylesheet.css'; // Importar uma stylesheet regular

class Button extends Component {
  render() {
    // referência como um objeto js
    return <button className={styles.error}>Error Button</button>;
  }
}
```

## Result

Sem confrontos com outros nomes de classe `.error`

```html
<!-- Este botão tem fundo vermelho, mas não texto vermelho -->
<button class="Button_error_ax7yz">Error Button</button>
```
**Este é um recurso opcional.** Stylesheets `<link>` regulares e arquivos CSS são totalmente suportados. Módulos CSS são ativados para arquivos que terminam com a extensão `.module.css`.
