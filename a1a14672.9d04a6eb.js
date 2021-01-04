(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(a),m=r,u=l["".concat(c,".").concat(m)]||l[m]||b[m]||n;return a?o.a.createElement(u,i(i({ref:t},p),{},{components:a})):o.a.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<n;p++)c[p]=a[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(2),o=a(6),n=(a(0),a(113)),c={id:"fetching-data-with-ajax-requests",title:"Fetch de dados com solicita\xe7\xf5es AJAX",sidebar_label:"Fetch de dados"},i={unversionedId:"fetching-data-with-ajax-requests",id:"fetching-data-with-ajax-requests",isDocsHomePage:!1,title:"Fetch de dados com solicita\xe7\xf5es AJAX",description:"O React n\xe3o prescreve uma abordagem espec\xedfica para o fetch de dados, mas as pessoas costumam usar uma biblioteca como axios ou a API fetch() fornecido pelo navegador.",source:"@site/..\\docs\\fetching-data-with-ajax-requests.md",slug:"/fetching-data-with-ajax-requests",permalink:"/create-react-app/docs/fetching-data-with-ajax-requests",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/fetching-data-with-ajax-requests.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609700542,sidebar_label:"Fetch de dados",sidebar:"docs",previous:{title:"Solicita\xe7\xf5es de proxy de API em desenvolvimento",permalink:"/create-react-app/docs/proxying-api-requests-in-development"},next:{title:"Integrando com uma API de back-end",permalink:"/create-react-app/docs/integrating-with-an-api-backend"}},s=[],p={rightToc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"O React n\xe3o prescreve uma abordagem espec\xedfica para o fetch de dados, mas as pessoas costumam usar uma biblioteca como ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/axios/axios"}),"axios")," ou a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"API ",Object(n.b)("inlineCode",{parentName:"a"},"fetch()"))," fornecido pelo navegador."),Object(n.b)("p",null,"A fun\xe7\xe3o global ",Object(n.b)("inlineCode",{parentName:"p"},"fetch")," permite que voc\xea fa\xe7a solicita\xe7\xf5es AJAX. Ele recebe uma URL como entrada e retorna uma ",Object(n.b)("inlineCode",{parentName:"p"},"Promise")," que resolve para um objeto ",Object(n.b)("inlineCode",{parentName:"p"},"Response"),". Voc\xea pode encontrar mais informa\xe7\xf5es sobre ",Object(n.b)("inlineCode",{parentName:"p"},"fetch")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"aqui"),"."),Object(n.b)("p",null,"Uma Promise representa o resultado final de uma opera\xe7\xe3o ass\xedncrona, voc\xea pode encontrar mais informa\xe7\xf5es sobre Promises ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.promisejs.org/"}),"aqui")," e ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"aqui"),". Ambos axios e ",Object(n.b)("inlineCode",{parentName:"p"},"fetch()")," usam Promises de baixo dos panos. Voc\xea tamb\xe9m pode usar a sintaxe ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://davidwalsh.name/async-await"}),Object(n.b)("inlineCode",{parentName:"a"},"async/await"))," para reduzir o aninhamento de retorno de chamada."),Object(n.b)("p",null,"Certifique-se de que a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"API ",Object(n.b)("inlineCode",{parentName:"a"},"fetch ()"))," e ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promises")," est\xe3o dispon\xedveis nos navegadores do seu p\xfablico-alvo.\nPor exemplo, o suporte no Internet Explorer requer um ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md"}),"polyfill"),"."),Object(n.b)("p",null,"Voc\xea pode aprender mais sobre como fazer solicita\xe7\xf5es AJAX de componentes React nop ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/faq-ajax.html"}),"item do FAQ no site do React"),"."))}d.isMDXComponent=!0}}]);