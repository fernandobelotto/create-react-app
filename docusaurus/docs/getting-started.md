---
id: getting-started
title: Começando
---

Create React App é a forma oficialmente suportada de criar aplicativos React de página única (SPA's). Ele oferece uma configuração de construção moderna sem nenhuma configuração.

## Começo rápido

```sh
npx create-react-app my-app
cd my-app
npm start
```
> Se você instalou anteriormente `create-react-app` globalmente via `npm install -g create-react-app`, recomendamos que você desinstale o pacote usando `npm uninstall -g create-react-app` ou `yarn global remova create-react-app` para garantir que `npx` sempre use a versão mais recente.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) vem com npm 5.2+ e superior, consulte [instruções para versões anteriores de npm](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Em seguida, abra [http://localhost:3000/](http://localhost:3000/) para ver seu aplicativo.

Quando estiver pronto para implantar na produção, crie um pacote minimizado com `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start' />
</p>

### Comece imediatamente

Você **não** precisa instalar ou configurar ferramentas como webpack ou Babel. Eles são pré-configurados e ocultados para que você possa se concentrar no código.

Crie um projeto e está pronto para começar.

## Criando um aplicativo

**Você precisará ter Node >= 10 em sua máquina de desenvolvimento local** (mas não é obrigatório no servidor). Você pode usar [nvm](https://github.com/creationix/nvm#installation) (macOS / Linux) ou [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) para alternar as versões do Node entre diferentes projetos.

Para criar um novo aplicativo, você pode escolher um dos seguintes métodos:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_`yarn create` está disponível no Yarn 0.25+_

### Selecionando um template

Agora você pode opcionalmente iniciar um novo aplicativo a partir de um modelo anexando `--template [template-name]` ao comando de criação.

Se você não selecionar um modelo, criaremos seu projeto com nosso modelo base.

Os modelos são sempre nomeados no formato `cra-template-[template-name]`, entretanto você só precisa fornecer o `[template-name]` para o comando de criação.

```sh
npx create-react-app my-app --template [template-name]
```
> Você pode encontrar uma lista de modelos disponíveis procurando por ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) no npm.

Nossa documentação [Templates Customizados](custom-templates.md) descreve como você pode construir seu próprio template.

#### Criando um aplicativo TypeScript

Você pode iniciar um novo aplicativo TypeScript usando modelos. Para usar nosso template TypeScript, acrescente `--template typescript` ao comando de criação.

```sh
npx create-react-app my-app --template typescript
```
Se você já tem um projeto e gostaria de adicionar TypeScript, consulte nossa documentação [Adicionando TypeScript](adding-typescript.md).

### Selecionando um package manager

Quando você cria um novo aplicativo, a CLI usará [Yarn](https://yarnpkg.com/) para instalar dependências (quando disponíveis). Se você tem o Yarn instalado, mas prefere usar o npm, você pode adicionar `--use-npm` ao comando de criação. Por exemplo:

```sh
npx create-react-app my-app --use-npm
```
## Resultado

Executar qualquer um desses comandos criará um diretório chamado `my-app` dentro da pasta atual. Dentro desse diretório, ele irá gerar a estrutura inicial do projeto e instalar as dependências transitivas:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

Nenhuma configuração ou estruturas de pasta complicadas, apenas os arquivos de que você precisa para construir seu aplicativo. Assim que a instalação for concluída, você pode abrir a pasta do projeto:

```sh
cd my-app
```

## Scripts

Dentro do projeto recém-criado, você pode executar alguns comandos integrados:

### `npm start` ou `yarn start`

Executa o aplicativo em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada automaticamente se você fizer alterações no código. Você verá os erros de compilação e avisos de lint no console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors' />
</p>

### `npm test` ou `yarn test`

Executa o inspetor de teste em modo interativo. Por padrão, executa testes relacionados aos arquivos alterados desde o último commit.

[Leia mais sobre testes](running-tests.md).

### `npm run build` ou `yarn build`

Compila o aplicativo para produção na pasta `build`. Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.

Seu aplicativo está pronto para ser implantado.
