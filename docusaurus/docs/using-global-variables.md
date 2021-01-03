---
id: using-global-variables
title: Usando Variáveis ​​Globais
---

Quando você inclui um script no arquivo HTML que define variáveis ​​globais e tenta usar uma dessas variáveis ​​no código, o linter reclamará porque não pode ver a definição da variável.

Você pode evitar isso lendo a variável global explicitamente do objeto `window`, por exemplo:

```js
const $ = window.$;
```

Isso deixa claro que você está usando uma variável global intencionalmente, e não por causa de um erro de digitação.

Alternativamente, você pode forçar o linter a ignorar qualquer linha adicionando `// eslint-disable-line` depois dela.
