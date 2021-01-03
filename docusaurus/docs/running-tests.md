---
id: running-tests
title: Executando testes
---

> Nota: este recurso está disponível com `react-scripts@0.3.0` e superior.

> [Leia o guia de migração para aprender como habilitá-lo em projetos mais antigos!](Https://github.com/facebook/create-react-app/blob/master/CHANGELOG-0.x.md#migrating-from-023-a-030)

O Create React App usa [Jest](https://jestjs.io/) como executor de teste. Para se preparar para essa integração, fizemos uma [grande reformulação](https://jestjs.io/blog/2016/09/01/jest-15.html) do Jest, então, se você ouviu coisas ruins sobre isso anos atrás, dê outra tentativa.

Jest é um runner baseado em Node. Isso significa que os testes sempre são executados em um ambiente Node e não em um navegador real. Isso nos permite habilitar a velocidade de iteração rápida e evitar falhas.

Embora Jest forneça variáveis globais de navegador, como `window` graças a [jsdom](https://github.com/tmpvar/jsdom), eles são apenas aproximações do comportamento real do navegador. Jest se destina a ser usado para testes unitários de sua lógica e seus componentes, em vez de peculiaridades do DOM.

Recomendamos que você use uma ferramenta separada para testes de ponta a ponta do navegador, se necessário. Eles estão além do escopo do Create React App.

## Convenções de nome de arquivo

Jest procurará arquivos de teste com qualquer uma das seguintes convenções de nomenclatura populares:

- Arquivos com sufixo `.js` em pastas `__tests__`.
- Arquivos com sufixo `.test.js`.
- Arquivos com sufixo `.spec.js`.

Os arquivos `.test.js` / `.spec.js` (ou as pastas `__tests__`) podem ser localizados em qualquer profundidade na pasta `src`.

Recomendamos colocar os arquivos de teste (ou pastas `__tests__`) ao lado do código que eles estão testando para que as importações relativas pareçam menores. Por exemplo, se `App.test.js` e `App.js` estão na mesma pasta, o teste só precisa `importar App de './App'` em vez de um longo caminho relativo. A colocação também ajuda a encontrar testes mais rapidamente em projetos maiores.

## Interface da Linha de comando (CLI)

Ao executar o `npm test`, o Jest será iniciado no modo de observação <sup>\*</sup>. Cada vez que você salva um arquivo, ele irá reexecutar os testes, como `npm start` recompila o código.

O watcher inclui uma interface de linha de comando interativa com a capacidade de executar todos os testes ou focar em um padrão de pesquisa. Ele foi projetado dessa forma para que você possa mantê-lo aberto e desfrutar de novas execuções rápidas. Você pode aprender os comandos da nota "Observar uso" que o observador imprime após cada execução:

![Jest watch mode](https://jestjs.io/img/blog/15-watch.gif)

> \*Although we recommend running your tests in watch mode during development, you can disable this behavior by passing in the `--watchAll=false` flag. In most CI environments, this is handled for you (see [On CI servers](#on-ci-servers)).
> \*Embora recomendemos executar seus testes no modo de observação durante o desenvolvimento, você pode desabilitar este comportamento passando o sinalizador `--watchAll=false`. Na maioria dos ambientes de CI, isso é feito para você (consulte [Em servidores de CI](#em-servidores-ci)).

## Integração de controle de versão

Por padrão, quando você executa o `npm test`, o Jest só executa os testes relacionados aos arquivos alterados desde o último commit. Esta é uma otimização projetada para fazer seus testes serem executados mais rapidamente, independentemente de quantos testes você tenha. No entanto, presume que você não costuma enviar o código que não passa nos testes.

Jest sempre mencionará explicitamente que só executou testes relacionados aos arquivos alterados desde o último commit. Você também pode pressionar `a` no modo de observação para forçar Jest a executar todos os testes.

O Jest sempre executará todos os testes em um servidor de [integração contínua](#integraçãoicontínua) ou se o projeto não estiver dentro de um repositório Git ou Mercurial.

## Escrevendo testes

Para criar testes, adicione os blocos `it()` (ou `test()`) com o nome do teste e seu código. Você pode opcionalmente envolvê-los em blocos `describe()` para agrupamento lógico, mas isso não é necessário nem recomendado.

Jest fornece uma função global `expect()` embutida para fazer asserções. Um teste básico pode ser assim:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```
Todos os matchers `expect()` suportados pelo Jest são [amplamente documentados aqui](https://jestjs.io/docs/en/expect.html#content).

Você também pode usar [`jest.fn()` e `expect(fn).toBeCalled()`](https://jestjs.io/docs/en/expect.html#tohavebeencalled) para criar “espiões” ou simulação funções.

## Testando Componentes

Existe um amplo espectro de técnicas de teste de componentes. Eles variam de um “teste de fumaça” verificando se um componente é renderizado sem lançar, para renderização superficial e testar algumas das saídas, para renderização completa e testar o ciclo de vida do componente e mudanças de estado.

Diferentes projetos escolhem diferentes compensações de teste com base na frequência de alteração dos componentes e na quantidade de lógica que eles contêm. Se você ainda não decidiu uma estratégia de teste, recomendamos que comece criando testes básicos de fumaça para seus componentes:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

Este teste monta um componente e certifica-se de que ele não foi lançado durante a renderização. Testes como esse fornecem muito valor com muito pouco esforço, portanto, são ótimos como ponto de partida, e este é o teste que você encontrará em `src/App.test.js`.

Ao encontrar bugs causados ​​pela alteração de componentes, você obterá um insight mais profundo sobre quais partes deles vale a pena testar em seu aplicativo. Este pode ser um bom momento para introduzir testes mais específicos, afirmando resultados ou comportamentos esperados específicos.

### React Testing Library

Se você deseja testar componentes isolados dos componentes filhos que eles renderizam, recomendamos o uso de `react-testing-library`. [`react-testing-library`](https://github.com/testing-library/react-testing-library) é uma biblioteca para testar componentes React de uma forma que se assemelha à forma como os componentes são usados ​​pelos usuários finais. Ele é adequado para testes unitários, integração e ponta a ponta de componentes e aplicativos React. Ele funciona mais diretamente com nós DOM e, portanto, é recomendado usar com [`jest-dom`](https://github.com/testing-library/jest-dom) para asserções aprimoradas.

Para instalar `react-testing-library` e `jest-dom`, você pode executar:

```sh
npm install --save @testing-library/react @testing-library/jest-dom
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add @testing-library/react @testing-library/jest-dom
```

If you want to avoid boilerplate in your test files, you can create a [`src/setupTests.js`](#initializing-test-environment) file:
Se você quiser evitar boilerplate em seus arquivos de teste, você pode criar um arquivo [`src/setupTests.js`](#iniciando-o-ambiente-de-testes):

```js
// react-testing-library renderiza seus componentes para document.body,
// isto adiciona asserções personalizadas de jest-dom
import '@testing-library/jest-dom';
```

Aqui está um exemplo do uso de `react-testing-library` e `jest-dom` para testar se o componente `<App />` renderiza "Learn React".

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
```
Saiba mais sobre os utilitários fornecidos pela `react-testing-library` para facilitar o teste de interações assíncronas, bem como a seleção de elementos de formulário da [documentação da `react-testing-library`](https://testing-library.com/react) e [exemplos](https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples).

## Usando Bibliotecas de Asserção de Terceiros

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest](https://github.com/facebook/jest/issues/new), and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX](https://github.com/facebook/jest/pull/1566).
Recomendamos que você use `expect()` para asserções e `jest.fn()` para espiões. Se você estiver tendo problemas com eles, [arquive-os contra Jest](https://github.com/facebook/jest/issues/new) e nós os corrigiremos. Pretendemos continuar a torná-los melhores para o React, suportando, por exemplo, [elementos do React pretty-printing como JSX](https://github.com/facebook/jest/pull/1566).

No entanto, se você estiver acostumado com outras bibliotecas, como [Chai](https://www.chaijs.com/) e [Sinon](https://sinonjs.org/), ou se já houver código usando-as que você gostaria de transferir, você pode importá-los normalmente desta forma:

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

e, em seguida, use-os em seus testes como você faz normalmente.

## Inicializando o ambiente de teste

> Nota: este recurso está disponível com `react-scripts@0.4.0` e superior.

Se seu aplicativo usa uma API de navegador que você precisa simular em seus testes ou se você precisa de uma configuração global antes de executar seus testes, adicione `src/setupTests.js` ao seu projeto. Ele será executado automaticamente antes de executar seus testes.

Por exemplo:

### `src/setupTests.js`

```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
```

> Nota: Tenha em mente que se você decidir "ejetar" antes de criar `src/setupTests.js`, o arquivo `package.json` resultante não conterá nenhuma referência a ele, então você deve criar manualmente a propriedade `setupFilesAfterEnv` na configuração do Jest, algo como o seguinte:

> ```js
> "jest": {
>   // ...
>   "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"]
>  }
> ```

## Focando e Excluindo Testes

Você pode substituir `it()` por `xit()` para excluir temporariamente a execução de um teste.

Da mesma forma, `fit()` permite que você se concentre em um teste específico sem executar nenhum outro teste.

## Relatório de cobertura

Jest tem um relator de cobertura integrado que funciona bem com ES6 e não requer configuração.

Execute `npm test -- --coverage` (observe o extra `--` no meio) para incluir um relatório de cobertura como este:

![coverage report](https://i.imgur.com/5bFhnTS.png)

Observe que os testes são executados muito mais lentamente com cobertura, portanto, é recomendável executá-los separadamente do fluxo de trabalho normal.

### Configuração

A configuração de cobertura Jest padrão pode ser substituída adicionando qualquer uma das seguintes chaves suportadas a uma configuração Jest em seu package.json.

Substituições suportadas:

- [`clearMocks`](https://jestjs.io/docs/en/configuration.html#clearmocks-boolean)
- [`collectCoverageFrom`](https://jestjs.io/docs/en/configuration.html#collectcoveragefrom-array)
- [`coverageReporters`](https://jestjs.io/docs/en/configuration.html#coveragereporters-array-string)
- [`coverageThreshold`](https://jestjs.io/docs/en/configuration.html#coveragethreshold-object)
- [`displayName`](https://jestjs.io/docs/en/configuration.html#displayname-string-object)
- [`extraGlobals`](https://jestjs.io/docs/en/configuration.html#extraglobals-array-string)
- [`globalSetup`](https://jestjs.io/docs/en/configuration.html#globalsetup-string)
- [`globalTeardown`](https://jestjs.io/docs/en/configuration.html#globalteardown-string)
- [`moduleNameMapper`](https://jestjs.io/docs/en/configuration.html#modulenamemapper-object-string-string)
- [`resetMocks`](https://jestjs.io/docs/en/configuration.html#resetmocks-boolean)
- [`resetModules`](https://jestjs.io/docs/en/configuration.html#resetmodules-boolean)
- [`snapshotSerializers`](https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string)
- [`transform`](https://jestjs.io/docs/en/configuration.html#transform-object-string-pathtotransformer-pathtotransformer-object)
- [`transformIgnorePatterns`](https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string)
- [`watchPathIgnorePatterns`](https://jestjs.io/docs/en/configuration.html#watchpathignorepatterns-array-string)

Exemplo package.json:

```json
{
  "name": "your-package",
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    "coverageReporters": ["text"],
    "snapshotSerializers": ["my-serializer-module"]
  }
}
```

## Integração contínua

Por padrão, o `npm test` executa o observador com CLI interativa. No entanto, você pode forçá-lo a executar testes uma vez e concluir o processo definindo uma variável de ambiente chamada `CI`.

Ao criar uma versão do seu aplicativo com `npm run build`, os avisos do linter não são verificados por padrão. Como o `npm test`, você pode forçar a construção a executar uma verificação de aviso do linter definindo a variável de ambiente `CI`. Se algum aviso for encontrado, a construção falhará.

Servidores CI populares já definem a variável de ambiente `CI` por padrão, mas você também pode fazer isso:

## Em servidores CI

### Travis CI

1. Seguindo o guia [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) para sincronizar seu repositório GitHub com Travis. Pode ser necessário inicializar algumas configurações manualmente em sua página [perfil](https://travis-ci.org/profile).
2. Adicione um arquivo `.travis.yml` ao seu repositório git.

```yaml
language: node_js
node_js:
  - 8
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```

1. Acione sua primeira build com um push git.
2. [Personalize seu Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) se necessário.

### CircleCI

Siga [este artigo](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1) para configurar o CircleCI com um projeto Create React App.

## Em seu próprio ambiente

#### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

(Observação: a falta de espaço em branco é intencional.)

#### Windows (Powershell)

```Powershell
($env:CI = "true") -and (npm test)
```

```Powershell
($env:CI = "true") -and (npm run build)
```

#### Linux, macOS (Bash)

```sh
CI=true npm test
```

```sh
CI=true npm run build
```

O comando de teste forçará Jest a ser executado no modo CI e os testes serão executados apenas uma vez, em vez de iniciar o inspetor.

Para ambientes não CI, você pode passar o sinalizador `--watchAll=false` para desativar a observação de teste.

O comando build verificará se há avisos do linter e falhará se algum for encontrado.

## Desativando jsdom

Se você sabe que nenhum de seus testes depende de [jsdom] (https://github.com/tmpvar/jsdom), você pode definir com segurança `--env = node`, e seus testes serão executados mais rapidamente:

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test"
+   "test": "react-scripts test --env=node"
```

Para ajudá-lo a se decidir, aqui está uma lista de APIs que **precisam do jsdom**:

- Qualquer variável global do navegador, como `window` e` document`
- [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
- [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
- [`mount()`](https://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](https://airbnb.io/enzyme/index.html)
- [`render()`](https://testing-library.com/docs/react-testing-library/api/#render) in [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Em contraste, **jsdom não é necessário** para as seguintes APIs:

- [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
- [`shallow()`](https://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](https://airbnb.io/enzyme/index.html)

Por fim, jsdom também não é necessário para [teste de snapshot](https://jestjs.io/blog/2016/07/27/jest-14.html).

## Teste de Snapshot

O teste de snapshot é um recurso do Jest que gera automaticamente snapshots de texto de seus componentes e os salva no disco para que, se a saída da UI mudar, você seja notificado sem escrever manualmente nenhuma asserção na saída do componente. [Leia mais sobre o teste de snapshots.](Https://jestjs.io/blog/2016/07/27/jest-14.html)

## Integração com Editor

Se você usar [Visual Studio Code](https://code.visualstudio.com), há uma [extensão para Jest](https://github.com/orta/vscode-jest) que funciona com Create React App fora direta para uso. Isso fornece muitos recursos do tipo IDE ao usar um editor de texto: mostrar o status de uma execução de teste com mensagens de falha em potencial, iniciar e parar o inspetor automaticamente e oferecer atualizações instantâneas com um clique.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)
