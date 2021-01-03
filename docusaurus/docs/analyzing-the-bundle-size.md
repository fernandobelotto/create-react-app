---
id: analyzing-the-bundle-size
title: Analisando o tamanho do bundle
sidebar_label: Analisando o tamanho do bundle
---

[Source map explorer](https://www.npmjs.com/package/source-map-explorer) analisa pacotes JavaScript usando os mapas de origem (source maps). Isso ajuda a entender de onde vem o inchaço do código (code bloat).

To add Source map explorer to a Create React App project, follow these steps:
Para adicionar o Source map explorer a um projeto Create React App, siga estas etapas:

```sh
npm install --save source-map-explorer
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add source-map-explorer
```

Então, em `package.json`, adicione a seguinte linha aos `scripts`:

```diff
   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```

Em seguida, para analisar o bundle, execute a construção de produção e, em seguida, execute o script de análise.

```sh
npm run build
npm run analyze
```
