(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{113:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return o?n.a.createElement(m,s(s({ref:t},l),{},{components:o})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},97:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return p}));var a=o(2),n=o(6),r=(o(0),o(113)),i={id:"developing-components-in-isolation",title:"Desenvolvendo componentes isoladamente"},s={unversionedId:"developing-components-in-isolation",id:"developing-components-in-isolation",isDocsHomePage:!1,title:"Desenvolvendo componentes isoladamente",description:"Normalmente, em um aplicativo, voc\xea tem muitos componentes de UI e cada um deles tem muitos estados diferentes.",source:"@site/..\\docs\\developing-components-in-isolation.md",slug:"/developing-components-in-isolation",permalink:"/create-react-app/docs/developing-components-in-isolation",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/developing-components-in-isolation.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609691874,sidebar:"docs",previous:{title:"Configurando Seu Editor",permalink:"/create-react-app/docs/setting-up-your-editor"},next:{title:"Analisando o tamanho do bundle",permalink:"/create-react-app/docs/analyzing-the-bundle-size"}},c=[{value:"Introdu\xe7\xe3o ao Storybook",id:"introdu\xe7\xe3o-ao-storybook",children:[]},{value:"Introdu\xe7\xe3o ao Styleguidist",id:"introdu\xe7\xe3o-ao-styleguidist",children:[]}],l={rightToc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Normalmente, em um aplicativo, voc\xea tem muitos componentes de UI e cada um deles tem muitos estados diferentes.\nPor exemplo, um componente b\xe1sico de bot\xe3o pode ter os seguintes estados:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Em estado normal, com uma label de texto."),Object(r.b)("li",{parentName:"ul"},"Em modo desativado."),Object(r.b)("li",{parentName:"ul"},"Em estado de carregamento.")),Object(r.b)("p",null,"Normalmente, \xe9 dif\xedcil ver esses estados sem executar um aplicativo de amostra ou alguns exemplos."),Object(r.b)("p",null,"O Create React App n\xe3o inclui nenhuma ferramenta para isso por padr\xe3o, mas voc\xea pode adicionar ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://storybook.js.org"}),"Storybook for React")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/storybooks/storybook"}),"fonte"),") ou ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-styleguidist.js.org/"}),"React Styleguidist")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/styleguidist/react-styleguidist"}),"fonte"),") ao seu projeto. ",Object(r.b)("strong",{parentName:"p"},"Estas s\xe3o ferramentas de terceiros que permitem desenvolver componentes e ver todos os seus estados de forma isolada do seu aplicativo"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/7CIAWpB.gif",alt:"Demostra\xe7\xe3o do Storybook para React"}))),Object(r.b)("p",null,"Voc\xea tamb\xe9m pode implantar seu Storybook ou guia de estilo como um aplicativo est\xe1tico. Dessa forma, todos em sua equipe podem visualizar e revisar diferentes estados de componentes de UI sem iniciar um servidor de back-end ou criar uma conta em seu aplicativo."),Object(r.b)("h2",{id:"introdu\xe7\xe3o-ao-storybook"},"Introdu\xe7\xe3o ao Storybook"),Object(r.b)("p",null,"Storybook \xe9 um ambiente de desenvolvimento para componentes React. Ele permite que voc\xea navegue em uma biblioteca de componentes, visualize os diferentes estados de cada componente e desenvolva e teste componentes interativamente."),Object(r.b)("p",null,"Execute o seguinte comando dentro do diret\xf3rio do seu aplicativo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx -p @storybook/cli sb init\n")),Object(r.b)("p",null,"Depois disso, siga as instru\xe7\xf5es na tela."),Object(r.b)("p",null,"Saiba mais sobre o React Storybook:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://learnstorybook.com"}),"Aprender Storybook (tutorial)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://storybook.js.org/basics/introduction/"}),"Documenta\xe7\xe3o")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/storybooks/storybook"}),"Reposit\xf3rio no GitHub")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/storybooks/storybook/tree/master/addons/storyshots"}),"Snapshot Testing UI")," com Storybook + addon/storyshot")),Object(r.b)("h2",{id:"introdu\xe7\xe3o-ao-styleguidist"},"Introdu\xe7\xe3o ao Styleguidist"),Object(r.b)("p",null,"Styleguidist combina um guia de estilo, onde todos os seus componentes s\xe3o apresentados em uma \xfanica p\xe1gina com sua documenta\xe7\xe3o de props e exemplos de uso, com um ambiente para desenvolver componentes de forma isolada, semelhante ao Storybook. Em Styleguidist, voc\xea escreve exemplos em Markdown, onde cada fragmento de c\xf3digo \xe9 renderizado como um playground edit\xe1vel ao vivo."),Object(r.b)("p",null,"Primeiro, instale o Styleguidist:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save react-styleguidist\n")),Object(r.b)("p",null,"Alternativamente, voc\xea pode usar ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add react-styleguidist\n")),Object(r.b)("p",null,"Em seguida, adicione esses scripts ao seu ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "styleguide": "styleguidist server",\n+    "styleguide:build": "styleguidist build",\n     "start": "react-scripts start",\n')),Object(r.b)("p",null,"Em seguida, execute o seguinte comando dentro do diret\xf3rio do seu aplicativo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run styleguide\n")),Object(r.b)("p",null,"Depois disso, siga as instru\xe7\xf5es na tela."),Object(r.b)("p",null,"Saiba mais sobre o React Styleguidist:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/styleguidist/react-styleguidist"}),"Reposit\xf3rio no GitHub")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://react-styleguidist.js.org/docs/getting-started.html"}),"Documenta\xe7\xe3o"))))}p.isMDXComponent=!0}}]);