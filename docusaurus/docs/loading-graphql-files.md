---
id: loading-graphql-files
title: Carregando arquivos .graphql
sidebar_label: Carregando arquivos .graphql
---

Para carregar os arquivos `.gql` e `.graphql`, primeiro instale os pacotes [`graphql`](https://www.npmjs.com/package/graphql) e [`graphql.macro`](https://www.npmjs.com/package/graphql.macro) executando:

```sh
npm install --save graphql graphql.macro
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add graphql graphql.macro
```

Então, sempre que você quiser carregar arquivos `.gql` ou `.graphql`, importe o `loader` do pacote de macro:

```js
import { loader } from 'graphql.macro';

const query = loader('./foo.graphql');
```

E seus resultados são automaticamente embutidos! Isso significa que se o arquivo acima, `foo.graphql`, contém o seguinte:

```graphql
query {
  hello {
    world
  }
}
```
O exemplo anterior se transforma em:

```javascript
const query = {
  'kind': 'Document',
  'definitions': [{
    ...
  }],
  'loc': {
    ...
    'source': {
      'body': '\\\\n  query {\\\\n    hello {\\\\n      world\\\\n    }\\\\n  }\\\\n',
      'name': 'GraphQL request',
      ...
    }
  }
};
```

Você também pode usar a tag de modelo `gql` da mesma forma que usaria a versão não macro do pacote `graphql-tag` com o benefício adicional de resultados de análise inline.

```js
import { gql } from 'graphql.macro';
 
const query = gql`
  query User {
    user(id: 5) {
      lastName
      ...UserEntry1
    }
  }
`;
```
