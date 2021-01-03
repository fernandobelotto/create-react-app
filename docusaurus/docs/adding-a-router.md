---
id: adding-a-router
title: Adicionando um Router
---

O aplicativo Create React não prescreve uma solução de roteamento específica, mas [React Router](https://reacttraining.com/react-router/web/) é a mais popular.

Para adicioná-lo, execute:

```sh
npm install --save react-router-dom
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add react-router-dom
```

Para experimentar, exclua todo o código em `src/App.js` e substitua-o por qualquer um dos exemplos em seu site. O [Exemplo básico](https://reacttraining.com/react-router/web/example/basic) é um bom lugar para começar.

Observe que [você pode precisar configurar seu servidor de produção para suportar o roteamento do lado do cliente](deployment.md#serving-apps-with-client-side-routing) antes de implantar seu aplicativo.
