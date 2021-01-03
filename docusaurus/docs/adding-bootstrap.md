---
id: adding-bootstrap
title: Adicionando Bootstrap
---

Embora você não precise usar nenhuma biblioteca específica para integrar o Bootstrap aos aplicativos React, geralmente é mais fácil do que tentar envolver os plug-ins jQuery do Bootstrap. [React Bootstrap](https://react-bootstrap.netlify.com/) é a opção mais popular que busca a paridade completa com o Bootstrap. [reactstrap](https://reactstrap.github.io/) também é uma boa escolha para projetos que procuram compilações menores em detrimento de alguns recursos.

O respectivo site de documentação de cada projeto possui instruções detalhadas para instalação e uso. Ambos dependem do arquivo css do Bootstrap, portanto, instale-o também:

```sh
npm install --save bootstrap
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add bootstrap
```

Importe o CSS do Bootstrap e, opcionalmente, o CSS do tema do Bootstrap no início do seu arquivo `src/index.js`:

```js
import 'bootstrap/dist/css/bootstrap.css';
// Coloque quaisquer outras importações abaixo para que o CSS dos seus
// componentes tenha precedência sobre os estilos padrão.
```

## Usando um tema personalizado

> Nota: este recurso está disponível com `react-scripts@2.0.0` e superior.

Às vezes, você pode precisar ajustar os estilos visuais do Bootstrap (ou pacote equivalente).

A partir de `react-scripts@2.0.0` você pode importar arquivos `.scss`. Isso torna possível usar as variáveis ​​integradas do Sass em um pacote para preferências de estilo globais.

Para habilitar o `scss` em Create React App, você precisará instalar o` node-sass`.

```sh
npm install --save node-sass
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add node-sass
```

Para personalizar o Bootstrap, crie um arquivo chamado `src/custom.scss` (ou similar) e importe a stylesheet de origem do Bootstrap. Adicione quaisquer substituições _antes_ dos arquivos importados. Você pode consultar a [documentação do Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables) para os nomes das variáveis ​​disponíveis.


```scss
// Substitui as variáveis ​​padrão antes da importação
$body-bg: #000;

// Importar Bootstrap e suas variáveis ​​padrão
@import '~bootstrap/scss/bootstrap.scss';
```

> ** Nota: ** Você deve prefixar as importações de `node_modules` com `~` conforme mostrado acima.

Finalmente, importe o arquivo `.scss` recém-criado em vez do Bootstrap `.css` padrão no início do seu arquivo `src/index.js`, por exemplo:

```javascript
import './custom.scss';
```
