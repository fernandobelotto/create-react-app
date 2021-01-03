---
id: developing-components-in-isolation
title: Desenvolvendo componentes isoladamente
---

Normalmente, em um aplicativo, você tem muitos componentes de UI e cada um deles tem muitos estados diferentes.
Por exemplo, um componente básico de botão pode ter os seguintes estados:

- Em estado normal, com uma label de texto.
- Em modo desativado.
- Em estado de carregamento.

Normalmente, é difícil ver esses estados sem executar um aplicativo de amostra ou alguns exemplos.


O Create React App não inclui nenhuma ferramenta para isso por padrão, mas você pode adicionar [Storybook for React](https://storybook.js.org) ([fonte](https://github.com/storybooks/storybook )) ou [React Styleguidist](https://react-styleguidist.js.org/) ([fonte](https://github.com/styleguidist/react-styleguidist)) ao seu projeto. **Estas são ferramentas de terceiros que permitem desenvolver componentes e ver todos os seus estados de forma isolada do seu aplicativo**.

![Demostração do Storybook para React](https://i.imgur.com/7CIAWpB.gif)

Você também pode implantar seu Storybook ou guia de estilo como um aplicativo estático. Dessa forma, todos em sua equipe podem visualizar e revisar diferentes estados de componentes de UI sem iniciar um servidor de back-end ou criar uma conta em seu aplicativo.

## Introdução ao Storybook

Storybook é um ambiente de desenvolvimento para componentes React. Ele permite que você navegue em uma biblioteca de componentes, visualize os diferentes estados de cada componente e desenvolva e teste componentes interativamente.

Execute o seguinte comando dentro do diretório do seu aplicativo:

```sh
npx -p @storybook/cli sb init
```

Depois disso, siga as instruções na tela.

Saiba mais sobre o React Storybook:

- [Aprender Storybook (tutorial)](https://learnstorybook.com)
- [Documentação](https://storybook.js.org/basics/introduction/)
- [Repositório no GitHub](https://github.com/storybooks/storybook)
- [Snapshot Testing UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) com Storybook + addon/storyshot

## Introdução ao Styleguidist

Styleguidist combina um guia de estilo, onde todos os seus componentes são apresentados em uma única página com sua documentação de props e exemplos de uso, com um ambiente para desenvolver componentes de forma isolada, semelhante ao Storybook. Em Styleguidist, você escreve exemplos em Markdown, onde cada fragmento de código é renderizado como um playground editável ao vivo.

Primeiro, instale o Styleguidist:

```sh
npm install --save react-styleguidist
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add react-styleguidist
```

Em seguida, adicione esses scripts ao seu `package.json`:

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

Em seguida, execute o seguinte comando dentro do diretório do seu aplicativo:

```sh
npm run styleguide
```

Depois disso, siga as instruções na tela.

Saiba mais sobre o React Styleguidist:

- [Repositório no GitHub](https://github.com/styleguidist/react-styleguidist)
- [Documentação](https://react-styleguidist.js.org/docs/getting-started.html)
