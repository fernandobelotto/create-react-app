---
id: adding-images-fonts-and-files
title: Adicionando Imagens, Fontes, e Arquivos
---

Com o webpack, o uso de ativos estáticos como imagens e fontes funciona de maneira semelhante ao CSS.

Você pode **`importar` um arquivo direto em um módulo JavaScript**. Isso informa ao webpack para incluir esse arquivo no bundle. Ao contrário das importações CSS, importar um arquivo fornece um valor de string. Esse valor é o caminho final que você pode fazer referência em seu código, por exemplo, como o atributo `src` de uma imagem ou `href` de um link para um PDF.

Para reduzir o número de solicitações ao servidor, importar imagens com menos de 10.000 bytes retorna um [URI de dados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)ao invés de um caminho. Isso se aplica às seguintes extensões de arquivo: bmp, gif, jpg, jpeg e png. Os arquivos SVG foram excluídos devido a [#1153](https://github.com/facebook/create-react-app/issues/1153). Você pode controlar o limite de 10.000 bytes configurando a variável de ambiente `IMAGE_INLINE_SIZE_LIMIT` conforme documentado em nossa [configuração avançada](advanced-configuration.md).

Aqui está um exemplo:

```js
import React from 'react';
import logo from './logo.png'; // Diz ao webpack que este arquivo JS usa esta imagem

console.log(logo); // /logo.84287d09.png

function Header() {
  // O resultado da importação é a URL da sua imagem
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

Isso garante que, quando o projeto for construído, o webpack moverá corretamente as imagens para a pasta de build e nos fornecerá os caminhos corretos.

Isso também funciona em CSS:

```css
.Logo {
  background-image: url(./logo.png);
}
```
webpack encontra todas as referências de módulo relativas em CSS (elas começam com `./`) e as substitui pelos caminhos finais do bundle compilado. Se você cometer um erro de digitação ou excluir acidentalmente um arquivo importante, verá um erro de compilação, como quando você importa um módulo JavaScript inexistente. Os nomes de arquivo finais no bundle compilado são gerados pelo webpack a partir de hashes de conteúdo. Se o conteúdo do arquivo mudar no futuro, o webpack dará a ele um nome diferente na produção, para que você não precise se preocupar com o cache de ativos de longo prazo.

Informamos que este também é um recurso personalizado do webpack.

**Não é necessário para o React**, mas muitas pessoas gostam dele (e o React Native usa um mecanismo semelhante para imagens).

Uma maneira alternativa de lidar com ativos estáticos é descrita na próxima seção.

## Adicionando SVGs

> Nota: este recurso está disponível com `react-scripts@2.0.0` e superior, e `react@16.3.0` e superior.

Uma maneira de adicionar arquivos SVG foi descrita na seção acima. Você também pode importar SVGs diretamente como componentes React. Você pode usar qualquer uma das duas abordagens. Em seu código, seria assim:

```js
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div>
      {/* O logotipo é um componente real do React */}
      <Logo />
    </div>
  );
}
```
Isso é útil se você não quiser carregar o SVG como um arquivo separado. Não se esqueça das chaves na importação! O nome de importação `ReactComponent` é significativo e informa ao Create React App que você deseja um componente React que renderiza um SVG, em vez de seu nome de arquivo.

> **Dica:** O Componente SVG React importado aceita um prop `title` junto com outros props que um elemento `svg` aceita. Use este prop para adicionar um título acessível ao seu componente SVG.
