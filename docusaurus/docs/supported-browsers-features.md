---
id: supported-browsers-features
title: Navegadores e Funcionalidades compatíveis
sidebar_label: Navegadores e Funcionalidades compatíveis
---

## Navegadores Suportados

By default, the generated project supports all modern browsers. Support for Internet Explorer 9, 10, and 11 requires polyfills. For a set of polyfills to support older browsers, use [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

## Recursos de linguagem suportados

Este projeto oferece suporte a um superconjunto do padrão JavaScript mais recente. Além dos recursos de sintaxe [ES6](https://github.com/lukehoban/es6features), ele também suporta:

- [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018).
- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 4 proposal)
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html), [Flow](./adding-flow) and [TypeScript](./adding-typescript).

Saiba mais sobre [diferentes fases da proposta](https://tc39.github.io/process-document/).

Embora recomendemos o uso de propostas experimentais com algum cuidado, o Facebook usa intensamente esses recursos no código do produto, então pretendemos fornecer [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) se qualquer uma dessas propostas mudar no futuro.

Observe que **este projeto não inclui [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)** por padrão.

Se você usar qualquer outro recurso ES6+ que precise de **suporte de tempo de execução** (como `Array.from()` ou `Symbol`), certifique-se de [incluir os polyfills apropriados manualmente](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md), ou que os navegadores que você está direcionando já os suportam.

## Configurando navegadores compatíveis

Por padrão, o projeto gerado inclui uma configuração [`browserslist`](https://github.com/browserslist/browserslist) em seu arquivo `package.json` para atingir uma ampla gama de navegadores com base no uso global (`> 0,2%`) para compilações de produção e navegadores modernos para desenvolvimento. Isso proporciona uma boa experiência de desenvolvimento, especialmente ao usar recursos de linguagem como async/await, mas ainda oferece alta compatibilidade com muitos navegadores em produção.

A configuração `browserslist` controla a saída do JavaScript para que o código emitido seja compatível com os navegadores especificados. A lista `production` será usada ao criar um build de produção executando o script `build`, e a lista `development` será usada ao executar o script `start`. Você pode usar [https://browserl.ist](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all) para ver os navegadores suportados por sua `lista de navegadores` configurada.

Aqui está um exemplo de `browserslist` que é especificado em `package.json`:

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

> Observe que isso não inclui polyfills automaticamente para você. Você ainda precisará preencher os recursos de linguagem (veja acima) conforme necessário com base nos navegadores que você oferece suporte.

> Ao editar a configuração `browserslist`, você pode notar que suas alterações não são detectadas imediatamente. Isso ocorre devido a um [problema no babel-loader](https://github.com/babel/babel-loader/issues/690) não detectar a mudança em seu `package.json`. Uma solução rápida é deletar a pasta `node_modules/.cache` e tentar novamente.
