---
id: making-a-progressive-web-app
title: Fazendo um Progressive Web App
---

A construção de produção (build) tem todas as ferramentas necessárias para gerar um
[Progressive Web App](https://developers.google.com/web/progressive-web-apps/) de primeira classe, mas **o comportamento offline/cache-first é apenas opicional**.

A partir da versão 4 do Create React App, você pode adicionar um arquivo `src/service-worker.js` ao seu projeto para usar o suporte integrado para [Workbox](https://developers.google.com/web/tools/plug-in)'s [`InjectManifest`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest), que irá [compilar](https://developers.google.com/web/tools/workbox/guides/using-bundlers) seu service worker e injete nele uma lista de URLs para [pré-cache](https://developers.google.com/web/tools/workbox/guides/precache-files).

Se você iniciar um novo projeto usando um dos PWA [modelos personalizados](https://create-react-app.dev/docs/custom-templates/), você obterá um arquivo `src/service-worker.js` que serve como um bom ponto de partida para um service worker off-line prioritário:

```sh
npx create-react-app my-app --template cra-template-pwa
```

O equivalente em TypeScript é:

```sh
npx create-react-app my-app --template cra-template-pwa-typescript
```
Se você sabe que não usará service workers, ou se preferir usar uma abordagem diferente para lidar com o service worker, não crie um arquivo `src/service-worker.js`. O plugin `InjectManifest` não será executado neste caso.

In addition to creating your local `src/service-worker.js` file, it needs to be registered before it will be used. In order to opt-in to the offline-first behavior, developers should look for the following in their [`src/index.js`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/index.js)
Além de criar seu arquivo local `src/service-worker.js`, ele precisa ser registrado antes de ser usado. Para optar pelo comportamento offline-first, os desenvolvedores devem procurar em seu arquivo [`src/index.js`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/index.js):

```js
// Se você deseja que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
// unregister() para register() abaixo. Observe que isso traz algumas armadilhas.
// Saiba mais sobre service workers: https://cra.link/PWA
serviceWorker.unregister();
```

Como afirma o comentário, alternar `serviceWorker.unregister()` para `serviceWorker.register()` irá permitir que você use o service worker.

## Por que ativar?

Os Progressive Web Apps Offline-first são mais rápidos e confiáveis ​​do que as páginas da web tradicionais e fornecem uma experiência móvel envolvente:

- Todos os ativos estáticos do site que fazem parte da sua build `webpack` são armazenados em cache para que sua página carregue rapidamente nas visitas subsequentes, independentemente da conectividade de rede (como 2G ou 3G). As atualizações são baixadas em segundo plano.
- Seu aplicativo funcionará independentemente do estado da rede, mesmo offline. Isso significa que seus usuários poderão usar seu aplicativo a 10.000 pés e no metrô.
- Em dispositivos móveis, seu aplicativo pode ser adicionado diretamente à tela inicial do usuário, ícone do aplicativo e tudo. Isso elimina a necessidade da loja de aplicativos.

However, they [can make debugging deployments more challenging](https://github.com/facebook/create-react-app/issues/2398).
No entanto, eles [podem tornar depuração de implantação mais desafiadoras](https://github.com/facebook/create-react-app/issues/2398).

O [`workbox-webpack-plugin`](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) é integrado à configuração de produção e se encarregará de compilar um arquivo service worker que irá pré-armazenar em cache automaticamente todos os seus ativos gerados pelo `webpack` e mantê-los atualizados conforme você implanta atualizações. O service worker usará uma [estratégia de cache-first](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network) para lidar com todas as solicitações de recursos gerados pelo `webpack`, incluindo [solicitações de navegação](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests) para seu HTML, garantindo que seu aplicativo da web seja consistentemente rápido, mesmo em uma rede lenta ou não confiável.

Nota: Recursos que não são gerados pelo `webpack`, como arquivos estáticos que são copiados de seu [diretório local `public/`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/) ou recursos de terceiros, não serão pré-armazenados. Você pode configurar opcionalmente o Workbox [routes](https://developers.google.com/web/tools/workbox/guides/route-requests) para aplicar a estratégia de cache de tempo de execução de sua escolha a esses recursos.

## Personalização

A partir do Create React App 4, você tem controle total sobre a personalização da lógica neste service worker, criando seu próprio arquivo `src/service-worker.js`, ou personalizando aquele adicionado pelo template `cra-template-pwa` ( ou `cra-template-pwa-typescript`). Você pode usar [módulos adicionais](https://developers.google.com/web/tools/workbox/modules) do projeto Workbox, adicionar uma biblioteca de notificação push ou remover parte da lógica de cache padrão. O único requisito é que você mantenha `self.__WB_MANIFEST` em algum lugar em seu arquivo, já que o plugin de compilação do Workbox verifica este valor ao gerar um manifesto de URLs para pré-armazenar em cache. Se você preferir não usar o precaching, pode atribuir `self.__WB_MANIFEST` a uma variável que será ignorada, como:

```js
// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST;

// Seu código do service worker customizado vai aqui.
```

## Considerações sobre Offline-First

Se você decidir aceitar o registro do service worker, leve em consideração o seguinte:

1. Depois que o cache inicial é feito, o [ciclo de vida do service worker](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle) controla quando o conteúdo atualizado acaba sendo mostrado aos usuários. Para se proteger contra [condições de corrida com conteúdo carregado lentamente](https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430), o comportamento padrão é manter o serviço atualizado de forma conservadora trabalhador no estado "[em espera](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting)". Isso significa que os usuários acabarão vendo o conteúdo mais antigo até que fechem (recarregar não é suficiente) suas guias abertas existentes. Consulte [esta postagem do blog](https://jeffy.info/2018/10/10/sw-in-c-r-a.html) para obter mais detalhes sobre esse comportamento.

2. Os usuários nem sempre estão familiarizados com os aplicativos da web offline. Pode ser útil [informar o usuário](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption) quando o service worker terminar de preencher seus caches (mostrando um Mensagem "Este aplicativo da web funciona offline!") E também informá-los quando o service worker tiver obtido as atualizações mais recentes que estarão disponíveis na próxima vez que carregar a página (mostrando uma mensagem "Novo conteúdo disponível assim que as guias existentes forem fechadas".). Mostrar essas mensagens é deixado como um exercício para o desenvolvedor, mas como ponto de partida, você pode fazer uso da lógica incluída em [`src/serviceWorker.js`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/serviceWorker.js), que demonstra quais eventos do ciclo de vida do service worker ouvir para detectar cada cenário e que, por padrão, registra apenas as mensagens apropriadas para o Console JavaScript.

3. Service workers [requerem HTTPS](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https), embora para facilitar o teste local, essa política [não se aplica a `localhost`](https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385). Se o seu servidor web de produção não for compatível com HTTPS, o registro do service worker falhará, mas o resto do seu aplicativo web permanecerá funcional.

4. O service worker está habilitado apenas no [ambiente de produção](deployment.md), por exemplo, a saída de `npm run build`. É recomendável que você não habilite um service worker off-line-first em um ambiente de desenvolvimento, pois isso pode causar frustração quando ativos armazenados em cache anteriormente são usados ​​e não incluem as alterações mais recentes feitas localmente.

5. Se você _precisa_ testar seu service worker offline-first localmente, construa o aplicativo (usando `npm run build`) e execute um servidor http padrão a partir de seu diretório de construção. Depois de executar o script de construção, `create-react-app` dará instruções para uma maneira de testar sua construção de produção localmente e as [instruções de implantação](deployment.md) tem instruções para usar outros métodos. _Certifique-se de usar sempre uma janela anônima para evitar complicações com o cache do navegador._

6. Por padrão, o arquivo do service worker gerado não interceptará ou armazenará em cache qualquer tráfego de origem cruzada, como HTTP [solicitações de API](integrating-with-an-api-backend.md), imagens ou incorporações carregadas de um domínio diferente. A partir do Create React App 4, ele pode ser personalizado, conforme explicado acima.
 
## Metadata do Progressive Web App

A configuração padrão inclui um manifesto de aplicativo da web localizado em [`public/manifest.json`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/manifest.json), que você pode personalizar com detalhes específicos para seu aplicativo da web.

Quando um usuário adiciona um aplicativo da web à tela inicial usando o Chrome ou Firefox no
Android, os metadados em [`manifest.json`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/manifest.json) determina o que
ícones, nomes e cores de marca a serem usados ​​quando o aplicativo da web for exibido.
[Guia do Manifesto do Aplicativo da Web](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) fornece mais contexto sobre o que cada campo significa e como suas personalizações afetará a experiência de seus usuários.

Progressive Web Apps que foram adicionados à tela inicial serão carregados mais rapidamente e vão funcionar offline quando houver um service worker ativo. Dito isto, os metadados do manifesto do aplicativo da web ainda serão usados ​​independentemente de não você opta pelo registro do service worker.