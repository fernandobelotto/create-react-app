(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||n;return r?o.a.createElement(m,s(s({ref:t},p),{},{components:r})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(2),o=r(6),n=(r(0),r(113)),i={id:"post-processing-css",title:"P\xf3s-processamento CSS"},s={unversionedId:"post-processing-css",id:"post-processing-css",isDocsHomePage:!1,title:"P\xf3s-processamento CSS",description:"Esta configura\xe7\xe3o de projeto minimiza seu CSS e adiciona prefixos de fornecedor a ele automaticamente por meio do Autoprefixer para que voc\xea n\xe3o precise se preocupar com isso.",source:"@site/..\\docs\\post-processing-css.md",slug:"/post-processing-css",permalink:"/create-react-app/docs/post-processing-css",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/post-processing-css.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609691874,sidebar:"docs",previous:{title:"Adicionando uma redefini\xe7\xe3o de CSS",permalink:"/create-react-app/docs/adding-css-reset"},next:{title:"Adicionando Imagens, Fontes, e Arquivos",permalink:"/create-react-app/docs/adding-images-fonts-and-files"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Esta configura\xe7\xe3o de projeto minimiza seu CSS e adiciona prefixos de fornecedor a ele automaticamente por meio do ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/autoprefixer"}),"Autoprefixer")," para que voc\xea n\xe3o precise se preocupar com isso."),Object(n.b)("p",null,"Suporte para novos recursos CSS como a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/all"}),"propriedade ",Object(n.b)("inlineCode",{parentName:"a"},"all")),", ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/css-break-3/#breaking-controls"}),"propriedades ",Object(n.b)("inlineCode",{parentName:"a"},"break")),", ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"}),"propriedades personalizadas")," e ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/mediaqueries-4/#range-context"}),"media query ranges")," s\xe3o automaticamente polyfilled para adicionar suporte para navegadores mais antigos."),Object(n.b)("p",null,"Voc\xea pode personalizar seus navegadores de suporte de destino ajustando a chave ",Object(n.b)("inlineCode",{parentName:"p"},"browserslist")," em ",Object(n.b)("inlineCode",{parentName:"p"},"package.json")," de acordo com a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/browserslist/browserslist#readme"}),"especifica\xe7\xe3o de Browserslist"),"."),Object(n.b)("p",null,"Por exemplo, este:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".App {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n")),Object(n.b)("p",null,"se torna isso:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".App {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n")),Object(n.b)("p",null,"Se voc\xea precisar desativar o autoprefixing por algum motivo, ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/autoprefixer#disabling"}),"siga esta se\xe7\xe3o"),"."),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"}),"Layout de CSS Grid")," a prefixa\xe7\xe3o est\xe1 desabilitada por padr\xe3o, mas ",Object(n.b)("strong",{parentName:"p"},"n\xe3o")," tira a prefixa\xe7\xe3o manual.\nSe voc\xea gostaria de aderir ao prefixo CSS Grid, ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie"}),"primeiro familiarize-se com suas limita\xe7\xf5es"),"."),Object(n.b)("p",null,"Para habilitar a prefixa\xe7\xe3o CSS Grid, adicione ",Object(n.b)("inlineCode",{parentName:"p"},"/* autoprefixer grid:autoplace */")," no topo de seu arquivo CSS."))}l.isMDXComponent=!0}}]);