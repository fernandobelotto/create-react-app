---
id: using-the-public-folder
title: Usando a pasta Public
---

> Nota: este recurso está disponível com `react-scripts@0.5.0` e superior.

## Alterando o HTML

A pasta `public` contém o arquivo HTML para que você possa ajustá-lo, por exemplo, para [definir o título da página](title-and-meta-tags.md).
A tag `<script>` com o código compilado será adicionada automaticamente durante o processo de construção.

## Adicionando ativos fora do sistema de módulo

Você também pode adicionar outros assets à pasta `public`.

Observe que normalmente encorajamos você a `importar` assets em arquivos JavaScript.
Por exemplo, veja as seções em [adicionar uma stylesheet](adding-a-stylesheet.md) e [adicionar imagens e fontes](adding-images-fonts-and-files.md).
Este mecanismo oferece uma série de benefícios:

- Scripts e stylesheets são minimizados e agrupados para evitar solicitações extras de rede.
- Arquivos ausentes causam erros de compilação em vez de erros 404 para seus usuários.
- Os nomes dos arquivos de resultados incluem hashes de conteúdo, então você não precisa se preocupar com os navegadores armazenando em cache suas versões antigas.

No entanto, há uma **saída de emergência** que você pode usar para adicionar um asset fora do sistema de módulo.

Se você colocar um arquivo na pasta `public`, ele **não** será processado pelo webpack. Em vez disso, ele será copiado para a pasta de construção sem tocar. Para fazer referência a ativos na pasta `public`, você precisa usar uma variável de ambiente chamada `PUBLIC_URL`.

Dentro de `index.html`, você pode usá-lo assim:

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

Apenas os arquivos dentro da pasta `public` estarão acessíveis pelo prefixo `% PUBLIC_URL%`. Se você precisar usar um arquivo de `src` ou `node_modules`, você terá que copiá-lo para especificar explicitamente sua intenção de tornar este arquivo parte do build.

Quando você executa `npm run build`, Create React App substituirá `% PUBLIC_URL%` por um caminho absoluto correto para que seu projeto funcione mesmo se você usar o roteamento do lado do cliente ou hospedá-lo em uma URL não-root.

No código JavaScript, você pode usar `process.env.PUBLIC_URL` para fins semelhantes:

```js
render() {
  // Observação: esta é uma saída de emergência e deve ser usada com moderação!
  // Normalmente recomendamos o uso de `import` para obter URLs de ativos
  // conforme descrito em “Adicionar imagens e fontes” acima desta seção.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

Lembre-se das desvantagens dessa abordagem:

- Nenhum dos arquivos na pasta `public` é pós-processado ou minimizado.
- Arquivos ausentes não serão chamados no momento da compilação e causarão erros 404 para seus usuários.
- Os nomes dos arquivos de resultados não incluirão hashes de conteúdo, portanto, você precisará adicionar argumentos de consulta ou renomeá-los sempre que forem alterados.

## Quando usar a pasta `public`

Normalmente, recomendamos importar [stylesheets](adding-a-stylesheet.md), [imagens e fontes](adding-images-fonts-and-files.md) do JavaScript.
A pasta `public` é útil como uma solução alternativa para alguns casos menos comuns:

- Você precisa de um arquivo com um nome específico na saída da compilação, como [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
- Você tem milhares de imagens e precisa referenciar dinamicamente seus caminhos.
- Você deseja incluir um pequeno script como [`pace.js`](https://github.hubspot.com/pace/docs/welcome/) fora do código empacotado.
- Algumas bibliotecas podem ser incompatíveis com o webpack e você não tem outra opção a não ser incluí-la como uma tag `<script>`.

Note que se você adicionar um `<script>` que declara variáveis ​​globais, você deve ler o tópico [Usando variáveis ​​globais](using-global-variables.md) na próxima seção que explica como referenciá-las.
