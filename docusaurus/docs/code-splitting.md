---
id: code-splitting
title: Code Splitting
---

Em vez de baixar o aplicativo inteiro antes que os usuários possam usá-lo, o Code Splitting (divisão de código) permite que você divida seu código em pequenos pedaços que você pode carregar sob demanda.

Esta configuração de projeto suporta code splitting via [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Sua [proposta](https://github.com/tc39/proposal-dynamic-import) está no estágio 4. A forma semelhante à função `import()` leva o nome do módulo como um argumento e retorna uma [`Promessa`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) que sempre resolve para o objeto de namespace do módulo.

Aqui está um exemplo:

## `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```

## `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Usa moduleA
      })
      .catch(err => {
        // Lidar com falha
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

Isso fará com que `moduleA.js` e todas as suas dependências exclusivas sejam um trecho separado que só carrega após o usuário clicar no botão 'Load'. Para obter mais informações sobre os blocos que são criados, consulte a seção [build de produção](production-build.md).

Você também pode usá-lo com a sintaxe `async` / `await` se preferir.

## Com React Router

Se você estiver usando o React Router, confira [este tutorial](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)

Verifique também a seção [Code Splitting](https://reactjs.org/docs/code-splitting.html) na documentação do React.
