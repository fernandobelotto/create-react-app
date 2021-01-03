---
id: pre-rendering-into-static-html-files
title: Pré-renderizando em arquivos HTML estáticos
sidebar_label: Pré-renderizando HTML estático
---

Se você estiver hospedando seu `build` com um provedor de hospedagem estática, pode usar [react-snapshot](https://www.npmjs.com/package/react-snapshot) ou [react-snap](https://github.com/stereobooster/react-snap) para gerar páginas HTML para cada rota, ou link relativo, em seu aplicativo. Essas páginas se tornarão perfeitamente ativas, ou “hidratadas”, quando o pacote JavaScript for carregado.

Também existem oportunidades de usar isso fora da hospedagem estática, para tirar a pressão do servidor ao gerar e armazenar rotas em cache.

O principal benefício da pré-renderização é que você obtém o conteúdo principal de cada página _com_ a carga HTML - independentemente de seu pacote de JavaScript ser baixado com sucesso ou não. Também aumenta a probabilidade de que cada rota de seu aplicativo seja escolhida por mecanismos de pesquisa.

Você pode ler mais sobre [pré-renderização com configuração zero (também chamada de captura instantânea) aqui](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).
