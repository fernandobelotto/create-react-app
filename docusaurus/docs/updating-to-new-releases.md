---
id: updating-to-new-releases
title: Atualizando para novos lançamentos
---

O Create React App é dividido em dois pacotes:

- `create-react-app` é um utilitário de linha de comando (CLI) global que você usa para criar novos projetos.
- `react-scripts` é uma dependência de desenvolvimento nos projetos gerados (incluindo este).

Quando você executa `npx create-react-app my-app`, ele instala automaticamente a versão mais recente de Create React App.
> Se você instalou anteriormente `create-react-app` globalmente via `npm install -g create-react-app`, visite [Getting Started](getting-started.md) para aprender sobre as etapas de instalação atuais.

Create React App cria o projeto com a versão mais recente de `react-scripts` para que você obtenha todos os novos recursos e melhorias em aplicativos recém-criados automaticamente.

Para atualizar um projeto existente para uma nova versão de `react-scripts`, [abra o changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md), encontre a versão você está atualmente (verifique `package.json` nesta pasta se não tiver certeza) e aplique as instruções de migração para as versões mais recentes.

Na maioria dos casos, alterar a versão `react-scripts` em `package.json` e executar `npm install` (ou `yarn install`) nesta pasta deve ser o suficiente, mas é bom consultar o [changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) para possíveis alterações importantes.

Comprometemo-nos a manter o mínimo de alterações significativas para que você possa atualizar os `react-scripts` sem dor.
