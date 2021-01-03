---
id: proxying-api-requests-in-development
title: Solicitações de proxy de API em desenvolvimento
sidebar_label: Proxying in Development
---

> Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.
Muitas vezes, as pessoas veiculam o aplicativo React de front-end no mesmo host e porta de sua implementação de back-end.

For example, a production setup might look like this after the app is deployed:
Por exemplo, um setup de produção pode ter esta aparência depois que o aplicativo é implantado:

    /             - o servidor estático retorna index.html com o aplicativo React
    /todos        - o servidor estático retorna index.html com o aplicativo React
    /api/todos    - servidor lida com quaisquer solicitações /api/* usando a implementação de backend

Essa configuração **não** é necessária. No entanto, se você **tiver** uma configuração como esta, é conveniente escrever pedidos como `fetch('/api/todos')` sem se preocupar em redirecioná-los para outro host ou porta durante o desenvolvimento.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:
Para dizer ao servidor de desenvolvimento para fazer proxy de quaisquer solicitações desconhecidas para seu servidor em desenvolvimento, adicione um campo `proxy` ao seu `package.json`, por exemplo:

```json
  "proxy": "http://localhost:4000",
```
Desta forma, quando você executar `fetch('/api/todos')` no desenvolvimento, o servidor de desenvolvimento reconhecerá que não é um asset estático e enviará o proxy de sua solicitação para `http://localhost:4000/api/todos` como uma alternativa. O servidor de desenvolvimento **apenas** tentará enviar solicitações sem `text/html` em seu cabeçalho `Accept` para o proxy.

Convenientemente, isso evita [problemas de CORS](https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) e mensagens de erro como esta em desenvolvimento:

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
Lembre-se de que `proxy` só tem efeito no desenvolvimento (com `npm start`), e cabe a você garantir que URLs como `/api/todos` apontem para o endpoint certo na produção. Você não precisa usar o prefixo `/api`. Qualquer solicitação não reconhecida sem um cabeçalho de aceitação `text/html` será redirecionada para o `proxy` especificado.
A opção `proxy` suporta conexões HTTP, HTTPS e WebSocket.

Se a opção `proxy` **não** for flexível o suficiente para você, alternativamente, você pode:

- [Configure o proxy você mesmo](#configurando-o-proxy-manualmente)
- Habilite o CORS em seu servidor ([aqui está como fazê-lo com o Express](https://enable-cors.org/server_expressjs.html)).
- Use [variáveis ​​de ambiente](add-custom-environment-variables.md) para injetar o host de servidor e a porta correta em seu aplicativo.

## Erros "Invalid Host Header" após configurar o proxy

When you enable the `proxy` option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in [this article](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) and [this issue](https://github.com/webpack/webpack-dev-server/issues/887).

This shouldn’t affect you when developing on `localhost`, but if you develop remotely like [described here](https://github.com/facebook/create-react-app/issues/2271), you will see this error in the browser after enabling the `proxy` option:

> Invalid Host header

To work around it, you can specify your public development host in a file called `.env.development` in the root of your project:

```
HOST=mypublicdevhost.com
```

If you restart the development server now and load the app from the specified host, it should work.

If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to `.env.development.local`. **Note that this is dangerous and exposes your machine to remote code execution from malicious websites:**

```
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

We don’t recommend this approach.

## Configurando o Proxy Manualmente

> Note: this feature is available with `react-scripts@2.0.0` and higher.

If the `proxy` option is **not** flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware.

You can use this feature in conjunction with the `proxy` property in `package.json`, but it is recommended you consolidate all of your logic into `src/setupProxy.js`.

First, install `http-proxy-middleware` using npm or Yarn:

```sh
$ npm install http-proxy-middleware --save
$ # ou
$ yarn add http-proxy-middleware
```

Next, create `src/setupProxy.js` and place the following contents in it:

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ...
};
```
Agora você pode registrar proxies como desejar! Aqui está um exemplo usando o `http-proxy-middleware` acima:

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```

> **Nota:** Você não precisa importar este arquivo para lugar nenhum. Ele é registrado automaticamente quando você inicia o servidor de desenvolvimento.

> **Nota:** Este arquivo suporta apenas a sintaxe JavaScript do Node. Certifique-se de usar apenas recursos de idioma compatíveis (ou seja, sem suporte para Flow, Módulos ES, etc.).

> **Nota:** Passar o caminho para a função proxy permite que você use globbing e/ou correspondência de padrões no caminho, que é mais flexível do que a correspondência de rota expressa.