---
id: adding-custom-environment-variables
title: Adicionando Variáveis ​​de Ambiente Personalizadas
sidebar_label: Variáveis de Ambiente
---

> Nota: este recurso está disponível com `react-scripts@0.2.3` e superior.

Seu projeto pode consumir variáveis ​​declaradas em seu ambiente como se fossem declaradas localmente em seus arquivos JS. Por padrão, você terá `NODE_ENV` definido para você, e quaisquer outras variáveis ​​de ambiente começando com` REACT_APP_`.

> AVISO: Não armazene nenhum segredo (como chaves de API privadas) em seu aplicativo React!
>
> Variáveis ​​de ambiente são incorporadas ao build, o que significa que qualquer pessoa pode visualizá-las inspecionando os arquivos do seu aplicativo.

**As variáveis ​​de ambiente são incorporadas durante o tempo de build**. Uma vez que Create React App produz um pacote HTML/CSS/JS estático, não é possível lê-los em tempo de execução. Para lê-los em tempo de execução, você precisa carregar o HTML na memória do servidor e substituir os marcadores no tempo de execução, conforme [descrito aqui](title-and-meta-tags.md#injecting-data-from-the-server-into-the-page). Como alternativa, você pode reconstruir o aplicativo no servidor sempre que alterá-los.

> Nota: Você deve criar variáveis ​​de ambiente personalizadas começando com `REACT_APP_`. Quaisquer outras variáveis, exceto `NODE_ENV` serão ignoradas para evitar acidentalmente [expor uma chave privada na máquina que pode ter o mesmo nome](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). A alteração de quaisquer variáveis ​​de ambiente exigirá que você reinicie o servidor de desenvolvimento se ele estiver em execução.

Essas variáveis ​​de ambiente serão definidas para você em `process.env`. Por exemplo, ter uma variável de ambiente chamada `REACT_APP_NOT_SECRET_CODE` será exposta em seu JS como` process.env.REACT_APP_NOT_SECRET_CODE`.

Também existe uma variável de ambiente embutida chamada `NODE_ENV`. Você pode ler em `process.env.NODE_ENV`. Quando você executa `npm start`, é sempre igual a `'development'`, quando você executa `npm test` é sempre igual a `'test'`, e quando você executa `npm run build` para fazer uma produção do build, é sempre igual a `'production'`. **Você não pode sobrescrever `NODE_ENV` manualmente.** Isso evita que os desenvolvedores acidentalmente implantem um build de desenvolvimento lento para produção.

Essas variáveis ​​de ambiente podem ser úteis para exibir informações condicionalmente com base em onde o projeto é implantado ou consumir dados confidenciais que residem fora do controle de versão.

Primeiro, você precisa ter variáveis ​​de ambiente definidas. Por exemplo, digamos que você queira consumir uma variável de ambiente dentro de um `<form>`:

```jsx
render() {
  return (
    <div>
      <small>Você está executando este aplicativo em modo de <b>{process.env.NODE_ENV}</b>.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}
```

Durante a construção, `process.env.REACT_APP_NOT_SECRET_CODE` será substituído pelo valor atual da variável de ambiente `REACT_APP_NOT_SECRET_CODE`. Lembre-se de que a variável `NODE_ENV` será configurada para você automaticamente.

Ao carregar o aplicativo no navegador e inspecionar o `<input>`, você verá seu valor definido como `abcdef`, e o texto em negrito mostrará o ambiente fornecido ao usar `npm start`:

<!-- prettier-ignore-start -->

```html
<div>
  <small>Você está executando este aplicativo em mode de <b>development</b>.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

<!-- prettier-ignore-end -->

O formulário acima está procurando por uma variável de ambiente chamada `REACT_APP_NOT_SECRET_CODE`. Para consumir esse valor, precisamos defini-lo no ambiente. Isso pode ser feito de duas maneiras: em seu shell ou em um arquivo `.env`. Ambas as formas são descritas nas próximas seções.

Ter acesso ao `NODE_ENV` também é útil para realizar ações condicionalmente:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```
Ao compilar o aplicativo com `npm run build`, a etapa de minificação eliminará essa condição e o pacote resultante será menor.

## Referenciando Variáveis ​​de Ambiente no HTML

> Nota: este recurso está disponível com `react-scripts@0.9.0` e superior.

Você também pode acessar as variáveis ​​de ambiente começando com `REACT_APP_` em `public/index.html`. Por exemplo:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Observe que as advertências da seção acima se aplicam:

- Além de algumas variáveis ​​embutidas (`NODE_ENV` e` PUBLIC_URL`), os nomes das variáveis ​​devem começar com `REACT_APP_` para funcionar.
- As variáveis ​​de ambiente são injetadas no momento do build. Se você precisar injetá-los em tempo de execução, [siga esta abordagem](title-and-meta-tags.md#generating-dynamic-meta-tags-on-the-server).

## Adicionando Variáveis ​​de Ambiente Temporárias em Seu Shell

A definição de variáveis ​​de ambiente pode variar entre os sistemas operacionais. Também é importante saber que essa maneira é temporária durante a duração da sessão shell.

### Windows (cmd.exe)

```cmd
set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
```

(Observação: as aspas em torno da atribuição de variável são necessárias para evitar um espaço em branco à direita.)

### Windows (Powershell)

```Powershell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

### Linux, macOS (Bash)

```sh
REACT_APP_NOT_SECRET_CODE=abcdef npm start
```

## Adicionando Variáveis ​​de Ambiente de Desenvolvimento em `.env`

> Nota: este recurso está disponível com `react-scripts@0.5.0` e superior.

Para definir variáveis ​​de ambiente permanentes, crie um arquivo chamado `.env` na raiz do seu projeto:

```
REACT_APP_NOT_SECRET_CODE=abcdef
```

> Nota: Você deve criar variáveis ​​de ambiente personalizadas começando com `REACT_APP_`. Quaisquer outras variáveis, exceto `NODE_ENV` serão ignoradas para evitar [a exposição acidental de uma chave privada na máquina que pode ter o mesmo nome](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). A alteração de quaisquer variáveis ​​de ambiente exigirá que você reinicie o servidor de desenvolvimento se ele estiver em execução.

> Nota: Você precisa reiniciar o servidor de desenvolvimento após alterar os arquivos `.env`.

Arquivos `.env` **devem ser** verificados no controle de origem (com a exclusão de` .env*.local`).

### Que outros arquivos `.env` podem ser usados?

> Nota: este recurso está **disponível com `react-scripts@1.0.0` e superior**.

- `.env`: Padrão.
- `.env.local`: Substituições locais. **Este arquivo é carregado para todos os ambientes, exceto teste.**
- `.env.development`, `.env.test`, `.env.production`: Configurações específicas do ambiente.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Substituições locais de configurações específicas do ambiente.

Os arquivos à esquerda têm mais prioridade do que os arquivos à direita:

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

Essas variáveis ​​funcionarão como padrões se a máquina não as definir explicitamente.

Consulte a [documentação do dotenv](https://github.com/motdotla/dotenv) para obter mais detalhes.

> Observação: se você estiver definindo variáveis ​​de ambiente para desenvolvimento, seu CI e/ou plataforma de hospedagem provavelmente precisará estes também definidos.
> Consulte sua documentação para saber como fazer isso. Por exemplo, consulte a documentação para [Travis CI](https://docs.travis-ci.com/user/environment-variables/) ou [Heroku](https://devcenter.heroku.com/articles/config-vars).

### Expandindo variáveis ​​de ambiente em `.env`

> Nota: este recurso está disponível com `react-scripts@1.1.0` e superior.

Expanda as variáveis ​​que já estão em sua máquina para uso em seu arquivo `.env` (usando [dotenv-expand](https://github.com/motdotla/dotenv-expand)).

Por exemplo, para obter a variável de ambiente `npm_package_version`:

```
REACT_APP_VERSION=$npm_package_version
# também funciona:
# REACT_APP_VERSION=${npm_package_version}
```

Ou expanda as variáveis ​​locais para o arquivo `.env` atual:

```
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```
