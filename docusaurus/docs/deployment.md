---
id: deployment
title: Implantação
sidebar_label: Implantação
---


`npm run build` cria um diretório `build` com uma construção de produção de seu aplicativo. Configure seu servidor HTTP favorito para que um visitante de seu site receba `index.html`, e solicitações para caminhos estáticos como `/static/ js/main.<hash>.js` são atendidos com o conteúdo do arquivo `/static/js/main.<hash>.js`. Para obter mais informações, consulte a seção [build de produção](production-build.md).

## Servidor Estático

Para ambientes que usam [Node](https://nodejs.org/), a maneira mais fácil de lidar com isso seria instalar [serve](https://github.com/zeit/serve) e deixá-lo lidar com o resto:

```sh
npm install -g serve
serve -s build
```

O último comando mostrado acima servirá seu site estático na porta **5000**. Como muitas das configurações internas de [serve](https://github.com/zeit/serve), a porta pode ser ajustada usando os flags `-l` ou `--listen`:

```sh
serve -s build -l 4000
```

Execute este comando para obter uma lista completa das opções disponíveis:

```sh
serve -h
```

## Outras Soluções

Você não precisa necessariamente de um servidor estático para executar um projeto Create React App em produção. Ele também funciona bem quando integrado a um aplicativo existente do lado do servidor.

Aqui está um exemplo programático usando [Node](https://nodejs.org/) e [Express](https://expressjs.com/):

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

A escolha de seu software de servidor também não é importante. Como o Create React App é totalmente independente de plataforma, não há necessidade de usar o Node explicitamente.

A pasta `build` com ativos estáticos é a única saída produzida pelo Create React App.

No entanto, isso não é suficiente se você usar o roteamento do lado do cliente. Leia a próxima seção se você deseja suportar URLs como `/todos/42` em seu aplicativo de página única.

## Servindo aplicativos com roteamento do lado do cliente


Se você usa roteadores que usam HTML5 [API de histórico `pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) em segundo plano (por exemplo, [React Router](https://github.com/ReactTraining/react-router) com `browserHistory`), muitos servidores de arquivos estáticos irão falhar. Por exemplo, se você usou o React Router com uma rota para `/todos/42`, o servidor de desenvolvimento responderá a `localhost:3000/todos/42` apropriadamente, mas um servidor com Express não.

Isso ocorre porque quando há um novo carregamento de página para `/todos/42`, o servidor procura o arquivo `build/todos/42` e não o encontra. O servidor precisa ser configurado para responder a uma solicitação para `/todos/42` servindo `index.html`. Por exemplo, podemos corrigir nosso exemplo com Express acima para servir `index.html` para qualquer caminho desconhecido:

```diff
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

Se você estiver usando o [Apache HTTP Server](https://httpd.apache.org/), será necessário criar um arquivo `.htaccess` na pasta` public` semelhante a este:

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

Ele será copiado para a pasta `build` quando você executar `npm run build`.

Se você estiver usando o [Apache Tomcat](https://tomcat.apache.org/), deverá seguir [esta resposta do Stack Overflow](https://stackoverflow.com/a/41249464/4878474).

Agora as solicitações para `/todos/42` serão tratadas corretamente tanto no desenvolvimento quanto na produção.

Em uma versão de produção, e quando você [ativou](making-a-progressive-web-app.md#why-opt-in), um [service worker](https://developers.google.com/web/fundals/primers/service-workers/) tratará automaticamente todas as solicitações de navegação, como para `/todos/42`, servindo a cópia em cache do seu `index.html`. Este roteamento de navegação do service worker pode ser configurado ou desativado [`eject`ing](available-scripts.md#npm-run-eject)e, em seguida, modificando o [`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string) e [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp) opções da configuração `SWPrecachePlugin`.

Quando os usuários instalam seu aplicativo na tela inicial de seus dispositivos, a configuração padrão cria um atalho para `/index.html`. Isso pode não funcionar para roteadores do lado do cliente que esperam que o aplicativo seja servido de `/`. Edite o manifesto do aplicativo da web em `public/manifest.json` e altere `start_url` para corresponder ao esquema de URL necessário, por exemplo:

```js
  "start_url": ".",
```

## Construindo para caminhos relativos

Por padrão, Create React App produz um build assumindo que seu aplicativo está hospedado na raiz do servidor.

Para substituir isso, especifique a `homepage` em seu `package.json`, por exemplo:

```js
  "homepage": "http://mywebsite.com/relativepath",
```

Isso permitirá ao Create React App inferir corretamente o caminho raiz a ser usado no arquivo HTML gerado.

**Nota**: Se você estiver usando `react-router@^4`, você pode enraizar `<Link> `s usando o prop `basename` em qualquer `<Router>`.

Mais informações acesse [aqui](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string).

Por exemplo:

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renderiza <a href="/calendar/today">
```

### Servindo a mesma compilação a partir de paths diferentes

> Nota: este recurso está disponível com `react-scripts@0.9.0` e superior.

Se você não estiver usando a API de histórico `pushState` HTML5 ou não usar o roteamento do lado do cliente, não é necessário especificar a URL a partir da qual seu aplicativo será servido. Em vez disso, você pode colocar isso em seu `package.json`:

```js
  "homepage": ".",
```

Isso garantirá que todos os caminhos de ativos sejam relativos a `index.html`. Você poderá então mover seu aplicativo de `http://mywebsite.com` para` http://mywebsite.com/relativepath` ou mesmo `http://mywebsite.com/relative/path` sem ter que reconstruir isto.

## Personalizando Variáveis ​​de Ambiente para Ambientes de Compilação Arbitrária

Você pode criar um ambiente de construção arbitrário criando um arquivo `.env` personalizado e carregando-o usando [env-cmd](https://www.npmjs.com/package/env-cmd).

Por exemplo, para criar um ambiente de construção para um ambiente de teste:

1. Crie um arquivo chamado `.env.staging`
2. Defina as variáveis ​​de ambiente como você faria com qualquer outro arquivo `.env` (e.g. `REACT_APP_API_URL=http://api-staging.example.com`)
3. instale [env-cmd](https://www.npmjs.com/package/env-cmd)
   ```sh
   $ npm install env-cmd --save
   $ # ou
   $ yarn add env-cmd
   ```
4. Adicione um novo script ao seu `package.json`, construindo com seu novo ambiente:
   ```json
   {
     "scripts": {
       "build:staging": "env-cmd -f .env.staging npm run build"
     }
   }
   ```

Agora você pode executar `npm run build: staging` para gerar o build com a configuração do ambiente de teste.
Você pode especificar outros ambientes da mesma maneira.

Variáveis ​​em `.env.production` serão usadas como fallback porque `NODE_ENV` sempre será definido como `production` para o build.

## [AWS Amplify](http://console.amplify.aws)

O AWS Amplify Console fornece implantação e hospedagem contínuas para aplicativos da web modernos (aplicativos de página única e geradores de sites estáticos) com back-ends sem servidor. O Console Amplify oferece CDNs disponíveis globalmente, configuração de domínio personalizado, implantações de ramificação de recursos e proteção por senha.

1. Faça login no Console do Amplify [aqui](https://console.aws.amazon.com/amplify/home).
2. Conecte seu repositório Create React App e escolha um branch. Se você está procurando um iniciador Create React App + Amplify, experimente o [iniciador create-react-app-auth-amplify](https://github.com/swaminator/create-react-app-auth-amplify) que demonstra a configuração de autenticação em 10 minutos com o aplicativo Create React.
3. O Console do Amplify detecta automaticamente as configurações de construção. Escolha "Next".
4. Escolha _Save and deploy_.

Se o build for bem-sucedido, o aplicativo será implantado e hospedado em um CDN global com um domínio amplifyapp.com. Agora você pode implantar alterações continuamente em seu front-end ou back-end. A implantação contínua permite que os desenvolvedores implantem atualizações em seu front-end e back-end em cada confirmação de código em seu repositório Git.

## [Azure](https://azure.microsoft.com/)

O Azure Static Web Apps cria um pipeline automatizado de compilação e implantação para o seu aplicativo React desenvolvido com GitHub Actions. Os aplicativos são distribuídos geograficamente por padrão com vários pontos de presença. Os PRs são criados automaticamente para visualizações do ambiente de teste.

1. Crie um novo aplicativo da Web estático [aqui](https://ms.portal.azure.com/#create/Microsoft.StaticApp).
2. Adicione os detalhes e conecte-se ao seu repositório GitHub.
3. Certifique-se de que a pasta de build esteja configurada corretamente na guia "build" e crie o recurso.

Os aplicativos da Web estáticos do Azure configurarão automaticamente uma ação do GitHub em seu repo e iniciarão a implantação.

Consulte a [documentação do Azure Static Web Apps](https://aka.ms/swadocs) para obter mais informações sobre roteamento, APIs, autenticação e autorização, domínios personalizados e muito mais.

## [Firebase](https://firebase.google.com/)

Instale a Firebase CLI, caso ainda não o tenha feito, executando `npm install -g firebase-tools`. Inscreva-se em uma [conta Firebase](https://console.firebase.google.com/) e crie um novo projeto. Execute `firebase login` e faça login com sua conta Firebase criada anteriormente.

Em seguida, execute o comando `firebase init` a partir da raiz do seu projeto. Você precisa escolher **Hosting: configurar e implantar sites do Firebase Hosting** e escolher o projeto do Firebase que você criou na etapa anterior. Você precisará concordar com a criação de `database.rules.json`, escolher `build` como o diretório público e também concordar em **Configurar como um aplicativo de página única** respondendo com `y`.

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ✔  Wrote build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

IMPORTANTE: você precisa definir cabeçalhos de cache HTTP adequados para o arquivo `service-worker.js` no arquivo `firebase.json` ou não conseguirá ver as alterações após a primeira implantação ([issue #2440](https://github.com/facebook/create-react-app/issues/2440)). Deve ser adicionado dentro da chave `"hosting"` como a seguir:

```json
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

Agora, depois de criar um build de produção com `npm run build`, você pode implementá-lo executando `firebase deploy`.

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
    Hosting URL: https://example-app-fd690.firebaseapp.com
```

For more information see [Firebase Hosting](https://firebase.google.com/docs/hosting).

## [GitHub Pages](https://pages.github.com/)

> Nota: este recurso está disponível com `react-scripts@0.2.0` e superior.

### Etapa 1: Adicionar `homepage` ao `package.json`

**O passo abaixo é importante!** <br/>

**Se você pular, seu aplicativo não será implantado corretamente.**

Abra seu `package.json` e adicione um campo `homepage` para seu projeto:

```json
  "homepage": "https://myusername.github.io/my-app",
```

ou para uma página de usuário do GitHub:

```json
  "homepage": "https://myusername.github.io",
```

ou para uma página de domínio personalizada:

```json
  "homepage": "https://mywebsite.com",
```

O Create React App usa o campo `homepage` para determinar a URL raiz no arquivo HTML construído.

### Etapa 2: Instale `gh-pages` e adicione `deploy` aos `scripts` em `package.json`

Agora, sempre que você executar `npm run build`, verá uma cheat sheet de dicas com instruções sobre como implantar nas páginas do GitHub.

Para publicá-lo em [https://myusername.github.io/my-app](https://myusername.github.io/my-app), execute:

```sh
npm install --save gh-pages
```

Alternativamente, você pode usar `yarn`:

```sh
yarn add gh-pages
```
Adicione os seguintes scripts em seu `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

O script `predeploy` será executado automaticamente antes de `deploy` ser executado.

Se estiver implantando em uma página de usuário do GitHub em vez de em uma página de projeto, você precisará fazer uma modificação adicional:

1. Ajuste seus scripts `package.json` para enviar implantações para **master**:

```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

### Etapa 3: implantar o site executando `npm run deploy`

Então execute:

```sh
npm run deploy
```

### Etapa 4: para uma página de projeto, certifique-se de que as configurações de seu projeto usem `gh-pages`

Por fim, certifique-se de que a opção **GitHub Pages** nas configurações do projeto GitHub esteja definida para usar o branch `gh-pages`:

<img src="https://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting" />

### Etapa 5: Opcionalmente, configure o domínio

Você pode configurar um domínio personalizado com páginas GitHub adicionando um arquivo `CNAME` à pasta `public/`.

Seu arquivo CNAME deve ser assim:

```
mywebsite.com
```

### Notas sobre o roteamento do lado do cliente

O GitHub Pages não oferece suporte a routers que usam a API de histórico `pushState` do HTML5 (por exemplo, React Router usando `browserHistory`). Isso ocorre porque quando há um novo carregamento de página para um url como `http://user.github.io/todomvc/todos/42`, onde `/todos/42` é uma rota de front-end, o servidor GitHub Pages retorna 404 porque não sabe nada de `/todos/42`. Se você deseja adicionar um roteador a um projeto hospedado no GitHub Pages, aqui estão algumas soluções:

- Você pode mudar do uso da API de histórico do HTML5 para o roteamento com hashes. Se você usar o React Router, você pode mudar para `hashHistory` para este efeito, mas a URL será mais longa e detalhada (por exemplo,`http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Leia mais](https://reacttraining.com/react-router/web/api/Router) sobre diferentes implementações de histórico no Roteador React.
- Como alternativa, você pode usar um truque para ensinar as páginas do GitHub a lidar com 404s, redirecionando para a página `index.html` com um parâmetro de redirecionamento personalizado. Você precisaria adicionar um arquivo `404.html` com o código de redirecionamento para a pasta `build` antes de implantar seu projeto, e você precisará adicionar o código que manipula o parâmetro de redirecionamento para `index.html`. Você pode encontrar uma explicação detalhada dessa técnica [neste guia](https://github.com/rafrex/spa-github-pages).

### Solução de problemas

#### "/dev/tty: No such a device or address"

Se, ao implantar, você obtiver `/dev/tty: No such tal device or address` ou um erro semelhante, tente o seguinte:

1. Crie um novo [token de acesso pessoal](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@ github.com/<user>/<repo>`.
3. Tente `npm runploy` novamente

#### "Cannot read property 'email' of null"

Se, durante a implantação, você obtiver `Cannot read property 'email' of null`, tente o seguinte:

1. `git config --global user.name '<your_name>'`
2. `git config --global user.email '<your_email>'`
3. Tente executar `npm run deploy` novamente

## [Heroku](https://www.heroku.com/)

Use o [Heroku Buildpack para Create React App](https://github.com/mars/create-react-app-buildpack).

Você pode encontrar instruções em [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration).

### Resolvendo erros de implantação do Heroku

Às vezes, `npm run build` funciona localmente, mas falha durante a implantação via Heroku. A seguir estão os casos mais comuns.

#### "Module not found: Error: Cannot resolve 'file' or 'directory'"

Se você receber algo assim:

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

Isso significa que você precisa garantir que a caixa de letras do arquivo ou diretório que você `importou` corresponda àquela que você vê no seu sistema de arquivos ou no GitHub.

Isso é importante porque o Linux (o sistema operacional usado pelo Heroku) faz distinção entre maiúsculas e minúsculas. Portanto, `MyDirectory` e `mydirectory` são dois diretórios distintos e, portanto, embora o projeto seja compilado localmente, a diferença no caso de quebrar as instruções `import` nos Heroku remotes.

#### "Could not find a required file."

Se você excluir ou ignorar os arquivos necessários do pacote, verá um erro semelhante a este:

```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

Nesse caso, certifique-se de que o arquivo esteja com as letras maiúsculas adequadas e que não seja ignorado em seu `.gitignore` ou` ~/.gitignore_global` local.

## [Netlify](https://www.netlify.com/)

**Para fazer uma implantação manual no CDN da Netlify:**

```sh
npm install netlify-cli -g
netlify deploy
```

Escolha `build` como o caminho para implantar.

**Para configurar entrega contínua:**

Com esta configuração, o Netlify criará e implantará quando você enviar para git ou abrir uma solicitação pull:

1. [Inicie um novo projeto netlify](https://app.netlify.com/signup)
2. Escolha seu serviço de hospedagem Git e selecione seu repositório
3. Clique em `Build your site`

**Suporte para roteamento do lado do cliente:**

Para suportar `pushState`, certifique-se de criar um arquivo `public/_redirects` com as seguintes regras de reescrita:

```
/*  /index.html  200
```

Ao construir o projeto, Create React App colocará o conteúdo da pasta `public` na saída do build.

## [Vercel](https://vercel.com)

[Vercel](https://vercel.com/home) é uma plataforma de nuvem que permite aos desenvolvedores hospedar sites Jamstack e serviços da web que são implantados instantaneamente, escalonados automaticamente e não requerem supervisão, tudo com configuração zero. Eles fornecem uma rede de borda global, criptografia SSL, compactação de assets, invalidação de cache e muito mais.

### Etapa 1: Implantando seu projeto React no Vercel

Para implantar seu projeto React com um [Vercel for Git Integration](https://vercel.com/docs/git-integrations), certifique-se de que ele foi enviado para um repositório Git.

Importe o projeto para o Vercel usando o [Fluxo de importação](https://vercel.com/import/git). Durante a importação, você encontrará todas as [opções](https://vercel.com/docs/build-step#build-&-development-settings) relevantes pré-configuradas para você com a capacidade de alterar conforme necessário.

After your project has been imported, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), and all changes made to the [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (commonly "master" or "main") will result in a [Production Deployment](https://vercel.com/docs/platform/deployments#production).
Depois que seu projeto foi importado, todos os envios subsequentes para branches irão gerar [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), e todas as mudanças feitas no [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (geralmente "master" ou "principal") resultará em uma [implantação de produção](https://vercel.com/docs/platform/deployments#production) .

Depois de implantado, você receberá um URL para ver seu aplicativo ativo, como o seguinte: https://create-react-app-example.vercel.app/.

### Etapa 2 (opcional): usando um domínio personalizado

Se quiser usar um domínio personalizado com a implantação do Vercel, você pode **Adicionar** ou **transferir** um domínio por meio de suas [configurações de domínio da conta](https://vercel.com/dashboard/domains.)

Para adicionar seu domínio ao seu projeto, navegue até seu [Projeto](https://vercel.com/docs/platform/projects) no Painel do Vercel. Depois de selecionar seu projeto, clique na guia "Configurações" e selecione o item de menu **Domínios**. Na página **Domínio** de seus projetos, insira o domínio que deseja adicionar ao seu projeto.

Depois que o domínio for adicionado, você verá diferentes métodos para configurá-lo.

### Implementando um novo projeto React

Você pode implantar um novo projeto React, com um repositório Git configurado para você, com o seguinte botão de implantação:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmaster%2Fexamples%2Fcreate-react-app)

### Referências da Vercel:

- [Fonte de exemplo](https://github.com/vercel/vercel/tree/master/examples/create-react-app)
- [Guia Oficial Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra)
- [Documentos de implantação do Vercel](https://vercel.com/docs)
- [Documentos de domínio personalizado Vercel](https://vercel.com/docs/custom-domains)

## [Render](https://render.com)

Render oferece [site estático](https://render.com/docs/static-sites) gratuito, hospedagem com SSL totalmente gerenciado, um CDN global e implantações automáticas contínuas do GitHub.

Deploy your app in only a few minutes by following the [Create React App deployment guide](https://render.com/docs/deploy-create-react-app).
Implante seu aplicativo em apenas alguns minutos, seguindo o [guia de implantação Create React App] (https://render.com/docs/deploy-create-react-app).

Use o código de convite `cra` para se inscrever ou use [este link](https://render.com/i/cra).

## [S3](https://aws.amazon.com/s3) e [CloudFront](https://aws.amazon.com/cloudfront/)

Veja esta [postagem do blog](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) sobre como implantar seu aplicativo React para Amazon Web Services S3 e CloudFront . Se você deseja adicionar um domínio personalizado, HTTPS e implantação contínua, consulte esta [postagem do blog](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081).

## [Surge](https://surge.sh/)

Instale o Surge CLI se ainda não o fez, executando `npm install -g surge`. Execute o comando `surge` e faça o login ou crie uma nova conta.

Quando questionado sobre o caminho do projeto, certifique-se de especificar a pasta `build`, por exemplo:

```sh
       project path: /path/to/project/build
```

Note que para suportar roteadores que usam a API HTML5 `pushState`, você pode querer renomear `index.html` em sua pasta de construção para `200.html` antes de implantar no Surge. Isso [garante que cada URL retorne a esse arquivo](https://surge.sh/help/adding-a-200-page-for-client-side-routing).

## Publicação de componentes para npm

O aplicativo Create React não fornece nenhuma funcionalidade integrada para publicar um componente no npm. Se você estiver pronto para extrair um componente do seu projeto para que outras pessoas possam usá-lo, recomendamos movê-lo para um diretório separado fora do seu projeto e, em seguida, usar uma ferramenta como [nwb](https://github.com/insin/nwb#react-components-and-libraries) para prepará-lo para publicação.
