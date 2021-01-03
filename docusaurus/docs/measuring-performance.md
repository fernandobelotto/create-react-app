---
id: measuring-performance
title: Medindo o desempenho
---

Por padrão, Create React App inclui um retransmissor de desempenho que permite medir e analisar o desempenho de seu aplicativo usando diferentes métricas.

Para medir qualquer uma das métricas suportadas, você só precisa passar uma função para a função `reportWebVitals` em `index.js`:

```js
reportWebVitals(console.log);
```

Esta função é disparada quando os valores finais de qualquer uma das métricas terminam de calcular na página. Você pode usá-lo para registrar qualquer um dos resultados no console ou enviar para um determinado endpoint.

## Web Vitals

[Web Vitals](https://web.dev/vitals/) são um conjunto de métricas úteis que visam capturar a experiência do usuário em uma página da web. No Create React App, uma biblioteca de terceiros é usada para medir essas métricas ([web-vitals](https://github.com/GoogleChrome/web-vitals)).

Para entender mais sobre o objeto retornado à função quando um valor métrico é calculado, consulte a [documentação](https://github.com/GoogleChrome/web-vitals/#types). A seção [Suporte do navegador](https://github.com/GoogleChrome/web-vitals/#browser-support) também explica quais navegadores são compatíveis.

## Enviando resultados para análises

Com a função `reportWebVitals`, você pode enviar qualquer um dos resultados para um endpoint analítico para medir e rastrear o desempenho real do usuário em seu site. Por exemplo:

```js
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = 'https://example.com/analytics';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  // Use `navigator.sendBeacon()` se disponível, voltando para `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);
```

> **Observação:** se você usar o Google Analytics, use o valor `id` para facilitar a construção de distribuições métricas manualmente (para calcular percentuais, etc...).
>
> ```js
> function sendToAnalytics({ id, name, value }) {
>   ga('send', 'event', {
>     eventCategory: 'Web Vitals',
>     eventAction: name,
>     eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // os valores devem ser inteiros
>     eventLabel: id, // id único para o carregamento da página atual
>     nonInteraction: true, // evita afetar a taxa de rejeição
>   });
> }
>
> reportWebVitals(sendToAnalytics);
> ```
>
> Leia mais sobre como enviar resultados ao Google Analytics [aqui](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics).
