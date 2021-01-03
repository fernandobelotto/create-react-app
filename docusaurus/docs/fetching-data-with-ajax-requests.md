---
id: fetching-data-with-ajax-requests
title: Fetch de dados com solicitações AJAX
sidebar_label: Fetch de dados
---

O React não prescreve uma abordagem específica para o fetch de dados, mas as pessoas costumam usar uma biblioteca como [axios](https://github.com/axios/axios) ou a [API `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) fornecido pelo navegador.

A função global `fetch` permite que você faça solicitações AJAX. Ele recebe uma URL como entrada e retorna uma `Promise` que resolve para um objeto `Response`. Você pode encontrar mais informações sobre `fetch` [aqui](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Uma Promise representa o resultado final de uma operação assíncrona, você pode encontrar mais informações sobre Promises [aqui](https://www.promisejs.org/) e [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Ambos axios e `fetch()` usam Promises de baixo dos panos. Você também pode usar a sintaxe [`async/await`](https://davidwalsh.name/async-await) para reduzir o aninhamento de retorno de chamada.

Certifique-se de que a [API `fetch ()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) e [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) estão disponíveis nos navegadores do seu público-alvo.
Por exemplo, o suporte no Internet Explorer requer um [polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

Você pode aprender mais sobre como fazer solicitações AJAX de componentes React nop [item do FAQ no site do React](https://reactjs.org/docs/faq-ajax.html).
