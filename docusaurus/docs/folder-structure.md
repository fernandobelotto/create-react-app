---
id: folder-structure
title: Estrutura de Pastas
---

Após a criação, seu projeto deve ficar assim:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Para que o projeto seja construído (build), **esses arquivos devem existir com nomes exatos**:

- `public/index.html` é o página template;
- `src/index.js` é o ponto de entrada do JavaScript.

Você pode excluir ou renomear os outros arquivos.

Você pode criar subdiretórios dentro de `src`. Para reconstruções mais rápidas, apenas os arquivos dentro de `src` são processados ​​pelo webpack. Você precisa **colocar quaisquer arquivos JS e CSS dentro de `src`**, caso contrário, o webpack não os verá.

Apenas arquivos dentro de `public` podem ser usados ​​em `public/index.html`. Leia as instruções abaixo para usar recursos de JavaScript e HTML.

Você pode, no entanto, criar mais diretórios de nível superior. Eles não serão incluídos na construção de produção, portanto, você pode usá-los para coisas como documentação.

Se você tiver o Git instalado e seu projeto não fizer parte de um repositório maior, um novo repositório será inicializado, resultando em um diretório `.git` de nível superior adicional.
