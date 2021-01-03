---
id: title-and-meta-tags
title: Tags Title e Meta
sidebar_label: Tags Title & Meta
---

## Alterando a tag de título

Você pode encontrar o arquivo HTML de origem na pasta `public` do projeto gerado. Você pode editar a tag `<title>` nela para alterar o título de “React App” para qualquer outra coisa.

Observe que normalmente você não edita arquivos na pasta `public` com muita frequência. Por exemplo, [adicionar uma stylesheet](adding-a-stylesheet.md) é feito sem tocar no HTML.

Se você precisar atualizar dinamicamente o título da página com base no conteúdo, você pode usar o a API do navegador [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title ). Para cenários mais complexos quando você deseja alterar o título dos componentes do React, você pode usar [React Helmet](https://github.com/nfl/react-helmet), uma biblioteca de terceiros.

Se você usa um servidor personalizado para seu aplicativo em produção e deseja modificar o título antes de enviá-lo ao navegador, pode seguir os conselhos [nesta seção](#generation-dynamic-meta-tags-on-the-server). Alternativamente, você pode pré-construir cada página como um arquivo HTML estático que então carrega o pacote JavaScript, que é coberto [aqui](pre-rendering-into-static-html-files.md).

## Gerando tags `<meta>` dinâmicas no servidor

Como o aplicativo Create React não oferece suporte para renderização de servidor, você deve estar se perguntando como tornar as tags `<meta>` dinâmicas e refletir a URL atual. Para resolver isso, recomendamos adicionar marcadores de posição no HTML, como este:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__" />
    <meta property="og:description" content="__OG_DESCRIPTION__" />
  </head>
</html>
```

Então, no servidor, independentemente do backend que você usa, você pode ler `index.html` na memória e substituir `__OG_TITLE__`, `__OG_DESCRIPTION__`, e quaisquer outros marcadores de posição com valores dependendo da URL atual. Certifique-se de limpar e escapar dos valores interpolados para que eles possam ser incorporados em HTML com segurança!

Se você usar um servidor Node, poderá até mesmo compartilhar a lógica de correspondência de rota entre o cliente e o servidor. No entanto, duplicá-lo também funciona bem em casos básicos.

## Injetando dados do servidor na página

Da mesma forma que na seção anterior, você pode deixar alguns marcadores de posição no HTML que injetam variáveis ​​globais, por exemplo:

```js
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Então, no servidor, você pode substituir `__SERVER_DATA__` por um JSON de dados reais antes de enviar a resposta. O código do cliente pode então ler `window.SERVER_DATA` para usá-lo. **Certifique-se de [higienizar o JSON antes de enviá-lo ao cliente](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) como isso torna seu aplicativo vulnerável a ataques XSS.**
