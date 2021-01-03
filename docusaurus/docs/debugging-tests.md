---
id: debugging-tests
title: Depurando testes
sidebar_label: Depurando testes
---

Existem várias maneiras de configurar um depurador para seus testes Jest. Cobrimos a depuração no Chrome e [Visual Studio Code](https://code.visualstudio.com/).

## Depuração de testes no Chrome

Adicione o seguinte à seção `scripts` no `package.json` do seu projeto

```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"
  }
```

Coloque as instruções `debugger;` em qualquer teste e execute:

```sh
$ npm run test:debug
```

Isso iniciará a execução de seus testes de Jest, mas fará uma pausa antes de executar para permitir que um depurador se conecte ao processo.

Abra o seguinte no Chrome

```
about:inspect
```

Depois de abrir esse link, as Ferramentas do desenvolvedor do Chrome serão exibidas. Selecione `inspect` em seu processo e um ponto de interrupção será definido na primeira linha do script react (isso é feito para lhe dar tempo para abrir as ferramentas do desenvolvedor e para evitar que Jest seja executado antes que você tenha tempo para fazê-lo). Clique no botão que se parece com um botão "play" no lado superior direito da tela para continuar a execução. Quando Jest executa o teste que contém a instrução do depurador, a execução pausa e você pode examinar o escopo atual e a pilha de chamadas (callstack).

> Nota: a opção --runInBand cli garante que o Jest execute o teste no mesmo processo em vez de gerar processos para testes individuais. Normalmente, o Jest paraleliza as execuções de teste entre processos, mas é difícil depurar muitos processos ao mesmo tempo.

## Depuração de testes no Visual Studio Code

Depuração de testes do Jest têm suporte imediato para [Visual Studio Code](https://code.visualstudio.com).

Use o seguinte arquivo de configuração [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations):

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "env": { "CI": "true" },
      "disableOptimisticBPs": true
    }
  ]
}
```
