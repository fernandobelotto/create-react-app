---
id: adding-relay
title: Adicionando Relay
---

O Relay é uma framrwork para a construção de aplicativos React baseados em dados e com tecnologia GraphQL. A versão atual do Relay funciona com projetos Create React App prontos para uso usando macros Babel. Configure seu projeto como mostrado na [documentação do Relay](https://facebook.github.io/relay/), então certifique-se de ter uma versão do plugin babel que fornece a macro.

Para adicioná-lo, execute:

```sh
npm install --save babel-plugin-relay
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add babel-plugin-relay
```

Então, sempre que você usar a tag de modelo `graphql`, importe a macro:

```js
import graphql from 'babel-plugin-relay/macro';
// ao invés de:
//   import { graphql } from "babel-plugin-relay"

graphql`
  query UserQuery {
    viewer {
      id
    }
  }
`;
```

Para saber mais sobre o Relay, verifique [sua documentação](https://facebook.github.io/relay/).
