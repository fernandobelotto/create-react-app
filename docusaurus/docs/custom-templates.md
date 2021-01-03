---
id: custom-templates
title: Modelos personalizados
---

> Nota: este recurso está disponível com `react-scripts@3.3.0` e superior.

Os modelos personalizados permitem que você selecione um modelo a partir do qual criar seu projeto, enquanto mantém todos os recursos do Create React App.

Você notará que os modelos personalizados são sempre nomeados no formato `cra-template- [nome-do-modelo]`, entretanto você só precisa fornecer o `template-name]` para o comando de criação.

Modelos de escopo também são suportados, sob o nome `@[nome-do-escopo]/cra-template` ou `@[nome-do-escopo]/cra-template-[nome-do-modelo]`, que podem ser instalados via `@[escopo]`e `@[escopo]/[nome-do-modelo]` respectivamente.

```sh
npx create-react-app my-app --template [template-name]
```

## Encontrar modelos personalizados

Enviamos dois modelos por padrão:

- [`cra-template`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template)
- [`cra-template-typescript`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)

No entanto, você pode encontrar muitos modelos de comunidade excelentes pesquisando por ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) no npm.

## Construindo um modelo

Se você estiver interessado em construir um modelo personalizado, primeiro dê uma olhada em como criamos [`cra-template`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template).

Um modelo deve ter a seguinte estrutura:

```
cra-template-[template-name]/
  README.md (para o npm)
  template.json
  package.json
  template/
    README.md (para projetos criados a partir deste modelo)
    gitignore
    public/
      index.html
    src/
      index.js (or index.tsx)
```

### Testando um modelo

Para testar um modelo localmente, passe o caminho do arquivo para o diretório de sua fonte de modelo usando o prefixo `file:`.

```sh
npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]
```

### A pasta `template`

Esta pasta é copiada para o diretório do aplicativo do usuário à medida que o Create React App é instalado. Durante este processo, o arquivo `gitignore` é renomeado para `.gitignore`.

Você pode adicionar quaisquer arquivos que desejar aqui, mas deve ter pelo menos os arquivos especificados acima.

### O arquivo `template.json`

Este é o arquivo de configuração do seu modelo. Como este é um novo recurso, mais opções serão adicionadas ao longo do tempo. Por enquanto, apenas uma chave `package` é suportada.

A chave `package` permite que você forneça quaisquer chaves/valores que você deseja adicionar ao `package.json` do novo projeto, como dependências e quaisquer scripts personalizados dos quais seu modelo dependa.

Abaixo está um exemplo de arquivo `template.json`:

```json
{
  "package": {
    "dependencies": {
      "eslint-plugin-jsx-a11y": "^6.2.3",
      "serve": "^11.2.0"
    },
    "scripts": {
      "serve": "serve -s build",
      "build-and-serve": "npm run build && npm run serve"
    },
    "eslintConfig": {
      "extends": ["react-app", "plugin:jsx-a11y/recommended"],
      "plugins": ["jsx-a11y"]
    }
  }
}
```

Quaisquer valores que você adicionar para `"dependencies"` e `"scripts"` serão mesclados com os padrões do Create React App. Os valores de quaisquer outras chaves serão usados ​​no estado em que se encontram, substituindo quaisquer padrões correspondentes do Create React App.

Por conveniência, sempre substituímos `npm run` por `yarn` em seus `"scripts"` personalizados, bem como em seu `README` quando os projetos são inicializados com yarn.
