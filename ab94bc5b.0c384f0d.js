(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{113:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),l=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=l(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(t),u=o,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||n;return t?r.a.createElement(m,c(c({ref:a},i),{},{components:t})):r.a.createElement(m,c({ref:a},i))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=u;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<n;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return l}));var o=t(2),r=t(6),n=(t(0),t(113)),s={id:"adding-bootstrap",title:"Adicionando Bootstrap"},c={unversionedId:"adding-bootstrap",id:"adding-bootstrap",isDocsHomePage:!1,title:"Adicionando Bootstrap",description:"Embora voc\xea n\xe3o precise usar nenhuma biblioteca espec\xedfica para integrar o Bootstrap aos aplicativos React, geralmente \xe9 mais f\xe1cil do que tentar envolver os plug-ins jQuery do Bootstrap. React Bootstrap \xe9 a op\xe7\xe3o mais popular que busca a paridade completa com o Bootstrap. reactstrap tamb\xe9m \xe9 uma boa escolha para projetos que procuram compila\xe7\xf5es menores em detrimento de alguns recursos.",source:"@site/..\\docs\\adding-bootstrap.md",slug:"/adding-bootstrap",permalink:"/create-react-app/docs/adding-bootstrap",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-bootstrap.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609691874,sidebar:"docs",previous:{title:"Usando Vari\xe1veis \u200b\u200bGlobais",permalink:"/create-react-app/docs/using-global-variables"},next:{title:"Adicionando Flow",permalink:"/create-react-app/docs/adding-flow"}},p=[{value:"Usando um tema personalizado",id:"usando-um-tema-personalizado",children:[]}],i={rightToc:p};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Embora voc\xea n\xe3o precise usar nenhuma biblioteca espec\xedfica para integrar o Bootstrap aos aplicativos React, geralmente \xe9 mais f\xe1cil do que tentar envolver os plug-ins jQuery do Bootstrap. ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-bootstrap.netlify.com/"}),"React Bootstrap")," \xe9 a op\xe7\xe3o mais popular que busca a paridade completa com o Bootstrap. ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactstrap.github.io/"}),"reactstrap")," tamb\xe9m \xe9 uma boa escolha para projetos que procuram compila\xe7\xf5es menores em detrimento de alguns recursos."),Object(n.b)("p",null,"O respectivo site de documenta\xe7\xe3o de cada projeto possui instru\xe7\xf5es detalhadas para instala\xe7\xe3o e uso. Ambos dependem do arquivo css do Bootstrap, portanto, instale-o tamb\xe9m:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save bootstrap\n")),Object(n.b)("p",null,"Alternativamente, voc\xea pode usar ",Object(n.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"yarn add bootstrap\n")),Object(n.b)("p",null,"Importe o CSS do Bootstrap e, opcionalmente, o CSS do tema do Bootstrap no in\xedcio do seu arquivo ",Object(n.b)("inlineCode",{parentName:"p"},"src/index.js"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import 'bootstrap/dist/css/bootstrap.css';\n// Coloque quaisquer outras importa\xe7\xf5es abaixo para que o CSS dos seus\n// componentes tenha preced\xeancia sobre os estilos padr\xe3o.\n")),Object(n.b)("h2",{id:"usando-um-tema-personalizado"},"Usando um tema personalizado"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Nota: este recurso est\xe1 dispon\xedvel com ",Object(n.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," e superior.")),Object(n.b)("p",null,"\xc0s vezes, voc\xea pode precisar ajustar os estilos visuais do Bootstrap (ou pacote equivalente)."),Object(n.b)("p",null,"A partir de ",Object(n.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," voc\xea pode importar arquivos ",Object(n.b)("inlineCode",{parentName:"p"},".scss"),". Isso torna poss\xedvel usar as vari\xe1veis \u200b\u200bintegradas do Sass em um pacote para prefer\xeancias de estilo globais."),Object(n.b)("p",null,"Para habilitar o ",Object(n.b)("inlineCode",{parentName:"p"},"scss")," em Create React App, voc\xea precisar\xe1 instalar o",Object(n.b)("inlineCode",{parentName:"p"}," node-sass"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save node-sass\n")),Object(n.b)("p",null,"Alternativamente, voc\xea pode usar ",Object(n.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"yarn add node-sass\n")),Object(n.b)("p",null,"Para personalizar o Bootstrap, crie um arquivo chamado ",Object(n.b)("inlineCode",{parentName:"p"},"src/custom.scss")," (ou similar) e importe a stylesheet de origem do Bootstrap. Adicione quaisquer substitui\xe7\xf5es ",Object(n.b)("em",{parentName:"p"},"antes")," dos arquivos importados. Voc\xea pode consultar a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables"}),"documenta\xe7\xe3o do Bootstrap")," para os nomes das vari\xe1veis \u200b\u200bdispon\xedveis."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scss"}),"// Substitui as vari\xe1veis \u200b\u200bpadr\xe3o antes da importa\xe7\xe3o\n$body-bg: #000;\n\n// Importar Bootstrap e suas vari\xe1veis \u200b\u200bpadr\xe3o\n@import '~bootstrap/scss/bootstrap.scss';\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"}," Nota: ")," Voc\xea deve prefixar as importa\xe7\xf5es de ",Object(n.b)("inlineCode",{parentName:"p"},"node_modules")," com ",Object(n.b)("inlineCode",{parentName:"p"},"~")," conforme mostrado acima.")),Object(n.b)("p",null,"Finalmente, importe o arquivo ",Object(n.b)("inlineCode",{parentName:"p"},".scss")," rec\xe9m-criado em vez do Bootstrap ",Object(n.b)("inlineCode",{parentName:"p"},".css")," padr\xe3o no in\xedcio do seu arquivo ",Object(n.b)("inlineCode",{parentName:"p"},"src/index.js"),", por exemplo:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import './custom.scss';\n")))}l.isMDXComponent=!0}}]);