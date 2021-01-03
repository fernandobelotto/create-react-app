---
id: adding-typescript
title: Adicionando TypeScript
---

> Nota: este recurso está disponível com `react-scripts@2.1.0` e superior.

[TypeScript](https://www.typescriptlang.org/) é um superconjunto tipado de JavaScript que compila para JavaScript simples.

## Instalação

Para iniciar um novo projeto Create React App com [TypeScript](https://www.typescriptlang.org/), você pode executar:

```sh
npx create-react-app my-app --template typescript

# ou

yarn create react-app my-app --template typescript
```

> Se você instalou anteriormente `create-react-app` globalmente via `npm install -g create-react-app`, recomendamos que você desinstale o pacote usando `npm uninstall -g create-react-app` ou `yarn global remove create-react-app` para garantir que `npx` sempre use a versão mais recente.
>
> Instalações globais de `create-react-app` não são mais suportadas.

Para adicionar [TypeScript](https://www.typescriptlang.org/) a um projeto Create React App existente, primeiro instale-o:

```sh
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# ou

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

Em seguida, renomeie qualquer arquivo para ser um arquivo TypeScript (por exemplo, `src/index.js` para `src/index.tsx`) e **reinicie seu servidor de desenvolvimento**!

Erros de tipo aparecerão no mesmo console do build. Você terá que corrigir esses erros de tipo antes de continuar o desenvolvimento ou construir seu projeto. Para configuração avançada, [veja aqui](advanced-configuration.md).

## Primeiros passos com TypeScript e React

Você não é obrigado a fazer um [arquivo `tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), um será feito para você. Você tem permissão para editar a configuração do TypeScript gerada.

- [TypeScript Handbook](https://www.typescriptlang.org/)
- [TypeScript Example on React](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) tem uma boa visão geral sobre como usar React com TypeScript

## Solução de problemas

Se o seu projeto não foi criado com TypeScript habilitado, npx pode estar usando uma versão em cache de `create-react-app`. Remova as versões instaladas anteriormente com `npm uninstall -g create-react-app` ou `yarn global remove create-react-app` (see [#6119](https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035)).

Se você estiver usando [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript/), consulte [this blog post](https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/) para obter instruções sobre como migrar para Create React App.

Enums e namespaces constantes não são suportados, você pode aprender sobre as restrições de [usando Babel com TypeScript aqui](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats).
