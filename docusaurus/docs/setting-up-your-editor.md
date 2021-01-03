---
id: setting-up-your-editor
title: Configurando Seu Editor
sidebar_label: Configuração de Editor
---

O Create React App vem com várias ferramentas que melhoram a experiência de edição - se configurado corretamente. Aqui estão algumas dicas para maximizar sua produtividade:

## Realce de sintaxe

Para configurar o realce de sintaxe em seu editor de texto favorito, vá para a [página de documentação relevante do Babel](https://babeljs.io/docs/editors) e siga as instruções. Alguns dos editores mais populares são cobertos.

## Exibindo Output do Lint no Editor

> Nota: este recurso está disponível com `react-scripts@0.2.0` e superior.

> Já funciona direto para projetos recém-criados com `react-scripts @ 2.0.3` e superior.

> Também funciona apenas com npm 3 ou superior.

Alguns editores, incluindo Sublime Text, Atom e Visual Studio Code, fornecem plug-ins para ESLint.

Eles não são necessários para linting. Você deve ver a saída do linter diretamente no seu terminal, bem como no console do navegador. Se você preferir que os resultados do lint apareçam no seu editor, certifique-se de instalar o plugin/extensão do ESLint.

Observe que, mesmo se você personalizar sua configuração ESLint, essas alterações **afetarão apenas a integração do editor**. Eles não afetarão o terminal e a saída do lint no navegador. Isso ocorre porque Create React App intencionalmente fornece um conjunto mínimo de regras que localizam erros comuns.

Se você deseja impor um estilo de codificação para seu projeto, considere usar [Prettier](https://github.com/jlongster/prettier) em vez de regras de estilo ESLint.

### Estendendo ou substituindo a configuração padrão do ESLint

Você pode estender nossa configuração ESLint básica ou substituí-la completamente, se necessário.

Existem algumas coisas para lembrar:

1. É altamente recomendável estender a configuração básica, pois removê-la pode apresentar problemas difíceis de encontrar.
2. Ao trabalhar com TypeScript, você precisará fornecer um objeto `overrides` para regras que devem _apenas_ almejar arquivos TypeScript.
3. É importante notar que quaisquer regras definidas como `"erro"` interromperão a construção do projeto.

In the below example:
No exemplo abaixo:

- a configuração de base foi estendida por uma configuração ESLint compartilhada,
- uma nova regra foi definida que se aplica a todos os arquivos JavaScript e TypeScript, e
- uma nova regra foi definida que visa apenas arquivos TypeScript.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "shared-config"],
    "rules": {
      "additional-rule": "warn"
    },
    "overrides": [
      {
        "files": ["**/*.ts?(x)"],
        "rules": {
          "additional-typescript-only-rule": "warn"
        }
      }
    ]
  }
}
```

## Depurando no Editor

**This feature is currently only supported by [Visual Studio Code](https://code.visualstudio.com) and [WebStorm](https://www.jetbrains.com/webstorm/).**
**Este recurso é atualmente compatível apenas com [Visual Studio Code](https://code.visualstudio.com) e [WebStorm](https://www.jetbrains.com/webstorm/). **

O Visual Studio Code e o WebStorm oferecem suporte à depuração pronto para uso com o Create React App. Isso permite que você, como desenvolvedor, escreva e depure seu código React sem sair do editor e, o mais importante, permite que você tenha um fluxo de trabalho de desenvolvimento contínuo, onde a troca de contexto é mínima, pois você não precisa alternar entre as ferramentas.

### Visual Studio Code

Você precisa ter a versão mais recente do [VS Code](https://code.visualstudio.com) e da extensão do [Chrome Debugger ](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) instalados.

Em seguida, adicione o bloco abaixo ao seu arquivo `launch.json` e coloque-o dentro da pasta `.vscode` no diretório raiz do seu aplicativo.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

> Observação: o URL pode ser diferente se você fez ajustes por meio das [variáveis ​​de ambiente HOST ou PORT](advanced-configuration.md).

Inicie seu aplicativo executando `npm start` e inicie a depuração no VS Code pressionando `F5` ou clicando no ícone de depuração verde. Agora você pode escrever código, definir pontos de interrupção, fazer alterações no código e depurar seu código recém-modificado - tudo no seu editor.

Está tendo problemas com o Debugging no VS Code? Consulte o [guia de solução de problemas](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troutroubleshooting).

### WebStorm

Você precisa ter [WebStorm](https://www.jetbrains.com/webstorm/) e a extensão do Chrome da [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) instalada.

No menu WebStorm `Executar` selecione `Editar configurações...`. Em seguida, clique em `+` e selecione `JavaScript Debug`. Cole `http://localhost:3000` no campo URL e salve a configuração.

> Observação: o URL pode ser diferente se você fez ajustes por meio das [variáveis ​​de ambiente HOST ou PORT](advanced-configuration.md).

Inicie seu aplicativo executando `npm start` e pressione `^D` no macOS ou `F9` no Windows e Linux ou clique no ícone de depuração verde para iniciar a depuração no WebStorm.

Da mesma forma, você pode depurar seu aplicativo no IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro e RubyMine.

## Formatando Código Automaticamente

Prettier é um formatador de código opinativo com suporte para JavaScript, CSS e JSON. Com o Prettier, você pode formatar o código que escreve automaticamente para garantir um estilo de código em seu projeto. Veja a [página do Prettier no GitHub](https://github.com/prettier/prettier) para mais informações e veja esta [página para vê-lo em ação](https://prettier.io/playground/).

Para formatar seu código sempre que fizermos um commit no git, precisamos instalar as seguintes dependências:

```sh
npm install --save husky lint-staged prettier
```
Alternativamente, você pode usar `yarn`:

```sh
yarn add husky lint-staged prettier
```

- `husky` torna possível usar githooks como se fossem scripts npm.
- `lint-staged` nos permite executar scripts em arquivos testados no git. Veja esta [postagem do blog sobre lint-staged para saber mais sobre ele](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8).
- `prettier` é o formatador JavaScript que rodaremos antes dos commits.

Agora podemos ter certeza de que cada arquivo está formatado corretamente adicionando algumas linhas ao `package.json` na raiz do projeto.

Adicione o seguinte campo à seção `package.json`:

```diff
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  }
```

Em seguida, adicionamos um campo 'lint-staged' ao `package.json`, por exemplo:

```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write"
+   ]
+ },
  "scripts": {
```

Agora, sempre que você fizer um commit, Prettier irá formatar os arquivos alterados automaticamente. Você também pode executar `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tx,json,css,scss,md}"` para formatar todo o seu projeto pela o primeira vez.

Em seguida, você pode querer integrar o Prettier em seu editor favorito. Leia a seção sobre [Integração do Editor](https://prettier.io/docs/en/editors.html) na página do Prettier no GitHub.
