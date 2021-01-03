---
id: production-build
title: Criando o build de produção
---

`npm run build` cria um diretório `build` com uma build (construção) de produção de seu aplicativo. Dentro do diretório `build/static` estarão seus arquivos JavaScript e CSS. Cada nome de arquivo dentro de `build/static` conterá um hash único do conteúdo do arquivo. Este hash no nome do arquivo habilita [técnicas de cache de longo prazo](#static-file-caching).

When running a production build of freshly created Create React App application, there are a number of `.js` files (called _chunks_) that are generated and placed in the `build/static/js` directory:
Ao executar uma versão de produção do aplicativo Create React App criado recentemente, há uma série de arquivos `.js` (chamados _chunks_) que são gerados e colocados no diretório `build/static/js`:

`main.[hash].chunk.js`

- Este é o código da sua _aplicação_. `App.js`, etc.

`[number].[hash].chunk.js`

- Esses arquivos podem ser código de _terceiros_ ou [code splitting chunks](code-splitting.md). O código de _terceiros_ inclui módulos que você importou de `node_modules`. Uma das vantagens potenciais de dividir seu código de _terceiros_ e _aplicação_ é habilitar [técnicas de cache de longo prazo](#static-file-caching) para melhorar o desempenho de carregamento do aplicativo. Como o código do _terceiro_ tende a mudar com menos frequência do que o código da _aplicação_ real, o navegador poderá armazená-los em cache separadamente e não baixará novamente cada vez que o código do aplicativo mudar.

`runtime-main.[hash].js`

- Este é um pequeno pedaço da lógica do [webpack runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) que é usado para carregar e executar seu aplicativo. O conteúdo disso será embutido em seu arquivo `build/index.html` por padrão para salvar uma solicitação de rede adicional. Você pode cancelar especificando `INLINE_RUNTIME_CHUNK=false` conforme documentado em nossa [configuração avançada](advanced-configuration.md), que irá carregar este trecho em vez de incorporá-lo em seu` index.html`.

Se você estiver usando [code splitting](code-splitting.md) para dividir seu aplicativo, isso criará pedaços adicionais na pasta `build/static` também.

## Cache de arquivo estático

Cada arquivo dentro do diretório `build/static` terá um hash único anexado ao nome do arquivo que é gerado com base no conteúdo do arquivo, o que permite que você use [técnicas agressivas de cache](https://developers.google.com/web/fundals/performance/optimizing-content-fficiency/http-caching#invalidating_and_updating_cached_responses) para evitar que o navegador baixe novamente seus assets se o conteúdo do arquivo não tiver mudado. Se o conteúdo de um arquivo for alterado em uma construção subsequente, o hash do nome do arquivo gerado será diferente.

Para oferecer o melhor desempenho aos seus usuários, é uma prática recomendada especificar um cabeçalho `Cache-Control` para` index.html`, bem como os arquivos dentro de `build/static`. Este cabeçalho permite que você controle por quanto tempo o navegador e também os CDNs armazenarão em cache seus assets estáticos. Se você não está familiarizado com o que `Cache-Control` faz, consulte [este artigo](https://jakearchibald.com/2016/caching-best-practices/) para uma ótima introdução.

Usar `Cache-Control: max-age=31536000` para seus assets `build/static` e `Cache-Control: no-cache` para todo o resto é um ponto de partida seguro e eficaz que garante que o navegador do usuário sempre verifique um arquivo `index.html` atualizado, e armazenará em cache todos os arquivos `build/static` por um ano. Observe que você pode usar a expiração de um ano em `build/static` com segurança porque o hash do conteúdo do arquivo está embutido no nome do arquivo.

## Profiling

O ReactDOM suporta automaticamente profiling no modo de desenvolvimento para a versão 16.5+, mas como a profilling adiciona algumas pequenas sobrecargas adicionais, é opcional para o modo de produção. Você pode optar por usar o sinalizador `--profile`. Use `npm run build - --profile` ou `yarn build --profile` para habilitar o profilling no build de produção. Consulte os [documentos do React](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler) para obter detalhes sobre profilling usando o React DevTools.
