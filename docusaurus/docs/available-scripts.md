---
id: available-scripts
title: Scripts Disponíveis
sidebar_label: Scripts Disponíveis
---

No diretório do projeto, você pode executar:

## `npm start`

Executa o aplicativo no modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. Você também verá quaisquer erros de lint no console.

## `npm test`

Inicia o executor de teste no modo de observação interativo. Consulte a seção sobre [execução de testes](running-tests.md) para obter mais informações.

## `npm run build`

Compila o aplicativo para produção na pasta `build`. Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. Se necessário, os nomes das classes e das funções podem ser ativados para fins de criação de perfil. Consulte a seção [build de produção](production-build.md) para obter mais informações.

Seu aplicativo está pronto para ser implantado! Consulte a seção sobre [implantação](deployment.md) para obter mais informações sobre como implantar seu aplicativo em provedores de hospedagem populares.

## `npm run eject`

**Nota: esta é uma operação unilateral. Depois de `ejetar`, você não pode mais voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a dependência única de compilação de seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) em seu projeto como dependências em `package.json`. Tecnicamente, a distinção entre dependências e dependências de desenvolvimento é bastante arbitrária para aplicativos front-end que produzem pacotes estáticos.

Além disso, costumava causar problemas com algumas plataformas de hospedagem que não instalavam dependências de desenvolvimento (e, portanto, não eram capazes de construir o projeto no servidor ou testá-lo antes da implantação). Você é livre para reorganizar suas dependências no `package.json` como achar necessário.

Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está sozinho.

Você não precisa usar `ejetar`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para ela.
