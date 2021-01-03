---
id: troubleshooting
title: Solução de problemas
sidebar_label: Solução de problemas
---

## `npm start` não detecta mudanças

Quando você salva um arquivo enquanto `npm start` está em execução, o navegador deve ser atualizado com o código atualizado.

Se isso não acontecer, tente uma das seguintes soluções alternativas:

- Verifique se o seu arquivo foi importado pelo seu entrypoint. O TypeScript mostrará erros em qualquer um de seus arquivos de origem, mas o webpack só recarrega seus arquivos se eles forem importados direta ou indiretamente por um de seus pontos de entrada.
- Se o seu projeto estiver em uma pasta do Dropbox, tente movê-lo para fora.
- Se o inspetor não vê um arquivo chamado `index.js` e você o faz referência pelo nome da pasta, você [precisa reiniciar o observador](https://github.com/facebook/create-react-app/issues/1164) devido a um bug do webpack.
- Alguns editores como Vim e IntelliJ têm um recurso de “gravação segura” que atualmente quebra o observador. Você precisará desativá-lo. Siga as instruções em [“Ajustando seu editor de texto”](https://webpack.js.org/guides/development/#adjusting-your-text-editor).
- Se o caminho do seu projeto contém parênteses, tente mover o projeto para um caminho sem eles. Isso é causado por um [bug do observador do webpack](https://github.com/webpack/watchpack/issues/42).
- No Linux e no macOS, você pode precisar [ajustar as configurações do sistema](https://github.com/webpack/docs/wiki/troureenshot#not-enough-watchers) para permitir mais observadores.
- Se o projeto for executado dentro de uma máquina virtual, como (um Vagrant provisionado) VirtualBox, crie um arquivo `.env` no diretório do seu projeto se ele não existir e adicione `CHOKIDAR_USEPOLLING=true` a ele. Isso garante que na próxima vez que você executar `npm start`, o observador use o modo de pesquisa, conforme necessário dentro de uma VM.

Se nenhuma dessas soluções ajudar, deixe um comentário [neste tópico](https://github.com/facebook/create-react-app/issues/659).

## `npm start` falha devido a um erro de relógio

Se você estiver usando um sistema operacional Linux e vir um erro semelhante a: `ENOSPC: System limit for number of file watchers reached`, você pode corrigir o problema aumentando a configuração `fs.inotify.max_user_watches` do seu sistema operacional.

Se você estiver executando o Debian, RedHat ou outra distribuição Linux semelhante, execute o seguinte em um terminal:

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Se você estiver executando o ArchLinux, execute o seguinte comando:

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
```

Em seguida, cole-o no seu terminal e pressione Enter para executá-lo. Você pode encontrar mais informações [aqui](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details).

## `npm test` trava ou falha no macOS Sierra

Se você executar `npm test` e o console travar após imprimir `react-scripts test` no console, pode haver um problema com a instalação do seu [Watchman](https://facebook.github.io/watchman/) conforme descrito em [facebook/ create-react-app#713](https://github.com/facebook/create-react-app/issues/713).

Recomendamos deletar `node_modules` em seu projeto e executar `npm install` (ou `yarn` se você usá-lo) primeiro. Se não ajudar, você pode tentar uma das várias soluções alternativas mencionadas nestes problemas:

- [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
- [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
- [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

É relatado que a instalação do Watchman 4.7.0 ou mais recente corrige o problema. Se você usar [Homebrew](https://brew.sh/), poderá executar estes comandos para atualizá-lo:

```
watchman shutdown-server
brew update
brew reinstall watchman
```

Você pode encontrar [outros métodos de instalação](https://facebook.github.io/watchman/docs/install.html#build-install) na página de documentação do Watchman.

Se isso ainda não ajudar, tente executar `launchctl unload -F ~/Library/ LaunchAgents/com.github.facebook.watchman.plist`.

Também há relatos de que _desinstalar_ Watchman corrige o problema. Portanto, se nada mais ajudar, remova-o do sistema e tente novamente.

## `npm run build` sai muito cedo

É relatado que `npm run build` pode falhar em máquinas com memória limitada e sem espaço de troca, o que é comum em ambientes de nuvem. Mesmo com projetos pequenos, esse comando pode aumentar o uso de RAM em seu sistema em centenas de megabytes, portanto, se você tiver menos de 1 GB de memória disponível, sua compilação provavelmente falhará com a seguinte mensagem:

> The build failed because the process exited too early. This probably means the system ran out of memory or someone called `kill -9` on the process.

Se você tem certeza de que não encerrou o processo, considere [adicionar algum espaço de troca](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04) para a máquina em que você está construindo, ou construa o projeto localmente.

## `npm run build` falha no Heroku

Isso pode ser um problema com nomes de arquivo que diferenciam maiúsculas de minúsculas.
Consulte [esta seção](deployment.md#resolving-heroku-deployment-errors).

## Locales Moment.js estão faltando

Se você usar [Moment.js](https://momentjs.com/), poderá notar que apenas a localidade em inglês está disponível por padrão. Isso ocorre porque os arquivos de localidade são grandes e você provavelmente só precisa de um subconjunto de [todas as localidades fornecidas por Moment.js](https://momentjs.com/#multiple-locale-support).

Para adicionar um local específico do Moment.js ao seu pacote, você precisa importá-lo explicitamente.

Por exemplo:

```js
import moment from 'moment';
import 'moment/locale/fr';
```

Se você estiver importando vários locais desta forma, você pode alternar entre eles posteriormente chamando `moment.locale()` com o nome do local:

```js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```

Isso só funcionará para localidades que foram importadas explicitamente antes.

## `npm run build` falha ao minificar

Antes de `react-scripts@2.0.0`, este problema era causado por `node_modules` de terceiros usando recursos JavaScript modernos porque o minificador não conseguia lidar com eles durante a construção. Isso foi resolvido compilando recursos JavaScript modernos padrão dentro de `node_modules` em `react-scripts@2.0.0` e superior.

Se você está vendo esse erro, provavelmente está usando uma versão antiga do `react-scripts`. Você pode corrigi-lo evitando uma dependência que usa sintaxe moderna ou atualizando para `react-scripts@>=2.0.0` e seguindo as instruções de migração no changelog.
