---
id: importing-a-component
title: Importando um Componente
---

Esta configuração de projeto suporta módulos ES6 graças ao webpack.

Enquanto você ainda pode usar `require()` e `module.exports`, nós encorajamos você a usar ao invés [`import` e `export`](http://exploringjs.com/es6/ch_modules.html).

Por exemplo:

## `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Não se esqueça de usar o export dafault!
```

## `DangerButton.js`

```js
import React, { Component } from 'react';
import Button from './Button'; // Importe um componente de outro arquivo

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Esteja ciente da [diferença entre as exportações default e nomeadas](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). É uma fonte comum de erros.

Sugerimos que você continue usando importações e exportações default quando um módulo exportar apenas uma coisa (por exemplo, um componente). Isso é o que você obtém quando usa `export default Button` e `import Button from './Button'`.

As exportações nomeadas são úteis para módulos utilitários que exportam várias funções. Um módulo pode ter no máximo uma exportação padrão e quantas exportações nomeadas você desejar.

Saiba mais sobre os módulos ES6:

- [Quando usar as chaves?](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
- [Explorando ES6: Módulos](http://exploringjs.com/es6/ch_modules.html)
- [Compreendendo ES6: Módulos](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## Importações absolutas

Você pode configurar seu aplicativo para suportar a importação de módulos usando caminhos absolutos. Isso pode ser feito configurando um arquivo `jsconfig.json` ou `tsconfig.json` na raiz do seu projeto. Se estiver usando o TypeScript em seu projeto, você já terá um arquivo `tsconfig.json`.

Abaixo está um exemplo de arquivo `jsconfig.json` para um projeto JavaScript. Você pode criar o arquivo se ele ainda não existir:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```
Se você estiver usando TypeScript, você pode definir a configuração `baseUrl` dentro de `compilerOptions` do arquivo `tsconfig.json` do seu projeto.

Agora que você configurou seu projeto para suportar importações absolutas, se você deseja importar um módulo localizado em `src/components/Button.js`, você pode importar o módulo assim:

```js
import Button from 'components/Button';
```
Para obter mais informações sobre esses arquivos de configuração, consulte a documentação [de referência jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig) e [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
