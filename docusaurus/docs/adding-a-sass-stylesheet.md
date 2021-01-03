---
id: adding-a-sass-stylesheet
title: Adicionando Stylesheet Sass
sidebar_label: Adicionando Stylesheet Sass
---

> Nota: este recurso está disponível com `react-scripts@2.0.0` e superior.

Geralmente, recomendamos que você não reutilize as mesmas classes CSS em componentes diferentes. Por exemplo, em vez de usar uma classe CSS `.Button` nos componentes `<AcceptButton>` e `<RejectButton>`, recomendamos criar um componente `<Button>` com seus próprios estilos `.Button`, que ambos `<AcceptButton> `e` <RejectButton>` podem renderizar (mas [não herdar](https://facebook.github.io/react/docs/composition-vs-inheritance.html)).

Seguir essa regra geralmente torna os pré-processadores CSS menos úteis, pois recursos como mixins e aninhamento são substituídos pela composição de componentes. Você pode, entretanto, integrar um pré-processador CSS se achar que é valioso.

Para usar Sass, primeiro instale `node-sass`:

```sh
$ npm install node-sass --save
$ # ou
$ yarn add node-sass
```

Agora você pode renomear `src/App.css` para `src/App.scss` e atualizar `src/App.js` para importar `src/App.scss`.
Este arquivo e qualquer outro arquivo será compilado automaticamente se importado com a extensão `.scss` ou `.sass`.

Para compartilhar variáveis ​​entre arquivos Sass, você pode usar as importações Sass. Por exemplo, `src/App.scss` e outros arquivos de estilo de componente podem incluir `@import "./shared.scss";` com definições de variáveis.

Isso permitirá que você faça importações como

```scss
@import 'styles/_colors.scss'; // assumindo um diretório de estilos em src /
@import '~nprogress/nprogress'; // importando um arquivo css do nprogress node module
```

> **Nota:** Você deve prefixar as importações de `node_modules` com `~` conforme mostrado acima.

`node-sass` também suporta a variável `SASS_PATH`.

Para usar importações relativas a um caminho que você especificar, e de `node_modules` sem adicionar o prefixo `~`, você pode adicionar um [ arquivo `.env](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env) na raiz do projeto com a variável `SASS_PATH=node_modules:src`. Para especificar mais diretórios, você pode adicioná-los a `SASS_PATH` separados por um `:`como `path1: path2:path3`.

Se você definir `SASS_PATH=node_modules:src`, isso permitirá que você faça importações como
```scss
@import 'styles/colors'; // assumindo um diretório de estilos em src/, onde o arquivo parcial _colors.scss existe.
@import 'nprogress/nprogress'; // importar um arquivo css do modulo nprogress
```

> **Nota:** Para sistema operacional Windows, use a sintaxe abaixo
>
> ```
> SASS_PATH=./node_modules;./src
> ```

> **Dica:** você também pode optar por usar este recurso com [módulos CSS](add-a-css-modules-stylesheet.md) também!

> **Observação:** se você estiver usando o Flow, substitua a configuração [module.file_ext](https://flow.org/en/docs/config/options/#toc-module-file-ext-string) em seu `.flowconfig` para que ele reconheça os arquivos `.sass` ou `.scss`. Você também precisará incluir as configurações padrão `module.file_ext` para os arquivos `.js`, `.jsx`, `.mjs` e `.json`.
>
> ```
> [options]
> module.file_ext=.js
> module.file_ext=.jsx
> module.file_ext=.mjs
> module.file_ext=.json
> module.file_ext=.sass
> module.file_ext=.scss
> ```
