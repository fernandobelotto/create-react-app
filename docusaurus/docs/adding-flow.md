---
id: adding-flow
title: Adicionando Flow
---

Flow é um verificador de tipo estático que ajuda a escrever código com menos bugs. Confira esta [introdução ao uso de tipos estáticos em JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb) se você for novo neste conceito.

Versões recentes do [Flow](https://flow.org/) funcionam com projetos Create React App prontos para uso.

Para adicionar o Flow a um projeto Create React App, siga estas etapas:

1. Execute `npm install --save flow-bin` (ou` yarn add flow-bin`).
2. Adicione `"flow": "flow"` à seção `scripts` do seu `package.json`.
3. Execute `npm run flow init` (ou `yarn flow init`) para criar um [arquivo `.flowconfig`](https://flow.org/en/docs/config/) no diretório raiz.
4. Adicione `// @flow` a qualquer arquivo que deseja checar a tipagem (por exemplo, `src/App.js`).

Agora você pode executar `npm run flow` (ou `yarn flow`) para verificar se há erros de tipo nos arquivos.
Opcionalmente, você pode ativar uma extensão para seu IDE, como [Flow Language Support](https://github.com/flowtype/flow-for-vscode) para Visual Studio Code, ou aproveitar o padrão Language Server Protocol (por exemplo, [vim LSP](https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow)) para obter dicas enquanto você digita.

Se desejar usar [importação absolutas](/docs/importing-a-component#absolute-imports) com o Flow,
certifique-se de adicionar a seguinte linha ao seu `.flowconfig` para tornar o Flow ciente disso:

```diff
  [options]
+ module.name_mapper='^\([^\.].*\)$' -> '<PROJECT_ROOT>/src/\1'
```
Para saber mais sobre o Flow, verifique [sua documentação](https://flow.org/).
