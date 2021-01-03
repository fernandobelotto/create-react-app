(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||n;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<n;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(2),o=r(6),n=(r(0),r(113)),c={id:"can-i-use-decorators",title:"Posso usar decorators?"},s={unversionedId:"can-i-use-decorators",id:"can-i-use-decorators",isDocsHomePage:!1,title:"Posso usar decorators?",description:"Algumas bibliotecas populares usam decorators em sua documenta\xe7\xe3o.",source:"@site/..\\docs\\can-i-use-decorators.md",slug:"/can-i-use-decorators",permalink:"/create-react-app/docs/can-i-use-decorators",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/can-i-use-decorators.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609711939,sidebar:"docs",previous:{title:"Modelos personalizados",permalink:"/create-react-app/docs/custom-templates"},next:{title:"Pr\xe9-renderizando em arquivos HTML est\xe1ticos",permalink:"/create-react-app/docs/pre-rendering-into-static-html-files"}},i=[],u={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Algumas bibliotecas populares usam ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841"}),"decorators")," em sua documenta\xe7\xe3o."),Object(n.b)("p",null,"Creat React App intencionalmente n\xe3o suporta a sintaxe de decorator no momento porque:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\xc9 uma proposta experimental e est\xe1 sujeita a altera\xe7\xf5es (na verdade, j\xe1 mudou uma vez, e vai mudar novamente)."),Object(n.b)("li",{parentName:"ul"},"A maioria das bibliotecas atualmente suportam apenas a vers\xe3o antiga da proposta - que nunca ser\xe1 um padr\xe3o.")),Object(n.b)("p",null,"No entanto, em muitos casos, voc\xea pode reescrever o c\xf3digo baseado em decorator sem decorators e obter o mesmo resultado."),Object(n.b)("p",null,"Consulte estes dois t\xf3picos para refer\xeancia:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/214"}),"#214")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/411"}),"#411"))),Object(n.b)("p",null,"Criar aplicativo React adicionar\xe1 suporte aos decorators quando a especifica\xe7\xe3o avan\xe7ar para um est\xe1gio est\xe1vel."))}p.isMDXComponent=!0}}]);