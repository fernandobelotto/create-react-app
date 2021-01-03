(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return a?n.a.createElement(b,i(i({ref:t},s),{},{components:a})):n.a.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),o=(a(0),a(113)),c={id:"integrating-with-an-api-backend",title:"Integrando com uma API de back-end",sidebar_label:"Integrando com uma API"},i={unversionedId:"integrating-with-an-api-backend",id:"integrating-with-an-api-backend",isDocsHomePage:!1,title:"Integrando com uma API de back-end",description:"Estes tutoriais ir\xe3o ajud\xe1-lo a integrar seu aplicativo com uma API de backend rodando em outra porta, usando fetch () para acess\xe1-la.",source:"@site/..\\docs\\integrating-with-an-api-backend.md",slug:"/integrating-with-an-api-backend",permalink:"/create-react-app/docs/integrating-with-an-api-backend",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/integrating-with-an-api-backend.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609700542,sidebar_label:"Integrando com uma API",sidebar:"docs",previous:{title:"Fetch de dados com solicita\xe7\xf5es AJAX",permalink:"/create-react-app/docs/fetching-data-with-ajax-requests"},next:{title:"Title and Meta Tags",permalink:"/create-react-app/docs/title-and-meta-tags"}},p=[{value:"Node",id:"node",children:[]},{value:"Ruby on Rails",id:"ruby-on-rails",children:[]},{value:"Plataforma de API (PHP e Symfony)",id:"plataforma-de-api-php-e-symfony",children:[]},{value:"C# (ASP.NET Core)",id:"c-aspnet-core",children:[]}],s={rightToc:p};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Estes tutoriais ir\xe3o ajud\xe1-lo a integrar seu aplicativo com uma API de backend rodando em outra porta, usando ",Object(o.b)("inlineCode",{parentName:"p"},"fetch ()")," para acess\xe1-la."),Object(o.b)("h2",{id:"node"},"Node"),Object(o.b)("p",null,"Confira ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/"}),"este tutorial"),".\nVoc\xea pode encontrar o reposit\xf3rio GitHub complementar ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fullstackreact/food-lookup-demo"}),"aqui"),"."),Object(o.b)("h2",{id:"ruby-on-rails"},"Ruby on Rails"),Object(o.b)("p",null,"Confira ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"}),"este tutorial"),".\nVoc\xea pode encontrar o reposit\xf3rio GitHub complementar ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fullstackreact/food-lookup-demo-rails"}),"aqui"),"."),Object(o.b)("h2",{id:"plataforma-de-api-php-e-symfony"},"Plataforma de API (PHP e Symfony)"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-platform.com"}),"API Platform")," \xe9 uma estrutura projetada para construir projetos baseados em API.\nEle permite a cria\xe7\xe3o de APIs de hiperm\xeddia e GraphQL em minutos.\nEle \xe9 fornecido com um gerador oficial de Progressive Web App, bem como uma interface de administra\xe7\xe3o din\xe2mica, ambos desenvolvidos para Create React App.\nConfira ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-platform.com/docs/distribution"}),"este tutorial"),"."),Object(o.b)("h2",{id:"c-aspnet-core"},"C# (ASP.NET Core)"),Object(o.b)("p",null,"ASP.NET Core tem um modelo de projeto React que usa o Create React App. Verifique ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react"}),"a documenta\xe7\xe3o"),"."))}u.isMDXComponent=!0}}]);