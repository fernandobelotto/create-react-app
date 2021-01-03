---
id: can-i-use-decorators
title: Posso usar decorators?
---

Algumas bibliotecas populares usam [decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) em sua documentação.

Creat React App intencionalmente não suporta a sintaxe de decorator no momento porque:

- É uma proposta experimental e está sujeita a alterações (na verdade, já mudou uma vez, e vai mudar novamente).
- A maioria das bibliotecas atualmente suportam apenas a versão antiga da proposta - que nunca será um padrão.

No entanto, em muitos casos, você pode reescrever o código baseado em decorator sem decorators e obter o mesmo resultado.

Consulte estes dois tópicos para referência:

- [#214](https://github.com/facebook/create-react-app/issues/214)
- [#411](https://github.com/facebook/create-react-app/issues/411)

Criar aplicativo React adicionará suporte aos decorators quando a especificação avançar para um estágio estável.
