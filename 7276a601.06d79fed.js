(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(a),m=o,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||r;return a?n.a.createElement(u,c(c({ref:t},p),{},{components:a})):n.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<r;p++)s[p]=a[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var o=a(2),n=a(6),r=(a(0),a(113)),s={id:"adding-a-sass-stylesheet",title:"Adicionando Stylesheet Sass",sidebar_label:"Adicionando Stylesheet Sass"},c={unversionedId:"adding-a-sass-stylesheet",id:"adding-a-sass-stylesheet",isDocsHomePage:!1,title:"Adicionando Stylesheet Sass",description:"Nota: este recurso est\xe1 dispon\xedvel com react-scripts@2.0.0 e superior.",source:"@site/..\\docs\\adding-a-sass-stylesheet.md",slug:"/adding-a-sass-stylesheet",permalink:"/create-react-app/docs/adding-a-sass-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-a-sass-stylesheet.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609693160,sidebar_label:"Adicionando Stylesheet Sass",sidebar:"docs",previous:{title:"Adicionando uma stylesheet de CSS Modules",permalink:"/create-react-app/docs/adding-a-css-modules-stylesheet"},next:{title:"Adicionando uma redefini\xe7\xe3o de CSS",permalink:"/create-react-app/docs/adding-css-reset"}},i=[],p={rightToc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Nota: este recurso est\xe1 dispon\xedvel com ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," e superior.")),Object(r.b)("p",null,"Geralmente, recomendamos que voc\xea n\xe3o reutilize as mesmas classes CSS em componentes diferentes. Por exemplo, em vez de usar uma classe CSS ",Object(r.b)("inlineCode",{parentName:"p"},".Button")," nos componentes ",Object(r.b)("inlineCode",{parentName:"p"},"<AcceptButton>")," e ",Object(r.b)("inlineCode",{parentName:"p"},"<RejectButton>"),", recomendamos criar um componente ",Object(r.b)("inlineCode",{parentName:"p"},"<Button>")," com seus pr\xf3prios estilos ",Object(r.b)("inlineCode",{parentName:"p"},".Button"),", que ambos ",Object(r.b)("inlineCode",{parentName:"p"},"<AcceptButton> "),"e",Object(r.b)("inlineCode",{parentName:"p"}," <RejectButton>")," podem renderizar (mas ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/composition-vs-inheritance.html"}),"n\xe3o herdar"),")."),Object(r.b)("p",null,"Seguir essa regra geralmente torna os pr\xe9-processadores CSS menos \xfateis, pois recursos como mixins e aninhamento s\xe3o substitu\xeddos pela composi\xe7\xe3o de componentes. Voc\xea pode, entretanto, integrar um pr\xe9-processador CSS se achar que \xe9 valioso."),Object(r.b)("p",null,"Para usar Sass, primeiro instale ",Object(r.b)("inlineCode",{parentName:"p"},"node-sass"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install node-sass --save\n$ # ou\n$ yarn add node-sass\n")),Object(r.b)("p",null,"Agora voc\xea pode renomear ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.css")," para ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss")," e atualizar ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.js")," para importar ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss"),".\nEste arquivo e qualquer outro arquivo ser\xe1 compilado automaticamente se importado com a extens\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," ou ",Object(r.b)("inlineCode",{parentName:"p"},".sass"),"."),Object(r.b)("p",null,"Para compartilhar vari\xe1veis \u200b\u200bentre arquivos Sass, voc\xea pode usar as importa\xe7\xf5es Sass. Por exemplo, ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss")," e outros arquivos de estilo de componente podem incluir ",Object(r.b)("inlineCode",{parentName:"p"},'@import "./shared.scss";')," com defini\xe7\xf5es de vari\xe1veis."),Object(r.b)("p",null,"Isso permitir\xe1 que voc\xea fa\xe7a importa\xe7\xf5es como"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/_colors.scss'; // assumindo um diret\xf3rio de estilos em src /\n@import '~nprogress/nprogress'; // importando um arquivo css do nprogress node module\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Nota:")," Voc\xea deve prefixar as importa\xe7\xf5es de ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," com ",Object(r.b)("inlineCode",{parentName:"p"},"~")," conforme mostrado acima.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"node-sass")," tamb\xe9m suporta a vari\xe1vel ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH"),"."),Object(r.b)("p",null,"Para usar importa\xe7\xf5es relativas a um caminho que voc\xea especificar, e de ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," sem adicionar o prefixo ",Object(r.b)("inlineCode",{parentName:"p"},"~"),", voc\xea pode adicionar um ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env"})," arquivo `.env")," na raiz do projeto com a vari\xe1vel ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),". Para especificar mais diret\xf3rios, voc\xea pode adicion\xe1-los a ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH")," separados por um ",Object(r.b)("inlineCode",{parentName:"p"},":"),"como ",Object(r.b)("inlineCode",{parentName:"p"},"path1: path2:path3"),"."),Object(r.b)("p",null,"Se voc\xea definir ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),", isso permitir\xe1 que voc\xea fa\xe7a importa\xe7\xf5es como"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/colors'; // assumindo um diret\xf3rio de estilos em src/, onde o arquivo parcial _colors.scss existe.\n@import 'nprogress/nprogress'; // importar um arquivo css do modulo nprogress\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Nota:")," Para sistema operacional Windows, use a sintaxe abaixo"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SASS_PATH=./node_modules;./src\n"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Dica:")," voc\xea tamb\xe9m pode optar por usar este recurso com ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/create-react-app/docs/adding-a-css-modules-stylesheet"}),"m\xf3dulos CSS")," tamb\xe9m!")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Observa\xe7\xe3o:")," se voc\xea estiver usando o Flow, substitua a configura\xe7\xe3o ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://flow.org/en/docs/config/options/#toc-module-file-ext-string"}),"module.file_ext")," em seu ",Object(r.b)("inlineCode",{parentName:"p"},".flowconfig")," para que ele reconhe\xe7a os arquivos ",Object(r.b)("inlineCode",{parentName:"p"},".sass")," ou ",Object(r.b)("inlineCode",{parentName:"p"},".scss"),". Voc\xea tamb\xe9m precisar\xe1 incluir as configura\xe7\xf5es padr\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"module.file_ext")," para os arquivos ",Object(r.b)("inlineCode",{parentName:"p"},".js"),", ",Object(r.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(r.b)("inlineCode",{parentName:"p"},".mjs")," e ",Object(r.b)("inlineCode",{parentName:"p"},".json"),"."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"[options]\nmodule.file_ext=.js\nmodule.file_ext=.jsx\nmodule.file_ext=.mjs\nmodule.file_ext=.json\nmodule.file_ext=.sass\nmodule.file_ext=.scss\n"))))}l.isMDXComponent=!0}}]);