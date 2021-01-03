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
- Use [variáveis ​​de ambiente](adding-custom-environment-variables.md) para injetar o host de servidor e a porta correta em seu aplicativo.

## Erros "Invalid Host Header" após configurar o proxy

Ao habilitar a opção `proxy`, você opta por um conjunto mais restrito de verificações de host. Isso é necessário porque deixar o back-end aberto para hosts remotos e torna seu computador vulnerável a ataques de religação de DNS. O problema é explicado [neste artigo](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) e [esta issue](https://github.com/webpack/webpack-dev-server/issues/887).

Isso não deve afetá-lo ao desenvolver em `localhost`, mas se você desenvolver remotamente como [descrito aqui](https://github.com/facebook/create-react-app/issues/2271), você verá este erro no navegador após habilitar a opção `proxy`:

> Invalid Host header

Para contornar isso, você pode especificar seu host de desenvolvimento público em um arquivo chamado `.env.development` na raiz do seu projeto:

```
HOST=mypublicdevhost.com
```

Se você reiniciar o servidor de desenvolvimento agora e carregar o aplicativo do host especificado, ele deve funcionar.

Se ainda estiver tendo problemas ou se estiver usando um ambiente mais exótico como um editor de nuvem, você pode ignorar a verificação do host completamente adicionando uma linha a `.env.development.local`. **Observe que isso é perigoso e expõe sua máquina à execução remota de código de sites maliciosos:**

```
# NOTA: ISTO É PERIGOSO!
# Expõe sua máquina a ataques dos sites que você visita.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Não recomendamos essa abordagem.

## Configurando o Proxy Manualmente

> Nota: este recurso está disponível com `react-scripts@2.0.0` e superior.

Se a opção `proxy` **não** for flexível o suficiente para você, você pode obter acesso direto à instância do aplicativo Express e conectar seu próprio middleware de proxy.

Você pode usar este recurso em conjunto com a propriedade `proxy` em `package.json`, mas é recomendado que você consolide toda a sua lógica em `src/setupProxy.js`.

Primeiro, instale `http-proxy-middleware` usando npm ou Yarn:

```sh
$ npm install http-proxy-middleware --save
$ # ou
$ yarn add http-proxy-middleware
```
Em seguida, crie o arquivo em `src/setupProxy.js` e coloque o seguinte conteúdo nele:

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